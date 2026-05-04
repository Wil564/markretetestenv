/**
 * MARkrete — System Specifications Page
 * Design: Bold Monochromatic with Green Power Accents
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const specs = [
  {
    category: "Insulation",
    items: [
      { label: "Type", value: "EPS (Expanded Polystyrene) Panels" },
      { label: "R-Value", value: "R-30 PLUS" },
      { label: "Integration", value: "Permanently embedded within concrete structure" },
      { label: "Replacement", value: "None required — lifetime performance" },
    ],
  },
  {
    category: "Metal Components",
    items: [
      { label: "Channel Gauge", value: "20-gauge metal structural channels" },
      { label: "Function", value: "Structural framework for panel installation" },
      { label: "Compatibility", value: "Mechanical systems easily tied to frames" },
    ],
  },
  {
    category: "Concrete Structure",
    items: [
      { label: "Thickness", value: "5–7 inches reinforced concrete" },
      { label: "Reinforcement", value: "Steel rebar per engineered plans" },
      { label: "Structure Type", value: "Monolithic — single unified structure" },
      { label: "Span Capability", value: "Up to 60 feet" },
    ],
  },
  {
    category: "Roof Geometry",
    items: [
      { label: "Roof Types", value: "Pitched or flat roofs" },
      { label: "Maximum Pitch", value: "Up to 10/12 pitch" },
      { label: "Compatibility", value: "Traditional residential & modern architecture" },
    ],
  },
  {
    category: "Engineering",
    items: [
      { label: "Plans Included", value: "Signed and sealed roof system plans" },
      { label: "Scope", value: "Above the tie beam (MARkrete partnered engineers)" },
      { label: "Deliverables", value: "Roof framing plan, reinforcement layout, structural calculations, panel configuration, shoring plans" },
    ],
  },
  {
    category: "Certifications",
    items: [
      { label: "Patent", value: "U.S. Patent #10196818" },
      { label: "Approval", value: "Miami-Dade County Approved" },
      { label: "Proven In", value: "South Florida and the Caribbean" },
    ],
  },
];

const keyHighlights = [
  { value: "R-30+", label: "Insulation Rating" },
  { value: "5–7\"", label: "Concrete Thickness" },
  { value: "60 ft", label: "Span Capability" },
  { value: "20-ga", label: "Metal Channels" },
  { value: "10/12", label: "Max Pitch" },
  { value: "100+", label: "Year Lifespan" },
];

const patentDrawings = [
  { id: "FIG. 1", img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig1-1a-1b-1c_e35791bc.webp", desc: "Isometric view of the Z-channel device with transportation rebar mounted using throughholes." },
  { id: "FIG. 1C", img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig1c_ecc748d2.png", desc: "Front elevational view showing insulating boards secured between two Z-channels." },
  { id: "FIG. 2A", img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig2a_79d78a04.webp", desc: "Partial isometric view of a roof showing the rebar grid mounted to Z-channels before pour." },
  { id: "FIG. 2B", img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig2b_63a4c677.webp", desc: "Cross-sectional elevation detailing the terminal integration of rebar and EPS within the concrete slab." },
  { id: "FIG. 3", img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig3_2a8c34b7.webp", desc: "Isometric view of a roof with a partial cross-section showing rebar grid secured." },
  { id: "FIG. 5", img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig5_b591f97d.webp", desc: "Isometric top partial view of a completed roof showing the concrete layer poured over rebar." },
  { id: "FIG. 6", img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig6_ec8b0235.webp", desc: "Isometric view of the Z-channel device securing one insulation board on both sides." }
];

export default function SystemSpecs() {
  const revealRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-up").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <span className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 font-display text-[20vw] text-white/[0.03] leading-none select-none uppercase">
          Specs
        </span>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32]">Technical Details</span>
              </div>
              <h1 className="font-display text-white mb-6 leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
                SYSTEM <br />
                <span className="text-[#007b32]">SPECIFICATIONS</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed font-body">
                Complete technical data for the MARkrete patented insulated reinforced concrete roof system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY HIGHLIGHTS: INDUSTRIAL VERIFICATION BAR ── */}
<section className="bg-[#007b32] py-8 border-y border-white/10 overflow-hidden relative">
  {/* Subtle geometric pattern overlay */}
  <div className="absolute inset-0 opacity-10 pointer-events-none" 
       style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
  
  <div className="max-w-full mx-auto relative z-10 px-8">
    <div className="flex flex-nowrap items-center justify-around w-full gap-8 lg:gap-12">
      
      {keyHighlights.map((item, i) => (
        <div key={item.label} className="flex items-center gap-8 group">
          
          {/* Data Pair */}
          <div className="flex flex-col items-start lg:items-center">
            <span className="font-display text-white text-2xl md:text-3xl leading-none italic uppercase">
              {item.value}
            </span>
            <span className="text-white/70 text-[9px] md:text-[10px] font-heading font-900 tracking-[0.2em] uppercase mt-1">
              {item.label}
            </span>
          </div>

          {/* Industrial Divider - Hidden on the last item */}
          {i !== keyHighlights.length - 1 && (
            <div className="hidden lg:flex items-center gap-1 ml-4 opacity-40">
              <div className="w-1 h-1 bg-white rotate-45" />
              <div className="w-8 h-[1px] bg-white" />
              <div className="w-1 h-1 bg-white rotate-45" />
            </div>
          )}
        </div>
      ))}

    </div>
  </div>

  {/* Technical Ledger corner brackets */}
  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30" />
  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30" />
</section>

      {/* ── SPECS GRID: ARCHITECTURAL REVEAL STYLE (CLEAN LIGHT) ── */}
<section className="bg-white py-32 relative overflow-hidden">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Section Title matching the Patent Drawing style */}
    <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#007b32]" />
          <span className="section-label text-[#007b32]">System Parameters</span>
        </div>
        <h2 className="font-display text-[#0d0d0d] leading-[0.85] uppercase" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
          TECHNICAL <br />
          <span className="text-gray-300">INVENTORY</span>
        </h2>
      </div>
      <p className="text-gray-500 font-body max-w-sm border-l-2 border-[#007b32] pl-6 italic">
        Verified data points for reinforced concrete and structural insulation integrity.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
      {specs.map((spec, i) => (
        <div 
          key={spec.category} 
          className="group bg-white p-10 transition-all duration-500 hover:bg-[#fafafa] relative"
        >
          {/* Index ID matching the Patent ID style */}
          

          <div className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-1.5 bg-[#007b32] opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-display text-2xl text-[#0d0d0d] uppercase tracking-tighter group-hover:text-[#007b32] transition-colors">
              {spec.category}
            </h3>
          </div>
          
          <div className="space-y-8">
            {spec.items.map((item) => (
              <div key={item.label} className="group/item">
                <div className="flex flex-col">
                  {/* Small Monospaced Label */}
                  <span className="text-[9px] font-heading font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 group-hover/item:text-[#007b32] transition-colors">
                    {item.label}
                  </span>
                  {/* Value with Architectural Left Border */}
                  <span className="text-[#1a1a1a] text-base font-body leading-tight border-l border-gray-100 pl-4 group-hover/item:border-[#007b32] transition-all duration-300">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Verification Stamp */}
          <div className="mt-12 pt-6 border-t border-gray-50 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-[1px] bg-gray-200 group-hover:bg-[#007b32] group-hover:w-12 transition-all" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── PATENT SECTION ── */}
      <section className="section-dark py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 p-8">
            <div>
              <span className="section-label block mb-2">Intellectual Property</span>
              <h3 className="font-display text-white text-3xl mb-3">U.S. PATENT #10196818</h3>
              <p className="text-gray-400 font-body max-w-lg">
                The MARkrete construction system is protected by a U.S. patent. Click below to view the full patent documentation on the official USPTO patent database.
              </p>
            </div>
            <a
              href="https://patents.google.com/patent/US10196818"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green flex items-center gap-2 whitespace-nowrap"
            >
              View Patent <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── PATENT DRAWINGS ── */}
      <section className="bg-white py-32 relative overflow-hidden" ref={revealRef}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute top-0 left-1/3 w-px h-full bg-black" />
          <div className="absolute top-0 left-2/3 w-px h-full bg-black" />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32]">Visual Patent Ledger</span>
              </div>
              <h2 className="font-display text-[#0d0d0d] leading-[0.85]" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
                PATENT <br />
                <span className="text-gray-300 uppercase">DRAWINGS</span>
              </h2>
            </div>
            <p className="text-gray-500 font-body max-w-sm border-l-2 border-[#007b32] pl-6 italic">
              Technical illustrations from U.S. Patent #10196818 — Device for Building Concrete Roofs and Method.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {patentDrawings.map((fig) => (
              <div key={fig.id} className="group bg-white p-8 lg:p-12 transition-all duration-500 hover:z-20 relative overflow-hidden">
                <span className="absolute top-4 right-8 font-display text-8xl text-black/[0.03] pointer-events-none group-hover:text-[#007b32]/10 transition-colors">
                  {fig.id.split(' ')[1]}
                </span>

                <div className="relative mb-10 flex items-center justify-center bg-gray-50 p-6 min-h-[350px] border border-gray-100 group-hover:border-[#007b32]/30 transition-all duration-500">
                  <img
                    src={fig.img}
                    alt={fig.id}
                    className="max-h-[300px] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-[1px] bg-[#007b32]" />
                    <span className="font-display text-[#0d0d0d] text-2xl tracking-tighter">{fig.id}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-body leading-relaxed max-w-md group-hover:text-gray-800 transition-colors">
                    {fig.desc}
                  </p>
                </div>
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
          READY TO <br /> 
          <span className="text-[#0d0d0d]/65">specify markrete?</span>
        </h2>

        <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.15em] leading-relaxed font-body max-w-xl border-l border-white/20 pl-6">
          Contact us for project-specific engineering and specifications.
        </p>
      </div>

      {/* Right Button Column */}
      <div className="flex shrink-0">
        <Link href="/contact">
          <div className="group relative cursor-pointer">
            {/* The "Hardware" Button */}
            <span className="relative z-10 block bg-white text-[#007b32] font-heading font-900 uppercase tracking-[0.2em] text-xs py-6 px-12 transition-all duration-300 group-hover:bg-[#0d0d0d] group-hover:text-white">
              Contact Us Today
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