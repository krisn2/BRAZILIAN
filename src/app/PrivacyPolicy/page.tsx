"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#060503] flex flex-col justify-between overflow-x-hidden">
            <div>
                <Navbar />

                <main className="text-white pt-[143px] pb-16 px-4 font-sans select-none flex flex-col items-center">
                    <div className="max-w-[1165px] mx-auto flex flex-col items-center w-full">

                        {/* --- HEADER SECTION --- */}
                        <h1
                            className="font-serif tracking-[0.15em] font-bold uppercase text-center drop-shadow-md block text-2xl md:text-3xl bg-gradient-to-b from-[#EFCC88] via-[#D59444] to-[#B86B1D] bg-clip-text text-transparent"
                            style={{
                                marginBottom: '20px',
                            }}
                        >
                            Privacy Policy
                        </h1>

                        {/* Golden Line Divider */}
                        <div
                            className="bg-center bg-no-repeat bg-contain w-full max-w-[338px] h-5 mb-6"
                            style={{
                                backgroundImage: `url('/burracoAsset/gloden-line.svg')`
                            }}
                        />

                        {/* Last Updated Tag */}
                        <p className="text-xs font-mono tracking-widest text-[#D59444] uppercase mb-8">
                            Last Updated: July 2026
                        </p>

                        {/* --- CONTENT CONTAINER --- */}
                        <div className="relative w-full max-w-4xl p-8 md:p-12 flex flex-col bg-[#0c0a06]/60 backdrop-blur-sm border border-amber-950/40 rounded-2xl shadow-2xl">

                            {/* Intro Block */}
                            <div className="text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light mb-8 pb-6 border-b border-amber-950/30">
                                <p className="mb-4">
                                    At <strong>Diwanyeh</strong>, we know that trust is at the heart of every great game — and every great relationship with our players.
                                </p>
                                <p>
                                    This Privacy Policy explains what information we collect when you use our website, mobile app, and related services (together, the "Service"), how we use it, and the choices you have. By using Diwanyeh, you agree to the practices described below.
                                </p>
                            </div>

                            {/* Policy Sections */}
                            <div className="flex flex-col gap-8 text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light text-left">

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-3">
                                        1. Information We Collect
                                    </h2>

                                    <div className="flex flex-col gap-4 pl-1">
                                        <div>
                                            <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">Information You Provide</h3>
                                            <ul className="list-disc list-inside pl-2 flex flex-col gap-1 text-gray-400">
                                                <li>Account details such as your name, username, email address, and password when you register.</li>
                                                <li>Payment information when you make an in-app purchase (processed securely through trusted third-party payment providers — we do not store your full card details ourselves).</li>
                                                <li>Any information you share when contacting our support team, such as messages, screenshots, or feedback.</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">Information Collected Automatically</h3>
                                            <ul className="list-disc list-inside pl-2 flex flex-col gap-1 text-gray-400">
                                                <li>Device information (device type, operating system, unique device identifiers).</li>
                                                <li>Log data such as IP address, app usage patterns, session duration, and crash reports.</li>
                                                <li>Gameplay data, including match history, scores, in-game purchases, and achievements.</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">Information from Third Parties</h3>
                                            <p>
                                                If you log in using a third-party account (such as Google, Apple, or Facebook), we may receive basic profile information from that provider, in accordance with your privacy settings on that platform.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        2. How We Use Your Information
                                    </h2>
                                    <p className="mb-3">We use the information we collect to operate, secure, and personalize our matches. This includes goals to:</p>
                                    <ul className="list-disc list-inside pl-2 flex flex-col gap-1 text-gray-400">
                                        <li>Create and manage your Diwanyeh account profile.</li>
                                        <li>Operate, maintain, and improve the baloot card game mechanics and overall Service systems.</li>
                                        <li>Process in-app purchases and manage virtual currency balances or match rewards.</li>
                                        <li>Personalize your experience, including dynamic matchmaking pools and content recommendations.</li>
                                        <li>Detect and prevent cheating, hacks, fraud, and active system abuse to keep gameplay fair.</li>
                                        <li>Communicate critical platform updates, promotional events, or structural support requests.</li>
                                        <li>Analyze usage trends to continuously optimize app latency, frame rates, and interface design.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        3. Cookies & Similar Technologies
                                    </h2>
                                    <p>
                                        Diwanyeh may use cookies, local storage solutions, and tracking variants to save game configurations, preserve automated login setups, and study visitor flow profiles. You can switch off browser cookies natively, though disabling them can affect regular page behavior.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        4. Sharing Your Information
                                    </h2>
                                    <p className="mb-3">We absolutely do not sell user data profiles. Information processing flows are shared transparently with:</p>
                                    <ul className="list-disc list-inside pl-2 flex flex-col gap-1 text-gray-400">
                                        <li><strong>Service Providers:</strong> Cloud hosting partners, database infrastructures, and payment gateways operating under structural data agreements.</li>
                                        <li><strong>Legal Mandates:</strong> Authorities executing legitimate legal orders, or when operations are critical to defending structural player safety profiles.</li>
                                        <li><strong>Social Ecosystems:</strong> Other active lobby players can see standard profile items like usernames, ranking positions, and leaderboard records during matches. Private account details remain safe.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        5. Data Security
                                    </h2>
                                    <p>
                                        We deploy specialized physical and modern cryptographic safeguards to eliminate vectors of unauthorized database exposure or structural manipulation. However, no digital transport infrastructure is completely secure, and we advise players to protect operational accounts using custom, strong security passwords.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        6. Data Retention & Account Deletion
                                    </h2>
                                    <p>
                                        Data points stay active as long as accounts remain in active status. If you initiate account deletion sequences, your personal account details are immediately purged or entirely scrubbed into anonymous statistics, unless active regulation forces a longer storage cycle.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        7. Your Choices & Regional Rights
                                    </h2>
                                    <p>
                                        Depending on your location, you may hold complete rights to access, inspect, modify, or permanently drop database records held by us. If you wish to pull data packages out in portable structures, or object to specific processing channels, you can seamlessly open tickets through our support interfaces.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        8. Children's Privacy
                                    </h2>
                                    <p>
                                        The Diwanyeh ecosystem is designed strictly for adults aged 18 years and older. We block intentionally registering profiles belonging to minors, and will rapidly drop all database information if underage profile registration instances are discovered.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        9. International Data Transfers
                                    </h2>
                                    <p>
                                        Because Diwanyeh scales matches across vast multi-regional node arrays, files can move outside local regional limits into global secure server hubs. We execute standard safety measures ensuring files get absolute protection wherever computing stacks handle them.
                                    </p>
                                </section>

                                <section className="pt-4 border-t border-amber-950/30">
                                    <h2 className="text-base md:text-lg font-medium text-[#D59444] uppercase tracking-wider font-serif mb-2">
                                        10. Contact Us
                                    </h2>
                                    <p>
                                        If you have questions, privacy concerns, or structural security remarks concerning data flow practices, open clear tickets natively via the Help interface of the app or reach out via our web channels.
                                    </p>
                                </section>

                            </div>
                        </div>

                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}