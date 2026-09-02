"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function FeatureRow() {
    const { t } = useLanguage();

    const features = [
        {
            title: t("feature_multiplayer_title"),
            desc: t("feature_multiplayer_desc"),
            imgSrc: "/burracoAsset/multiplayer-logo.png",
        },
        {
            title: t("feature_safe_title"),
            desc: t("feature_safe_desc"),
            imgSrc: "/burracoAsset/safe&secure.png",
        },
        {
            title: t("feature_rewards_title"),
            desc: t("feature_rewards_desc"),
            imgSrc: "/burracoAsset/gift.png",
        },
        {
            title: t("feature_fairplay_title"),
            desc: t("feature_fairplay_desc"),
            imgSrc: "/burracoAsset/fair-play.png",
        },
    ];

    return (
        <div className="w-full flex justify-center bg-[#060503]">
            {/* Main structural strip container — now responsive */}
            <div
                className="relative overflow-hidden select-none border-t border-b w-full max-w-[1535px]"
                style={{
                    borderColor: "rgba(255, 255, 255, 0.08)",
                }}
            >
                {/* Textured background row panel */}
                <div className="absolute inset-0">
                    <Image
                        src="/burracoAsset/feature-bg.png"
                        alt="Feature Background"
                        fill
                        priority
                        className="object-cover object-center pointer-events-none"
                    />
                </div>

                {/* Responsive feature items grid */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
                    {features.map((feat, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 sm:gap-4"
                        >
                            {/* Target Feature Icon Frame */}
                            <div className="relative flex-shrink-0 w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] lg:w-[80px] lg:h-[80px]">
                                <img
                                    src={feat.imgSrc}
                                    alt={feat.title}
                                    className="w-full h-full object-contain pointer-events-none"
                                />
                            </div>

                            {/* Typography Block Wrapper */}
                            <div className="flex flex-col justify-center min-w-0">
                                <h3
                                    className="font-medium tracking-normal uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#EFCC88] to-[#B86B1D] text-sm sm:text-base lg:text-lg leading-tight mb-1"
                                    style={{
                                        fontFamily: "Transcend, sans-serif",
                                    }}
                                >
                                    {feat.title}
                                </h3>
                                <p
                                    className="text-[#988E7E] text-[10px] sm:text-[11px] leading-[135%] line-clamp-2"
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 400,
                                        color: '#a3a3a3ff'
                                    }}
                                >
                                    {feat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}