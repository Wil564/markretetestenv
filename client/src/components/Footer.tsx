/**
 * MARkrete Footer
 * Design: Bold Monochromatic with Green Power Accents
 * - Near-black background, white text, green accents
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-700 text-xs tracking-widest uppercase text-[#007b32] mb-5">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/why-markrete", label: "Why MARkrete" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/system-specs", label: "System Specs" },
                { href: "/benefits", label: "Benefits" },
                { href: "/projects", label: "Projects" },
                { href: "/engineering", label: "Engineering" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Proven In */}
          <div>
            <h4 className="font-heading font-700 text-xs tracking-widest uppercase text-[#007b32] mb-5">
              Proven In
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[#007b32] shrink-0" />
                South Florida
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[#007b32] shrink-0" />
                Miami-Dade County
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[#007b32] shrink-0" />
                The Caribbean
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-heading font-700 text-xs tracking-widest uppercase text-[#007b32] mb-3">
                Approved In
              </h4>
              <p className="text-gray-400 text-sm">Miami-Dade County — Strictest building codes in the U.S.</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-700 text-xs tracking-widest uppercase text-[#007b32] mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <p className="text-white text-sm font-heading font-600 mb-1">Dariel Palenzuela</p>
                <a href="tel:7866723073" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors">
                  <Phone size={14} className="text-[#007b32]" />
                  (786) 865 - 6767
                </a>
                <a href="mailto:Abel.markrete@gmail.com" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors mt-1">
                  <Mail size={14} className="text-[#007b32]" />
                  Dariel.markrete@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} MARkrete®. All rights reserved. U.S. Patent #10196818.
          </p>
          <p className="text-gray-600 text-xs">
            A 100-Year Roof Built for the Storm
          </p>
        </div>
      </div>
    </footer>
  );
}
