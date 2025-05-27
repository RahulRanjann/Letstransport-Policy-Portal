import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { getPolicyById } from "@/lib/policies"
import type { JSX } from "react"

interface PolicyPageProps {
  params: {
    id: string
  }
}

// Function to format policy content from markdown-like text to proper HTML
function formatPolicyContent(content: string) {
  const lines = content.split("\n")
  const formattedLines: JSX.Element[] = []
  let currentList: string[] = []
  let listType: "ordered" | "unordered" | null = null

  const flushList = () => {
    if (currentList.length > 0) {
      if (listType === "ordered") {
        formattedLines.push(
          <ol key={formattedLines.length} className="list-decimal list-inside ml-4 mb-4 space-y-1">
            {currentList.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ol>,
        )
      } else {
        formattedLines.push(
          <ul key={formattedLines.length} className="list-disc list-inside ml-4 mb-4 space-y-1">
            {currentList.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>,
        )
      }
      currentList = []
      listType = null
    }
  }

  lines.forEach((line, index) => {
    const trimmedLine = line.trim()

    if (!trimmedLine) {
      flushList()
      return
    }

    // Handle headers
    if (trimmedLine.startsWith("# ")) {
      flushList()
      formattedLines.push(
        <h1 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">
          {trimmedLine.substring(2)}
        </h1>,
      )
    } else if (trimmedLine.startsWith("## ")) {
      flushList()
      formattedLines.push(
        <h2 key={index} className="text-xl font-semibold text-gray-800 mb-3 mt-5">
          {trimmedLine.substring(3)}
        </h2>,
      )
    } else if (trimmedLine.startsWith("### ")) {
      flushList()
      formattedLines.push(
        <h3 key={index} className="text-lg font-medium text-gray-700 mb-2 mt-4">
          {trimmedLine.substring(4)}
        </h3>,
      )
    }
    // Handle numbered lists
    else if (/^\d+\.\s/.test(trimmedLine)) {
      if (listType !== "ordered") {
        flushList()
        listType = "ordered"
      }
      currentList.push(trimmedLine.replace(/^\d+\.\s/, ""))
    }
    // Handle bullet points
    else if (trimmedLine.startsWith("- ")) {
      if (listType !== "unordered") {
        flushList()
        listType = "unordered"
      }
      currentList.push(trimmedLine.substring(2))
    }
    // Handle regular paragraphs
    else {
      flushList()
      formattedLines.push(
        <p key={index} className="text-gray-700 mb-3 leading-relaxed">
          {trimmedLine}
        </p>,
      )
    }
  })

  // Flush any remaining list
  flushList()

  return formattedLines
}

export default function PolicyPage({ params }: PolicyPageProps) {
  const policy = getPolicyById(params.id)

  if (!policy) {
    notFound()
  }

  const formattedContent = formatPolicyContent(policy.content)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/policies">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Policies
            </Link>
          </Button>

          {/* Policy Header */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {policy.category}
                  </Badge>
                  <CardTitle className="text-2xl mb-2">{policy.title}</CardTitle>
                  <p className="text-gray-600">{policy.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Last updated: {new Date(policy.lastUpdated).toLocaleDateString()}
                </div>

                <Button asChild>
                  <Link href={`/chat?policy=${policy.id}`}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Ask AI About This Policy
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Policy Content */}
          <Card>
            <CardContent className="pt-6">
              <div className="prose prose-gray max-w-none">{formattedContent}</div>
            </CardContent>
          </Card>

          {/* Tags */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Related Topics:</h3>
            <div className="flex flex-wrap gap-2">
              {policy.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
