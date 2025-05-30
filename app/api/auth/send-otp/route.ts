import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
// Use anon key for client-side accessible operations like initiating OTP
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);


// Define valid email domains
const VALID_DOMAINS = ['@letstransport.com', '@letstransport.in', '@letstransport.team'];

function isValidLetsTransportEmail(email: string): boolean {
  return VALID_DOMAINS.some(domain => email.endsWith(domain));
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }

    if (!isValidLetsTransportEmail(email)) {
      return NextResponse.json({ message: 'Invalid LetsTransport email domain.' }, { status: 400 });
    }

    // Use Supabase to send OTP for passwordless login with email
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        // shouldCreateUser: false, // Set to true to allow new user creation with OTP
                                // Set to false if user must already exist or you handle creation separately.
                                // For simple OTP login to existing accounts, false is typical.
      },
    });

    if (error) {
      console.error('Supabase OTP send error:', error);
      // It's good practice not to reveal too much detail about why an OTP failed to send if it involves user existence checks.
      // However, for this internal tool, more detailed errors might be acceptable during development.
      return NextResponse.json({ message: error.message || 'Failed to send OTP. Ensure the email is registered or user creation is allowed.' }, { status: error.status || 500 });
    }

    // OTP sent successfully by Supabase
    return NextResponse.json({ message: 'OTP sent successfully. Check your email.' }, { status: 200 });

  } catch (error: any) {
    console.error('Send OTP API error:', error);
    return NextResponse.json({ message: error.message || 'Internal server error.' }, { status: 500 });
  }
} 