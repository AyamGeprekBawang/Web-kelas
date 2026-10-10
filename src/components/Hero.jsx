import { classInfo } from "../data/classData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Foto kelas sebagai background dengan overlay gelap */}
      <div className="absolute inset-0">
        <img
          src={classInfo.fotoHero}
          alt={`Foto kelas ${classInfo.namaKelas}`}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <p className="text-electric-soft text-sm mb-4 tracking-wide text-center">
          {classInfo.namaSekolah} · {classInfo.tahunAjaran}
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold text-frost mb-6 leading-tight">
          Welcome to {classInfo.namaKelas}
        </h1>
        <p className="text-slate text-lg italic text-center">&ldquo;{classInfo.motto}&rdquo;</p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#anggota"
            className="px-6 py-3 rounded-xl bg-electric text-navy font-medium shadow-glow hover:brightness-110 transition"
          >
            Lihat Anggota
          </a>
          <a
            href="#gallery"
            className="px-6 py-3 rounded-xl border border-navy-border text-frost hover:border-electric/60 transition"
          >
            Lihat Galeri
          </a>
        </div>
      </div>
    </section>
  );
}