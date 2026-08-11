"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const PRIVACY_EN = {
    intro1: "At Diwanyeh, your privacy matters to us. We want you to feel comfortable using our games and services, so this policy explains what information we collect, why we collect it, and how we handle it.",
    intro2: "This Privacy Policy applies when you use the Diwanyeh website, mobile app, or any related services, which we refer to together as the “Service.”",
    intro3: "By using Diwanyeh, you acknowledge the practices explained below.",
    sections: [
        {
            title: "1. Information We Collect",
            content: [
                {
                    heading: "Information you provide to us",
                    text: "When you create an account, you may be asked to provide basic details such as your name, username, email address, and password. If you make an in-app purchase, the payment is handled by a trusted third-party payment provider. Diwanyeh does not store your complete debit or credit card details."
                },
                {
                    heading: "Information collected while you use the Service",
                    text: "Certain information may be collected automatically when you play or use Diwanyeh, including device type, operating system, IP address, login sessions, match history, and performance data."
                },
                {
                    heading: "Information from other services",
                    text: "You may choose to sign in through another platform, such as Google, Apple, or Facebook. That provider may share limited profile information with us."
                }
            ]
        },
        {
            title: "2. How We Use Your Information",
            content: [
                {
                    heading: "",
                    text: "We use your information to operate Diwanyeh, manage gameplay features, process purchases, keep track of virtual rewards, improve matchmaking, detect cheating or fraud, and communicate important updates."
                }
            ]
        },
        {
            title: "3. Cookies and Similar Technologies",
            content: [
                {
                    heading: "",
                    text: "Diwanyeh may use cookies, local storage, and similar technologies to remember your preferences, keep you signed in, and save certain settings."
                }
            ]
        },
        {
            title: "4. How We Share Information",
            content: [
                {
                    heading: "Service providers",
                    text: "We may work with trusted companies that help us operate Diwanyeh, including cloud hosting providers, analytics companies, and payment processors."
                },
                {
                    heading: "Legal and safety reasons",
                    text: "We may disclose information if required by law or reasonably necessary to protect Diwanyeh and our players from fraud or security threats."
                },
                {
                    heading: "Information visible to other players",
                    text: "Public profile information like username, ranking, and achievements may be visible to other players. Passwords and payment details are strictly private."
                }
            ]
        },
        {
            title: "5. How We Protect Your Information",
            content: [
                {
                    heading: "",
                    text: "We use administrative, technical, and physical safeguards to reduce the risk of unauthorized access, misuse, or disclosure of your information."
                }
            ]
        },
        {
            title: "6. Data Retention and Account Deletion",
            content: [
                {
                    heading: "",
                    text: "We keep personal information for as long as needed to provide the Service. If you request deletion, we will delete or anonymize your information where appropriate."
                }
            ]
        },
        {
            title: "7. Your Privacy Rights and Choices",
            content: [
                {
                    heading: "",
                    text: "Depending on where you live, you may have rights to access, correct, delete, or receive a copy of your personal data."
                }
            ]
        },
        {
            title: "8. Children’s Privacy",
            content: [
                {
                    heading: "",
                    text: "Diwanyeh is intended for people 18 years or older. We do not knowingly collect personal information from children."
                }
            ]
        },
        {
            title: "9. International Data Transfers",
            content: [
                {
                    heading: "",
                    text: "Your information may be stored or processed in different countries using appropriate safeguards."
                }
            ]
        },
        {
            title: "10. Contact Us",
            content: [
                {
                    heading: "",
                    text: "If you have questions about this Privacy Policy, please contact us at info@diwanyeh.com."
                }
            ]
        }
    ]
};

const PRIVACY_AR = {
    intro1: "في ديوانية، تهمنا خصوصيتك للغاية. نريد منك الشعور بالراحة أثناء استخدام ألعابنا وخدماتنا، وتوضح هذه السياسة المعلومات التي نجمعها وسبب جمعها وكيفية التعامل معها.",
    intro2: "تطبق سياسة الخصوصية هذه عند استخدامك لموقع ديوانية أو تطبيقات الجوال أو أي من الخدمات المرتبطة بها.",
    intro3: "باستخدامك لديوانية، فإنك تقر بالممارسات الموضحة أدناه.",
    sections: [
        {
            title: "1. المعلومات التي نجمعها",
            content: [
                {
                    heading: "المعلومات التي تقدمها لنا",
                    text: "عند إنشاء حساب، قد يُطلب منك تقديم تفاصيل أساسية مثل الاسم واسم المستخدم والبريد الإلكتروني وكلمة المرور. بالنسبة للمشتريات، تُعالج عمليات الدفع بواسطة مزودي دفع موثوقين ولا نخزن بيانات البطاقات الكاملة."
                },
                {
                    heading: "المعلومات الجمّعة أثناء استخدام الخدمة",
                    text: "قد تُجمع بعض المعلومات تلقائياً عند استخدام الخدمة، مثل نوع الجهاز، ونظام التشغيل، وعنوان IP، وسجلات الجلسات، وتاريخ المباريات والأداء الفني."
                },
                {
                    heading: "المعلومات من خدمات أخرى",
                    text: "عند تسجيل الدخول عبر منصات مثل Google أو Apple أو Facebook، قد تشارك تلك المنصات معلومات ملف شخصي محدودة معنا بناءً على إعداداتك."
                }
            ]
        },
        {
            title: "2. كيف نستخدم معلوماتك",
            content: [
                {
                    heading: "",
                    text: "نستخدم معلوماتك لتشغيل ديوانية، وإدارة ميزات اللعب، ومعالجة المشتريات، ومتابعة المكافآت الافتراضية، وتحسين المطابقة، واكتشاف الغش والاحتيال، وإرسال التحديثات الهامة."
                }
            ]
        },
        {
            title: "3. ملفات تعريف الارتباط والتقنيات المماثلة",
            content: [
                {
                    heading: "",
                    text: "قد نستخدم ملفات تعريف الارتباط (الكوكيز) والتخزين المحلي لحفظ تفضيلاتك، وإبقائك مسجلاً، وتخصيص تجربتك."
                }
            ]
        },
        {
            title: "4. مشاركة المعلومات",
            content: [
                {
                    heading: "مزودو الخدمات",
                    text: "قد نتعاون مع شركات موثوقة تساعدنا في تشغيل ديوانية مثل مزودي الاستضافة السحابية والتحليلات ومعالجي الدفع."
                },
                {
                    heading: "الأسباب القانونية والأمنية",
                    text: "قد نكشف عن المعلومات إذا طلب القانون ذلك أو لحماية ديوانية ولاعبيها من الاحتيال والتهديدات الأمنية."
                },
                {
                    heading: "المعلومات الظاهرة للاعبين الآخرين",
                    text: "تكون معلومات الملف الشخصي العامة مثل اسم المستخدم والتصنيف والإنجازات مرئية للاعبين الآخرين. بينما تظل كلمات المرور وبيانات الدفع خاصة تماماً."
                }
            ]
        },
        {
            title: "5. حماية معلوماتك",
            content: [
                {
                    heading: "",
                    text: "نستخدم تدابير حماية إدارية وتقنية وفيزيائية معقولة للمساعدة في حماية المعلومات ومنع الوصول غير المصرح به."
                }
            ]
        },
        {
            title: "6. الاحتفاظ بالبيانات وحذف الحساب",
            content: [
                {
                    heading: "",
                    text: "نحتفظ بالمعلومات الشخصية لطالما كانت ضرورية لتقديم الخدمة. عند طلب حذف الحساب، سنقوم بحذف أو إخفاء هوية معلوماتك الشخصية حسب الاقتضاء."
                }
            ]
        },
        {
            title: "7. حقوق الخصوصية والخيارات",
            content: [
                {
                    heading: "",
                    text: "بناءً على مكان إقامتك، قد يكون لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو طلب حذفها."
                }
            ]
        },
        {
            title: "8. خصوصية الأطفال",
            content: [
                {
                    heading: "",
                    text: "ديوانية مخصصة للأفراد البالغين من العمر 18 عاماً أو أكثر. نحن لا نجمع معلومات شخصية من الأطفال بشكل متعمد."
                }
            ]
        },
        {
            title: "9. نقل البيانات الدولي",
            content: [
                {
                    heading: "",
                    text: "قد تُخزن معلوماتك أو تُعالج في دول مختلفة باستخدام ضوابط حماية مناسبة."
                }
            ]
        },
        {
            title: "10. التواصل معنا",
            content: [
                {
                    heading: "",
                    text: "إذا كان لديك أي استفسار حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر: info@diwanyeh.com."
                }
            ]
        }
    ]
};

export default function PrivacyPolicy() {
    const { t, isArabic } = useLanguage();
    const content = isArabic ? PRIVACY_AR : PRIVACY_EN;

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
                            {t("privacy_title")}
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
                            {t("privacy_last_updated")}
                        </p>

                        {/* --- CONTENT CONTAINER --- */}
                        <div className="relative w-full max-w-4xl p-8 md:p-12 flex flex-col bg-[#0c0a06]/60 backdrop-blur-sm border border-amber-950/40 rounded-2xl shadow-2xl">

                            {/* Intro Block */}
                            <div className="text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light mb-8 pb-6 border-b border-amber-950/30">
                                <p className="mb-4">
                                    {content.intro1}
                                </p>
                                <p className="mb-4">
                                    {content.intro2}
                                </p>
                                <p>
                                    {content.intro3}
                                </p>
                            </div>

                            {/* Policy Sections */}
                            <div className="flex flex-col gap-8 text-gray-300 text-sm md:text-base tracking-wide leading-relaxed font-light text-left">
                                {content.sections.map((sec, idx) => (
                                    <section key={idx}>
                                        <h2 className="text-base md:text-lg font-medium text-[#EFCC88] tracking-wide font-serif mb-3">
                                            {sec.title}
                                        </h2>
                                        <div className="flex flex-col gap-3">
                                            {sec.content.map((item, itemIdx) => (
                                                <div key={itemIdx}>
                                                    {item.heading && (
                                                        <h3 className="text-sm md:text-base font-medium text-[#D59444] mb-1">
                                                            {item.heading}
                                                        </h3>
                                                    )}
                                                    <p>{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
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