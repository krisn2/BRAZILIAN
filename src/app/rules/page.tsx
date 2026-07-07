"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RulesPage() {
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
                width: '153px',
                height: '27px',
                fontSize: '24px', // fits height and style nicely
                lineHeight: '27px',
                marginBottom: '20px', // 190px (golden line top) - 143px (heading top) - 27px (heading height) = 20px
                background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              RULES
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
              <div className="max-w-3xl text-center flex flex-col gap-4 text-gray-200 text-sm md:text-base tracking-wide leading-relaxed font-light px-4 z-10">
                
                <p>
                  Baloot is played with a standard 32-card deck (7, 8, 9, 10, J, Q, K, A in all four suits). The game is typically played between two teams, with partners sitting opposite each other. The deck is shuffled and each player is dealt 8 cards. The remaining cards form the “Boot” (closed deck) placed in the center.
                </p>

                <p>
                  The top card of the Boot is turned up to determine the trump suit. Players must follow the suit led in a trick. Trump can be used to beat other suits.
                </p>

                <p>
                  The highest card of the leading suit wins the trick, unless a higher Trump is played. Aces are high in rank, followed by Kings, Queens, Jacks, then 10 down to 7.
                </p>

                <p>
                  Communication between partners is not allowed during the game. Each game consists of multiple rounds, and points are awarded based on the tricks won.
                </p>

                <p>
                  The team that reaches the target score first is declared the winner.
                </p>

                <p className="text-[#fcd34d] font-medium tracking-widest mt-2 uppercase">
                  Play fair, be respectful, and enjoy the game!
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
