/**
 * MARkrete Navbar
 * Design: Bold Monochromatic with Green Power Accents
 * - Near-black background, white text, #007b32 green accents
 * - Sticky header with blur backdrop on scroll
 * - Mobile hamburger menu
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg"
          : "bg-[#0d0d0d]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col group" style={{ width: 'fit-content' }}>
              <div className="leading-none flex items-baseline">
                <span className="font-display text-white tracking-[0.05em]" style={{ fontSize: '40px' }}>MAR</span>
                <span className="font-heading text-[#007b32] font-bold tracking-[0.02em]" style={{ textTransform: 'none', fontSize: '40px' }}>krete</span>
              </div>
              <span className="text-white font-heading font-semibold block w-full" style={{ textTransform: 'none', letterSpacing: '0.32em', marginTop: '-5px', fontSize: '9.7px' }}>Concrete Roof System</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-3 py-2 text-xs font-heading font-600 tracking-widest uppercase transition-colors duration-200 ${
                    location === link.href
                      ? "text-[#007b32]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span className="ml-4 px-5 py-2.5 bg-[#007b32] text-white text-xs font-heading font-700 tracking-widest uppercase hover:bg-[#005a24] transition-colors duration-200">
                Get Started
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-white/10">
          <nav className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block px-4 py-3 text-sm font-heading font-600 tracking-widest uppercase transition-colors duration-200 ${
                    location === link.href
                      ? "text-[#007b32] bg-white/5"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span className="mt-2 block px-4 py-3 bg-[#007b32] text-white text-sm font-heading font-700 tracking-widest uppercase text-center hover:bg-[#005a24] transition-colors duration-200">
                Get Started
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
