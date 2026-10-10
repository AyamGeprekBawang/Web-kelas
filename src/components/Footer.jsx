import { MapPin } from "lucide-react";
import { classInfo, quickLinks, createdBy } from "../data/classData";

export default function Footer() {
  return (
    <footer className="border-t border-navy-border bg-midnight px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center">
          <p className="text-frost font-display font-medium mb-3 text-center">{classInfo.namaKelas}</p>
          <p className="text-sm text-slate flex items-start justify-center gap-2 leading-relaxed text-center">
            <MapPin size={16} className="mt-0.5 shrink-0 text-electric-soft" />
            {classInfo.alamatSekolah}
          </p>
        </div>

        <div>
          <p className="text-frost font-medium mb-3 text-sm text-center">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate hover:text-electric transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-frost font-medium mb-3 text-sm text-center">Created By</p>
          <ul className="space-y-2">
            {createdBy.map((person) => (
              <li key={person.nama} className="text-sm text-slate">
                <span className="text-frost">{person.nama}</span> — {person.peran}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-navy-border text-xs text-slate text-center">
        © {new Date().getFullYear()} {classInfo.namaKelas}. Dibuat dengan kenangan.
      </div>
    </footer>
  );
}