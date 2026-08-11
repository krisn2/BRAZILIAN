

"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    const socialLinks = [
        { name: "Facebook", icon: "/burracoAsset/Fb.svg", href: "#" },
        { name: "Instagram", icon: "/burracoAsset/insta.svg", href: "#" },
        { name: "YouTube", icon: "/burracoAsset/yt.svg", href: "#" },
        { name: "X (Twitter)", icon: "/burracoAsset/x.svg", href: "#" }
    ];

    return (
        <footer className="w-full bg-[#060503] border-t border-[#D59444]/15 py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[#988E7E]" style={{ fontFamily: "Poppins, sans-serif" }}>
            {/* Left section: Copyright */}
            <div className="flex-1 text-center md:text-left text-xs tracking-wide opacity-80">
                {t("footer_copyright")}
            </div>

            {/* Middle section: Social Icons */}
            <div className="flex-1 flex justify-center items-center gap-6">
                {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} className="hover:opacity-80 transition-opacity duration-200">
                        <img src={social.icon} alt={social.name} className="h-5 w-auto" />
                    </a>
                ))}
            </div>

            {/* Right section: Links */}
            <div className="flex-1 flex justify-center md:justify-end items-center gap-6 text-xs font-light tracking-wide">
                <a href="/TermsAndConditions" className="hover:text-white transition-colors duration-200">{t("footer_terms")}</a>
                <span className="opacity-30">|</span>
                <a href="/PrivacyPolicy" className="hover:text-white transition-colors duration-200">{t("footer_privacy")}</a>
            </div>
        </footer>
    );
}