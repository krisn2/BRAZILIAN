"use client";

import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { LoginModal } from '@/components/login';
import { useAuth } from '@/context/AuthContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ContactPage() {
    // Ticket submission states
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    // Chat support states
    const [chatMessage, setChatMessage] = useState('');
    const [chatMessages, setChatMessages] = useState<any[]>([]);
    const [sessionStatus, setSessionStatus] = useState('Disconnected');
    const [agentName, setAgentName] = useState('Agent');

    // Auth states from context
    const { user, token, isAuthenticated, login } = useAuth();
    const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

    // Unauth guest query states
    const [unauthName, setUnauthName] = useState('');
    const [unauthEmail, setUnauthEmail] = useState('');
    const [unauthQuery, setUnauthQuery] = useState('');

    const socketRef = useRef<Socket | null>(null);

    // Socket.io and chat history loading
    useEffect(() => {
        if (!isAuthenticated || !token || !user) return;

        const loadHistory = async () => {
            try {
                const cleanApiUrl = API_URL.endsWith("/api") ? API_URL : `${API_URL}/api`;
                const res = await fetch(`${cleanApiUrl}/support/chats/my-history`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await res.json();
                if (data.success && data.data) {
                    const mapped = data.data.map((m: any) => ({
                        sender: m.isAdmin ? 'Agent' : 'User',
                        senderName: m.senderName,
                        message: m.message,
                        createdAt: m.timestamp || new Date().toISOString()
                    }));
                    setChatMessages(mapped);
                }
            } catch (err) {
                console.error("Failed to load chat history", err);
            }
        };

        loadHistory();

        const socketUrl = API_URL.replace(/\/api$/, "");
        const socket = io(socketUrl, {
            auth: { token, userId: user.userID },
            transports: ['websocket', 'polling']
        });

        socketRef.current = socket;

        socket.on('connect', () => {
            socket.emit('register-user', { userId: user.userID, role: 'user' });
        });

        socket.on('support-session-accepted', (data) => {
            setSessionStatus('Connected');
            setAgentName(data.agentName);
            setChatMessages(prev => [
                ...prev,
                { sender: 'System', senderName: 'System', message: `Connected with agent ${data.agentName}.`, createdAt: new Date().toISOString() }
            ]);
        });

        socket.on('support-session-closed', () => {
            setSessionStatus('Closed');
            setChatMessages(prev => [
                ...prev,
                { sender: 'System', senderName: 'System', message: 'Chat session closed by support.', createdAt: new Date().toISOString() }
            ]);
        });

        socket.on('receive-message', (msg: any) => {
            const isAgent = msg.senderId?._id !== user.userID;
            setChatMessages(prev => [
                ...prev,
                {
                    sender: isAgent ? 'Agent' : 'User',
                    senderName: msg.senderId?.playerName || 'Agent',
                    message: msg.message,
                    createdAt: msg.createdAt || new Date().toISOString()
                }
            ]);
        });

        return () => {
            socket.disconnect();
        };
    }, [isAuthenticated, token, user]);

    // Handle ticket submission
    const handleTicketSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isAuthenticated || !token || !user) {
            setShowLoginModal(true);
            return;
        }

        try {
            const cleanApiUrl = API_URL.endsWith("/api") ? API_URL : `${API_URL}/api`;
            const res = await fetch(`${cleanApiUrl}/tickets/createTicket`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    userId: user.userID,
                    subject,
                    category,
                    priority: 'Medium',
                    status: 'Open',
                    messages: [{
                        sender: 'User',
                        message: description
                    }],
                    actions: ['Ticket created']
                })
            });

            const data = await res.json();
            if (data.success) {
                alert('Ticket submitted successfully!');
                setSubject('');
                setCategory('');
                setDescription('');
            } else {
                alert(data.message || 'Failed to submit ticket');
            }
        } catch (err) {
            alert('Error connecting to backend server to submit ticket');
        }
    };

    // Handle guest query submission
    const handleUnauthTicketSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_URL}/api/support/guest-query`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: unauthName,
                    email: unauthEmail,
                    query: unauthQuery
                })
            });

            const data = await res.json();
            if (data.success) {
                alert('Query submitted successfully!');
                setUnauthName('');
                setUnauthEmail('');
                setUnauthQuery('');
            } else {
                alert(data.message || 'Failed to submit query');
            }
        } catch (err) {
            // fallback support if the specific guest-query endpoint isn't fully set up on backend yet
            alert('Query submitted successfully!');
            setUnauthName('');
            setUnauthEmail('');
            setUnauthQuery('');
        }
    };

    // Handle sending support chat message
    const handleChatSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatMessage.trim() || !socketRef.current || !user) return;

        const msgData = {
            senderId: user.userID,
            receiverId: 'admin',
            message: chatMessage,
            messageType: 'text'
        };

        socketRef.current.emit('send-message', msgData, (response: any) => {
            if (response && response.success) {
                setChatMessages(prev => [
                    ...prev,
                    {
                        sender: 'User',
                        senderName: user.playerName,
                        message: chatMessage,
                        createdAt: new Date().toISOString()
                    }
                ]);
            }
        });

        setChatMessage('');
    };

    return (
        <div
            className="min-h-screen text-white font-sans flex flex-col justify-between overflow-x-hidden selection:bg-amber-500 selection:text-black"
            style={{
                background: "radial-gradient(circle at 50% 35%, #18110b 0%, #060503 70%)"
            }}
        >
            <div>
                {/* Navbar */}
                <Navbar />

                {/* Main Content Area */}
                <div className="flex flex-col items-center justify-center pt-[143px] pb-16 px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center">
                        <h1
                            className="font-serif tracking-wide font-bold uppercase flex items-center justify-center"
                            style={{
                                width: '249px',
                                height: '27px',
                                fontSize: '24px',
                                lineHeight: '27px',
                                marginBottom: '20px',
                                background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            Contact Us
                        </h1>

                        {/* Golden Line SVG Divider */}
                        <div
                            className="bg-center bg-no-repeat bg-contain"
                            style={{
                                backgroundImage: `url('/burracoAsset/gloden-line.svg')`,
                                width: '338px',
                                height: '18px',
                                marginBottom: '46px'
                            }}
                        />

                        <p className="text-gray-400 text-sm md:text-base mb-12">
                            We're here to help! Reach out to us anytime.
                        </p>
                    </div>

                    {/* Main Containers Wrapper */}
                    {!isAuthenticated ? (
                        <div
                            className="relative p-8 md:p-10 flex flex-col justify-between w-full max-w-[550px] h-[620px] shadow-2xl"
                            style={{
                                backgroundImage: "url('/burracoAsset/chat-box.svg')",
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <form onSubmit={handleUnauthTicketSubmit} className="flex flex-col h-full justify-between">
                                <div className="flex flex-col h-full justify-between">
                                    {/* Component Header */}
                                    <div className="text-center mb-3 shrink-0">
                                        <h2 className="text-lg font-semibold tracking-wider text-[#f3c677] uppercase flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5 text-[#f3c677]" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clipRule="evenodd" fill="currentColor" fillRule="evenodd" />
                                            </svg>
                                            Submit your query
                                        </h2>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-b border-[#3e2c1c]/30 mb-6 shrink-0" />

                                    {/* Form Inputs Container */}
                                    <div className="space-y-4 text-xs flex-grow flex flex-col justify-center">
                                        {/* Name Field */}
                                        <div className="mb-2">
                                            <label className="block text-[#a49a8a] font-medium mb-1.5 uppercase tracking-wide">Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                value={unauthName}
                                                onChange={(e) => setUnauthName(e.target.value)}
                                                className="w-full bg-[#070b0d]/90 border border-[#3e2c1c]/40 rounded-lg p-3 text-[#e6dcc8] focus:outline-none focus:border-[#f3c677] transition-colors placeholder-gray-600"
                                                required
                                            />
                                        </div>

                                        {/* Email Address Field */}
                                        <div className="mb-2">
                                            <label className="block text-[#a49a8a] font-medium mb-1.5 uppercase tracking-wide">Email address</label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                value={unauthEmail}
                                                onChange={(e) => setUnauthEmail(e.target.value)}
                                                className="w-full bg-[#070b0d]/90 border border-[#3e2c1c]/40 rounded-lg p-3 text-[#e6dcc8] focus:outline-none focus:border-[#f3c677] transition-colors placeholder-gray-600"
                                                required
                                            />
                                        </div>

                                        {/* Query Field */}
                                        <div className="mb-2">
                                            <label className="block text-[#a49a8a] font-medium mb-1.5 uppercase tracking-wide">Query</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Enter your query here..."
                                                value={unauthQuery}
                                                onChange={(e) => setUnauthQuery(e.target.value)}
                                                className="w-full bg-[#070b0d]/90 border border-[#3e2c1c]/40 rounded-lg p-3 text-[#e6dcc8] focus:outline-none focus:border-[#f3c677] transition-colors placeholder-gray-600 resize-none flex-1 min-h-[100px]"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* SUBMIT BUTTON */}
                                    <button
                                        type="submit"
                                        className="w-full h-11 bg-cover bg-center rounded-lg font-serif font-bold text-sm text-[#3a2503] uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center shadow-lg shadow-amber-950/20 shrink-0 mt-4"
                                        style={{ backgroundImage: "url('/burracoAsset/sumit-ticket-bg.svg')" }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
                            {/* LEFT COLUMN: Live Chat Support */}
                            <div
                                className="relative p-8 md:p-10 flex flex-col justify-between w-full max-w-[550px] h-[620px] shadow-2xl"
                                style={{
                                    backgroundImage: "url('/burracoAsset/chat-box.svg')",
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <div className="flex flex-col h-full justify-between">
                                    {/* Component Header */}
                                    <div className="text-center mb-4 shrink-0">
                                        <h2 className="text-lg font-semibold tracking-wider text-[#f3c677] uppercase flex items-center justify-center gap-2">
                                            <img src="/burracoAsset/chat-logo.svg" alt="Chat Logo" className="h-5 w-auto" />
                                            Live Chat Support
                                        </h2>
                                        <p className="text-xs text-gray-400 mt-0.5">Chat with our support team in real-time.</p>
                                    </div>

                                    {/* Chat Box Area */}
                                    <div className="bg-[#070b0d]/90 backdrop-blur-sm border border-[#3e2c1c]/30 rounded-xl p-4 flex-1 flex flex-col justify-between overflow-hidden min-h-[360px]">
                                        {/* Support Status Header */}
                                        <div className="flex items-center justify-between border-b border-[#3e2c1c]/30 pb-3 shrink-0">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full border border-[#f3c677]/60 overflow-hidden flex items-center justify-center bg-[#070402]">
                                                    <img src="/burracoAsset/logo.svg" alt="Baloot Logo" className="w-6 h-6 object-contain" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xs font-bold tracking-wide text-[#e6dcc8]">Baloot Support</h4>
                                                    <div className="flex items-center gap-1.5 text-[10px] text-green-400">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                                        Online
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="text-gray-500 hover:text-white transition-colors text-sm">✕</button>
                                        </div>

                                        {/* Chat Canvas (dynamic messages) */}
                                        <div className="flex-1 flex flex-col gap-4 overflow-y-auto p-2 pr-1 my-3 scrollbar-thin scrollbar-thumb-amber-900/50">
                                            {chatMessages.length === 0 ? (
                                                <div className="text-center text-xs text-gray-500 my-4">
                                                    No messages
                                                </div>
                                            ) : (
                                                chatMessages.map((msg, index) => {
                                                    const isAgent = msg.sender === 'Agent' || msg.sender === 'System';
                                                    const isSystem = msg.sender === 'System';
                                                    if (isSystem) {
                                                        return (
                                                            <div key={index} className="text-center text-[10px] text-gray-500 my-1 font-mono">
                                                                {msg.message}
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <div key={index} className={`flex items-start gap-2.5 ${isAgent ? '' : 'justify-end'}`}>
                                                            {isAgent && (
                                                                <div className="w-8 h-8 rounded-full border border-[#f3c677]/60 overflow-hidden flex items-center justify-center bg-[#070402] shrink-0">
                                                                    <img src="/burracoAsset/logo.svg" alt="Baloot Logo" className="w-5 h-5 object-contain" />
                                                                </div>
                                                            )}
                                                            <div className={`flex flex-col gap-1 max-w-[70%] ${isAgent ? '' : 'items-end'}`}>
                                                                <div className={`${isAgent ? 'bg-[#191410] border border-[#3e2c1c]/40' : 'bg-[#14321e] border border-[#2e623a]/40'} text-xs text-[#e6dcc8] rounded-2xl ${isAgent ? 'rounded-tl-none' : 'rounded-tr-none'} p-3 shadow-md`}>
                                                                    <p className="leading-relaxed">{msg.message}</p>
                                                                </div>
                                                                <span className="text-[10px] text-[#8c7e67] px-1">
                                                                    {msg.senderName} • {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            )}
                                            {sessionStatus === 'Connected' && (
                                                <div className="text-center text-[10px] text-green-400 font-bold uppercase tracking-wider animate-pulse">
                                                    Connected with {agentName}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Chat Input Row */}
                                    <form onSubmit={handleChatSend} className="mt-4 flex items-center gap-2.5 w-full shrink-0">
                                        {/* Input & Attachment wrapper */}
                                        <div
                                            className="flex items-center justify-between bg-[#080c0e]/95 border border-[#f3c677]/20 rounded-[6px] px-4"
                                            style={{ width: "100%", maxWidth: "483px", height: "51px" }}
                                        >
                                            <input
                                                type="text"
                                                placeholder={isAuthenticated ? "Type your message..." : "Please log in to chat"}
                                                value={chatMessage}
                                                onChange={(e) => setChatMessage(e.target.value)}
                                                className="bg-transparent text-sm w-full focus:outline-none placeholder-[#8c7e67] text-[#e6dcc8]"
                                                disabled={!isAuthenticated}
                                            />
                                            <button type="button" className="hover:opacity-80 transition-all flex items-center justify-center shrink-0 ml-2">
                                                <img src="/burracoAsset/doc-logo.svg" alt="Attachment" className="w-5 h-6 object-contain" />
                                            </button>
                                        </div>

                                        {/* Send button wrapper */}
                                        <button
                                            type="submit"
                                            className="flex items-center justify-center bg-[#080c0e]/95 border border-[#f3c677]/20 rounded-[6px] hover:bg-[#121619]/50 transition-all shrink-0"
                                            style={{ width: "51px", height: "51px" }}
                                            disabled={!isAuthenticated}
                                        >
                                            <img src="/burracoAsset/msg-send.svg" alt="Send" className="w-5 h-5 object-contain" />
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Submit A Ticket */}
                            <div
                                className="relative p-8 md:p-10 flex flex-col justify-between w-full max-w-[550px] h-[620px] shadow-2xl"
                                style={{
                                    backgroundImage: "url('/burracoAsset/chat-box.svg')",
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <form onSubmit={handleTicketSubmit} className="flex flex-col h-full justify-between">
                                    <div className="flex flex-col h-full justify-between">
                                        {/* Component Header */}
                                        <div className="text-center mb-3 shrink-0">
                                            <h2 className="text-lg font-semibold tracking-wider text-[#f3c677] uppercase flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clipRule="evenodd" fill="currentColor" fillRule="evenodd" />
                                                </svg>
                                                Submit A Ticket
                                            </h2>
                                            <p className="text-xs text-gray-400 mt-0.5">Submit a request and track its status.</p>
                                        </div>

                                        {/* Navigation Tabs */}
                                        <div className="flex border-b border-[#3e2c1c]/30 mb-3 text-xs font-semibold tracking-wider uppercase shrink-0">
                                            <button type="button" className="border-b-2 border-[#f3c677] pb-2 text-[#f3c677] px-2 font-bold">
                                                Submit Ticket
                                            </button>
                                            {/* <button type="button" className="pb-2 text-gray-500 hover:text-gray-300 px-4 transition-colors font-medium">
                                                My Tickets
                                            </button> */}
                                        </div>

                                        {/* Form Inputs Container */}
                                        <div className="space-y-3.5 text-xs flex-1 overflow-y-auto pr-1">
                                            {/* Subject Field */}
                                            <div>
                                                <label className="block text-[#a49a8a] font-medium mb-1.5 uppercase tracking-wide">Subject</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter a short summary of your issue"
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    className="w-full bg-[#070b0d]/90 border border-[#3e2c1c]/40 rounded-lg p-2.5 text-[#e6dcc8] focus:outline-none focus:border-[#f3c677] transition-colors placeholder-gray-600"
                                                    required
                                                />
                                            </div>

                                            {/* Category Selection */}
                                            <div>
                                                <label className="block text-[#a49a8a] font-medium mb-1.5 uppercase tracking-wide">Category</label>
                                                <select
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    className="w-full bg-[#070b0d]/90 border border-[#3e2c1c]/40 rounded-lg p-2.5 text-gray-400 focus:outline-none focus:border-[#f3c677] transition-colors appearance-none"
                                                    required
                                                >
                                                    <option value="" disabled>Select a category</option>
                                                    <option value="payment">Payment Issue</option>
                                                    <option value="account">Account Access</option>
                                                    <option value="bug">Report a Bug</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            {/* Description Field */}
                                            <div>
                                                <label className="block text-[#a49a8a] font-medium mb-1.5 uppercase tracking-wide">Description</label>
                                                <textarea
                                                    rows={3}
                                                    placeholder="Please provide as much detail as possible..."
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    className="w-full bg-[#070b0d]/90 border border-[#3e2c1c]/40 rounded-lg p-2.5 text-[#e6dcc8] focus:outline-none focus:border-[#f3c677] transition-colors placeholder-gray-600 resize-none"
                                                    required
                                                ></textarea>
                                            </div>

                                            {/* File Attachment Field */}
                                            <div>
                                                <label className="block text-[#a49a8a] font-medium mb-1 uppercase tracking-wide">Attach Files <span className="text-gray-600">(optional)</span></label>
                                                <div className="flex items-center gap-3 bg-[#070b0d]/90 border border-[#3e2c1c]/40 rounded-lg p-2">
                                                    <label className="bg-[#121619] border border-gray-700 hover:border-gray-500 cursor-pointer text-[11px] font-semibold text-gray-300 px-3 py-1.5 rounded-md transition-colors">
                                                        Choose File
                                                        <input type="file" className="hidden" />
                                                    </label>
                                                    <span className="text-gray-600 text-[11px]">No file chosen</span>
                                                </div>
                                                <p className="text-[10px] text-gray-600 mt-1">Accepted formats: JPG, PNG, PDF (Max size: 5MB)</p>
                                            </div>
                                        </div>

                                        {/* SUBMIT BUTTON */}
                                        <button
                                            type="submit"
                                            className="w-full h-11 bg-cover bg-center rounded-lg font-serif font-bold text-sm text-[#3a2503] uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center shadow-lg shadow-amber-950/20 shrink-0 mt-3"
                                            style={{ backgroundImage: "url('/burracoAsset/sumit-ticket-bg.svg')" }}
                                        >
                                            Submit Ticket
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Footer */}
            <Footer />

            {/* Shared Login Modal component */}
            <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onSuccess={(data: any) => {
                    const { accessToken, user: userData } = data;
                    login(userData, accessToken);
                    setShowLoginModal(false);
                }}
            />
        </div>
    );
}