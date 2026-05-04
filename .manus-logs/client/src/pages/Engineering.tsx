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

      {/* ── PAGE HERO ── */}
      <section className="section-dark pt-32 pb-20 relative overflow-hidden">
        <span className="bg-number bg-number-light right-0 top-0 translate-x-1/4 -translate-y-1/4">ENG</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-label block mb-4">Structural Confidence</span>
          <div className="green-accent-line" />
          <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            ENGINEERING<br />
            <span className="text-[#007b32]">CREDIBILITY</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-body">
            Each MARkrete project includes signed and sealed engineering plans for the roof system, providing the structural documentation required for permit submission and construction.
          </p>
        </div>
      </section>

      {/* ── RESPONSIBILITY SPLIT ── */}
      <section className="section-light py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Engineering Responsibility</span>
            <div className="green-accent-line mx-auto" />
            <h2 className="font-display text-[#0d0d0d]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              CLEAR SCOPE OF RESPONSIBILITY
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#f4f4f4] p-8 border-t-4 border-gray-400">
              <div className="font-display text-gray-400 text-4xl mb-4">STRUCTURAL ENGINEER</div>
              <p className="text-gray-600 font-body leading-relaxed mb-4">
                The engineer of record is responsible for designing the building structure from the foundation up to and including the tie beam.
              </p>
              <div className="font-heading font-700 text-gray-500 text-xs tracking-widest uppercase">Scope:</div>
              <p className="text-gray-500 text-sm font-body mt-1">Foundation → Walls → Tie Beam</p>
            </div>
            <div className="bg-[#0d0d0d] p-8 border-t-4 border-[#007b32]">
              <div className="font-display text-[#007b32] text-4xl mb-4">MARKRETE ENGINEERS</div>
              <p className="text-gray-300 font-body leading-relaxed mb-4">
                MARkrete's partnered engineering firm designs the concrete roof system above the tie beam, providing all required documentation.
              </p>
              <div className="font-heading font-700 text-[#007b32] text-xs tracking-widest uppercase">Scope:</div>
              <p className="text-gray-400 text-sm font-body mt-1">Tie Beam → Roof System → Finish</p>
            </div>
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

      {/* ── ENGINEERING PROCESS ── */}
      <section className="section-gray py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Our Process</span>
            <div className="green-accent-line mx-auto" />
            <h2 className="font-display text-[#0d0d0d]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              ENGINEERING PROCESS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringProcess.map((item, i) => (
              <div key={item.step} className="fade-in-up bg-white p-6 border-t-4 border-[#007b32]" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="font-display text-[#007b32] text-5xl mb-4 opacity-30">{item.step}</div>
                <h3 className="font-heading font-700 text-[#0d0d0d] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
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

      {/* ── CTA ── */}
      <section className="bg-[#007b32] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-white text-3xl mb-2">NEED ENGINEERING SUPPORT?</h2>
            <p className="text-white/80 font-body">Contact us to discuss your project's engineering requirements.</p>
          </div>
          <Link href="/contact">
            <span className="btn-outline-white whitespace-nowrap flex items-center gap-2">
              Get in Touch <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
