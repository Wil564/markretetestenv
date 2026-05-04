/**
 * MARkrete Home Page
 * Design: Bold Monochromatic with Green Power Accents
 * - Hero: Full-bleed dark with dramatic image overlay
 * - Alternating dark/light sections
 * - Oversized background numbers, stat badges, green accents
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Award, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "/images/pour-south.jpg";
const LUXURY_HOME_IMG = "/images/balaguer-spec.jpg";

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
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/80 to-[#0d0d0d]/40" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#007b32]" />
              <span className="section-label text-[#007b32]">U.S. Patented System #10196818</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-white leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
              A 100-YEAR ROOF
              <br />
              <span className="text-[#007b32]">BUILT FOR</span>
              <br />
              THE STORM
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl font-body">
              MARkrete® is a patented insulated reinforced concrete roof system designed for hurricane-prone regions. Proven in South Florida and the Caribbean.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/why-markrete">
                <span className="btn-green flex items-center gap-2">
                  Why MARkrete <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/contact">
                <span className="btn-outline-white">
                  Start Your Project
                </span>
              </Link>
            </div>

            {/* Stat badges */}
            <div className="flex flex-wrap gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                  <div className="font-display text-[#007b32] text-2xl leading-none">{stat.value}</div>
                  <div className="text-gray-300 text-xs font-heading tracking-wider uppercase mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ── APPROVED BADGE ── */}
      <div className="bg-[#007b32] py-4">
        {/* Using 1400px to ensure it stays on one line on desktop */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white text-sm font-heading font-600 tracking-wider w-full">
            <span className="whitespace-nowrap">✓ Approved in Miami-Dade County</span>
            <span className="hidden xl:block w-px h-4 bg-white/30" />
            <span className="whitespace-nowrap">✓ Strictest Building Codes in the U.S.</span>
            <span className="hidden xl:block w-px h-4 bg-white/30" />
            <span className="whitespace-nowrap">✓ Signed & Sealed Engineering Included</span>
            <span className="hidden xl:block w-px h-4 bg-white/30" />
            <span className="whitespace-nowrap">✓ Compatible with Pitched & Flat Roofs</span>
          </div>
        </div>
      </div>

      {/* ── HIGHLIGHTS ── */}
      <section className="section-light py-24" ref={revealRef}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div 
                key={item.title} 
                className="fade-in-up flex flex-col items-center md:items-start text-center md:text-left" 
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-[#007b32] flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading font-700 text-xl text-[#0d0d0d] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS MARKRETE ── */}
      <section className="section-dark py-24 relative overflow-hidden">
        <span className="bg-number bg-number-light right-0 top-0 translate-x-1/4 -translate-y-1/4">01</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label block mb-4">What Is MARkrete</span>
              <div className="green-accent-line" />
              <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                REINFORCED CONCRETE ROOFING TECHNOLOGY
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 font-body">
                By replacing traditional wood roof structures with precision-cut insulated panels and reinforced concrete, MARkrete creates a permanent monolithic structural roof engineered for durability, energy efficiency, and long-term performance.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 font-body">
                Unlike most concrete systems, MARkrete supports both pitched and flat roof designs, making it compatible with traditional residential architecture as well as modern homes.
              </p>
              <Link href="/why-markrete">
                <span className="btn-green flex items-center gap-2 w-fit">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            </div>
            <div className="relative">
              <img
                src={LUXURY_HOME_IMG}
                alt="Luxury home with MARkrete concrete roof"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-4 -left-4 bg-[#007b32] p-5">
                <div className="font-display text-white text-3xl">100+</div>
                <div className="text-white/80 text-xs font-heading tracking-wider uppercase">Years Structural Durability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS TEASER ── */}
      <section className="section-gray py-24 relative overflow-hidden">
        <span className="bg-number right-0 top-0 translate-x-1/4 -translate-y-1/4">02</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">The Process</span>
            <div className="green-accent-line mx-auto" />
            <h2 className="font-display text-[#0d0d0d]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              HOW MARKRETE WORKS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Install Panels",
                desc: "Custom-sized EPS insulated panels are installed using 20-gauge metal channels.",
              },
              {
                step: "02",
                title: "Install Steel Reinforcement",
                desc: "Rebar is installed according to engineered plans for maximum structural integrity.",
              },
              {
                step: "03",
                title: "Pour Reinforced Concrete",
                desc: "5–7 inches of reinforced concrete is poured. Insulation remains in place providing R-30+ thermal performance.",
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-white p-8 border-l-4 border-[#007b32]">
                <div className="font-display text-[#007b32] text-5xl mb-4 opacity-30">{item.step}</div>
                <h3 className="font-heading font-700 text-[#0d0d0d] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works">
              <span className="btn-green flex items-center gap-2 w-fit mx-auto">
                Full Process Details <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#007b32] py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            READY TO BUILD FOR THE NEXT 100 YEARS?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto font-body">
            Whether you are an architect, builder, developer, or homeowner — our team can help determine if MARkrete is right for your project.
          </p>
          <Link href="/contact">
            <span className="btn-outline-white">
              Contact Us Today
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}