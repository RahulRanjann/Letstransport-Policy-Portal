"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Users, Building2, MapPin } from "lucide-react"
import { Header } from "@/components/header"

interface Department {
  name: string
  employees: number
  subDepartments?: Department[]
  location?: string
}

const organizationData: Department = {
  name: "Diptab Ventures Pvt.Ltd",
  employees: 470,
  location: "India",
  subDepartments: [
    {
      name: "Business Management",
      employees: 59,
      subDepartments: [
        { name: "Business Management - Intra1", employees: 12, location: "Intra 1" },
        { name: "Business Management - Intra2", employees: 6, location: "Intra 2" },
        { name: "Business Management - UpCountry(C&C)", employees: 4, location: "Up Country" },
        { name: "Business Management - UpCountry(Projects)", employees: 2, location: "Up Country - Projects" },
      ],
    },
    {
      name: "Business Operations",
      employees: 217,
      subDepartments: [
        { name: "Business Operations - Intra 1", employees: 81, location: "Intra 1" },
        { name: "Business Operations - Intra 2", employees: 44, location: "Intra 2" },
        { name: "Business Operations - Low Credit", employees: 4, location: "Low Credit" },
        { name: "Business Operations - Up Country", employees: 80, location: "Up Country" },
      ],
    },
    {
      name: "Central Sales",
      employees: 10,
      subDepartments: [
        { name: "Acquisition - Intra1", employees: 0, location: "Intra 1" },
        { name: "Acquisition - UPC", employees: 2, location: "Up Country" },
        { name: "Central Sales - Up Country - C&C", employees: 2 },
        { name: "Central Sales- Intra2", employees: 1, location: "Intra 2" },
        {
          name: "Farming",
          employees: 5,
          subDepartments: [
            { name: "Farming - Intra2", employees: 2, location: "Intra 2" },
            { name: "Farming-UpCountry", employees: 1, location: "Up Country" },
          ],
        },
      ],
    },
    {
      name: "Client Relations",
      employees: 24,
      subDepartments: [
        { name: "CRE - Intra 2", employees: 4, location: "Intra 2" },
        { name: "CRE - Intra1", employees: 7, location: "Intra 1" },
        { name: "CRE - Low Credit", employees: 2, location: "Low Credit" },
        { name: "CRE-UpCountry", employees: 7, location: "Up Country" },
        { name: "CRM", employees: 1 },
        { name: "Client Relations - LowCredit", employees: 0, location: "Low Credit" },
      ],
    },
    {
      name: "Control Room",
      employees: 14,
      subDepartments: [
        { name: "Control Room - Intra 1", employees: 4, location: "Intra 1" },
        { name: "Control Room - UpCountry", employees: 9, location: "Up Country" },
      ],
    },
    {
      name: "Finance",
      employees: 45,
      subDepartments: [
        { name: "Accounting", employees: 3 },
        { name: "Business Finance", employees: 1 },
        { name: "Client Onboarding", employees: 2 },
        { name: "Collections", employees: 8 },
        { name: "Controllership", employees: 2 },
        { name: "Invoicing", employees: 15 },
        { name: "Payments", employees: 9 },
      ],
    },
    {
      name: "Field Operations",
      employees: 3,
      subDepartments: [
        { name: "Field Operations - Intra2", employees: 1, location: "Intra 2" },
        { name: "Field Operations - UpCountry", employees: 0, location: "Up Country" },
        { name: "Field Operations-Intra1", employees: 1, location: "Intra 1" },
      ],
    },
    { name: "General Management", employees: 7 },
    {
      name: "MIS",
      employees: 11,
      subDepartments: [
        { name: "MIS- Intra2", employees: 1, location: "Intra 2" },
        { name: "MIS-UPC", employees: 1, location: "Up Country" },
      ],
    },
    { name: "Technology", employees: 15 },
    { name: "People & Culture", employees: 15 },
    { name: "Driver", employees: 2 },
    { name: "POD", employees: 12 },
    { name: "Partner Support", employees: 5 },
    { name: "New Initiative", employees: 31 },
    { name: "Vigilance", employees: 2 },
    { name: "Corporate Development", employees: 1 },
    { name: "Central Operations", employees: 1 },
    { name: "Central Sourcing", employees: 0 },
    { name: "City Management", employees: 12 },
    { name: "Customer Service", employees: 0 },
    { name: "FQLC", employees: 1 },
    { name: "Finance", employees: 1 },
    { name: "HouseKeeping", employees: 0 },
    { name: "Operations", employees: 0 },
    { name: "Operations Design", employees: 0 },
    { name: "Regional Management", employees: 4 },
    { name: "Small and Medium Enterprises", employees: 1 },
    { name: "Supply", employees: 9 },
  ],
}

function DepartmentNode({ department, level = 0 }: { department: Department; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level < 2)
  const hasSubDepartments = department.subDepartments && department.subDepartments.length > 0

  const getEmployeeColor = (count: number) => {
    if (count === 0) return "bg-gray-100 text-gray-600"
    if (count <= 5) return "bg-blue-100 text-blue-800"
    if (count <= 15) return "bg-green-100 text-green-800"
    if (count <= 50) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <div className={`${level > 0 ? "ml-6 border-l-2 border-gray-200 pl-4" : ""}`}>
      <Card className={`mb-3 ${level === 0 ? "border-2 border-primary" : ""}`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {hasSubDepartments && (
                <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="p-1 h-6 w-6">
                  {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
              )}
              <div>
                <CardTitle className={`${level === 0 ? "text-xl" : level === 1 ? "text-lg" : "text-base"}`}>
                  <div className="flex items-center gap-2">
                    {level === 0 ? <Building2 className="h-5 w-5" /> : <Users className="h-4 w-4" />}
                    {department.name}
                  </div>
                </CardTitle>
                {department.location && (
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-gray-500" />
                    <span className="text-sm text-gray-600">{department.location}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={getEmployeeColor(department.employees)}>
                {department.employees} {department.employees === 1 ? "Employee" : "Employees"}
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {hasSubDepartments && isExpanded && (
        <div className="space-y-2">
          {department.subDepartments!.map((subDept, index) => (
            <DepartmentNode key={index} department={subDept} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function OrgChartPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showStats, setShowStats] = useState(true)

  const departmentStats = organizationData.subDepartments?.map((dept) => ({
    name: dept.name,
    employees: dept.employees,
    percentage: ((dept.employees / organizationData.employees) * 100).toFixed(1),
  }))

  const topDepartments = departmentStats
    ?.filter((dept) => dept.employees > 0)
    .sort((a, b) => b.employees - a.employees)
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Organization Chart</h1>
          <p className="text-gray-600 mb-6">
            Interactive view of Letstransport's organizational structure with {organizationData.employees} employees
            across multiple departments and geographic divisions.
          </p>

          <div className="flex gap-4 mb-6">
            <Button variant={showStats ? "default" : "outline"} onClick={() => setShowStats(!showStats)}>
              {showStats ? "Hide" : "Show"} Statistics
            </Button>
          </div>
        </div>

        {showStats && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{organizationData.employees}</div>
                <p className="text-sm text-gray-600">Across all departments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Departments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{organizationData.subDepartments?.length}</div>
                <p className="text-sm text-gray-600">Main departments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Geographic Divisions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Intra 1</span>
                    <Badge variant="outline">City Operations</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Intra 2</span>
                    <Badge variant="outline">Secondary Cities</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Up Country</span>
                    <Badge variant="outline">Rural Areas</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {topDepartments && (
              <Card className="md:col-span-2 lg:col-span-3">
                <CardHeader>
                  <CardTitle className="text-lg">Largest Departments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-5 gap-4">
                    {topDepartments.map((dept, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary">{dept.employees}</div>
                        <div className="text-sm font-medium">{dept.name}</div>
                        <div className="text-xs text-gray-500">{dept.percentage}% of total</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <div className="bg-white rounded-lg p-6">
          <DepartmentNode department={organizationData} />
        </div>

        <div className="mt-8 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                For questions about organizational structure, reporting lines, or department contacts:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="outline">Contact People & Culture</Button>
                <Button variant="outline">Email hr@letstransport.com</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
