"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function RulesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#060503] flex flex-col justify-between overflow-x-hidden">
      <div>
        <Navbar />

        <main className="text-white pt-[143px] pb-16 px-4 font-sans select-none flex flex-col items-center">
          <div className="max-w-[1165px] mx-auto flex flex-col items-center w-full">
            
            {/* --- HEADER SECTION --- */}
            <h1 
              className="font-serif tracking-[0.2em] font-bold uppercase text-center drop-shadow-md flex items-center justify-center min-w-[153px] px-4"
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
              {t("rules_title")}
            </h1>
            
            {/* Golden Line Divider */}
            <div 
              className="bg-center bg-no-repeat bg-contain"
              style={{ 
                backgroundImage: `url('/burracoAsset/gloden-line.svg')`,
                width: '338px',
                height: '18px',
                marginBottom: '46px'
              }}
            />

            {/* --- CONTENT CONTAINER WITH DECORATIVE BACKGROUND --- */}
            <div 
              className="relative w-full p-8 md:p-16 flex flex-col items-center justify-center"
              style={{ 
                backgroundImage: `url('/burracoAsset/box.svg')`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                maxWidth: '1165px',
                minHeight: '654px'
              }}
            >
              {/* Inner Text Block */}
              <div className="max-w-3xl text-center flex flex-col gap-4 text-gray-200 text-sm md:text-base tracking-wide leading-relaxed font-light px-4 z-10">
                
                <p>
                  {t("rules_p1")}
                </p>

                <p>
                  {t("rules_p2")}
                </p>

                <p>
                  {t("rules_p3")}
                </p>

                <p>
                  {t("rules_p4")}
                </p>

                <p>
                  {t("rules_p5")}
                </p>

                <p className="text-[#fcd34d] font-medium tracking-widest mt-2 uppercase">
                  {t("rules_outro")}
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

