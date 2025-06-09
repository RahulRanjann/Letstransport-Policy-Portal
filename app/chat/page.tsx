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
import { useEffect, useRef, ReactElement, useState } from "react"

export default function ChatPage() {
  const searchParams = useSearchParams()
  const policyId = searchParams.get("policy")
  const policy = policyId ? getPolicyById(policyId) : null
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Get user's name from stored email
  const getUserName = () => {
    if (typeof window !== 'undefined') {
      const authToken = localStorage.getItem('letstransport_auth_token')
      if (authToken) {
        // Try to get email from localStorage if stored
        const storedEmail = localStorage.getItem('user_email')
        console.log('Stored email:', storedEmail) // Debug log
        if (storedEmail) {
          // Extract name from email with improved logic
          const namePart = storedEmail.split('@')[0]
          
          // Remove numbers from the end (e.g., rahul1913111054 -> rahul)
          const nameWithoutNumbers = namePart.replace(/\d+$/, '')
          
          // Split by both dots and underscores, then filter out empty parts
          const nameParts = nameWithoutNumbers
            .split(/[._]/)
            .filter(part => part.length > 0)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
          
          const userName = nameParts.join(' ')
          console.log('Extracted user name:', userName) // Debug log
          return userName
        }
      }
    }
    return null
  }

  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    const name = getUserName()
    setUserName(name)
  }, [])

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: {
      userName: userName
    },
    initialMessages: policy
      ? [
          {
            id: "initial",
            role: "assistant",
            content: `Hey there${userName ? `, ${userName}` : ''}! 👋 I'm here to help you with the ${policy.title}. I know policies can sometimes be a bit overwhelming, so feel free to ask me anything about it - I'll break it down in simple terms for you. What would you like to know?`,
          },
        ]
      : [
          {
            id: "initial",
            role: "assistant",
            content:
              `Hi there${userName ? `, ${userName}` : ''}! 😊 I'm your HR assistant here at Letstransport. Whether you need help with company policies, have questions about leave applications, want to know about benefits, or just need guidance on HR processes - I'm here to help! What can I assist you with today?`,
          },
        ],
  })

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

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

  const processMessageContent = (content: string) => {
    const elements: (string | ReactElement)[] = [];
    // Regex to find [HIGHLIGHT] blocks, [text](url) links, or **bold** text
    // It captures the full match, and also the inner text for highlights/bold, and text/url for links
    const regex =
      /(\[HIGHLIGHT\](.*?)\[\/HIGHLIGHT\])|(\[([^\]\[]+?)\]\(([^)\s]+?)\))|(\*\*(.*?)\*\*)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
      // Add text before the current match
      if (match.index > lastIndex) {
        elements.push(content.substring(lastIndex, match.index));
      }

      // Check if it's a HIGHLIGHT match
      if (match[1]) { // Full highlight block like [HIGHLIGHT]text[/HIGHLIGHT]
        const highlightedText = match[2]; // Inner text for highlight
        elements.push(
          <span
            key={`${match.index}-highlight`}
            className="bg-yellow-200 px-1 py-0.5 rounded font-semibold text-gray-900"
          >
            {highlightedText}
          </span>
        );
      }
      // Check if it's a LINK match
      else if (match[3]) { // Full link block like [text](url)
        const linkText = match[4]; // Link text
        const linkUrl = match[5]; // Link URL
        elements.push(
          <a
            key={`${match.index}-link`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {linkText}
          </a>
        );
      }
      // Check if it's a BOLD match
      else if (match[6]) { // Full bold block like **text**
        const boldText = match[7]; // Inner text for bold
        elements.push(
          <strong key={`${match.index}-bold`} className="font-semibold">
            {boldText}
          </strong>
        );
      }
      lastIndex = regex.lastIndex;
    }

    // Add any remaining text after the last match
    if (lastIndex < content.length) {
      elements.push(content.substring(lastIndex));
    }
    
    // Return a React Fragment containing all parts, or the original content if no processing was done
    return elements.length > 0 ? <>{elements}</> : <>{content}</>;
  };

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
                
                {/* Invisible element to scroll to */}
                <div ref={messagesEndRef} />
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
