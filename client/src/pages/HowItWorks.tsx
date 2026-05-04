/**
 * MARkrete — How It Works Page
 * Design: Bold Monochromatic with Green Power Accents
 * Update: Integrated Field Execution Videos for process verification.
 * Redesign: Steps section updated to "Super Cool Style"
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Install Panels",
    image: "/images/install-panels.jpg",
    subtitle: "PHASE 01: The Foundation",
    desc: "Custom-sized EPS insulated panels are installed using 20-gauge metal structural channels. Each panel is precision-cut to specification before delivery, reducing jobsite labor and ensuring a perfect fit. The metal channels provide the structural framework that will support the concrete pour.",
    details: [
      "Panels cut to specification before delivery",
      "20-gauge metal structural channels",
      "Reduced jobsite labor",
      "Mechanical systems easily tied to metal frames",
    ],
  },
  {
    number: "02",
    title: "Install Steel Reinforcement",
    image: "/images/roof-rebar.jpg",
    subtitle: "PHASE 02: Structural Integrity",
    desc: "Rebar is installed according to signed and sealed engineered plans. The reinforcement layout is designed by MARkrete's partnered engineering firm to meet or exceed local building code requirements. This step ensures the structural integrity of the finished concrete roof system.",
    details: [
      "Installed per engineered reinforcement layout",
      "Signed & sealed engineering plans included",
      "Designed to exceed local building codes",
      "Miami-Dade County approved specifications",
    ],
  },
  {
    number: "03",
    title: "Pour Reinforced Concrete",
    image: "/images/Picture12.jpg",
    subtitle: "PHASE 03: Monolithic Completion",
    desc: "5–7 inches of reinforced concrete is poured over the system. The EPS insulation remains permanently in place beneath the concrete, providing R-30+ thermal performance. The result is a monolithic reinforced concrete roof structure that is engineered to last 100 years or more.",
    details: [
      "5–7 inches reinforced concrete",
      "Insulation remains in place (R-30+ performance)",
      "Creates monolithic structural roof",
      "Shoring plans & calculations included",
    ],
  },
];

const layers = [
  { label: "Roof Finish", desc: "Selected by Homeowner / Architect", color: "bg-gray-200" },
  { label: "5–7\" Reinforced Concrete", desc: "Structural monolithic layer", color: "bg-gray-400" },
  { label: "Steel Reinforcement (Rebar)", desc: "Per engineered plans", color: "bg-gray-500" },
  { label: "R-30+ EPS Insulated Panel System", desc: "Integrated thermal insulation", color: "bg-[#007b32]" },
  { label: "20-Gauge Metal Structural Channels", desc: "Structural framework", color: "bg-[#6b7280]" },
  { label: "Tie Beam & Structural Walls", desc: "Building structure below", color: "bg-[#4a4a4a]" },
];

export default function HowItWorks() {
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

      {/* ── PAGE HERO ── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <span className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 font-display text-[20vw] text-white/[0.03] leading-none select-none">
          PROCESS
        </span>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32]">Engineering Workflow</span>
              </div>
              <h1 className="font-display text-white mb-6 leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
                FROM SPEC TO <br />
                <span className="text-[#007b32]">MONOLITHIC</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed font-body">
                The MARkrete® installation is a high-precision sequence designed to eliminate jobsite waste and maximize structural density.
              </p>
            </div>
            <div className="hidden md:block">
               <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                  <div className="text-[#007b32] font-display text-4xl mb-1">03</div>
                  <div className="text-white text-xs uppercase tracking-[0.2em] font-bold">Critical Phases</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING AUTHORITY NOTE ── */}
      <section className="bg-[#1a1a1a] py-24 w-full overflow-hidden">
        <div className="max-w-[1250px] mx-auto px-4">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/3">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#007b32]" />
                <span className="font-heading font-800 text-[#007b32] text-[10px] uppercase tracking-[0.4em]">
                  Project Protocol
                </span>
              </div>
              <h3 className="font-display text-white text-5xl md:text-6xl leading-[0.85] uppercase mb-6">
                Engineering <br /> 
                <span className="text-white/40">Authority</span>
              </h3>
              <p className="text-white/30 font-heading font-700 text-[9px] uppercase tracking-[0.3em] border-l border-white/10 pl-4">
                Standard Operating Procedure <br />
                Structural Integrity Verified
              </p>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[#007b32] text-2xl">01</span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </div>
                  <h4 className="font-heading font-800 text-white text-[11px] uppercase tracking-widest">
                    Engineer of Record
                  </h4>
                  <p className="text-white/60 font-body text-base leading-relaxed">
                    Responsible for designing the building structure <span className="text-white font-600">up to the tie beam</span>.
                  </p>
                </div>

                <div className="space-y-4 bg-white/[0.03] p-8 border-t-2 border-[#007b32]">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[#007b32] text-2xl">02</span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </div>
                  <h4 className="font-heading font-800 text-white text-[11px] uppercase tracking-widest">
                    MARkrete Systems
                  </h4>
                  <p className="text-white font-body text-base leading-relaxed">
                    Our partnered firm designs the <span className="text-[#007b32] font-600">concrete roof system</span> above the tie beam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS (REMODELLED: SUPER COOL STYLE) ── */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#f9f9f9] -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="max-w-[1250px] mx-auto px-4 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -translate-x-1/2 z-0" />

          <div className="space-y-24 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`fade-in-up group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* IMAGE BLOCK */}
                <div className="w-full lg:w-[55%] relative">
                  <div className="relative overflow-hidden aspect-[16/10] shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    <div className={`absolute top-0 ${i % 2 === 1 ? "right-0" : "left-0"} w-16 h-16 bg-[#007b32] flex items-center justify-center`}>
                      <span className="font-display text-white text-2xl">{step.number}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className={`hidden lg:block absolute -bottom-6 ${i % 2 === 1 ? "-left-6" : "-right-6"} w-full h-full border-[1px] border-gray-200 -z-10`} />
                </div>

                {/* TEXT CONTENT BLOCK */}
                <div className="w-full lg:w-[45%] lg:p-16 flex flex-col justify-center relative">
                  <span className="absolute top-0 left-0 lg:left-12 font-display text-[10rem] text-black/[0.03] leading-none select-none pointer-events-none transform -translate-y-1/4">
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-0.5 bg-[#007b32]" />
                      <span className="font-heading font-800 text-[#007b32] text-[10px] uppercase tracking-[0.3em]">
                        {step.subtitle}
                      </span>
                    </div>

                    <h2 className="font-display text-[#0d0d0d] text-4xl md:text-6xl leading-[0.85] uppercase mb-8 group-hover:text-[#007b32] transition-colors duration-500">
                      {step.title}
                    </h2>

                    <div className="relative mb-8">
                       <p className="text-gray-600 font-body text-base leading-relaxed relative z-10">
                        {step.desc}
                      </p>
                      <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gray-100 group-hover:bg-[#007b32] transition-all duration-700" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-8 border-t border-gray-100">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3 group/item">
                          <div className="mt-1.5 w-2 h-[1px] bg-[#007b32] transition-all duration-300 group-hover/item:w-4" />
                          <span className="font-heading font-700 text-[#0d0d0d] text-[11px] uppercase tracking-wider opacity-80 group-hover/item:opacity-100 transition-opacity">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 flex items-center gap-2">
                       
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IN-FIELD EXECUTION VIDEOS (REMODELLED: SUPER COOL STYLE) ── */}
      <section className="section-gray py-32 border-t border-b border-gray-200 relative overflow-hidden">
        {/* Background Decorative Skew */}
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/50 -skew-x-12 -translate-x-1/2 pointer-events-none" />
        
        {/* Large Blueprint Watermark */}
        <span className="absolute left-10 top-1/2 -translate-y-1/2 font-display text-[15vw] text-black/[0.02] leading-none select-none pointer-events-none uppercase">
          Field//Verified
        </span>

        <div className="max-w-[1250px] mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32]">Site Documentation</span>
              </div>
              <h2 className="font-display text-[#0d0d0d] leading-[0.85]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                PROCESS <br />
                <span className="text-gray-400 uppercase">IN MOTION</span>
              </h2>
            </div>
            <div className="lg:text-right fade-in-up">
              <p className="text-gray-500 font-body text-lg max-w-sm ml-auto">
                The MARkrete® sequence during critical deployment phases.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
            {/* The Vertical Power Line - Centered for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2 z-0" />

            {/* Video 1: Interior/Ceiling Panels */}
            <div className="fade-in-up group relative space-y-8" style={{ transitionDelay: "0.1s" }}>
              <div className="relative aspect-video bg-[#0d0d0d] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[#007b32]/10">
                <video 
                  controls 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src="/videos/interior-panel-video.mp4" type="video/mp4" />
                </video>
                
                {/* Technical Corner Label */}
                <div className="absolute top-0 left-0 bg-[#007b32] text-white font-heading font-900 text-[15px] uppercase tracking-[0.3em] px-5 py-2">
                  01
                </div>
                
                {/* Video Play Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <div className="relative pl-6 border-l-2 border-gray-100 group-hover:border-[#007b32] transition-colors duration-500">
                <h3 className="font-display text-3xl text-[#0d0d0d] uppercase mb-3">Internal Framework</h3>
                <p className="text-gray-600 font-body text-base leading-relaxed max-w-md">
                  On-site footage of high-precision EPS panels viewed from the interior. Note the rigid integration of the 20-gauge structural channels.
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                   <div className="w-2 h-2 rounded-full bg-[#007b32] animate-pulse" />
                   <span className="text-[9px] font-heading font-900 uppercase tracking-widest text-[#0d0d0d]">Field Video</span>
                </div>
              </div>
            </div>

            {/* Video 2: Rebar Cage/Roof View */}
            <div className="fade-in-up group relative space-y-8" style={{ transitionDelay: "0.2s" }}>
              <div className="relative aspect-video bg-[#0d0d0d] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[#007b32]/10">
                <video 
                  controls 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src="/videos/rebar-cage-video.mov" type="video/mp4" />
                </video>
                
                {/* Technical Corner Label */}
                <div className="absolute top-0 right-0 bg-[#007b32] text-white font-heading font-900 text-[15px] uppercase tracking-[0.3em] px-5 py-2">
                  02
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <div className="relative pl-6 border-l-2 border-gray-100 group-hover:border-[#007b32] transition-colors duration-500">
                <h3 className="font-display text-3xl text-[#0d0d0d] uppercase mb-3">Reinforcement Grid</h3>
                <p className="text-gray-600 font-body text-base leading-relaxed max-w-md">
                  High-angle drone perspective showing the complete rebar cage coverage. This grid is engineered to deliver catastrophic storm resilience.
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                   <div className="w-2 h-2 rounded-full bg-[#007b32] animate-pulse" />
                   <span className="text-[9px] font-heading font-900 uppercase tracking-widest text-[#0d0d0d]">Field Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROOF STRUCTURE LAYERS ── */}
      <section className="section-dark py-24 relative overflow-hidden">
        <span className="bg-number bg-number-light right-0 top-1/2 translate-x-1/3 -translate-y-1/2">STR</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">System Architecture</span>
            <div className="green-accent-line mx-auto" />
            <h2 className="font-display text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              ROOF STRUCTURE LAYERS
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto font-body">
              From top to bottom, each layer plays a critical role in delivering structural performance.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            {layers.map((layer, i) => (
              <div key={layer.label} className="fade-in-up flex items-center gap-4" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={`w-6 h-12 shrink-0 ${layer.color}`} />
                <div className="flex-1 bg-white/5 border border-white/10 px-5 py-3">
                  <div className="font-heading font-700 text-white text-sm">{layer.label}</div>
                  <div className="text-gray-400 text-xs font-body mt-0.5">{layer.desc}</div>
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
          SEE THE <br /> 
          <span className="text-[#0d0d0d]/30">SYSTEM SPECIFICATIONS</span>
        </h2>

        <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.15em] leading-relaxed font-body max-w-xl border-l border-white/20 pl-6">
          Detailed technical specifications for the MARkrete system.
        </p>
      </div>

      {/* Right Button Column */}
      <div className="flex shrink-0">
        <Link href="/system-specs">
          <div className="group relative cursor-pointer">
            {/* The "Hardware" Button */}
            <span className="relative z-10 block bg-white text-[#007b32] font-heading font-900 uppercase tracking-[0.2em] text-xs py-6 px-12 transition-all duration-300 group-hover:bg-[#0d0d0d] group-hover:text-white">
              VIEW SPECIFICATIONS
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