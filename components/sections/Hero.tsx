"use client";
import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import {
  ChevronRight,
  Play,
  ShieldCheck,
  Award,
  CheckCircle,
  Heart,
  Zap,
  Activity,
  Sparkles,
  Droplet,
  Globe,
  ExternalLink,
  Info,
} from "lucide-react";
import { url } from "inspector";
export default function CoconutLandingPage() {
  // Slider State for Vertical Slider Section
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideData = [
    {
      id: 0,
      title: "NATURAL COCONUT CHIPS",
      description:
        "Savor the irresistible crunch and natural goodness of our coconut chips, delivering a delicious snacking experience with every bite.",
      buttonText: "View Our Coconut Chips",
      url: "/products",
      image: "/product-chips.svg",
      alt: "Natural Coconut Chips",
      grades: null,
    },
    {
      id: 1,
      title: "TOASTED COCONUT CHIPS",
      description:
        "Indulge in the irresistible crunch and rich flavors of our toasted coconut chips, elevating snacking to a whole new level of deliciousness.",
      url: "/products",
      buttonText: "View Our Toasted Chips",
      image: "/product-toasted.svg",
      alt: "Toasted Coconut Chips",
      grades: null,
    },
    {
      id: 2,
      title: "COCONUT POWDER",
      description:
        "Elevate your recipes with our versatile coconut powder (Fine grade), a burst of tropical goodness in every dish.",
      url: "/products",
      buttonText: "View Our Coconut Powder",
      image: "/product-powder.svg",
      alt: "Coconut Powder",
      grades: null,
    },
    {
      id: 3,
      title: "DESICCATED COCONUT",
      description:
        "Enhance your recipes with our premium desiccated coconut, bringing a taste of the tropics to every bite.",
      url: "/products",
      buttonText: "View Our Desiccated Coconut",
      image: "/product-desiccated.svg",
      alt: "Desiccated Coconut",
      grades: [
        "Fine",
        "Flakes",
        "Medium",
        "Shredded (Long/Short)",
        "Chips",
        "Chiplet",
        "Thread (Long/Short)",
      ],
    },
  ];

  // Track scroll position inside the tall container to update slides
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight =
        containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;

      if (containerHeight <= 0) return;

      if (scrolled >= 0 && scrolled <= containerHeight) {
        const progress = scrolled / containerHeight;
        const newSlide = Math.min(
          Math.floor(progress * slideData.length),
          slideData.length - 1,
        );
        setActiveSlide(newSlide);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slideData.length]);

  const currentSlide = slideData[activeSlide];
  // Certificates Data
  interface CertificateItem {
    name: string;
    code: string;
    image: string;
    desc: string;
    pdf?: string;
    url?: string;
  }

  interface CertificateCategory {
    category: string;
    items: CertificateItem[];
  }
  const certificateCategories: CertificateCategory[] = [
    {
      category: "Certified by",
      items: [
        {
          name: "BRCGS Food Safety",
          code: "BRCGS",
          image: "/images/cert-brcgs.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/cert-brcgs.pdf",
        },
        {
          name: "EU Organic Certification",
          code: "EU ORGANIC",
          image: "/images/cert-eu-organic.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/cert-eu-organic.pdf",
        },
        {
          name: "USDA Organic",
          code: "USDA",
          image: "/images/cert-usda.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/cert-usda.pdf",
        },
        {
          name: "Fairtrade Certified",
          code: "FAIRTRADE",
          image: "/images/cert-fairtrade.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/cert-fairtrade.pdf",
        },
        {
          name: "Kosher Certified",
          code: "KOSHER",
          image: "/images/cert-kosher.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/cert-kosher.pdf",
        },
        {
          name: "Halal Certified",
          code: "HALAL",
          image: "/images/cert-halal.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/cert-halal.pdf",
        },
        {
          name: "Sedex SMETA",
          code: "SEDEX",
          image: "/images/cert-sedex.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/cert-sedex.pdf",
        },
        {
          name: "Control Union",
          code: "CONTROL UNION",
          image: "/images/cert-controlunion.svg",
          desc: "Click here to see the certificate",
          url: "https://www.sedex.com/",
        },
        {
          name: "iso14001 Certified",
          code: "iso14001",
          image: "/images/iso14001.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/iso14001.pdf",
        },
        {
          name: "edb",
          code: "edb",
          image: "/images/edb.svg",
          desc: "Click here to see the certificate",
          url: "https://www.srilankabusiness.com/exporters-directory/company-profiles/mathammana-dc-mills-pvt-ltd/",
        },
        {
          name: "iso14064",
          code: "iso14064",
          image: "/images/iso14064.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/iso14064.pdf",
        },
      ],
    },
    {
      category: "VALIDATED BY",
      items: [
        {
          name: "controlunion",
          code: "controlunion",
          image: "/images/controlunion.svg",
          desc: "Click here to see the certificate",
          pdf: "/pdfs/controlunion.pdf",
        },
        {
          name: "sgs",
          code: "sgs",
          image: "/images/sgs.svg",
          desc: "Click here to see the certificate",
          url: "https://www.sgs.com/en",
        },
        {
          name: "bureau",
          code: "bureau",
          image: "/images/bureau.svg",
          desc: "Click here to see the certificate",
          url: "https://group.bureauveritas.com/",
        },
      ],
    },
    {
      category: "APPROVED BY",
      items: [
        {
          name: "Control Union Certifications",
          code: "CU CERT",
          image: "/images/cda.svg",
          desc: "Click here to see the certificat",
          pdf: "/pdfs/controlunion.pdf",
        },
        {
          name: "SGS Testing & Inspection",
          code: "SGS",
          image: "/images/gm.svg",
          desc: "Click here to see the certificat",
          url: "http://goodmarket.global/",
        },
      ],
    },
  ];

  // Partners List
  const partners = [
    { name: "DNV GL", logo: "/logos/con_coco.png" },
    { name: "EKP Global", logo: "/logos/CBL.png" },
    { name: "Eurofins", logo: "/logos/rancrisp.png" },
    { name: "Intertek", logo: "/logos/exp.png" },
    { name: "TÜV SÜD", logo: "/logos/aa.png" },
    { name: "Ceylon Chamber", logo: "/logos/senikma.png" },
    { name: "DNV GL", logo: "/logos/als.png" },
    { name: "EKP Global", logo: "/logos/mufadda.png" },
    { name: "Eurofins", logo: "/logos/srs-fruit-n-spices-logo.png" },
    { name: "Intertek", logo: "/logos/otc.png" },
    { name: "TÜV SÜD", logo: "/logos/cylon-export.png" },
    { name: "Ceylon Chamber", logo: "/logos/adam-group.png" },
    {
      name: "Ceylon Chamber",
      logo: "/logos/jafferjee-brothers-colombo-sri-lanka.png",
    },
  ];

  // Quality Grid Images
  const qualityImages = [
    {
      src: "/gallery/1P9A8177.svg",
      alt: "Coconuts stored at the processing facility",
    },
    {
      src: "/gallery/1P9A8293.svg",
      alt: "Worker processing coconuts",
    },
    {
      src: "/gallery/1P9A8392.svg",
      alt: "Factory team sorting coconut products",
    },
    {
      src: "/gallery/1P9A8732.svg",
      alt: "Coconut flakes moving along the production line",
    },
    {
      src: "/gallery/1P9A8708.svg",
      alt: "Factory team preparing coconut products",
    },
    {
      src: "/gallery/1P9A8752.svg",
      alt: "Forklift loading coconut products for delivery",
    },
    {
      src: "/gallery/1P9A8646.svg",
      alt: "Desiccated coconut processing line",
    },
    {
      src: "/gallery/1P9A8644.svg",
      alt: "Packaged coconut products in the warehouse",
    },
  ];

  // Coconut Benefits
  const benefits = [
    {
      url: "/icon/1.svg",
      title: "Rich in Healthy Fats",
      description: "Rich in healthy fats, vitamins, and minerals.",
    },
    {
      url: "/icon/2.svg",
      title: "Instant Energy Boost",
      description: "Free from artificial additives and preservatives.",
    },
    {
      url: "/icon/3.svg",
      title: "High in Essential Fiber",
      description: "Gluten-free and suitable for various dietary preferences.",
    },
    {
      url: "/icon/4.svg",
      title: "Promotes Heart Health",
      description: "Promotes overall health and well-being.",
    },
    {
      url: "/icon/5.svg",
      title: "Strengthens Immunity",
      description: "Adds a delicious coconut flavor and texture to dishes.",
    },
    {
      url: "/icon/6.svg",
      title: "Deep Skin Hydration",
      description: "Supports sustainable agriculture and local communities.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-900 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] min-h-[550px] flex items-center justify-start overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('/hero-bg.svg'), linear-gradient(-180deg, #ffffff 0%, #2D568FD1 81.78%, #1B4785E3 89%)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-blue-950/65 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              EDIBLE <br />
              <span>MASTERPIECES.</span>
            </h1>
            <div className="pt-2">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-blue-900/40 transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-700/50 group"
              >
                View Our Products
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
      </section>

      {/* 2. YOUTUBE VIDEO SECTION */}
      <section className="w-full bg-slate-950">
        <div className="max-w-12xl mx-auto">
          <div className="relative w-full aspect-video overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/ZssOclbNfpI"
              title="Coconut Sri Lanka Corporate Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section
        ref={containerRef}
        id="products"
        className="relative h-[400vh] bg-white"
      >
        {/* Sticky viewport container pins in place while scrolling through slides */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Left Side: Text Content & Grades */}
              <div className="w-full md:w-3/4 space-y-6 transition-all duration-500">
                <h2 className="text-3xl sm:text-[70px] font-extrabold text-[#474141] tracking-tight transition-all duration-300">
                  {currentSlide.title}
                </h2>

                {currentSlide.grades && (
                  <div className="space-y-2 animate-fadeIn">
                    <span className="block font-bold text-[#474141] text-[18px] tracking-wider">
                      Grades Available
                    </span>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-[#474141]">
                      {currentSlide.grades.map((grade, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          {grade}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-[#474141] text-base sm:text-lg leading-relaxed font-regular">
                  {currentSlide.description}
                </p>

                <div>
                  <a
                    href="/products"
                    className="px-7 py-3 bg-[#1b4382] hover:bg-blue-900 text-white font-medium text-sm rounded-full shadow-md transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    {currentSlide.buttonText}
                  </a>
                </div>
              </div>

              {/* Right Side: Circular Image & Dots Navigation */}
              <div className="w-full md:w-1/2 flex items-center justify-center relative">
                {/* Circular Product Image Container */}
                <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center p-4 group overflow-hidden">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    className="w-full h-full object-cover rounded-full shadow-md transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const nextEl = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (nextEl) nextEl.style.display = "flex";
                    }}
                  />
                  <div className="hidden absolute inset-0 flex-col items-center justify-center bg-slate-100 rounded-full p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-blue-900 mb-3 flex items-center justify-center text-white font-bold text-xl">
                      COCONUT
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {currentSlide.title}
                    </span>
                    <span className="text-xs text-slate-400 mt-1">
                      Path: {currentSlide.image}
                    </span>
                  </div>
                </div>

                {/* Vertical 4 Dots Navigation (Hover & Click Trigger) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20 ">
                  {slideData.map((slide, index) => (
                    <button
                      key={slide.id}
                      onMouseEnter={() => setActiveSlide(index)}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? "bg-[#ffbf00] "
                          : "bg-[#1b4382]  hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATES SECTION */}
      <section
        id="certifications"
        className="scroll-mt-20 py-20 bg-[#1b4382] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-[56px] font-extrabold tracking-wider uppercase text-white">
              CERTIFIED GOODNESS
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
            <p className="text-blue-100 text-sm sm:text-[18px] font-light leading-relaxed">
              We specialize in creating a range of coconut-based products,
              including desiccated coconut powder, chips, and threads. Our focus
              is on toasted and flavored coconut delights. We also offer coconut
              water, charcoal, and coconut shells as bi-products for wholesale
            </p>
          </div>

          <div className="space-y-12">
            {certificateCategories.map((sec, secIdx) => (
              <div key={secIdx} className="space-y-6">
                <div className="items-center gap-3 pb-4">
                  <h3 className="text-xs sm:text-[20px] font-bold tracking-widest text-[#ffffff] uppercase text-center">
                    {sec.category}
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
                  {sec.items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        const link = item.pdf ?? item.url;
                        if (link)
                          window.open(link, "_blank", "noopener,noreferrer");
                      }}
                      className={`group relative bg-white rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer h-36 sm:h-50 w-[calc(50%-0.5rem)] sm:w-[calc(25%-1rem)] lg:w-[calc(33.33%-1rem) max-w-xs]`}
                    >
                      <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-90">
                        <img
                          src={item.image}
                          alt={item.name}
                          className=" w-full h-full object-contain mb-2 filter drop-shadow-sm"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const nextEl = e.currentTarget
                              .nextElementSibling as HTMLElement;
                            if (nextEl) nextEl.style.display = "flex";
                          }}
                        />
                        <div className="hidden flex-col items-center justify-center p-2">
                          <Award className="w-8 h-8 text-blue-900 mb-1" />
                          <span className="font-extrabold text-slate-800 text-sm tracking-tight">
                            {item.code}
                          </span>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-blue-900/95 backdrop-blur-sm p-4 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <p className="text-white font-bold text-xs sm:text-sm leading-tight mb-1"></p>
                        <p className="text-blue-200 text-[11px] leading-tight font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR PARTNERS SECTION */}
      <section id="partners" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center space-y-12">
          <div className="max-w-5xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-[56px] font-extrabold text-[#474141] uppercase tracking-tight">
              OUR PARTNERS
            </h2>
            <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base font-light">
              For 50 years, we have been creating long standing relationships
              with businesses all around the world. Each product that leaves our
              factory is uniquely tailored to our consumers and distributors,
              which keeps them coming back for more. Get in touch and tell us
              exactly how you like your coconut treats and become our next
              partner!
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="rounded-lg transition-all duration-300 flex items-center justify-center w-32 h-24 grayscale hover:scale-105"
              >
                <img
                  src={partner.logo}
                  className="max-h-24 max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const nextEl = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = "block";
                  }}
                />
                <span className="hidden text-xs font-bold text-slate-600 uppercase tracking-wider">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={() =>
                window.open(
                  "/pdfs/Mathammana-DC-Factory-Brocher-1.0.pdf",
                  "_blank",
                )
              }
              className="px-8 py-3 bg-[#1b4382] hover:bg-blue-900 text-white font-medium text-sm rounded-full shadow-md transition-all duration-200 cursor-pointer"
            >
              Download Our Brochure
            </button>
          </div>
        </div>
      </section>

      {/* 6. QUALITY AND SUSTAINABILITY SECTION */}
      <section className="py-20 bg-[#f9f6ef]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          <div className="text-center max-w-7xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-[56px] font-extrabold text-[#474141] uppercase tracking-tight leading-snug">
              QUALITY AND SUSTAINABILITY IN EVERY COCONUT
            </h2>
            <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Mathammana D/C Factory is committed to ethical sourcing and
              sustainability. Our coconut products, from powder to chips, are a
              testament to this commitment. We partner with local farmers and
              cooperatives in Sri Lanka to ensure that our products are not only
              of the highest quality but also support the environment and local
              communities. With Mathammana, you&apos;re not just getting coconut
              products, you&apos;re investing in a sustainable future for Sri
              Lanka and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {qualityImages.map((img, index) => (
              <div
                key={img.src}
                className={`group relative aspect-[3/2] overflow-hidden bg-slate-200 ${
                  index === 3 ? "md:row-span-2 md:aspect-auto" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const nextEl = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = "flex";
                  }}
                />
                <div className="hidden absolute inset-0 bg-slate-300 flex-col items-center justify-center p-4 text-center">
                  <span className="text-[10px] text-slate-500 mt-1">
                    {img.src}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/uD4Ow0LvzUo?si=w6NTfuwEznOLQbCP"
                title="Sustainable Coconut Farming Sri Lanka"
                allowFullScreen
              />
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/kk1t1zqXSK4?si=9KM_gI6LxqGSTRk9"
                title="Advanced Manufacturing Process"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. UNLOCKING THE BENEFITS OF COCONUT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center space-y-16">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-[56px] font-extrabold text-[#474141] uppercase tracking-tight">
              UNLOCKING THE BENEFITS OF COCONUT
            </h2>
            <div className="w-16 h-1 bg-[#F79239] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-[172px] h-[172px] sm:w-[172px] sm:h-[172px] rounded-full flex items-center justify-center p-4 mb-4 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={benefit.url}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[16px] text-slate-500 leading-tight font-light max-w-[300px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ASK YOUR LOCAL EXPORTER BANNER */}
      <section className="w-full bg-[#1b4382] py-10 px-6 text-center text-white">
        <div className="max-w-9xl mx-auto">
          <h2 className="text-2xl sm:text-[53px] md:text-4xl font-extrabold uppercase tracking-wider drop-shadow-sm">
            Ask your local exporter for M119 products
          </h2>
        </div>
      </section>

      {/* 9. HOW CAN WE HELP */}
      <section id="contact" className=" bg-[#f9f6ef] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-between px-10">
          <div className="w-96 h-96 rounded-full bg-slate-900 blur-3xl" />
          <div className="w-96 h-96 rounded-full bg-amber-900 blur-3xl" />
        </div>

        <div
          className="relative py-20 bg-cover bg-center bg-no-repeat text-white"
          style={{ backgroundImage: `url('/how-can-we-help.PNG')` }}
        >
          <h2 className="py-6 text-3xl sm:text-[56px] font-extrabold text-[#474141] uppercase tracking-tight text-center">
            HOW CAN WE HELP
          </h2>
          <div className="w-16 h-1 mb-6 bg-[#F79239] mx-auto rounded-full" />

          <p className="text-slate-600 text-sm sm:text-[18px] leading-relaxed max-w-3xl mx-auto font-light align-center text-center">
            We're here to help! Whether you have a question about our products,
            want to inquire about wholesale opportunities, or just want to say
            hello, we'd love to hear from you. You can reach us by filling out
            the form below, sending us an email at, or giving us a call at.
            We'll get back to you as soon as possible.
          </p>
          <div className="flex flex-row items-center justify-center gap-6 py-4 px-6 text-[#1b4382]">
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-[#1b4382] shrink-0" />
              <a
                href="mailto:info@coconutsrilanka.com"
                className="text-sm sm:text-base font-semibold tracking-wide hover:underline"
              >
                info@coconutsrilanka.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-[#1b4382] shrink-0" />
              <div className="flex flex-col text-sm sm:text-base font-semibold tracking-wide">
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
