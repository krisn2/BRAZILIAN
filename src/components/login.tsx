"use client";

import React, { useState, useEffect } from "react";

// API Services
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const sendOtpApi = async (email: string) => {
  const res = await fetch(`${API_URL}/api/auth/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return await res.json();
};

export const verifyOtpApi = async (email: string, otp: string) => {
  const res = await fetch(`${API_URL}/api/auth/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp }),
  });
  return await res.json();
};

// 1. Send OTP Component
interface SendOtpFormProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export function SendOtpForm({ email, setEmail, onSubmit, loading }: SendOtpFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-[#a49a8a] text-[10px] font-medium mb-1.5 uppercase tracking-wide">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#070b0d]/90 border border-[#3e2c1c]/40 rounded-lg p-2.5 text-xs text-[#e6dcc8] focus:outline-none focus:border-[#f3c677] transition-colors placeholder-gray-600"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-10 bg-cover bg-center rounded-lg font-serif font-bold text-xs text-[#3a2503] uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center shadow-lg shadow-amber-950/20 mt-3"
        style={{
          backgroundImage: "url('/burracoAsset/sumit-ticket-bg.svg')",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Sending..." : "Send OTP"}
      </button>
    </form>
  );
}

// 2. Verify OTP Component
interface VerifyOtpFormProps {
  email: string;
  otp: string;
  setOtp: (otp: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onResend: (e: React.FormEvent) => void;
  onChangeEmail: () => void;
  loading: boolean;
  timer: number;
}

export function VerifyOtpForm({
  email,
  otp,
  setOtp,
  onSubmit,
  onResend,
  onChangeEmail,
  loading,
  timer,
}: VerifyOtpFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label className="block text-[#a49a8a] text-[10px] font-medium uppercase tracking-wide">
            Verification Code
          </label>
          {timer > 0 ? (
            <span className="text-[10px] text-amber-500 font-mono">Expires in {timer}s</span>
          ) : (
            <button
              type="button"
              onClick={onResend}
              className="text-[10px] text-[#f3c677] hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Resend OTP
            </button>
          )}
        </div>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full bg-[#070b0d]/90 border border-[#3e2c1c]/40 rounded-lg p-2.5 text-xs text-[#e6dcc8] focus:outline-none focus:border-[#f3c677] transition-colors placeholder-gray-600 tracking-[0.25em] text-center font-bold"
          required
          maxLength={6}
        />
      </div>

      <div className="text-[10px] text-gray-500 text-center">
        We sent an OTP to <span className="text-gray-300">{email.replace(/(.{2})(.*)(@.*)/, "$1***$3")}</span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-10 bg-cover bg-center rounded-lg font-serif font-bold text-xs text-[#3a2503] uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center shadow-lg shadow-amber-950/20 mt-3"
        style={{
          backgroundImage: "url('/burracoAsset/sumit-ticket-bg.svg')",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Verifying..." : "Verify & Login"}
      </button>

      <button
        type="button"
        onClick={onChangeEmail}
        className="w-full text-center text-[10px] text-gray-500 hover:text-gray-300 transition-colors uppercase tracking-wider pt-2"
      >
        Change Email
      </button>
    </form>
  );
}

// Unified Modal Component wrapping both Send and Verify forms
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: { accessToken: string; user: any }) => void;
}

export function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  if (!isOpen) return null;

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await sendOtpApi(email);
      if (data.success) {
        setOtpSent(true);
        setTimer(30);
      } else {
        setError(data.message || "Failed to send OTP");
      }
    } catch (err) {
      setError("Connection error to server");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await verifyOtpApi(email, otp);
      if (data.success && data.data) {
        onSuccess(data.data);
        onClose();
      } else {
        setError(data.message || "Invalid verification code");
      }
    } catch (err) {
      setError("Connection error to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4">
      <div
        className="relative p-8 md:p-10 flex flex-col justify-between w-full max-w-[450px] min-h-[350px] shadow-2xl border border-[#f3c677]/30 rounded-xl"
        style={{
          background: "linear-gradient(135deg, #18110b 0%, #060503 100%)",
          boxShadow: "0 0 30px rgba(243, 198, 119, 0.15)",
        }}
      >
        <div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            ✕
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="/burracoAsset/logo.svg" alt="Baloot Logo" className="w-12 h-12 object-contain" />
          </div>

          <h3 className="text-center text-lg font-serif font-bold text-[#f3c677] uppercase tracking-wider mb-2">
            Support Verification
          </h3>
          <p className="text-center text-xs text-gray-400 mb-6">
            Verify your email to chat with support or submit a ticket.
          </p>

          {error && (
            <div className="bg-red-950/40 border border-red-500/30 text-red-400 text-xs rounded-lg p-2.5 mb-4 text-center">
              {error}
            </div>
          )}

          {!otpSent ? (
            <SendOtpForm email={email} setEmail={setEmail} onSubmit={handleSendOtp} loading={loading} />
          ) : (
            <VerifyOtpForm
              email={email}
              otp={otp}
              setOtp={setOtp}
              onSubmit={handleVerifyOtp}
              onResend={handleSendOtp}
              onChangeEmail={() => {
                setOtpSent(false);
                setError("");
              }}
              loading={loading}
              timer={timer}
            />
          )}
        </div>
      </div>
    </div>
  );
}
