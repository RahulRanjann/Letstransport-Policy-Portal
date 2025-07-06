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
      description: "Prevention of Sexual Harassment at Workplace Policy - Complete guidelines for creating a safe and respectful work environment",
      content: `
# Prevention of Sexual Harassment (POSH) Policy

## Introduction and Commitment

LetsTransport is committed to providing a workplace free from sexual harassment, where all employees can work with dignity, respect, and without fear. This policy is in compliance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.

## Scope and Applicability

This policy applies to:
- All employees (permanent, temporary, contractual, consultants)
- All locations and work environments
- Business trips and company events
- Virtual workspaces and digital communications
- Third-party vendors and visitors interacting with employees

## Definition of Sexual Harassment

Sexual harassment includes any unwelcome act or behavior (whether directly or by implication) such as:

### Physical Contact and Advances
- Unwelcome physical touch, contact, or advances
- Physical confinement against one's will
- Any form of physical intimidation

### Demand or Request for Sexual Favors
- Explicit or implicit demand for sexual favors
- Conditional promises of employment benefits
- Threats affecting employment conditions

### Verbal and Non-Verbal Conduct
- Sexually colored remarks, jokes, or innuendos
- Unwelcome sexual advances or propositions
- Sexually explicit comments about appearance, clothing, or body
- Offensive gestures, leers, or suggestive looks

### Visual Harassment
- Showing pornography or sexually explicit material
- Displaying sexually suggestive pictures, calendars, or objects
- Sending sexually explicit emails, messages, or images

### Creating Hostile Work Environment
- Conduct that creates an intimidating, hostile, or offensive work environment
- Persistent unwelcome social invitations
- Unwelcome inquiries about personal/sexual life
- Any conduct that interferes with work performance

## Internal Complaints Committee (ICC)

### Composition
- **Presiding Officer:** Senior woman employee
- **Members:** Minimum 2 employees (at least 50% women)
- **External Member:** From NGO or familiar with harassment issues
- **Tenure:** 3 years maximum

### Current ICC Members (2024)
- **Presiding Officer:** [Name], HR Head
- **Employee Member 1:** [Name], Operations Manager
- **Employee Member 2:** [Name], Finance Manager
- **External Member:** [Name], Women's Rights Advocate

### ICC Responsibilities
- Receive and investigate complaints
- Conduct fair and impartial inquiry
- Maintain confidentiality
- Recommend appropriate action
- Monitor implementation of recommendations

## Complaint Process

### How to File a Complaint

#### Written Complaint
1. **Timeframe:** Within 3 months of the incident (extendable for good reasons)
2. **Format:** Written complaint with detailed description
3. **Submission:** To any ICC member or HR
4. **Contents:** Date, time, place, details of incident, witnesses (if any)

#### Verbal Complaint
- Can be made to any ICC member
- Will be reduced to writing with complainant's consent
- Complainant can request assistance in documentation

### Alternative Reporting Channels
- **Direct to HR:** hr@letstransport.com
- **Anonymous Reporting:** Through suggestion boxes or anonymous helpline
- **Supervisor/Manager:** If comfortable reporting to immediate supervisor
- **External Helpline:** [Number] (if available)

### Complaint Investigation Process

#### Initial Assessment (7 days)
- Complaint received and acknowledged
- Prima facie case determination
- Interim relief measures (if required)

#### Detailed Inquiry (90 days)
1. **Notice to Respondent:** Within 7 days with complaint copy
2. **Response from Respondent:** Within 10 days
3. **Evidence Collection:** Documents, witnesses, expert opinions
4. **Hearings:** Both parties given fair opportunity
5. **Cross-examination:** If requested by either party

#### Final Report (10 days)
- Findings and recommendations
- Submission to employer
- Copy to complainant and respondent

## Interim Relief Measures

During investigation, ICC may recommend:
- Transfer of complainant or respondent
- Grant leave to complainant
- Restraining respondent from contacting complainant
- Any other relief deemed necessary

## Confidentiality and Non-Retaliation

### Confidentiality
- All proceedings kept strictly confidential
- Information shared only on need-to-know basis
- Media reporting prohibited
- Privacy of all parties protected

### No Retaliation
- No adverse action against complainant
- Protection of witnesses and supporters
- Prohibition of creating hostile environment
- Any retaliation will be dealt with severely

## Support Systems Available

### Counseling Services
- **Internal Counselor:** Available on request
- **External Counseling:** Tie-up with professional counselors
- **Employee Assistance Program:** 24/7 support helpline
- **Peer Support:** Trained peer counselors

### Medical Assistance
- **Medical Leave:** If required for treatment
- **Medical Expenses:** Coverage for harassment-related medical needs
- **Health Insurance:** Full support through company insurance

### Legal Aid
- **Legal Consultation:** Access to legal experts
- **Documentation Support:** Help in legal documentation
- **Court Proceedings:** Support during legal proceedings

## Disciplinary Actions

Based on inquiry findings, actions may include:

### Warning and Counseling
- Written warning
- Mandatory sensitivity training
- Counseling sessions
- Close monitoring

### Employment-Related Actions
- Transfer to different location/department
- Suspension with/without pay
- Increment/promotion withholding
- Denial of benefits or opportunities

### Severe Actions
- Demotion
- Termination of employment
- Debarring from future employment
- Legal action under criminal law

## False Complaints

### Malicious Complaints
- Complaints made with ulterior motives
- Knowingly false accusations
- May result in disciplinary action against complainant

### Determination Process
- Thorough investigation required
- Clear evidence of malicious intent needed
- Due process followed before any action

## Training and Awareness

### Mandatory Training
- **All Employees:** Annual POSH awareness training
- **ICC Members:** Specialized training in harassment laws
- **Managers:** Training on prevention and response
- **New Employees:** Induction training on POSH policy

### Awareness Programs
- Regular workshops and seminars
- Email campaigns and newsletters
- Display of policy information at workplace
- Regular communication from leadership

## Prevention Measures

### Workplace Environment
- Respectful communication standards
- Professional conduct guidelines
- Clear behavioral expectations
- Regular monitoring of workplace culture

### Technology and Communication
- Guidelines for digital communication
- Social media behavior standards
- Email and messaging etiquette
- Virtual meeting protocols

## Annual Compliance

### Annual Report
- Number of complaints received
- Nature of complaints
- Action taken by employer
- Submission to District Officer

### Regular Reviews
- Policy review and updates
- Training effectiveness assessment
- ICC performance evaluation
- Employee feedback incorporation

## Special Provisions

### Third-Party Harassment
- Complaints against vendors, clients, visitors
- Appropriate action as per circumstances
- Communication with third-party organizations
- Preventive measures for future

### Aggrieved Woman Definition
- Woman of any age (employed or not)
- Includes contract workers, volunteers
- Domestic workers in organized sector
- Students, research scholars, patients

## Contact Information

### ICC Members
- **Presiding Officer:** [Name] - [email] - [phone]
- **Member 1:** [Name] - [email] - [phone]
- **Member 2:** [Name] - [email] - [phone]
- **External Member:** [Name] - [email] - [phone]

### Emergency Contacts
- **HR Department:** hr@letstransport.com
- **CEO Office:** [email]
- **National Commission for Women:** 011-26944880
- **Women Helpline:** 1091

## Important Reminders

1. **Zero Tolerance:** LetsTransport has zero tolerance for sexual harassment
2. **Safe Environment:** Every employee has right to dignified workplace
3. **Prompt Action:** Report incidents immediately for prompt action
4. **Support Available:** Multiple support systems available
5. **Legal Compliance:** Policy ensures legal compliance and employee protection

**Remember:** A harassment-free workplace is everyone's responsibility. Speak up, support colleagues, and maintain professional conduct always.

**Last Updated:** March 2024
**Next Review:** March 2025
**Approved By:** Pushkar Singh, CEO
    `,
      lastUpdated: "2024-03-15",
      tags: ["posh", "harassment", "workplace", "safety", "hr", "women", "prevention"],
      approvedBy: "Pushkar Singh",
      date: "2024-03-15"
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
      description: "Comprehensive guidelines for all types of leaves - casual, sick, annual, maternity, paternity and other special leaves",
      content: `
# Leave Policy - Comprehensive Guide

## Leave Entitlement

### Casual Leave (CL)
- **Entitlement:** 12 days per year
- **Purpose:** Personal emergencies, family functions, personal work
- **Application:** Can be applied on the same day (with prior intimation to manager)
- **Carry Forward:** No carry forward to next year
- **Encashment:** Not eligible for encashment

### Sick Leave (SL)
- **Entitlement:** 12 days per year
- **Purpose:** Personal illness, medical treatment
- **Medical Certificate:** Required for sick leave of 3+ consecutive days
- **Application:** Can be applied on the same day or retrospectively
- **Carry Forward:** Maximum 30 days can be carried forward
- **Encashment:** Eligible for encashment at retirement/resignation

### Earned Leave/Annual Leave (EL/AL)
- **Entitlement:** 21 days per year (prorated for partial year)
- **Purpose:** Vacation, planned personal time off
- **Application:** Must be applied at least 7 days in advance
- **Approval:** Manager approval required
- **Carry Forward:** Maximum 45 days can be carried forward
- **Encashment:** Up to 45 days can be encashed per year

### Festival Leave
- **Entitlement:** 2 days per year
- **Purpose:** Religious festivals as per personal faith
- **Application:** Apply at least 15 days in advance
- **Blackout Dates:** Cannot be taken during peak business periods

## Special Leaves

### Maternity Leave
- **Entitlement:** 26 weeks (6 months)
- **Eligibility:** Female employees
- **Pre-natal:** Up to 8 weeks before expected delivery
- **Post-natal:** Remaining weeks after delivery
- **Application:** Apply 45 days before expected leave start date
- **Documentation:** Medical certificate required
- **Salary:** Full salary for entire duration

### Paternity Leave
- **Entitlement:** 15 days
- **Eligibility:** Male employees for child birth/adoption
- **Timeline:** To be taken within 6 months of child birth
- **Application:** Apply 30 days in advance
- **Documentation:** Birth certificate required
- **Salary:** Full salary for entire duration

### Bereavement Leave
- **Entitlement:** 5 days for immediate family, 3 days for other relatives
- **Immediate Family:** Spouse, children, parents, siblings
- **Application:** Can be applied retrospectively within 7 days
- **Documentation:** Death certificate may be required
- **Additional Leave:** Can be extended using other leave types

### Marriage Leave
- **Entitlement:** 5 days
- **Eligibility:** Once in lifetime for own marriage
- **Application:** Apply 30 days in advance
- **Documentation:** Marriage certificate required
- **Clubbing:** Can be clubbed with other leaves

### Sabbatical Leave
- **Entitlement:** Up to 12 months (unpaid)
- **Eligibility:** Employees with 5+ years of service
- **Purpose:** Higher education, research, personal development
- **Approval:** CEO approval required
- **Job Guarantee:** Position protected for 12 months
- **Benefits:** Medical insurance continues

## Leave Application Process

### Through Darwinbox
1. **Login:** https://diptab.darwinbox.in/
2. **Navigate:** Go to "Leaves" section
3. **Apply:** Click "Apply Leave"
4. **Details:** Select leave type, dates, reason
5. **Submit:** Send for manager approval
6. **Track:** Monitor approval status

### Important Guidelines
- **Advance Notice:** Apply as early as possible
- **Emergency Leaves:** Inform manager via call/message immediately
- **Half Day Leaves:** Available for CL and EL
- **Sandwich Leaves:** Leave between holidays will be counted
- **Public Holidays:** Not counted as leave days
- **Weekly Offs:** Not counted as leave days

## Leave Balance Management

### Check Leave Balance
- **Darwinbox:** View current balance in leave section
- **Monthly:** Balance updated monthly
- **Accrual:** Leaves accrue monthly (pro-rated)

### Leave Year
- **Cycle:** April 1st to March 31st
- **Joining:** Pro-rated based on joining date
- **Reset:** Unused casual leave lapses on March 31st

## Unauthorized Absence

### Consequences
- **Loss of Pay (LOP):** No salary for unauthorized absence days
- **Disciplinary Action:** May lead to warning or termination
- **Continuous Absence:** 3+ days without approval considered serious misconduct

### Regularization
- **Deadline:** Within 7 days of return
- **Process:** Apply through attendance regularization in Darwinbox
- **Approval:** Manager's discretion
- **Supporting Documents:** Medical certificate or valid reason required

## Special Scenarios

### Work From Home
- **Not a Leave:** WFH is not counted as leave
- **Application:** Separate WFH application required
- **Manager Approval:** Required before starting WFH

### Compensatory Off
- **Eligibility:** For weekend/holiday work
- **Approval:** Pre-approved by manager
- **Validity:** Must be used within 30 days
- **Application:** Through Darwinbox comp-off module

### Leave During Probation
- **Casual Leave:** Available from joining date
- **Sick Leave:** Available from joining date
- **Earned Leave:** Available after 6 months of service
- **Special Leaves:** As per eligibility criteria

### Leave During Notice Period
- **General Rule:** No leave during notice period
- **Exception:** Only sick leave with medical certificate
- **Manager Discretion:** Case-by-case approval

## Medical Leave Guidelines

### Sick Leave Documentation
- **1-2 days:** Self-declaration sufficient
- **3+ days:** Medical certificate mandatory
- **Chronic Illness:** Specialist doctor's certificate required
- **Hospitalization:** Discharge summary required

### Extended Medical Leave
- **Duration:** Beyond available sick leave
- **Process:** Medical board evaluation
- **Approval:** HR and management approval
- **Documentation:** Comprehensive medical reports
- **Salary:** As per medical leave policy

## Important Contacts

- **HR Team:** hr@letstransport.com
- **Immediate Supervisor:** For daily leave approvals
- **HRBP:** For policy clarifications
- **Finance Team:** For leave encashment queries

## Policy Updates

This policy is subject to changes based on business requirements and regulatory changes. Employees will be notified of any updates through official channels.

**Last Updated:** March 2024
**Next Review:** March 2025
**Approved By:** Pushkar Singh, CEO
    `,
      lastUpdated: "2024-03-15",
      tags: ["leave", "attendance", "hr", "sick leave", "casual leave", "earned leave", "maternity", "paternity"],
      approvedBy: "Pushkar Singh",
      date: "2024-03-15",
      applicationSteps: `
**How to Apply for Leave in Darwinbox:**

1. **Login to Darwinbox:** Go to https://diptab.darwinbox.in/
2. **Navigate to Leaves Module:** Click on "Leaves" or "My Leaves" in the menu
3. **Apply for New Leave:**
   - Click "Apply Leave" or "New Leave Request"
   - Select leave type (Casual, Sick, Earned, Annual, etc.)
   - Choose start and end dates
   - Select full day or half day
   - Enter reason for leave
   - Upload medical certificate (if required for sick leave)
4. **Submit for Approval:** Your request goes to your reporting manager
5. **Track Status:** Check "My Leave Applications" to see approval status

**Leave Balance:** You can check your available leave balance in the same section.

**Important Notes:**
- Apply at least 24-48 hours in advance (except emergency sick leave)
- For sick leave over 3 days, medical certificate is mandatory
- Festival/vacation leaves should be planned and applied well in advance

For technical issues, contact IT support. For leave policy questions, contact HR at hr@letstransport.com
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
      description: "Professional behavior guidelines, ethics, workplace conduct, and behavioral expectations for all employees",
      content: `
# Code of Conduct - Professional Behavior Guidelines

## Introduction

LetsTransport's Code of Conduct outlines the ethical standards and behavioral expectations for all employees. This code ensures we maintain a professional, respectful, and productive work environment while upholding our company values.

## Core Values and Principles

### Integrity
- Honest and transparent in all dealings
- Keep commitments and promises
- Admit mistakes and learn from them
- Report unethical behavior without fear

### Respect
- Treat all individuals with dignity and courtesy
- Value diversity and inclusion
- Listen to different perspectives
- Respect personal and professional boundaries

### Excellence
- Strive for high-quality work
- Continuous learning and improvement
- Innovation and creative problem-solving
- Take ownership of responsibilities

### Teamwork
- Collaborate effectively with colleagues
- Support team goals and objectives
- Share knowledge and resources
- Communicate openly and constructively

## Professional Conduct Standards

### Workplace Behavior
- **Punctuality:** Be on time for work, meetings, and commitments
- **Professional Appearance:** Dress appropriately for your role and workplace
- **Work Quality:** Deliver work that meets or exceeds expectations
- **Accountability:** Take responsibility for your actions and decisions

### Communication Standards
- **Respectful Language:** Use professional, non-offensive language
- **Active Listening:** Listen carefully and respond thoughtfully
- **Constructive Feedback:** Provide and receive feedback positively
- **Clear Communication:** Express ideas clearly and concisely

### Relationship Guidelines
- **Colleague Relations:** Maintain professional relationships with all team members
- **Manager Relations:** Respect hierarchy while maintaining open communication
- **Client Relations:** Represent the company professionally in all interactions
- **Vendor Relations:** Conduct business ethically and fairly

## Prohibited Conduct

### Harassment and Discrimination
- No tolerance for sexual harassment (covered under POSH Policy)
- No discrimination based on race, gender, religion, caste, or other protected characteristics
- No bullying, intimidation, or hostile behavior
- No creating uncomfortable or offensive work environment

### Substance Abuse
- **Alcohol:** No consumption during work hours or on company premises
- **Drugs:** Zero tolerance for illegal drug use
- **Prescription Medications:** Inform manager if medications affect work performance
- **Company Events:** Moderate consumption allowed at company-sanctioned events only

### Conflict of Interest
- **External Employment:** Disclose any outside employment that may conflict
- **Financial Interests:** Avoid investments that conflict with company interests
- **Family/Friends:** No preferential treatment in business dealings
- **Gifts and Benefits:** No acceptance of inappropriate gifts from vendors/clients

### Confidentiality and Information Security
- **Company Information:** Protect confidential and proprietary information
- **Client Data:** Maintain strict confidentiality of client information
- **Data Security:** Follow all IT security protocols and guidelines
- **Social Media:** No sharing of confidential information on social platforms

## Digital Communication and Social Media

### Email and Messaging Etiquette
- **Professional Tone:** Maintain professional language in all communications
- **Response Time:** Respond to emails and messages within reasonable timeframes
- **Clear Subject Lines:** Use descriptive subject lines for emails
- **Appropriate Recipients:** Ensure all recipients need the information

### Social Media Guidelines
- **Personal Accounts:** Clearly distinguish personal views from company positions
- **Company Representation:** No unauthorized speaking on behalf of the company
- **Respectful Content:** Avoid posting offensive or inappropriate content
- **Client Confidentiality:** Never share client information or work details

### Video Conferencing Etiquette
- **Professional Background:** Use appropriate backgrounds for video calls
- **Mute Management:** Mute when not speaking to avoid background noise
- **Punctuality:** Join meetings on time and be prepared
- **Engagement:** Participate actively and professionally

## Financial Integrity and Compliance

### Expense Management
- **Accurate Reporting:** Submit only legitimate, work-related expenses
- **Proper Documentation:** Maintain receipts and proper documentation
- **Timely Submission:** Submit expense reports within specified deadlines
- **Approval Process:** Follow proper approval workflows

### Financial Records
- **Accuracy:** Ensure all financial records are accurate and complete
- **Documentation:** Maintain proper documentation for all transactions
- **Compliance:** Follow all financial policies and procedures
- **Reporting:** Report any financial irregularities immediately

### Anti-Corruption
- **No Bribery:** Zero tolerance for giving or receiving bribes
- **Fair Dealing:** Conduct all business dealings fairly and transparently
- **Proper Procurement:** Follow established procurement procedures
- **Vendor Relations:** Maintain arm's length relationships with vendors

## Health, Safety, and Security

### Workplace Safety
- **Safety Protocols:** Follow all safety guidelines and procedures
- **Incident Reporting:** Report accidents or safety hazards immediately
- **Emergency Procedures:** Know and follow emergency evacuation procedures
- **Personal Protective Equipment:** Use required safety equipment

### Information Security
- **Password Security:** Use strong passwords and change them regularly
- **Data Protection:** Protect company and client data from unauthorized access
- **Device Security:** Secure all company devices and equipment
- **Network Security:** Follow IT policies for network and internet usage

### Physical Security
- **Access Control:** Use access cards and follow entry/exit procedures
- **Visitor Management:** Ensure all visitors are properly registered and escorted
- **Document Security:** Secure confidential documents and materials
- **Equipment Protection:** Protect company equipment from theft or damage

## Performance and Development

### Work Standards
- **Quality Delivery:** Meet or exceed performance expectations
- **Deadline Management:** Complete work within specified timeframes
- **Continuous Improvement:** Actively seek opportunities to improve performance
- **Innovation:** Contribute ideas for process and service improvements

### Learning and Development
- **Skill Enhancement:** Participate in training and development programs
- **Knowledge Sharing:** Share expertise and learn from colleagues
- **Feedback Acceptance:** Accept and act on constructive feedback
- **Career Planning:** Take ownership of career development

### Goal Achievement
- **Clear Objectives:** Understand and work toward defined goals
- **Regular Review:** Participate actively in performance reviews
- **Self-Assessment:** Honestly evaluate your own performance
- **Improvement Plans:** Follow through on development recommendations

## Reporting Violations and Seeking Guidance

### When to Report
- Violations of this Code of Conduct
- Unethical or illegal behavior
- Safety concerns or incidents
- Harassment or discrimination
- Conflicts of interest

### How to Report
- **Direct Supervisor:** Discuss concerns with your immediate manager
- **HR Department:** Contact HR at hr@letstransport.com
- **Anonymous Reporting:** Use anonymous suggestion boxes or helplines
- **Senior Management:** Escalate to senior leadership if necessary

### Protection for Reporters
- **No Retaliation:** Protection against retaliation for good faith reporting
- **Confidentiality:** Maintain confidentiality of reports where possible
- **Fair Investigation:** Thorough and impartial investigation of all reports
- **Follow-up:** Appropriate follow-up and resolution of issues

## Disciplinary Actions

### Progressive Discipline
1. **Verbal Warning:** Informal counseling and guidance
2. **Written Warning:** Formal documentation of issues
3. **Final Warning:** Last opportunity before severe action
4. **Suspension:** Temporary suspension with or without pay
5. **Termination:** End of employment relationship

### Serious Violations
Immediate severe action may be taken for:
- Theft or fraud
- Violence or threats
- Substance abuse
- Serious safety violations
- Sexual harassment
- Breach of confidentiality

## Employee Responsibilities

### Personal Responsibility
- Read and understand this Code of Conduct
- Ask questions if anything is unclear
- Report violations when observed
- Maintain high ethical standards
- Represent the company positively

### Continuous Awareness
- Stay updated on policy changes
- Participate in training programs
- Seek guidance when uncertain
- Learn from mistakes and feedback
- Contribute to positive workplace culture

## Manager Responsibilities

### Leading by Example
- Model appropriate behavior at all times
- Create an inclusive and respectful environment
- Address issues promptly and fairly
- Support employee development and growth

### Enforcement
- Ensure team members understand and follow the code
- Investigate reported violations
- Take appropriate disciplinary action
- Provide regular feedback and guidance

## Acknowledgment and Compliance

All employees must:
- Read and understand this Code of Conduct
- Acknowledge receipt and understanding
- Commit to following all guidelines
- Seek clarification when needed
- Report violations appropriately

**Remember:** This Code of Conduct is not just a set of rules—it's a reflection of our company values and our commitment to creating a positive, productive, and ethical workplace for everyone.

## Contact Information

- **HR Department:** hr@letstransport.com
- **Ethics Helpline:** [To be established]
- **Anonymous Reporting:** [Suggestion boxes at workplace]
- **Senior Management:** Available through HR

**Last Updated:** March 2024
**Next Review:** March 2025
**Approved By:** Pushkar Singh, CEO
    `,
      lastUpdated: "2024-03-15",
      tags: ["ethics", "conduct", "behavior", "professionalism", "workplace", "guidelines"],
      approvedBy: "Pushkar Singh",
      date: "2024-03-15"
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
   * Returns a comprehensive Darwinbox-specific answer for relevant queries.
   * Enhanced with better accuracy, more detailed responses, and improved user experience.
   */
  export function getDarwinboxAnswerForQuery(query: string): string {
    const lowercaseQuery = query.toLowerCase();

    // Enhanced Leave-related queries with better categorization
    if (
      lowercaseQuery.includes('how do i apply leave') ||
      lowercaseQuery.includes('how to apply leave') ||
      lowercaseQuery.includes('where can i apply leave') ||
      lowercaseQuery.includes('how can i apply leave') ||
      lowercaseQuery.includes('apply for leave') ||
      lowercaseQuery.includes('leave application process') ||
      lowercaseQuery.includes('submit leave request') ||
      lowercaseQuery.includes('leave request process')
    ) {
      return `**How to Apply for Leave in Darwinbox:**

**Step-by-Step Process:**
1. **Login:** Go to https://diptab.darwinbox.in/
2. **Navigate:** Click "Leaves" in the main menu
3. **Apply Leave:** Click "Apply Leave" or "New Leave Request"
4. **Fill Details:**
   - **Leave Type:** Select from dropdown (Casual, Sick, Earned, Comp-off, etc.)
   - **From Date:** Start date of leave
   - **To Date:** End date of leave
   - **Number of Days:** Automatically calculated
   - **Reason:** Brief explanation for the leave
   - **Contact Number:** Your contact during leave (optional)
5. **Submit:** Click "Submit" for manager approval
6. **Track:** Monitor status in "My Leave Applications"

**Important Guidelines:**
- **Advance Notice:** Apply at least 24-48 hours in advance
- **Emergency Leave:** Can be applied on the same day with proper justification
- **Half Day:** Select "Half Day" option if taking partial day leave
- **Multiple Days:** Can apply for consecutive days in one request
- **Approval:** Manager will approve/reject within 24 hours

**Leave Types Available:**
- **Casual Leave:** For personal emergencies (limited days per year)
- **Sick Leave:** For health-related absences (medical certificate may be required)
- **Earned Leave:** Annual leave balance
- **Comp-off:** For working on holidays/weekends
- **Maternity/Paternity:** As per company policy

**After Submission:**
- You'll receive email confirmation
- Track approval status in "My Leave Applications"
- Manager can approve, reject, or request modifications
- Approved leaves reflect in your leave balance

For leave policy details, check the Leave Policy document or contact HR.`;
    }

    // Attendance and punch-in/out queries
    if (
      lowercaseQuery.includes('attendance') ||
      lowercaseQuery.includes('punch in') ||
      lowercaseQuery.includes('punch out') ||
      lowercaseQuery.includes('check in') ||
      lowercaseQuery.includes('check out') ||
      lowercaseQuery.includes('mark attendance') ||
      lowercaseQuery.includes('attendance regularization') ||
      lowercaseQuery.includes('missed punch') ||
      lowercaseQuery.includes('forgot to punch')
    ) {
      return `**Attendance Management in Darwinbox:**

**Daily Attendance:**
1. **Login to Darwinbox:** https://diptab.darwinbox.in/
2. **Mark Attendance:** Use "Punch In/Out" feature on dashboard
3. **View Attendance:** Go to "Time & Attendance" section

**Attendance Regularization (if you missed marking attendance):**
1. Go to "Leaves" section in Darwinbox
2. Click "Exception for Attendance" or "Attendance Regularization"
3. Select "Leave Type" as "Exceptions for Attendance Request"
4. Choose appropriate sub-category:
   - Field Duty (if you were working outside office)
   - Work From Home
   - Forgot to Mark Attendance
   - System Issue
5. Select the date(s) and provide reason
6. Submit for manager approval

**Important:**
- You can regularize attendance up to **3 times per month** (22nd to 21st cycle)
- Regularization should be done within 7 days of the incident
- For field work, select "Field Duty" category

**For WFH or Field Duty:**
- Apply in advance through respective modules
- Don't wait until you miss attendance to regularize

Contact IT support for technical issues with punch-in/out system.`;
    }

    // Work From Home related queries - SPLIT INTO POLICY VS PROCESS
    // Process questions (how to apply)
    if (
      lowercaseQuery.includes('how to apply wfh') ||
      lowercaseQuery.includes('how do i apply wfh') ||
      lowercaseQuery.includes('how can i apply wfh') ||
      lowercaseQuery.includes('how to apply work from home') ||
      lowercaseQuery.includes('how do i apply work from home') ||
      lowercaseQuery.includes('how can i apply work from home') ||
      lowercaseQuery.includes('apply for wfh') ||
      lowercaseQuery.includes('apply for work from home') ||
      lowercaseQuery.includes('wfh application process') ||
      lowercaseQuery.includes('work from home application')
    ) {
      return `To apply for WFH:

1. Go to https://diptab.darwinbox.in/
2. Find "Work From Home" or "WFH Request" module
3. Click "Apply for WFH" → select dates and reason
4. Submit for manager approval
5. Track status in the same module

Apply at least 24 hours in advance!`;
    }

    // Policy questions (what is the policy)
    if (
      lowercaseQuery.includes('what is wfh policy') ||
      lowercaseQuery.includes('what is work from home policy') ||
      lowercaseQuery.includes('what is remote work policy') ||
      lowercaseQuery.includes('wfh policy') ||
      lowercaseQuery.includes('work from home policy') ||
      lowercaseQuery.includes('remote work policy') ||
      lowercaseQuery.includes('tell me about wfh policy') ||
      lowercaseQuery.includes('tell me about work from home policy')
    ) {
      return `**Work From Home Policy:**

- **Eligibility:** Role must be suitable for remote work + good performance record
- **Advance Notice:** Apply at least 24 hours in advance
- **Manager Approval:** Required before starting WFH
- **Working Hours:** Maintain same hours as office
- **Availability:** Must be reachable during work hours
- **Equipment:** Employee responsible for internet and tools

Manager has discretion based on work requirements.`;
    }

    // Salary and payslip related queries
    if (
      lowercaseQuery.includes('salary') ||
      lowercaseQuery.includes('payslip') ||
      lowercaseQuery.includes('pay slip') ||
      lowercaseQuery.includes('ctc') ||
      lowercaseQuery.includes('compensation') ||
      lowercaseQuery.includes('salary slip') ||
      lowercaseQuery.includes('salary breakdown') ||
      lowercaseQuery.includes('salary credit')
    ) {
      return `**Salary & Payslip Information in Darwinbox:**

**View Salary Details:**
1. **Login to Darwinbox:** https://diptab.darwinbox.in/
2. **Go to Compensation Section:** Click "Compensation" or "My Compensation"
3. **View CTC Breakdown:**
   - Click "Show Values" (you may need to confirm/authenticate)
   - Select "CTC View" to see complete breakdown
   - View components: Basic, HRA, Special Allowance, PF, etc.

**Download Payslip:**
1. **Payroll Section:** Go to "Payroll" or "My Payslips"
2. **Select Month/Year:** Choose the payslip month you need
3. **Download:** Click download button for PDF payslip
4. **Email Payslip:** Option to email payslip to your registered email

**Important Salary Information:**
- **Salary Credit Date:** 1st of every month (or next working day if 1st is holiday)
- **Payslip Availability:** Usually available by 2nd week of the month
- **Annual CTC Changes:** Reflected after appraisal cycle completion

**If Unable to Access:**
- Ensure your profile is complete and updated
- Contact HR if you can't access compensation details
- For salary queries, reach out to Finance team

**Tax Documents:**
- Form 16 available in same section during tax season
- Investment declarations can be submitted through Darwinbox

For salary policy questions, contact HR at hr@letstransport.com`;
    }

    // Enhanced Reimbursement related queries with better accuracy and comprehensive coverage
    if (
      lowercaseQuery.includes('reimbursement') ||
      lowercaseQuery.includes('expense') ||
      lowercaseQuery.includes('travel claim') ||
      lowercaseQuery.includes('fuel reimbursement') ||
      lowercaseQuery.includes('medical reimbursement') ||
      lowercaseQuery.includes('mobile reimbursement') ||
      lowercaseQuery.includes('submit bills') ||
      lowercaseQuery.includes('expense claim') ||
      lowercaseQuery.includes('how to claim') ||
      lowercaseQuery.includes('expense submission') ||
      lowercaseQuery.includes('finance team') ||
      lowercaseQuery.includes('connect finance')
    ) {
      return `**Complete Reimbursement Process in Darwinbox:**

**Step-by-Step Guide:**

1. **Access Darwinbox:** https://diptab.darwinbox.in/
2. **Navigate to Expenses:** Click "Reimbursement" or "Expenses" module
3. **Create New Claim:** Click "Create" → "New Expense Claim"
4. **Add Individual Expenses:**
   - Click "Create Expense"
   - **Expense Type:** Select from dropdown (Travel, Fuel, Mobile, Medical, Food, etc.)
   - **Date:** Date when expense was incurred
   - **Amount:** Exact amount from receipt
   - **Description:** Brief explanation of the expense
   - **Category:** Choose appropriate subcategory
   - **Upload Receipt:** Attach scanned/photographed receipt (PDF/JPG/PNG, max 5MB)
   - **Save:** Click "Save" to record the expense

5. **Create Reimbursement Claim:**
   - Go to "Recorded Expenses" section
   - Select all expenses you want to claim together
   - Click "Create Reimbursement"
   - Review all details
   - Submit for manager approval

**Important Timelines:**
- **Submission Deadline:** 5th of the following month
- **Disbursement:** By 20th of the following month
- **Receipt Retention:** Keep originals for 6 months

**Eligible Expense Types:**
- **Travel:** Flights, trains, cabs, local transport
- **Fuel:** For company vehicle usage (₹8/km for personal vehicles)
- **Mobile:** Monthly mobile bills (as per policy limits)
- **Medical:** Medical expenses (within policy coverage)
- **Food:** Outstation travel only (₹800/day metro, ₹600/day others)
- **Accommodation:** Hotel bills for business trips
- **Other:** Office supplies, training costs (with approval)

**Reimbursement Limits:**
- **Food:** Only for outstation travel, not local travel
- **Fuel:** Company vehicles use fuel cards, personal vehicles get per-km rate
- **Mobile:** Monthly limit as per policy
- **Travel:** Economy class for domestic, business class for international >6 hours
- **Accommodation:** ₹8,000/night metro cities, ₹5,000/night others

**Common Issues & Solutions:**
- **Receipt Missing:** Contact vendor for duplicate receipt
- **File Too Large:** Compress image or scan at lower resolution
- **Wrong Category:** Correct in Darwinbox or contact your manager
- **Rejected Claim:** Check rejection reason and resubmit with corrections

**Best Practices:**
- Submit expenses promptly (don't wait until deadline)
- Keep receipts organized and legible
- Use appropriate expense categories
- Provide clear descriptions
- Follow company travel policy for bookings

**For Reimbursement Support:**
- **Darwinbox Technical Issues:** Contact IT support
- **Policy Questions:** Contact your manager or HR at hr@letstransport.com
- **Claim Status:** Track in Darwinbox under "My Claims"
- **Rejected Claims:** Review rejection comments and resubmit

**Remember:** All reimbursement processes are handled internally through Darwinbox. No external finance team contact is required for standard reimbursement claims.`;
    }

    // Insurance and medical related queries
    if (
      lowercaseQuery.includes('insurance') ||
      lowercaseQuery.includes('medical insurance') ||
      lowercaseQuery.includes('health insurance') ||
      lowercaseQuery.includes('plum') ||
      lowercaseQuery.includes('insurance card') ||
      lowercaseQuery.includes('esic') ||
      lowercaseQuery.includes('add dependent') ||
      lowercaseQuery.includes('family insurance')
    ) {
      return `**Medical Insurance Information:**

**Insurance Coverage Based on Salary:**
- **Gross Salary ≤ ₹21,000:** ESIC coverage
- **Fixed CTC < ₹5 lakhs:** Group Medical Insurance of ₹1 lakh (self + spouse + 2 children if married)
- **Fixed CTC ≥ ₹5 lakhs:** Group Medical Insurance of ₹13 lakhs (self + parents + spouse + 2 children if married)

**Access Your Insurance Card:**
1. **Visit Plum Portal:** https://app.plumhq.com/dashboard
2. **Login:** Use your official email ID (@letstransport.com)
3. **Download E-Card:** Access your digital insurance card
4. **Policy Details:** View coverage, network hospitals, claim process

**Adding Dependents:**
- **Spouse:** Can be added within 30 days of marriage
- **Child:** Can be added within 30 days of birth
- **Mid-term additions:** Not allowed beyond 30-day window
- **Process:** Contact your HRBP (HR Business Partner) with marriage certificate/birth certificate

**For Insurance Support:**
- **Policy queries:** Contact your HRBP
- **Claims support:** Use Plum app or contact Plum customer care
- **Technical issues:** Contact IT support for login issues

**Important Notes:**
- Keep insurance card handy for hospital visits
- Use network hospitals for cashless treatment
- For reimbursement claims, submit through Plum portal

For detailed insurance policy, contact HR at hr@letstransport.com`;
    }

    // Profile and personal information queries
    if (
      lowercaseQuery.includes('update profile') ||
      lowercaseQuery.includes('personal information') ||
      lowercaseQuery.includes('change address') ||
      lowercaseQuery.includes('update mobile') ||
      lowercaseQuery.includes('emergency contact') ||
      lowercaseQuery.includes('bank details') ||
      lowercaseQuery.includes('pan card') ||
      lowercaseQuery.includes('aadhar')
    ) {
      return `**How to Update Personal Information in Darwinbox:**

**Update Profile:**
1. **Login to Darwinbox:** https://diptab.darwinbox.in/
2. **Go to Profile Section:** Click "My Profile" or "Personal Information"
3. **Edit Information:**
   - **Personal Details:** Name, DOB, Address, Phone Number
   - **Emergency Contacts:** Add/update emergency contact details
   - **Bank Information:** Account number, IFSC code (for salary credit)
   - **Documents:** Upload PAN, Aadhar, Passport, etc.
4. **Submit for Approval:** Some changes require HR approval

**Important Documents to Keep Updated:**
- **PAN Card:** Required for salary processing
- **Aadhar Card:** Mandatory for compliance
- **Bank Details:** For salary credit
- **Address Proof:** Current residential address
- **Emergency Contact:** Updated phone numbers

**Address Change Process:**
1. Update in "Personal Information" section
2. Upload address proof (utility bill, rental agreement, etc.)
3. Submit for HR approval
4. HR will verify and approve the change

**Bank Details Change:**
1. Go to "Banking Information" section
2. Update account number, IFSC code, bank name
3. Upload bank statement or cancelled cheque
4. Submit for Finance team approval

**Document Upload:**
- **File Formats:** PDF, JPG, PNG
- **File Size:** Maximum 5MB per document
- **Quality:** Ensure documents are clear and readable

**Important Notes:**
- Keep all information updated for smooth salary processing
- Address changes are important for tax compliance
- Contact HR if you face issues updating critical information

For support, contact HR at hr@letstransport.com`;
    }

    // Performance and appraisal related queries
    if (
      lowercaseQuery.includes('appraisal') ||
      lowercaseQuery.includes('performance review') ||
      lowercaseQuery.includes('kra') ||
      lowercaseQuery.includes('goal setting') ||
      lowercaseQuery.includes('self assessment') ||
      lowercaseQuery.includes('performance rating') ||
      lowercaseQuery.includes('increment') ||
      lowercaseQuery.includes('promotion')
    ) {
      return `**Performance Management in Darwinbox:**

**Appraisal Process:**
1. **Login to Darwinbox:** https://diptab.darwinbox.in/
2. **Performance Section:** Go to "Performance" or "My Reviews"
3. **Active Appraisal Cycle:** You'll see current appraisal if active
4. **Complete Self Assessment:**
   - Rate yourself on defined KRAs/competencies
   - Provide detailed comments and examples
   - Set goals for next cycle
   - Submit achievements and learnings

**Key Components:**
- **KRA Assessment:** Rate performance on Key Result Areas
- **Competency Assessment:** Technical and behavioral competencies  
- **Goal Achievement:** Review of previous year's goals
- **Self Rating:** Overall self-assessment
- **Development Plans:** Areas for improvement and career growth

**Timeline (Typical Annual Cycle):**
- **Goal Setting:** Beginning of financial year
- **Mid-Year Review:** Around September-October
- **Final Assessment:** March-April
- **Manager Review:** After self-assessment completion
- **HR Review:** Final calibration and rating

**Tips for Good Appraisal:**
- Be honest and provide specific examples
- Quantify achievements with numbers/metrics
- Highlight key projects and contributions
- Identify learning areas and development needs
- Set SMART goals for next cycle

**After Appraisal:**
- **Results:** Usually communicated within 4-6 weeks
- **Increment/Promotion:** Based on performance rating
- **Development Plan:** Discussed with reporting manager

For appraisal queries, contact your reporting manager or HR at hr@letstransport.com`;
    }

    // Training and learning queries
    if (
      lowercaseQuery.includes('training') ||
      lowercaseQuery.includes('learning') ||
      lowercaseQuery.includes('course') ||
      lowercaseQuery.includes('certification') ||
      lowercaseQuery.includes('skill development') ||
      lowercaseQuery.includes('learning management')
    ) {
      return `**Learning & Development in Darwinbox:**

**Access Training Modules:**
1. **Login to Darwinbox:** https://diptab.darwinbox.in/
2. **Learning Section:** Click "Learning" or "My Learning"
3. **Available Courses:** Browse available training programs
4. **Enroll in Courses:** Click on relevant courses to enroll

**Types of Training Available:**
- **Mandatory Compliance Training:** POSH, Safety, Ethics
- **Technical Skills:** Job-specific technical training
- **Soft Skills:** Communication, Leadership, Time Management
- **Company Induction:** For new employees
- **Certification Programs:** Industry-relevant certifications

**Training Process:**
1. **Course Enrollment:** Select and enroll in courses
2. **Complete Modules:** Go through training content
3. **Take Assessments:** Complete quizzes/tests
4. **Get Certificates:** Download completion certificates
5. **Track Progress:** Monitor your learning progress

**Important Notes:**
- **Mandatory Training:** Must be completed within specified deadlines
- **Certificates:** Keep certificates for your records
- **Feedback:** Provide course feedback for improvement
- **Manager Approval:** Some courses may require manager approval

**External Training:**
- **Approval Process:** Get manager and HR approval for external courses
- **Reimbursement:** As per company training policy
- **Application:** Submit through appropriate channels

**For Training Queries:**
- **Technical Issues:** Contact IT support
- **Course Content:** Contact Learning & Development team
- **Policy Questions:** Contact HR at hr@letstransport.com

**Career Development:**
Regular training helps in performance improvement and career growth opportunities.`;
    }

    // Darwinbox access and login issues
    if (
      lowercaseQuery.includes('darwinbox access') ||
      lowercaseQuery.includes('login problem') ||
      lowercaseQuery.includes('forgot password') ||
      lowercaseQuery.includes('cannot login') ||
      lowercaseQuery.includes('darwinbox login') ||
      lowercaseQuery.includes('reset password') ||
      lowercaseQuery.includes('account locked')
    ) {
      return `**Darwinbox Access & Login Support:**

**Login Information:**
- **URL:** https://diptab.darwinbox.in/
- **Username:** Your company email address (e.g., yourname@letstransport.com)
- **Password:** Your set password

**First Time Login:**
1. Visit https://diptab.darwinbox.in/
2. Enter your company email address
3. Click "Forgot Password" to set up your password
4. Check your email for password reset link
5. Set a strong password and login

**Forgot Password:**
1. Go to https://diptab.darwinbox.in/
2. Click "Forgot Password"
3. Enter your company email address
4. Check your email for reset instructions
5. Follow the link to create new password

**Common Login Issues:**
- **Wrong Email:** Use your official @letstransport.com email
- **Browser Issues:** Try different browser or clear cache
- **Internet Connection:** Ensure stable internet connection
- **Account Not Created:** Contact HR to set up your account

**Account Locked/Access Issues:**
1. **Wait 15-30 minutes** if account is temporarily locked
2. **Try Password Reset** if you remember having an account
3. **Contact IT Support** for technical issues
4. **Contact HR** if you never had Darwinbox access

**No Darwinbox Access:**
If you don't have Darwinbox access:
1. **Contact your HRBP** (HR Business Partner)
2. **Email HR:** hr@letstransport.com
3. **Provide Details:** Employee ID, Department, Manager name
4. **HR will create account** and provide access

**Security Tips:**
- Never share your login credentials
- Use strong, unique password
- Logout properly after use
- Report suspicious activity immediately

For immediate support, contact IT helpdesk or HR at hr@letstransport.com`;
    }

    // General Darwinbox navigation and features
    if (
      lowercaseQuery.includes('what can i do in darwinbox') ||
      lowercaseQuery.includes('darwinbox features') ||
      lowercaseQuery.includes('how to use darwinbox') ||
      lowercaseQuery.includes('darwinbox modules') ||
      lowercaseQuery.includes('darwinbox help')
    ) {
      return `**Complete Guide to Darwinbox Features:**

**What You Can Do in Darwinbox:**

**📝 Leave Management:**
- Apply for leaves (Casual, Sick, Earned, Annual)
- Check leave balance
- View leave history and status

**⏰ Attendance & Time:**
- Mark daily attendance (Punch In/Out)
- Apply for attendance regularization
- Request Work From Home
- View attendance reports

**💰 Compensation:**
- View complete CTC breakdown
- Download monthly payslips
- Access Form 16 for tax filing
- Check salary credit information

**💸 Expenses & Reimbursements:**
- Submit expense claims
- Upload receipts and bills
- Track reimbursement status
- Manage travel and fuel expenses

**👤 Profile Management:**
- Update personal information
- Change address and contact details
- Upload important documents
- Manage emergency contacts

**📈 Performance:**
- Complete appraisal and self-assessment
- View performance ratings
- Set and track goals
- Access development plans

**🎓 Learning & Development:**
- Enroll in training courses
- Complete mandatory compliance training
- Download certificates
- Track learning progress

**🏥 Benefits & Insurance:**
- Access insurance information
- View policy details
- Manage dependent information

**📊 Reports & Analytics:**
- View various HR reports
- Track your metrics and KPIs
- Download required documents

**🔔 Notifications:**
- Get updates on approvals
- Receive important announcements
- Stay informed about policy changes

**Navigation Tips:**
- **Dashboard:** Overview of pending tasks
- **Menu:** Access all modules from left menu
- **My Tasks:** See items requiring your action
- **Notifications:** Stay updated with alerts

**For Support:**
- **Technical Issues:** Contact IT support
- **HR Queries:** Contact HR at hr@letstransport.com
- **Manager Approvals:** Follow up with your reporting manager

**Pro Tip:** Keep your Darwinbox profile updated and check regularly for important notifications!`;
    }

    // Probation related queries
    if (
      lowercaseQuery.includes('probation') ||
      lowercaseQuery.includes('probation period') ||
      lowercaseQuery.includes('confirmation') ||
      lowercaseQuery.includes('probation extension') ||
      lowercaseQuery.includes('when will i get confirmed')
    ) {
      return `Hey! I totally understand why you'd want to know about probation - it's one of those things that can make you a bit anxious, right? Let me put your mind at ease with all the details:

**The basics:**
- **Your probation period is 3 months** - pretty standard across the industry
- **You'll get an email confirmation** through Darwinbox once it's complete
- **Sometimes it might get extended** if your manager feels you need a bit more time to settle in, but don't worry - that's not necessarily a bad thing!

**Here's what happens during probation:**
- **Monthly check-ins** with your manager (great opportunity to get feedback!)
- **Continuous performance evaluation** - they're basically seeing how you're fitting in
- **Regular feedback sessions** - please don't hesitate to ask for feedback if you're not getting enough
- **A comprehensive review** before your confirmation

**When you get confirmed:**
- **Automatic email notification** through Darwinbox - you won't miss it!
- **HR will also reach out** to congratulate you and update your status
- **You'll get a confirmation letter** for your records

**My advice during probation:**
- **Focus on learning** - understand your role inside and out
- **Ask for feedback regularly** - your manager wants you to succeed!
- **Complete all your training** - especially the induction programs
- **Meet those performance standards** - if you're unsure what they are, just ask!

**If probation gets extended (don't panic!):**
- **Your manager will explain** exactly what areas need improvement
- **You'll get a clear development plan** with specific actions to take
- **Timeline will be crystal clear** - no guessing games
- **Extra support and mentoring** - we want you to succeed!

**Thinking of resigning during probation?**
- **Notice period might vary** based on your grade level
- **Chat with HR first** - we can discuss your specific situation
- **Proper process still applies** - we'll guide you through it

**Pro tips from my experience:**
- Keep track of your probation end date (put it in your calendar!)
- Proactively ask for feedback - don't wait for it to come to you
- Document your wins and learnings - it's great for confidence
- Ask questions early and often - better to clarify than assume

Remember, probation is really just a mutual getting-to-know-you period. We want you to succeed as much as you do! If you have any concerns or questions about your probation, don't hesitate to reach out to your manager or drop me a line at hr@letstransport.com.

You've got this! 💪`;
    }

    // General queries that don't match specific patterns
    if (
      lowercaseQuery.includes('how to') ||
      lowercaseQuery.includes('where can i') ||
      lowercaseQuery.includes('help') ||
      lowercaseQuery.includes('support')
    ) {
      return `**Darwinbox General Help:**

**Getting Started:**
1. **Login:** https://diptab.darwinbox.in/ with your company email
2. **Dashboard:** Overview of your key information and pending tasks
3. **Navigation:** Use left menu to access different modules

**Key Modules to Explore:**
- **My Profile:** Update personal information
- **Leaves:** Apply and manage leave requests  
- **Time & Attendance:** Mark attendance and view reports
- **Compensation:** View salary details and payslips
- **Reimbursement:** Submit expense claims
- **Performance:** Access appraisal and goal-setting tools
- **Learning:** Enroll in training programs

**Getting Help:**
- **Module-specific Help:** Look for help icons (?) in each section
- **User Guides:** Available within Darwinbox platform
- **IT Support:** For technical login/access issues
- **HR Support:** For policy and process questions at hr@letstransport.com
- **Manager Support:** For role-specific and approval-related queries

**Best Practices:**
- Keep your profile information updated
- Check notifications regularly
- Submit requests with proper documentation
- Follow up on pending approvals appropriately

**Quick Access Tips:**
- Bookmark frequently used modules
- Use search function to find specific features
- Set up email notifications for important updates
- Keep your browser updated for best performance

If you have a specific question about any Darwinbox feature, feel free to ask!`;
    }

    // Fallback for non-Darwinbox queries
    return `I can help you with Darwinbox-related questions like:
- How to apply for leaves
- Attendance marking and regularization  
- Expense reimbursement process
- Salary and payslip access
- Profile updates
- Performance management
- Insurance and benefits
- Training and learning

**Quick Darwinbox Access:** https://diptab.darwinbox.in/

For specific policy information not related to Darwinbox, please refer to the relevant policy document or contact HR at hr@letstransport.com.`;
  }

  // Add detailed Q&A for policy context
  export const extraPolicyFAQ = `
  Probation
  1. What is the probation period? / Will I get confirmation of probation after my official probation?
  Ans: The probation period is 3 months. Once your probation is confirmed, you will be notified via email through Darwinbox. Please note that the manager has the authority to extend the probation period if the performance is not up to the expected standards.
  2. What happens if I want to resign during the probation period?
  Ans: During the probation the notice period is 15 days.

  Salary, Reimbursement & Benefits
  3. What is the salary credit date?
  Ans: Salary is credited on the 1st of every month. In case the 1st falls on a non-working day or a bank holiday, it will be processed on the next working day.
  4. Where can I view my salary breakup and CTC?
  Ans: Login to Darwinbox>> Compensation>> Show value>> Confirm>> Show values>> CTC View
  5. How do I submit bills for travel/food/mobile/relocation reimbursement?
  Ans: Login to Darwinbox>> Reimbursement>> Create>> Create Expense>> Select Expense Type>> Fill the form>> Save>> Select Recorded Expense>> Create Reimbursement
  6. What are the eligibility of the claims?
  Policy to show specifically
  7. Am I eligible for food reimbursement?
  Ans: Food reimbursement is not applicable for travel within the city. However, if you are travelling outstation, you can claim up to ₹800 per day in metro cities such as NCR, Bangalore, Chennai, Mumbai, and Hyderabad, and up to ₹600 per day in non-metro cities.
  8. What are the timelines and processes for reimbursement cycles?
  Ans: Bills for a particular month must be submitted by the 5th of the following month. Example: If a claim was incurred in September 2024, it should be submitted by the 5th of October 2024. Disbursement will be done on or before 20th of the following month.
  9. Medical Insurance
  One of the benefits you get based on the current salary
  Ans: i) If your gross monthly salary is INR 21,000 or below, you are eligible for ESIC coverage.
  ii) If your fixed CTC is below INR 5 lakhs, you will be covered under a Group Medical Insurance policy of INR 1 lakh for yourself. If you are married, your spouse and up to two children will also be covered.
  iii) If your fixed CTC is INR 5 lakhs or above, you will be covered under a Group Medical Insurance policy of INR 13 lakhs. This includes coverage for yourself, your parents, and if married, your spouse and up to two children.
  10. How do I access my insurance card? / how do I access Plum?
  Ans: You can access your insurance details and e-card by logging in to https://app.plumhq.com/dashboard using your official email ID.
  11. How do I add a dependent (spouse/parent) to my insurance?
  A spouse can be added within 30 days from the date of marriage, and a child can be added within 30 days from the date of birth. Mid-term additions beyond this window are not allowed. For further assistance, you may email your respective HRBP.
  12. What are the treatments covered under my insurance?
  13. What is the timeline to receive the amount spent on medical treatment in a non-network hospital?

  Leave & Attendance
  12. What is the official leave policy (casual, sick, earned, comp-off)?
  Policy
  14. What if I miss to apply for Field Duty or WFH? / What if I had missed marking attendance?
  Ans: You can regularize your attendance 3 times in a month between 22nd to 21st, here is the step. Login to darwinbox>> Leaves>> Exception for attendance>> Apply Leave>> Select Leave Type "Exceptions for Attendance Request" >> Select the right Sub category>> Date>> message>> Submit
  15. When do I get my privileged leave?
  If you have completed 1 year with us, 18 PLs would be credited to you for that year and post which every month 1.5 leave gets added to your PL balance

  Exit and FNF
  15. What is the notice period as per my role?
  If your grade is G3 and below then it is 30 days, anything beyond that is 60 days
  16. How do I formally resign on Darwinbox?
  https://www.loom.com/share/d09c1eadb43044d08e5fe691568220b9?sid=58d6fd0b-11a1-4289-b7b4-29aac39832b8
  17. What is the F&F timeline, and how do I track it?
  Ans: within 45 days from when all the exit clearances are completed.
  18. What if stakeholder clearances are not taken on exit date?
  Ans: There will be a delay in processing the F&F. From the date we receive the approvals, we will calculate 45 days to clear the F&F
  19. What to do after I resign?
  Ensure, you have resigned on Darwinbox and get the approval from your manager to finalize the last working day. Until this is done, your resignation will not be considered.
  20. What to do on my last day?
  - Submit all the assets that were assigned to you like laptop, charger, mouse, ID card, sim etc
  - Go to darwinbox and act on your clearance and exit interview
  - Reach out to all the stakeholder for their clearances (reporting manager, IT, Admin, HR)
  21. What if I have not served my entire notice period?
  - The shortfall of it would be recovered from your FNF if it had not been waived off by your L2 manager on darwin box. Ensure to get this done on your last working day in case there is a shortfall.
  22. What if I don't give my clearance during exit?
  We would be initiating the process manually but your FNF dates will be extended
  `;
