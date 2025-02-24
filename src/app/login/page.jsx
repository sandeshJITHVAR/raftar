
"use client";
import Section from '@/component/section';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { getAuth, signInWithPopup } from "firebase/auth";
import { googleProvider, facebookProvider } from "../../lib/firebase";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useAuth } from '@/lib/AuthProvider';

export default function Page() {
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const { setUser } = useAuth();
    const auth = getAuth();
    const router = useRouter();

    useEffect(() => {
        if (showPopup) {
            setCountdown(5); // Reset countdown to 5
            const timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(timer);
                        return prev; // Stop decrementing at 1
                    }
                    return prev - 1;
                });
            }, 1000);
    
            return () => clearInterval(timer);
        }
    }, [showPopup]);
    
    useEffect(() => {
        if (countdown === 1 && showPopup) {
            router.push('/');
        }
    }, [countdown, showPopup, router]);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/');
    };

    const handleLogin = async (provider) => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            setShowPopup(true);
            setCountdown(5);
        } catch (error) {
            console.log("Login Error:", error.message);
        }
    };


    return (
        <Section>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 shadow-xl max-w-sm w-full mx-4 relative">
                        <div className="text-center">
                            <div className="mb-4 text-green-500 text-5xl">✓</div>
                            <h3 className="text-xl font-semibold mb-2">Login Successful!</h3>
                            <p className="text-gray-600 mb-4">Redirecting in {countdown}...</p>
                            <Link href="/" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors">
                                Go to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-center w-full mx-auto">
                <div className="w-full max-w-md space-y-9 pb-10 pt-4 px-8 rounded-lg bg-[#F2F2F2]">
                    <div className='border-b py-10 border-tertiary/50'>
                        <div className="flex justify-center">
                            <Link href="/" className='text-primary text-[32px] font-bold flex gap-2.5'>
                                Highlands
                                <span className="text-black" style={{ fontFamily: 'Merriweather' }}>Today</span>
                            </Link>
                        </div>
                        <p className="text-center text-base mt-4">
                            Log in to unlock exclusive content and enjoy a premium experience.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                        <div>
                            <div className="flex items-center py-4 px-4 gap-3 rounded-lg border bg-white border-tertiary/50">
                                <div className="text-xl">
                                    <BiLogoGmail />
                                </div>
                                <input
                                    type="text"
                                    value={emailOrMobile}
                                    onChange={(e) => setEmailOrMobile(e.target.value)}
                                    className="block placeholder:text-base w-full focus:outline-none bg-transparent"
                                    placeholder="Enter email id or mobile"
                                />
                            </div>
                            <div className="text-sm text-gray-700 mt-1">We'll send you an OTP to verify</div>
                            <label className="flex items-start text-sm mt-5">
                                <input type="checkbox" required className="h-4 w-4 mr-2 mt-1" />
                                <h1>
                                    By signing in or creating an account, you agree with NDTV{' '}
                                    <a href="#" className="text-blue-400 hover:text-blue-300">Terms & Conditions</a>
                                    {' '}and{' '}
                                    <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
                                </h1>
                            </label>
                        </div>
                        <button className="bg-primary text-white w-full text-base font-normal py-3 px-8">Continue</button>
                    </form>

                    <div className="relative flex items-center">
                        <div className="flex-1 h-[1px] bg-tertiary/50" />
                        <span className="px-2 text-gray-400">Or Continue With</span>
                        <div className="flex-1 h-[1px] bg-tertiary/50" />
                    </div>

                    <div className='flex gap-1'>
                        <button
                            type="button"
                            className="flex-1 flex py-3 gap-2.5 items-center justify-center px-4 border bg-[#1877F2] text-white border-tertiary/50 text-base"
                            onClick={() => handleLogin(facebookProvider)} 
                        >
                            <span className="text-lg"><FaFacebookF /></span>Facebook
                        </button>
                        <button
                            type="button"
                            className="flex-1 flex py-3 gap-2.5 items-center justify-center px-4 border bg-[white] text-black border-tertiary/50 text-base"
                            onClick={() => handleLogin(googleProvider)} 
                        >
                            <span className="text-lg"><FaGoogle /></span>Google
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
