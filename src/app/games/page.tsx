"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function GamesPage() {
    const { t, isArabic } = useLanguage();

    return (
        <div className="min-h-screen bg-[#060503] flex flex-col justify-between overflow-x-hidden">
            <div>
                <Navbar />

                <main className="text-white pt-[143px] pb-16 px-4 font-sans select-none flex flex-col items-center">
                    <div className="max-w-[1165px] mx-auto flex flex-col items-center w-full">
                        {/* Header Title */}
                        <h1 
                            className="font-serif tracking-widest font-bold uppercase text-center flex items-center justify-center min-w-[249px] px-4"
                            style={{
                                height: '27px',
                                fontSize: '24px',
                                lineHeight: '27px',
                                marginBottom: '20px',
                                background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            {t("games_title")}
                        </h1>

                        {/* Golden Decorative Line Divider */}
                        <div
                            className="bg-center bg-no-repeat bg-contain"
                            style={{ 
                                backgroundImage: `url('/burracoAsset/gloden-line.svg')`,
                                width: '338px',
                                height: '18px',
                                marginBottom: '46px'
                            }}
                        />

                        <p className="text-gray-400 text-sm md:text-base tracking-wide mb-12 text-center">
                            {t("games_subtitle")}
                        </p>

                        {/* Games Cards Grid Container */}
                        <div className="flex flex-col xl:flex-row gap-12 w-full justify-center items-center px-4">

                            {/* Card 1: Brazilian */}
                            <div
                                className="relative transition-transform duration-300 hover:scale-[1.015]"
                                style={{
                                    width: '500px',
                                    height: '646px',
                                    backgroundImage: `url('/burracoAsset/game-card-bg-1.svg')`,
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                {/* Brazilian Logo (Gold Crest) */}
                                <div
                                    className="absolute flex items-center justify-center pointer-events-none"
                                    style={{
                                        width: '372px',
                                        height: '372px',
                                        left: '64px',
                                        top: '25px',
                                    }}
                                >
                                    <img
                                        src="/burracoAsset/logo.svg"
                                        alt="Brazilian Crest"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Brazilian Name Logo - English vs Arabic SVG */}
                                <div
                                    className="absolute flex items-center justify-center pointer-events-none"
                                    style={{
                                        width: '356px',
                                        height: '73px',
                                        left: '72px',
                                        top: '388px',
                                    }}
                                >
                                    <img
                                        src={isArabic ? "/burracoAsset/BRAZILIAN-name-ar.svg" : "/burracoAsset/BRAZILIAN-name.svg"}
                                        alt="BRAZILIAN"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Golden Divider Line */}
                                <div
                                    className="absolute bg-center bg-no-repeat bg-contain pointer-events-none"
                                    style={{
                                        width: '338px',
                                        height: '18px',
                                        left: '81px',
                                        top: '455px',
                                        backgroundImage: `url('/burracoAsset/gloden-line.svg')`
                                    }}
                                />

                                {/* Description Text Area */}
                                <div
                                    className="absolute flex items-center justify-center text-center px-6"
                                    style={{
                                        width: '400px',
                                        left: '50px',
                                        top: '485px',
                                        height: '50px',
                                    }}
                                >
                                    <p className="text-[#A49A8A] text-sm font-medium leading-relaxed max-w-[320px]">
                                        {t("games_brazilian_desc")}
                                    </p>
                                </div>

                                {/* Buy / Rules Button */}
                                <Link
                                    href="/games/brazilian/rules"
                                    className="absolute active:scale-95 transition-transform duration-100 focus:outline-none hover:brightness-110"
                                    style={{
                                        width: '260px',
                                        height: '61.576576232910156px',
                                        left: '120px',
                                        top: '550px',
                                        backgroundImage: `url('/burracoAsset/buy-button-bg.svg')`,
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    <span className="absolute left-[38%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-[#F1DF82] text-sm font-bold tracking-widest uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                        {t("games_rule_button")}
                                    </span>
                                    <img
                                        src="/burracoAsset/rules-log.svg"
                                        alt="Rules"
                                        className="absolute object-contain"
                                        style={{
                                            width: '26.5px',
                                            height: '27.837480545043945px',
                                            left: '197px',
                                            top: '17px',
                                        }}
                                    />
                                </Link>
                            </div>

                            {/* Card 2: Baloot */}
                            <div
                                className="relative transition-transform duration-300 hover:scale-[1.015]"
                                style={{
                                    width: '500px',
                                    height: '646px',
                                    backgroundImage: `url('/burracoAsset/game-card-bg-2.svg')`,
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                {/* Baloot Logo */}
                                <div
                                    className="absolute flex items-center justify-center pointer-events-none"
                                    style={{
                                        width: '354px',
                                        height: '354px',
                                        left: '73px',
                                        top: '34px',
                                    }}
                                >
                                    <img
                                        src="/burracoAsset/baloot-logo.svg"
                                        alt="Baloot Crest"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Baloot Name Logo */}
                                <div
                                    className="absolute flex items-center justify-center pointer-events-none"
                                    style={{
                                        width: '239px',
                                        height: '73px',
                                        left: '131.78px',
                                        top: '388px',
                                    }}
                                >
                                    <img
                                        src={isArabic ? "/burracoAsset/baloot-name-ar.svg" : "/burracoAsset/baloot-name.svg"}
                                        alt="BALOOT"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Card Game Logo */}
                                <div
                                    className="absolute flex items-center justify-center pointer-events-none"
                                    style={{
                                        width: '140px',
                                        height: '29px',
                                        left: '179.86px',
                                        top: '451.53px',
                                    }}
                                >
                                    <img
                                        src={isArabic ? "/burracoAsset/Card-Game-ar.svg" : "/burracoAsset/Card-Game.svg"}
                                        alt="CARD GAME"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Description Text Area */}
                                <div
                                    className="absolute flex items-center justify-center text-center px-6"
                                    style={{
                                        width: '400px',
                                        left: '50px',
                                        top: '485px',
                                        height: '50px',
                                    }}
                                >
                                    <p className="text-[#A49A8A] text-sm font-medium leading-relaxed max-w-[320px]">
                                        {t("games_baloot_desc")}
                                    </p>
                                </div>

                                {/* Buy / Rules Button */}
                                <Link
                                    href="/games/baloot/rules"
                                    className="absolute active:scale-95 transition-transform duration-100 focus:outline-none hover:brightness-110"
                                    style={{
                                        width: '260px',
                                        height: '61.576576232910156px',
                                        left: '120px',
                                        top: '550px',
                                        backgroundImage: `url('/burracoAsset/buy-button-bg.svg')`,
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    <span className="absolute left-[38%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-[#F1DF82] text-sm font-bold tracking-widest uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                        {t("games_rule_button")}
                                    </span>
                                    <img
                                        src="/burracoAsset/rules-log.svg"
                                        alt="Rules"
                                        className="absolute object-contain"
                                        style={{
                                            width: '26.5px',
                                            height: '27.837480545043945px',
                                            left: '197px',
                                            top: '17px',
                                        }}
                                    />
                                </Link>
                            </div>

                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}