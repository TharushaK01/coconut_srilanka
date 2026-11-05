import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us - Mathammana D/C Factory",
  description:
    "Unveiling Sri Lanka’s coconut bounty with over 50 years of excellence and sustainability.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-[#fcfbf9] min-h-screen">
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="relative bg-[#d4af37] py-20 px-6 md:px-12 text-left text-white overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-bg.jpg" // 🛠️ Add your background hero image in /public/images/
            alt="Calculating success, one equation at a time"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl w-full mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase drop-shadow-md">
            CALCULATING SUCCESS, <br />
            ONE EQUATION AT A TIME.
          </h1>
          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl font-light leading-relaxed drop-shadow">
            Your trusted source for top-tier coconut coir products, setting the
            bar for quality and innovation.
          </p>
        </div>
      </section>

      {/* ── 2. SUB-HEADER BANNER ───────────────────────────────────── */}
      <div className="bg-[#1b365d] py-3 text-center text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
        ASK YOUR LOCAL EXPORTER FOR M119 PRODUCTS
      </div>

      {/* ── 3. UNVEILING SRI LANKA'S COCONUT BOUNTY ─────────────────── */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[320px] flex items-center p-8 md:p-12">
          {/* Background image for the card */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/bounty-bg.jpg" // 🛠️ Add background worker image
              alt="Sri Lanka Coconut Bounty"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4 text-white">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase">
              UNVEILING SRI LANKA&apos;S <br />
              COCONUT BOUNTY
            </h2>
            <div className="w-12 h-1 bg-[#F79239] rounded-full" />
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-light">
              Mathammana D/C Factory brings the rich heritage of Sri Lankan
              coconuts straight to the global market. From carefully selected
              plantations to state-of-the-art processing, we ensure the highest
              standards of hygiene, flavor, and freshness in every single batch.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. OUR JOURNEY FROM FIRE TO EXCELLENCE ─────────────────── */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-[#222] tracking-tight">
              OUR JOURNEY FROM <br />
              FIRE TO EXCELLENCE.
            </h2>
            <div className="w-12 h-1 bg-[#F79239] rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Humble roots fueled by unrelenting dedication: the Mathammana D/C
              Factory story spans generations, evolving from primitive drying
              processes into a fully modernized milling powerhouse. Our
              commitment to quality remains forged in fire and backed by strict
              adherence to international food safety standards, ensuring
              absolute trust from our clients worldwide.
            </p>
          </div>

          {/* Founder Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-md border-4 border-white bg-slate-200">
              <Image
                src="/images/founder.jpg" // 🛠️ Founder portrait image
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Historical strip photos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "/images/history-1.jpg",
            "/images/history-2.jpg",
            "/images/history-3.jpg",
            "/images/history-4.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative h-36 rounded-lg overflow-hidden shadow-sm bg-slate-200"
            >
              <Image
                src={src}
                alt={`Historical milestone ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm text-slate-500 max-w-3xl mx-auto italic">
          The evolution of craftsmanship and tradition: following rigorous
          standards to transform raw estate yields into world-class coconut
          exports.
        </p>
      </section>

      {/* ── 5. FACTORY TIMELINE / ERAS GRID ───────────────────────── */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: "/images/era-1970.jpg", label: "1970 - 1980" },
            { img: "/images/era-1990.jpg", label: "1990 - 2000" },
            { img: "/images/era-2010.jpg", label: "2010 - 2018" },
            { img: "/images/era-present.jpg", label: "PRESENT" },
          ].map((era, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3 shadow-sm border border-stone-200 text-center space-y-3"
            >
              <div className="relative h-40 w-full rounded-lg overflow-hidden bg-slate-100">
                <Image
                  src={era.img}
                  alt={era.label}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="inline-block text-xs font-bold tracking-wider text-[#1b365d] pb-1 border-b-2 border-[#1b365d]">
                {era.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. MOSAIC IMAGE PRODUCTION GALLERY ─────────────────────── */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "/images/factory-1.jpg",
            "/images/factory-2.jpg",
            "/images/factory-3.jpg",
            "/images/factory-4.jpg",
            "/images/factory-5.jpg",
            "/images/factory-6.jpg",
            "/images/factory-7.jpg",
            "/images/factory-8.jpg",
            "/images/factory-9.jpg",
          ].map((imgSrc, idx) => (
            <div
              key={idx}
              className="relative h-56 rounded-xl overflow-hidden shadow-md bg-slate-100"
            >
              <Image
                src={imgSrc}
                alt={`Production step ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Aerial View Full Width Card */}
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg bg-slate-200">
          <Image
            src="/images/aerial-factory.jpg" // 🛠️ Aerial view of facility with solar panels
            alt="Aerial Factory View"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── 7. SUSTAINABILITY SECTION ──────────────────────────────── */}
      <section className="bg-[#1b365d] text-white py-20 px-6 text-center space-y-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-widest uppercase">
              SUSTAINABILITY
            </h2>
          </div>
          <div className="w-12 h-1 bg-[#F79239] mx-auto rounded-full" />
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Committed to eco-friendly practices, utilizing green energy sources
            like solar integration, waste-to-energy shell charcoal systems, and
            zero-waste residue processing.
          </p>
        </div>

        {/* 4 Cards Grid Inside Sustainability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pt-8">
          {[
            {
              title: "Solar Powered",
              desc: "Clean renewable energy utilized across our main milling roofs.",
            },
            {
              title: "Zero Waste",
              desc: "Every part of the coconut husk and shell is repurposed sustainably.",
            },
            {
              title: "Ethical Sourcing",
              desc: "Partnering directly with local certified organic coconut farmers.",
            },
            {
              title: "Eco Packaging",
              desc: "Recyclable multi-layer food-grade bags reducing environmental impact.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#152a4a] border border-white/10 p-6 rounded-xl text-left space-y-2"
            >
              <h3 className="font-bold text-orange-400 text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. 50 YEARS OF EXCELLENCE (BOTTOM SECTION) ─────────────── */}
      <section className="py-20 px-6 max-w-6xl mx-auto bg-[#f5f2eb]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-[#222] tracking-tight">
              50 YEARS OF EXCELLENCE
            </h2>
            <div className="w-12 h-1 bg-[#F79239] rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              For over half a century, Mathammana D/C Factory has remained a
              premier benchmark of reliability in the coconut processing
              industry. Built on family values and driven by continuous
              innovation, our journey reflects an unwavering dedication to
              delivering premium desiccated coconut and coir lines worldwide.
              Thank you for trusting us as your long-term agricultural partner.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-md border-4 border-white bg-slate-200">
              <Image
                src="/images/leader.jpg" // 🛠️ Leader portrait image
                alt="Excellence Leader"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
