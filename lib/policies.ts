export interface Policy {
  id: string
  title: string
  category: string
  description: string
  content: string
  lastUpdated: string
  tags: string[]
  approvedBy?: string
  date?: string
  applicationSteps?: string
}

export const policies: Policy[] = [
    {
      id: "travel-reimbursement",
      title: "Travel & Reimbursement Policy",
      category: "Finance",
      description: "Guidelines for business travel expenses, fuel costs, and reimbursement procedures",
      content: `
  # Travel & Reimbursement Policy
  
  ## Fuel Reimbursement for Drivers
  - Company vehicles: Fuel cards provided for official use only
  - Personal vehicles: ₹8 per km for business use
  - Submit fuel receipts within 7 days
  - GPS tracking will verify distances
  
  ## Business Travel (Office Staff)
  - Pre-approval required for all business travel
  - Book through approved travel partners when possible
  - Economy class flights for domestic travel
  - Business class for international flights over 6 hours
  
  ## Accommodation
  - Standard hotel rooms in business districts
  - Maximum ₹8,000 per night in metro cities
  - Maximum ₹5,000 per night in other cities
  - Company guest houses available in select locations
  
  ## Local Transportation
  - Taxi/cab receipts required
  - Use company-approved ride services
  - Public transport encouraged for short distances
  - Parking fees reimbursable with receipts
  
  ## Meals and Incidentals
  - ₹2,000 per day for meals in metro cities
  - ₹1,500 per day for meals in other cities
  - Driver meal allowance: ₹500 per day for outstation trips
  - Alcohol expenses not reimbursable
  
  ## Reimbursement Process
  1. Submit expenses within 30 days
  2. Attach all original receipts
  3. Use company expense management system
  4. Get manager approval
  5. Finance team processes within 7 days

  ## Darwinbox Submission Steps
  1. Log in to Darwinbox (https://app.darwinbox.com)
  2. Navigate to "Expenses" module
  3. Click "New Expense Claim"
  4. Select expense type (Travel, Fuel, Meals, etc.)
  5. Enter expense details:
     - Date
     - Amount
     - Description
     - Category
  6. Upload scanned copies of original receipts
  7. Add any additional notes if required
  8. Submit for manager approval
  9. Track claim status in "My Claims" section

  ## Important Notes
  - Keep original receipts for 6 months
  - Maximum file size for receipts: 5MB
  - Supported file formats: PDF, JPG, PNG
  - For technical issues, contact IT support
  - For policy queries, contact HR at hr@letstransport.com
      `,
      lastUpdated: "2024-03-15",
      tags: ["travel", "reimbursement", "expenses", "finance"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14",
      applicationSteps: `
To claim travel or reimbursement expenses, follow these steps:

1. Go to [https://diptab.darwinbox.in/](https://diptab.darwinbox.in/)
2. Log in with your company credentials.
3. Navigate to the "Expenses" module.
4. Click "New Expense Claim".
5. Select the relevant expense type (Travel, Fuel, Meals, etc.).
6. Enter all required details and upload scanned receipts.
7. Submit for manager approval.
8. Track your claim status in the "My Claims" section.

For any issues, contact Finance or HR at hr@letstransport.com.
    `.trim()
    },
    {
      id: "posh-policy",
      title: "POSH Policy",
      category: "HR",
      description: "Prevention of Sexual Harassment at Workplace Policy",
      content: `
  # Prevention of Sexual Harassment (POSH) Policy
  
  ## Definition of Sexual Harassment
  - Unwelcome sexual advances
  - Requests for sexual favors
  - Verbal or physical conduct of a sexual nature
  - Creating a hostile work environment
  
  ## Internal Complaints Committee (ICC)
  - Minimum 4 members including Presiding Officer
  - At least 50% women members
  - External member from NGO/association
  - Regular training and awareness programs
  
  ## Complaint Process
  1. Submit written complaint within 3 months
  2. ICC conducts inquiry within 90 days
  3. Report submitted within 10 days
  4. Action taken within 60 days
  
  ## Confidentiality
  - All complaints kept strictly confidential
  - No retaliation against complainant
  - Protection of witnesses
  - Privacy of all parties maintained
  
  ## Disciplinary Action
  - Warning
  - Suspension
  - Termination
  - Legal action if required
  
  ## Support Measures
  - Counseling services
  - Medical assistance
  - Legal aid
  - Transfer if requested
      `,
      lastUpdated: "2024-03-15",
      tags: ["posh", "harassment", "workplace", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "full-final-settlement",
      title: "Full and Final Settlement Process",
      category: "HR",
      description: "Process and guidelines for full and final settlement",
      content: `
  # Full and Final Settlement Process
  
  ## Notice Period
  - Minimum 30 days written notice
  - Handover responsibilities
  - Knowledge transfer sessions
  - Exit interview
  
  ## Clearance Process
  1. Department clearance
  2. IT asset return
  3. Library book return
  4. Finance clearance
  5. HR clearance
  
  ## Settlement Components
  - Last month salary
  - Leave encashment
  - Bonus/Incentives
  - Reimbursements
  - Gratuity (if eligible)
  
  ## Timeline
  - Process starts after last working day
  - Settlement within 45 days
  - Clearance certificate issued
  - Experience letter provided
  
  ## Documentation
  - Resignation acceptance
  - Clearance forms
  - Asset return receipts
  - Settlement sheet
  - Tax documents
      `,
      lastUpdated: "2024-03-15",
      tags: ["settlement", "exit", "hr", "finance"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "employee-exit",
      title: "Employee Exit Policy",
      category: "HR",
      description: "Guidelines and procedures for employee exit",
      content: `
  # Employee Exit Policy
  
  ## Types of Exit
  - Resignation
  - Retirement
  - Termination
  - End of Contract
  
  ## Notice Period
  - 30 days for permanent employees
  - 15 days for probationary employees
  - Buy-out option available
  - Garden leave provisions
  
  ## Exit Process
  1. Submit resignation letter
  2. Manager acceptance
  3. HR notification
  4. Handover planning
  5. Exit interview
  
  ## Knowledge Transfer
  - Document all processes
  - Train replacement
  - Update documentation
  - Share contact details
  
  ## Final Clearance
  - Return company assets
  - Clear pending dues
  - Submit final reports
  - Complete exit survey
      `,
      lastUpdated: "2024-03-15",
      tags: ["exit", "resignation", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "performance-improvement",
      title: "Performance Improvement Plan Policy",
      category: "HR",
      description: "Guidelines for performance improvement and development",
      content: `
  # Performance Improvement Plan (PIP) Policy
  
  ## PIP Initiation
  - Performance review meeting
  - Document performance gaps
  - Set improvement goals
  - Define success criteria
  
  ## PIP Duration
  - Minimum 30 days
  - Maximum 90 days
  - Regular check-ins
  - Progress tracking
  
  ## Support Measures
  - Training programs
  - Mentoring
  - Additional resources
  - Regular feedback
  
  ## Evaluation
  - Weekly progress reviews
  - Mid-point assessment
  - Final evaluation
  - Decision on continuation
  
  ## Outcomes
  - Successful completion
  - Extension of PIP
  - Role change
  - Separation
      `,
      lastUpdated: "2024-03-15",
      tags: ["performance", "improvement", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "leave-policy",
      title: "Leave Policy",
      category: "HR",
      description: "Guidelines for all types of leave including sick, casual, earned leave, etc.",
      content: `
  # Leave Policy Content
  This policy outlines the various types of leave available to employees, including sick leave, casual leave, earned leave, maternity leave, paternity leave, and other special leaves. 
  
  ## Eligibility
  All permanent employees are eligible for leave as per the policy. Probationary employees may have different entitlements, which will be specified in their offer letters or during onboarding.
  
  ## General Conditions
  - Leave must be applied for in advance through Darwinbox, except in cases of emergency (e.g., sudden sickness).
  - Approval of leave is subject to business exigencies and manager's discretion.
  - Unauthorized absence may lead to disciplinary action.

  ## Sick Leave
  - Entitlement: [Specify number] days per year.
  - Accumulation: [Specify if sick leave can be carried over, and if so, the limit].
  - For sick leave exceeding [Specify number, e.g., 2] consecutive days, a medical certificate is mandatory.
  - Sick leave cannot be availed for pre-planned medical appointments that could be scheduled outside working hours, unless an emergency.

  ## Casual Leave
  - Entitlement: [Specify number] days per year.
  - Purpose: For unforeseen personal exigencies or short-duration personal work.
  - Cannot be taken for more than [Specify number, e.g., 3] days at a time, unless combined with other leave types with prior approval.
  - Accumulation: [Specify if casual leave can be carried over].

  ## Earned Leave (Privilege Leave/Vacation)
  - Entitlement: [Specify number] days per year, accrued monthly/quarterly.
  - Purpose: For longer vacations and planned time off.
  - Minimum [Specify number] days must be taken at a stretch for it to be considered Earned Leave for certain purposes if applicable.
  - Accumulation: Can be carried forward up to a maximum of [Specify number, e.g., 45] days. Any leave over this limit will lapse.
  - Encashment: [Specify rules for earned leave encashment, e.g., during employment or at final settlement].

  ## Other Leaves
  - **Maternity Leave:** As per statutory guidelines.
  - **Paternity Leave:** [Specify number] days.
  - **Bereavement Leave:** [Specify number] days in case of death of an immediate family member.
  - **Compensatory Off:** For working on holidays/weekly offs with prior approval, as per Compensatory Off Guidelines.

  Please refer to specific guidelines for detailed procedures on each leave type.
      `,
      lastUpdated: "2YYYY-MM-DD", // Placeholder, update this
      tags: ["leave", "attendance", "hr", "sick leave", "casual leave", "earned leave"],
      approvedBy: "Your Approver", // Placeholder
      date: "YYYY-MM-DD", // Placeholder
      applicationSteps: `
To apply for any type of leave (including sick leave):

1.  **Login to Darwinbox:** Go to [https://diptab.darwinbox.in/](https://diptab.darwinbox.in/)
2.  **Navigate to Leaves:** Find the 'Leaves' or 'Leave Management' section.
3.  **Apply for Leave:** Click on 'Apply Leave' or a similar option.
4.  **Select Leave Type:** Choose the appropriate leave type (e.g., Sick Leave, Casual Leave, Earned Leave).
5.  **Enter Dates:** Specify the start and end dates of your leave.
6.  **Provide Reason:** Briefly state the reason for your leave. For sick leave exceeding [Number from policy, e.g., 2] days, ensure you attach a medical certificate as per policy.
7.  **Submit:** Submit your leave application. It will go to your manager for approval.
8.  **Track Status:** You can track the status of your application in Darwinbox.

If you face any issues or have questions about specific leave scenarios, please contact HR.
  `.trim()
    },
    {
      id: "transfer-policy",
      title: "Transfer Policy",
      category: "HR",
      description: "Guidelines for employee transfers and relocations",
      content: `
  # Transfer Policy
  
  ## Types of Transfers
  - Department transfer
  - Location transfer
  - Role transfer
  - Project transfer
  
  ## Transfer Process
  1. Management proposal
  2. Employee consent
  3. HR approval
  4. Handover planning
  5. Relocation support
  
  ## Relocation Benefits
  - Moving expenses
  - Temporary accommodation
  - Travel allowance
  - Settling-in allowance
  
  ## Timeline
  - 30 days notice period
  - 15 days handover
  - 45 days relocation
  - 90 days settling period
  
  ## Documentation
  - Transfer letter
  - New offer letter
  - Relocation forms
  - Expense claims
      `,
      lastUpdated: "2024-03-15",
      tags: ["transfer", "relocation", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "rehire-policy",
      title: "Rehire Policy",
      category: "HR",
      description: "Guidelines for rehiring former employees",
      content: `
  # Rehire Policy
  
  ## Eligibility
  - Minimum 6 months gap
  - Good performance record
  - No disciplinary issues
  - Business need exists
  
  ## Rehire Process
  1. Application review
  2. Background check
  3. Interview process
  4. Offer letter
  5. Onboarding
  
  ## Benefits
  - Previous service recognition
  - Salary based on market
  - Role based on experience
  - Fast-track onboarding
  
  ## Documentation
  - Previous employment records
  - Performance history
  - Exit documents
  - New employment documents
  
  ## Restrictions
  - No automatic rehire
  - Case by case basis
  - Business unit approval
  - HR final approval
      `,
      lastUpdated: "2024-03-15",
      tags: ["rehire", "recruitment", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "internal-job-posting",
      title: "Internal Job Posting",
      category: "HR",
      description: "Guidelines for internal job postings and transfers",
      content: `
  # Internal Job Posting Policy
  
  ## Eligibility
  - Minimum 1 year in current role
  - Good performance rating
  - No disciplinary issues
  - Manager approval
  
  ## Application Process
  1. Check job posting
  2. Manager discussion
  3. Submit application
  4. Interview process
  5. Selection decision
  
  ## Selection Criteria
  - Performance history
  - Skills assessment
  - Interview evaluation
  - Team fit
  - Business need
  
  ## Transition
  - 30 days notice period
  - Knowledge transfer
  - Handover process
  - New role training
  
  ## Documentation
  - Application form
  - Manager approval
  - Interview feedback
  - Offer letter
      `,
      lastUpdated: "2024-03-15",
      tags: ["internal", "job", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14",
      applicationSteps: `
To apply for an internal job posting (IJP):

1. Go to [https://diptab.darwinbox.in/](https://diptab.darwinbox.in/)
2. Log in with your company credentials.
3. Navigate to the "Careers" or "Internal Job Posting" section.
4. Browse available internal job openings.
5. Click on the job you wish to apply for.
6. Submit your application and upload your updated resume if required.
7. Wait for HR/manager communication regarding next steps.

For questions, contact HR at hr@letstransport.com.
    `.trim()
    },
    {
      id: "social-media-guidelines",
      title: "Social Media Guidelines",
      category: "Communication",
      description: "Guidelines for employee social media usage",
      content: `
  # Social Media Guidelines
  
  ## Personal Social Media
  - Maintain professionalism
  - No company secrets
  - Respect confidentiality
  - Clear disclaimer
  
  ## Company Social Media
  - Authorized spokespersons
  - Brand guidelines
  - Content approval
  - Crisis management
  
  ## Prohibited Content
  - Confidential information
  - Negative comments
  - Competitor information
  - Personal attacks
  
  ## Best Practices
  - Think before posting
  - Verify information
  - Respect privacy
  - Follow policies
  
  ## Consequences
  - Warning
  - Disciplinary action
  - Legal action
  - Termination
      `,
      lastUpdated: "2024-03-15",
      tags: ["social media", "communication", "guidelines"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "asset-management",
      title: "Company Asset Management Policy",
      category: "Operations",
      description: "Guidelines for managing company assets",
      content: `
  # Company Asset Management Policy
  
  ## Asset Categories
  - IT Equipment
  - Office Furniture
  - Vehicles
  - Software Licenses
  
  ## Issuance Process
  1. Request submission
  2. Manager approval
  3. Asset allocation
  4. Documentation
  5. Handover
  
  ## Maintenance
  - Regular updates
  - Preventive maintenance
  - Repairs
  - Replacements
  
  ## Return Process
  - Condition check
  - Data backup
  - Asset return
  - Documentation
  
  ## Responsibilities
  - Care of assets
  - Proper usage
  - Security
  - Reporting issues
      `,
      lastUpdated: "2024-03-15",
      tags: ["assets", "management", "operations"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "communication-policy",
      title: "Communication Policy",
      category: "Communication",
      description: "Guidelines for internal and external communication",
      content: `
  # Communication Policy
  
  ## Internal Communication
  - Email guidelines
  - Meeting protocols
  - Documentation
  - Information sharing
  
  ## External Communication
  - Media relations
  - Client communication
  - Vendor communication
  - Public relations
  
  ## Channels
  - Email
  - Intranet
  - Meetings
  - Newsletters
  
  ## Confidentiality
  - Data protection
  - Information security
  - Privacy
  - Compliance
  
  ## Response Time
  - Urgent: 2 hours
  - Normal: 24 hours
  - Non-urgent: 48 hours
  - External: 24 hours
      `,
      lastUpdated: "2024-03-15",
      tags: ["communication", "guidelines"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "code-of-conduct",
      title: "Code of Conduct",
      category: "Ethics",
      description: "Professional behavior and ethical standards",
      content: `
  # Code of Conduct
  
  ## Professional Behavior
  - Respect colleagues
  - Maintain decorum
  - Dress appropriately
  - Punctuality
  
  ## Ethical Standards
  - Honesty
  - Integrity
  - Fairness
  - Transparency
  
  ## Workplace Guidelines
  - No harassment
  - No discrimination
  - No conflicts
  - No corruption
  
  ## Confidentiality
  - Protect data
  - Secure information
  - Privacy
  - Compliance
  
  ## Consequences
  - Warning
  - Suspension
  - Termination
  - Legal action
      `,
      lastUpdated: "2024-03-15",
      tags: ["conduct", "ethics", "behavior"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "safety-security",
      title: "Safety, Security and Theft Policy",
      category: "Safety",
      description: "Guidelines for workplace safety and security",
      content: `
  # Safety, Security and Theft Policy
  
  ## Workplace Safety
  - Emergency procedures
  - First aid
  - Fire safety
  - Accident prevention
  
  ## Security Measures
  - Access control
  - CCTV surveillance
  - Visitor management
  - Asset protection
  
  ## Theft Prevention
  - Asset tracking
  - Inventory control
  - Access restrictions
  - Regular audits
  
  ## Reporting
  - Incident reporting
  - Security breaches
  - Safety hazards
  - Theft incidents
  
  ## Training
  - Safety training
  - Security awareness
  - Emergency drills
  - Regular updates
      `,
      lastUpdated: "2024-03-15",
      tags: ["safety", "security", "theft"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "drug-alcohol",
      title: "Drug and Alcohol Prohibition Policy",
      category: "Safety",
      description: "Guidelines regarding drug and alcohol use",
      content: `
  # Drug and Alcohol Prohibition Policy
  
  ## Prohibited Substances
  - Illegal drugs
  - Alcohol
  - Prescription misuse
  - Performance enhancers
  
  ## Testing
  - Pre-employment
  - Random testing
  - Post-incident
  - Reasonable suspicion
  
  ## Consequences
  - Warning
  - Counseling
  - Suspension
  - Termination
  
  ## Support
  - Employee assistance
  - Rehabilitation
  - Medical support
  - Confidentiality
  
  ## Reporting
  - Incident reporting
  - Violation reporting
  - Anonymous reporting
  - Investigation
      `,
      lastUpdated: "2024-03-15",
      tags: ["drug", "alcohol", "safety"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "probation-policy",
      title: "Probation Policy",
      category: "HR",
      description: "Guidelines for employee probation period",
      content: `
  # Probation Policy
  
  ## Duration
  - 6 months standard
  - Extendable up to 3 months
  - Early confirmation possible
  - Maximum 9 months
  
  ## Evaluation
  - Monthly reviews
  - Mid-term assessment
  - Final evaluation
  - Performance metrics
  
  ## Support
  - Training
  - Mentoring
  - Regular feedback
  - Resource access
  
  ## Confirmation
  - Performance review
  - Manager recommendation
  - HR approval
  - Documentation
  
  ## Extension/Termination
  - Performance issues
  - Extension process
  - Termination process
  - Notice period
      `,
      lastUpdated: "2024-03-15",
      tags: ["probation", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "grievance-policy",
      title: "Complaints and Grievance Redressal Policy",
      category: "HR",
      description: "Process for handling complaints and grievances",
      content: `
  # Complaints and Grievance Redressal Policy
  
  ## Grievance Types
  - Work conditions
  - Interpersonal issues
  - Policy concerns
  - Discrimination
  
  ## Process
  1. Informal resolution
  2. Formal complaint
  3. Investigation
  4. Resolution
  5. Appeal
  
  ## Timeline
  - 7 days initial response
  - 30 days resolution
  - 15 days appeal
  - 30 days appeal resolution
  
  ## Confidentiality
  - Privacy protection
  - No retaliation
  - Limited disclosure
  - Secure records
  
  ## Support
  - HR assistance
  - Legal guidance
  - Counseling
  - Mediation
      `,
      lastUpdated: "2024-03-15",
      tags: ["grievance", "complaints", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "anti-bribery",
      title: "Anti Bribery & Anti Corruption Policy",
      category: "Ethics",
      description: "Guidelines for preventing bribery and corruption",
      content: `
  # Anti Bribery & Anti Corruption Policy
  
  ## Prohibited Activities
  - Bribery
  - Kickbacks
  - Facilitation payments
  - Gifts and entertainment
  
  ## Compliance
  - Legal requirements
  - Industry standards
  - Company policies
  - Ethical guidelines
  
  ## Reporting
  - Whistleblower protection
  - Anonymous reporting
  - Investigation process
  - Documentation
  
  ## Training
  - Regular training
  - Awareness programs
  - Compliance updates
  - Case studies
  
  ## Consequences
  - Disciplinary action
  - Legal proceedings
  - Termination
  - Criminal charges
      `,
      lastUpdated: "2024-03-15",
      tags: ["bribery", "corruption", "ethics"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "conflicts-interest",
      title: "Conflicts of Interest Policy",
      category: "Ethics",
      description: "Guidelines for handling conflicts of interest",
      content: `
  # Conflicts of Interest Policy
  
  ## Types of Conflicts
  - Financial interests
  - Family relationships
  - Outside employment
  - Business relationships
  
  ## Disclosure
  - Annual disclosure
  - Immediate reporting
  - Documentation
  - Review process
  
  ## Management
  - Assessment
  - Mitigation
  - Monitoring
  - Resolution
  
  ## Prohibited Activities
  - Self-dealing
  - Insider trading
  - Competing interests
  - Unauthorized benefits
  
  ## Consequences
  - Warning
  - Restriction
  - Termination
  - Legal action
      `,
      lastUpdated: "2024-03-15",
      tags: ["conflicts", "interest", "ethics"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "performance-appraisal",
      title: "Performance Appraisal Policy",
      category: "HR",
      description: "Guidelines for performance evaluation and appraisal",
      content: `
  # Performance Appraisal Policy
  
  ## Appraisal Cycle
  - Annual review
  - Mid-year review
  - Quarterly check-ins
  - Continuous feedback
  
  ## Performance Metrics
  - Key Performance Indicators (KPIs)
  - Goals and Objectives
  - Competency Assessment
  - Behavioral Evaluation
  
  ## Rating Scale
  - Outstanding (5)
  - Exceeds Expectations (4)
  - Meets Expectations (3)
  - Needs Improvement (2)
  - Unsatisfactory (1)
  
  ## Process
  1. Self-assessment
  2. Manager evaluation
  3. Calibration meeting
  4. Final rating
  5. Feedback discussion
  
  ## Outcomes
  - Performance bonus
  - Salary increment
  - Career development
  - Training needs
      `,
      lastUpdated: "2024-03-15",
      tags: ["performance", "appraisal", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "salary-policy",
      title: "Salary Policy",
      category: "HR",
      description: "Guidelines for salary structure and compensation",
      content: `
  # Salary Policy
  
  ## Salary Components
  - Basic salary
  - House Rent Allowance (HRA)
  - Special Allowance
  - Performance bonus
  - Other benefits
  
  ## Salary Structure
  - Market benchmarking
  - Internal equity
  - Performance-based
  - Experience-based
  
  ## Increment Policy
  - Annual increment
  - Performance-based
  - Market adjustment
  - Promotion increment
  
  ## Benefits
  - Health insurance
  - Life insurance
  - Retirement benefits
  - Other perks
  
  ## Confidentiality
  - Salary information
  - Compensation data
  - Personal details
  - Financial records
      `,
      lastUpdated: "2024-03-15",
      tags: ["salary", "compensation", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14"
    },
    {
      id: "work-from-home",
      title: "Work from Home Policy",
      category: "HR",
      description: "Guidelines for remote work arrangements",
      content: `
  # Work from Home Policy
  
  ## Eligibility
  - Role suitability
  - Performance record
  - Manager approval
  - Technical capability
  
  ## Work Hours
  - Core hours
  - Availability
  - Meeting attendance
  - Time tracking
  
  ## Equipment
  - Laptop/Desktop
  - Internet connection
  - Software access
  - Security measures
  
  ## Communication
  - Regular updates
  - Team meetings
  - Email response
  - Chat availability
  
  ## Productivity
  - Deliverables
  - Performance metrics
  - Regular check-ins
  - Quality standards
      `,
      lastUpdated: "2024-03-15",
      tags: ["remote", "work", "hr"],
      approvedBy: "Pushkar Singh",
      date: "2021-09-14",
      applicationSteps: `
To apply for Work From Home (WFH) via Darwinbox:

1.  **Login to Darwinbox:** Access [https://diptab.darwinbox.in/](https://diptab.darwinbox.in/).
2.  **Navigate to WFH Module:** Look for a 'Work From Home', 'Remote Work Request', or similar module. (You'll need to verify the exact module name in your Darwinbox setup).
3.  **Create New Request:** Click on 'Apply for WFH' or 'New WFH Request'.
4.  **Fill Details:**
    *   Select the start and end dates for your WFH period.
    *   Provide a reason for your request.
    *   Specify your work location if required.
    *   Attach any supporting documents if necessary (e.g., manager's pre-approval email if that's part of your internal process).
5.  **Submit for Approval:** Submit the request. It will likely go to your manager for approval.
6.  **Track Status:** You can usually track the status of your WFH application within Darwinbox.

**Important:** Discuss your WFH request with your manager before submitting it in Darwinbox to ensure alignment with team needs and policy guidelines. If you cannot find the WFH application module, or have specific questions, please contact HR or your manager.
      `.trim()
    }
  ]
  
  export const categories = [
    "HR",
    "Finance",
    "Safety",
    "Ethics",
    "Communication",
    "Operations"
  ]
  
  export function getPolicyById(id: string): Policy | undefined {
    return policies.find((policy) => policy.id === id)
  }
  
  export function searchPolicies(query: string): Policy[] {
    const lowercaseQuery = query.toLowerCase()
    return policies.filter(
      (policy) =>
        policy.title.toLowerCase().includes(lowercaseQuery) ||
        policy.description.toLowerCase().includes(lowercaseQuery) ||
        policy.content.toLowerCase().includes(lowercaseQuery) ||
        policy.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
    )
  }
  
  export function getPoliciesByCategory(category: string): Policy[] {
    return policies.filter((policy) => policy.category === category)
  }

  /**
   * Returns a Darwinbox-specific answer for relevant queries.
   */
  export function getDarwinboxAnswerForQuery(query: string): string {
    const lowercaseQuery = query.toLowerCase();

    // Leave-related queries
    if (
      lowercaseQuery.includes('apply leave') ||
      lowercaseQuery.includes('leave application') ||
      lowercaseQuery.includes('where can i apply leave') ||
      lowercaseQuery.includes('how can i apply leave') ||
      lowercaseQuery.includes('leave request') ||
      lowercaseQuery.includes('sick leave') 
    ) {
      const leavePolicy = getPolicyById('leave-policy');
      if (leavePolicy && leavePolicy.applicationSteps) {
        return leavePolicy.applicationSteps;
      }
    }

    // Work From Home related queries
    if (
      lowercaseQuery.includes('work from home') ||
      lowercaseQuery.includes('wfh') ||
      lowercaseQuery.includes('remote work') ||
      lowercaseQuery.includes('apply for wfh') ||
      lowercaseQuery.includes('apply work from home')
    ) {
      const wfhPolicy = getPolicyById('work-from-home');
      if (wfhPolicy && wfhPolicy.applicationSteps) {
        return wfhPolicy.applicationSteps;
      }
    }

    // Attendance-related queries
    if (
      lowercaseQuery.includes('attendance') ||
      lowercaseQuery.includes('see my attendance') ||
      lowercaseQuery.includes('track my attendance')
    ) {
      return [
        'To view your attendance:',
        '',
        '1. Go to https://diptab.darwinbox.in/',
        '2. Log in with your company credentials.',
        '3. Navigate to the "Time & Attendance" module.',
        '4. Here you can view your attendance records, check-in/check-out times, and leave balances.',
        '',
        'For any issues, contact HR at hr@letstransport.com.'
      ].join('\n');
    }
    
    // Fallback: generic answer
    return `Please refer to the relevant policy document for detailed information. If you can't find the answer there, please contact HR at hr@letstransport.com.`;
  }
