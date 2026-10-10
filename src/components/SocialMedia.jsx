import { ExternalLink } from "lucide-react";
import { socialLinks } from "../data/classData";

export default function SocialMedia() {
  return (
    <section id="media" className="py-20 px-6 bg-midnight">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-frost mb-3">Media Sosial</h2>
          <p className="text-slate">Ikuti akun-akun resmi kelas kami.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-navy-border bg-panel-gradient p-6 flex flex-col items-center text-center
                         hover:-translate-y-1 hover:border-electric/60 hover:shadow-glow transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: social.color }}
                  aria-hidden="true"
                />
                <ExternalLink
                  size={16}
                  className="text-slate group-hover:text-electric transition-colors"
                />
              </div>
              <p className="text-frost font-medium mb-1 text-center">{social.label}</p>
              <p className="text-sm text-slate text-center">{social.username}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}