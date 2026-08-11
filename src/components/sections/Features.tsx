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
            leftPos: "103px",
            width: "220px",
        },
        {
            title: t("feature_safe_title"),
            desc: t("feature_safe_desc"),
            imgSrc: "/burracoAsset/safe&secure.png",
            leftPos: "460px",
            width: "215px",
        },
        {
            title: t("feature_rewards_title"),
            desc: t("feature_rewards_desc"),
            imgSrc: "/burracoAsset/gift.png",
            leftPos: "803px",
            width: "215px",
        },
        {
            title: t("feature_fairplay_title"),
            desc: t("feature_fairplay_desc"),
            imgSrc: "/burracoAsset/fair-play.png",
            leftPos: "1153px",
            width: "210px",
        },
    ];

    return (
        <div className="w-full flex justify-center bg-[#060503]">
            {/* Main structural strip container scaled to 1535px x 126px */}
            <div
                className="relative overflow-hidden select-none border-t border-b"
                style={{
                    width: "1535px",
                    height: "126px",
                    borderColor: "rgba(255, 255, 255, 0.08)",
                }}
            >
                {/* Textured background row panel */}
                <Image
                    src="/burracoAsset/feature-bg.png"
                    alt="Feature Background"
                    fill
                    priority
                    className="object-cover object-center pointer-events-none"
                />

                {/* Dynamic Block Rendering */}
                {features.map((feat, i) => (
                    <div
                        key={i}
                        className="absolute flex items-center"
                        style={{
                            left: feat.leftPos,
                            top: "23px",
                            height: "80px",
                        }}
                    >
                        {/* Target Feature Icon Frame */}
                        <div
                            className="relative flex-shrink-0"
                            style={{
                                width: "80px",
                                height: "80px",
                            }}
                        >
                            <img
                                src={feat.imgSrc}
                                alt={feat.title}
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </div>

                        {/* Typography Block Wrapper */}
                        <div
                            className="flex flex-col justify-center ml-[16px]"
                            style={{ width: feat.width }}
                        >
                            <h3
                                className="font-medium tracking-normal uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#EFCC88] to-[#B86B1D]"
                                style={{
                                    fontFamily: "Transcend, sans-serif",
                                    fontSize: "20px",
                                    lineHeight: "100%",
                                    height: "24px",
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "4px",
                                }}
                            >
                                {feat.title}
                            </h3>
                            <p
                                className="text-[#988E7E]"
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "11px",
                                    lineHeight: "135%",
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
    );
}