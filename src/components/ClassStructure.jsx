import { strukturOrganisasi, students } from "../data/classData";

/**
 * Menggabungkan setiap baris strukturOrganisasi dengan data siswa yang
 * memegang peranId tersebut. Kalau suatu jabatan belum ada orangnya,
 * kartu akan tampil sebagai "Belum diisi" — jadi struktur tetap tampil
 * lengkap walau data siswa belum lengkap.
 */
function useStrukturData() {
  const grouped = {};
  strukturOrganisasi.forEach((jabatan) => {
    const pemegang = students.find((s) => s.peranId === jabatan.peranId);
    if (!grouped[jabatan.level]) grouped[jabatan.level] = [];
    grouped[jabatan.level].push({ ...jabatan, siswa: pemegang });
  });
  return Object.entries(grouped)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([level, jabatanList]) => ({ level: Number(level), jabatanList }));
}

function StrukturCard({ jabatan, siswa, highlight }) {
  return (
    <div
      className={`flex flex-col items-center text-center rounded-2xl border px-5 py-4 w-44 sm:w-52
        bg-panel-gradient transition-transform hover:-translate-y-1
        ${highlight ? "border-electric/70 shadow-glow" : "border-navy-border"}`}
    >
      <div
        className={`w-14 sm:w-16 h-14 sm:h-16 rounded-full overflow-hidden border-2 mb-3 flex items-center justify-center
          ${highlight ? "border-electric" : "border-navy-border"} bg-navy`}
      >
        {siswa?.fotoUrl ? (
          <img
            src={siswa.fotoUrl}
            alt={siswa.nama}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-slate text-xs">?</span>
        )}
      </div>
      <p className="w-full text-xs uppercase tracking-wide text-electric-soft mb-1 text-center break-words">
        {jabatan.jabatan}
      </p>
      <p className="w-full text-sm font-medium text-frost leading-tight text-center break-words">
        {siswa ? siswa.nama : "Belum diisi"}
      </p>
    </div>
  );
}

export default function ClassStructure() {
  const levels = useStrukturData();

  return (
    <section id="struktur" className="py-20 px-6 bg-midnight">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-frost mb-3">
            Struktur Kelas
          </h2>
          <p className="w-full max-w-6xl mx-auto text-slate text-center leading-relaxed text-balance">
            Susunan pengurus yang menjaga kelas tetap rapi, kompak, dan berjalan
            lancar sepanjang tahun ajaran.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          {levels.map(({ level, jabatanList }, idx) => (
            <div key={level} className="flex flex-col items-center gap-10 w-full">
              <div className="flex flex-wrap justify-center gap-6">
                {jabatanList.map((j) => (
                  <StrukturCard
                    key={j.peranId}
                    jabatan={j}
                    siswa={j.siswa}
                    highlight={level === 1}
                  />
                ))}
              </div>
              {/* Garis penghubung antar level, kecuali setelah level terakhir */}
              {idx < levels.length - 1 && (
                <div className="w-px h-8 bg-navy-border" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}