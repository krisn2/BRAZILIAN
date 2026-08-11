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
                            Last Updated: August 2026
                        </p>

                        {/* --- CONTENT CONTAINER --- */}
                        <div className="relative w-full max-w-4xl p-8 md:p-12 flex flex-col bg-[#0c0a06]/60 backdrop-blur-sm border border-amber-950/40 rounded-2xl shadow-2xl">

                            {/* Intro Block */}
                            <div className="text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light mb-8 pb-6 border-b border-amber-950/30">
                                <p className="mb-4">
                                    Welcome to <strong>Diwanyeh</strong>.
                                </p>
                                <p className="mb-4">
                                    Diwanyeh is a place to play Burraco and Baloot online, connect with other players, and enjoy the games with friends. Like any gaming community, we need a few ground rules to keep things fair, safe, and enjoyable.
                                </p>
                                <p>
                                    These Terms explain those rules and apply to our website, mobile applications, games, and related services. Please read them before using Diwanyeh. If you use the platform, you are agreeing to these Terms. If you do not agree with them, please stop using Diwanyeh.
                                </p>
                            </div>

                            {/* Terms Sections */}
                            <div className="flex flex-col gap-8 text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light text-left">

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        1. A Little About Diwanyeh
                                    </h2>
                                    <p className="mb-3">
                                        Diwanyeh brings Burraco and Baloot to a digital setting. We want players to be able to enjoy the games they know, play with friends, and compete with people they meet through the platform.
                                    </p>
                                    <p>
                                        Diwanyeh will naturally develop over time. Games may be updated, existing features may change, and new ones may be introduced as we continue working on the platform.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        2. Your Agreement With Us
                                    </h2>
                                    <p className="mb-3">
                                        When you use Diwanyeh, these Terms form part of the agreement between you and us.
                                    </p>
                                    <p className="mb-3">
                                        We may revise them occasionally. There are several reasons why that might happen: we could launch a new feature, change part of the service, improve the way the platform works, or need to reflect a legal or regulatory requirement.
                                    </p>
                                    <p>
                                        If we update these Terms and you continue to use Diwanyeh after the new version takes effect, the updated Terms will apply to your use of the platform.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        3. Looking After Your Account
                                    </h2>
                                    <p className="mb-3">
                                        Some features require a Diwanyeh account.
                                    </p>
                                    <p className="mb-3">
                                        When you register, please make sure the details you give us are correct. Keep your password and login information somewhere safe and do not share them unnecessarily. You are responsible for taking reasonable care of your account.
                                    </p>
                                    <p className="mb-3">
                                        If you notice activity you do not recognize or believe another person has accessed your account, please tell us promptly.
                                    </p>
                                    <p>
                                        There may be circumstances where we need to restrict an account. This could happen, for example, if the account is being misused, our rules are repeatedly ignored, or its activity is causing serious problems for other players.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        4. Playing Fair
                                    </h2>
                                    <p className="mb-3">
                                        Burraco and Baloot are competitive games, and that competition should be fair.
                                    </p>
                                    <p className="mb-3">
                                        Using a bot, cheat, hack, script, or unauthorized program to get an advantage over somebody else is not acceptable on Diwanyeh. Players should not interfere with match results, rankings, statistics, or other competitive parts of the games either.
                                    </p>
                                    <p className="mb-3">
                                        You might occasionally discover a bug while playing. We would much rather hear about it than have someone use it to gain an advantage. Deliberately exploiting a technical problem can be treated in the same way as other forms of unfair play.
                                    </p>
                                    <p className="mb-3">
                                        Fair play also extends to how you treat the person on the other side of the game. Threats, harassment, and serious abuse have no place on Diwanyeh.
                                    </p>
                                    <p>
                                        If these rules are broken, what we do will depend on what happened and how serious it was. In some cases, a warning or restriction may be enough. More serious or repeated violations may lead to temporary suspension or the account being closed.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        5. Respect the Community
                                    </h2>
                                    <p className="mb-3">
                                        People come to Diwanyeh to play and have a good time. Please keep that in mind when interacting with others.
                                    </p>
                                    <p className="mb-3">
                                        Do not use Diwanyeh to spread malicious links, harmful material, threats, defamatory statements, or seriously abusive content.
                                    </p>
                                    <p className="mb-3">
                                        The same common-sense rule applies to the technical side of the platform. Do not try to enter accounts, servers, databases, systems, or other areas that you do not have permission to access. Attempts to damage the service, interfere with its operation, or bypass its security are also prohibited.
                                    </p>
                                    <p>
                                        Competition is part of the game. Damaging someone else's experience is not.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        6. Virtual Items, Rewards and Points
                                    </h2>
                                    <p className="mb-3">
                                        Diwanyeh may include points, rewards, achievements, virtual items, or other features that exist within the games.
                                    </p>
                                    <p className="mb-3">
                                        Unless we clearly say otherwise, these are part of the Diwanyeh gaming experience only. They are not the same as real money and cannot be exchanged or redeemed for cash.
                                    </p>
                                    <p>
                                        We may sometimes need to adjust these features as the games develop. That could mean adding something new, changing an existing reward, limiting a feature, replacing an item, or removing one altogether.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        7. Purchases
                                    </h2>
                                    <p className="mb-3">
                                        Some features or digital items on Diwanyeh may require payment.
                                    </p>
                                    <p className="mb-3">
                                        If you decide to make a purchase, please use one of the payment options made available through the platform. The payment information you provide should be correct, and you should only use a payment method that you have permission to use.
                                    </p>
                                    <p>
                                        From time to time, we may also offer promotions, discounts, or special deals. If an offer comes with additional conditions, we will make those conditions available with the offer.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        8. Who Owns the Content?
                                    </h2>
                                    <p className="mb-3">
                                        The work that makes up Diwanyeh includes more than the card games themselves. Our platform contains software, code, graphics, written material, logos, branding, interface designs, game features, and other creative or technical material.
                                    </p>
                                    <p className="mb-3">
                                        Depending on the material, it belongs either to Diwanyeh or to a third party that has allowed us to use it. Applicable intellectual property laws protect those rights.
                                    </p>
                                    <p>
                                        Playing on Diwanyeh does not give you ownership of this material. You may not take protected Diwanyeh content and copy, sell, republish, redistribute, modify, or commercially exploit it without the appropriate permission.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        9. Services We Receive From Other Providers
                                    </h2>
                                    <p className="mb-3">
                                        Running an online game involves a number of services behind the scenes. Some of them may be supplied by other companies.
                                    </p>
                                    <p className="mb-3">
                                        For example, outside providers may help us with payments, hosting, databases, analytics, or other technical functions. Where you use a service operated by another provider, that provider may have its own terms and privacy practices.
                                    </p>
                                    <p>
                                        Those policies are controlled by the relevant provider, not by Diwanyeh.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        10. Privacy
                                    </h2>
                                    <p className="mb-3">
                                        We understand that players want to know what happens to information associated with their use of Diwanyeh.
                                    </p>
                                    <p className="mb-3">
                                        Our Privacy Policy deals with this separately and explains how information is collected and handled in connection with the platform.
                                    </p>
                                    <p>
                                        Please read it alongside these Terms if you would like to understand our approach to privacy and data in more detail.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        11. Sometimes the Service May Be Unavailable
                                    </h2>
                                    <p className="mb-3">
                                        We work to keep Diwanyeh running reliably, but there will be times when everything does not work exactly as expected.
                                    </p>
                                    <p>
                                        We may need to take a service offline for maintenance or an update. A server could experience a problem. A player's internet connection could drop, or an unexpected technical or security issue could interrupt a game.
                                    </p>
                                    <p className="mt-3">
                                        For those reasons, we cannot promise that Diwanyeh will be available without interruption at all times.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        12. If We Need to Take Action on an Account
                                    </h2>
                                    <p className="mb-3">
                                        Closing an account is not the only way we can respond when something goes wrong.
                                    </p>
                                    <p className="mb-3">
                                        Depending on the circumstances, we may restrict a particular feature, temporarily suspend access, freeze an account, or close it. We may consider taking such action where there is evidence of cheating, fraud, serious abuse, a security threat, misuse of Diwanyeh, or repeated disregard for these Terms.
                                    </p>
                                    <p>
                                        The action taken will depend on the nature and seriousness of the issue.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        13. Service Responsibility
                                    </h2>
                                    <p className="mb-3">
                                        Diwanyeh is provided on an &ldquo;as available&rdquo; basis.
                                    </p>
                                    <p className="mb-3">
                                        We work to keep the service stable, but online games depend on technology that can occasionally fail. Internet connections drop. Devices encounter problems. Servers require maintenance. Unexpected faults happen.
                                    </p>
                                    <p className="mb-3">
                                        As far as applicable law allows, Diwanyeh is not responsible for losses resulting from events outside our reasonable control, including certain internet or network failures, interruptions to the service, gameplay disconnections, or problems caused by the device being used to access the platform.
                                    </p>
                                    <p className="mb-3">
                                        You should also take reasonable care of your own account, password, device, and internet connection.
                                    </p>
                                    <p>
                                        Nothing written here is intended to remove a right or responsibility that cannot legally be excluded or limited.
                                    </p>
                                </section>

                                <section className="pt-4 border-t border-amber-950/30">
                                    <h2 className="text-base md:text-lg font-medium text-[#D59444] uppercase tracking-wider font-serif mb-2">
                                        14. Get in Touch
                                    </h2>
                                    <p className="mb-2">
                                        Have a question about these Terms? If something is unclear, you have feedback, or you need to contact us about a compliance matter, please get in touch.
                                    </p>
                                    <p className="mt-2 font-medium text-[#EFCC88]">
                                        Email: info@diwanyeh.com
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