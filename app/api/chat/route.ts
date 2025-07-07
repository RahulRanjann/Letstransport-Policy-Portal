import { streamText } from "ai"
import { google } from "@ai-sdk/google"
import { policies, getDarwinboxAnswerForQuery, extraPolicyFAQ } from "@/lib/policies"
import { Resend } from 'resend'
import { isHolidayQuestion, getHolidayAnswer, shouldAskForState, operationalStates, loadHolidaysFromExcel } from "@/lib/holidays"

export async function POST(req: Request) {
  try {
    const { messages, userName, userEmail } = await req.json()
    
    // Ensure messages is an array
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ 
          text: "No message received. Please try again.",
          error: true 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }
    
    const lastUserMessage = messages[messages.length - 1]?.content

    // Check for holiday questions first
    if (lastUserMessage && isHolidayQuestion(lastUserMessage)) {
      try {
        // Load holiday data from Excel file
        const freshHolidays = loadHolidaysFromExcel();
        
        // Check if user mentioned a state
        let mentionedState: string | undefined;
        const lowerMessage = lastUserMessage.toLowerCase();
        for (const state of operationalStates) {
          if (lowerMessage.includes(state.toLowerCase())) {
            mentionedState = state;
            break;
          }
        }
        
        const holidayAnswer = getHolidayAnswer(lastUserMessage, mentionedState, freshHolidays);
        
        // If we need to ask for state, make it more conversational
        if (shouldAskForState(lastUserMessage) && !mentionedState) {
          const result = await streamText({
            model: google("gemini-1.5-flash"),
            prompt: `You are Sarah, an HR assistant at LetsTransport. Reply in a chatty, friendly way:\n\n${holidayAnswer}\n\nAvailable states: ${operationalStates.join(', ')}`,
            temperature: 0.7,
            maxTokens: 200,
          })
          return result.toDataStreamResponse()
        }
        
        // If state is mentioned or it's a general holiday answer
        const result = await streamText({
          model: google("gemini-1.5-flash"),
          prompt: `You are Sarah, an HR assistant at LetsTransport. Reply in a chatty, friendly way:\n\n${holidayAnswer}`,
          temperature: 0.7,
          maxTokens: 200,
        })
        return result.toDataStreamResponse()
      } catch (holidayError) {
        console.error('Holiday system error:', holidayError);
        // Fall through to regular chat if holiday system fails
      }
    }

    // Check for Darwinbox-specific answers
    if (lastUserMessage) {
      const darwinboxAnswer = getDarwinboxAnswerForQuery(lastUserMessage)
      if (darwinboxAnswer && !darwinboxAnswer.startsWith("I can help you with Darwinbox-related questions like:")) {
        const result = await streamText({
          model: google("gemini-1.5-flash"),
          prompt: `You are Sarah, an HR assistant at LetsTransport.\n\n- Always reply in a short, direct, chat-like message.\n- Do NOT use greetings like 'Hi everyone' or sign-offs.\n- Summarize long or formal answers in 2-4 sentences.\n- If the user's question is casual, silly, or open-ended, you can be witty, sarcastic, or funny.\n- If the user's question is unclear, ask a clarifying question.\n- If the conversation is light, you can ask a fun or related question back to the user.\n- Only use a formal tone for very serious HR issues.\n- If you don't know the answer, say: "I don't have that information. I've sent your question to HR and they'll get back to you directly."\n\nHere is the answer you should summarize and rephrase in a chatty way:\n${darwinboxAnswer}`,
          temperature: 0.7,
          maxTokens: 400,
        })
        return result.toDataStreamResponse()
      }
    }

    // Create enhanced context
    const policyContext = policies
      .map((policy) => `Policy: ${policy.title}\nCategory: ${policy.category}\nDescription: ${policy.description}\nContent: ${policy.content}`)
      .join("\n\n") + "\n\n" + extraPolicyFAQ;

    // Updated system prompt for chatty, concise, and sometimes funny/sarcastic style
    const systemPrompt = `You are Sarah, an HR assistant at LetsTransport.\n\n- Always reply in a short, direct, chat-like message.\n- Do NOT use greetings like 'Hi everyone', 'Hey everyone', or any generic greetings.\n- Do NOT use sign-offs.\n- Address the user by their name if available: ${userName || 'the user'}.\n- Summarize long or formal answers in 2-4 sentences.\n- If the user's question is casual, silly, or open-ended, you can be witty, sarcastic, or funny.\n- If the user's question is unclear, ask a clarifying question.\n- If the conversation is light, you can ask a fun or related question back to the user.\n- Only use a formal tone for very serious HR issues.\n- If you don't know the answer, say: "I don't have that information. I've sent your question to HR and they'll get back to you directly."\n\nAvailable policies: ${policyContext}\nUser: ${userName ? userName : 'Employee'}`

    const result = await streamText({
      model: google("gemini-1.5-flash"),
      system: systemPrompt,
      messages,
      temperature: 0.7,
      maxTokens: 400,
      onFinish: async (completion) => {
        if (completion.text && completion.text.includes("I don't have that information. I've sent your question to HR")) {
          console.log('Attempting to send HR email for question:', lastUserMessage?.substring(0, 100) + '...');
          
          try {
            // Send email directly using Resend
            if (!process.env.RESEND_API_KEY) {
              console.error('RESEND_API_KEY not found - logging email for manual processing');
              console.log('=== MANUAL EMAIL REQUIRED ===');
              console.log('TO: rahul_ranjan@letstransport.team');
              console.log('FROM:', userName || 'Not available', '(', userEmail, ')');
              console.log('QUESTION:', lastUserMessage);
              console.log('=== END MANUAL EMAIL ===');
              return;
            }
            
            const resend = new Resend(process.env.RESEND_API_KEY);
            
            const emailData = {
              from: 'LetsTransport Policy Assistant <onboarding@resend.dev>',
              to: ['rahul_ranjan@letstransport.team'],
              subject: `Policy Question from ${userName || userEmail}`,
              html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #e97317;">Policy Question from Employee</h2>
                
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3>User Details:</h3>
                  <p><strong>Name:</strong> ${userName || 'Not available'}</p>
                  <p><strong>Email:</strong> ${userEmail}</p>
                </div>
                
                <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; border-left: 4px solid #e97317;">
                  <h3>Question:</h3>
                  <p style="font-size: 16px; line-height: 1.5;">"${lastUserMessage}"</p>
                </div>
                
                <div style="margin-top: 30px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
                  <p><strong>Action Required:</strong> Please respond directly to the user at <a href="mailto:${userEmail}">${userEmail}</a> with the appropriate information.</p>
                </div>
                
                <div style="margin-top: 20px; font-size: 12px; color: #666;">
                  <p>This email was automatically generated by the LetsTransport Policy Assistant.</p>
                </div>
              </div>`,
              text: `Hello HR Team,\n\nA user has asked a question that our AI assistant couldn't answer. Please provide assistance.\n\nUser Details:\n- Name: ${userName || 'Not available'}\n- Email: ${userEmail}\n\nQuestion:\n"${lastUserMessage}"\n\nPlease respond directly to the user at ${userEmail} with the appropriate information.\n\nThank you,\nLetsTransport Policy Assistant`.trim()
            };
            
            const { data, error } = await resend.emails.send(emailData);
            
            if (error) {
              console.error('HR email failed:', error);
              console.log('=== MANUAL EMAIL REQUIRED ===');
              console.log('TO: rahul_ranjan@letstransport.team');
              console.log('FROM:', userName || 'Not available', '(', userEmail, ')');
              console.log('QUESTION:', lastUserMessage);
              console.log('=== END MANUAL EMAIL ===');
            } else {
              console.log('HR email sent successfully:', data?.id);
            }
            
          } catch (emailError) {
            console.error('HR email sending error:', emailError);
            console.log('=== MANUAL EMAIL REQUIRED ===');
            console.log('TO: rahul_ranjan@letstransport.team');
            console.log('FROM:', userName || 'Not available', '(', userEmail, ')');
            console.log('QUESTION:', lastUserMessage);
            console.log('=== END MANUAL EMAIL ===');
          }
        }
      },
    })
    return result.toDataStreamResponse()
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ 
        text: "I'm having technical difficulties right now. Please try again or contact HR at hr@letstransport.com",
        error: true 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}