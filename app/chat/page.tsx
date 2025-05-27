"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Loader2 } from "lucide-react"
import { Header } from "@/components/header"
import { useSearchParams } from "next/navigation"
import { getPolicyById } from "@/lib/policies"

export default function ChatPage() {
  const searchParams = useSearchParams()
  const policyId = searchParams.get("policy")
  const policy = policyId ? getPolicyById(policyId) : null

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: policy
      ? [
          {
            id: "initial",
            role: "assistant",
            content: `Hello! I'm here to help you understand the ${policy.title}. You can ask me any questions about this policy, and I'll provide clear explanations. What would you like to know?`,
          },
        ]
      : [
          {
            id: "initial",
            role: "assistant",
            content:
              "Hello! I'm your Letstransport policy assistant. I can help you understand company policies, answer questions about HR processes, and guide you through various procedures. What would you like to know?",
          },
        ],
  })

  const suggestedQuestions = policy
    ? [
        `What are the key points of the ${policy.title}?`,
        "How do I apply this policy?",
        "What are the requirements?",
        "Are there any exceptions?",
      ]
    : [
        "What is the leave policy?",
        "How do I apply for leave?",
        "What is the remote work policy?",
        "How do I submit expenses?",
        "When is the appraisal cycle?",
      ]

  // Function to process message content and highlight important parts
  const processMessageContent = (content: string) => {
    const parts = content.split(/(\[HIGHLIGHT\].*?\[\/HIGHLIGHT\])/g)

    return parts.map((part, index) => {
      if (part.startsWith("[HIGHLIGHT]") && part.endsWith("[/HIGHLIGHT]")) {
        const highlightedText = part.replace(/\[HIGHLIGHT\]|\[\/HIGHLIGHT\]/g, "")
        return (
          <span key={index} className="bg-yellow-200 px-1 py-0.5 rounded font-semibold text-gray-900">
            {highlightedText}
          </span>
        )
      }
      return part
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Policy Assistant</h1>
            {policy && (
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Discussing:</span>
                <Badge variant="secondary">{policy.title}</Badge>
              </div>
            )}
          </div>

          {/* Chat Interface */}
          <Card className="h-[600px] flex flex-col overflow-hidden">
            <CardHeader className="border-b flex-shrink-0">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                Chat with AI Assistant
                <Badge variant="outline" className="text-xs">
                  Powered by Google Gemini
                </Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.role === "user" ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div
                        className={`rounded-lg p-3 break-words ${
                          message.role === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <div className="whitespace-pre-wrap break-words">
                          {message.role === "assistant" ? processMessageContent(message.content) : message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-gray-100 text-gray-900 rounded-lg p-3">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </div>
                )}
              </div>

              {/* Suggested Questions */}
              {messages.length <= 1 && (
                <div className="p-4 border-t bg-gray-50 flex-shrink-0">
                  <p className="text-sm text-gray-600 mb-2">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleInputChange({ target: { value: question } } as any)}
                        className="text-xs"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="p-4 border-t flex-shrink-0">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything about company policies..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isLoading || !input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
