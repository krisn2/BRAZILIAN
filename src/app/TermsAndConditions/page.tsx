"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const TERMS_EN = {
    introTitle: "Welcome to Diwanyeh.",
    intro1: "Diwanyeh is a place to play Burraco and Baloot online, connect with other players, and enjoy the games with friends. Like any gaming community, we need a few ground rules to keep things fair, safe, and enjoyable.",
    intro2: "These Terms explain those rules and apply to our website, mobile applications, games, and related services. Please read them before using Diwanyeh. If you use the platform, you are agreeing to these Terms. If you do not agree with them, please stop using Diwanyeh.",
    sections: [
        {
            title: "1. A Little About Diwanyeh",
            paragraphs: [
                "Diwanyeh brings Burraco and Baloot to a digital setting. We want players to be able to enjoy the games they know, play with friends, and compete with people they meet through the platform.",
                "Diwanyeh will naturally develop over time. Games may be updated, existing features may change, and new ones may be introduced as we continue working on the platform."
            ]
        },
        {
            title: "2. Your Agreement With Us",
            paragraphs: [
                "When you use Diwanyeh, these Terms form part of the agreement between you and us.",
                "We may revise them occasionally. There are several reasons why that might happen: we could launch a new feature, change part of the service, improve the way the platform works, or need to reflect a legal or regulatory requirement.",
                "If we update these Terms and you continue to use Diwanyeh after the new version takes effect, the updated Terms will apply to your use of the platform."
            ]
        },
        {
            title: "3. Looking After Your Account",
            paragraphs: [
                "Some features require a Diwanyeh account.",
                "When you register, please make sure the details you give us are correct. Keep your password and login information somewhere safe and do not share them unnecessarily. You are responsible for taking reasonable care of your account.",
                "If you notice activity you do not recognize or believe another person has accessed your account, please tell us promptly.",
                "There may be circumstances where we need to restrict an account. This could happen, for example, if the account is being misused, our rules are repeatedly ignored, or its activity is causing serious problems for other players."
            ]
        },
        {
            title: "4. Playing Fair",
            paragraphs: [
                "Burraco and Baloot are competitive games, and that competition should be fair.",
                "Using a bot, cheat, hack, script, or unauthorized program to get an advantage over somebody else is not acceptable on Diwanyeh. Players should not interfere with match results, rankings, statistics, or other competitive parts of the games either.",
                "You might occasionally discover a bug while playing. We would much rather hear about it than have someone use it to gain an advantage. Deliberately exploiting a technical problem can be treated in the same way as other forms of unfair play.",
                "Fair play also extends to how you treat the person on the other side of the game. Threats, harassment, and serious abuse have no place on Diwanyeh.",
                "If these rules are broken, what we do will depend on what happened and how serious it was. In some cases, a warning or restriction may be enough. More serious or repeated violations may lead to temporary suspension or the account being closed."
            ]
        },
        {
            title: "5. Respect the Community",
            paragraphs: [
                "People come to Diwanyeh to play and have a good time. Please keep that in mind when interacting with others.",
                "Do not use Diwanyeh to spread malicious links, harmful material, threats, defamatory statements, or seriously abusive content.",
                "The same common-sense rule applies to the technical side of the platform. Do not try to enter accounts, servers, databases, systems, or other areas that you do not have permission to access. Attempts to damage the service, interfere with its operation, or bypass its security are also prohibited.",
                "Competition is part of the game. Damaging someone else's experience is not."
            ]
        },
        {
            title: "6. Virtual Items, Rewards and Points",
            paragraphs: [
                "Diwanyeh may include points, rewards, achievements, virtual items, or other features that exist within the games.",
                "Unless we clearly say otherwise, these are part of the Diwanyeh gaming experience only. They are not the same as real money and cannot be exchanged or redeemed for cash.",
                "We may sometimes need to adjust these features as the games develop. That could mean adding something new, changing an existing reward, limiting a feature, replacing an item, or removing one altogether."
            ]
        },
        {
            title: "7. Purchases",
            paragraphs: [
                "Some features or digital items on Diwanyeh may require payment.",
                "If you decide to make a purchase, please use one of the payment options made available through the platform. The payment information you provide should be correct, and you should only use a payment method that you have permission to use.",
                "From time to time, we may also offer promotions, discounts, or special deals. If an offer comes with additional conditions, we will make those conditions available with the offer."
            ]
        },
        {
            title: "8. Who Owns the Content?",
            paragraphs: [
                "The work that makes up Diwanyeh includes more than the card games themselves. Our platform contains software, code, graphics, written material, logos, branding, interface designs, game features, and other creative or technical material.",
                "Depending on the material, it belongs either to Diwanyeh or to a third party that has allowed us to use it. Applicable intellectual property laws protect those rights.",
                "Playing on Diwanyeh does not give you ownership of this material. You may not take protected Diwanyeh content and copy, sell, republish, redistribute, modify, or commercially exploit it without the appropriate permission."
            ]
        },
        {
            title: "9. Services We Receive From Other Providers",
            paragraphs: [
                "Running an online game involves a number of services behind the scenes. Some of them may be supplied by other companies.",
                "For example, outside providers may help us with payments, hosting, databases, analytics, or other technical functions. Where you use a service operated by another provider, that provider may have its own terms and privacy practices.",
                "Those policies are controlled by the relevant provider, not by Diwanyeh."
            ]
        },
        {
            title: "10. Privacy",
            paragraphs: [
                "We understand that players want to know what happens to information associated with their use of Diwanyeh.",
                "Our Privacy Policy deals with this separately and explains how information is collected and handled in connection with the platform.",
                "Please read it alongside these Terms if you would like to understand our approach to privacy and data in more detail."
            ]
        },
        {
            title: "11. Sometimes the Service May Be Unavailable",
            paragraphs: [
                "We work to keep Diwanyeh running reliably, but there will be times when everything does not work exactly as expected.",
                "We may need to take a service offline for maintenance or an update. A server could experience a problem. A player's internet connection could drop, or an unexpected technical or security issue could interrupt a game.",
                "For those reasons, we cannot promise that Diwanyeh will be available without interruption at all times."
            ]
        },
        {
            title: "12. If We Need to Take Action on an Account",
            paragraphs: [
                "Closing an account is not the only way we can respond when something goes wrong.",
                "Depending on the circumstances, we may restrict a particular feature, temporarily suspend access, freeze an account, or close it. We may consider taking such action where there is evidence of cheating, fraud, serious abuse, a security threat, misuse of Diwanyeh, or repeated disregard for these Terms.",
                "The action taken will depend on the nature and seriousness of the issue."
            ]
        },
        {
            title: "13. Service Responsibility",
            paragraphs: [
                "Diwanyeh is provided on an “as available” basis.",
                "We work to keep the service stable, but online games depend on technology that can occasionally fail. Internet connections drop. Devices encounter problems. Servers require maintenance. Unexpected faults happen.",
                "As far as applicable law allows, Diwanyeh is not responsible for losses resulting from events outside our reasonable control, including certain internet or network failures, interruptions to the service, gameplay disconnections, or problems caused by the device being used to access the platform.",
                "You should also take reasonable care of your own account, password, device, and internet connection.",
                "Nothing written here is intended to remove a right or responsibility that cannot legally be excluded or limited."
            ]
        },
        {
            title: "14. Get in Touch",
            paragraphs: [
                "Have a question about these Terms? If something is unclear, you have feedback, or you need to contact us about a compliance matter, please get in touch.",
                "Email: info@diwanyeh.com"
            ]
        }
    ]
};

const TERMS_AR = {
    introTitle: "مرحباً بك في ديوانية.",
    intro1: "ديوانية هي منصة للعب البوراكو والبلوت عبر الإنترنت والتواصل مع اللاعبين الآخرين والاستمتاع بالألعاب مع الأصدقاء. وكأي مجتمع ألعاب، نحتاج إلى بعض القواعد الأساسية للحفاظ على بيئة عادلة وآمنة وممتعة.",
    intro2: "تشرح هذه الشروط هذه القواعد وتطبق على موقعنا وتطبيقاتنا وألعابنا والخدمات المرتبطة بها. يرجى قراءتها قبل استخدام ديوانية. باستخدامك للمنصة، فإنك توافق على هذه الشروط.",
    sections: [
        {
            title: "1. نبذة عن ديوانية",
            paragraphs: [
                "تقدم ديوانية ألعاب البوراكو والبلوت في بيئة رقمية مميزة. نهدف إلى تمكين اللاعبين من الاستمتاع بألعابهم المفضلة، واللعب مع الأصدقاء والتنافس مع الآخرين.",
                "تتطور ديوانية بشكل مستمر مع الوقت. قد يتم تحديث الألعاب وتغيير الميزات الحالية وإضافة ميزات جديدة مع استمرار تطوير المنصة."
            ]
        },
        {
            title: "2. اتفاقيتك معنا",
            paragraphs: [
                "عند استخدامك لديوانية، تشكل هذه الشروط جزءاً من الاتفاقية بينك وبيننا.",
                "قد نقوم بمراجعتها وتعديلها من حين لآخر لإطلاق ميزات جديدة أو تحسين الخدمة أو الامتثال للمتطلبات القانونية.",
                "إذا قمنا بتحديث هذه الشروط واستمررت في استخدام ديوانية بعد سريان التحديث، ستطبق الشروط المحدثة على استخدامك."
            ]
        },
        {
            title: "3. العناية بحسابك",
            paragraphs: [
                "تتطلب بعض الميزات إنشاء حساب في ديوانية.",
                "عند التسجيل، يرجى التأكد من صحة البيانات المقدمة. احفظ كلمة المرور وبيانات الدخول في مكان آمن. أنت مسؤول عن اتخاذ العناية المعقولة بحسابك.",
                "إذا لاحظت أي نشاط غير مصرح به على حسابك، يرجى إبلاغنا فوراً.",
                "قد نضطر في بعض الظروف إلى تقييد الحساب في حال إساءة الاستخدام أو تجاهل القواعد."
            ]
        },
        {
            title: "4. اللعب النظيف",
            paragraphs: [
                "البوراكو والبلوت ألعاب تنافسية، ويجب أن يكون التنافس عادلاً للجميع.",
                "يمنع استخدام البرامج غير المصرح بها أو أدوات الغش للحصول على ميزة غير عادلة.",
                "إذا اكتشفت خطأً فنياً أثناء اللعب، يرجى الإبلاغ عنه بدلاً من استغلاله.",
                "يشمل اللعب النظيف أيضاً احترام اللاعبين الآخرين والامتناع عن التهديدات أو الإساءة.",
                "في حال مخالفة القواعد، قد يتم توجيه تحذير أو تعليق الحساب مؤقتاً أو إغلاقه حسب جسامة المخالفة."
            ]
        },
        {
            title: "5. احترام المجتمع",
            paragraphs: [
                "يأتي اللاعبون إلى ديوانية للاستمتاع بوقتهم. يرجى مراعاة ذلك عند التفاعل مع الآخرين.",
                "يمنع استخدام المنصة لنشر روابط خبيثة أو محتوى ضار أو مسيء.",
                "يمنع محاولة الوصول غير المصرح به إلى الخوادم أو قواعد البيانات أو الأنظمة."
            ]
        },
        {
            title: "6. العناصر الافتراضية والجوائز والنقاط",
            paragraphs: [
                "قد تتضمن ديوانية نقاطاً أو جوائز أو إنجازات أو عناصر افتراضية داخل اللعبة.",
                "تعد هذه العناصر جزءاً من تجربة اللعبة فقط ولا تمثل أموالاً حقيقية ولا يمكن استبدالها نقداً.",
                "قد نقوم بتعديل أو إضافة أو إزالة هذه الميزات مع تطوير الألعاب."
            ]
        },
        {
            title: "7. المشتريات",
            paragraphs: [
                "قد تتطلب بعض الميزات أو العناصر الرقمية الدفع.",
                "عند الشراء، يرجى استخدام طرق الدفع المتاحة والمعتمدة عبر المنصة.",
                "قد نقدم من حين لآخر عروضاً وترقيات خاصة بشروط مخصصة."
            ]
        },
        {
            title: "8. حقوق الملكية الفكرية",
            paragraphs: [
                "تتضمن ديوانية برمجيات وتصاميم وشعارات ومحتويات محمية بموجب قوانين الملكية الفكرية.",
                "استخدام المنصة لا يمنحك ملكية هذا المحتوى، ويمنع نسخها أو إعادة توزيعها دون إذن رسمي."
            ]
        },
        {
            title: "9. خدمات الطرف الثالث",
            paragraphs: [
                "تستعين ديوانية بمزودي خدمات خارجيين للمعالجة والدفع والاستضافة والتحليلات.",
                "تخضع تلك الخدمات لسياسات مزوديها الخاصين."
            ]
        },
        {
            title: "10. الخصوصية",
            paragraphs: [
                "تشرح سياسة الخصوصية الخاصة بنا كيفية جمع المعلومات والتعامل معها بشكل تفصيلي."
            ]
        },
        {
            title: "11. توفر الخدمة",
            paragraphs: [
                "نعمل على تشغيل ديوانية بكفاءة عالية، ولكن قد تطرأ صيانة أو انقطاعات فنية غير متوقعة."
            ]
        },
        {
            title: "12. الإجراءات على الحسابات",
            paragraphs: [
                "قد نلجأ لتقييد الميزات أو تعليق الحساب في حال الغش أو التهديدات الأمنية."
            ]
        },
        {
            title: "13. مسؤولية الخدمة",
            paragraphs: [
                "تقدم ديوانية على أساس \"كما هي متاح\" مع العمل المستمر على استقرار الخدمة."
            ]
        },
        {
            title: "14. التواصل معنا",
            paragraphs: [
                "إذا كان لديك أي استفسار حول هذه الشروط، يرجى التواصل معنا عبر:",
                "البريد الإلكتروني: info@diwanyeh.com"
            ]
        }
    ]
};

export default function TermsAndConditions() {
    const { t, isArabic } = useLanguage();
    const content = isArabic ? TERMS_AR : TERMS_EN;

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
                            {t("terms_title")}
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
                            {t("terms_last_updated")}
                        </p>

                        {/* --- CONTENT CONTAINER --- */}
                        <div className="relative w-full max-w-4xl p-8 md:p-12 flex flex-col bg-[#0c0a06]/60 backdrop-blur-sm border border-amber-950/40 rounded-2xl shadow-2xl">

                            {/* Intro Block */}
                            <div className="text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light mb-8 pb-6 border-b border-amber-950/30">
                                <p className="mb-4">
                                    <strong>{content.introTitle}</strong>
                                </p>
                                <p className="mb-4">
                                    {content.intro1}
                                </p>
                                <p>
                                    {content.intro2}
                                </p>
                            </div>

                            {/* Terms Sections */}
                            <div className="flex flex-col gap-8 text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light text-left">
                                {content.sections.map((sec, idx) => (
                                    <section key={idx}>
                                        <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-2">
                                            {sec.title}
                                        </h2>
                                        {sec.paragraphs.map((p, pIdx) => (
                                            <p key={pIdx} className="mb-3">
                                                {p}
                                            </p>
                                        ))}
                                    </section>
                                ))}
                            </div>
                        </div>

                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}