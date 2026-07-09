"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import Login from "@/components/sections/Login";
import { useAuth } from "@/context/AuthContext";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    // Assuming your auth context returns user details along with balance/coins
    const { isAuthenticated, logout, user } = useAuth();

    // Fallback values matching your UI screenshot if user context isn't fully set up yet
    const userCoins = user?.coins ?? 0;
    const userName = user?.playerName;
    const userAvatar = user?.avatarUrl ?? "/burracoAsset/default-avatar.svg"; // Fallback path

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT US", href: "/about" },
        { name: "GAMES", href: "/games" },
        { name: "STORE", href: "/store" },
        { name: "BLOG", href: "/blog" },
        { name: "CONTACT US", href: "/contact" },
    ];

    return (
        <nav
            className="w-full flex items-center relative z-50 select-none"
            style={{
                height: "94px",
                background: "linear-gradient(90deg, #060503 0%, #0C0805 51.62%, #060503 100%)",
                borderBottom: "1px solid",
                borderImage: "linear-gradient(90deg, #544434 0%, #F1DF82 57.21%, #46372A 100%) 1",
            }}
        >
            <div className={`w-full max-w-[1440px] h-full mx-auto px-6 md:px-12 flex items-center justify-between ${poppins.className}`}>

                {/* ================= BRANDING SECTION ================= */}
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push("/")}>
                    <img
                        src="/burracoAsset/navbar-logo.svg"
                        alt="BALOOT"
                        className="w-[59px] h-[59px] object-contain"
                    />
                    <img
                        src="/burracoAsset/DIWANYEH.svg"
                        alt="DIWANYEH"
                        className="hidden sm:block w-[150px] md:w-[212px] h-[42px] object-contain"
                    />
                </div>

                {/* ================= MIDDLE NAVIGATION LINKS ================= */}
                <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative flex flex-col items-center justify-center transition-colors duration-200 hover:opacity-80 active:opacity-100 text-base"
                                style={{
                                    color: isActive ? "#E5B962" : "#FFFFFF",
                                    fontWeight: isActive ? 600 : 400,
                                }}
                            >
                                <span className="uppercase tracking-wider">{link.name}</span>
                                {isActive && (
                                    <span className="absolute -bottom-4 flex items-center justify-center w-full pointer-events-none">
                                        <span className="h-[1px] w-4 bg-gradient-to-r from-transparent to-[#E5B962]"></span>
                                        <span className="text-[#E5B962] text-[8px] mx-0.5">◆</span>
                                        <span className="h-[1px] w-4 bg-gradient-to-l from-transparent to-[#E5B962]"></span>
                                    </span>
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* ================= RIGHT AUTHENTICATION / USER PROFILE SECTION ================= */}
                <div className="flex items-center gap-6">
                    {!isAuthenticated ? (
                        /* Unauthenticated: Show Login Button */
                        <button
                            onClick={() => setIsLoginOpen(true)}
                            className="hover:brightness-110 active:brightness-90 transition-all duration-200"
                        >
                            <img
                                src="/burracoAsset/login.svg"
                                alt="Login"
                                className="w-[101px] h-[40px] object-contain"
                            />
                        </button>
                    ) : (
                        /* Authenticated State: Coins Widget + User Profile Context Dropdown */
                        <div className="flex items-center gap-4 relative">

                            {/* Coin Display Widget */}
                            <div className="flex items-center bg-[#14110E] border border-[#3E342A] rounded-md px-3 py-1.5 h-[40px] gap-2.5">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#F9E79F] to-[#B7952A] flex items-center justify-center font-bold text-black text-[11px]">
                                    C
                                </div>
                                <span className="text-[#E5B962] text-sm font-medium">
                                    {userCoins.toLocaleString()}
                                </span>
                                <button className="text-[#E5B962] font-bold text-sm bg-[#221D17] hover:bg-[#2D261F] w-5 h-5 rounded flex items-center justify-center transition-colors ml-1">
                                    +
                                </button>
                            </div>

                            {/* User Profile Container */}
                            <div className="relative">
                                <div
                                    className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                >
                                    <img
                                        src={userAvatar}
                                        alt={userName}
                                        className="w-10 h-10 rounded-full border border-[#E5B962] object-cover"
                                    />
                                    <div className="hidden md:flex flex-col text-left leading-none">
                                        <span className="text-[11px] text-gray-400 font-medium">Welcome,</span>
                                        <span className="text-sm text-white font-semibold mt-0.5">{userName}</span>
                                    </div>
                                    <span className="text-gray-400 text-xs ml-1 transition-transform duration-200" style={{ transform: isProfileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        ▼
                                    </span>
                                </div>

                                {/* Dropdown Menu */}
                                {isProfileDropdownOpen && (
                                    <div className="absolute right-0 mt-3 w-48 bg-[#0F0C09] border border-[#3E342A] rounded-lg shadow-2xl py-2 z-50">
                                        <button
                                            onClick={() => {
                                                setIsProfileDropdownOpen(false);
                                                router.push("/dashboard"); // Navigates to user dashboard page
                                            }}
                                            className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-[#1C1712] hover:text-[#E5B962] transition-colors"
                                        >
                                            User Dashboard
                                        </button>
                                        <div className="border-t border-[#3E342A] my-1"></div>
                                        <button
                                            onClick={() => {
                                                setIsProfileDropdownOpen(false);
                                                logout();
                                            }}
                                            className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-[#1C1712] transition-colors"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    )}
                </div>

            </div>

            {/* Login Modal */}
            <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </nav>
    );
}