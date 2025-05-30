'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast"; // Assuming you have a toast component

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [returnTo, setReturnTo] = useState('/');

  useEffect(() => {
    const returnToPath = searchParams.get('returnTo');
    if (returnToPath) {
      setReturnTo(returnToPath);
    }
    // Check if already authenticated (e.g., from local storage or a quick cookie check)
    // This is a basic check. In a real app, you might have a more robust session check.
    if (localStorage.getItem('letstransport_auth_token')) {
      toast({ title: "Already authenticated.", description: "Redirecting..." });
      router.push(returnToPath || '/');
    }
  }, [searchParams, router]);

  const handleSendOtp = async () => {
    setIsLoading(true);
    if (!email.endsWith('@letstransport.com') && !email.endsWith('@letstransport.in') && !email.endsWith('@letstransport.team')) {
      toast({
        title: "Invalid Email",
        description: "Please use a valid LetsTransport email address (e.g., @letstransport.com, @letstransport.in, @letstransport.team).",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const responseData = await response.json();
      if (response.ok) {
        setOtpSent(true);
        toast({ title: "OTP Sent", description: responseData.message || "Check your email for the OTP." });
      } else {
        toast({ title: "Error Sending OTP", description: responseData.message || "Failed to send OTP.", variant: "destructive" });
      }
    } catch (error) {
      console.error("Send OTP Fetch Error:", error);
      toast({ title: "Network Error", description: "Could not reach server to send OTP.", variant: "destructive" });
    }
    setIsLoading(false);
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const responseData = await response.json();
      if (response.ok && responseData.session) {
        // Supabase successfully verified and created a session.
        // The Supabase client library (if you initialize it on the client) will automatically handle the session.
        // For your custom local storage flag:
        localStorage.setItem('letstransport_auth_token', responseData.session.access_token); // Store access token or a generic flag
        // Set the simple cookie for the middleware to recognize the user has passed OTP verification in this session
        document.cookie = "letstransport_auth_token=true; path=/; max-age=" + responseData.session.expires_in; 

        toast({ title: "Verification Successful!", description: "Redirecting..." });
        router.push(returnTo);
      } else {
        toast({ title: "OTP Verification Failed", description: responseData.message || "Invalid OTP.", variant: "destructive" });
      }
    } catch (error) {
      console.error("Verify OTP Fetch Error:", error);
      toast({ title: "Network Error", description: "Could not reach server to verify OTP.", variant: "destructive" });
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">LetsTransport Verification</h1>
        
        {!otpSent ? (
          <form onSubmit={(e) => { e.preventDefault(); handleSendOtp(); }}>
            <div className="mb-4">
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">LetsTransport Email</Label>
              <Input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.name@letstransport.com"
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out">
              {isLoading ? 'Sending OTP...' : 'Send OTP'}
            </Button>
          </form>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); handleVerifyOtp(); }}>
            <p className="text-sm text-gray-600 mb-4">An OTP has been sent to <strong>{email}</strong>. Please enter it below.</p>
            <div className="mb-4">
              <Label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</Label>
              <Input 
                type="text" 
                id="otp" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out">
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </Button>
            <Button variant="link" onClick={() => setOtpSent(false)} className="mt-4 text-sm text-orange-600 hover:text-orange-500 w-full">
              Change Email
            </Button>
          </form>
        )}
      </div>
    </div>
  );
} 