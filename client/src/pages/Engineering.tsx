/**
 * MARkrete — Engineering Page
 * Design: Bold Monochromatic with Green Power Accents
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, FileText, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CONCRETE_POUR_IMG = "/images/engineer-plans.jpg";

const engineeringDeliverables = [
  { title: "Roof Framing Plan", desc: "Complete structural layout of the roof framing system above the tie beam." },
  { title: "Reinforcement Layout", desc: "Detailed rebar placement plans designed to meet or exceed local building codes." },
  { title: "Structural Calculations", desc: "Full engineering calculations supporting the structural design of the roof system." },
  { title: "Panel Configuration", desc: "Custom panel layout and sizing documentation for each specific project." },
  { title: "Shoring Plans & Calculations", desc: "Temporary shoring design to support the concrete pour during construction." },
  { title: "Sections & Details", desc: "Construction details and cross-sections for all critical connections and transitions." },
];

const engineeringProcess = [
  {
    step: "01",
    title: "Project Review",
    desc: "MARkrete's partnered engineering firm reviews the architectural plans and site conditions to determine the appropriate roof system design.",
  },
  {
    step: "02",
    title: "Engineering Design",
    desc: "The roof system is designed above the tie beam, including structural calculations, reinforcement layout, and panel configuration.",
  },
  {
    step: "03",
    title: "Plan Production",
    desc: "Complete signed and sealed engineering plans are produced, including all deliverables required for permit submission.",
  },
  {
    step: "04",
    title: "Construction Support",
    desc: "Engineering support is provided throughout the construction process to ensure the system is installed per the approved plans.",
  },
];

export default function Engineering() {
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

      {/* ── NEW REVISED HERO ── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        {/* Large background text for depth */}
        <span className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 font-display text-[20vw] text-white/[0.03] leading-none select-none">
          ENGINEER
        </span>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32]">Structural Confidence</span>
              </div>
              <h1 className="font-display text-white mb-6 leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
                ENGINEERING<br />
                <span className="text-[#007b32]">CREDIBILITY</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed font-body">
                Each MARkrete® project includes signed and sealed engineering plans, providing the technical precision required for high-velocity hurricane zones.
              </p>
            </div>
            <div className="hidden md:block">
               <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                  <div className="text-[#007b32] font-display text-4xl mb-1">P.E.</div>
                  <div className="text-white text-xs uppercase tracking-[0.2em] font-bold">Signed & Sealed</div>
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


      {/* ── ENGINEERING PROCESS ── */}
      <section className="section-gray py-32 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
            <div className="max-w-xl">
              <span className="section-label block mb-4 text-[#007b32]">Workflow Protocol</span>
              <div className="h-1 w-20 bg-[#007b32] mb-6" />
              <h2 className="font-display text-[#0d0d0d] leading-[0.85]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                THE ENGINEERING <br /> 
                <span className="text-gray-400">LIFECYCLE</span>
              </h2>
            </div>
            <div className="text-right">
              <p className="font-heading font-800 text-[10px] uppercase tracking-[0.3em] text-gray-400">
                Phase: Structural Integration <br />
                Status: High Velocity Zone Ready
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            {/* The Connecting "Power Line" - Visible on Desktop */}
            <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[1px] bg-gray-200 z-0" />
            
            {engineeringProcess.map((item, i) => (
              <div 
                key={item.step} 
                className="fade-in-up group relative pb-12 lg:pb-0 lg:px-6" 
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Step Node */}
                <div className="relative z-10 flex items-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center font-display text-lg text-gray-300 group-hover:border-[#007b32] group-hover:text-[#007b32] transition-all duration-500 shadow-sm">
                    {item.step}
                  </div>
                  <div className="ml-4 h-[1px] flex-1 bg-gray-100 lg:hidden" />
                </div>

                {/* Content */}
                <div className="relative">
                  <span className="absolute -top-4 left-0 font-display text-[5rem] text-black/[0.03] leading-none select-none group-hover:text-[#007b32]/[0.05] transition-colors duration-500">
                    {item.step}
                  </span>
                  
                  <h3 className="font-heading font-800 text-[#0d0d0d] text-sm uppercase tracking-widest mb-4 group-hover:text-[#007b32] transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="w-8 h-[2px] bg-gray-200 mb-4 group-hover:w-16 group-hover:bg-[#007b32] transition-all duration-500" />
                  
                  <p className="text-gray-600 text-sm font-body leading-relaxed max-w-[260px]">
                    {item.desc}
                  </p>

                  <div className="mt-6 font-heading font-700 text-[9px] uppercase tracking-[0.2em] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    System Check: Validated
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ── DELIVERABLES ── */}
      <section className="section-dark py-24 relative overflow-hidden">
        <span className="bg-number bg-number-light left-0 bottom-0 -translate-x-1/4 translate-y-1/4">DOC</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label block mb-4">What's Included</span>
              <div className="green-accent-line" />
              <h2 className="font-display text-white mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                ENGINEERING DESIGN DELIVERABLES
              </h2>
              <div className="space-y-4">
                {engineeringDeliverables.map((item, i) => (
                  <div key={item.title} className="fade-in-up flex items-start gap-4 bg-white/5 border border-white/10 p-4" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <FileText size={18} className="text-[#007b32] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-heading font-700 text-white text-sm mb-1">{item.title}</div>
                      <div className="text-gray-400 text-xs font-body">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={CONCRETE_POUR_IMG}
                alt="Concrete pour with engineering precision"
                className="w-full object-cover mb-6"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="bg-[#007b32] p-6">
                <div className="font-display text-white text-2xl mb-2">SIGNED & SEALED</div>
                <p className="text-white/80 font-body text-sm">
                  All engineering plans are signed and sealed by a licensed professional engineer, meeting the requirements of Miami-Dade County and other jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      

      {/* ── SUPPORT NOTE ── */}
      <section className="section-light py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0d0d0d] p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle size={24} className="text-[#007b32] shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-700 text-white text-xl mb-3">Support Throughout</h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  MARkrete's engineering team provides support throughout the entire construction process — from initial design review through final inspection. Our team is available to answer questions, address RFIs, and ensure the system is installed correctly.
                </p>
              </div>
            </div>
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
          Need <br /> 
          <span className="text-[#0d0d0d]/65">engineering support?</span>
        </h2>

        <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.15em] leading-relaxed font-body max-w-xl border-l border-white/20 pl-6">
          Contact us to discuss your project's engineering requirements. 
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
