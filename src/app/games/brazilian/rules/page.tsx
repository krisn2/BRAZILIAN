"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BrazilianRulesPage() {
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
                width: '350px', // slightly wider for game specific title
                height: '27px',
                fontSize: '24px',
                lineHeight: '27px',
                marginBottom: '20px',
                background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              BRAZILIAN RULES
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
              {/* Inner Text Block styled exactly as the image layout */}
              <div className="max-w-3xl text-center flex flex-col gap-4 text-gray-200 text-sm md:text-base tracking-wide leading-relaxed font-light px-4 z-10">
                
                <p>
                  Brazilian Burraco is a classic card game played with two standard decks of 52 cards including jokers. The game is typically played by 4 players in two partnerships. Each player is dealt 11 cards, and two separate piles of 11 cards each are set aside as "dead hands" (pozzetti).
                </p>

                <p>
                  The remaining cards form the draw pile. The top card is turned face up to start the discard pile. On their turn, a player can either draw the top card from the stock or pick up the entire discard pile.
                </p>

                <p>
                  The goal is to meld combinations of cards of the same suit in sequence (runs) or cards of the same rank (groups). A meld of seven or more cards is called a "Burraco". A clean Burraco has no wildcards, while a dirty Burraco contains a wildcard (joker or 2).
                </p>

                <p>
                  To go out (close the round), a team must have taken at least one dead hand and made at least one clean or dirty Burraco. Points are calculated based on the values of melded cards and Burraco bonuses, subtracting any remaining hand cards.
                </p>

                <p>
                  The first team to reach the target score (usually 2000 or 3000 points) wins the game.
                </p>

                <p className="text-[#fcd34d] font-medium tracking-widest mt-2 uppercase">
                  Play strategically, work with your partner, and aim for a clean Burraco!
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
