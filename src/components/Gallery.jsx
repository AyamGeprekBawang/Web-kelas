import { useMemo, useState } from "react";
import { galeriFoto, galeriKategori } from "../data/classData";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 8;

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return activeTab === "Semua"
      ? galeriFoto
      : galeriFoto.filter((f) => f.kategori === activeTab);
  }, [activeTab]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);

  const handleTabChange = (kategori) => {
    setActiveTab(kategori);
    setPage(1); // reset ke halaman 1 setiap ganti filter
  };

  return (
    <section id="gallery" className="py-20 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-frost mb-3">Gallery</h2>
          <p className="text-slate text-center">Kumpulan momen yang enggak akan bisa kami ulang lagi.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galeriKategori.map((kat) => (
            <button
              key={kat}
              onClick={() => handleTabChange(kat)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                activeTab === kat
                  ? "bg-electric text-navy border-electric"
                  : "border-navy-border text-slate hover:text-frost hover:border-electric/60"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentItems.map((foto) => (
            <figure
              key={foto.id}
              className="group rounded-xl overflow-hidden border border-navy-border relative aspect-[4/3]"
            >
              <img
                src={foto.url}
                alt={foto.judul}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent
                           p-3 text-xs text-frost opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {foto.judul}
              </figcaption>
            </figure>
          ))}
        </div>

        {currentItems.length === 0 && (
          <p className="text-center text-slate mt-10">Belum ada foto di kategori ini.</p>
        )}

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </section>
  );
}