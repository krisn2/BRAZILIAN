"use client";

import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import Login from "@/components/sections/Login";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Auth context
    const { isAuthenticated, logout, user } = useAuth();

    // Language context
    const { t, toggleLanguage, language, isArabic } = useLanguage();

    const userCoins = user?.coins ?? 0;
    const userName = user?.playerName;
    const userAvatar = user?.avatarUrl ?? "/burracoAsset/default-avatar.svg";

    const navLinks = [
        { name: t("nav_home"), href: "/" },
        { name: t("nav_about"), href: "/about" },
        { name: t("nav_games"), href: "/games" },
        { name: t("nav_store"), href: "/store" },
        { name: t("nav_blog"), href: "/blog" },
        { name: t("nav_contact"), href: "/contact" },
    ];

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

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
            <div className={`w-full max-w-[1440px] h-full mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between ${poppins.className}`}>

                {/* ================= BRANDING SECTION ================= */}
                {/* Mobile: Centered logo */}
                <div className="lg:hidden absolute left-1/2 -translate-x-1/2 flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
                    <img
                        src="/burracoAsset/navbar-logo.svg"
                        alt="BALOOT"
                        className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] object-contain"
                    />
                    <img
                        src={isArabic ? "/burracoAsset/DIWANYEH-ar.svg" : "/burracoAsset/DIWANYEH.svg"}
                        alt="DIWANYEH"
                        className="w-[100px] sm:w-[130px] h-[32px] sm:h-[38px] object-contain"
                    />
                </div>

                {/* Desktop: Left-aligned logo */}
                <div className="hidden lg:flex items-center gap-3 sm:gap-4 cursor-pointer shrink-0" onClick={() => router.push("/")}>
                    <img
                        src="/burracoAsset/navbar-logo.svg"
                        alt="BALOOT"
                        className="w-[59px] h-[59px] object-contain"
                    />
                    <img
                        src={isArabic ? "/burracoAsset/DIWANYEH-ar.svg" : "/burracoAsset/DIWANYEH.svg"}
                        alt="DIWANYEH"
                        className="w-[130px] md:w-[212px] h-[42px] object-contain"
                    />
                </div>

                {/* ================= MIDDLE NAVIGATION LINKS (Desktop) ================= */}
                <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                        return (
                            <a
                                key={link.href}
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

                {/* ================= RIGHT SECTION ================= */}
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ml-auto lg:ml-0">

                    {/* Language Switcher Button */}
                    <button
                        onClick={toggleLanguage}
                        aria-label="Switch Language"
                        className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5B962]/50 bg-[#14110E] text-[#E5B962] hover:border-[#E5B962] hover:bg-[#221D17] active:scale-95 transition-all text-xs font-semibold tracking-wider cursor-pointer shadow-sm"
                    >
                        <svg className="w-4 h-4 text-[#E5B962]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        <span>{language === 'en' ? 'العربية' : 'English'}</span>
                    </button>

                    {!isAuthenticated ? (
                        /* Unauthenticated: Show Login Button */
                        <button
                            onClick={() => setIsLoginOpen(true)}
                            className="hidden sm:block hover:brightness-110 active:brightness-90 transition-all duration-200"
                        >
                            <img
                                src={isArabic ? "/burracoAsset/login-ar.svg" : "/burracoAsset/login.svg"}
                                alt="Login"
                                className="w-[90px] sm:w-[101px] h-[36px] sm:h-[40px] object-contain"
                            />
                        </button>
                    ) : (
                        /* Authenticated State: Coins Widget + User Profile Context Dropdown */
                        <div className="hidden sm:flex items-center gap-4 relative">

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
                                        <span className="text-[11px] text-gray-400 font-medium">{t("nav_welcome")}</span>
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
                                                router.push("/dashboard");
                                            }}
                                            className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-[#1C1712] hover:text-[#E5B962] transition-colors"
                                        >
                                            {t("nav_dashboard")}
                                        </button>
                                        <div className="border-t border-[#3E342A] my-1"></div>
                                        <button
                                            onClick={() => {
                                                setIsProfileDropdownOpen(false);
                                                logout();
                                            }}
                                            className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-[#1C1712] transition-colors"
                                        >
                                            {t("nav_logout")}
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    )}

                    {/* ================= MOBILE: Hamburger Right ================= */}
                    <div className="lg:hidden flex items-center shrink-0">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex flex-col items-center justify-center w-10 h-10 gap-[5px] group"
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`block w-6 h-[2px] bg-[#E5B962] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                            <span className={`block w-6 h-[2px] bg-[#E5B962] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-[2px] bg-[#E5B962] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                        </button>
                    </div>
                </div>

            </div>

            {/* ================= MOBILE DRAWER MENU ================= */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#0A0805] border-l border-[#3E342A] z-50 transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className={`flex flex-col h-full pt-6 pb-8 px-6 ${poppins.className}`}>
                    {/* Close button */}
                    <div className="flex items-center justify-between mb-8">
                        <img
                            src={isArabic ? "/burracoAsset/DIWANYEH-ar.svg" : "/burracoAsset/DIWANYEH.svg"}
                            alt="DIWANYEH"
                            className="w-[130px] h-[32px] object-contain"
                        />
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-8 h-8 flex items-center justify-center text-[#E5B962] hover:text-white transition-colors"
                            aria-label="Close menu"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
                        {navLinks.map((link) => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                                        isActive
                                            ? "bg-[#E5B962]/10 text-[#E5B962] border-l-2 border-[#E5B962]"
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Bottom Actions */}
                    <div className="flex flex-col gap-3 pt-6 border-t border-[#3E342A]/50 mt-4">
                        {/* Language Switcher (mobile) */}
                        <button
                            onClick={() => {
                                toggleLanguage();
                            }}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#E5B962]/50 bg-[#14110E] text-[#E5B962] hover:border-[#E5B962] transition-all text-xs font-semibold tracking-wider"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            <span>{language === 'en' ? 'العربية' : 'English'}</span>
                        </button>

                        {!isAuthenticated ? (
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsLoginOpen(true);
                                }}
                                className="w-full py-2.5 bg-gradient-to-r from-[#B86B1D] via-[#EFCC88] to-[#B86B1D] text-[#040808] font-bold text-sm rounded-lg uppercase tracking-wider hover:brightness-110 transition-all"
                            >
                                {t("nav_home") === "الرئيسية" ? "تسجيل الدخول" : "LOGIN"}
                            </button>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {/* User info */}
                                <div className="flex items-center gap-3 px-2">
                                    <img
                                        src={userAvatar}
                                        alt={userName}
                                        className="w-9 h-9 rounded-full border border-[#E5B962] object-cover"
                                    />
                                    <div className="flex flex-col leading-none">
                                        <span className="text-xs text-gray-400">{t("nav_welcome")}</span>
                                        <span className="text-sm text-white font-semibold">{userName}</span>
                                    </div>
                                </div>
                                {/* Coins */}
                                <div className="flex items-center justify-between bg-[#14110E] border border-[#3E342A] rounded-md px-3 py-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#F9E79F] to-[#B7952A] flex items-center justify-center font-bold text-black text-[11px]">C</div>
                                        <span className="text-[#E5B962] text-sm font-medium">{userCoins.toLocaleString()}</span>
                                    </div>
                                    <button className="text-[#E5B962] font-bold text-sm bg-[#221D17] w-5 h-5 rounded flex items-center justify-center">+</button>
                                </div>
                                {/* Dashboard + Logout */}
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        router.push("/dashboard");
                                    }}
                                    className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-[#1C1712] hover:text-[#E5B962] transition-colors rounded-md"
                                >
                                    {t("nav_dashboard")}
                                </button>
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        logout();
                                    }}
                                    className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-[#1C1712] transition-colors rounded-md"
                                >
                                    {t("nav_logout")}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </nav>
    );
}