"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#060503] flex flex-col justify-between overflow-x-hidden">
      <div>
        <Navbar />

        <main className="text-white pt-[143px] pb-16 px-4 font-sans select-none flex flex-col items-center">
          <div className="max-w-[1165px] mx-auto flex flex-col items-center w-full">
            
            {/* --- HEADER SECTION --- */}
            <h1 
              className="font-serif tracking-[0.2em] font-bold uppercase text-center drop-shadow-md flex items-center justify-center"
              style={{
                width: '249px',
                height: '27px',
                fontSize: '24px', // fits height and style nicely
                lineHeight: '27px',
                marginBottom: '20px', // 190px (golden line top) - 143px (heading top) - 27px (heading height) = 20px
                background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              About Us
            </h1>
            
            {/* Golden Line Divider */}
            <div 
              className="bg-center bg-no-repeat bg-contain"
              style={{ 
                backgroundImage: `url('/burracoAsset/gloden-line.svg')`,
                width: '338px',
                height: '18px',
                marginBottom: '46px' // 254px (box top) - 190px (golden line top) - 18px (golden line height) = 46px
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
              {/* Inner Text Block styled exactly as the image layout */}
              <div className="max-w-2xl text-center flex flex-col gap-6 text-gray-200 text-sm md:text-base tracking-wide leading-relaxed font-light px-4 z-10">
                
                <p>
                  Baloot Card Game is a digital destination for card game lovers around the world.
                </p>

                <p>
                  Our mission is to bring classic card games to life with a modern, exciting, and secure experience.
                </p>

                <p>
                  We are passionate about preserving tradition while delivering smooth gameplay and stunning design.
                </p>

                <p>
                  Whether you're here to compete, connect, or just enjoy a casual match, <br className="hidden md:inline" />
                  Baloot offers something for every player.
                </p>

                <p>
                  We value fair play, player privacy, and a community built on respect and fun.
                </p>

                <p>
                  Our team is dedicated to continuous improvement and delivering the best experience possible.
                </p>

                <p>
                  From thrilling matches to rewarding challenges, we aim to keep the excitement alive.
                </p>

                <p>
                  Thank you for being a part of the Baloot community.
                </p>

                <p className="text-[#fcd34d] font-medium tracking-widest mt-2 uppercase">
                  Play. Strategize. Win. This is more than a game – this is Baloot.
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
