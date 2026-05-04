/**
 * MARkrete — Contact Page
 * Design: Bold Monochromatic with Green Power Accents
 */
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contacts = [
  {
    name: "Dariel Palenzuela",
    role: "General Inquiries",
    phone: "(786) 865 - 6767",
    email: "Dariel.markrete@gmail.com",
    phoneHref: "tel:7868656767",
    emailHref: "mailto:dariel.markrete@gmail.com",
  }
];

const projectTypes = [
  "Residential — New Construction",
  "Residential — Retrofit",
  "Commercial",
  "Architect / Designer Inquiry",
  "Builder / Contractor Inquiry",
  "Developer Inquiry",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const encode = (data: { [key: string]: string }) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert("Error: " + error));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── NEW REVISED HERO ── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        {/* Large background text for depth */}
        <span className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 font-display text-[20vw] text-white/[0.03] leading-none select-none uppercase">
          Contact
        </span>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#007b32]" />
                <span className="section-label text-[#007b32]">Get in Touch</span>
              </div>
              <h1 className="font-display text-white mb-6 leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
                START YOUR <br />
                <span className="text-[#007b32]">PROJECT</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed font-body">
                Whether you are an architect, builder, developer, or homeowner, our team can help determine if the MARkrete system is right for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="section-light py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <span className="section-label block mb-4">Contact Information</span>
              <div className="green-accent-line" />
              <h2 className="font-display text-[#0d0d0d] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                OUR TEAM IS READY TO HELP
              </h2>

              <div className="space-y-8 mb-12">
                {contacts.map((contact) => (
                  <div key={contact.name} className="bg-[#f4f4f4] p-6 border-l-4 border-[#007b32]">
                    <h3 className="font-heading font-700 text-[#0d0d0d] text-xl mb-1">{contact.name}</h3>
                    <p className="text-[#007b32] text-xs font-heading font-600 tracking-widest uppercase mb-4">{contact.role}</p>
                    <div className="space-y-2">
                      {contact.phone && (
                        <a
                          href={contact.phoneHref!}
                          className="flex items-center gap-3 text-gray-700 hover:text-[#007b32] transition-colors font-body"
                        >
                          <Phone size={16} className="text-[#007b32]" />
                          {contact.phone}
                        </a>
                      )}
                      <a
                        href={contact.emailHref}
                        className="flex items-center gap-3 text-gray-700 hover:text-[#007b32] transition-colors font-body"
                      >
                        <Mail size={16} className="text-[#007b32]" />
                        {contact.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Proven Locations */}
              <div className="bg-[#0d0d0d] p-6">
                <h4 className="font-heading font-700 text-[#007b32] text-xs tracking-widest uppercase mb-4">Proven In</h4>
                <div className="space-y-2">
                  {["South Florida", "Miami-Dade County", "The Caribbean"].map((loc) => (
                    <div key={loc} className="flex items-center gap-2 text-gray-300 text-sm font-body">
                      <MapPin size={14} className="text-[#007b32]" />
                      {loc}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-gray-500 text-xs font-body">
                    Miami-Dade County — Strictest building codes in the U.S.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <span className="section-label block mb-4">Send a Message</span>
              <div className="green-accent-line" />
              <h2 className="font-display text-[#0d0d0d] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                TELL US ABOUT YOUR PROJECT
              </h2>

              {submitted ? (
                <div className="bg-[#007b32]/10 border border-[#007b32] p-8 text-center">
                  <CheckCircle size={48} className="text-[#007b32] mx-auto mb-4" />
                  <h3 className="font-heading font-700 text-[#0d0d0d] text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-600 font-body">
                    Thank you for reaching out. Our team will get back to you shortly to discuss your project.
                  </p>
                </div>
              ) : (
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-heading font-700 tracking-widest uppercase text-gray-600 mb-2">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-300 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#007b32] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-700 tracking-widest uppercase text-gray-600 mb-2">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-300 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#007b32] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-heading font-700 tracking-widest uppercase text-gray-600 mb-2">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-300 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#007b32] transition-colors"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-700 tracking-widest uppercase text-gray-600 mb-2">Project Type</label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className="w-full border border-gray-300 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#007b32] transition-colors bg-white"
                      >
                        <option value="">Select type...</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-700 tracking-widest uppercase text-gray-600 mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-300 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#007b32] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button type="submit" className="btn-green w-full flex items-center justify-center gap-2">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PATENT FOOTER NOTE ── */}
      <section className="section-dark py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm font-body">
            MARkrete® is a U.S. patented construction system.{" "}
            <a
              href="https://patents.google.com/patent/US10196818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007b32] hover:text-[#00a844] transition-colors"
            >
              Patent #10196818
            </a>
            . Approved in Miami-Dade County.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
