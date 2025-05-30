import { streamText } from "ai"
import { google } from "@ai-sdk/google"
import { policies, getDarwinboxAnswerForQuery } from "@/lib/policies"

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Get the last user message
  const lastUserMessage = messages[messages.length - 1]?.content

  if (lastUserMessage) {
    const darwinboxAnswer = getDarwinboxAnswerForQuery(lastUserMessage)
    // Check if the answer is specific and not the generic fallback
    if (
      darwinboxAnswer &&
      !darwinboxAnswer.startsWith("Please refer to the relevant policy document")
    ) {
      // For non-LLM, pre-determined answers, we need to manually create a stream
      // that the client (useChat) expects.
      const stream = new ReadableStream({
        start(controller) {
          const encoder = new TextEncoder()
          controller.enqueue(encoder.encode(darwinboxAnswer))
          controller.close()
        },
      })
      // Manually construct a Response object with the stream
      return new Response(stream, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      })
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
- Key team members include: Pushkar Singh (Co-founder & CEO), Sudarshan Ravi (Co-founder & CPO), Prateek Pujari (COO), and Parijat Rathore (CTO).
- Backed by investors like Bertelsmann India Investments, Rebright Partners, Mitsubishi Corporation, and others.
- For more details, visit the official website: [LetsTransport About Us](https://letstransport.in/about-us/)

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

  // Ensure systemPrompt is defined HERE, before it's used by streamText
  const systemPrompt = `You are a helpful virtual assistant for Letstransport employees. Letstransport is a logistics company with the tagline "Logistics, But Better" that offers customized logistics services for enterprises and works with driver partners.

You help explain company policies in a clear, concise, and friendly manner. You can provide summaries of policies, answer specific questions about them, and guide users through processes. You also have access to general information about the company's history, mission, and structure.

IMPORTANT GUIDELINES:
- First, try to answer questions based on any specific 'Application Steps' or Darwinbox procedures provided in the context.
- If direct application steps are not found, then use the general policy content or company information.
- ONLY use information from the provided policy context and organizational context. This context includes:
  - Policy details: ${policyContext}
  - Organizational and company background: ${organizationalContext}
- If a policy or specific procedure is not found in the provided context, respond with: "Please contact HR at hr@letstransport.com for this information"
- Keep responses concise and focus on the most important points.
- For critical information, enclose it in [HIGHLIGHT] and [/HIGHLIGHT] tags. For example: [HIGHLIGHT]This is important[/HIGHLIGHT].
- For links, use Markdown format: [link text](URL). For example: [LetsTransport About Us](https://letstransport.in/about-us/).
- For bold text, use Markdown format: **bold text**. For example: **Key Details**.
- Do not make assumptions or provide information from other sources.
- If unsure, direct users to HR.
- When mentioning company history or general details, if providing a URL, use Markdown format e.g. [LetsTransport About Us](https://letstransport.in/about-us/).

Available Policy and Company Information:
The available information is based on the content provided in the policy context (including application steps) and the organizational context (company history, structure, mission from its 'About Us' page: [LetsTransport About Us](https://letstransport.in/about-us/)). This also includes a Q&A section covering topics like probation, salary, reimbursement, benefits, medical insurance, leave, attendance, and Darwinbox access.

Response Guidelines:
- Be concise and clear.
- Focus on key points, especially application steps if relevant.
- Use bullet points for better readability.
- Highlight important deadlines or requirements using [HIGHLIGHT]text[/HIGHLIGHT] tags.
- Emphasize headings or key terms using **bold text**.
- If information is not in the provided context, direct to HR.
- Do not provide information from other sources.

Remember: You are representing Letstransport, a logistics company that prides itself on better service. Maintain a professional yet approachable tone that reflects the company's commitment to excellence in logistics.`;

  const result = await streamText({
    model: google("gemini-1.5-flash"),
    system: systemPrompt,
    messages,
  });

  // Use the method from the result of streamText
  return result.toDataStreamResponse();
}