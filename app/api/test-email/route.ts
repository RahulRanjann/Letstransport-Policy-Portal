import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  try {
    console.log('Testing email functionality...');
    
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        error: 'RESEND_API_KEY not found in environment variables',
        success: false 
      }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const emailData = {
      from: 'LetsTransport Policy Assistant <onboarding@resend.dev>',
      to: ['rahul_ranjan@letstransport.team'],
      subject: 'Test Email from Policy Assistant',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e97317;">Test Email</h2>
          <p>This is a test email to verify the email functionality is working properly.</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p>If you receive this email, the HR email fallback system is working correctly.</p>
        </div>
      `,
      text: `
Test Email from Policy Assistant

This is a test email to verify the email functionality is working properly.

Timestamp: ${new Date().toISOString()}

If you receive this email, the HR email fallback system is working correctly.
      `.trim()
    };

    const { data, error } = await resend.emails.send(emailData);
    
    if (error) {
      console.error('Resend test email error:', error);
      return NextResponse.json({ 
        error: 'Failed to send test email',
        details: error,
        success: false 
      }, { status: 500 });
    }
    
    console.log('Test email sent successfully:', data);
    return NextResponse.json({ 
      message: 'Test email sent successfully',
      data: data,
      success: true 
    });

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ 
      error: 'Test email failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      success: false 
    }, { status: 500 });
  }
} 