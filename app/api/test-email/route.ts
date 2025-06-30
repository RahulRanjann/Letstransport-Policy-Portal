import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  try {
    console.log('=== EMAIL SYSTEM TEST ===');
    
    // Check environment variable
    const apiKey = process.env.RESEND_API_KEY;
    console.log('RESEND_API_KEY exists:', !!apiKey);
    console.log('RESEND_API_KEY length:', apiKey?.length || 0);
    
    if (!apiKey) {
      return NextResponse.json({
        status: 'error',
        message: 'RESEND_API_KEY not found in environment variables',
        suggestion: 'Please set RESEND_API_KEY in your .env.local file'
      });
    }

    // Initialize Resend
    const resend = new Resend(apiKey);
    console.log('Resend client initialized');

    // Test email data
    const testEmailData = {
      from: 'onboarding@resend.dev',
      to: 'rahul_ranjan@letstransport.team',
      subject: 'Test Email from LetsTransport Policy Portal',
      text: 'This is a test email to verify the email system is working correctly.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e97317;">Test Email</h2>
          <p>This is a test email to verify the email system is working correctly.</p>
          <p>If you receive this email, the system is configured properly.</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        </div>
      `
    };

    console.log('Attempting to send test email...');
    console.log('Email data:', { 
      from: testEmailData.from, 
      to: testEmailData.to, 
      subject: testEmailData.subject 
    });

    const { data, error } = await resend.emails.send(testEmailData);

    if (error) {
      console.error('Test email failed:', error);
      return NextResponse.json({
        status: 'error',
        message: 'Failed to send test email',
        error: error,
        details: JSON.stringify(error, null, 2)
      });
    }

    console.log('Test email sent successfully:', data);
    
    return NextResponse.json({
      status: 'success',
      message: 'Test email sent successfully!',
      emailId: data?.id,
      sentTo: 'rahul_ranjan@letstransport.team',
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error('Test email system error:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Email system test failed',
      error: error.message,
      stack: error.stack
    });
  }
} 