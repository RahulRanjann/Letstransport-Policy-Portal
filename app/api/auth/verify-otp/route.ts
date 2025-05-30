import { NextResponse } from 'next/server';
import { createClient, Session } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }
    if (!otp || typeof otp !== 'string') {
      return NextResponse.json({ message: 'OTP is required.' }, { status: 400 });
    }

    const { data, error } = await supabase.auth.verifyOtp({
      email: email,
      token: otp,
      type: 'email',
    });

    if (error) {
      console.error('Supabase OTP verification error:', error);
      return NextResponse.json({ message: error.message || 'Invalid OTP or verification failed.' }, { status: error.status || 401 });
    }

    if (data.session) {
      const response = NextResponse.json({ 
        message: 'OTP verified successfully.',
        session: data.session 
      }, { status: 200 });
      
      // Note: Supabase client SDK typically handles setting its own cookies upon successful session establishment.
      // If you need to set custom cookies (e.g., the letstransport_auth_token for your middleware),
      // you could do it here, but the client-side will also set its local storage and flag cookie.
      // For consistency with the current setup, the client will set the 'letstransport_auth_token' cookie.
      // response.cookies.set('letstransport_auth_token', 'true', { path: '/', maxAge: data.session.expires_in });

      return response;

    } else {
      return NextResponse.json({ message: 'OTP verified but no session data found. Please try again.' }, { status: 401 });
    }

  } catch (error: any) {
    console.error('Verify OTP API error:', error);
    return NextResponse.json({ message: error.message || 'Internal server error.' }, { status: 500 });
  }
} 