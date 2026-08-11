"use client";

import React, { useState, useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { io, Socket } from "socket.io-client";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface TicketMessage {
    sender: string;
    senderName: string;
    senderRole: string;
    senderId?: string;
    message: string;
    attachments?: string[];
    createdAt: string;
}

interface Ticket {
    _id: string;
    ticketId: string;
    subject: string;
    category: string;
    priority: string;
    status: string;
    messages: TicketMessage[];
    createdAt: string;
}

export default function DashboardPage() {
    const { user, token, isAuthenticated, isLoading } = useAuth();
    const { t } = useLanguage();
    const router = useRouter();

    const [activeTab, setActiveTab] = useState("My Tickets");
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [replyText, setReplyText] = useState("");
    const [userProfile, setUserProfile] = useState<any>(null);
    const [profileLoading, setProfileLoading] = useState(true);
    const [ticketsLoading, setTicketsLoading] = useState(true);

    const socketRef = useRef<Socket | null>(null);

    // Redirect if not logged in
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/");
        }
    }, [isLoading, isAuthenticated, router]);

    // Socket.io connection for real-time ticket updates
    useEffect(() => {
        if (!isAuthenticated || !token || !user) return;

        const socketUrl = API_URL.replace(/\/api$/, "");
        const socket = io(socketUrl, {
            auth: { token, userId: user.userID },
            transports: ['websocket', 'polling']
        });

        socketRef.current = socket;

        socket.on('connect', () => {
            socket.emit('register-user', { userId: user.userID, role: 'user' });
        });

        socket.on('ticket-message-received', (data: { ticketId: string, message: TicketMessage }) => {
            setTickets(prevTickets => {
                const updated = prevTickets.map(t => {
                    if (t._id === data.ticketId) {
                        const alreadyExists = t.messages.some(m => 
                            m.message === data.message.message && 
                            m.createdAt === data.message.createdAt &&
                            m.sender === data.message.sender
                        );
                        if (!alreadyExists) {
                            return { ...t, messages: [...t.messages, data.message] };
                        }
                    }
                    return t;
                });
                return updated;
            });

            setSelectedTicket(prevSelected => {
                if (prevSelected && prevSelected._id === data.ticketId) {
                    const alreadyExists = prevSelected.messages.some(m => 
                        m.message === data.message.message && 
                        m.createdAt === data.message.createdAt &&
                        m.sender === data.message.sender
                    );
                    if (!alreadyExists) {
                        return { ...prevSelected, messages: [...prevSelected.messages, data.message] };
                    }
                }
                return prevSelected;
            });
        });

        return () => {
            socket.disconnect();
        };
    }, [isAuthenticated, token, user]);

    // Fetch user profile and tickets
    useEffect(() => {
        if (!isAuthenticated || !token || !user) return;

        const cleanApiUrl = API_URL.endsWith("/api") ? API_URL : `${API_URL}/api`;

        const fetchProfile = async () => {
            try {
                const res = await fetch(`${cleanApiUrl}/user?id=${user.userID}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = await res.json();
                if (data.success && data.user) {
                    setUserProfile(data.user);
                }
            } catch (err) {
                console.error("Error fetching user profile:", err);
            } finally {
                setProfileLoading(false);
            }
        };

        const fetchTickets = async () => {
            try {
                const res = await fetch(`${cleanApiUrl}/tickets/my-tickets`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = await res.json();
                if (data.success && data.data) {
                    setTickets(data.data);
                    if (data.data.length > 0) {
                        setSelectedTicket(data.data[0]);
                    }
                }
            } catch (err) {
                console.error("Error fetching tickets:", err);
            } finally {
                setTicketsLoading(false);
            }
        };

        fetchProfile();
        fetchTickets();
    }, [isAuthenticated, token, user]);

    const handleSendReply = async () => {
        if (!replyText.trim() || !selectedTicket || !token) return;

        try {
            const cleanApiUrl = API_URL.endsWith("/api") ? API_URL : `${API_URL}/api`;
            const res = await fetch(`${cleanApiUrl}/tickets/my-tickets/reply/${selectedTicket._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ message: replyText })
            });
            const data = await res.json();
            if (data.success && data.data) {
                const updatedTicket = data.data;
                setTickets(prev => prev.map(t => t._id === updatedTicket._id ? updatedTicket : t));
                setSelectedTicket(updatedTicket);
                setReplyText("");
            } else {
                alert(data.message || "Failed to send reply");
            }
        } catch (err) {
            console.error("Error sending reply:", err);
            alert("Error connecting to server to send reply");
        }
    };

    const formatStatus = (status: string) => {
        switch (status?.toLowerCase()) {
            case "open": return "Open";
            case "in progress":
            case "in_progress": return "In Progress";
            case "resolved": return "Resolved";
            case "closed": return "Closed";
            case "waiting for reply":
            case "waiting_for_reply": return "Waiting for Reply";
            default: return status || "Open";
        }
    };

    const getStatusColor = (status: string) => {
        const formatted = formatStatus(status);
        switch (formatted) {
            case "Open": return "text-[#4CAF50] border-[#4CAF50]/30 bg-[#4CAF50]/10";
            case "In Progress": return "text-[#2196F3] border-[#2196F3]/30 bg-[#2196F3]/10";
            case "Resolved": return "text-[#8BC34A] border-[#8BC34A]/30 bg-[#8BC34A]/10";
            case "Closed": return "text-[#9E9E9E] border-[#9E9E9E]/30 bg-[#9E9E9E]/10";
            case "Waiting for Reply": return "text-[#FF9800] border-[#FF9800]/30 bg-[#FF9800]/10";
            default: return "text-white border-white/20 bg-white/5";
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
                                    src={userProfile?.avatarUrl || "/burracoAsset/default-avatar.svg"}
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full border border-[#E5B962] object-cover"
                                />
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-sm font-semibold truncate">
                                        {profileLoading ? "Loading..." : (userProfile?.playerName || user?.playerName || "User")}
                                    </span>
                                    <span className="text-[11px] text-gray-400 truncate">
                                        {profileLoading ? "Please wait..." : (userProfile?.email || user?.email || "No Email")}
                                    </span>
                                </div>
                            </div>

                            {/* Navigation Options */}
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] text-[#E5B962] tracking-widest font-semibold uppercase mb-2 block px-3">
                                    {t("dashboard_user_title")}
                                </span>

                                {[
                                    { name: "My Tickets", label: t("dashboard_my_tickets"), icon: "🎫" },
                                    { name: "Wallet", label: t("dashboard_wallet"), icon: "💼" },
                                    { name: "Transaction History", label: t("dashboard_history"), icon: "📊" }
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
                                            <span>{item.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ================= MIDDLE & RIGHT CONTENT AREA BY TAB ================= */}
                        {activeTab === "My Tickets" && (
                            <>
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
                                        {ticketsLoading ? (
                                            <div className="text-center text-xs text-gray-500 py-10">Loading tickets...</div>
                                        ) : tickets.length === 0 ? (
                                            <div className="text-center text-xs text-gray-500 py-10">No tickets found. Submit a ticket on the Contact page if you need assistance.</div>
                                        ) : (
                                            tickets.map((ticket) => {
                                                const isSelected = selectedTicket?._id === ticket._id;
                                                return (
                                                    <div
                                                        key={ticket._id}
                                                        onClick={() => setSelectedTicket(ticket)}
                                                        className={`p-4 rounded-md border cursor-pointer transition-all ${isSelected
                                                            ? "bg-[#1E1812] border-[#E5B962]"
                                                            : "bg-[#110D0A] border-[#2A2119] hover:border-[#3E3227]"
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between gap-2 mb-2">
                                                            <span className={`text-[11px] font-semibold uppercase tracking-wider ${isSelected ? 'text-[#E5B962]' : 'text-gray-300'}`}>
                                                                #{ticket.ticketId}
                                                            </span>
                                                            <span className={`text-[9px] px-2 py-0.5 rounded-full border ${getStatusColor(ticket.status)}`}>
                                                                {formatStatus(ticket.status)}
                                                            </span>
                                                        </div>
                                                        <h4 className="text-xs font-medium text-white line-clamp-1 mb-2">
                                                            {ticket.subject}
                                                        </h4>
                                                        <p className="text-[10px] text-gray-500">{new Date(ticket.createdAt).toLocaleString()}</p>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>

                                    {/* Pagination / Total Indicator */}
                                    <div className="pt-4 border-t border-[#2A2119] mt-4 flex justify-between items-center text-[11px] text-gray-400">
                                        <span>Total: {tickets.length} tickets</span>
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
                                        <button 
                                            onClick={() => setSelectedTicket(null)}
                                            className="text-[11px] font-semibold tracking-wider text-gray-400 hover:text-white flex items-center gap-1.5 uppercase"
                                        >
                                            <span>❮</span> Clear Selection
                                        </button>
                                        <h2 className="text-[#E5B962] font-semibold text-base tracking-wide uppercase">
                                            Ticket Details
                                        </h2>
                                        <div className="w-20 hidden sm:block"></div>
                                    </div>

                                    {selectedTicket ? (
                                        <>
                                            {/* Metadata Header Meta */}
                                            <div className="mb-6">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-lg font-bold text-[#E5B962]">#{selectedTicket.ticketId}</span>
                                                    <span className={`text-[10px] px-2 py-0.5 rounded border font-medium ${getStatusColor(selectedTicket.status)}`}>
                                                        {formatStatus(selectedTicket.status)}
                                                    </span>
                                                </div>
                                                <h3 className="text-base font-semibold text-white mb-3">{selectedTicket.subject}</h3>
                                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400">
                                                    <span>📅 {new Date(selectedTicket.createdAt).toLocaleString()}</span>
                                                    <span>📁 Category: <span className="text-white uppercase">{selectedTicket.category}</span></span>
                                                    <span>🔸 Priority: <span className="text-[#FF9800] uppercase">{selectedTicket.priority || 'medium'}</span></span>
                                                </div>
                                            </div>

                                            {/* Scrollable Conversation Workspace Container */}
                                            <div className="flex-1 flex flex-col gap-4 overflow-y-auto mb-6 pr-1 custom-chat-scroll">
                                                {selectedTicket.messages.map((msg, idx) => {
                                                    const isSupport = msg.senderRole === "admin" || msg.senderRole === "agent" || msg.sender === "Admin";
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
                                                                            {msg.senderName}
                                                                        </span>
                                                                        <span className="text-[10px] text-gray-500">{new Date(msg.createdAt).toLocaleString()}</span>
                                                                    </div>
                                                                    <p className="text-xs text-gray-300 leading-relaxed">{msg.message}</p>
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
                                                        <button
                                                            onClick={handleSendReply}
                                                            className="bg-gradient-to-r from-[#DAB159] to-[#B7923E] hover:brightness-110 text-black font-semibold text-xs px-5 py-2 rounded uppercase tracking-wider flex items-center gap-2 transition-all shadow-md ml-auto"
                                                        >
                                                            <span>Send Reply</span> ➔
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex-1 flex flex-col items-center justify-center text-gray-500 text-xs">
                                            Select a ticket from the list to view conversations or send replies.
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

                        {activeTab === "Wallet" && (
                            <div
                                className="bg-cover bg-center p-6 flex flex-col flex-1 min-w-[320px] rounded-lg border border-[#2A2119]"
                                style={{
                                    backgroundImage: `url('/burracoAsset/ticket-details.svg')`,
                                    height: "838px"
                                }}
                            >
                                <h2 className="text-[#E5B962] font-semibold text-lg tracking-wide uppercase mb-1 border-b border-[#2A2119] pb-4">
                                    💼 My Wallet & Statistics
                                </h2>
                                {profileLoading ? (
                                    <div className="text-center text-xs text-gray-500 py-10">Loading wallet data...</div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                        <div className="bg-[#17130F] border border-[#E5B962]/40 rounded-xl p-6 flex flex-col justify-between h-[160px]">
                                            <div>
                                                <span className="text-gray-400 text-xs uppercase tracking-wider">Coin Balance</span>
                                                <h3 className="text-3xl font-extrabold text-[#E5B962] mt-2">🪙 {userProfile?.coins ?? 0}</h3>
                                            </div>
                                            <span className="text-[10px] text-gray-500">Available to play in Buracco and Baloot tables</span>
                                        </div>

                                        <div className="bg-[#110D0A] border border-[#2A2119] rounded-xl p-6 flex flex-col justify-between h-[160px]">
                                            <div>
                                                <span className="text-gray-400 text-xs uppercase tracking-wider">Level / Experience</span>
                                                <h3 className="text-2xl font-extrabold text-white mt-2">⭐ Lvl {(Math.floor((userProfile?.exp ?? 0) / 100)) + 1}</h3>
                                                <span className="text-[11px] text-gray-400 mt-1 block">EXP: {userProfile?.exp ?? 0}</span>
                                            </div>
                                            <span className="text-[10px] text-gray-500">Play matches to earn experience points</span>
                                        </div>

                                        <div className="bg-[#110D0A] border border-[#2A2119] rounded-xl p-6 flex flex-col justify-between h-[160px]">
                                            <div>
                                                <span className="text-gray-400 text-xs uppercase tracking-wider">Wins & Streaks</span>
                                                <div className="flex gap-6 mt-2">
                                                    <div>
                                                        <span className="text-[10px] text-gray-500 uppercase block">Wins</span>
                                                        <span className="text-xl font-bold text-white">{userProfile?.totalWins ?? userProfile?.totalWinds ?? 0}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] text-gray-500 uppercase block">Max Streak</span>
                                                        <span className="text-xl font-bold text-white">🔥 {userProfile?.maxStreak ?? 0}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] text-gray-500 uppercase block">Matches</span>
                                                        <span className="text-xl font-bold text-white">🎴 {userProfile?.matches ?? 0}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-[10px] text-gray-500">Country: {userProfile?.country ?? "Not Specified"}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === "Transaction History" && (
                            <div
                                className="bg-cover bg-center p-6 flex flex-col flex-1 min-w-[320px] rounded-lg border border-[#2A2119]"
                                style={{
                                    backgroundImage: `url('/burracoAsset/ticket-details.svg')`,
                                    height: "838px"
                                }}
                            >
                                <h2 className="text-[#E5B962] font-semibold text-lg tracking-wide uppercase mb-1 border-b border-[#2A2119] pb-4">
                                    📊 Transaction & Gift History
                                </h2>
                                {profileLoading ? (
                                    <div className="text-center text-xs text-gray-500 py-10">Loading history...</div>
                                ) : (
                                    <div className="flex flex-col gap-6 mt-6 overflow-y-auto max-h-[700px] pr-2">
                                        <div>
                                            <h3 className="text-sm font-semibold text-[#E5B962] mb-3 uppercase tracking-wider">🛒 Purchases</h3>
                                            {userProfile?.userPurchaseItem && userProfile.userPurchaseItem.length > 0 ? (
                                                <div className="flex flex-col gap-2">
                                                    {userProfile.userPurchaseItem.map((item: any, idx: number) => (
                                                        <div key={idx} className="bg-[#110D0A] border border-[#2A2119] p-4 rounded-lg flex justify-between items-center text-xs">
                                                            <div>
                                                                <p className="font-semibold text-white">Item ID: {item.itemId}</p>
                                                                <p className="text-gray-500 text-[10px]">{new Date(item.createdAt || item.purchaseDate).toLocaleString()}</p>
                                                            </div>
                                                            <span className="text-[#4CAF50] font-bold">Paid</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-xs text-gray-500 italic">No purchases recorded.</p>
                                            )}
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold text-[#E5B962] mb-3 uppercase tracking-wider">🎁 Gifts Received</h3>
                                            {userProfile?.giftsReceived && userProfile.giftsReceived.length > 0 ? (
                                                <div className="flex flex-col gap-2">
                                                    {userProfile.giftsReceived.map((gift: any, idx: number) => (
                                                        <div key={idx} className="bg-[#110D0A] border border-[#2A2119] p-4 rounded-lg flex justify-between items-center text-xs">
                                                            <div>
                                                                <p className="font-semibold text-white">Gift ID: {gift.giftId}</p>
                                                                <p className="text-gray-500 text-[10px]">From User: {gift.senderId || "Anonymous"}</p>
                                                            </div>
                                                            <span className="text-[#FF9800]">{new Date(gift.createdAt).toLocaleString()}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-xs text-gray-500 italic">No gifts received.</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}