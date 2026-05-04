/**
 * MARkrete — Why MARkrete Page
 * Design: Bold Monochromatic with Green Power Accents
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HURRICANE_IMG = "/images/roof-damage.jpeg";

const comparisonData = [
  {
    feature: "Hurricane Resistance",
    markrete: "Max protection with Structural Reinforced Roof System",
    traditional: "Dependent on fasteners and wood connections",
  },
  {
    feature: "Structural System",
    markrete: "Reinforced Concrete Roof System",
    traditional: "Wood trusses with plywood decking",
  },
  {
    feature: "Lifespan",
    markrete: "100+ years of Structural durability",
    traditional: "30–40 years typical lifespan",
  },
  {
    feature: "Maintenance",
    markrete: "No maintenance required",
    traditional: "Incidental repairs & Periodic inspections",
  },
  {
    feature: "Insurance",
    markrete: "40%–50% less compared to traditional roof",
    traditional: "High premium due to potential risks",
  },
  {
    feature: "Termite Resistant",
    markrete: "Max protection: No Wood — No Termite",
    traditional: "Risk of Termite Damage",
  },
  {
    feature: "Water Damage",
    markrete: "Max Protection: No wood in Structure",
    traditional: "Vulnerable to Water Damage",
  },
  {
    feature: "Fire Damage",
    markrete: "Excellent Protection: No Wood or combustible insulation",
    traditional: "Vulnerable: Wood Framing and Insulation are combustible",
  },
  {
    feature: "Insulation",
    markrete: "Integrated R-30+ insulation within the roof system",
    traditional: "Added cost, must be replaced or replenished periodically",
  },
  {
    feature: "Sound Insulation",
    markrete: "Excellent — significantly greater sound attenuation",
    traditional: "Basic sound protection",
  },
];

const failureReasons = [
  "Wood trusses are vulnerable to extreme wind uplift forces",
  "Plywood decking can delaminate and fail under hurricane conditions",
  "Mechanical fasteners can pull out under sustained high winds",
  "Once the roof fails, the home becomes vulnerable to catastrophic damage",
  "Water intrusion destroys interior structure and belongings",
];

export default function WhyMarkrete() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const el = revealRef.current;
    if (el) el.querySelectorAll(".fade-in-up").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="section-dark pt-32 pb-20 relative overflow-hidden">
        <span className="bg-number bg-number-light right-0 top-0 translate-x-1/4 -translate-y-1/4">WHY</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-label block mb-4">The Case for MARkrete</span>
          <div className="green-accent-line" />
          <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            WHY ROOFS FAIL<br />
            <span className="text-[#007b32]">DURING HURRICANES</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-body">
            During hurricanes, roofs experience extreme wind uplift forces. Traditional roof systems rely on wood trusses, plywood decking, and mechanical fasteners — and when these connections fail, the consequences are catastrophic.
          </p>
        </div>
      </section>

      {/* ── WHY ROOFS FAIL ── */}
      <section className="section-light py-24" ref={revealRef}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label block mb-4">The Problem</span>
              <div className="green-accent-line" />
              <h2 className="font-display text-[#0d0d0d] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                TRADITIONAL ROOFS ARE ENGINEERED TO FAIL
              </h2>
              <ul className="space-y-4">
                {failureReasons.map((reason, i) => (
                  <li key={i} className="fade-in-up flex items-start gap-3" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-body">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in-up">
              <img
                src={HURRICANE_IMG}
                alt="Hurricane damage to traditional wood truss roof"
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
              <p className="text-gray-500 text-xs mt-2 font-body italic">Traditional wood truss roof destroyed by hurricane forces</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARKRETE SOLUTION ── */}
      <section className="section-dark py-24 relative overflow-hidden">
        <span className="bg-number bg-number-light left-0 bottom-0 -translate-x-1/4 translate-y-1/4">SOL</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">The Solution</span>
            <div className="green-accent-line mx-auto" />
            <h2 className="font-display text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              HOW MARKRETE SOLVES THIS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Monolithic Structure",
                desc: "Reinforced concrete creates a single, unified structural roof that cannot be separated by wind uplift forces.",
              },
              {
                title: "No Wood Components",
                desc: "Eliminates termite risk, fire vulnerability, and water damage susceptibility from the roof structure entirely.",
              },
              {
                title: "Engineered for Uplift",
                desc: "Designed to resist the extreme uplift forces generated by Category 5 hurricane-force winds.",
              },
              {
                title: "Permanent Installation",
                desc: "Unlike traditional roofs that require replacement every 30–40 years, MARkrete is a generational investment.",
              },
              {
                title: "Insurance Savings",
                desc: "Homeowners typically save 40%–50% on insurance premiums compared to traditional roof systems.",
              },
              {
                title: "Miami-Dade Approved",
                desc: "Approved in the county with the strictest building codes in the United States.",
              },
            ].map((item, i) => (
              <div key={item.title} className="bg-white/5 border border-white/10 p-6 hover:border-[#007b32]/50 transition-colors">
                <CheckCircle size={20} className="text-[#007b32] mb-4" />
                <h3 className="font-heading font-700 text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="section-gray py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label block mb-4">Side by Side</span>
            <div className="green-accent-line mx-auto" />
            <h2 className="font-display text-[#0d0d0d]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              MARKRETE VS. TRADITIONAL WOOD TRUSSES
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#0d0d0d] text-white font-heading text-sm tracking-wider uppercase px-6 py-4 text-left w-1/3">
                    Feature
                  </th>
                  <th className="bg-[#007b32] text-white font-heading text-sm tracking-wider uppercase px-6 py-4 text-left w-1/3">
                    MARkrete®
                  </th>
                  <th className="bg-gray-600 text-white font-heading text-sm tracking-wider uppercase px-6 py-4 text-left w-1/3">
                    Traditional Wood Trusses
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-heading font-600 text-[#0d0d0d] text-sm border-b border-gray-200">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-body border-b border-gray-200 border-l-2 border-l-[#007b32]">
                      <span className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-[#007b32] shrink-0 mt-0.5" />
                        {row.markrete}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-body border-b border-gray-200">
                      <span className="flex items-start gap-2">
                        <XCircle size={14} className="text-red-400 shrink-0 mt-0.5" />
                        {row.traditional}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#007b32] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-white text-3xl mb-2">READY TO UPGRADE YOUR ROOF?</h2>
            <p className="text-white/80 font-body">Contact us to learn if MARkrete is right for your project.</p>
          </div>
          <Link href="/contact">
            <span className="btn-outline-white whitespace-nowrap flex items-center gap-2">
              Start Your Project <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
