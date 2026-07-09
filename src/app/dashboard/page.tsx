"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

interface Ticket {
    id: string;
    title: string;
    status: "Open" | "In Progress" | "Resolved" | "Closed" | "Waiting for Reply";
    date: string;
}

interface Message {
    sender: string;
    role: "user" | "support";
    text: string;
    time: string;
    avatar?: string;
}

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("My Tickets");

    const [tickets] = useState<Ticket[]>([
        { id: "TKT-100245", title: "Issue with Coin Purchase", status: "Open", date: "08 May 2024, 11:30 AM" },
        { id: "TKT-100244", title: "Game Not Loading", status: "In Progress", date: "07 May 2024, 04:15 PM" },
        { id: "TKT-100243", title: "Account Verification", status: "Resolved", date: "06 May 2024, 09:10 AM" },
        { id: "TKT-100242", title: "Refund Request", status: "Closed", date: "05 May 2024, 02:40 PM" },
        { id: "TKT-100241", title: "Unable to Join Table", status: "Waiting for Reply", date: "04 May 2024, 10:20 AM" },
    ]);

    const [selectedTicket, setSelectedTicket] = useState<Ticket>(tickets[0]);
    const [replyText, setReplyText] = useState("");

    const [chatHistory] = useState<Message[]>([
        { sender: "Deepak Kundra", role: "user", text: "Hello, I purchased 5000 coins but did not receive them in my account.", time: "08 May 2024, 11:30 AM" },
        { sender: "Support Agent (Rahul)", role: "support", text: "Sorry for the inconvenience. Could you please share your transaction ID?", time: "08 May 2024, 11:35 AM" },
        { sender: "Deepak Kundra", role: "user", text: "Sure, here is my transaction ID: TXN1234567890", time: "08 May 2024, 11:38 AM" },
        { sender: "Support Agent (Rahul)", role: "support", text: "Thank you! We have verified your transaction. Your coins will be added to your account within 10 minutes.", time: "08 May 2024, 11:42 AM" },
        { sender: "Deepak Kundra", role: "user", text: "Thank you so much!", time: "08 May 2024, 11:45 AM" },
    ]);

    const getStatusColor = (status: Ticket["status"]) => {
        switch (status) {
            case "Open": return "text-[#4CAF50] border-[#4CAF50]/30 bg-[#4CAF50]/10";
            case "In Progress": return "text-[#2196F3] border-[#2196F3]/30 bg-[#2196F3]/10";
            case "Resolved": return "text-[#8BC34A] border-[#8BC34A]/30 bg-[#8BC34A]/10";
            case "Closed": return "text-[#9E9E9E] border-[#9E9E9E]/30 bg-[#9E9E9E]/10";
            case "Waiting for Reply": return "text-[#FF9800] border-[#FF9800]/30 bg-[#FF9800]/10";
            default: return "text-white";
        }
    };

    return (
        <div className={`min-h-screen bg-[#060403] text-white flex flex-col items-center ${poppins.className}`}>
            {/* Main responsive wrapper container instead of a fixed pixel width */}
            <div className="w-full max-w-[1500px] min-h-screen flex flex-col relative select-none px-4 sm:px-6">

                <Navbar />

                {/* Content grid wrapper layout */}
                <div className="flex-grow py-6 flex justify-center items-start overflow-hidden">
                    <div className="w-full flex flex-col lg:flex-row gap-6 items-start justify-center">

                        {/* ================= LEFT PROFILE SIDEBAR ================= */}
                        <div
                            className="bg-cover bg-center p-6 flex flex-col gap-8 shrink-0 rounded-lg border border-[#3E342A]/20"
                            style={{
                                backgroundImage: `url('/burracoAsset/profile-svg.svg')`,
                                width: "286px",
                                minHeight: "390px"
                            }}
                        >
                            {/* User Mini Card */}
                            <div className="flex items-center gap-3 border-b border-[#3E342A]/40 pb-6">
                                <img
                                    src="/burracoAsset/default-avatar.svg"
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full border border-[#E5B962] object-cover"
                                />
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-sm font-semibold truncate">Deepak Kundra</span>
                                    <span className="text-[11px] text-gray-400 truncate">deepak.kundra@gmail.com</span>
                                </div>
                            </div>

                            {/* Navigation Options */}
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] text-[#E5B962] tracking-widest font-semibold uppercase mb-2 block px-3">
                                    User Dashboard
                                </span>

                                {[
                                    { name: "My Tickets", icon: "🎫" },
                                    { name: "Wallet", icon: "💼" },
                                    { name: "Transaction History", icon: "📊" }
                                ].map((item) => {
                                    const isActive = activeTab === item.name;
                                    return (
                                        <button
                                            key={item.name}
                                            onClick={() => setActiveTab(item.name)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-all text-left ${isActive
                                                ? "bg-gradient-to-r from-[#E5B962]/20 to-transparent border-l-2 border-[#E5B962] text-[#E5B962] font-medium"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            <span>{item.icon}</span>
                                            <span>{item.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ================= MIDDLE TICKET LIST COLUMN ================= */}
                        <div
                            className="bg-cover bg-center p-5 flex flex-col shrink-0 rounded-lg border border-[#2A2119]"
                            style={{
                                backgroundImage: `url('/burracoAsset/my-ticket-bg.svg')`,
                                width: "331px",
                                height: "838px"
                            }}
                        >
                            <h2 className="text-[#E5B962] font-semibold text-base tracking-wide uppercase mb-1">
                                My Tickets
                            </h2>
                            <p className="text-xs text-gray-400 mb-6">View all your support tickets</p>

                            {/* Ticket Feed Container */}
                            <div className="flex flex-col gap-3 overflow-y-auto pr-1 flex-1 custom-sidebar-scroll">
                                {tickets.map((ticket) => {
                                    const isSelected = selectedTicket.id === ticket.id;
                                    return (
                                        <div
                                            key={ticket.id}
                                            onClick={() => setSelectedTicket(ticket)}
                                            className={`p-4 rounded-md border cursor-pointer transition-all ${isSelected
                                                ? "bg-[#1E1812] border-[#E5B962]"
                                                : "bg-[#110D0A] border-[#2A2119] hover:border-[#3E3227]"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between gap-2 mb-2">
                                                <span className={`text-[11px] font-semibold uppercase tracking-wider ${isSelected ? 'text-[#E5B962]' : 'text-gray-300'}`}>
                                                    #{ticket.id}
                                                </span>
                                                <span className={`text-[9px] px-2 py-0.5 rounded-full border ${getStatusColor(ticket.status)}`}>
                                                    {ticket.status}
                                                </span>
                                            </div>
                                            <h4 className="text-xs font-medium text-white line-clamp-1 mb-2">
                                                {ticket.title}
                                            </h4>
                                            <p className="text-[10px] text-gray-500">{ticket.date}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Pagination Indicator */}
                            <div className="pt-4 border-t border-[#2A2119] mt-4 flex justify-between items-center text-[11px] text-gray-400">
                                <span>Showing 1 to 5 of 12</span>
                                <div className="flex gap-1.5 font-medium">
                                    <button className="px-1.5 py-0.5 hover:text-white">❮</button>
                                    <button className="px-1.5 py-0.5 text-[#E5B962] border border-[#E5B962]/30 bg-[#E5B962]/5 rounded">1</button>
                                    <button className="px-1.5 py-0.5 hover:text-white">2</button>
                                    <button className="px-1.5 py-0.5 hover:text-white">3</button>
                                    <button className="px-1.5 py-0.5 hover:text-white">❯</button>
                                </div>
                            </div>
                        </div>

                        {/* ================= RIGHT TICKET DETAILS CHAT VIEW ================= */}
                        <div
                            className="bg-cover bg-center p-6 flex flex-col flex-1 min-w-[320px] rounded-lg border border-[#2A2119]"
                            style={{
                                backgroundImage: `url('/burracoAsset/ticket-details.svg')`,
                                height: "838px"
                            }}
                        >
                            {/* Navigation Header Line */}
                            <div className="flex items-center justify-between border-b border-[#2A2119] pb-4 mb-5">
                                <button className="text-[11px] font-semibold tracking-wider text-gray-400 hover:text-white flex items-center gap-1.5 uppercase">
                                    <span>❮</span> Back to Tickets
                                </button>
                                <h2 className="text-[#E5B962] font-semibold text-base tracking-wide uppercase">
                                    Ticket Details
                                </h2>
                                <div className="w-20 hidden sm:block"></div>
                            </div>

                            {/* Metadata Header Meta */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-lg font-bold text-[#E5B962]">#{selectedTicket.id}</span>
                                    <span className={`text-[10px] px-2 py-0.5 rounded border font-medium ${getStatusColor(selectedTicket.status)}`}>
                                        {selectedTicket.status}
                                    </span>
                                </div>
                                <h3 className="text-base font-semibold text-white mb-3">{selectedTicket.title}</h3>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400">
                                    <span>📅 {selectedTicket.date}</span>
                                    <span>📁 Billing & Payments</span>
                                    <span>🔸 Priority: <span className="text-[#FF9800]">Medium</span></span>
                                </div>
                            </div>

                            {/* Scrollable Conversation Workspace Container */}
                            <div className="flex-1 flex flex-col gap-4 overflow-y-auto mb-6 pr-1 custom-chat-scroll">
                                {chatHistory.map((msg, idx) => {
                                    const isSupport = msg.role === "support";
                                    return (
                                        <div
                                            key={idx}
                                            className={`p-4 rounded-lg flex gap-4 ${isSupport ? "bg-[#18111A] border border-[#3E2540]/30" : "bg-[#0E1310] border border-[#1A3D24]/30"
                                                }`}
                                        >
                                            <div className="w-9 h-9 rounded-full bg-[#1F1915] border border-[#E5B962]/40 flex items-center justify-center flex-shrink-0 text-sm">
                                                {isSupport ? "🎧" : "👤"}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between gap-4 mb-1.5">
                                                    <span className={`text-xs font-semibold ${isSupport ? 'text-[#BA68C8]' : 'text-[#81C784]'}`}>
                                                        {msg.sender}
                                                    </span>
                                                    <span className="text-[10px] text-gray-500">{msg.time}</span>
                                                </div>
                                                <p className="text-xs text-gray-300 leading-relaxed">{msg.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Response Input Box Form Section */}
                            <div className="border-t border-[#2A2119] pt-4">
                                <label className="block text-[11px] text-[#E5B962] font-semibold uppercase mb-2 tracking-wider">
                                    Reply to this ticket
                                </label>
                                <div className="relative bg-[#0A0807] border border-[#2A2119] rounded-lg p-3">
                                    <textarea
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        placeholder="Type your reply here..."
                                        rows={3}
                                        className="w-full bg-transparent text-xs text-white placeholder-gray-600 focus:outline-none resize-none"
                                    />
                                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#2A2119]/50">
                                        {/* <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5">
                                            📎 <span className="underline decoration-dotted">Attach File (Optional)</span>
                                        </button> */}
                                        <button
                                            onClick={() => setReplyText("")}
                                            className="bg-gradient-to-r from-[#DAB159] to-[#B7923E] hover:brightness-110 text-black font-semibold text-xs px-5 py-2 rounded uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
                                        >
                                            <span>Send Reply</span> ➔
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}