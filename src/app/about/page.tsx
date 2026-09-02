"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
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
              {t("about_title")}
            </h1>

            {/* Golden Line Divider */}
            <div
              className="bg-center bg-no-repeat bg-contain w-full max-w-[338px] h-5 mb-11"
              style={{
                backgroundImage: `url('/burracoAsset/gloden-line.svg')`
              }}
            />

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative w-full max-w-4xl p-8 md:p-16 flex flex-col items-center justify-center bg-[#0c0a06]/60 backdrop-blur-sm border border-amber-950/40 rounded-2xl shadow-2xl">

              {/* Inner Text Block */}
              <div className="max-w-3xl text-center flex flex-col gap-6 text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light px-4 z-10">

                {/* Intro */}
                <h2 className="text-lg md:text-xl font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                  {t("about_subtitle")}
                </h2>
                <p>
                  {t("about_intro_1")}
                </p>
                <p>
                  {t("about_intro_2")}
                </p>

                {/* Our Story */}
                <h3 className="text-base md:text-lg font-medium text-[#D59444] mt-6 uppercase tracking-wider font-serif">
                  {t("about_story_title")}
                </h3>
                <p>
                  {t("about_story_1")}
                </p>
                <p>
                  {t("about_story_2")}
                </p>

                {/* Strategy and Values */}
                <h3 className="text-base md:text-lg font-medium text-[#D59444] mt-6 uppercase tracking-wider font-serif">
                  {t("about_spirit_title")}
                </h3>
                <p>
                  {t("about_spirit_1")}
                </p>
                <p>
                  {t("about_spirit_2")}
                </p>

                {/* Outro Tagline */}
                <p className="text-[#fcd34d] font-semibold tracking-widest mt-8 uppercase text-base md:text-lg balance">
                  {t("about_outro")}
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