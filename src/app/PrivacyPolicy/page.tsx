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
                            Last Updated: August 2026
                        </p>

                        {/* --- CONTENT CONTAINER --- */}
                        <div className="relative w-full max-w-4xl p-8 md:p-12 flex flex-col bg-[#0c0a06]/60 backdrop-blur-sm border border-amber-950/40 rounded-2xl shadow-2xl">

                            {/* Intro Block */}
                            <div className="text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light mb-8 pb-6 border-b border-amber-950/30">
                                <p className="mb-4">
                                    At <strong>Diwanyeh</strong>, your privacy matters to us. We want you to feel comfortable using our games and services, so this policy explains what information we collect, why we collect it, and how we handle it.
                                </p>
                                <p className="mb-4">
                                    This Privacy Policy applies when you use the Diwanyeh website, mobile app, or any related services, which we refer to together as the &ldquo;Service.&rdquo;
                                </p>
                                <p>
                                    By using Diwanyeh, you acknowledge the practices explained below.
                                </p>
                            </div>

                            {/* Policy Sections */}
                            <div className="flex flex-col gap-8 text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light text-left">

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-3">
                                        1. Information We Collect
                                    </h2>

                                    <p className="mb-4">
                                        The information we collect depends on how you use Diwanyeh.
                                    </p>

                                    <div className="flex flex-col gap-4 pl-1">
                                        <div>
                                            <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">Information you provide to us</h3>
                                            <p className="mb-2">
                                                When you create an account, you may be asked to provide basic details such as your name, username, email address, and password.
                                            </p>
                                            <p>
                                                If you make an in-app purchase, the payment is handled by a trusted third-party payment provider. Diwanyeh does not store your complete debit or credit card details.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">Information collected while you use the Service</h3>
                                            <p className="mb-2">
                                                Certain information may be collected automatically when you play or use Diwanyeh. This can include:
                                            </p>
                                            <ul className="list-disc list-inside pl-2 flex flex-col gap-1 text-gray-400 mb-2">
                                                <li>your device type and operating system;</li>
                                                <li>device identifiers;</li>
                                                <li>your IP address;</li>
                                                <li>login and session information;</li>
                                                <li>app usage and activity;</li>
                                                <li>crash reports and technical performance data;</li>
                                                <li>match history, scores, achievements, and other gameplay activity; and</li>
                                                <li>details of in-game purchases.</li>
                                            </ul>
                                            <p>
                                                We use this information mainly to understand how the Service is being used and to identify areas where the game or app can be improved.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">Information from other services</h3>
                                            <p className="mb-2">
                                                You may choose to sign in through another platform, such as Google, Apple, or Facebook.
                                            </p>
                                            <p>
                                                If you do, that provider may share limited profile information with us. What we receive depends on the permissions you have granted and the privacy settings of your account with that provider.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        2. How We Use Your Information
                                    </h2>
                                    <p className="mb-3">
                                        We use your information to operate Diwanyeh and provide a safe, reliable, and enjoyable experience.
                                    </p>
                                    <p className="mb-3">
                                        For example, we may use it to create and maintain your account, manage gameplay features, process purchases, and keep track of virtual currency, rewards, or similar in-game items.
                                    </p>
                                    <p className="mb-3">
                                        Gameplay and technical data can also help us improve matchmaking, fix bugs, reduce performance issues, and understand which parts of the Service players find useful.
                                    </p>
                                    <p className="mb-3">
                                        We may use certain information to protect the game and its community. This includes detecting or preventing cheating, fraud, hacking, misuse, or other activity that could affect players or the Service.
                                    </p>
                                    <p>
                                        We may also contact you about important updates, support requests, new features, promotions, or in-game events.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        3. Cookies and Similar Technologies
                                    </h2>
                                    <p className="mb-3">
                                        Diwanyeh may use cookies, local storage, and similar technologies to remember your preferences, keep you signed in, save certain settings, and understand how people use our website or app.
                                    </p>
                                    <p className="mb-3">
                                        You can usually manage cookies through your browser or device settings.
                                    </p>
                                    <p>
                                        If you disable some cookies, certain features may not work properly or may behave differently than expected.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        4. How We Share Information
                                    </h2>
                                    <p className="mb-3">
                                        Diwanyeh does not sell your personal information.
                                    </p>
                                    <p className="mb-4">
                                        However, there are situations where limited information may need to be shared.
                                    </p>

                                    <div className="flex flex-col gap-4 pl-1">
                                        <div>
                                            <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">Service providers</h3>
                                            <p className="mb-2">
                                                We may work with companies that help us operate Diwanyeh. These may include cloud hosting providers, database services, analytics companies, technical support providers, and payment processors.
                                            </p>
                                            <p>
                                                When these companies process information on our behalf, they are expected to handle it in accordance with their agreements with us and applicable privacy requirements.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">Legal and safety reasons</h3>
                                            <p className="mb-2">
                                                We may disclose information if we are legally required to do so, including in response to a valid court order, legal process, regulation, or request from an authorized government or law-enforcement body.
                                            </p>
                                            <p>
                                                We may also share information when reasonably necessary to protect Diwanyeh, our players, or others from fraud, security threats, abuse, or harmful activity.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">Information visible to other players</h3>
                                            <p className="mb-2">
                                                Some information is naturally public within the game.
                                            </p>
                                            <p className="mb-2">
                                                For example, other players may be able to see your username, ranking, leaderboard position, achievements, or similar gameplay details.
                                            </p>
                                            <p>
                                                Private information such as your password, personal email address, or payment details is not shown to other players.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        5. How We Protect Your Information
                                    </h2>
                                    <p className="mb-3">
                                        We use reasonable administrative, technical, and physical safeguards to help protect the information we hold.
                                    </p>
                                    <p className="mb-3">
                                        These measures are designed to reduce the risk of unauthorized access, misuse, loss, alteration, or disclosure.
                                    </p>
                                    <p className="mb-3">
                                        That said, no website, app, or online system can be guaranteed to be completely secure.
                                    </p>
                                    <p>
                                        For this reason, we recommend using a strong and unique password and keeping your login details private.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        6. Data Retention and Account Deletion
                                    </h2>
                                    <p className="mb-3">
                                        We generally keep personal information for as long as it is needed to provide the Service, maintain your account, comply with legal obligations, resolve disputes, or enforce our agreements.
                                    </p>
                                    <p className="mb-3">
                                        If you request deletion of your account, we may delete or anonymize the personal information linked to it where appropriate.
                                    </p>
                                    <p>
                                        In some situations, we may need to keep certain information for longer if required or permitted by law.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        7. Your Privacy Rights and Choices
                                    </h2>
                                    <p className="mb-3">
                                        Your privacy rights may depend on the country or region where you live.
                                    </p>
                                    <p className="mb-2">
                                        Where applicable, you may have the right to:
                                    </p>
                                    <ul className="list-disc list-inside pl-2 flex flex-col gap-1 text-gray-400 mb-3">
                                        <li>request access to the personal information we hold about you;</li>
                                        <li>ask us to correct inaccurate information;</li>
                                        <li>request deletion of certain information;</li>
                                        <li>object to or limit certain uses of your information; or</li>
                                        <li>request a copy of your information in a portable format.</li>
                                    </ul>
                                    <p>
                                        If you want to make a privacy-related request, you can contact us through the support options available in the Diwanyeh app or by email.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        8. Children&rsquo;s Privacy
                                    </h2>
                                    <p className="mb-3">
                                        Diwanyeh is intended for people who are 18 years of age or older.
                                    </p>
                                    <p className="mb-3">
                                        We do not knowingly allow users under 18 to create accounts, and we do not intentionally collect personal information from children.
                                    </p>
                                    <p>
                                        If we discover that information has been collected from someone under the age of 18, we will take appropriate steps to remove it in accordance with applicable law.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                        9. International Data Transfers
                                    </h2>
                                    <p className="mb-3">
                                        Diwanyeh may use servers, service providers, or technical systems located in different countries.
                                    </p>
                                    <p className="mb-3">
                                        Because of this, your information may sometimes be stored or processed outside the country where you live.
                                    </p>
                                    <p>
                                        Where required, we use appropriate safeguards to help protect personal information when it is transferred internationally.
                                    </p>
                                </section>

                                <section className="pt-4 border-t border-amber-950/30">
                                    <h2 className="text-base md:text-lg font-medium text-[#D59444] uppercase tracking-wider font-serif mb-2">
                                        10. Contact Us
                                    </h2>
                                    <p className="mb-2">
                                        If you have questions about this Privacy Policy, want to make a privacy request, or have concerns about how your information is handled, you can contact us through the Help section of the Diwanyeh app.
                                    </p>
                                    <p className="mb-2">
                                        You can also contact us by email:
                                    </p>
                                    <p className="mt-2 font-medium text-[#EFCC88]">
                                        info@diwanyeh.com
                                    </p>
                                    <p className="mt-4 text-xs text-gray-500 font-mono">
                                        &copy; Diwanyeh. All Rights Reserved
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