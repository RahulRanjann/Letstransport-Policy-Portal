"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
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
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const name = getUserName()
    setUserName(name)
    
    // Get user email
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('user_email')
      setUserEmail(email)
    }
  }, [])

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: {
      userName: userName,
      userEmail: userEmail
    },
    initialMessages: policy
      ? [
          {
            id: "initial",
            role: "assistant",
            content: `Hey there${userName ? `, ${userName}` : ''}! 👋 I'm Sarah from HR. I'm here to help you with the ${policy.title}. What would you like to know?`,
          },
        ]
      : [
          {
            id: "initial",
            role: "assistant",
            content:
              `Hey there${userName ? `, ${userName}` : ''}! I'm Sarah from HR. What can I help you with today?`,
          },
        ],
  })

  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      const newHeight = Math.min(textarea.scrollHeight, 120) // Max height of 120px
      textarea.style.height = `${newHeight}px`
    }
  }

  // Handle input change with auto-resize
  const handleInputChangeWithResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e)
    adjustTextareaHeight()
  }

  useEffect(() => {
    adjustTextareaHeight()
  }, [input])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  // Handle Shift+Enter for new line, Enter for submit
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (input.trim() && !isLoading) {
        handleSubmit(e as any)
      }
    }
  }

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Policy Assistant</h1>
            {policy && (
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Discussing:</span>
                <Badge variant="secondary">{policy.title}</Badge>
              </div>
            )}
            <div className="flex items-center gap-2 mt-2">
              <Bot className="h-4 w-4 text-primary" />
              <span className="text-sm text-gray-600">Chat with AI Assistant</span>
              <Badge variant="outline" className="text-xs">
                Powered by Google Gemini
              </Badge>
            </div>
          </div>
        </div>

        {/* Chat Interface - Full Height */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-white pb-32">
            <div className="max-w-4xl mx-auto space-y-4">
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
          </div>

          {/* Suggested Questions - Fixed positioning when showing */}
          {messages.length <= 1 && (
            <div className="fixed bottom-28 left-0 right-0 p-4 bg-gray-50 border-t z-40">
              <div className="max-w-4xl mx-auto">
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
            </div>
          )}
        </div>

        {/* Fixed Input Form */}
        <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 p-4 border-t bg-white z-50 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2 items-end">
              <Textarea
                value={input}
                onChange={handleInputChangeWithResize}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about company policies... (Shift+Enter for new line)"
                disabled={isLoading}
                className="flex-1 min-h-[44px] max-h-[120px] resize-none"
                rows={1}
                ref={textareaRef}
              />
              <Button type="submit" disabled={isLoading || !input.trim()} className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Press Enter to send, Shift+Enter for new line</p>
          </div>
        </form>
      </div>
    </div>
  )
}
