/**
 * MARkrete — Benefits Page
 * Design: Bold Monochromatic with Green Power Accents
 * Covers: Architects, Homeowners, Builders
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = ["Architects", "Homeowners", "Builders"];

const benefitData = {
  Architects: {
    image: "/images/architect.jpg", // Added specific image
    headline: "DESIGNED FOR PITCHED ARCHITECTURE & ARCHITECTURAL EXPRESSION",
    subheadline: "Benefits for Architects",
    intro: "Many concrete roof systems are limited to flat or low-slope applications, which can restrict architectural design. MARkrete allows architects to design pitched concrete roof structures, enabling the strength and durability of reinforced concrete construction while preserving traditional residential roof forms.",
    benefits: [
      "60-foot span for architectural design freedom",
      "Pitched roof designs up to 10/12 pitch",
      "Compatible with Mediterranean and coastal architecture",
      "Compatible with contemporary residential design",
      "Compatible with modern flat-roof architecture",
      "Compatible with custom luxury residential projects",
      "Structural performance without compromising design vision",
      "Signed and sealed engineering support included",
    ],
    callout: {
      title: "60-Foot Span",
      desc: "Enables wide-open architectural floor plans without structural columns interrupting the design.",
    },
    quote: "By combining structural performance with design freedom, MARkrete allows architects to maintain their intended architectural vision without compromising structural integrity.",
  },
  Homeowners: {
    image: "/images/homeowner.jpg", // Added specific image
    headline: "THE GENERATIONAL ROOF — SIMPLE INVESTMENT, RETURN BEYOND EXPECTATIONS",
    subheadline: "Benefits for Homeowners",
    intro: "Traditional roofs often require replacement after 30–40 years. MARkrete creates a reinforced concrete roof structure designed to last 100 years or more. This makes it the ideal investment for coastal homes and long-term property value.",
    benefits: [
      "Cat 5 hurricane-resistant roof structure",
      "Energy efficiency with R-30+ insulation",
      "Fire resistance — no combustible materials",
      "Termite resistance — no wood in structure",
      "Long-term durability — 100+ year lifespan",
      "No maintenance required",
      "40%–50% lower insurance premiums",
      "Superior noise reduction",
      "Green building and energy efficiency",
      "Ideal for coastal homes and long-term property investments",
    ],
    callout: {
      title: "40–50% Insurance Savings",
      desc: "Homeowners typically save significantly on insurance premiums compared to traditional roof systems.",
    },
    quote: "A 100-year roof is not just a building material — it is a generational investment in your family's safety and your property's value.",
  },
  Builders: {
    image: "/images/builder.jpg", // Added specific image
    headline: "MARKRETE SIMPLIFIES CONSTRUCTION WHILE PROVIDING ENGINEERED SUPPORT",
    subheadline: "Benefits for Builders",
    intro: "MARkrete simplifies the construction process while providing comprehensive engineered support. From pre-cut panels delivered to the jobsite to integrated insulation and structure, MARkrete is designed to make the builder's job easier and more efficient.",
    benefits: [
      "Panels cut to specification before delivery",
      "Reduced jobsite labor",
      "Mechanical systems easily tied to metal frames",
      "Integrated insulation and structure",
      "Shoring plans included",
      "Roof framing plan provided",
      "Reinforcement layout included",
      "Panel configuration documentation",
      "Durable reinforced concrete roof",
      "Engineering support throughout the project",
    ],
    callout: {
      title: "Pre-Cut Panels",
      desc: "Panels are cut to specification before delivery, reducing waste and jobsite labor significantly.",
    },
    quote: "MARkrete delivers a complete engineered roof system — from pre-cut panels to signed and sealed plans — so builders can focus on execution, not coordination.",
  },
};

export default function Benefits() {
  const [activeTab, setActiveTab] = useState("Architects");

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-up").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const data = benefitData[activeTab as keyof typeof benefitData];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="section-dark pt-32 pb-20 relative overflow-hidden">
        <span className="bg-number bg-number-light right-0 top-0 translate-x-1/4 -translate-y-1/4">BEN</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-label block mb-4">Who Benefits</span>
          <div className="green-accent-line" />
          <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            BUILT FOR<br />
            <span className="text-[#007b32]">EVERY STAKEHOLDER</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-body">
            Whether you are an architect pushing design boundaries, a homeowner protecting your family, or a builder looking for a smarter system — MARkrete delivers.
          </p>
        </div>
      </section>

      {/* ── TAB SELECTOR ── */}
      <div className="bg-[#111111] sticky top-16 lg:top-20 z-40 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar md:justify-start lg:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-heading font-700 text-sm tracking-widest uppercase transition-colors duration-200 border-b-2 whitespace-nowrap min-w-max ${
                  activeTab === tab
                    ? "text-[#007b32] border-[#007b32]"
                    : "text-gray-400 border-transparent hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BENEFIT CONTENT ── */}
      <section className="section-light py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <span className="section-label block mb-4">{data.subheadline}</span>
              <div className="green-accent-line" />
              <h2 className="font-display text-[#0d0d0d] mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                {data.headline}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 font-body">{data.intro}</p>

              {/* Benefits list */}
              <ul className="space-y-3 mb-8">
                {data.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#007b32] shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-body text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Quote */}
              <blockquote className="border-l-4 border-[#007b32] pl-5 py-2">
                <p className="text-gray-600 italic font-body text-sm leading-relaxed">"{data.quote}"</p>
              </blockquote>
            </div>

            {/* Right: Visual + Callout */}
            <div className="space-y-6 order-1 lg:order-2">
              <img
                key={activeTab} // Using key ensures a smooth transition when state changes
                src={data.image} // Changed from LUXURY_HOME_IMG to data.image
                alt="MARkrete project"
                className="w-full object-cover shadow-xl transition-opacity duration-300"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="bg-[#0d0d0d] p-8">
                <div className="font-display text-[#007b32] text-4xl mb-2">{data.callout.title}</div>
                <p className="text-gray-300 font-body text-sm leading-relaxed">{data.callout.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE STYLES (Architects only) ── */}
      {activeTab === "Architects" && (
        <section className="section-dark py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label block mb-4">Design Compatibility</span>
              <div className="green-accent-line mx-auto" />
              <h2 className="font-display text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                COMPATIBLE ARCHITECTURAL STYLES
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { style: "Mediterranean", desc: "Coastal and Mediterranean architecture with pitched tile-style roofs" },
                { style: "Contemporary", desc: "Modern residential design with clean lines and mixed materials" },
                { style: "Modern Flat", desc: "Flat-roof architecture for contemporary urban and coastal homes" },
                { style: "Custom Luxury", desc: "High-end custom residential projects requiring design flexibility" },
              ].map((item) => (
                <div key={item.style} className="bg-white/5 border border-white/10 p-6 hover:border-[#007b32]/50 transition-colors">
                  <h3 className="font-heading font-700 text-[#007b32] text-lg mb-2">{item.style}</h3>
                  <p className="text-gray-400 text-sm font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-[#007b32] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-white text-3xl mb-2">START YOUR PROJECT TODAY</h2>
            <p className="text-white/80 font-body">Our team is ready to help you specify MARkrete for your next project.</p>
          </div>
          <Link href="/contact">
            <span className="btn-outline-white whitespace-nowrap flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}