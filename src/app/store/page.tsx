"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Dynamic item data matching mockups
const STORE_ITEMS = [
    { id: 1, amount: '1,000', label: '1K', price: 'SAR0.99' },
    { id: 2, amount: '2,000', label: '2K', price: 'SAR1.99' },
    { id: 3, amount: '5,000', label: '5K', price: 'SAR4.99' },
    { id: 4, amount: '10,000', label: '10K', price: 'SAR9.99' },
    { id: 5, amount: '20,000', label: '20K', price: 'SAR18.99' },
    { id: 6, amount: '50,000', label: '50K', price: 'SAR44.99' },
    { id: 7, amount: '100,000', label: '100K', price: 'SAR84.99' },
    { id: 8, amount: '250,000', label: '250K', price: 'SAR199.99' },
];

export default function StorePage() {
    const handleBuy = (item: typeof STORE_ITEMS[0]) => {
        console.log(`Initiating purchase for ${item.amount} coins at ${item.price}`);
    };

    return (
        <div className="min-h-screen bg-[#060503] flex flex-col justify-between overflow-x-hidden">
            <div>
                <Navbar />

                <main className="text-white pt-[143px] pb-16 px-4 font-sans select-none flex flex-col items-center">
                    <div className="max-w-[1165px] mx-auto flex flex-col items-center w-full">
                        {/* Header Title */}
                        <h1
                            className="font-serif tracking-widest font-bold uppercase text-center flex items-center justify-center"
                            style={{
                                width: '153px', // matches store heading or slightly wider if needed, 153px is good
                                height: '27px',
                                fontSize: '24px',
                                lineHeight: '27px',
                                marginBottom: '20px',
                                background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            Store
                        </h1>

                        {/* Golden Decorative Line Divider */}
                        <div
                            className="bg-center bg-no-repeat bg-contain"
                            style={{
                                backgroundImage: `url('/burracoAsset/gloden-line.svg')`,
                                width: '338px',
                                height: '18px',
                                marginBottom: '46px'
                            }}
                        />

                        <p className="text-gray-400 text-sm md:text-base tracking-wide mb-12">
                            Buy coins and enjoy the game more!
                        </p>

                        {/* Store Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 w-full max-w-5xl justify-items-center px-4">
                            {STORE_ITEMS.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative flex flex-col items-center pt-8 pb-6 px-4 transition-transform duration-300 hover:scale-[1.03]"
                                    style={{
                                        width: '240px',
                                        height: '280px',
                                        backgroundImage: `url('/burracoAsset/coin-box.svg')`,
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    {/* Amount of Coin */}
                                    <div className="text-center">
                                        <span className="text-2xl font-serif font-black text-[#FFEFA6] tracking-wide leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                            {item.amount}
                                        </span>
                                    </div>

                                    {/* Below coins-name svg */}
                                    <div className="mt-1 h-[14px] flex items-center justify-center">
                                        <img
                                            src="/burracoAsset/Coins-name.svg"
                                            alt="Coins"
                                            className="h-full object-contain"
                                        />
                                    </div>

                                    {/* Coins illustration container (coins.svg) with short form label placed on the coin token */}
                                    <div className="relative w-[180px] h-[100px] flex items-center justify-center mt-3 select-none">
                                        <img
                                            src="/burracoAsset/coins.svg"
                                            alt="Coins stack"
                                            className="w-full h-full object-contain pointer-events-none"
                                        />
                                        {/* Overlay positioned exactly over the right-hand coin token */}
                                        <div className="absolute right-[10px] top-[15px] w-[70px] h-[70px] flex flex-col items-center justify-center z-10">
                                            <span className="text-lg font-serif font-black text-[#FFEFA6] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] tracking-tight leading-none">
                                                {item.label}
                                            </span>
                                            <img
                                                src="/burracoAsset/golden-ace.png"
                                                alt="Golden Ace"
                                                className="w-5 h-5 mt-1 object-contain pointer-events-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]"
                                            />
                                        </div>
                                    </div>

                                    {/* Below coins svg is coins-price-b svg which contain price */}
                                    <div
                                        className="w-[120px] h-[36px] flex items-center justify-center relative mt-3 select-none"
                                        style={{
                                            backgroundImage: `url('/burracoAsset/coin-price-b.svg')`,
                                            backgroundSize: '100% 100%',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        <span className="text-[#F1DF82] font-semibold text-xs tracking-wider">
                                            {item.price}
                                        </span>
                                    </div>

                                    {/* Below that buy-button-bg svg containing "BUY NOW" */}
                                    <button
                                        onClick={() => handleBuy(item)}
                                        className="w-[160px] h-[38px] flex items-center justify-center relative mt-2 active:scale-95 transition-transform duration-100 focus:outline-none"
                                        style={{
                                            backgroundImage: `url('/burracoAsset/buy-button-bg.svg')`,
                                            backgroundSize: '100% 100%',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        <span className="text-white text-xs font-bold tracking-widest uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                            Buy Now
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}