export interface Policy {
  id: string
  title: string
  category: string
  description: string
  content: string
  lastUpdated: string
  tags: string[]
}

export const policies: Policy[] = [
  {
    id: "leave-policy",
    title: "Leave Policy",
    category: "Time Off",
    description: "Comprehensive guide to annual leave, sick leave, and special leave entitlements",
    content: `
# Leave Policy

## Annual Leave
- All employees are entitled to 21 days of annual leave per year
- Leave must be approved by your direct manager at least 2 weeks in advance
- Maximum of 5 days can be carried forward to the next year
- For drivers and field staff, coordinate with dispatch team for coverage

## Sick Leave
- 12 days of sick leave per year
- Medical certificate required for absences longer than 3 consecutive days
- Unused sick leave cannot be carried forward
- Drivers must inform dispatch immediately if unable to complete routes

## Maternity/Paternity Leave
- 6 months paid maternity leave
- 2 weeks paid paternity leave
- Additional unpaid leave available upon request

## Emergency Leave
- Up to 3 days for family emergencies
- Must be reported within 24 hours
- Documentation may be required

## Leave Application Process
1. Submit leave request through Darwinbox (https://diptab.darwinbox.in/)
2. Get manager approval
3. Ensure handover of responsibilities
4. Update team calendar and route assignments
    `,
    lastUpdated: "2024-01-15",
    tags: ["leave", "vacation", "sick", "maternity", "paternity", "emergency", "drivers"],
  },
  {
    id: "driver-safety-guidelines",
    title: "Driver Safety Guidelines",
    category: "Safety",
    description: "Comprehensive safety protocols for all drivers and vehicle operators",
    content: `
# Driver Safety Guidelines

## Pre-Trip Inspection
- Check vehicle condition before every trip
- Verify tire pressure, brakes, lights, and mirrors
- Ensure all safety equipment is present and functional
- Report any defects immediately to maintenance team

## Driving Standards
- Follow all traffic rules and regulations
- Maintain safe following distances
- No mobile phone use while driving (hands-free only)
- Take mandatory breaks every 4 hours for long routes

## Vehicle Maintenance
- Regular servicing as per schedule
- Daily cleaning and basic maintenance checks
- Report any mechanical issues immediately
- Keep vehicle documents updated

## Emergency Procedures
- Contact emergency helpline: 1800-XXX-XXXX
- Follow accident reporting protocol
- Carry first aid kit and emergency contact numbers
- Know location of nearest hospitals on regular routes

## Load Management
- Verify load weight and distribution
- Secure cargo properly before departure
- Check load during stops for long journeys
- Follow hazardous material handling procedures if applicable

## Documentation
- Carry valid driving license and vehicle documents
- Maintain trip logs and delivery receipts
- Update GPS tracking system
- Submit daily reports through mobile app
    `,
    lastUpdated: "2024-02-01",
    tags: ["safety", "drivers", "vehicles", "maintenance", "emergency", "inspection"],
  },
  {
    id: "warehouse-operations",
    title: "Warehouse Operations Manual",
    category: "Operations",
    description: "Standard operating procedures for warehouse and logistics operations",
    content: `
# Warehouse Operations Manual

## Receiving Procedures
- Verify incoming shipments against purchase orders
- Check for damage and report discrepancies immediately
- Update inventory management system in real-time
- Follow proper storage protocols based on item type

## Storage Guidelines
- Maintain FIFO (First In, First Out) system
- Label all items clearly with dates and batch numbers
- Keep hazardous materials in designated areas
- Maintain temperature-controlled zones as required

## Picking and Packing
- Use handheld scanners for accuracy
- Follow packing guidelines for different product types
- Verify addresses and special delivery instructions
- Apply proper labeling and documentation

## Quality Control
- Inspect items before dispatch
- Verify order accuracy and completeness
- Check packaging integrity
- Maintain quality logs and reports

## Safety Protocols
- Wear appropriate PPE at all times
- Follow forklift and machinery safety procedures
- Keep emergency exits clear
- Report safety hazards immediately

## Inventory Management
- Conduct regular cycle counts
- Update system for all movements
- Investigate and resolve discrepancies
- Maintain minimum stock levels
    `,
    lastUpdated: "2024-01-20",
    tags: ["warehouse", "operations", "inventory", "safety", "quality", "procedures"],
  },
  {
    id: "travel-reimbursement",
    title: "Travel & Fuel Reimbursement Policy",
    category: "Finance",
    description: "Guidelines for business travel expenses, fuel costs, and reimbursement procedures",
    content: `
# Travel & Fuel Reimbursement Policy

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
    `,
    lastUpdated: "2024-01-10",
    tags: ["travel", "reimbursement", "fuel", "expenses", "drivers", "accommodation"],
  },
  {
    id: "code-of-conduct",
    title: "Code of Conduct",
    category: "Ethics",
    description: "Professional behavior guidelines and ethical standards for all Letstransport employees",
    content: `
# Code of Conduct

## Professional Behavior
- Treat all colleagues, clients, and partners with respect
- Maintain professional communication in all interactions
- Dress appropriately for your role and client meetings
- Represent Letstransport values in all business dealings

## Customer Service Excellence
- Prioritize customer satisfaction in all interactions
- Handle complaints professionally and promptly
- Maintain confidentiality of customer information
- Go the extra mile to exceed expectations

## Ethical Standards
- Act with integrity in all business dealings
- Avoid conflicts of interest
- Report any unethical behavior immediately
- Maintain transparency in all transactions

## Workplace Guidelines
- Maintain confidentiality of company and client information
- Use company resources responsibly
- Follow safety protocols at all times
- Respect company property and equipment

## Driver-Specific Conduct
- Maintain professional appearance and behavior
- Be courteous to customers during deliveries
- Handle goods with care and responsibility
- Follow all traffic rules and company driving standards

## Anti-Harassment Policy
- Zero tolerance for harassment or discrimination
- Report incidents to HR immediately
- All reports will be investigated promptly and confidentially
- Respect diversity and inclusion principles

## Social Media Guidelines
- Do not share confidential company information
- Be respectful when representing the company online
- Follow company branding guidelines
- Avoid posting content that could harm company reputation
    `,
    lastUpdated: "2024-02-15",
    tags: ["conduct", "ethics", "behavior", "customer service", "drivers", "harassment"],
  },
  {
    id: "remote-work",
    title: "Remote Work Policy",
    category: "Work Arrangements",
    description: "Guidelines for working from home and remote work arrangements",
    content: `
# Remote Work Policy

## Eligibility
- Available to office-based employees after 6 months of employment
- Role must be suitable for remote work
- Manager approval required
- Not applicable to drivers and warehouse staff

## Equipment and Setup
- Company laptop and necessary software provided
- Internet allowance of ₹2000 per month
- Ergonomic chair reimbursement up to ₹15,000
- VPN access for secure connectivity

## Working Hours
- Core hours: 10 AM to 4 PM IST
- Flexible start and end times within reason
- Must be available for team meetings
- Coordinate with field operations team for urgent matters

## Communication Requirements
- Daily check-ins with team
- Weekly one-on-ones with manager
- Respond to messages within 4 hours during working hours
- Available for emergency logistics coordination

## Performance Expectations
- Same productivity standards as office work
- Regular deliverables and milestone tracking
- Quarterly performance reviews
- Maintain coordination with field operations

## Security Guidelines
- Use VPN for all company system access
- Secure home workspace
- Regular software updates required
- No sharing of login credentials
    `,
    lastUpdated: "2024-01-25",
    tags: ["remote", "work from home", "equipment", "security", "communication", "office staff"],
  },
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

export const categories = Array.from(new Set(policies.map((policy) => policy.category)))
