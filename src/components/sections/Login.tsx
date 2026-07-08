"use client";

import React, { useState, useEffect, useRef } from "react";

interface LoginProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginProps) {
    const [step, setStep] = useState<"login" | "otp">("login");
    const [email, setEmail] = useState("");

    // OTP State
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [timer, setTimer] = useState(30);
    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Reset state on open/close
    useEffect(() => {
        if (isOpen) {
            setStep("login");
            setEmail("");
            setOtp(new Array(6).fill(""));
            setTimer(30);
        }
    }, [isOpen]);

    // Resend OTP timer countdown
    useEffect(() => {
        if (step !== "otp" || timer === 0) return;
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [step, timer]);

    // Close on Escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setStep("otp");
            setTimer(30);
        }
    };

    const handleOtpChange = (element: HTMLInputElement, index: number) => {
        const value = element.value.replace(/[^0-9]/g, "");
        const newOtp = [...otp];

        // Take only the last character entered
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Move focus to next input
        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace") {
            const newOtp = [...otp];
            if (!otp[index] && index > 0) {
                // Focus previous input if current is empty and backspace pressed
                otpRefs.current[index - 1]?.focus();
                newOtp[index - 1] = "";
                setOtp(newOtp);
            } else {
                newOtp[index] = "";
                setOtp(newOtp);
            }
        }
    };

    const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pasteData = e.clipboardData.getData("text").trim();
        if (/^\d{6}$/.test(pasteData)) {
            const pasteArray = pasteData.split("");
            setOtp(pasteArray);
            otpRefs.current[5]?.focus();
        }
        e.preventDefault();
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const code = otp.join("");
        console.log("Verifying OTP:", code);
        // Add verification logic
        onClose();
    };

    const handleResendOtp = () => {
        if (timer === 0) {
            setTimer(30);
            setOtp(new Array(6).fill(""));
            console.log("Resending OTP to:", email);
        }
    };

    // Format timer display
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <div
                className="absolute inset-0 bg-black/85 backdrop-blur-xs transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Card container */}
            <div
                className="relative w-full max-w-[489px] min-h-[452px] flex flex-col justify-between p-8 md:p-10 select-none animate-in fade-in zoom-in-95 duration-200"
                style={{
                    backgroundImage: "url('/burracoAsset/login&otp-bg.svg')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter: "drop-shadow(0px 10px 30px rgba(0,0,0,0.8))"
                }}
            >
                {/* Crest Logo overlapping the top border */}
                <div
                    className="absolute -top-[45px] left-1/2 -translate-x-1/2 w-[90px] h-[90px]"
                    style={{
                        filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.5))"
                    }}
                >
                    <img
                        src="/burracoAsset/logo.svg"
                        alt="Crest Logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Close Button on top-right */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-500 hover:text-[#c19245] transition-colors duration-200"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Form Content Wrapper */}
                <div className="flex flex-col h-full mt-4 justify-between">
                    {step === "login" ? (
                        <div>
                            {/* Title */}
                            <h2 className="text-center font-bold tracking-widest text-[24px] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#EFCC88] to-[#B86B1D] mb-1 font-serif">
                                LOGIN
                            </h2>
                            <p className="text-center text-[#A49A8A] text-[13px] font-normal mb-6 font-sans">
                                Welcome back! Please login to your account.
                            </p>

                            {/* Login Form */}
                            <form onSubmit={handleLoginSubmit} className="space-y-4">
                                {/* Email Field */}
                                <div className="relative">
                                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E5B962" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email address"
                                        required
                                        className="w-full bg-[#040808]/90 border border-[#544434] rounded-lg pl-11 pr-4 py-2.5 text-[14px] text-white placeholder-[#544434] focus:outline-none focus:border-[#E5B962] focus:ring-1 focus:ring-[#E5B962] transition-all font-sans"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-gradient-to-r from-[#B86B1D] via-[#EFCC88] to-[#B86B1D] hover:brightness-110 active:brightness-95 text-[#040808] font-bold py-2.5 rounded-lg text-[14px] uppercase tracking-wider transition-all shadow-md focus:outline-none"
                                >
                                    LOGIN
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div>
                            {/* OTP Title */}
                            <h2 className="text-center font-bold tracking-widest text-[24px] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#EFCC88] to-[#B86B1D] mb-1 font-serif">
                                OTP VERIFICATION
                            </h2>
                            <p className="text-center text-[#A49A8A] text-[13px] font-normal font-sans">
                                Enter the 6-digit code sent to your email
                            </p>
                            <p className="text-center text-white text-[13px] font-normal mb-6 font-sans">
                                {email}
                            </p>

                            {/* OTP Form */}
                            <form onSubmit={handleOtpSubmit} className="space-y-4">
                                <div className="flex justify-center gap-2 my-6">
                                    {otp.map((data, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            ref={(el) => { otpRefs.current[index] = el; }}
                                            value={data}
                                            onChange={(e) => handleOtpChange(e.target, index)}
                                            onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                            onPaste={handleOtpPaste}
                                            className="w-11 h-12 text-center text-lg font-bold bg-[#040808]/90 border border-[#544434] rounded-lg text-white focus:outline-none focus:border-[#E5B962] focus:ring-1 focus:ring-[#E5B962] transition-all font-sans"
                                            placeholder="·"
                                        />
                                    ))}
                                </div>

                                {/* Resend Section */}
                                <div className="text-center text-[12px] font-sans my-4">
                                    <span className="text-[#A49A8A]">Didn't receive the code? </span>
                                    <button
                                        type="button"
                                        onClick={handleResendOtp}
                                        disabled={timer > 0}
                                        className={`font-medium transition-colors ${timer > 0
                                                ? "text-[#544434] cursor-default"
                                                : "text-[#E5B962] hover:text-[#EFCC88] cursor-pointer hover:underline"
                                            }`}
                                    >
                                        Resend OTP {timer > 0 && `(${formatTime(timer)})`}
                                    </button>
                                </div>

                                {/* Verify Button */}
                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-gradient-to-r from-[#B86B1D] via-[#EFCC88] to-[#B86B1D] hover:brightness-110 active:brightness-95 text-[#040808] font-bold py-2.5 rounded-lg text-[14px] uppercase tracking-wider transition-all shadow-md focus:outline-none"
                                >
                                    VERIFY OTP
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}