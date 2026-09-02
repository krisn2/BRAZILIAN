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

                <main className="text-white pt-[100px] sm:pt-[143px] pb-16 px-4 font-sans select-none flex flex-col items-center">
                    <div className="max-w-[1165px] mx-auto flex flex-col items-center w-full">
                        {/* Header Title */}
                        <h1
                            className="font-serif tracking-widest font-bold uppercase text-center text-xl sm:text-2xl mb-5"
                            style={{
                                background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            {t("games_title")}
                        </h1>

                        {/* Golden Decorative Line Divider */}
                        <div
                            className="bg-center bg-no-repeat bg-contain w-[250px] sm:w-[338px] h-[14px] sm:h-[18px] mb-8 sm:mb-[46px]"
                            style={{ backgroundImage: `url('/burracoAsset/gloden-line.svg')` }}
                        />

                        <p className="text-gray-400 text-sm md:text-base tracking-wide mb-8 sm:mb-12 text-center">
                            {t("games_subtitle")}
                        </p>

                        {/* Games Cards Grid Container — now responsive */}
                        <div className="flex flex-col xl:flex-row gap-8 sm:gap-12 w-full justify-center items-center px-0 sm:px-4">

                            {/* Card 1: Brazilian */}
                            <div
                                className="relative transition-transform duration-300 hover:scale-[1.015] w-full max-w-[500px]"
                                style={{
                                    aspectRatio: '500 / 646',
                                    backgroundImage: `url('/burracoAsset/game-card-bg-1.svg')`,
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                {/* Brazilian Logo (Gold Crest) */}
                                <div className="absolute flex items-center justify-center pointer-events-none" style={{ width: '74.4%', height: '57.6%', left: '12.8%', top: '3.9%' }}>
                                    <img src="/burracoAsset/logo.svg" alt="Brazilian Crest" className="w-full h-full object-contain" />
                                </div>

                                {/* Brazilian Name Logo */}
                                <div className="absolute flex items-center justify-center pointer-events-none" style={{ width: '71.2%', height: '11.3%', left: '14.4%', top: '60%' }}>
                                    <img src={isArabic ? "/burracoAsset/BRAZILIAN-name-ar.svg" : "/burracoAsset/BRAZILIAN-name.svg"} alt="BRAZILIAN" className="w-full h-full object-contain" />
                                </div>

                                {/* Golden Divider Line */}
                                <div className="absolute bg-center bg-no-repeat bg-contain pointer-events-none" style={{ width: '67.6%', height: '2.8%', left: '16.2%', top: '70.4%', backgroundImage: `url('/burracoAsset/gloden-line.svg')` }} />

                                {/* Description Text Area */}
                                <div className="absolute flex items-center justify-center text-center px-4 sm:px-6" style={{ width: '80%', left: '10%', top: '75%', height: '7.7%' }}>
                                    <p className="text-[#A49A8A] text-xs sm:text-sm font-medium leading-relaxed max-w-[320px]">
                                        {t("games_brazilian_desc")}
                                    </p>
                                </div>

                                {/* Buy / Rules Button */}
                                <Link
                                    href="/games/brazilian/rules"
                                    className="absolute active:scale-95 transition-transform duration-100 focus:outline-none hover:brightness-110 flex items-center justify-center"
                                    style={{
                                        width: '52%',
                                        height: '9.5%',
                                        left: '24%',
                                        top: '85.1%',
                                        backgroundImage: `url('/burracoAsset/buy-button-bg.svg')`,
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    <span className="text-[#F1DF82] text-xs sm:text-sm font-bold tracking-widest uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mr-6">
                                        {t("games_rule_button")}
                                    </span>
                                    <img
                                        src="/burracoAsset/rules-log.svg"
                                        alt="Rules"
                                        className="absolute object-contain w-[18px] sm:w-[26.5px] h-auto right-[15%] top-1/2 -translate-y-1/2"
                                    />
                                </Link>
                            </div>

                            {/* Card 2: Baloot */}
                            <div
                                className="relative transition-transform duration-300 hover:scale-[1.015] w-full max-w-[500px]"
                                style={{
                                    aspectRatio: '500 / 646',
                                    backgroundImage: `url('/burracoAsset/game-card-bg-2.svg')`,
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                {/* Baloot Logo */}
                                <div className="absolute flex items-center justify-center pointer-events-none" style={{ width: '70.8%', height: '54.8%', left: '14.6%', top: '5.3%' }}>
                                    <img src="/burracoAsset/baloot-logo.svg" alt="Baloot Crest" className="w-full h-full object-contain" />
                                </div>

                                {/* Baloot Name Logo */}
                                <div className="absolute flex items-center justify-center pointer-events-none" style={{ width: '47.8%', height: '11.3%', left: '26.4%', top: '60%' }}>
                                    <img src={isArabic ? "/burracoAsset/baloot-name-ar.svg" : "/burracoAsset/baloot-name.svg"} alt="BALOOT" className="w-full h-full object-contain" />
                                </div>

                                {/* Card Game Logo */}
                                <div className="absolute flex items-center justify-center pointer-events-none" style={{ width: '28%', height: '4.5%', left: '36%', top: '69.9%' }}>
                                    <img src={isArabic ? "/burracoAsset/Card-Game-ar.svg" : "/burracoAsset/Card-Game.svg"} alt="CARD GAME" className="w-full h-full object-contain" />
                                </div>

                                {/* Description Text Area */}
                                <div className="absolute flex items-center justify-center text-center px-4 sm:px-6" style={{ width: '80%', left: '10%', top: '75%', height: '7.7%' }}>
                                    <p className="text-[#A49A8A] text-xs sm:text-sm font-medium leading-relaxed max-w-[320px]">
                                        {t("games_baloot_desc")}
                                    </p>
                                </div>

                                {/* Buy / Rules Button */}
                                <Link
                                    href="/games/baloot/rules"
                                    className="absolute active:scale-95 transition-transform duration-100 focus:outline-none hover:brightness-110 flex items-center justify-center"
                                    style={{
                                        width: '52%',
                                        height: '9.5%',
                                        left: '24%',
                                        top: '85.1%',
                                        backgroundImage: `url('/burracoAsset/buy-button-bg.svg')`,
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    <span className="text-[#F1DF82] text-xs sm:text-sm font-bold tracking-widest uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mr-6">
                                        {t("games_rule_button")}
                                    </span>
                                    <img
                                        src="/burracoAsset/rules-log.svg"
                                        alt="Rules"
                                        className="absolute object-contain w-[18px] sm:w-[26.5px] h-auto right-[15%] top-1/2 -translate-y-1/2"
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