/**
 * MARkrete — System Specifications Page
 * Design: Bold Monochromatic with Green Power Accents
 */
import { useEffect } from "react";
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

export default function SystemSpecs() {
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
        <span className="bg-number bg-number-light right-0 top-0 translate-x-1/4 -translate-y-1/4">SPEC</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-label block mb-4">Technical Details</span>
          <div className="green-accent-line" />
          <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            SYSTEM<br />
            <span className="text-[#007b32]">SPECIFICATIONS</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-body">
            Complete technical specifications for the MARkrete patented insulated reinforced concrete roof system.
          </p>
        </div>
      </section>

      {/* ── KEY HIGHLIGHTS ── */}
      <section className="bg-[#007b32] py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {keyHighlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display text-white text-3xl">{item.value}</div>
                <div className="text-white/70 text-xs font-heading tracking-wider uppercase mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS GRID ── */}
      <section className="section-light py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specs.map((spec, i) => (
              <div key={spec.category} className="fade-in-up bg-[#f4f4f4] p-8 border-t-4 border-[#007b32]" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="font-display text-[#0d0d0d] text-2xl mb-6">{spec.category.toUpperCase()}</h3>
                <div className="space-y-3">
                  {spec.items.map((item) => (
                    <div key={item.label} className="flex gap-4 border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-500 text-sm font-heading font-600 w-36 shrink-0">{item.label}</span>
                      <span className="text-[#0d0d0d] text-sm font-body">{item.value}</span>
                    </div>
                  ))}
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

      {/* ── ROOF STRUCTURE LAYERS ── */}
      <section className="section-dark py-24 relative overflow-hidden">
        <span className="bg-number bg-number-light right-0 top-1/2 translate-x-1/3 -translate-y-1/2">STR</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">System Architecture</span>
            <div className="green-accent-line mx-auto" />
            <h2 className="font-display text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              ROOF STRUCTURE <span className="text-[#007b32]">LAYERS</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto font-body">
              From top to bottom, each layer of the MARkrete system plays a critical role in delivering structural performance and energy efficiency.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            {[
              { label: 'Roof Finish', desc: 'Selected by Homeowner / Architect', color: 'bg-gray-200' },
              { label: '5–7" Reinforced Concrete', desc: 'Structural monolithic layer', color: 'bg-gray-400' },
              { label: 'Steel Reinforcement (Rebar)', desc: 'Per engineered plans', color: 'bg-gray-500' },
              { label: 'R-30+ EPS Insulated Panel System', desc: 'Integrated thermal insulation', color: 'bg-[#007b32]' },
              { label: '20-Gauge Metal Structural Channels', desc: 'Structural framework', color: 'bg-[#6b7280]' },
              { label: 'Tie Beam & Structural Walls', desc: 'Building structure below', color: 'bg-[#4a4a4a]' },
            ].map((layer, i) => (
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

      {/* ── PATENT DRAWINGS ── */}
      <section className="section-light py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Patent Documentation</span>
            <h2 className="font-display text-[#0d0d0d] mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              PATENT <span className="text-[#007b32]">DRAWINGS</span>
            </h2>
            <p className="text-gray-600 font-body max-w-2xl mx-auto">
              Technical illustrations from U.S. Patent #10196818 — Device for Building Concrete Roofs and Method.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* FIG. 1 */}
            <div className="fade-in-up group">
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#fafafa] p-4 mb-5 flex items-center justify-center" style={{ minHeight: '320px' }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig1-1a-1b-1c_e35791bc.webp"
                    alt="Patent Figure 1 — Z-Channel Device with Transportation Rebar"
                    className="max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-[#007b32] text-2xl shrink-0">FIG. 1</span>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    Isometric view of the Z-channel device with transportation rebar mounted using throughholes. Shows the insulation engagement assembly and rebar attachment assembly.
                  </p>
                </div>
              </div>
            </div>

            {/* FIG. 1C */}
            <div className="fade-in-up group" style={{ transitionDelay: '0.1s' }}>
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#fafafa] p-4 mb-5 flex items-center justify-center" style={{ minHeight: '320px' }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig1c_ecc748d2.png"
                    alt="Patent Figure 1C — Front Elevation with Insulating Boards"
                    className="max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-[#007b32] text-2xl shrink-0">FIG. 1C</span>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    Front elevational view showing insulating boards secured between two Z-channels while rebar is mounted to the attachment flange and concrete is poured to create a secure engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* FIG. 2 */}
            <div className="fade-in-up group" style={{ transitionDelay: '0.2s' }}>
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#fafafa] p-4 mb-5 flex items-center justify-center" style={{ minHeight: '320px' }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig2a_79d78a04.webp"
                    alt="Patent Figure 2A — Roof Assembly Before Concrete Pour"
                    className="max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-[#007b32] text-2xl shrink-0">FIG. 2A</span>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    Partial isometric view of a roof showing the rebar grid mounted to a plurality of Z-channels before concrete has been poured. Steel plates secure the insulation boards within the roof structure.
                  </p>
                </div>
              </div>
            </div>

            {/* FIG. 3 */}
            <div className="fade-in-up group" style={{ transitionDelay: '0.3s' }}>
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#fafafa] p-4 mb-5 flex items-center justify-center" style={{ minHeight: '320px' }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig3_2a8c34b7.webp"
                    alt="Patent Figure 3 — Roof Cross-Section with Rebar Grid"
                    className="max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-[#007b32] text-2xl shrink-0">FIG. 3</span>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    Isometric view of a roof with a partial cross-section showing the rebar grid secured to the Z-channel devices. Insulation boards can be seen secured within the channel framework.
                  </p>
                </div>
              </div>
            </div>

            {/* FIG. 4 */}
            <div className="fade-in-up group" style={{ transitionDelay: '0.4s' }}>
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#fafafa] p-4 mb-5 flex items-center justify-center" style={{ minHeight: '320px' }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig4_1bd1175c.webp"
                    alt="Patent Figure 4 — Pre-assembled Roof Section Transport"
                    className="max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-[#007b32] text-2xl shrink-0">FIG. 4</span>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    Isometric view of a pre-assembled roof section being transported by crane using transportation rebar. Demonstrates the system's ability to be prefabricated off-site and delivered ready to install.
                  </p>
                </div>
              </div>
            </div>

            {/* FIG. 5 */}
            <div className="fade-in-up group" style={{ transitionDelay: '0.5s' }}>
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#fafafa] p-4 mb-5 flex items-center justify-center" style={{ minHeight: '320px' }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig5_b591f97d.webp"
                    alt="Patent Figure 5 — Concrete Layer Over Rebar"
                    className="max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-[#007b32] text-2xl shrink-0">FIG. 5</span>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    Isometric top partial view of a completed roof showing the concrete layer poured over the rebar members, creating the final monolithic reinforced concrete roof structure.
                  </p>
                </div>
              </div>
            </div>

            {/* FIG. 6 */}
            <div className="fade-in-up group" style={{ transitionDelay: '0.6s' }}>
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#fafafa] p-4 mb-5 flex items-center justify-center" style={{ minHeight: '320px' }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig6_ec8b0235.webp"
                    alt="Patent Figure 6 — Z-Channel Securing Insulation Board"
                    className="max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-[#007b32] text-2xl shrink-0">FIG. 6</span>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    Isometric view of the Z-channel device securing one insulation board on both longitudinal sides. Steel plates secure the shorter ends of the insulation board perpendicular to the Z-channels.
                  </p>
                </div>
              </div>
            </div>

            {/* FIG. 2B */}
            <div className="fade-in-up group" style={{ transitionDelay: '0.7s' }}>
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#fafafa] p-4 mb-5 flex items-center justify-center" style={{ minHeight: '320px' }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540068356/Y2YKXFmQVWeuToqwQKmxx2/patent-fig2b_63a4c677.webp"
                    alt="Patent Figure 2B — Cross-Section After Concrete Pour"
                    className="max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-[#007b32] text-2xl shrink-0">FIG. 2B</span>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    Cross-sectional elevation of a portion of the roof after concrete has been poured, showing how rebar members and insulating boards are permanently engaged in place within the finished structure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://patents.google.com/patent/US10196818"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-flex items-center gap-2"
            >
              View Full Patent Documentation <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#007b32] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-white text-3xl mb-2">READY TO SPECIFY MARKRETE?</h2>
            <p className="text-white/80 font-body">Contact us for project-specific engineering and specifications.</p>
          </div>
          <Link href="/contact">
            <span className="btn-outline-white whitespace-nowrap flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
