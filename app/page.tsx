import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, MessageSquare, Search, Users, FileText, Clock, Truck, Package, MapPin } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            AI-Powered Policy Assistant
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Letstransport</span> Policy Portal
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            <strong className="text-2xl text-gray-800">Logistics, But Better</strong>
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get instant answers to your policy questions, understand company guidelines, and navigate HR processes with
            our AI-powered assistant. Designed specifically for our logistics and transport team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/policies">Browse Policies</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/chat">Ask AI Assistant</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How We Help Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Policy Explanations</CardTitle>
              <CardDescription>Get clear, easy-to-understand explanations of company policies</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Our AI breaks down complex logistics and HR policies into simple language you can understand.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Interactive Chat</CardTitle>
              <CardDescription>Ask questions and get instant answers about any policy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Chat with our AI assistant to get personalized guidance on policies and procedures.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Smart Search</CardTitle>
              <CardDescription>Find exactly what you're looking for with intelligent search</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Search using natural language and find relevant policies instantly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/policies/leave-policy" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">Leave Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Annual leave, sick leave, maternity/paternity leave guidelines</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/policies/code-of-conduct" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Users className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">Code of Conduct</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Professional behavior, ethics, and workplace guidelines</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/policies/remote-work" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <FileText className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">Remote Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Work from home policies, equipment, and productivity guidelines</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/policies/driver-safety-guidelines" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Truck className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">Driver Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Safety protocols, vehicle maintenance, and delivery procedures</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/policies/warehouse-operations" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Package className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">Operations Manual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Warehouse operations, logistics procedures, and quality standards
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/policies/travel-reimbursement" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">Travel & Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Business travel, fuel reimbursement, and expense reporting</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50 rounded-lg mx-4 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Letstransport</h2>
          <p className="text-lg text-gray-600 mb-4">
            We offer customized logistics services that make transportation better, smarter, and more efficient.
          </p>
          <p className="text-gray-600">
            Our team of dedicated professionals works across enterprises and driver partners to deliver exceptional
            logistics solutions. This policy portal ensures everyone has access to clear guidelines and instant support.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Letstransport. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Need help? Contact HR at hr@letstransport.com</p>
          <p className="text-gray-400 mt-1">
            Visit us at{" "}
            <a href="https://letstransport.in" className="text-primary hover:underline">
              letstransport.in
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
