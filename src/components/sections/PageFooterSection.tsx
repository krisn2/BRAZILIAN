"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function PageFooterSection() {
    const { t, isArabic } = useLanguage();

    const games = [
        {
            title: t("footer_about_title"),
            tagline: t("footer_baloot_tagline"),
            isThird: false,
        },
        {
            title: t("footer_tournament_title"),
            tagline: t("footer_tournament_tagline"),
            isThird: false,
        },
        {
            title: t("footer_coming_soon"),
            tagline: t("footer_coming_soon_tagline"),
            isThird: true,
        },
    ];

    return (
        <div className="relative w-full bg-[#060503] flex justify-center items-center overflow-hidden z-0">
            {/* Background Image spanning across the elements */}
            <Image
                src="/burracoAsset/last-bg.png"
                alt="Section Background"
                fill
                priority
                className="object-cover object-center pointer-events-none -z-30"
            />

            {/* Inner Content Wrapper */}
            <div className="relative w-full max-w-[1535px] flex flex-col items-center py-8 px-4 sm:px-6 z-10">

                {/* ================= PART 1: ABOUT BALOOT & HOW TO PLAY ================= */}
                {/* Desktop layout with Union SVG background */}
                <div
                    className="relative hidden xl:block z-10 w-full max-w-[1242px] mx-auto"
                    style={{
                        height: "180px",
                    }}
                >
                    <Image
                        src="/burracoAsset/Union.svg"
                        alt="Union Display Plate"
                        fill
                        priority
                        className="object-contain pointer-events-none -z-20"
                    />

                    {/* ABOUT BALOOT Column */}
                    <div className="absolute text-left w-[350px] left-[50px] top-[25px] z-10">
                        <h3 className="font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#EFCC88] to-[#D59444]" style={{ fontFamily: "Transcend, sans-serif", fontSize: "16px", lineHeight: "120%", marginBottom: "10px", textTransform: "uppercase" }}>
                            {t("footer_about_title")}
                        </h3>
                        <p className="text-[#988E7E] font-light leading-relaxed text-[11px]" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "145%" }}>
                            {t("footer_about_desc")}
                        </p>
                    </div>

                    {/* Separator line */}
                    <div className="absolute w-[2px] top-[16px] left-[810px] z-10" style={{ height: "148px" }}>
                        <Image src="/burracoAsset/verticalLine.png" alt="Separator" fill className="object-contain" />
                    </div>

                    {/* HOW TO PLAY Column */}
                    <div className="absolute text-left w-[350px] left-[860px] top-[25px] z-10">
                        <h3 className="font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#EFCC88] to-[#D59444]" style={{ fontFamily: "Transcend, sans-serif", fontSize: "16px", lineHeight: "120%", marginBottom: "12px", textTransform: "uppercase" }}>
                            {t("footer_howtoplay_title")}
                        </h3>
                        <div className="flex flex-col gap-2 mb-4 text-[#988E7E] text-[10px]" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "140%" }}>
                            <div className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-radial-gradient(50% 50% at 50% 50%, #5A3006 0%, #2D1302 100%) border border-[#816F5B] text-[8px] font-bold text-[#E5BF78] flex items-center justify-center">1</span>
                                <span>{t("footer_howtoplay_step1")}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-gradient-to-b from-[#E5BF78] to-[#7E4D15] text-[8px] font-bold text-[#2D1302] flex items-center justify-center">2</span>
                                <span>{t("footer_howtoplay_step2")}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-gradient-to-b from-[#E5BF78] to-[#7E4D15] text-[8px] font-bold text-[#2D1302] flex items-center justify-center">3</span>
                                <span>{t("footer_howtoplay_step3")}</span>
                            </div>
                        </div>
                        <a href="/rules" className="inline-block hover:brightness-110 active:brightness-95 transition-all">
                            <img src={isArabic ? "/burracoAsset/view-full-rules-ar.svg" : "/burracoAsset/view-full-rules.svg"} alt={t("footer_view_rules")} className="h-[28px] w-auto" />
                        </a>
                    </div>
                </div>

                {/* Card Image Overlay (Desktop only) */}
                <div
                    className="absolute hidden xl:block z-20 pointer-events-none"
                    style={{
                        width: "282px",
                        height: "188px",
                        top: "21px",
                        left: "50%",
                        marginLeft: "-100px",
                    }}
                >
                    <Image src="/burracoAsset/card.svg" alt="Cards" fill className="object-contain" />
                </div>

                {/* Mobile/Tablet stacked layout */}
                <div className="xl:hidden w-full max-w-[1242px] px-4 sm:px-6 flex flex-col md:flex-row gap-6 sm:gap-8 items-stretch p-4 sm:p-6 rounded-xl border border-[#D59444]/10 bg-black/60 backdrop-blur-md">
                    <div className="flex-1 text-left flex flex-col justify-center">
                        <h3 className="font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#EFCC88] to-[#D59444]" style={{ fontFamily: "Transcend, sans-serif", fontSize: "16px", marginBottom: "10px", textTransform: "uppercase" }}>
                            {t("footer_about_title")}
                        </h3>
                        <p className="text-[#988E7E] font-light leading-relaxed text-[12px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                            {t("footer_about_desc")}
                        </p>
                    </div>

                    <div className="flex-1 text-left">
                        <h3 className="font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#EFCC88] to-[#D59444]" style={{ fontFamily: "Transcend, sans-serif", fontSize: "16px", marginBottom: "12px", textTransform: "uppercase" }}>
                            {t("footer_howtoplay_title")}
                        </h3>
                        <div className="flex flex-col gap-2 mb-4 text-[#988E7E] text-[11px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                            <div className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-[16px] h-[16px] rounded-full bg-radial-gradient(50% 50% at 50% 50%, #5A3006 0%, #2D1302 100%) border border-[#816F5B] text-[9px] font-bold text-[#E5BF78] flex items-center justify-center">1</span>
                                <span>{t("footer_howtoplay_step1")}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-[16px] h-[16px] rounded-full bg-gradient-to-b from-[#E5BF78] to-[#7E4D15] text-[9px] font-bold text-[#2D1302] flex items-center justify-center">2</span>
                                <span>{t("footer_howtoplay_step2")}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-[16px] h-[16px] rounded-full bg-gradient-to-b from-[#E5BF78] to-[#7E4D15] text-[9px] font-bold text-[#2D1302] flex items-center justify-center">3</span>
                                <span>{t("footer_howtoplay_step3")}</span>
                            </div>
                        </div>
                        <a href="/rules" className="inline-block hover:brightness-110 active:brightness-95 transition-all">
                            <img src={isArabic ? "/burracoAsset/view-full-rules-ar.svg" : "/burracoAsset/view-full-rules.svg"} alt={t("footer_view_rules")} className="h-[28px] w-auto" />
                        </a>
                    </div>
                </div>

                {/* ================= PART 2: OUR GAMES SECTION ================= */}
                <div className="mt-8 flex justify-center">
                    <img
                        src={isArabic ? "/burracoAsset/ourGames-ar.svg" : "/burracoAsset/ourGames.svg"}
                        alt="Our Games"
                        className="w-[200px] sm:w-[237px] h-auto object-contain pointer-events-none"
                    />
                </div>

                {/* Cards Container — now responsive flex */}
                <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center w-full max-w-[1091px]">
                    {games.map((game, idx) => (
                        <div
                            key={idx}
                            className="relative flex items-center overflow-hidden transition-all duration-300 group w-full sm:w-[347px] h-[135px]"
                        >
                            {/* Card Background */}
                            <img
                                src="/burracoAsset/ourgame-card-bg.svg"
                                alt="Card Background"
                                className="absolute inset-0 w-full h-full object-fill pointer-events-none transition-transform duration-300 group-hover:scale-[1.01]"
                            />

                            {/* Card Logo */}
                            <div
                                className="absolute pointer-events-none z-10"
                                style={{
                                    width: game.isThird ? "130px" : "120px",
                                    height: "120px",
                                    left: game.isThird ? "10px" : "16px",
                                    top: "7px"
                                }}
                            >
                                <img
                                    src={game.isThird ? "/burracoAsset/ourgame-logo-3.svg" : "/burracoAsset/logo.svg"}
                                    alt="logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Typography / Details Container */}
                            <div
                                className="absolute flex flex-col justify-between py-2 text-left z-20"
                                style={{
                                    left: '156px',
                                    right: '16px',
                                    top: '12px',
                                    bottom: '12px',
                                }}
                            >
                                <div>
                                    <h3
                                        className="font-semibold tracking-normal bg-clip-text text-transparent"
                                        style={{
                                            fontFamily: "Transcend, sans-serif",
                                            fontSize: "14px",
                                            lineHeight: "120%",
                                            marginBottom: "4px",
                                            background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {game.title}
                                    </h3>

                                    <p className="text-[#FFFFFF] text-[10px] leading-[135%] font-light line-clamp-2 h-[28px] opacity-80">
                                        {game.tagline}
                                    </p>
                                </div>

                                {/* LEARN MORE Button */}
                                <button
                                    className="active:scale-95 transition-transform duration-100 focus:outline-none hover:brightness-110 flex items-center justify-center relative font-semibold text-[#F1DF82] z-30"
                                    style={{
                                        width: '110px',
                                        height: '26px',
                                        backgroundImage: `url('/burracoAsset/buy-button-bg.svg')`,
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        fontSize: '9px',
                                        lineHeight: '100%',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    <span>{t("footer_learn_more")}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}