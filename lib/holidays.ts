const XLSX = require('xlsx');
import { join } from 'path';
import { readFileSync } from 'fs';

// Holiday management system for LetsTransport
export interface Holiday {
  date: string;
  day: string;
  holiday: string;
  state: string;
  type: 'National' | 'State' | 'Optional';
}

function normalize(str: string) {
  return str.trim().toLowerCase();
}

function stateMatches(query: string, state: string) {
  // Allow partial, case-insensitive, trimmed match
  return normalize(state).includes(normalize(query)) || normalize(query).includes(normalize(state));
}

// Function to read holiday data from Excel file
export function loadHolidaysFromExcel(): Holiday[] {
  try {
    const filePath = join(process.cwd(), 'public', 'holidays-2025.xlsx');
    console.log('[Holiday Debug] Reading Excel file from:', filePath);
    
    // Read file as buffer first
    const fileBuffer = readFileSync(filePath);
    console.log('[Holiday Debug] File buffer size:', fileBuffer.length);
    
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    console.log('[Holiday Debug] Workbook sheets:', workbook.SheetNames);
    
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
    console.log('[Holiday Debug] Total rows in Excel:', data.length);
    console.log('[Holiday Debug] First few rows:', data.slice(0, 5));
    
    const holidays: Holiday[] = [];
    for (let i = 2; i < data.length; i++) {
      const row = data[i];
      if (row && row.length >= 5) {
        const state = row[0]?.toString().trim();
        const holidayName = row[1]?.toString().trim();
        const dateCell = row[2];
        const weekDay = row[3]?.toString().trim();
        const typeCell = row[4]?.toString().trim();
        let dateStr = '';
        if (typeof dateCell === 'number') {
          const date = XLSX.SSF.parse_date_code(dateCell);
          dateStr = `${date.y}-${String(date.m).padStart(2, '0')}-${String(date.d).padStart(2, '0')}`;
        } else if (typeof dateCell === 'string') {
          const date = new Date(dateCell);
          if (!isNaN(date.getTime())) {
            dateStr = date.toISOString().split('T')[0];
          }
        }
        if (state && holidayName && dateStr) {
          holidays.push({
            date: dateStr,
            day: weekDay,
            holiday: holidayName,
            state,
            type: typeCell === 'Regional' ? 'State' : 'National',
          });
        }
      }
    }
    console.log('[Holiday Debug] Loaded holidays:', holidays.slice(0, 5));
    return holidays;
  } catch (error) {
    console.error('Error loading holidays from Excel:', error);
    return [];
  }
}

// Load holidays from Excel file (will be loaded dynamically)
export let holidays2025: Holiday[] = [];

// States where LetsTransport operates
export const operationalStates = [
  'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Telangana', 
  'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Punjab',
  'Haryana', 'Andhra Pradesh', 'Kerala', 'Madhya Pradesh', 'Bihar',
  'Odisha', 'Assam', 'Jharkhand', 'Chhattisgarh', 'Uttarakhand'
];

// Function to refresh holiday data (useful for development)
export function refreshHolidayData(): Holiday[] {
  return loadHolidaysFromExcel();
}

export function isHolidayQuestion(message: string): boolean {
  const holidayKeywords = [
    'holiday', 'holidays', 'next holiday', 'next holidays', 'when is holiday', 'holiday list',
    'public holiday', 'bank holiday', 'office holiday', 'holiday calendar',
    'when is the next holiday', 'upcoming holiday', 'holiday schedule', 
    'holidays in this month', 'holidays in', 'tell me holidays', 'show me holidays',
    'tell me next holidays', 'when its coming', 'when is coming'
  ];
  
  const lowerMessage = message.toLowerCase();
  const isHolidayQuestion = holidayKeywords.some(keyword => lowerMessage.includes(keyword));
  console.log(`[Holiday Debug] isHolidayQuestion('${message}') = ${isHolidayQuestion}`);
  return isHolidayQuestion;
}

export function isStateQuestion(message: string): boolean {
  const stateKeywords = [
    'state', 'which state', 'maharashtra', 'delhi', 'karnataka', 'tamil nadu',
    'telangana', 'gujarat', 'rajasthan', 'uttar pradesh', 'west bengal', 'punjab'
  ];
  
  const lowerMessage = message.toLowerCase();
  return stateKeywords.some(keyword => lowerMessage.includes(keyword));
}

export function getNextHoliday(state?: string, holidays?: Holiday[]): Holiday | null {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  
  const holidayData = holidays || loadHolidaysFromExcel();
  console.log(`[Holiday Debug] getNextHoliday: Loaded ${holidayData.length} holidays`);
  let filteredHolidays = holidayData.filter(holiday => {
    const isAfterToday = holiday.date >= todayStr;
    const isNational = holiday.type === 'National';
    const isStateMatch = state && stateMatches(state, holiday.state);
    return isAfterToday && (isNational || isStateMatch);
  });
  
  console.log(`[Holiday Debug] Searching for next holiday. State: '${state}'. Found:`, filteredHolidays.slice(0, 3));
  return filteredHolidays.length > 0 ? filteredHolidays[0] : null;
}

export function getAllHolidays(state?: string, holidays?: Holiday[]): Holiday[] {
  const holidayData = holidays || loadHolidaysFromExcel();
  if (state) {
    const result = holidayData.filter(holiday =>
      holiday.type === 'National' || stateMatches(state, holiday.state)
    );
    console.log(`[Holiday Debug] All holidays for state '${state}':`, result.slice(0, 5));
    return result;
  }
  return holidayData;
}

export function getHolidayAnswer(question: string, state?: string, holidays?: Holiday[]): string {
  const lowerQuestion = question.toLowerCase();
  const holidayData = holidays || loadHolidaysFromExcel();
  console.log(`[Holiday Debug] getHolidayAnswer called. Question: '${question}', State: '${state}', Holidays loaded: ${holidayData.length}`);
  
  if (lowerQuestion.includes('next holiday') || lowerQuestion.includes('next holidays') || lowerQuestion.includes('when is the next holiday') || lowerQuestion.includes('upcoming holiday') || lowerQuestion.includes('tell me next holidays') || lowerQuestion.includes('when its coming')) {
    const nextHoliday = getNextHoliday(state, holidayData);
    if (nextHoliday) {
      const date = new Date(nextHoliday.date);
      const today = new Date();
      const currentMonth = today.getMonth();
      const holidayMonth = date.getMonth();
      const daysUntilHoliday = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      
      const formattedDate = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      
      let response = '';
      
      // Check if it's in the same month
      if (currentMonth === holidayMonth) {
        if (daysUntilHoliday <= 7) {
          response = `🎉 Exciting news! ${nextHoliday.holiday} is coming up very soon on ${formattedDate}! Only ${daysUntilHoliday} days to go!`;
        } else {
          response = `😊 Great! ${nextHoliday.holiday} is this month on ${formattedDate}. Something to look forward to!`;
        }
      } else if (holidayMonth === currentMonth + 1) {
        response = `😔 Aww, no holidays this month, but don't worry! ${nextHoliday.holiday} is coming next month on ${formattedDate}. Hang in there!`;
      } else {
        response = `📅 The next holiday is ${nextHoliday.holiday} on ${formattedDate}.`;
      }
      
      if (state) {
        return response;
      } else {
        return `${response} Which state are you asking about?`;
      }
    } else {
      return "😔 No upcoming holidays found for this year. Which state are you asking about?";
    }
  }
  
  if (lowerQuestion.includes('holiday list') || lowerQuestion.includes('all holidays') || lowerQuestion.includes('holidays in this month') || lowerQuestion.includes('holidays in')) {
    const today = new Date();
    let targetMonth = today.getMonth();
    let targetYear = today.getFullYear();
    
    // Month names for reference
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const fullMonthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    
    // Check for "next month" first
    if (lowerQuestion.includes('next month') || lowerQuestion.includes('next months')) {
      targetMonth = today.getMonth() + 1;
      if (targetMonth > 11) {
        targetMonth = 0;
        targetYear = today.getFullYear() + 1;
      }
      console.log(`DEBUG: Detected "next month" query. Current month: ${today.getMonth()}, Target month: ${targetMonth}, Target year: ${targetYear}`);
    } else {
      // Check if user specified a specific month (like "Aug", "August", etc.)
      for (let i = 0; i < monthNames.length; i++) {
        if (lowerQuestion.includes(monthNames[i]) || lowerQuestion.includes(fullMonthNames[i])) {
          targetMonth = i;
          break;
        }
      }
    }
    
    const holidaysInMonth = holidayData.filter(h => {
      const d = new Date(h.date);
      return d.getMonth() === targetMonth && d.getFullYear() === targetYear && (!state || stateMatches(state, h.state) || h.type === 'National');
    });
    
    if (holidaysInMonth.length > 0) {
      const holidayList = holidaysInMonth.map(h =>
        `${h.holiday} (${new Date(h.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})`
      ).join(', ');
      const monthName = fullMonthNames[targetMonth];
      const response = `Here are the holidays for ${monthName}${state ? ' in ' + state : ''}: ${holidayList}`;
      console.log(`DEBUG: Found ${holidaysInMonth.length} holidays for ${monthName}. Response: ${response}`);
      return response;
    } else {
      const monthName = fullMonthNames[targetMonth];
      const response = `No holidays in ${monthName}${state ? ' in ' + state : ''}.`;
      console.log(`DEBUG: No holidays found for ${monthName}. Response: ${response}`);
      return response;
    }
  }
  
  return "I can help you with holiday information! Which state are you asking about?";
}

export function shouldAskForState(question: string): boolean {
  return isHolidayQuestion(question) && !operationalStates.some(state => question.toLowerCase().includes(state.toLowerCase()));
} 