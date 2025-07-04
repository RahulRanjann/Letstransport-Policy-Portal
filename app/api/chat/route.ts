import { streamText } from "ai"
import { google } from "@ai-sdk/google"
import { policies, getDarwinboxAnswerForQuery } from "@/lib/policies"
import { Resend } from 'resend'

export async function POST(req: Request) {
  const { messages, userName, userEmail } = await req.json()

  // Get the last user message
  const lastUserMessage = messages[messages.length - 1]?.content

  if (lastUserMessage) {
    const darwinboxAnswer = getDarwinboxAnswerForQuery(lastUserMessage)
    // Check if the answer is specific and not the generic fallback
    if (
      darwinboxAnswer &&
      !darwinboxAnswer.startsWith("I can help you with Darwinbox-related questions like:")
    ) {
      // Use streamText with the darwinbox answer to maintain compatibility
      const result = await streamText({
        model: google("gemini-1.5-flash"),
        prompt: `Return the following answer exactly as provided, without any modifications or additions: ${darwinboxAnswer}`,
      })
      return result.toDataStreamResponse()
    }
  }

  // Create context from all policies
  const policyContext = policies
    .map((policy) => {
      let policyString = `Policy: ${policy.title}\nCategory: ${policy.category}\nDescription: ${policy.description}\nContent: ${policy.content}`
      if (policy.applicationSteps) {
        policyString += `\nApplication Steps: ${policy.applicationSteps}`
      }
      return policyString + "\n---"
    })
    .join("\n\n") + `

Probation

What is the probation period? / Will I get confirmation of probation after my official probation?
Ans: The probation period is 3 months. Once your probation is confirmed, you will be notified via email through Darwinbox. Please note that the manager has the authority to extend the probation period if the performance is not up to the expected standards.

What happens if I want to resign during the probation period?
Ans: Perhaps, the notice period will change based on the grade.

Salary, Reimbursement & Benefits

What is the salary credit date?
Ans: Salary is credited on the 1st of every month. In case the 1st falls on a non-working day or a bank holiday, it will be processed on the next working day.

Where can I view my salary breakup and CTC?
Ans: Login to Darwinbox>> Compensation>> Show value>> Confirm>> Show values>> CTC View

How do I submit bills for travel/food/mobile/relocation reimbursement?
Ans: Login to Darwinbox>> Reimbursement>> Create>> Create Expense>> Select Expense Type>> Fill the form>> Save>> Select Recorded Expense>> Create Reimbursement

What are the eligibility of the claims?
Policy to show specifically.

Am I eligible for food reimbursement?
Ans: Food reimbursement is not applicable for travel within the city. However, if you are travelling outstation, you can claim up to ₹800 per day in metro cities such as NCR, Bangalore, Chennai, Mumbai, and Hyderabad, and up to ₹600 per day in non-metro cities.

What are the timelines and processes for reimbursement cycles?
Ans: Bills for a particular month must be submitted by the 5th of the following month. Example: If a claim was incurred in September 2024, it should be submitted by the 5th of October 2024. Disbursement will be done on or before 20th of the following month.

Medical Insurance
One of the benefits you get based on the current salary.
Ans: i) If your gross monthly salary is INR 21,000 or below, you are eligible for ESIC coverage.
ii) If your fixed CTC is below INR 5 lakhs, you will be covered under a Group Medical Insurance policy of INR 1 lakh for yourself. If you are married, your spouse and up to two children will also be covered.
iii) If your fixed CTC is INR 5 lakhs or above, you will be covered under a Group Medical Insurance policy of INR 13 lakhs. This includes coverage for yourself, your parents, and if married, your spouse and up to two children.

How do I access my insurance card? / how do I access Plum?
Ans: You can access your insurance details and e-card by logging in to https://app.plumhq.com/dashboard using your official email ID.

How do I add a dependent (spouse/parent) to my insurance?
A spouse can be added within 30 days from the date of marriage, and a child can be added within 30 days from the date of birth. Mid-term additions beyond this window are not allowed. For further assistance, you may email your respective HRBP.

Leave & Attendance

What is the official leave policy (casual, sick, earned, comp-off)?
Policy

How many leaves can be carried forward annually?
Need to check.

What if i miss to apply for Field Duty or WFH? / What if i had missed marking attendance?
Ans: You can regularize your attendance 3 times in a month between 22nd to 21st, here is the step. Login to darwinbox>> Leaves>> Exception for attendance>> Apply Leave>> Select Leave Type "Exceptions for Attendance Request" >> Select the right Sub category>> Date>> message>> Submit

Darwinbox Access & Login

How do I access Darwinbox?
Ans: To access Darwinbox:
1. Visit https://diptab.darwinbox.in/
2. Use your company email address (e.g., your.name@letstransport.com)
3. Enter your password
4. If you're logging in for the first time, you'll need to set up your password

What if I don't have access to Darwinbox?
Ans: If you don't have access to Darwinbox:
1. Contact your HRBP (HR Business Partner)
2. Email HR at hr@letstransport.com
3. Provide your employee ID and department details
4. HR will help you set up your account and provide necessary access

I forgot my Darwinbox password. What should I do?
Ans: If you've forgotten your password:
1. Go to https://diptab.darwinbox.in/
2. Click on "Forgot Password"
3. Enter your company email address
4. Follow the password reset instructions sent to your email
5. If you face any issues, contact HR at hr@letstransport.com

What can I do in Darwinbox?
Ans: In Darwinbox, you can:
1. Apply for leaves
2. View your salary details and CTC
3. Submit reimbursement claims
4. Mark attendance
5. View company policies
6. Access your insurance details
7. Update personal information
8. View your performance reviews

`;

  const organizationalContext = `
Letstransport is a new-age, reliable logistics platform aiming to disrupt on-time delivery with last-mile efficiency. It was founded in April 2015 and provides professional, economical, and structured logistics solutions for enterprises and individual customers. The company focuses on making logistics easy for everyone, covering first, mid, and last-mile delivery.

Key Milestones & Information:
- Acquired Shifter (B2C Logistics Platform) in June 2015.
- Launched operations in Bangalore (Oct 2015), Delhi (Oct 2015), Chennai (Mar 2016), Hyderabad (Jul 2016), Mumbai (Jan 2017), and many other cities across India.
- Achieved 100k+ registered vehicles by August 2021.
- Became pioneers in the Electric Vehicles (EV) revolution in India (Dec 2020) and had 250+ EV vehicles by Jan 2022 (one of the largest EV fleets in India).
- Introduced Fuel Cards and Insurance for truckers in Nov 2019.
- Launched finance programs for truckers in Feb 2021.
- Key team members include: Sudarshan Ravi (Co-founder & CPO), Prateek Pujari (COO), and Parijat Rathore (CTO).
- Backed by investors like Bertelsmann India Investments, Rebright Partners, Mitsubishi Corporation, and others.
- For more details, visit the official website: [LetsTransport About Us](https://letstransport.in/about-us/)

**About the CEO: Pushkar Singh**
Pushkar Singh, the Chief Executive Officer of LetsTransport, co-founded the company in 2015 with the vision of enabling last-mile delivery through a large network of mini trucks in India. It was Pushkar's direct confrontation with inefficiencies in the logistics sector, during his ITC tenure that sowed the seeds of the techno-logistics platform. Under his stellar leadership, the company has been able to create aspiration and employment scalability for truckers in India. Today, LetsTransport is one of the biggest regional logistics players in the country, operating in 10 cities and catering to 100+ enterprises with a network of over 35,000 trucks.
He set on a mission to build a brand that offers efficient first, mid and last-mile delivery since then. His two other IIT batchmates Sudarshan Ravi and Ankit Parasher also believed in delivering efficient services to industries including fast-moving consumer goods, e-commerce, and retail.
In his initial years of career, Pushkar Singh worked at ITC Limited as an Assistant Manager, Operations. Pushkar holds Bachelors & Masters's degree in Mechanical Engineering from the Indian Institute of Technology (IIT), Kharagpur. He is a recipient of the prestigious Forbes 30 under 30 Asia 2017, Forbes 30 under 30 India 2019 and BW Techtor Award 2018.
In addition to his day job, Pushkar likes to play water sports, read books and watch movies.

PREVIOUS ORGANIZATIONAL STRUCTURE INFO (470 Total Employees):
MAIN DEPARTMENTS:
- Business Management (59 employees): Intra1, Intra2, UpCountry(C&C), UpCountry(Projects)
- Business Operations (217 employees): Intra1, Intra2, Low Credit, UpCountry divisions
- Central Sales (10 employees): Acquisition teams, UpCountry C&C, Intra2, Farming
- Client Relations (24 employees): CRE teams for Intra1, Intra2, Low Credit, UpCountry, CRM
- Control Room (14 employees): Intra1, UpCountry operations
- Finance (45 employees): Accounting, Business Finance, Client Onboarding, Collections, Controllership, Invoicing, Payments
- General Management (7 employees)
- Technology (15 employees)
- People & Culture (15 employees)
- MIS (11 employees): Intra2, UpCountry divisions

SPECIALIZED DEPARTMENTS:
- Field Operations (3 employees): Intra1, Intra2, UpCountry
- Central Operations, Central Sourcing, City Management, Customer Service
- FQLC, HouseKeeping, Operations, Operations Design, Regional Management
- Small and Medium Enterprises, Supply, Corporate Development
- Driver (2 employees), POD (12 employees), Partner Support (5 employees)
- New Initiative (31 employees), Vigilance (2 employees)

GEOGRAPHIC DIVISIONS:
- Intra1: City/local operations
- Intra2: Secondary city operations  
- UpCountry: Rural/remote area operations
- Low Credit: Specialized credit management
`;

  // Function to send email to HR when AI doesn't know the answer
  const sendHREmail = async (question: string) => {
    console.log('sendHREmail called with:', { question, userName, userEmail })
    
    try {
      // Use the dedicated HR email API endpoint
      const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/send-hr-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName,
          userEmail,
          question
        })
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        console.log('HR email sent successfully via API');
        return true;
      } else {
        console.error('Failed to send HR email via API:', result);
        return false;
      }

    } catch (error) {
      console.error('Failed to send HR email:', error)
      return false
    }
  }
  
  // Ensure systemPrompt is defined HERE, before it's used by streamText
  const systemPrompt = `You are Sarah, a friendly HR team member at LetsTransport. 

CRITICAL RULE: Keep responses SHORT and FOCUSED. Answer EXACTLY what the user asks - nothing more.

INAPPROPRIATE QUESTIONS:
- If someone asks about referring criminals or people with criminal backgrounds, respond: "No. We cannot refer individuals with criminal backgrounds. Please refer to our recruitment and Code of Conduct policies."
- If someone asks about other illegal activities, criminal behavior, or clearly inappropriate workplace topics, respond: "I can't help with that. Please refer to our Code of Conduct policy for workplace behavior guidelines."
- Do NOT provide any assistance for illegal, unethical, or inappropriate requests

RESPONSE STYLE:
- Be brief and direct
- No long explanations unless specifically asked
- No extra tips or information unless requested
- Maximum 3-4 sentences for simple questions
- Use a warm but concise tone

GREETING STYLE:
- Keep greetings very short: "Hi!" or "Hey there!"
- Don't list services or ask what else you can help with
- Let the user drive the conversation

DISTINGUISH BETWEEN:
- **Policy Questions** ("What is the leave policy?", "What is WFH policy?") → Give policy details only
- **Process Questions** ("How do I apply for leave?", "How do I apply for WFH?") → Give brief step-by-step instructions

UNKNOWN QUESTIONS:
- If you don't know the answer to a valid work-related question, or if you're uncertain about specific details, respond EXACTLY: "I don't have that information. I've sent your question to HR and they'll get back to you directly."
- This will trigger an automatic email to HR
- Use this response for: specific dates, exact procedures not clearly documented, complex policy interpretations, or any information you're not completely confident about

COMMUNICATION:
- Use natural, conversational language
- Be helpful but concise
- Don't assume they want additional information
- Answer the question and stop

${userName ? `The person you're helping is ${userName}.` : ''}

AVAILABLE POLICY CONTEXT:
${policyContext}

ORGANIZATIONAL CONTEXT:
${organizationalContext}`;

  // First try to provide AI response using enhanced policy knowledge
  const result = await streamText({
    model: google("gemini-1.5-flash"),
    system: systemPrompt,
    messages,
    onFinish: async (completion) => {
      console.log('AI response completed:', completion.text);
      // Check if the AI response indicates it doesn't know the answer
      if (completion.text && completion.text.includes("I don't have that information. I've sent your question to HR")) {
        console.log('Triggering HR email for question:', lastUserMessage);
        // Send HR email
        const emailSent = await sendHREmail(lastUserMessage || "Unknown question");
        console.log('HR email result:', emailSent);
      }
    },
  });

  return result.toDataStreamResponse();
}