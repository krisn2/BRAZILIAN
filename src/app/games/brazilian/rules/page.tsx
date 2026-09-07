"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function BrazilianRulesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#060503] flex flex-col justify-between overflow-x-hidden">
      <div>
        <Navbar />

        <main className="text-white pt-[143px] pb-16 px-4 font-sans select-none flex flex-col items-center">
          <div className="max-w-[1165px] mx-auto flex flex-col items-center w-full">
            
            {/* --- HEADER SECTION --- */}
            <h1 
              className="font-serif tracking-[0.2em] font-bold uppercase text-center drop-shadow-md flex items-center justify-center px-4 text-xl sm:text-2xl"
              style={{
                marginBottom: '20px',
                background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {t("brazilian_rules_title")}
            </h1>
            
            {/* Golden Line Divider */}
            <div 
              className="bg-center bg-no-repeat bg-contain w-[250px] sm:w-[338px] h-[14px] sm:h-[18px] mb-8 sm:mb-[46px]"
              style={{ backgroundImage: `url('/burracoAsset/gloden-line.svg')` }}
            />

            {/* --- CONTENT CONTAINER WITH DECORATIVE BACKGROUND --- */}
            <div 
              className="relative w-full max-w-4xl md:max-w-[1165px] p-8 md:p-16 flex flex-col items-center justify-center bg-[#0c0a06]/60 backdrop-blur-sm border border-amber-950/40 rounded-2xl shadow-2xl md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:bg-[url('/burracoAsset/box.svg')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat md:min-h-[654px]"
            >
              {/* Inner Text Block styled exactly as the image layout */}
              <div className="max-w-3xl text-center flex flex-col gap-4 text-gray-200 text-sm md:text-base tracking-wide leading-relaxed font-light px-4 z-10">
                
                <p>
                  {t("brazilian_rules_p1")}
                </p>

                <p>
                  {t("brazilian_rules_p2")}
                </p>

                <p>
                  {t("brazilian_rules_p3")}
                </p>

                <p>
                  {t("brazilian_rules_p4")}
                </p>

                <p>
                  {t("brazilian_rules_p5")}
                </p>

                <p className="text-[#fcd34d] font-medium tracking-widest mt-2 uppercase">
                  {t("brazilian_rules_p6")}
                </p>

              </div>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

