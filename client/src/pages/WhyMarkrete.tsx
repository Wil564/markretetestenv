/**
 * MARkrete — Why MARkrete Page
 * Design: Bold Monochromatic with Green Power Accents
 * Layout: Expanded Evidence Gallery + Original Comparison/Solution
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, XCircle, ShieldAlert, Droplets, Bug } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HURRICANE_IMG = "/images/Picture4.jpg";
const ROT_IMG = "/images/roof-water-damage.png"; // Ensure these paths exist in your public folder
const TERMITE_IMG = "/images/termdamage.jpg";

const failureCategories = [
  {
    title: "Hurricane & Wind Uplift",
    icon: <ShieldAlert className="text-red-500" size={24} />,
    image: HURRICANE_IMG,
    caption: "Catastrophic uplift of plywood decking",
    points: [
      "Trusses are vulnerable to extreme lateral forces",
      "Plywood decking delaminates under pressure",
      "Mechanical fasteners fatigue and pull out"
    ]
  },
  {
    title: "Environmental Decay",
    icon: <Droplets className="text-blue-500" size={24} />,
    image: ROT_IMG,
    caption: "Water intrusion leading to structural rot",
    points: [
      "Wood systems trap moisture, leading to mold",
      "Thermal expansion cracks waterproofing",
      "Water intrusion destroys interior integrity"
    ]
  },
  {
    title: "Biological & Fire Risk",
    icon: <Bug className="text-orange-500" size={24} />,
    image: TERMITE_IMG,
    caption: "Subterranean termite structural damage",
    points: [
      "Wood framing is a primary target for termites",
      "Wood/insulation increase fire load",
      "Organic materials degrade every 30-40 years"
    ]
  }
];

const comparisonData = [
  { feature: "Hurricane Resistance", markrete: "Max protection with Structural Reinforced Roof System", traditional: "Dependent on fasteners and wood connections" },
  { feature: "Structural System", markrete: "Reinforced Concrete Roof System", traditional: "Wood trusses with plywood decking" },
  { feature: "Lifespan", markrete: "100+ years of Structural durability", traditional: "30–40 years typical lifespan" },
  { feature: "Maintenance", markrete: "No maintenance required", traditional: "Incidental repairs & Periodic inspections" },
  { feature: "Insurance", markrete: "40%–50% less compared to traditional roof", traditional: "High premium due to potential risks" },
  { feature: "Termite Resistant", markrete: "Max protection: No Wood — No Termite", traditional: "Risk of Termite Damage" },
  { feature: "Water Damage", markrete: "Max Protection: No wood in Structure", traditional: "Vulnerable to Water Damage" },
  { feature: "Fire Damage", markrete: "Excellent Protection: No Wood or combustible insulation", traditional: "Vulnerable: Wood Framing and Insulation are combustible" },
  { feature: "Insulation", markrete: "Integrated R-30+ insulation within the roof system", traditional: "Added cost, must be replaced or replenished periodically" },
  { feature: "Sound Insulation", markrete: "Excellent — significantly greater sound attenuation", traditional: "Basic sound protection" },
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

      {/* ── PAGE HERO (RETAINED) ── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <span className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 font-display text-[20vw] text-white/[0.03] leading-none select-none">
          ANALYSIS
        </span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32]">THE VULNERABILITY REPORT</span>
              </div>
              <h1 className="font-display text-white mb-6 leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
                WHY TRADITIONAL <br />
                <span className="text-[#007b32]">SYSTEMS FAIL</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed font-body">
                The MARkrete® installation is a high-precision sequence designed to eliminate jobsite waste and maximize structural density.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRUCTURAL DEFICIENCY GALLERY (FULL COLOR VERSION) ── */}
      <section className="section-light py-24" ref={revealRef}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">The Problem</span>
            <div className="green-accent-line mx-auto" />
            <h2 className="font-display text-[#0d0d0d]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              A MULTI-FRONT STRUCTURAL COLLAPSE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {failureCategories.map((cat, idx) => (
              <div key={idx} className="fade-in-up flex flex-col h-full" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="relative mb-6 overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full transition-transform duration-700 hover:scale-105 object-cover"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <div className="absolute top-0 left-0 p-3 bg-[#0d0d0d] text-white">
                    {cat.icon}
                  </div>
                  <div className="p-3 bg-white border-t border-gray-200">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-heading font-700 text-[#007b32]">
                      Evidence: <span className="text-gray-500">{cat.caption}</span>
                    </p>
                  </div>
                </div>
                
                <h3 className="font-heading font-800 text-lg uppercase tracking-wider text-[#0d0d0d] mb-4">
                  {cat.title}
                </h3>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {cat.points.map((p, i) => (
                    <li key={i} className="text-gray-600 font-body text-sm flex items-start gap-2">
                      <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE (ORIGINAL) ── */}
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

      {/* ── MARKRETE SOLUTION (ORIGINAL) ── */}
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
              { title: "Monolithic Structure", desc: "Reinforced concrete creates a single, unified structural roof that cannot be separated by wind uplift forces." },
              { title: "No Wood Components", desc: "Eliminates termite risk, fire vulnerability, and water damage susceptibility from the roof structure entirely." },
              { title: "Engineered for Uplift", desc: "Designed to resist the extreme uplift forces generated by Category 5 hurricane-force winds." },
              { title: "Permanent Installation", desc: "Unlike traditional roofs that require replacement every 30–40 years, MARkrete is a generational investment." },
              { title: "Insurance Savings", desc: "Homeowners typically save 40%–50% on insurance premiums compared to traditional roof systems." },
              { title: "Miami-Dade Approved", desc: "Approved in the county with the strictest building codes in the United States." },
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

      {/* ── CTA BANNER: LEFT-ALIGNED INDUSTRIAL GREEN ── */}
<section className="bg-[#007b32] py-24 relative overflow-hidden border-t border-white/10">
  {/* Subtle Technical Pattern Overlay */}
  <div className="absolute inset-0 opacity-10 pointer-events-none" 
       style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

  <div className="max-w-[1200px] mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
      
      {/* Left Content Column */}
      <div className="max-w-2xl">
        {/* Leading Line */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[1px] bg-white/50" />
          <span className="font-heading font-800 text-white text-[10px] uppercase tracking-[0.5em]">
            Project Consultation
          </span>
        </div>

        <h2 className="font-display text-white mb-6 leading-[0.85] uppercase tracking-tighter" 
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)" }}>
          READY TO<br /> 
          <span className="text-[#0d0d0d]/65">UPGRADE YOUR ROOF?</span>
        </h2>

        <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.15em] leading-relaxed font-body max-w-xl border-l border-white/20 pl-6">
          Contact us to learn if MARkrete is right for your project.
        </p>
      </div>

      {/* Right Button Column */}
      <div className="flex shrink-0">
        <Link href="/contact">
          <div className="group relative cursor-pointer">
            {/* The "Hardware" Button */}
            <span className="relative z-10 block bg-white text-[#007b32] font-heading font-900 uppercase tracking-[0.2em] text-xs py-6 px-12 transition-all duration-300 group-hover:bg-[#0d0d0d] group-hover:text-white">
              START YOUR PROJECT
            </span>
            {/* Structural Ghost Border */}
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
