import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const BLOG_POSTS = [
    {
        id: 1,
        title: "How to Control the Table Like a Pro",
        date: "May 18, 2024",
        category: "Strategies",
        description: "Learn key tactics to dominate the table and keep your opponents guessing.",
        image: "/burracoAsset/blog-1-image.svg",
    },
    {
        id: 2,
        title: "New Features Coming to Baloot",
        date: "May 12, 2024",
        category: "Game Updates",
        description: "We're excited to introduce new features designed to elevate your experience.",
        image: "/burracoAsset/blog-2-image.svg",
    },
    {
        id: 3,
        title: "Common Mistakes and How to Avoid Them",
        date: "May 8, 2024",
        category: "Tips & Tricks",
        description: "Avoid typical errors players make. Learn smart plays that could be costing you the game.",
        image: "/burracoAsset/blog-3-image.svg",
    },
];

const CATEGORIES = [
    { name: "All Posts", count: 18, icon: "/burracoAsset/blog-all-post.png", width: 26, height: 22 },
    { name: "Game Updates", count: 6, icon: "/burracoAsset/blog-game-upfate.png", width: 30, height: 30 },
    { name: "Strategies", count: 5, icon: "/burracoAsset/blog-stastgies.png", width: 30, height: 30 },
    { name: "Tips & Tricks", count: 4, icon: "/burracoAsset/blog-tips.png", width: 30, height: 29 },
    { name: "Community", count: 3, icon: "/burracoAsset/blog-community.png", width: 30, height: 24 },
];

const POPULAR_POSTS = [
    {
        id: 1,
        title: "Top 5 Tips for Beginners",
        date: "May 10, 2024",
        image: "/burracoAsset/blog-post-1.png",
        width: 89,
        height: 67.5
    },
    {
        id: 2,
        title: "Baloot Tournament Highlights",
        date: "April 25, 2024",
        image: "/burracoAsset/blog-post-2.png",
        width: 89,
        height: 67.5
    },
    {
        id: 3,
        title: "Understanding Trump in Baloot",
        date: "April 15, 2024",
        image: "/burracoAsset/blog-post-3.png",
        width: 89,
        height: 67.5
    },
];

export default function BlogPage() {
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

                {/* 1. HERO SECTION */}
                <section className="relative w-full flex justify-center mt-[1px]">
                    <div
                        className="relative select-none overflow-hidden"
                        style={{
                            width: "1535px",
                            height: "260px",
                        }}
                    >
                        <Image
                            src="/burracoAsset/Blog-hero.svg"
                            alt="Blog Hero Banner"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                        {/* Overlay text */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-transparent">
                            {/* Heading */}
                            <h1
                                className="font-serif tracking-widest font-bold uppercase drop-shadow-md flex items-center justify-start absolute text-4xl md:text-5xl"
                                style={{
                                    ...goldTextStyle,
                                    width: '250px', // Increased width slightly to prevent any potential wrapping
                                    top: '40px',   // Slightly adjusted top to compensate for the natural height auto-scaling
                                    left: '300px'  // Aligns left edge of heading to middle of golden line (202px + 169px)
                                }}
                            >
                                Blog
                            </h1>

                            {/* Golden Line SVG Divider */}
                            <div
                                className="absolute bg-center bg-no-repeat bg-contain"
                                style={{
                                    backgroundImage: `url('/burracoAsset/gloden-line.svg')`,
                                    width: '338px',
                                    height: '18px',
                                    top: '108px', // 202px (canvas) - 94px (navbar) = 108px
                                    left: '202px'
                                }}
                            />

                            <p className="absolute text-sm md:text-base text-gray-300 max-w-md drop-shadow top-[140px] left-[202px]">
                                Tips, strategies, updates, and stories from the world of Baloot. Stay informed and improve your game.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. BODY CONTENT LAYOUT */}
                <div className="max-w-[1440px] mx-auto px-4 md:px-20 py-16">
                    <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">

                        {/* LEFT AREA: CARD FEED */}
                        <div className="flex-1 max-w-[788px] w-full space-y-8">
                            {BLOG_POSTS.map((post) => (
                                <article
                                    key={post.id}
                                    className="relative flex flex-col sm:flex-row items-center gap-6 p-4 rounded-[3px] border border-[#544434]/20 overflow-hidden group transition-all duration-300"
                                    style={{
                                        width: "100%",
                                        minHeight: "167px",
                                        backgroundImage: `url('/burracoAsset/blog-list-bg.svg')`,
                                        backgroundSize: "100% 100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                >
                                    {/* Post Graphic Thumbnail */}
                                    <div
                                        className="relative shrink-0 rounded-sm overflow-hidden border border-[#544434]/30"
                                        style={{
                                            width: "202px",
                                            height: "152px",
                                        }}
                                    >
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Main Text Content */}
                                    <div className="flex flex-col justify-center flex-grow space-y-2 relative z-10 py-1 pr-4">
                                        <h2 className="text-lg md:text-xl font-serif font-semibold transition-colors duration-200 cursor-pointer">
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
                                                Read More
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

                        {/* RIGHT AREA: NAVIGATION SIDEBAR */}
                        <aside
                            className="shrink-0 pt-10 pb-10 px-8 flex flex-col justify-start rounded-sm"
                            style={{
                                width: "382px",
                                minHeight: "590.5px",
                                backgroundImage: `url('/burracoAsset/blog-catrgory-bg.svg')`,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* CATEGORIES WIDGET */}
                            <div className="w-full mb-8">
                                <h3 className="text-xs font-bold tracking-widest uppercase pb-2 mb-4 border-b border-[#544434]/30" style={goldTextStyle}>
                                    Categories
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
                                                        className="relative shrink-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
                                                        style={{
                                                            width: `20px`, // Slightly normalized size for cleaner alignment
                                                            height: `20px`,
                                                        }}
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
                                    Popular Posts
                                </h3>
                                <div className="space-y-0">
                                    {POPULAR_POSTS.map((pop, idx) => (
                                        <div key={idx} className="border-b border-[#544434]/20 last:border-b-0 py-3 first:pt-0">
                                            <Link
                                                href="#"
                                                className="flex gap-4 items-center group cursor-pointer"
                                            >
                                                <div
                                                    className="relative shrink-0 border border-[#544434]/30 bg-black/40 rounded-sm overflow-hidden"
                                                    style={{
                                                        width: `72px`,  // Adjusted closer to the visual scale of Image 2
                                                        height: `54px`,
                                                    }}
                                                >
                                                    <Image
                                                        src={pop.image}
                                                        alt={pop.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="space-y-1 flex-1">
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