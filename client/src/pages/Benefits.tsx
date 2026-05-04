/**
 * MARkrete — Benefits Page
 * Design: Standard Typography with Architectural Content Grid
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { CheckCircle, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BenefitSection {
  image: string;
  headline: string;
  subheadline: string;
  intro: string;
  benefits: string[];
  callout: {
    title: string;
    desc: string;
  };
  quote: string;
  comparison?: {
    traditional: string[];
    markrete: string[];
  };
}

const tabs = ["Architects", "Homeowners", "Builders"] as const;
type TabType = typeof tabs[number];

const benefitData: Record<TabType, BenefitSection> = {
  Architects: {
    image: "/images/190-casurina.jpeg",
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
    image: "/images/150-arvida.webp",
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
      title: "Cat 5 Protection",
      desc: "The ultimate structural diaphragm designed to survive 157+ mph sustained winds and catastrophic pressure.",
    },
    quote: "A 100-year roof is not just a building material — it is a generational investment in your family's safety and your property's value.",
  },
  Builders: {
    image: "/images/builder.jpg",
    headline: "ONE CONTINUOUS SYSTEM: SIMPLIFYING SLOPED CONCRETE",
    subheadline: "Benefits for Builders",
    intro: "Traditional sloped concrete roofs are labor-intensive, requiring multiple trades and extensive post-pour rework. MARkrete provides one continuous system that functions as your structure, insulation, and ceiling substrate simultaneously.",
    benefits: [
      "No nail holes or surface patching",
      "No grinding or slab damage",
      "No separate insulation contractor needed",
      "No uneven installation or gaps",
      "No thermal bridges or insulation voids",
      "Reduced jobsite labor and overhead",
      "Panels cut to specification before delivery",
      "Engineering support throughout the project",
    ],
    callout: {
      title: "Uniform R-30",
      desc: "The system stays in place and provides uniform R-30 insulation with zero gaps, thermal bridges, or separate labor costs.",
    },
    quote: "MARkrete delivers a complete engineered roof system — from pre-cut panels to signed and sealed plans — so builders can focus on execution, not coordination.",
    comparison: {
      traditional: [
        "Build plywood formwork",
        "Install supports/shoring",
        "Pour concrete",
        "Strip forms",
        "Patch + clean slab",
        "Cut/grind nails",
        "Install insulation",
        "Install furring/hat channels"
      ],
      markrete: [
        "Install shoring",
        "Lay MARkrete panels (Slope built-in)",
        "Pour concrete",
        "Done (Insulation & Ceiling integrated)"
      ]
    }
  },
};

export default function Benefits() {
  const [activeTab, setActiveTab] = useState<TabType>("Architects");
  const [location] = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab")?.toLowerCase();

    if (tabParam) {
      const matchedTab = tabs.find(t => t.toLowerCase() === tabParam);
      if (matchedTab) setActiveTab(matchedTab);
    }
  }, [location]);

  const data = benefitData[activeTab];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-body">
      <Navbar />

      {/* ── HERO SECTION (Standardized Spacing) ── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <span className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 font-display text-[20vw] text-white/[0.03] leading-none select-none uppercase">
          Specs
        </span>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#007b32]" />
              <span className="section-label text-[#007b32] uppercase tracking-[0.2em] font-heading font-700 text-xs">Who Benefits</span>
            </div>
            <h1 className="font-display text-white mb-6 leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
              Built for  <br />
              <span className="text-[#007b32]">Every Stakeholder</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed font-body">
              Whether you are pushing design boundaries, protecting a family, or streamlining a jobsite—MARkrete delivers a superior structural advantage.
            </p>
          </div>
        </div>
      </section>

      {/* ── TAB SELECTOR (Standardized Style) ── */}
      <div id="benefit-selection" className="bg-[#111111] border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex space-x-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-6 font-heading font-700 text-xs tracking-[0.2em] uppercase transition-all border-b-2 ${
                  activeTab === tab ? "text-[#007b32] border-[#007b32]" : "text-gray-500 border-transparent hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Content Column */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <span className="text-[#007b32] font-heading font-700 text-xs tracking-[0.2em] uppercase mb-4 block">
                {data.subheadline}
              </span>
              <div className="w-12 h-1 bg-[#007b32] mb-8" />
              
              <h2 className="font-display text-4xl md:text-5xl text-[#0d0d0d] mb-10 uppercase leading-[1.1]">
                {data.headline}
              </h2>

              <blockquote className="border-l-4 border-[#007b32] pl-8 py-2 mb-10">
                <p className="text-gray-600 text-md leading-relaxed font-body italic">"{data.quote}"</p>
              </blockquote>

              <p className="text-gray-600 text-md leading-relaxed mb-12 font-body max-w-2xl">
                {data.intro}
              </p>

              {/* Comparison Section (Only for Builder) */}
              {activeTab === "Builders" && data.comparison && (
                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#f8f8f8] p-8 border border-gray-100">
                    <h4 className="font-heading font-700 text-xs uppercase text-gray-400 mb-6 tracking-[0.2em]">Traditional</h4>
                    <ul className="space-y-3">
                      {data.comparison.traditional.map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-500 text-xs font-heading font-700 uppercase">
                          <div className="w-1 h-1 bg-gray-300 shrink-0" /> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#0d0d0d] p-8 border-l-4 border-[#007b32]">
                    <h4 className="font-heading font-700 text-xs uppercase text-white mb-6 tracking-[0.2em]">MARkrete Way</h4>
                    <ul className="space-y-3">
                      {data.comparison.markrete.map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#007b32] text-xs font-heading font-700 uppercase">
                          <Zap size={12} className="fill-[#007b32] shrink-0" /> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Benefits Inventory */}
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 pt-10 border-t border-gray-100">
                {data.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="font-body text-xs text-gray-300 font-bold">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[#1a1a1a] font-heading font-700 text-xs uppercase tracking-[0.1em]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-8 order-1 lg:order-2 sticky top-24">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-[#007b32] z-10" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-[#007b32] z-10" />
                <img
                  key={activeTab} 
                  src={data.image} 
                  alt="MARkrete implementation"
                  className="w-full object-cover shadow-xl"
                  style={{ aspectRatio: "4/5" }}
                />
              </div>

              <div className="bg-[#0d0d0d] p-10 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="font-display text-[#007b32] text-3xl mb-4 uppercase leading-none">
                    {data.callout.title}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-6 font-body">
                    {data.callout.desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#007b32] py-24 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-white/50" />
                <span className="font-heading font-700 text-white text-[10px] uppercase tracking-[0.5em]">
                  Project Consultation
                </span>
              </div>
              <h2 className="font-display text-white mb-6 leading-[0.85] uppercase" 
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)" }}>
                READY TO <br /> 
                <span className="text-[#0d0d0d]/65">Start your next project?</span>
              </h2>
              <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.15em] leading-relaxed font-body max-w-xl border-l border-white/20 pl-6">
                Our Engineering team is ready to help you with your next build!
              </p>
            </div>

            <div className="flex shrink-0">
              <Link href="/contact">
                <div className="group relative cursor-pointer">
                  <span className="relative z-10 block bg-white text-[#007b32] font-heading font-700 uppercase tracking-[0.2em] text-xs py-6 px-12 transition-all duration-300 group-hover:bg-[#0d0d0d] group-hover:text-white">
                    Technical Consultation
                  </span>
                  <div className="absolute inset-0 border-2 border-white/30 translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}