
// ============================================================================
// src/data/classData.js
// SATU-SATUNYA FILE YANG PERLU DIEDIT UNTUK MENGUBAH ISI WEBSITE.
// Semua komponen mengambil data dari file ini. Tidak perlu menyentuh
// komponen React lain hanya untuk mengganti nama siswa, foto, atau prestasi.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. INFO UMUM KELAS
// ----------------------------------------------------------------------------
export const classInfo = {
  namaKelas: "XI ACP",
  namaSekolah: "SMK Budi Perkasa",
  motto: "Bersama Kita Bertumbuh, Bersama Kita Berhasil.",
  tahunAjaran: "2026/2027",
  fotoHero: "/images/gallery/foto_after_agustusan_01.jpg",
  alamatSekolah: "Jl. Pendidikan No. 45, Kota Harapan, Jawa Barat",
};

// ----------------------------------------------------------------------------
// 2. MEDIA SOSIAL KELAS
// ----------------------------------------------------------------------------
export const socialLinks = [
  // {
  //   id: "spotify",
  //   label: "Spotify Playlist",
  //   username: "XI ACP - Mood Booster",
  //   url: "https://open.spotify.com/playlist/xxxxxxx",
  //   color: "#1DB954",
  // },
  {
    id: "instagram",
    label: "Instagram",
    username: "@xi.axiooclass.35",
    url: "https://instagram.com/xi.axiooclass.35",
    color: "#E1306C",
  },
];

// ----------------------------------------------------------------------------
// 3. STRUKTUR ORGANISASI KELAS
// ----------------------------------------------------------------------------
export const strukturOrganisasi = [
  {
    level: 1,
    jabatan: "Wali Kelas",
    peranId: "wali-kelas",
  },
  {
    level: 2,
    jabatan: "Ketua Kelas",
    peranId: "ketua-kelas",
  },
  {
    level: 2,
    jabatan: "Wakil Ketua Kelas",
    peranId: "wakil-ketua",
  },
  {
    level: 3,
    jabatan: "Sekretaris 1",
    peranId: "sekretaris-1",
  },
  {
    level: 3,
    jabatan: "Sekretaris 2",
    peranId: "sekretaris-2",
  },
  {
    level: 4,
    jabatan: "Bendahara",
    peranId: "bendahara",
  },
  {
    level: 5,
    jabatan: "5S",
    peranId: "5s",
  },
  {
    level: 5,
    jabatan: "5S",
    peranId: "5s ",
  },
];

// ----------------------------------------------------------------------------
// 4. DAFTAR SISWA (35 orang)
// ----------------------------------------------------------------------------
export const students = [
  {
    id: 1,
    nama: "Arya Wijaya Kusuma S.Kom",
    peran: "Wali Kelas",
    peranId: "wali-kelas",
    jenisKelamin: "P",
    instagram: "aryakamandanuwijay",
    fotoUrl: "/images/students/arya.jpg",
  },
  {
    id: 2,
    nama: "Callista",
    peran: "Ketua Kelas",
    peranId: "ketua-kelas",
    jenisKelamin: "P",
    instagram: "callista",
    fotoUrl: "/images/students/Callista.jpeg",
  },
  {
    id: 3,
    nama: "Fadil",
    peran: "Wakil Ketua Kelas",
    peranId: "wakil-ketua",
    jenisKelamin: "P",
    instagram: "fadil",
    fotoUrl: "/images/students/Fadil.jpeg",
  },
  {
    id: 4,
    nama: "Aulia Kirana Dewi",
    peran: "Sekretaris 1",
    peranId: "sekretaris-1",
    jenisKelamin: "P",
    instagram: "aulia",
    fotoUrl: "/images/students/Aulia.jpg",
  },
  {
    id: 5,
    nama: "Nadea Tri",
    peran: "Sekretaris 2",
    peranId: "sekretaris-2",
    jenisKelamin: "P",
    instagram: "nadea",
    fotoUrl: "/images/students/Nadea.jpg",
  },
  {
    id: 6,
    nama: "Syalwa",
    peran: "Bendahara",
    peranId: "bendahara",
    jenisKelamin: "P",
    instagram: "syalwa",
    fotoUrl: "/images/students/Syalwa.jpg",
  },
  {
    id: 7,
    nama: "Zaidan",
    peran: "5S",
    peranId: "5s",
    jenisKelamin: "L",
    instagram: "zaidan",
    fotoUrl: "/images/students/Zaidan.jpg",
  },
  {
    id: 8,
    nama: "Rizki",
    peran: "5S",
    peranId: "5s ",
    jenisKelamin: "L",
    instagram: "rizki",
    fotoUrl: "/images/students/Rizki.jpeg",
  },

];

export const daftarSiswaSaja = students.filter((s) => s.peranId !== "wali-kelas");

// ----------------------------------------------------------------------------
export const studentts = [
  
  
  

  // --- Anggota kelas
  { id: 1, nama: "Ageng", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Ageng.jpg" },
  { id: 2, nama: "Aira Dwi", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Aira Dwi.jpg" },
  { id: 3, nama: "Aulia", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Aulia.jpg" },
  { id: 4, nama: "Bagas", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Bagas.jpg" },
  { id: 5, nama: "Callista", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Callista.jpeg" },
  { id: 6, nama: "Fadil", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Fadil.jpeg" },
  { id: 7, nama: "Igo Wening", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Igo Wening.jpg" },
  { id: 8, nama: "Irmanda", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Irmanda.jpg" },
  { id: 9, nama: "Jibril", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Jibril.jpg" },
  { id: 10, nama: "Kresnandi", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Kresnandi.jpg" },
  { id: 11, nama: "Maulida", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Maulida.jpg" },
  { id: 12, nama: "Mawar", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Mawar.jpeg" },
  { id: 13, nama: "Nadea", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Nadea.jpg" },
  { id: 14, nama: "Nopal", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Nopal.jpg" },
  { id: 15, nama: "Nuha", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Nuha.jpg" },
  { id: 16, nama: "Paramita", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Paramita.jpg" },
  { id: 17, nama: "Ridwan", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Ridwan.jpg" },
  { id: 18, nama: "Rizka", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Rizka.jpg" },
  { id: 19, nama: "Rizki", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Rizki.jpeg" },
  { id: 20, nama: "Salsabilah", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/salsabilah.jpeg" },
  { id: 21, nama: "Salva", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Salva.jpeg" },
  { id: 22, nama: "Siska", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Siska.jpg" },
  { id: 23, nama: "Suci", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Suci.jpg" },
  { id: 24, nama: "Sultan", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Sultan.jpg" },
  { id: 25, nama: "Umar", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Umar.jpeg" },
  { id: 26, nama: "Vivi", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "P", instagram: "", fotoUrl: "/images/students/Vivi.jpg" },
  { id: 27, nama: "Zaidan", peran: "Anggota Kelas", peranId: "siswa", jenisKelamin: "L", instagram: "", fotoUrl: "/images/students/Zaidan.jpg" },
];


// ----------------------------------------------------------------------------
// 5. GALERI FOTO
// ----------------------------------------------------------------------------
export const galeriKategori = ["Semua", "Together", "Random"];

export const galeriFoto = [
  { id: 1, url: "/images/gallery/foto_after_agustusan_01.jpg", judul: "Foto Angkatan", kategori: "Together" },
  { id: 2, url: "/images/gallery/foto_after_agustusan_02.jpg", judul: "Foto Angkatan", kategori: "Random" },
  { id: 3, url: "/images/gallery/foto_agustusan.jpg", judul: "Foto Angkatan", kategori: "Random" },
  { id: 4, url: "/images/gallery/papi_ultah_01.jpg", judul: "Foto Angkatan", kategori: "Random" },
  { id: 5, url: "/images/gallery/japan_with_sensei.jpg", judul: "Foto Angkatan", kategori: "Together" },
  { id: 6, url: "/images/gallery/solder_pak_bas.jpg", judul: "Foto Angkatan", kategori: "Random" },
  { id: 7, url: "/images/gallery/sertifikasi_01.jpg", judul: "Foto Angkatan", kategori: "Together" },
  { id: 8, url: "/images/gallery/mbg_day1.jpg", judul: "Foto Angkatan", kategori: "Together" },
  { id: 9, url: "/images/gallery/IMG-20260820-WA0015.jpg", judul: "Foto Angkatan", kategori: "Together" },
  { id: 10, url: "/images/gallery/IMG-20260820-WA0016.jpg", judul: "Foto Angkatan", kategori: "Together" },

 
];

// ----------------------------------------------------------------------------
// 6. PRESTASI KELAS
// ----------------------------------------------------------------------------
export const prestasi = [
  {
    id: 1,
    judul: "Juara 1 Lomba Web Design Tingkat Kota",
    deskripsi:
      "Tim dari kelas berhasil meraih juara pertama pada kompetisi web design antar SMK se-kota, mengalahkan 24 tim lain.",
    fotoUrl: "/images/achievements/web-design-juara1.jpg",
    tahun: "2024",
  },
  {
    id: 2,
    judul: "Juara 2 Futsal Antar Kelas",
    deskripsi:
      "Tim futsal kelas menembus final turnamen antar kelas dan pulang membawa piala juara kedua.",
    fotoUrl: "/images/achievements/futsal-juara2.jpg",
    tahun: "2024",
  },
  {
    id: 3,
    judul: "Kelas Terbersih Semester Ganjil",
    deskripsi:
      "Penghargaan kelas terbersih dan tertata rapi berkat kerja keras tim piket dan koordinator kebersihan.",
    fotoUrl: "/images/achievements/kelas-terbersih.jpg",
    tahun: "2023",
  },
];

// ----------------------------------------------------------------------------
// 7. FOOTER
// ----------------------------------------------------------------------------
export const createdBy = [
  { peran: "Lead Developer", nama: "Muhammad Fahreza Irahim", instagram: "@rizkyp" },
];

export const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Tentang", href: "#tentang" },
  { label: "Media", href: "#media" },
  { label: "Struktur", href: "#struktur" },
  { label: "Anggota", href: "#anggota" },
  { label: "Gallery", href: "#gallery" },
  { label: "Prestasi", href: "#prestasi" },
];