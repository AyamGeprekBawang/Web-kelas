import { daftarSiswaSaja, studentts } from "../data/classData";

export default function About() {
  const totalSiswa = studentts.length;
  const totalLaki = studentts.filter((s) => s.jenisKelamin === "L").length;
  const totalPerempuan = studentts.filter((s) => s.jenisKelamin === "P").length;

  const stats = [
    { label: "Total Siswa", value: totalSiswa },
    { label: "Laki-laki", value: totalLaki },
    { label: "Perempuan", value: totalPerempuan },
  ];

  return (
    <section id="tentang" className="py-20 px-6 bg-navy">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-frost mb-5">Tentang Kelas</h2>
        <p className="leading-relaxed max-w-4xl mx-auto mb-12 text-center">
          XI ACP adalah kelas yang tumbuh bersama melalui proses belajar, kerja sama,
          dan berbagai pengalaman selama tahun ajaran.
        </p>

        <div className="grid grid-cols-3 gap-4 sm:gap-12 max-w-lg mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-navy-border bg-panel-gradient py-6 px-3"
            >
              <p className="text-3xl sm:text-4xl font-display font-semibold text-electric">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm text-slate mt-1 text-center">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}