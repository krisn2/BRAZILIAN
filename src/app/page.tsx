"use client";

import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FeatureRow from "@/components/sections/Features";
import PageFooterSection from "@/components/sections/PageFooterSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, isArabic } = useLanguage();

  return (
    <div className="min-h-screen bg-[#060503] flex flex-col justify-between overflow-x-hidden">
      {/* Top Section */}
      <div>
        <Navbar />

        {/* Banner Section Container — responsive with proper mobile height */}
        <div className="relative w-full flex justify-center">
          <div
            className="relative select-none w-full max-w-[1535px] min-h-[220px] sm:min-h-[260px] md:min-h-0"
            style={{
              aspectRatio: "1534 / 359",
              marginTop: "1px",
            }}
          >
            {/* Background Banner Image */}
            <Image
              src="/burracoAsset/hero.svg"
              alt="Baloot Royal Experience Banner"
              fill
              priority
              className="object-cover object-right md:object-center pointer-events-none"
            />

            {/* ================= HERO TEXT & BADGES OVERLAY ================= */}
            <div
              className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-20"
              style={{ zIndex: 10 }}
            >
              <div className="max-w-[550px]">
                {/* Subheading text asset image */}
                <div className="w-full sm:w-[240px] md:w-[323px] h-auto mb-1">
                  <img
                    src={isArabic ? "/burracoAsset/The-royal-card-game-ar.svg" : "/burracoAsset/The-royal-card-game.svg"}
                    alt="The Royal Card Game"
                    className="hidden sm:block w-full h-auto object-contain object-left"
                  />
                  <h2
                    className={`sm:hidden font-bold ${isArabic ? 'text-base' : 'text-base uppercase'} tracking-wider`}
                    style={{
                      background: "linear-gradient(180deg, #EFCC88 0%, #D59444 48%, #B86B1D 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,1)) drop-shadow(0px 0px 2px rgba(0,0,0,1))"
                    }}
                  >
                    {t("hero_royal_alt")}
                  </h2>
                </div>

                {/* Main Heading text asset image */}
                <div className="w-full sm:w-[340px] md:w-[492px] h-auto mb-2 sm:mb-3">
                  <img
                    src={isArabic ? "/burracoAsset/experience-baloot-ar.svg" : "/burracoAsset/experience-baloot.svg"}
                    alt="Experience Baloot"
                    className="hidden sm:block w-full h-auto object-contain object-left"
                  />
                  <h1
                    className={`sm:hidden font-black ${isArabic ? 'text-2xl leading-tight' : 'text-2xl uppercase leading-tight'}`}
                    style={{
                      background: "linear-gradient(180deg, #EFCC88 0%, #D59444 48%, #B86B1D 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,1)) drop-shadow(0px 0px 2px rgba(0,0,0,1))"
                    }}
                  >
                    {t("hero_experience_alt")}
                  </h1>
                </div>

                {/* Description Body Text */}
                <p
                  className="text-[#A49A8A] font-normal leading-relaxed text-xs sm:text-sm tracking-wide mb-4 sm:mb-6 max-w-[460px] hidden sm:block"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: '#fff',
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)"
                  }}
                >
                  {t("hero_description")}
                </p>

                {/* Store Badges Action Row */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <a href="#" className="block hover:brightness-110">
                    <img
                      src="/burracoAsset/playstore.png"
                      alt="Google Play"
                      className="w-[90px] sm:w-[120px] md:w-[140px] h-auto"
                    />
                  </a>

                  <a href="#" className="block hover:brightness-110">
                    <img
                      src="/burracoAsset/apple.png"
                      alt="App Store"
                      className="w-[72px] sm:w-[95px] md:w-[110px] h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <FeatureRow />
      <PageFooterSection />
      {/* Bottom Section */}
      <Footer />
    </div>
  );
}