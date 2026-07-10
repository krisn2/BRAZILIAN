"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-[#060503] flex flex-col justify-between overflow-x-hidden">
            <div>
                <Navbar />

                <main className="text-white pt-[143px] pb-16 px-4 font-sans select-none flex flex-col items-center">
                    <div className="max-w-[1165px] mx-auto flex flex-col items-center w-full">

                        {/* --- HEADER SECTION --- */}
                        {/* --- HEADER SECTION --- */}
                        {/* --- HEADER SECTION --- */}
                        <h1
                            className="font-serif tracking-[0.15em] font-bold uppercase text-center drop-shadow-md block text-2xl md:text-3xl bg-gradient-to-b from-[#EFCC88] via-[#D59444] to-[#B86B1D] bg-clip-text text-transparent"
                            style={{
                                marginBottom: '20px',
                            }}
                        >
                            Terms & Conditions
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
                                    Welcome to <strong>Diwanyeh</strong>. These Terms and Conditions explain the rules and guidelines for using our website, mobile applications, and gaming services.
                                </p>
                                <p>
                                    By accessing or using Diwanyeh, you agree to follow and be bound by these terms. If you do not agree with any part of these Terms and Conditions, please discontinue using our services.
                                </p>
                            </div>

                            {/* Terms Sections */}
                            <div className="flex flex-col gap-8 text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light text-left">

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        1. About Diwanyeh
                                    </h2>
                                    <p>
                                        Diwanyeh is an online platform designed to bring the classic Baloot card game experience to players through a modern digital environment. We provide users with an enjoyable and interactive card game experience where players can connect, compete, and enjoy Baloot with friends and other players.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        2. Acceptance of Terms
                                    </h2>
                                    <p className="mb-2">
                                        By visiting or using the Diwanyeh website, application, or related services, you confirm that you have read, understood, and accepted these Terms and Conditions.
                                    </p>
                                    <p>
                                        We may update or modify these terms from time to time to improve our services, comply with regulations, or introduce new features. Continued use of Diwanyeh after updates means you accept the revised terms.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        3. User Account
                                    </h2>
                                    <p className="mb-3">To access certain features of Diwanyeh, users may need to create an account. Users are uniquely responsible for:</p>
                                    <ul className="list-disc list-inside pl-2 flex flex-col gap-1 text-gray-400">
                                        <li>Providing accurate account information.</li>
                                        <li>Keeping login details secure and maintaining account confidentiality.</li>
                                        <li>Ensuring that their account is not misused by others.</li>
                                    </ul>
                                    <p className="mt-3">
                                        Diwanyeh reserves the right to suspend or terminate accounts that violate these Terms or negatively affect other players' experiences.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        4. Fair Gameplay Policy
                                    </h2>
                                    <p className="mb-3">At Diwanyeh, we aim to provide a fair and enjoyable Baloot game environment for everyone. Users strictly agree not to:</p>
                                    <ul className="list-disc list-inside pl-2 flex flex-col gap-1 text-gray-400">
                                        <li>Use cheats, hacks, bots, or unauthorized third-party software.</li>
                                        <li>Manipulate game results, stats, or global match rankings.</li>
                                        <li>Exploit discovered technical issues, bugs, or system loopholes.</li>
                                        <li>Harass, threaten, or abuse other players inside match lobbies.</li>
                                    </ul>
                                    <p className="mt-3">
                                        Any activity that deliberately affects fair competition may result in immediate account restrictions or permanent removal from the platform.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        5. User Conduct
                                    </h2>
                                    <p className="mb-3">While using Diwanyeh services, users must respect other players and follow acceptable online behavior. Users should not:</p>
                                    <ul className="list-disc list-inside pl-2 flex flex-col gap-1 text-gray-400">
                                        <li>Upload harmful or malicious contents and links.</li>
                                        <li>Use offensive, inappropriate, or defamatory language.</li>
                                        <li>Attempt unauthorized access to our core backend systems or servers.</li>
                                        <li>Engage in activities that damage the reputation or security of Diwanyeh.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        6. Virtual Items and In-Game Features
                                    </h2>
                                    <p>
                                        Diwanyeh may offer virtual features, rewards, points, or other digital elements within the game layout. These virtual items have no real-world monetary value unless explicitly stated, cannot be exchanged for cash, and may be modified or removed as part of ongoing platform updates.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        7. Payments and Purchases
                                    </h2>
                                    <p>
                                        If Diwanyeh offers paid features or digital purchases, all transactions must be completed through approved payment methods. Users agree that all payment information provided must be accurate, transactions are made voluntarily, and specific promotional rules may apply.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        8. Intellectual Property Rights
                                    </h2>
                                    <p>
                                        All content available on Diwanyeh, including website design, logos, graphics, game features, underlying code, software, and textual assets are owned by Diwanyeh or its respective licensors and protected by copyright laws. Users may not copy, redistribute, or use our assets without formal written permission.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        9. Third-Party Services
                                    </h2>
                                    <p>
                                        Diwanyeh may use third-party tools such as payment gateways, database infrastructure, or analytics services. These providers maintain separate individual terms, and Diwanyeh holds no liability for practices or actions of external platforms.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        10. Privacy and Data Protection
                                    </h2>
                                    <p>
                                        Your privacy is critical to us. Data collected through standard platform operations is safely managed under our global Privacy Policy rules to provide, secure, and continuously optimize your interactive card game experiences.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        11. Service Availability
                                    </h2>
                                    <p>
                                        While we maintain top performance servers, we do not guarantee uninterrupted platform access. Services may occasionally be paused due to essential infrastructure maintenance, server updates, or security patches.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        12. Account Suspension and Termination
                                    </h2>
                                    <p>
                                        Diwanyeh holds full discretion to restrict, freeze, or terminate accounts that breach platform guidelines, create safety risks, execute fraudulent transactions, or heavily disrupt gameplay for others.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        13. Disclaimer & Limitation of Liability
                                    </h2>
                                    <p className="mb-2">
                                        Diwanyeh provides all platform ecosystems on an "as available" model. We do not promise complete error-free running cycles.
                                    </p>
                                    <p>
                                        To the maximum legal extent, Diwanyeh is not liable for data losses, gameplay disconnects, service drops, or unauthorized account operations resulting from client-side network updates or personal device usage profiles.
                                    </p>
                                </section>

                                <section className="pt-4 border-t border-amber-950/30">
                                    <h2 className="text-base md:text-lg font-medium text-[#D59444] uppercase tracking-wider font-serif mb-2">
                                        14. Contact Us
                                    </h2>
                                    <p>
                                        If you have questions, feedback, or compliance inquiries about these Terms & Conditions, reach out directly to the core development support lines via our web channel:
                                    </p>
                                    <p className="mt-2 font-medium text-[#EFCC88]">
                                        Website: <a href="https://diwanyeh.com/" className="underline hover:text-[#fcd34d] transition-colors">https://diwanyeh.com/</a>
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