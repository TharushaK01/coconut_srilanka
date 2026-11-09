"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "UNVEILING SRI LANKA'S COCONUT BOUNTY",
    description:
      "At Mathammana D/C Factory, we're on a mission to showcase the unmatched quality of coconut creations from Sri Lanka's rich soil and tropical climate. Our goal is to offer our clients, both local and international, products they can truly be proud of. Through our commitment to excellence and innovation, we aim to elevate Sri Lanka's coconut industry globally.",
    bgImage: "/images/bounty-bg.svg",
  },
  {
    id: 2,
    title: "Diversifying Delights, Leading the Industry",
    description:
      "Our vision at Mathammana D/C Factory is to broaden our product line, introducing a diverse range of flavors that captivate the taste buds of our customers. By doing so, we strive to maintain our position as the foremost manufacturer in the industry, setting the standard for quality and innovation.",
    bgImage: "/images/processing-bg.png",
  },
];

export default function AboutUsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[currentIndex];
  return (
    <div className="bg-[#fcfbf9] min-h-screen">
      <section className="relative bg-[#d4af37] py-20 px-6 md:px-12 text-left text-white overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-bg.svg"
            alt="Calculating success, one equation at a time"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl w-full mr-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase drop-shadow-md">
            CALCULATING SUCCESS, <br />
            ONE EQUATION AT A TIME.
          </h1>
          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl font-light leading-relaxed drop-shadow">
            Your trusted source for top-tier coconut-based products, setting the
            bar for quality and innovation.
          </p>
          <Image
            src="/images/Coconut-sign.svg"
            alt="Coconut sign"
            width={48}
            height={48}
            className="object-center"
          />
        </div>
      </section>

      {/* ── 2. SUB-HEADER BANNER ───────────────────────────────────── */}
      <div className="bg-[#ffffff] py-3 text-center text-[#1B4785] text-xs sm:text-[48px] font-extrabold tracking-tight uppercase">
        ASK YOUR LOCAL EXPORTER FOR M119 PRODUCTS
      </div>

      {/* ── 3. UNVEILING SRI LANKA'S COCONUT BOUNTY ─────────────────── */}
      <section className="relative w-full min-h-[480px] flex items-center justify-start overflow-hidden py-16 px-6 md:px-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out">
          <Image
            src={current.bgImage}
            alt={current.title}
            fill
            priority
            className="object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-slate-900/20" />
        </div>

        {/* Left Navigation Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-cyan-800 shadow-md flex items-center justify-center hover:bg-slate-100 transition-colors z-20"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Left-Aligned White Content Card Box */}
        <div className="relative z-10 w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 transition-all duration-500 ease-in-out ml-4 md:ml-12">
          <h2 className="text-xl sm:text-2xl font-black text-[#1B4785] tracking-wide uppercase leading-tight mb-4">
            {current.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            {current.description}
          </p>
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-cyan-800 shadow-md flex items-center justify-center hover:bg-slate-100 transition-colors z-20"
        >
          <ChevronRight className="w-6 h-6 stroke-[3]" />
        </button>
      </section>

      {/* ── 4. OUR JOURNEY FROM FIRE TO EXCELLENCE ─────────────────── */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl sm:text-[56px] font-extrabold uppercase text-[#474141] tracking-tight">
              OUR JOURNEY FROM <br />
              FIRE TO EXCELLENCE.
            </h2>
            <div className="w-12 h-1 bg-[#F79239] rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Founded over five decades ago, Mathammana D/C Factory began under
              the lease of Hector Leslie Samaranayake, later transitioning to
              full ownership. With a third-generation workforce, we've grown to
              meet increased export demands, now processing over three times our
              original capacity. Despite a devastating fire in October 2019,
              we've rebuilt with cutting-edge technology and engineering,
              ensuring the highest safety standards are met. Today, our factory
              stands as a testament to our unwavering commitment to excellence.
            </p>
          </div>

          {/* Founder Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-80 overflow-hidden shadow-md border-4 border-white bg-slate-200">
              <Image
                src="/images/founder.svg"
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
            "/images/history-1.svg",
            "/images/history-2.svg",
            "/images/history-3.svg",
            "/images/history-4.svg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative h-36 overflow-hidden shadow-sm bg-slate-200"
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

        <p className="text-center text-xs sm:text-sm text-slate-500 max-w-3xl mx-auto">
          With hard work and dedication, Mathammana D/C Factory has become a
          leading producer of coconut-based products, offering a diverse range
          of options to customers worldwide. Our commitment to quality, safety,
          and customer satisfaction remains unwavering as we continue to
          innovate and grow..
        </p>
      </section>

      {/* ── 5. FACTORY TIMELINE / ERAS GRID ───────────────────────── */}
      <section className="py-12 px-6 max-w-9xl mx-auto bg-[#1B4785]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: "/images/era-1970.svg", label: "1970 - 2010" },
            { img: "/images/era-1990.svg", label: "2010 - 2014" },
            { img: "/images/era-2010.svg", label: "2014 - 2020" },
            { img: "/images/era-present.svg", label: "PRESENT" },
          ].map((era, idx) => (
            <div
              key={idx}
              className="bg-white p-3 border border-stone-200 text-center space-y-3"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                <Image
                  src={era.img}
                  alt={era.label}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="inline-block text-xs font-bold tracking-wider text-[#1b365d] pb-1">
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
            "/images/factory-1.svg",
            "/images/factory-2.svg",
            "/images/factory-3.svg",
            "/images/factory-4.svg",
            "/images/factory-5.svg",
            "/images/factory-6.svg",
            "/images/factory-7.svg",
            "/images/factory-8.svg",
            "/images/factory-9.svg",
          ].map((imgSrc, idx) => (
            <div
              key={idx}
              className="relative h-56 overflow-hidden shadow-md bg-slate-100"
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
        <div className="relative h-72 sm:h-96 overflow-hidden shadow-lg bg-slate-200">
          <Image
            src="/images/aerial-factory.png"
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
            <div className="flex items-center justify-between max-w-6xl mx-auto py-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-widest uppercase">
                SUSTAINABILITY
              </h2>
              <div>
                <img
                  src="/images/sustainability.png"
                  alt="Sustainability"
                  width={48}
                  height={48}
                  className="w-[48] h-[48]"
                />
              </div>
            </div>
          </div>
          <div className="w-12 h-1 bg-[#F79239] mx-auto rounded-full" />
        </div>

        {/* 4 Cards Grid Inside Sustainability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8">
          {[
            {
              title: "Wastewater treatment plant",
              desc: "Our wastewater treatment plant system ensures environmentally responsible processing at our factory, maintaining high standards of sustainability and eco friendly waste.",
            },
            {
              title: "Biogas Plant",
              desc: "Our innovative food waste biogas plant at Mathammana DC factory converts food waste into renewable energy used in our labs underscoring our commitment to sustainability and eco-friendly practices.",
            },
            {
              title: "Water Purification Plant",
              desc: "Our desiccated coconut factory utilizes a cutting-edge UV purification water treatment plant to ensure the highest standards of water quality and safety",
            },
            {
              title: "Solar Panel Plant",
              desc: "Our factory is powered by a 280kW solar panel system, showcasing our dedication to renewable energy and reducing our carbon footprint.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#ffffff] p-6 text-center space-y-2">
              <h3 className="font-bold text-[#474141] text-sm uppercase">
                {item.title}
              </h3>
              <p className="text-xs text-[#474141] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. 50 YEARS OF EXCELLENCE (BOTTOM SECTION) ─────────────── */}
      <section className="py-20 px-6 max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-3xl sm:text-[56px] font-extrabold uppercase text-[#474141] tracking-tight">
              50 YEARS OF EXCELLENCE
            </h2>
            <div className="w-12 h-1  rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              In 1992, Mrs. Annie Rita Samaranayake, managing the factory during
              her husband's illness, was mandated by the Coconut Development
              Authority (CDA) to establish a laboratory for quality control.
              With CDA's guidance, she initiated a small laboratory with
              essential equipment. Today, Mathammana D/C Factory upholds this
              legacy with in-house certified technicians using state-of-the-art
              machinery to ensure product safety and consumer satisfaction. In
              memory of Annie Rita Samaranayake, celebrating our Golden
              Anniversary.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-80 overflow-hidden shadow-m">
              <Image
                src="/images/leader.svg"
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
