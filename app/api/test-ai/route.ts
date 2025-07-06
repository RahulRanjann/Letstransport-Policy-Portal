import { streamText } from "ai"
import { google } from "@ai-sdk/google"

export async function GET() {
  try {
    console.log('Testing AI connection...')
    
    const result = await streamText({
      model: google("gemini-1.5-flash"),
      prompt: "Say 'Hello from LetsTransport AI!' in a friendly way.",
      temperature: 0.3,
      maxTokens: 100,
    })

    console.log('AI test successful')
    return result.toDataStreamResponse()
  } catch (error) {
    console.error('AI test failed:', error)
    return new Response(
      JSON.stringify({ 
        error: 'AI test failed', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
} 