/**
 * MARkrete — Projects Page
 * Design: Bold Monochromatic with Green Power Accents
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROJECT_IMAGE1 = "/images/abacos-bahamas.png";
const PROJECT_IMAGE2 = "/images/gables-estates-arvida.png";
const PROJECT_IMAGE3 = "/images/gables-estates-casurina.png";
const PROJECT_IMAGE4 = "/images/gables-estates-old-cutler.png";
const PROJECT_IMAGE5 = "/images/South Miami.png";
const PROJECT_IMAGE6 = "/images/Palmarito Coral Gables.png";
const PROJECT_IMAGE7 = "/images/On Point Abacos, Bahamas.png";
const PROJECT_IMAGE8 = "/images/gumelemi-cay-bahamas.png";
const PROJECT_IMAGE9 = "/images/gables-estates-leucadendra.png";
const PROJECT_IMAGE10 = "/images/South Ocean, Palm Beach.png";
const PROJECT_IMAGE11 = "/images/catalonia-coral-gables.png";
const PROJECT_IMAGE12 = "/images/coral-gables-solano-prado.png";

const projects = [
  {
    id: 1,
    location: "Abacos, Bahamas",
    type: "Luxury Beachfront Residential",
    style: "Pyramid Hip",
    description: "A pitched Pyramid-style concrete roof engineered to withstand extreme Atlantic hurricane landfalls. This structure serves as a permanent fortress against high-velocity wind loads.",
    features: ["Pitched roof design", "R-30+ insulation", "Signed & sealed engineering"],
    image: PROJECT_IMAGE1,
  },
  {
    id: 2,
    location: "Coral Gables, Florida",
    type: "Luxury Waterfront Residential",
    style: "Mediterranean Hip",
    description: "Protected by a permanent concrete roofing system, eliminating maintenance in corrosive salt-spray environments. Engineered for a century of structural performance.",
    features: ["Pitched roof design", "R-30+ insulation", "Cat 5 hurricane rated"],
    image: PROJECT_IMAGE2,
  },
  {
    id: 3,
    location: "Coral Gables, Florida",
    type: "Modern Ultra-Luxury Residential",
    style: "Modern Hip & Flat Combo Roof",
    description: "Demonstrating how MARkrete technology supports sleek, complex roof geometries. Designed to meet extreme HVHZ demands while enabling floor-to-ceiling glass design.",
    features: ["Integrated Modern/Flat Roofs", "Superior Wind Loads", "Miami-Dade NOA Approved"],
    image: PROJECT_IMAGE3,
  },
  {
    id: 4,
    location: "Coral Gables, Florida",
    type: "Classic Luxury Residential",
    style: "Traditional Hip & Gable",
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance. A monolithic system providing a permanent solution to South Florida’s extreme weather.",
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation", "Insurance savings"],
    image: PROJECT_IMAGE4,
  },
  // Adding 10 more identical boxes for demonstration
  { id: 5, 
    location: "South Miami, Florida", 
    type: "Classic Luxury Residential", 
    style: "Traditional Hip & Gable", 
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance.", 
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation"], 
    image: PROJECT_IMAGE5 
  },
  { id: 6, 
    location: "Coral Gables, Florida", 
    type: "Classic Luxury Residential", 
    style: "Traditional Hip & Gable", 
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance.", 
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation"], 
    image: PROJECT_IMAGE6 
  },
  { id: 7, 
    location: "Abacos, Bahamas", 
    type: "Classic Luxury Residential", 
    style: "Traditional Hip & Gable", 
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance.", 
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation"], 
    image: PROJECT_IMAGE7
  },
  { id: 8, 
    location: "Gumelemi Cay, Bahamas", 
    type: "Classic Luxury Residential", 
    style: "Traditional Hip & Gable", 
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance.", 
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation"], 
    image: PROJECT_IMAGE8
  },
  { id: 9, 
    location: "Coral Gables, Florida", 
    type: "Classic Luxury Residential", 
    style: "Traditional Hip & Gable", 
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance.", 
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation"], 
    image: PROJECT_IMAGE9
  },
  { id: 10, 
    location: "Palm Beach, Florida", 
    type: "Classic Luxury Residential", 
    style: "Traditional Hip & Gable", 
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance.", 
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation"], 
    image: PROJECT_IMAGE10
  },
  { id: 11, 
    location: "Coral Gables, Florida", 
    type: "Classic Luxury Residential", 
    style: "Traditional Hip & Gable", 
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance.", 
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation"], 
    image: PROJECT_IMAGE11 
  },
  { id: 12, 
    location: "Coral Gables, Florida", 
    type: "Classic Luxury Residential", 
    style: "Traditional Hip & Gable", 
    description: "Blending timeless Mediterranean architecture with unrivaled structural performance.", 
    features: ["Architectural Gable/Hip Hybrid", "R-30+ insulation"], 
    image: PROJECT_IMAGE12 
  },
];

const regions = [
  { name: "State of Florida", count: "Multiple Projects", highlight: true },
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

      {/* ── HERO ── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <span className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 font-display text-[20vw] text-white/[0.03] leading-none select-none">
          PROJECTS
        </span>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32]">Proven in the Field</span>
              </div>
              <h1 className="font-display text-white mb-6 leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
                PROVEN <br />
                <span className="text-[#007b32]">RESILIENCE</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed font-body">
                The MARkrete® system has been deployed across Florida and the Caribbean, protecting residential assets in the most extreme coastal conditions.
              </p>
            </div>
            <div className="hidden md:block">
               <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                  <div className="text-[#007b32] font-display text-4xl mb-1">HVHZ</div>
                  <div className="text-white text-xs uppercase tracking-[0.2em] font-bold">Approved Specs</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGIONS: ADJUSTED HIGH-VELOCITY BAR ── */}
<section className="bg-[#007b32] py-5 border-y border-white/10 overflow-hidden relative">
  {/* Subtle geometric pattern overlay */}
  <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
       style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
  
  <div className="max-w-[1600px] mx-auto relative z-10 px-10">
    <div className="flex flex-nowrap items-center justify-between w-full gap-16 lg:gap-24">
      
      {regions.map((region, i) => (
        <div key={region.name} className="flex items-center gap-10 group">
          
          {/* Region Entry */}
          <div className="flex items-baseline gap-2">
            <span className="font-display text-white text-lg md:text-xl leading-none uppercase tracking-tighter">
              {region.name}
            </span>
            <span className="text-white/70 font-heading font-900 text-[9px] uppercase tracking-[0.25em] ml-1">
              {region.count}
            </span>
          </div>

          {/* Industrial Divider - Longer but lighter */}
          {i !== regions.length - 1 && (
            <div className="hidden xl:flex items-center gap-2 opacity-20 ml-6">
              <div className="w-[3px] h-[3px] bg-white rotate-45" />
              <div className="w-16 h-[1px] bg-white" />
              <div className="w-[3px] h-[3px] bg-white rotate-45" />
            </div>
          )}
        </div>
      ))}

    </div>
  </div>

  {/* Sharpened corner brackets */}
  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40" />
  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40" />
</section>

      {/* ── COMPATIBILITY & ARCHITECTURAL SCOPE ── */}
      <section className="bg-white py-32 relative overflow-hidden">
        {/* Subtle Background Grid Line */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gray-100 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32] tracking-[0.3em]">Compatibility Matrix</span>
              </div>
              <h2 className="font-display text-[#0d0d0d] leading-[0.85] uppercase" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                Architectural <br />
                <span className="text-gray-300">Versatility</span>
              </h2>
            </div>
            <div className="md:w-1/3 border-l-2 border-gray-100 pl-8">
              <p className="text-gray-500 font-body text-sm leading-relaxed italic">
                The MARkrete system is engineered to integrate seamlessly across diverse structural geometries without compromising thermal performance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Pitched Architecture", 
                desc: "Compatible with traditional pitched roof designs and gabled structures up to a 10/12 pitch.",
                tag: "ST_01"
              },
              { 
                title: "Modern Designs", 
                desc: "Optimized for flat and low-slope modern architectural styles with monolithic precision.",
                tag: "ST_02"
              },
              { 
                title: "Luxury Coastal", 
                desc: "Proven performance in high-velocity hurricane zones (HVHZ) and demanding island environments.",
                tag: "ST_03"
              },
            ].map((item, i) => (
              <div 
                key={item.title} 
                className="group relative bg-[#fcfcfc] p-10 border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2"
              >
                

                {/* Content */}
                <h3 className="font-display text-2xl text-[#0d0d0d] mb-4 uppercase tracking-tighter group-hover:text-[#007b32] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed group-hover:text-gray-700">
                  {item.desc}
                </p>

                

                {/* Corner Decorative Accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-50 flex items-end justify-end p-1 transition-colors group-hover:bg-[#007b32]/5">
                   <div className="w-1 h-1 bg-gray-200 group-hover:bg-[#007b32]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT LIST ── */}
      <section className="section-light py-24 bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-8">
            <h2 className="font-display text-white text-5xl uppercase">
              Field <span className="text-[#007b32]">projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div 
                key={project.id} 
                className="group relative aspect-[16/10] overflow-hidden bg-black fade-in-up"
                style={{ transitionDelay: `${(i % 4) * 0.15}s` }}
              >
                {/* Visual Image Layer */}
                <img
                  src={project.image}
                  alt={project.type}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />

                {/* Minimalist Overlay - Visible on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-[#007b32]" />
                    <span className="text-white/60 font-heading font-800 text-[10px] uppercase tracking-[0.3em]">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-display text-white text-3xl uppercase leading-none mb-2">
                    {project.style}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#007b32] transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Permanent Corner Label */}
                <div className="absolute top-0 left-0 bg-[#007b32]/100 backdrop-blur-md border-r border-b border-white/10 px-4 py-2">
                   <span className="text-white font-heading font-900 text-[10px] tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                   </span>
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
            <div className="font-display text-[#007b32] text-4xl mb-4 uppercase">Miami-Dade County</div>
            <p className="text-gray-300 font-body leading-relaxed">
              Miami-Dade County is regarded for having the strictest building codes in the country. MARkrete's approval and proven track record in Miami-Dade demonstrates the system's ability to meet the most demanding structural and safety requirements.
            </p>
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
          add your <br /> 
          <span className="text-[#0d0d0d]/65">project to the list</span>
        </h2>

        <p className="text-white/90 text-sm md:text-base uppercase tracking-[0.15em] leading-relaxed font-body max-w-xl border-l border-white/20 pl-6">
          Contact the markrete team to discuss your project requirements. 
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
