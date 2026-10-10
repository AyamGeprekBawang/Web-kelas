import { useMemo, useState } from "react";
import { AtSign } from "lucide-react";
import { studentts } from "../data/classData";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 12; // ubah angka ini untuk mengatur jumlah kartu per halaman

function MemberCard({ siswa }) {
  return (
    <div
      className="group rounded-2xl border border-navy-border bg-panel-gradient overflow-hidden
                 hover:border-electric/60 hover:shadow-glow transition-all duration-300"
    >
      <div className="aspect-square w-full overflow-hidden bg-navy">
        <img
          src={siswa.fotoUrl}
          alt={siswa.nama}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-frost font-medium leading-tight truncate text-center">{siswa.nama}</p>
        <p className="text-xs text-electric-soft mb-2 text-center">{siswa.peran}</p>
        {siswa.instagram && (
          <a
            href={`https://instagram.com/${siswa.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs text-slate hover:text-electric transition-colors"
          >
            <AtSign size={14} />
            {siswa.instagram}
          </a>
        )}
      </div>
    </div>
  );
}

export default function MembersGrid() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(studentts.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return studentts.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    // Scroll balik ke atas seksi agar pengguna tidak "tersesat" setelah ganti halaman
    document.getElementById("anggota")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="anggota" className="py-20 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-frost mb-3">
            Anggota Kelas
          </h2>
          <p className="text-slate max-w-8xl mx-auto text-center">
            {studentts.length} siswa yang menghabiskan tiga tahun bersama —
            klik ikon Instagram untuk mampir ke akun mereka.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {currentItems.map((siswa) => (
            <MemberCard key={siswa.id} siswa={siswa} />
          ))}
        </div>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}