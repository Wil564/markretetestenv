/**
 * MARkrete Home Page
 * Design: Bold Monochromatic with Green Power Accents
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Shield, Zap, Award, ChevronDown,
  Contact, Home as HomeIcon, Construction
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "/images/pour-south.jpg";
const LUXURY_HOME_IMG = "/images/balaguer-spec.jpg";
const ARCHITECT_IMG = "/images/190-casurina.jpeg";
const BUILDER_IMG = "/images/builder.jpg";
const HOMEOWNER_IMG = "/images/150-arvida.webp";

const stats = [
  { value: "100+", label: "Year Lifespan" },
  { value: "R-30+", label: "Insulation Rating" },
  { value: "Cat 5", label: "Hurricane Rated" },
  { value: "60ft", label: "Span Capability" },
];

const highlights = [
  {
    icon: Shield,
    title: "Hurricane Resistant",
    desc: "Reinforced concrete monolithic structure engineered to withstand Category 5 hurricane forces.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "Integrated R-30+ EPS insulation delivers superior thermal performance and reduces energy costs.",
  },
  {
    icon: Award,
    title: "U.S. Patented",
    desc: "Patent #10196818. Approved in Miami-Dade County — the strictest building codes in the country.",
  },
];

export default function Home() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = revealRef.current;
    if (el) {
      el.querySelectorAll(".fade-in-up").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/65 to-transparent" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#007b32]" />
              <span className="section-label text-white">U.S. Patented System #10196818</span>
            </div>

            <h1
              className="font-display text-white leading-none mb-6 text-shadow-strong"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              A 100-YEAR ROOF
              <br />
              <span className="text-[#007b32]">BUILT FOR</span>
              <br />
              <span className="text-[#007b32]">THE STORM</span>
            </h1>

            <p className="text-gray-100 text-lg leading-relaxed mb-8 max-w-xl font-body text-shadow-strong">
              MARkrete® is a patented insulated reinforced concrete roof system designed for hurricane-prone regions. Proven across Florida and the Caribbean.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/why-markrete">
                <span className="btn-green flex items-center gap-2 cursor-pointer">
                  Why MARkrete <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/contact">
                <span className="btn-outline-white cursor-pointer">
                  Start Your Project
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2">
                  <div className="font-display text-[#007b32] text-2xl leading-none">{stat.value}</div>
                  <div className="text-white text-xs font-heading tracking-wider uppercase mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      

      {/* ── HIGH-VELOCITY VERIFICATION BAR ── */}
      <div className="bg-[#007b32] py-6 border-y border-white/10 overflow-hidden relative">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-full mx-auto relative z-10">
          <div className="flex items-center">
            {/* We use a flex container that can be animated for an infinite scroll effect if desired, 
                or kept as a high-impact static flex for this clean version */}
            <div className="flex flex-nowrap items-center justify-around w-full gap-12 px-8">
              
              {[
                "Approved in Miami-Dade County",
                "Strictest Building Codes in the U.S.",
                "Signed & Sealed Engineering Included",
                "Compatible with Pitched & Flat Roofs"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-6 group">
                
                  
                  {/* The Text */}
                  <span className="whitespace-nowrap text-white text-[11px] md:text-xs font-heading font-900 tracking-[0.2em] uppercase italic">
                    {text}
                  </span>

                  {/* Industrial Divider */}
                  {i !== 3 && (
                    <div className="hidden lg:flex items-center gap-1 ml-12">
                      <div className="w-1 h-1 bg-white rotate-45" />
                      <div className="w-8 h-[1px] bg-white/30" />
                      <div className="w-1 h-1 bg-white rotate-45" />
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Decorative corner brackets for that "Technical Ledger" feel */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />
      </div>

      {/* ── HIGHLIGHTS (ULTRA-COOL TECHNICAL STYLE) ── */}
      <section className="bg-white py-32 relative overflow-hidden">
        {/* Background Decorative Skew - Signature Super Cool Style */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f9f9f9] -skew-x-12 translate-x-1/4 pointer-events-none" />
        
        {/* Massive Background Watermark */}
        <span className="absolute left-10 top-1/2 -translate-y-1/2 font-display text-[15vw] text-black/[0.02] leading-none select-none pointer-events-none uppercase">
          CORE//SPECS
        </span>

        <div className="max-w-[1250px] mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="font-heading font-800 text-[#007b32] text-[10px] uppercase tracking-[0.4em]">Structural Advantages</span>
              </div>
              <h2 className="font-display text-[#0d0d0d] leading-[0.85]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                SYSTEM <br />
                <span className="text-gray-400 uppercase">INTEGRITY</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
            {/* The Vertical Power Lines (Desktop) */}
            <div className="hidden lg:block absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-gray-100 z-0" />
            <div className="hidden lg:block absolute left-[66.66%] top-0 bottom-0 w-[1px] bg-gray-100 z-0" />

            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="group relative flex flex-col"
              >
                {/* Technical Index Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-[#0d0d0d] flex items-center justify-center relative group-hover:bg-[#007b32] transition-all duration-500 shadow-2xl">
                    <item.icon size={28} className="text-white relative z-10" />
                    {/* Skewed Frame Overlay */}
                    <div className="absolute inset-0 border border-[#007b32] scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 -rotate-3" />
                  </div>
                  <div className="flex-1 h-[1px] bg-gray-100" />
                 
                </div>

                {/* Content Block */}
                <div className="relative pl-6">
                  {/* Vertical Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100 group-hover:bg-[#007b32] transition-all duration-700" />
                  
                  <h3 className="font-display text-2xl text-[#0d0d0d] uppercase mb-4 tracking-tight leading-none">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 text-base leading-relaxed font-body mb-8">
                    {item.desc}
                  </p>

                  {/* Technical Metadata Tag */}
                  <div className="inline-flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-4 h-[2px] bg-[#007b32]" />
                      <div className="w-2 h-[2px] bg-[#007b32] opacity-30" />
                    </div>
                  </div>
                </div>

                {/* Bottom Sequence ID */}
                <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── WHAT IS MARKRETE: ARCHITECTURAL REVEAL STYLE (CLEAN VERSION) ── */}
<section className="relative overflow-hidden bg-[#0a0a0a] py-32">
  {/* Large Background Watermark for "Structural Authority" vibe */}
  <div className="absolute top-0 right-0 select-none opacity-[0.03] font-display text-[20vw] leading-none translate-x-1/4 -translate-y-1/4 text-white">
    01
  </div>

  <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
    <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-12">
      
      {/* Content Column */}
      <div className="flex flex-col justify-center border-l border-white/10 pl-8 lg:col-span-6 lg:pl-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-[2px] w-12 bg-[#007b32]" />
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#007b32]">
            Engineering the Future
          </span>
        </div>

        <h2 className="font-display leading-[0.9] text-white mb-10" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
          MONOLITHIC <br />
          <span className="text-gray-500">REINFORCEMENT.</span>
        </h2>

        <div className="max-w-md">
          <p className="font-body text-lg leading-relaxed text-gray-300 mb-6">
            By replacing traditional wood structures with <span className="text-white font-medium">precision-cut insulated panels</span> and reinforced concrete, MARkrete creates a permanent structural shield.
          </p>
          
          <p className="font-body text-sm leading-relaxed text-gray-500 mb-10 italic border-l-2 border-gray-800 pl-4">
            Engineered for both pitched and flat designs, bringing industrial-grade resilience to residential luxury.
          </p>

          <Link href="/how-it-works">
              {/* w-fit ensures the button only stretches to fit content */}
              <span className="btn-green flex items-center gap-3 px-10 py-4 cursor-pointer group w-fit">
                Learn More
                {/* Kept the subtle transform here; remove group-hover:translate-x-1 if you want it completely static */}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
        </div>
      </div>

      {/* Image Column: "The Foundation" */}
      <div className="relative mt-16 lg:col-span-6 lg:mt-0">
        {/* Removed all hover effects, grayscale, and grid overlay */}
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={LUXURY_HOME_IMG}
            alt="MARkrete structural detail"
            className="h-full w-full object-cover shadow-2xl"
          />
        </div>

        {/* Floating Data Badge (Kept for layout) */}
        <div className="absolute -bottom-8 right-0 bg-[#007b32] p-8 shadow-2xl lg:-right-8">
          <div className="flex flex-col items-start">
            <span className="font-display text-5xl text-white">100+</span>
            <span className="mt-1 max-w-[100px] font-heading text-[10px] uppercase tracking-tighter text-white/90">
              Years of Structural Integrity
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ── HOW IT WORKS TEASER (FIXED VISIBILITY) ── */}
      <section 
        className="section-gray py-32 relative overflow-hidden" 
        ref={revealRef} // <--- CRITICAL: This connects it to your Intersection Observer
      >
        {/* Background Decorative Skew */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-white/40 -skew-x-12 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
            <div className="max-w-xl fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32]">Core Methodology</span>
              </div>
              <h2 className="font-display text-[#0d0d0d] leading-[0.85]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                HOW <span className="text-gray-400 uppercase">MARkrete</span> <br /> 
                WORKS
              </h2>
            </div>
            <div className="text-right hidden md:block fade-in-up">
              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Horizontal Power Line Connector (Desktop) */}
            <div className="hidden md:block absolute top-[24px] left-0 w-full h-[1px] bg-gray-200 z-0" />
            
            {[
              {
                step: "01",
                title: "Install Panels",
                desc: "Custom-sized EPS insulated panels are installed using 20-gauge metal channels.",
                tag: "Precision Fit"
              },
              {
                step: "02",
                title: "Steel Reinforcement",
                desc: "Rebar is installed according to engineered plans for maximum structural integrity.",
                tag: "High-Tensile"
              },
              {
                step: "03",
                title: "Concrete Pour",
                desc: "5–7 inches of reinforced concrete is poured, creating a permanent R-30+ thermal barrier.",
                tag: "Monolithic"
              },
            ].map((item, i) => (
              <div 
                key={item.step} 
                className="fade-in-up group relative pb-12 md:pb-0 md:px-6" 
                style={{ transitionDelay: `${i * 0.15}s` }} // Increased delay for a smoother staggered entrance
              >
                {/* Node */}
                <div className="relative z-10 flex items-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center font-display text-lg text-gray-300 group-hover:border-[#007b32] group-hover:text-[#007b32] transition-all duration-500 shadow-sm">
                    {item.step}
                  </div>
                  <div className="ml-4 h-[1px] flex-1 bg-gray-100 md:hidden" />
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
                  
                  <p className="text-gray-600 text-sm font-body leading-relaxed max-w-[280px]">
                    {item.desc}
                  </p>

                  <div className="mt-6 font-heading font-700 text-[9px] uppercase tracking-[0.2em] text-[#007b32] opacity-0 group-hover:opacity-100 transition-opacity">
                    System: {item.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 flex justify-center fade-in-up">
            <Link href="/how-it-works">
              <span className="btn-green flex items-center gap-3 px-10 py-4 cursor-pointer group">
                View Full Technical Process 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* ── STAKEHOLDER: TARGETED SOLUTIONS (DARK THEME) ── */}
<section className="bg-[#0d0d0d] py-32 relative overflow-hidden">
  {/* Subtle Dark Background Accent */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-[#161616] -skew-x-12 translate-x-1/4 pointer-events-none" />

  <div className="max-w-[1250px] mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#007b32]" />
          <span className="font-heading font-800 text-[#007b32] text-[10px] uppercase tracking-[0.4em]">
            Solutions by Stakeholder
          </span>
        </div>
        <h2 className="font-display text-white text-5xl md:text-6xl uppercase tracking-tighter leading-[0.85]">
          ENGINEERED <br />
          <span className="text-gray-500">FOR EXCELLENCE</span>
        </h2>
      </div>
      <p className="text-gray-400 font-body max-w-xs mb-2">
        A permanent structural solution tailored for those who design, build, and inhabit the future of coastal architecture.
      </p>
    </div>

    {/* The Solution Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Architect Card */}
      <Link href="/benefits?tab=architects">
        <div className="group cursor-pointer">
          <div className="relative aspect-[4/5] overflow-hidden mb-6 shadow-2xl border border-white/5">
            <img 
              src={ARCHITECT_IMG} 
              alt="Architectural design with MARkrete"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90" 
            />
         
            <div className="absolute bottom-0 left-0 bg-[#007b32] p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <Contact className="text-white" size={24} />
            </div>
          </div>
          <h3 className="font-display text-2xl text-white uppercase mb-3 tracking-tight">Architects</h3>
          <p className="text-gray-500 text-sm font-body leading-relaxed border-l border-white/10 pl-4 group-hover:text-gray-300 transition-colors">
            Design without limits. Achieve 60-foot clear spans and complex pitched roof geometries with a single monolithic system.
          </p>
        </div>
      </Link>

      {/* Builder Card */}
      <Link href="/benefits?tab=builders">
        <div className="group cursor-pointer">
          <div className="relative aspect-[4/5] overflow-hidden mb-6 shadow-2xl border border-white/5">
            <img 
              src={BUILDER_IMG} 
              alt="MARkrete installation process"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90"  
            />
            <div className="absolute inset-0 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-0 left-0 bg-[#007b32] p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <Construction className="text-white" size={24} />
            </div>
          </div>
          <h3 className="font-display text-2xl text-white uppercase mb-3 tracking-tight">Builders</h3>
          <p className="text-gray-500 text-sm font-body leading-relaxed border-l border-white/10 pl-4 group-hover:text-gray-300 transition-colors">
            Accelerate schedules. Eliminate the need for heavy cranes and reduce specialized labor with precision-engineered lightweight panels.
          </p>
        </div>
      </Link>

      {/* Homeowner Card */}
      <Link href="/benefits?tab=homeowners">
        <div className="group cursor-pointer">
          <div className="relative aspect-[4/5] overflow-hidden mb-6 shadow-2xl border border-white/5">
            <img 
              src={HOMEOWNER_IMG} 
              alt="Luxury residence with MARkrete roof"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90" 
            />
            <div className="absolute inset-0 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-0 left-0 bg-[#007b32] p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <HomeIcon className="text-white" size={24} />
            </div>
          </div>
          <h3 className="font-display text-2xl text-white uppercase mb-3 tracking-tight">Homeowners</h3>
          <p className="text-gray-500 text-sm font-body leading-relaxed border-l border-white/10 pl-4 group-hover:text-gray-300 transition-colors">
            The ultimate security. Protect your investment with a 100-year roof that offers R-30 insulation and total hurricane peace of mind.
          </p>
        </div>
      </Link>

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
          READY TO BUILD <br /> 
          <span className="text-[#0d0d0d]/65">FOR THE NEXT 100 YEARS?</span>
        </h2>

        <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.15em] leading-relaxed font-body max-w-xl border-l border-white/20 pl-6">
          Whether you are an architect, builder, developer, or homeowner — our engineering team is ready to determine if MARkrete is the right fit for your structural evolution.
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