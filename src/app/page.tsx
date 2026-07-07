import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FeatureRow from "@/components/sections/Features";
import PageFooterSection from "@/components/sections/PageFooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060503] flex flex-col justify-between overflow-x-hidden">
      {/* Top Section */}
      <div>
        <Navbar />

        {/* Banner Section Container matching your canvas layout scale */}
        <div className="relative w-full flex justify-center">
          <div
            className="relative select-none"
            style={{
              width: "1534px",
              height: "359px",
              marginTop: "1px", // Seamless spacing directly below Navbar border edge
            }}
          >
            {/* Background Banner Image */}
            <Image
              src="/burracoAsset/hero.svg"
              alt="Baloot Royal Experience Banner"
              fill
              priority
              className="object-cover object-right md:object-center pointer-events-none"
            />

            {/* ================= HERO TEXT & BADGES OVERLAY ================= */}
            <div
              className="absolute flex flex-col justify-center"
              style={{
                left: "83px", // Coordinates locked directly to the left grid margin
                top: "0px",
                width: "550px",
                height: "100%",
                zIndex: 10,
              }}
            >
              {/* Subheading text asset image: The royal card game.png */}
              <div style={{ width: "323px", height: "26px", marginBottom: "4px" }}>
                <img
                  src="/burracoAsset/The-royal-card-game.svg"
                  alt="The Royal Card Game"
                  className="w-full h-full object-contain object-left"
                />
              </div>

              {/* Main Heading text asset image: experience baloot.png */}
              <div style={{ width: "492px", height: "46px", marginBottom: "12px" }}>
                <img
                  src="/burracoAsset/experience-baloot.svg"
                  alt="Experience Baloot"
                  className="w-full h-full object-contain object-left"
                />
              </div>

              {/* Description Body Text */}
              <p
                className="text-[#A49A8A] font-normal leading-relaxed text-sm tracking-wide"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  maxWidth: "460px",
                  marginBottom: "24px",
                  color: '#fff',
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)"
                }}
              >
                Baloot is a classic trick-taking card game <br />
                loved by millions. Play, strategize, and <br />
                compete with players worldwide.
              </p>

              {/* Store Badges Action Row - Fixed Aspect Ratio Proportions */}
              <div className="flex items-center gap-3">
                {/* Apple App Store Button */}
                <a href="#" className="block hover:brightness-110">
                  <img
                    src="/burracoAsset/playstore.png"
                    alt="Google Play"
                    className="w-[140px] h-auto"
                  />
                </a>

                <a href="#" className="block hover:brightness-110">
                  <img
                    src="/burracoAsset/apple.png"
                    alt="App Store"
                    className="w-[110px] h-auto"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <FeatureRow />
      <PageFooterSection />
      {/* Bottom Section */}
      <Footer />
    </div>
  );
}