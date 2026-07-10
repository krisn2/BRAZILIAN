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
                fontSize: '24px',
                lineHeight: '27px',
                marginBottom: '20px',
                background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              About Us
            </h1>

            {/* Golden Line Divider */}
            <div
              className="bg-center bg-no-repeat bg-contain w-full max-w-[338px] h-5 mb-11"
              style={{
                backgroundImage: `url('/burracoAsset/gloden-line.svg')`
              }}
            />

            {/* --- CONTENT CONTAINER (CLEAN MODERN LAYOUT) --- */}
            <div className="relative w-full max-w-4xl p-8 md:p-16 flex flex-col items-center justify-center bg-[#0c0a06]/60 backdrop-blur-sm border border-amber-950/40 rounded-2xl shadow-2xl">

              {/* Inner Text Block styled to present the Diwanyeh copy beautifully */}
              <div className="max-w-3xl text-center flex flex-col gap-6 text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light px-4 z-10">

                {/* Intro */}
                <h2 className="text-lg md:text-xl font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                  Where the Royal Card Game Comes to Life
                </h2>
                <p>
                  Welcome to Diwanyeh—your home for the most authentic and exciting baloot card game experience online. We built Diwanyeh for one simple reason: to bring the timeless joy of baloot game nights to players everywhere, anytime, on any device.
                </p>
                <p>
                  If you grew up gathered around a table with family and friends, cards in hand, laughter in the air, and the thrill of outsmarting your opponents—you already know why baloot holds such a special place in our hearts. Diwanyeh was created to capture that same feeling and turn it into a card game you can enjoy wherever you are, with players from around the world.
                </p>

                {/* Our Story */}
                <h3 className="text-base md:text-lg font-medium text-[#D59444] mt-6 uppercase tracking-wider font-serif">
                  Our Story
                </h3>
                <p>
                  Diwanyeh started with a simple idea: baloot deserves a home that treats it with the respect and excitement it's always had at the diwaniya. We noticed that while baloot is beloved by millions, there weren't many places that truly captured its spirit — the strategy, the partnership, the friendly rivalry, and the pure fun of the game.
                </p>
                <p>
                  So we set out to build something better. A platform designed by people who genuinely love the baloot card game, for people who feel the same way. Every detail of Diwanyeh — from the smooth gameplay to the polished design — was crafted to honor the tradition while making it accessible to a new generation of players.
                </p>

                {/* Strategy and Values */}
                <h3 className="text-base md:text-lg font-medium text-[#D59444] mt-6 uppercase tracking-wider font-serif">
                  Experience the True Spirit of Baloot
                </h3>
                <p>
                  The beauty of the baloot card game lies in its combination of strategy, teamwork, and excitement. Every round brings new challenges, requiring players to think carefully, plan their moves, and work together with their partners.
                </p>
                <p>
                  Whether you want to challenge your friends, improve your skills, or simply enjoy a relaxing game session, Diwanyeh welcomes you to experience the excitement of the baloot card game in a fresh and modern way.
                </p>

                {/* Outro Tagline */}
                <p className="text-[#fcd34d] font-semibold tracking-widest mt-8 uppercase text-base md:text-lg balance">
                  Play, compete, and enjoy the world of Baloot with Diwanyeh <br className="hidden md:inline" />
                  — where tradition meets innovation.
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