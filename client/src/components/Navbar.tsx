/**
 * MARkrete Navbar - Precision Left-Aligned Split
 * Version: Hover-Enhanced Industrial
 * Changes: Added color transition and animated underline to nav items.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/why-markrete", label: "Why MARkrete" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/system-specs", label: "System Specs" },
  { href: "/benefits", label: "Benefits" },
  { href: "/projects", label: "Projects" },
  { href: "/engineering", label: "Engineering" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "h-16 xl:h-16 shadow-2xl" : "h-20 xl:h-24" 
      }`}
    >
      <div className="flex h-full w-full">
        
        {/* LEFT: WHITE ZONE */}
        <div 
          style={{ 
            width: scrolled ? 'calc(35%)' : 'calc(40%)',
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
          }}
          className="bg-white flex items-center justify-start xl:justify-end shrink-0 z-20 transition-all duration-700 ease-in-out xl:!w-[25.5%]"
        >
          <div className="pl-6 xl:pl-0 xl:pr-[5.8rem]">
            <Link href="/">
              <div className="cursor-pointer transition-transform duration-300">
                <img 
                  src="/images/MarkreteLogo.png" 
                  alt="MARkrete" 
                  className={`w-auto transition-all duration-500 ${
                    scrolled ? 'h-10 xl:h-11' : 'h-12 xl:h-17' 
                  }`} 
                />
              </div>
            </Link>
          </div>
        </div>

        {/* RIGHT: BLACK ZONE */}
        <div 
          className="bg-[#0b0b0b] flex-1 -ml-[30px] xl:-ml-[70px] flex items-center justify-end xl:justify-between z-10 transition-all duration-500 pr-6 xl:pr-[4rem] xl:pl-[90px]"
        >
          
          {/* NAVIGATION (DESKTOP ONLY) */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`relative px-3 py-2 text-[12px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer whitespace-nowrap group ${
                  location === link.href ? "text-[#007b32]" : "text-gray-300 hover:text-[#007b32]"
                }`}>
                  {link.label}
                  
                  {/* ANIMATED UNDERLINE */}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#007b32] transition-all duration-300 -translate-x-1/2 group-hover:w-2/3 ${
                    location === link.href ? "w-2/3" : ""
                  }`} />
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA BUTTON (DESKTOP ONLY) */}
          <div className="hidden xl:block">
            <Link href="/contact">
              <button className={`bg-[#007b32] text-white font-black uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-[#007b32] ${
                scrolled ? 'px-6 py-2.5 text-[10px]' : 'px-8 py-3.5 text-xs'
              }`}>
                Get Started
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="xl:hidden flex items-center">
            <button 
              className="text-white p-2" 
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 bg-[#0d0d0d] z-[100] transition-all duration-500 flex flex-col justify-center items-center gap-6 ${
        menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}>
        <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}>
          <X size={32} />
        </button>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            <span className="text-white text-2xl font-black uppercase tracking-tighter hover:text-[#007b32] transition-colors">
              {link.label}
            </span>
          </Link>
        ))}
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          <button className="mt-4 bg-[#007b32] text-white px-10 py-4 font-black uppercase tracking-widest">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  );
}