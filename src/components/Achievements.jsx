import { Trophy } from "lucide-react";
import { prestasi } from "../data/classData";

export default function Achievements() {
  return (
    <section id="prestasi" className="py-20 px-6 bg-midnight">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-frost mb-3">Prestasi</h2>
          <p className="text-slate text-center">Pencapaian yang bikin kami bangga jadi satu kelas.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prestasi.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-navy-border bg-panel-gradient overflow-hidden
                         hover:border-electric/60 hover:shadow-glow transition-all"
            >
              <div className="aspect-video w-full overflow-hidden bg-navy">
                <img
                  src={item.fotoUrl}
                  alt={item.judul}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <div className="flex items-center gap-2 mb-2 text-electric-soft text-xs">
                  <Trophy size={14} />
                  <span>{item.tahun}</span>
                </div>
                <h3 className="text-frost font-medium mb-2 leading-snug">{item.judul}</h3>
                <p className="text-sm text-slate leading-relaxed text-center">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}