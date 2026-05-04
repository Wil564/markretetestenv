/**
 * MARkrete — How It Works Page
 * Design: Bold Monochromatic with Green Power Accents
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CONCRETE_POUR_IMG = "/images/roof-rebar.jpg";

const steps = [
  {
    number: "01",
    title: "Install Panels",
    subtitle: "EPS Insulated Panel Installation",
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
    subtitle: "Rebar Placement per Engineering Plans",
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
    subtitle: "5–7 Inches of Structural Concrete",
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
      <section className="section-dark pt-32 pb-20 relative overflow-hidden">
        <span className="bg-number bg-number-light right-0 top-0 translate-x-1/4 -translate-y-1/4">HOW</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-label block mb-4">The Installation Process</span>
          <div className="green-accent-line" />
          <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            HOW MARKRETE<br />
            <span className="text-[#007b32]">WORKS</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-body">
            A three-step installation process that transforms a traditional roof structure into a permanent, monolithic reinforced concrete roof system.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="section-light py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="font-display text-[#007b32] text-6xl opacity-30 leading-none">{step.number}</div>
                    <div>
                      <span className="section-label block">{step.subtitle}</span>
                      <h2 className="font-display text-[#0d0d0d] text-3xl">{step.title}</h2>
                    </div>
                  </div>
                  <div className="green-accent-line" />
                  <p className="text-gray-600 leading-relaxed mb-6 font-body">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-sm text-gray-700 font-body">
                        <div className="w-1.5 h-1.5 bg-[#007b32] rounded-full shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-[#f4f4f4] p-8 flex items-center justify-center min-h-64`}>
                  {i === 1 ? (
                    <img
                      src={CONCRETE_POUR_IMG}
                      alt="Concrete pour with rebar reinforcement"
                      className="w-full object-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="font-display text-[#007b32] mb-4" style={{ fontSize: "clamp(5rem, 12vw, 10rem)" }}>
                        {step.number}
                      </div>
                      <div className="font-heading font-700 text-[#0d0d0d] text-xl tracking-wider uppercase">
                        {step.title}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
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
              From top to bottom, each layer of the MARkrete system plays a critical role in delivering structural performance and energy efficiency.
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

      {/* ── ENGINEERING NOTE ── */}
      <section className="section-gray py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-[#007b32] p-8 max-w-3xl mx-auto">
            <h3 className="font-heading font-700 text-[#0d0d0d] text-xl mb-3">Engineering Responsibility</h3>
            <p className="text-gray-600 font-body leading-relaxed mb-4">
              The structural engineer of record is responsible for designing the building structure up to the tie beam. MARkrete's partnered engineering firm designs the concrete roof system above the tie beam, providing signed and sealed plans for every project.
            </p>
            <Link href="/engineering">
              <span className="text-[#007b32] font-heading font-600 text-sm tracking-wider uppercase flex items-center gap-2 hover:gap-3 transition-all">
                Learn About Our Engineering <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#007b32] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-white text-3xl mb-2">SEE THE SYSTEM SPECIFICATIONS</h2>
            <p className="text-white/80 font-body">Detailed technical specs for the MARkrete system.</p>
          </div>
          <Link href="/system-specs">
            <span className="btn-outline-white whitespace-nowrap flex items-center gap-2">
              View Specs <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
