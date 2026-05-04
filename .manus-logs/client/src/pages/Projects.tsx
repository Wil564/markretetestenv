/**
 * MARkrete — Projects Page
 * Design: Bold Monochromatic with Green Power Accents
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROJECT_IMAGE1 = "/images/hugin-lot.jpeg";
const PROJECT_IMAGE2 = "/images/150-arvida.webp";
const PROJECT_IMAGE3 = "/images/190-casurina.jpeg";
const PROJECT_IMAGE4 = "/images/8525-old-cutler.jpeg";

// Placeholder project entries — client to provide actual project list
const projects = [
  {
    id: 1,
    name: "Hugin Lot 28",
    location: "The Bahamas",
    type: "Luxury Beachfront Residential",
    style: "Pyramid Hip",
    description: "Beachfront luxury home featuring a pitched Pyramid-style concrete roof. Engineered to withstand extreme Atlantic hurricane landfalls, this structure serves as a permanent fortress against high-velocity wind loads and flying debris.",
    features: ["Pitched roof design", "R-30+ insulation", "Signed & sealed engineering"],
    image: PROJECT_IMAGE1,
  },
  {
    id: 2,
    name: "150 Arvida",
    location: "Gables Estates, Florida",
    type: "Luxury Waterfront Residential",
    style: "Mediterranean Hip",
    description: "This property is protected by a permanent concrete roofing system, eliminating maintenance in corrosive salt-spray environments. Engineered for a century of structural performance, this installation redefines coastal resilience.",
    features: ["Pitched roof design", "R-30+ insulation", "Cat 5 hurricane rated"],
    image: PROJECT_IMAGE2,
  },
  {
    id: 3,
    name: "190 Casuarina",
    location: "Gables Estates, Florida",
    type: "Modern Ultra-Luxury Residential",
    style: "Modern Hip & Flat Combo Roof",
    description: "Striking modern estate demonstrating how MARkrete technology supports sleek, complex roof geometries without compromising structural durability. It is designed to meet the extreme hurricane and seismic demands of South Florida, all while enabling floor-to-ceiling glass design.",
    features: ["Integrated Modern/Flat Roofs", "Superior Wind Loads", "Miami-Dade NOA Approved"],
    image: PROJECT_IMAGE3,
  },
  {
    id: 4,
    name: "Old Cutler Residence",
    location: "Coral Gables, Florida",
    type: "Classic Luxury Residential",
    style: "Traditional Hip & Gable",
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance. This monolithic system provides a permanent solution to South Florida’s extreme weather, ensuring the home’s traditional aesthetic is protected by a Category 5-rated structural shell.",
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation", "Insurance savings"],
    image: PROJECT_IMAGE4,
  },
];

const regions = [
  { name: "South Florida", count: "Multiple Projects", highlight: true },
  { name: "Miami-Dade County", count: "Miami-Dade Approved", highlight: true },
  { name: "The Caribbean", count: "Multiple Projects", highlight: false },
];

export default function Projects() {
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
        <span className="bg-number bg-number-light right-0 top-0 translate-x-1/4 -translate-y-1/4">PRJ</span>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-label block mb-4">Proven in the Field</span>
          <div className="green-accent-line" />
          <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            PROVEN<br />
            <span className="text-[#007b32]">PROJECTS</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-body">
            The MARkrete system has been used throughout South Florida (Miami-Dade) and the Caribbean, where homes must withstand extreme coastal conditions.
          </p>
        </div>
      </section>

      {/* ── REGIONS ── */}
      <div className="bg-[#007b32] py-6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {regions.map((region) => (
              <div key={region.name} className="flex items-center gap-2 text-white">
                <MapPin size={16} className="text-white/70" />
                <span className="font-heading font-600 text-sm tracking-wider">{region.name}</span>
                <span className="text-white/60 text-xs">— {region.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COMPATIBILITY NOTE ── */}
      <section className="section-gray py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Pitched Architecture", desc: "Compatible with traditional pitched roof designs up to 10/12 pitch" },
              { title: "Modern Designs", desc: "Supports flat and low-slope modern architectural styles" },
              { title: "Luxury Coastal Homes", desc: "Proven in the most demanding coastal environments in the world" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 border-l-4 border-[#007b32]">
                <h3 className="font-heading font-700 text-[#0d0d0d] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT LIST ── */}
      <section className="section-light py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Project Portfolio</span>
            <div className="green-accent-line mx-auto" />
            <h2 className="font-display text-[#0d0d0d]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              SELECTED PROJECTS
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto font-body text-sm">
              A selection of MARkrete installations demonstrating the system's versatility across architectural styles and geographic locations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={project.id} className="fade-in-up group" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: "16/9" }}
                  />
                </div>
                <div className="bg-[#f4f4f4] p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#007b32] text-xs font-heading font-700 tracking-widest uppercase">{project.type}</span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs font-body">
                      <MapPin size={12} />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-heading font-700 text-[#0d0d0d] text-xl mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm font-body leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="bg-white border border-gray-200 text-gray-600 text-xs font-heading px-3 py-1">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MIAMI-DADE NOTE ── */}
      <section className="section-dark py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-[#007b32]/30 p-8 max-w-3xl mx-auto text-center">
            <div className="font-display text-[#007b32] text-4xl mb-4">MIAMI-DADE COUNTY</div>
            <p className="text-gray-300 font-body leading-relaxed">
              Miami-Dade County is regarded for having the strictest building codes in the country. MARkrete's approval and proven track record in Miami-Dade demonstrates the system's ability to meet the most demanding structural and safety requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#007b32] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-white text-3xl mb-2">ADD YOUR PROJECT TO THE LIST</h2>
            <p className="text-white/80 font-body">Contact us to discuss your project requirements.</p>
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
