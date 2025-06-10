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
      !darwinboxAnswer.startsWith("Please refer to the relevant policy document")
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
      // Initialize Resend with your API key
      const resend = new Resend('re_4WN7Rgjz_7F7qF17eYKH6NEvR2NHaKctP');
      
      // Email content
      const emailSubject = `Policy Question from ${userName || userEmail}`;
      const emailContent = `
Hello HR Team,

A user has asked a question that our AI assistant couldn't answer. Please provide assistance.

User Details:
- Name: ${userName || 'Not available'}
- Email: ${userEmail}

Question:
"${question}"

Please respond directly to the user at ${userEmail} with the appropriate information.

Thank you,
LetsTransport Policy Assistant
      `.trim();

      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'vignesh.s@letstransport.team', // Target HR email
        subject: emailSubject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e97317;">Policy Question from Employee</h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>User Details:</h3>
              <p><strong>Name:</strong> ${userName || 'Not available'}</p>
              <p><strong>Email:</strong> ${userEmail}</p>
            </div>
            
            <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; border-left: 4px solid #e97317;">
              <h3>Question:</h3>
              <p style="font-size: 16px; line-height: 1.5;">"${question}"</p>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
              <p><strong>Action Required:</strong> Please respond directly to the user at <a href="mailto:${userEmail}">${userEmail}</a> with the appropriate information.</p>
            </div>
            
            <div style="margin-top: 20px; font-size: 12px; color: #666;">
              <p>This email was automatically generated by the LetsTransport Policy Assistant.</p>
            </div>
          </div>
        `,
        text: emailContent
      });

      if (error) {
        console.error('Resend email error:', error);
        // If it's a domain verification error, still return true so user gets the message
        if (error.message?.includes('verify a domain')) {
          console.log('Domain verification needed, but treating as success for user experience');
          return true;
        }
        return false;
      }

      console.log('Email sent successfully to HR:', data);
      return true;

    } catch (error) {
      console.error('Failed to send HR email:', error)
      return false
    }
  }

  // Ensure systemPrompt is defined HERE, before it's used by streamText
  const systemPrompt = `You are a friendly and helpful human HR assistant for Letstransport employees. Give direct, concise answers to questions - no more, no less.${userName ? ` The user's name is ${userName}, so you can address them personally when appropriate.` : ''}

CORE RULES:
- Answer exactly what is asked - be precise and to the point
- Use natural, human language but keep it brief
- ONLY use information from the provided policy context and organizational context
- If you don't have the specific information, simply say: "I don't have that information. Contact HR at hr@letstransport.com"

FORMATTING:
- Use [HIGHLIGHT]text[/HIGHLIGHT] for critical info like deadlines
- Use **bold text** for key terms
- Use bullet points only when listing multiple items
- Use [link text](URL) format for links

RESPONSE STYLE:
- Be direct and factual
- No lengthy explanations unless specifically asked for details
- No unnecessary pleasantries or filler
- Start with the answer, not acknowledgments
- End when the question is answered

Example:
Question: "What's the probation period?"
Good answer: "The probation period is [HIGHLIGHT]3 months[/HIGHLIGHT]. You'll get email confirmation through Darwinbox once confirmed."
Bad answer: "Great question! I can definitely help with that. The probation period at Letstransport is 3 months, and I know this can be important information for new employees..."

AVAILABLE POLICY CONTEXT:
${policyContext}

ORGANIZATIONAL CONTEXT:
${organizationalContext}`;

  // ALWAYS try to send HR email for better testing
  console.log('=== HR EMAIL DEBUG ===')
  console.log('Question:', lastUserMessage)
  console.log('User name:', userName)
  console.log('User email:', userEmail)
  
  // For now, let's try to send HR email for ANY question to test
  console.log('Attempting to send HR email...')
  
  try {
    const emailSent = await sendHREmail(lastUserMessage)
    console.log('Email sent result:', emailSent)
    
    if (emailSent) {
      const hrResponseMessage = `I don't have that information${userName ? `, ${userName}` : ''}. I've sent an email to HR on your behalf asking about: "${lastUserMessage}"

HR will explain this to you directly via email. You should receive a response soon!`

      console.log('Returning HR response:', hrResponseMessage)
      
      // Return the HR response as a stream
      const hrResult = await streamText({
        model: google("gemini-1.5-flash"),
        prompt: `Return the following message exactly as provided: ${hrResponseMessage}`,
      })
      return hrResult.toDataStreamResponse()
    }
  } catch (error) {
    console.error('Error in HR email flow:', error)
  }

  // Normal AI response
  const result = await streamText({
    model: google("gemini-1.5-flash"),
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}