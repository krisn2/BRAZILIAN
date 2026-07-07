"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { name: "HOME", href: "/", width: "46px", left: "423px" },
        { name: "ABOUT US", href: "/about", width: "78px", left: "542px" },
        { name: "GAMES", href: "/games", width: "55px", left: "693px" },
        { name: "STORE", href: "/store", width: "48px", left: "821px" },
        { name: "BLOG", href: "/blog", width: "42px", left: "942px" },
        { name: "CONTACT US", href: "/contact", width: "102px", left: "1057px" },
    ];

    return (
        <nav
            className="w-full flex items-center relative"
            style={{
                height: "94px",
                background: "linear-gradient(90deg, #060503 0%, #0C0805 51.62%, #060503 100%)",
                borderBottom: "1px solid",
                borderImage: "linear-gradient(90deg, #544434 0%, #F1DF82 57.21%, #46372A 100%) 1",
            }}
        >
            <div className={`relative w-full max-w-[1440px] h-full mx-auto ${poppins.className}`}>

                {/* ================= BRANDING SECTION ================= */}
                <div className="relative h-full flex-shrink-0" style={{ width: "350px" }}>
                    {/* logo-navbar */}
                    <div
                        className="absolute"
                        style={{
                            width: "89px",
                            height: "87px",
                            left: "83px",
                            top: "4px",
                        }}
                    >
                        <img
                            src="/burracoAsset/logo.svg"
                            alt="logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* BALOOT text SVG */}
                    <div
                        className="absolute flex items-center justify-start select-none"
                        style={{
                            width: "140px",
                            height: "28px",
                            left: "185px",
                            top: "27px",
                        }}
                    >
                        <img
                            src="/burracoAsset/baloot-name.svg"
                            alt="BALOOT"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Card Game SVG */}
                    <div
                        className="absolute flex items-center justify-start select-none"
                        style={{
                            width: "83px",
                            height: "15px",
                            left: "213px",
                            top: "60px",
                        }}
                    >
                        <img
                            src="/burracoAsset/Card-Game.svg"
                            alt="Card Game"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* ================= MIDDLE NAVIGATION LINKS ================= */}
                {navLinks.map((link) => {
                    const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className="absolute flex items-center justify-center transition-colors duration-200 hover:opacity-80 active:opacity-100"
                            style={{
                                width: link.width,
                                height: "24px",
                                top: "36px",
                                left: link.left,
                                color: isActive ? "#E5B962" : "#FFFFFF",
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "100%",
                                textTransform: "uppercase",
                            }}
                        >
                            <span className="relative w-full h-full flex flex-col items-center justify-center">
                                {link.name}
                                {isActive && (
                                    <span className="absolute -bottom-4 flex items-center justify-center w-full select-none pointer-events-none">
                                        <span className="h-[1px] w-4 bg-gradient-to-r from-transparent to-[#E5B962]"></span>
                                        <span className="text-[#E5B962] text-[8px] mx-0.5">◆</span>
                                        <span className="h-[1px] w-4 bg-gradient-to-l from-transparent to-[#E5B962]"></span>
                                    </span>
                                )}
                            </span>
                        </a>
                    );
                })}

                {/* ================= RIGHT AUTHENTICATION BUTTONS ================= */}
                <div
                    className="absolute flex items-center select-none"
                    style={{
                        width: "237px",
                        height: "40px",
                        top: "28px",
                        left: "1206px",
                    }}
                >
                    {/* Login Button */}
                    <a
                        href="#"
                        className="absolute block hover:brightness-110 active:brightness-90 transition-all duration-200"
                        style={{
                            width: "101px",
                            height: "40px",
                            left: "0px",
                        }}
                    >
                        <img
                            src="/burracoAsset/login.svg"
                            alt="Login"
                            className="w-full h-full object-contain"
                        />
                    </a>

                    {/* Register Button */}
                    {/* <a
                        href="#"
                        className="absolute block hover:brightness-110 active:brightness-90 transition-all duration-200"
                        style={{
                            width: "126px",
                            height: "40px",
                            left: "111px",
                        }}
                    >
                        <img
                            src="/burracoAsset/register.svg"
                            alt="Register"
                            className="w-full h-full object-contain"
                        />
                    </a> */}
                </div>

            </div>
        </nav>
    );
}