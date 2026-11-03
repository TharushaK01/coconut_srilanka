"use client";
import React, { useState, useEffect, useRef } from "react";
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
      image: "/images/product-chips.png",
      alt: "Natural Coconut Chips",
      grades: null,
    },
    {
      id: 1,
      title: "TOASTED COCONUT CHIPS",
      description:
        "Indulge in the irresistible crunch and rich flavors of our toasted coconut chips, elevating snacking to a whole new level of deliciousness.",
      buttonText: "View Our Toasted Chips",
      image: "/images/product-toasted.png",
      alt: "Toasted Coconut Chips",
      grades: null,
    },
    {
      id: 2,
      title: "COCONUT POWDER",
      description:
        "Elevate your recipes with our versatile coconut powder [Fine grade], a burst of tropical goodness in every dish.",
      buttonText: "View Our Coconut Powder",
      image: "/images/product-powder.png",
      alt: "Coconut Powder",
      grades: null,
    },
    {
      id: 3,
      title: "DESICCATED COCONUT",
      description:
        "Enhance your recipes with our premium desiccated coconut, bringing a taste of the tropics to every bite.",
      buttonText: "View Our Desiccated Coconut",
      image: "/images/product-desiccated.png",
      alt: "Desiccated Coconut",
      grades: [
        "Fine",
        "Medium",
        "Chips",
        "Thread (Long/Short)",
        "Flakes",
        "Shredded (Long/Short)",
        "Chiplet",
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slideData.length]);

  const currentSlide = slideData[activeSlide];
  // Certificates Data
  const certificateCategories = [
    {
      category: "CERTIFICATIONS",
      items: [
        {
          name: "BRCGS Food Safety",
          code: "BRCGS",
          image: "/images/cert-brcgs.png",
          desc: "Global Standard for Food Safety Certification",
        },
        {
          name: "EU Organic Certification",
          code: "EU ORGANIC",
          image: "/images/cert-eu-organic.png",
          desc: "Certified European Union Organic Production",
        },
        {
          name: "USDA Organic",
          code: "USDA",
          image: "/images/cert-usda.png",
          desc: "United States Department of Agriculture Organic Standard",
        },
        {
          name: "Fairtrade Certified",
          code: "FAIRTRADE",
          image: "/images/cert-fairtrade.png",
          desc: "Ethical Trading and Fair Producer Compensation",
        },
        {
          name: "FDA Registered",
          code: "FDA",
          image: "/images/cert-fda.png",
          desc: "U.S. Food and Drug Administration Facility Registration",
        },
        {
          name: "Kosher Certified",
          code: "KOSHER",
          image: "/images/cert-kosher.png",
          desc: "Strict Compliance with Jewish Dietary Regulations",
        },
        {
          name: "Halal Certified",
          code: "HALAL",
          image: "/images/cert-halal.png",
          desc: "Certified Compliant with Islamic Dietary Guidelines",
        },
        {
          name: "Sedex SMETA",
          code: "SEDEX",
          image: "/images/cert-sedex.png",
          desc: "Audited for Ethical Trade and Responsible Supply Chain",
        },
        {
          name: "Control Union",
          code: "CONTROL UNION",
          image: "/images/cert-controlunion.png",
          desc: "Global Organic & Sustainable Farming Inspection",
        },
      ],
    },
    {
      category: "MEMBERSHIPS",
      items: [
        {
          name: "EDB Sri Lanka",
          code: "EDB",
          image: "/images/member-edb.png",
          desc: "Sri Lanka Export Development Board Member",
        },
        {
          name: "ISO 9001:2015",
          code: "ISO 9001",
          image: "/images/member-iso.png",
          desc: "Certified Quality Management System",
        },
      ],
    },
    {
      category: "AUDITED BY",
      items: [
        {
          name: "Control Union Certifications",
          code: "CU CERT",
          image: "/images/audit-cu.png",
          desc: "Independent Third Party Quality Audits",
        },
        {
          name: "SGS Testing & Inspection",
          code: "SGS",
          image: "/images/audit-sgs.png",
          desc: "Worldwide Leading Inspection & Certification Body",
        },
        {
          name: "Bureau Veritas",
          code: "BUREAU VERITAS",
          image: "/images/audit-bv.png",
          desc: "Global Leader in Testing, Inspection & Certification",
        },
      ],
    },
    {
      category: "AFFILIATED WITH",
      items: [
        {
          name: "Coconut Development Authority",
          code: "CDA",
          image: "/images/aff-cda.png",
          desc: "Apex Government Authority for Coconut Industry",
        },
        {
          name: "National Chamber of Exporters",
          code: "NCE",
          image: "/images/aff-nce.png",
          desc: "Promoting Sri Lankan Exports Globally",
        },
      ],
    },
  ];

  // Partners List
  const partners = [
    { name: "DNV GL", logo: "/images/partner-dnv.png" },
    { name: "EKP Global", logo: "/images/partner-ekp.png" },
    { name: "Eurofins", logo: "/images/partner-eurofins.png" },
    { name: "Intertek", logo: "/images/partner-intertek.png" },
    { name: "TÜV SÜD", logo: "/images/partner-tuv.png" },
    { name: "Ceylon Chamber", logo: "/images/partner-chamber.png" },
  ];

  // Quality Grid Images
  const qualityImages = [
    { src: "/images/quality-1.jpg", title: "Harvesting Fresh Coconuts" },
    { src: "/images/quality-2.jpg", title: "Raw Material Inspection" },
    { src: "/images/quality-3.jpg", title: "Hygienic Shelling & Peeling" },
    { src: "/images/quality-4.jpg", title: "Pure Water Washing" },
    { src: "/images/quality-5.jpg", title: "Controlled Dehydration Process" },
    { src: "/images/quality-6.jpg", title: "Automated Sorting & Gradients" },
    { src: "/images/quality-7.jpg", title: "Strict Quality Control Testing" },
    { src: "/images/quality-8.jpg", title: "Eco-Friendly Vacuum Packaging" },
    { src: "/images/quality-9.jpg", title: "Global Logistics & Shipping" },
  ];

  // Coconut Benefits
  const benefits = [
    {
      icon: <Activity className="w-8 h-8 text-slate-800" />,
      title: "Rich in Healthy Fats",
      description: "Contains medium-chain triglycerides (MCTs)",
    },
    {
      icon: <Zap className="w-8 h-8 text-slate-800" />,
      title: "Instant Energy Boost",
      description: "Quickly metabolized into immediate fuel",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-slate-800" />,
      title: "High in Essential Fiber",
      description: "Supports healthy digestion and gut wellness",
    },
    {
      icon: <Heart className="w-8 h-8 text-slate-800" />,
      title: "Promotes Heart Health",
      description: "Supports balanced cholesterol levels",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-slate-800" />,
      title: "Strengthens Immunity",
      description: "Packed with naturally antibacterial lauric acid",
    },
    {
      icon: <Droplet className="w-8 h-8 text-slate-800" />,
      title: "Deep Skin Hydration",
      description: "Nourishes skin & maintains natural moisture balance",
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
              <span className="text-blue-100">MASTERPIECES.</span>
            </h1>
            <div className="pt-2">
              <a
                href="#products"
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

      <div
        ref={containerRef}
        id="products"
        className="relative h-[400vh] bg-white"
      >
        {/* Sticky viewport container pins in place while scrolling through slides */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Left Side: Text Content & Grades */}
              <div className="w-full md:w-1/2 space-y-6 transition-all duration-500">
                <span className="text-xs font-bold tracking-widest text-blue-900 uppercase bg-blue-50 px-3 py-1 rounded-md">
                  Featured Product {activeSlide + 1} / {slideData.length}
                </span>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight transition-all duration-300">
                  {currentSlide.title}
                </h2>

                {currentSlide.grades && (
                  <div className="space-y-2 animate-fadeIn">
                    <span className="block font-bold text-slate-800 text-sm uppercase tracking-wider">
                      Grades Available
                    </span>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-600">
                      {currentSlide.grades.map((grade, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-900" />
                          {grade}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                  {currentSlide.description}
                </p>

                <div>
                  <button className="px-7 py-3 bg-[#1b4382] hover:bg-blue-900 text-white font-medium text-sm rounded-md shadow-md transition-all duration-200 inline-flex items-center gap-2 group">
                    {currentSlide.buttonText}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Side: Circular Image & Dots Navigation */}
              <div className="w-full md:w-1/2 flex items-center justify-center relative">
                {/* Circular Product Image Container */}
                <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-50 to-amber-50 shadow-xl flex items-center justify-center p-4 border border-blue-100 group overflow-hidden">
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
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg border border-slate-200">
                  {slideData.map((slide, index) => (
                    <button
                      key={slide.id}
                      onMouseEnter={() => setActiveSlide(index)}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? "bg-[#1b4382] scale-125 ring-4 ring-blue-200"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CERTIFICATES SECTION */}
      <section className="py-20 bg-[#1b4382] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase text-white">
              CERTIFIED GOODNESS
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
            <p className="text-blue-100 text-sm sm:text-base font-light leading-relaxed">
              Our commitment to uncompromised quality, safety, and sustainable
              ethical manufacturing is validated by international standards
              across global food and safety organizations.
            </p>
          </div>

          <div className="space-y-12">
            {certificateCategories.map((sec, secIdx) => (
              <div key={secIdx} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-blue-400/30 pb-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xs sm:text-sm font-bold tracking-widest text-blue-200 uppercase">
                    {sec.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                  {sec.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-md border border-white/20 transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer h-36 sm:h-40"
                    >
                      <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-90">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-16 max-w-full object-contain mb-2 filter drop-shadow-sm"
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
                        <p className="text-white font-bold text-xs sm:text-sm leading-tight mb-1">
                          {item.name}
                        </p>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
              OUR PARTNERS
            </h2>
            <div className="w-12 h-1 bg-blue-900 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Collaborating with prestigious global distributors, supply chains,
              and testing laboratories to bring authentic Ceylon coconut
              products everywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-slate-50 hover:bg-blue-50/50 border border-slate-100 transition-all duration-300 flex items-center justify-center h-24 grayscale hover:grayscale-0 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain"
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
            <button className="px-8 py-3 bg-[#1b4382] hover:bg-blue-900 text-white font-medium text-sm rounded-full shadow-md transition-all duration-200">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* 6. QUALITY AND SUSTAINABILITY SECTION */}
      <section className="py-20 bg-[#f9f6ef]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight leading-snug">
              QUALITY AND SUSTAINABILITY IN EVERY COCONUT
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              From organic certified plantations to modern automated processing
              facilities, our stringent quality assurance processes preserve
              natural goodness while protecting our tropical ecosystem and local
              farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {qualityImages.map((img, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden aspect-square bg-slate-200 shadow-sm border border-amber-100"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const nextEl = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = "flex";
                  }}
                />
                <div className="hidden absolute inset-0 bg-slate-300 flex-col items-center justify-center p-4 text-center">
                  <span className="text-xs font-bold text-slate-700">
                    {img.title}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">
                    {img.src}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm drop-shadow">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Sustainable Coconut Farming Sri Lanka"
                allowFullScreen
              />
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
              UNLOCKING THE BENEFITS OF COCONUT
            </h2>
            <div className="w-16 h-1 bg-[#1b4382] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-slate-800 flex items-center justify-center p-4 mb-4 transition-all duration-300 group-hover:bg-[#1b4382] group-hover:border-[#1b4382] group-hover:scale-110 shadow-sm">
                  {React.cloneElement(benefit.icon, {
                    className:
                      "w-8 h-8 text-slate-800 group-hover:text-white transition-colors",
                  })}
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-500 leading-tight font-light max-w-[150px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ASK YOUR LOCAL EXPORTER BANNER */}
      <section className="w-full bg-[#1b4382] py-10 px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wider drop-shadow-sm">
            ASK YOUR LOCAL EXPORTER FOR MTI PRODUCTS
          </h2>
        </div>
      </section>

      {/* 9. HOW CAN WE HELP */}
      <section className="py-20 bg-[#f9f6ef] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-between px-10">
          <div className="w-96 h-96 rounded-full bg-slate-900 blur-3xl" />
          <div className="w-96 h-96 rounded-full bg-amber-900 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            HOW CAN WE HELP
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            Whether you are looking for bulk raw coconut materials, customized
            OEM private labeling solutions, or retail-ready organic coconut
            delicacies, our export experts are ready to assist your business
            across every stage of procurement.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-amber-100">
              <Globe className="w-6 h-6 text-[#1b4382]" />
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-800 uppercase">
                  Global Export
                </span>
                <span className="block text-[11px] text-slate-500">
                  Shipping to 45+ Countries
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-amber-100">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-800 uppercase">
                  OEM & Private Label
                </span>
                <span className="block text-[11px] text-slate-500">
                  Customized Packaging
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-amber-100">
              <Info className="w-6 h-6 text-[#1b4382]" />
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-800 uppercase">
                  Direct Inquiry
                </span>
                <span className="block text-[11px] text-slate-500">
                  24/7 B2B Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
