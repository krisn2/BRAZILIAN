"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogPage() {
    const { t } = useLanguage();

    const BLOG_POSTS = [
        {
            id: 1,
            title: t("blog_p1_title"),
            date: "May 18, 2024",
            category: t("blog_cat_strategies"),
            description: t("blog_p1_desc"),
            image: "/burracoAsset/blog-1-image.svg",
        },
        {
            id: 2,
            title: t("blog_p2_title"),
            date: "May 12, 2024",
            category: t("blog_cat_updates"),
            description: t("blog_p2_desc"),
            image: "/burracoAsset/blog-2-image.svg",
        },
        {
            id: 3,
            title: t("blog_p3_title"),
            date: "May 8, 2024",
            category: t("blog_cat_tips"),
            description: t("blog_p3_desc"),
            image: "/burracoAsset/blog-3-image.svg",
        },
    ];

    const CATEGORIES = [
        { name: t("blog_cat_all"), count: 18, icon: "/burracoAsset/blog-all-post.png" },
        { name: t("blog_cat_updates"), count: 6, icon: "/burracoAsset/blog-game-upfate.png" },
        { name: t("blog_cat_strategies"), count: 5, icon: "/burracoAsset/blog-stastgies.png" },
        { name: t("blog_cat_tips"), count: 4, icon: "/burracoAsset/blog-tips.png" },
        { name: t("blog_cat_community"), count: 3, icon: "/burracoAsset/blog-community.png" },
    ];

    const POPULAR_POSTS = [
        {
            id: 1,
            title: t("blog_pop1_title"),
            date: "May 10, 2024",
            image: "/burracoAsset/blog-post-1.png",
        },
        {
            id: 2,
            title: t("blog_pop2_title"),
            date: "April 25, 2024",
            image: "/burracoAsset/blog-post-2.png",
        },
        {
            id: 3,
            title: t("blog_pop3_title"),
            date: "April 15, 2024",
            image: "/burracoAsset/blog-post-3.png",
        },
    ];

    // Exact gold text gradient style
    const goldTextStyle = {
        background: "linear-gradient(180deg, #EFCC88 14.94%, #D59444 43.34%, #B86B1D 68.34%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block"
    };

    return (
        <div className="bg-[#060503] text-[#dcd1bc] min-h-screen font-sans antialiased selection:bg-[#cda052] selection:text-black flex flex-col justify-between overflow-x-hidden">
            <div>
                <Navbar />

                {/* 1. HERO SECTION — responsive with proper mobile height */}
                <section className="relative w-full flex justify-center mt-[1px]">
                    <div
                        className="relative select-none overflow-hidden w-full max-w-[1535px] min-h-[180px] sm:min-h-[220px] md:min-h-0"
                        style={{ aspectRatio: "1535 / 260" }}
                    >
                        <Image
                            src="/burracoAsset/Blog-hero.svg"
                            alt="Blog Hero Banner"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                        {/* Overlay text */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-[202px]">
                            {/* Heading */}
                            <h1
                                className="font-serif tracking-widest font-bold uppercase drop-shadow-md text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4"
                                style={goldTextStyle}
                            >
                                {t("blog_title")}
                            </h1>

                            {/* Golden Line SVG Divider */}
                            <div
                                className="bg-center bg-no-repeat bg-contain w-[160px] sm:w-[280px] md:w-[338px] h-[12px] sm:h-[18px] mb-2 sm:mb-4"
                                style={{ backgroundImage: `url('/burracoAsset/gloden-line.svg')` }}
                            />

                            <p className="text-[10px] sm:text-sm md:text-base text-gray-300 max-w-md drop-shadow leading-snug">
                                {t("blog_hero_desc")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. BODY CONTENT LAYOUT */}
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start justify-center">

                        {/* LEFT AREA: CARD FEED */}
                        <div className="flex-1 w-full lg:max-w-[788px] space-y-6 sm:space-y-8">
                            {BLOG_POSTS.map((post) => (
                                <article
                                    key={post.id}
                                    className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-[3px] border border-[#544434]/20 overflow-hidden group transition-all duration-300"
                                    style={{
                                        width: "100%",
                                        minHeight: "140px",
                                        backgroundImage: `url('/burracoAsset/blog-list-bg.svg')`,
                                        backgroundSize: "100% 100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                >
                                    {/* Post Graphic Thumbnail */}
                                    <div
                                        className="relative shrink-0 rounded-sm overflow-hidden border border-[#544434]/30 w-full sm:w-[202px] h-[180px] sm:h-[152px]"
                                    >
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Main Text Content */}
                                    <div className="flex flex-col justify-center flex-grow space-y-2 relative z-10 py-1 w-full">
                                        <h2 className="text-base sm:text-lg md:text-xl font-serif font-semibold transition-colors duration-200 cursor-pointer">
                                            <Link href={`/blog/${post.id}`} style={goldTextStyle}>{post.title}</Link>
                                        </h2>

                                        <div className="flex items-center text-xs text-gray-400 space-x-4">
                                            <span>{post.date}</span>
                                            <span className="w-1.5 h-1.5 bg-[#E5B962]/40 rounded-full"></span>
                                            <div className="flex items-center text-[#E5B962]">
                                                <span className="mr-1">📁</span>
                                                <span>{post.category}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-300 leading-relaxed font-light line-clamp-2">
                                            {post.description}
                                        </p>

                                        <div className="pt-1">
                                            <Link
                                                href={`/blog/${post.id}`}
                                                className="inline-flex items-center text-xs font-bold tracking-widest hover:text-white transition-colors uppercase"
                                                style={goldTextStyle}
                                            >
                                                {t("blog_read_more")}
                                                <span className="ml-1 text-[10px] text-gray-400 group-hover:translate-x-1 transition-transform">❯</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}

                            {/* SELECTION PAGINATION PANEL */}
                            <div className="flex items-center justify-start space-x-2 pt-4">
                                <button className="w-8 h-8 flex items-center justify-center text-xs border border-[#E5B962] bg-[#E5B962] text-black font-bold rounded-sm">
                                    1
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center text-xs border border-[#544434]/40 bg-[#0C0805] hover:border-[#E5B962] hover:text-[#E5B962] transition-all rounded-sm">
                                    2
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center text-xs border border-[#544434]/40 bg-[#0C0805] hover:border-[#E5B962] hover:text-[#E5B962] transition-all rounded-sm">
                                    3
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center text-xs border border-[#544434]/40 bg-[#0C0805] hover:border-[#E5B962] hover:text-[#E5B962] transition-all rounded-sm">
                                    ❯
                                </button>
                            </div>
                        </div>

                        {/* RIGHT AREA: NAVIGATION SIDEBAR — now responsive width */}
                        <aside
                            className="shrink-0 pt-8 sm:pt-10 pb-8 sm:pb-10 px-5 sm:px-8 flex flex-col justify-start rounded-sm w-full lg:w-[382px]"
                            style={{
                                backgroundImage: `url('/burracoAsset/blog-catrgory-bg.svg')`,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* CATEGORIES WIDGET */}
                            <div className="w-full mb-8">
                                <h3 className="text-xs font-bold tracking-widest uppercase pb-2 mb-4 border-b border-[#544434]/30" style={goldTextStyle}>
                                    {t("blog_categories_title")}
                                </h3>
                                <ul className="space-y-0">
                                    {CATEGORIES.map((cat, idx) => (
                                        <li key={idx} className="border-b border-[#544434]/20 last:border-b-0">
                                            <Link
                                                href="#"
                                                className="flex items-center justify-between text-[13px] py-3 text-[#dcd1bc]/80 hover:text-[#E5B962] transition-all group"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div
                                                        className="relative shrink-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity w-5 h-5"
                                                    >
                                                        <img
                                                            src={cat.icon}
                                                            alt={cat.name}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                    <span className="font-medium tracking-wide">{cat.name}</span>
                                                </div>
                                                <span className="text-xs text-gray-500 font-mono">
                                                    {cat.count}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* POPULAR POSTS WIDGET */}
                            <div className="w-full">
                                <h3 className="text-xs font-bold tracking-widest uppercase pb-2 mb-4 border-b border-[#544434]/30" style={goldTextStyle}>
                                    {t("blog_popular_posts_title")}
                                </h3>
                                <div className="space-y-0">
                                    {POPULAR_POSTS.map((pop, idx) => (
                                        <div key={idx} className="border-b border-[#544434]/20 last:border-b-0 py-3 first:pt-0">
                                            <Link
                                                href="#"
                                                className="flex gap-4 items-center group cursor-pointer"
                                            >
                                                <div
                                                    className="relative shrink-0 border border-[#544434]/30 bg-black/40 rounded-sm overflow-hidden w-[72px] h-[54px]"
                                                >
                                                    <Image
                                                        src={pop.image}
                                                        alt={pop.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="space-y-1 flex-1 min-w-0">
                                                    <h4 className="text-xs font-medium text-[#dcd1bc] group-hover:text-[#E5B962] transition-colors line-clamp-2 leading-tight">
                                                        {pop.title}
                                                    </h4>
                                                    <p className="text-[10px] text-gray-500 flex items-center gap-1">
                                                        <span>📅</span> {pop.date}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}