import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'data', 'holidays-2025.xlsx');
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // 'Sheet2'
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
    
    const holidays: any[] = [];
    
    // Skip header rows (first 2 rows)
    for (let i = 2; i < data.length; i++) {
      const row = data[i];
      if (row && row.length >= 5) {
        const state = row[0];
        const holidayName = row[1];
        const dateCell = row[2];
        const weekDay = row[3];
        const type = row[4];
        
        if (state && holidayName && dateCell) {
          // Convert Excel date to string format
          let dateStr = '';
          if (typeof dateCell === 'number') {
            // Excel date number
            const date = XLSX.SSF.parse_date_code(dateCell);
            dateStr = `${date.y}-${String(date.m).padStart(2, '0')}-${String(date.d).padStart(2, '0')}`;
          } else if (typeof dateCell === 'string') {
            // Try to parse string date
            const date = new Date(dateCell);
            if (!isNaN(date.getTime())) {
              dateStr = date.toISOString().split('T')[0];
            }
          }
          
          if (dateStr) {
            holidays.push({
              date: dateStr,
              day: weekDay?.toString() || '',
              holiday: holidayName?.toString() || '',
              state: state?.toString() || '',
              type: type?.toString() || 'National'
            });
          }
        }
      }
    }
    
    return NextResponse.json({ holidays });
  } catch (error) {
    console.error('Error reading holidays:', error);
    return NextResponse.json({ holidays: [] }, { status: 500 });
  }
} 