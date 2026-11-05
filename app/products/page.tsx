"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-[#1b4382] selection:text-white">
      <section className="relative bg-[#d4af37] py-24 px-6 md:px-12 text-left text-white overflow-hidden min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/bg.svg"
            alt="Edible Masterpieces - Coconut Products"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/40 backdrop-brightness-95" />
        </div>
        <div className="relative z-10 max-w-2xl w-full mr-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase drop-shadow-md text-left">
            EDIBLE MASTERPIECES.
          </h1>
          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl font-light leading-relaxed drop-shadow text-left">
            Indulge in the natural goodness of coconuts with our
            sustainably-sourced products, from powders to chips and everything
            in between.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-[56px] font-extrabold uppercase tracking-wide text-[#474141]">
            EDIBLE MASTERPIECES
          </h2>
          <div className="w-16 h-1 mb-6 bg-[#F79239] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
            At Mathammana D/C Factory, we understand that every customer has
            unique preferences and requirements. That's why we offer
            <span className="font-semibold text-[#1b4382]">
              {" "}
              a wide range of customization
            </span>{" "}
            options for our coconut products. Whether you're looking for a
            specific{" "}
            <span className="font-semibold text-[#1b4382]">
              flavor, grade, size, or color,{" "}
            </span>
            we can tailor our products to meet your needs. Our team is dedicated
            to providing you with high-quality coconut delights that are
            precisely crafted to your specifications.
          </p>
        </div>

        {/* Feature Icon Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
          {[
            {
              title: "FLAVOUR",
              desc: "Explore and savor a variety of flavors, from sweet to spicy, in your products.",
              icon: "/products/flavor.svg",
            },
            {
              title: "GRADE",
              desc: "Select the right grade, from standard to premium, ensuring top quality for your product.",
              icon: "/products/grade.svg",
            },
            {
              title: "SIZE",
              desc: "Choose the right size, from finely shredded to large chunks, for ideal texture and appearance.",
              icon: "/products/size.svg",
            },
            {
              title: "COLOUR",
              desc: "Boost your product's visual appeal with our natural colors, adding vibrancy and depth.",
              icon: "/products/color.svg",
            },
          ].map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Icon Wrapper Container */}
              <div className="w-16 h-16 flex items-center justify-center mb-3 overflow-hidden relative">
                <Image
                  src={badge.icon}
                  alt={badge.title}
                  width={48}
                  height={48}
                  className="object-contain w-48 h-48"
                />
              </div>

              <h3 className="font-bold text-sm text-[#1b4382] mb-1">
                {badge.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-tight">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4. MAIN PRODUCTS GRID ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-[56px] font-extrabold uppercase text-[#474141] tracking-wider">
            MAIN PRODUCTS
          </h2>
          <div className="w-16 h-1 mb-6 bg-[#F79239] mx-auto rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "CHIPS", image: "/products/CHIPS.svg" },
            { name: "CHIPS", image: "/products/LONGTHREAD.svg" },
            {
              name: "TOASTED FINE",
              image: "/products/TOASTEDFINE.svg",
            },
            { name: "SUGAR COATED", image: "/products/SUGARCOATED.svg" },
            {
              name: "SALT COATED",
              image: "/products/SALTCOATED.svg",
            },
            {
              name: "THREADS",
              image: "/products/THREADS.svg",
            },
            {
              name: "FULL TOASTED CHIPS",
              image: "/products/THREADS.svg",
            },
            {
              name: "CHIPS WITH PARINGS",
              image: "/products/CHIPSWITHPARINGS.svg",
            },
            {
              name: "CHIPLET",
              image: "/products/CHIPLET.svg",
            },
          ].map((prod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-stone-200 flex flex-col group"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center bg-white border-t border-stone-100">
                <span className="font-bold text-xs sm:text-sm text-slate-800 tracking-wide">
                  {prod.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Brochure Download Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() =>
              window.open(
                "/pdfs/Mathammana-DC-Factory-Brocher-1.0.pdf",
                "_blank",
              )
            }
            className="px-8 py-3.5 bg-[#1b4382] hover:bg-[#143263] text-white font-semibold text-sm rounded-full shadow-lg transition-all duration-200"
          >
            Download Our Production Brochure
          </button>
        </div>
      </section>

      {/* ================= 5. WE ALSO PROVIDE ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-10 bg-white/60 rounded-3xl my-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-[56px] font-extrabold uppercase text-[#474141] tracking-wider">
            WE ALSO PROVIDE
          </h2>
          <div className="w-16 h-1 mb-6 bg-[#F79239] mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "COCONUT PARINGS", img: "/products/COCONUTPARINGS.svg" },
            {
              name: "REJECTED KERNEL WITH AND WITHOUT PAIRING",
              img: "/products/REJECTEDKERNELWITHANDWITHOUTPAIRING.svg",
            },
            { name: "COCONUT SHELLS", img: "/products/COCONUTSHELLS.svg" },
            { name: "COCONUT WATER", img: "/products/COCONUTWATER.svg" },
            { name: "COCONUT COIR", img: "/products/COCONUTCOIR.svg" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex w-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="relative h-44 w-full bg-slate-100">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <span className="font-bold text-xs text-slate-700">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 6. PACKAGING EXCELLENCE ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content (Span 5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-[46px] font-extrabold uppercase text-[#474141] tracking-wider leading-tight">
              PACKAGING EXCELLENCE.
            </h2>
            <div className="w-16 h-1 mb-6 bg-[#F79239] mr-auto rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Mathammana D/C Factory, packaging is a critical step in
              preserving product freshness and quality. We utilize multi-layer
              food-grade packaging to protect our desiccated coconut products
              against moisture and contaminants, ensuring they arrive at your
              facility in pristine condition.
            </p>
          </div>

          {/* Right Column: Asymmetric Image Grid (Span 7 cols on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Left Column Stack */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-48 sm:h-56 overflow-hidden shadow-md bg-slate-100">
                <Image
                  src="/products/1.svg"
                  alt="Packaging 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 sm:h-72 overflow-hidden shadow-md bg-slate-100">
                <Image
                  src="/products/3.svg"
                  alt="Packaging 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column Stack */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-64 sm:h-72 overflow-hidden shadow-md bg-slate-100">
                <Image
                  src="/products/2.svg"
                  alt="Packaging 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 sm:h-56  overflow-hidden shadow-md bg-slate-100">
                <Image
                  src="/products/4.svg"
                  alt="Packaging 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. INQUIRIES & CONTACT SECTION ================= */}
      <section className=" ">
        <div
          className="relative py-20 bg-cover bg-center bg-no-repeat text-white"
          style={{ backgroundImage: `url('/how-can-we-help.PNG')` }}
        >
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-[56px] font-extrabold uppercase text-[#474141] text-center">
              have questions about our products?
            </h2>
            <p className="text-[#474141] text-sm sm:text-[30px] font-extrabold text-center">
              WANT TO DISCUSS A CUSTOMIZED ORDER?
            </p>
            <div className="w-16 h-1 mb-6 bg-[#F79239] mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Feel free to contact us! Our team is here to assist you with any
              inquiries you may have. Reach out to us via phone, email, or
              through our online contact form. We look forward to hearing from
              you!
            </p>
          </div>

          {/* Contact Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#1b4382]" />
              <a
                href="mailto:info@coconutsrilanka.com"
                className="font-semibold text-sm sm:text-base hover:underline text-[#1b4382]"
              >
                info@coconutsrilanka.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-[#1b4382]" />
              <div className="flex flex-col text-left font-semibold text-sm sm:text-base text-[#1b4382]">
                <a href="tel:+94112296547" className="hover:underline">
                  +94 112296547
                </a>
                <a href="tel:+94774181573" className="hover:underline">
                  +94 774181573
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
