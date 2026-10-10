import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { classInfo, quickLinks } from "../data/classData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/90 backdrop-blur border-b border-navy-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-left">
          <div className="w-20 h-8 rounded-lg bg-electric/20 border border-electric/50 flex items-center justify-center text-electric font-display font-semibold text-sm">
            {classInfo.namaKelas}
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate hover:text-electric transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-frost"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu navigasi"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-navy border-t border-navy-border px-6 py-4 flex flex-col gap-4">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate hover:text-electric transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}