import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Pagination generik yang dipakai di Anggota Kelas & Gallery.
 * props:
 *  - currentPage : halaman aktif (1-indexed)
 *  - totalPages  : jumlah total halaman
 *  - onPageChange: (nomorHalaman) => void
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // Bangun daftar nomor halaman dengan elipsis jika halaman banyak
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-10"
      aria-label="Navigasi halaman"
    >
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-navy-border
                   text-slate hover:text-frost hover:border-electric/60 disabled:opacity-30
                   disabled:hover:border-navy-border disabled:hover:text-slate transition-colors"
        aria-label="Halaman sebelumnya"
      >
        <ChevronLeft size={18} />
      </button>

      {getPageNumbers().map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="px-2 text-slate select-none">
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-electric text-navy shadow-glow"
                : "text-slate hover:text-frost border border-navy-border hover:border-electric/60"
            }`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-navy-border
                   text-slate hover:text-frost hover:border-electric/60 disabled:opacity-30
                   disabled:hover:border-navy-border disabled:hover:text-slate transition-colors"
        aria-label="Halaman berikutnya"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}