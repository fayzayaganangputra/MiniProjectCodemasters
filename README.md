# Nama Aplikasi

Bokoe App

## Struktur Direktori

- **Assets**: Direktori untuk menyimpan file gambar (misalnya: png, jpg) yang digunakan dalam aplikasi.
- **Components**: Direktori untuk berkas komponen aplikasi, terbagi menjadi beberapa bagian:
  - **Navbar.jsx**: Komponen untuk bagian Navbar.
  - **Hero.jsx**: Komponen untuk bagian Hero Utama.
  - **Kolbook.jsx**: Komponen untuk bagian Book Big.
  - **Rowbook.jsx**: Komponen untuk bagian Book Small.
  - **Cta.jsx**: Komponen untuk bagian tampilan subscribe.
  - **Footer.jsx**: Komponen untuk bagian footer.
  - **FooterBawah.jsx**: Komponen untuk bagian footer bagian bawah.
  - **Ourlatest.jsx**: Komponen untuk tampilan Hero pada halaman Latest.
  - **Picks.jsx**: Komponen untuk tampilan Hero pada halaman Top Picks.
  - **Randomku.jsx**: Berkas untuk logika mengacak tampilan data buku.
  - **Rating.jsx**: Komponen untuk tampilan Bintang untuk digunakan pada rating.

- **Path**: Direktori untuk berkas yang membuat tampilan setiap halaman:
  - **Layout.jsx**: Tampilan halaman utama saat aplikasi dijalankan.
  - **Home.jsx**: Tampilan pada halaman All (mirip halaman utama).

  - **Latest.jsx**: Tampilan halaman Latest.
  - **TopPicks.jsx**: Tampilan pada halaman Top Picks.
  - **ReadBook**: Tampilan halaman Detail Buku, diakses ketika tombol read book diklik.

- **Router.js**: Berkas yang mengatur rute-rute aplikasi.
- **Main.jsx**: Berkas utama untuk menjalankan router.

## Kekurangan Aplikasi

- Fungsionalitas Search belum sepenuhnya tersedia.
- Masalah error 404 terkadang muncul saat perpindahan halaman. Refresh halaman dapat memperbaikinya, meskipun aplikasi sebenarnya tidak mengalami error, hanya butuh sedikit waktu untuk mengambil data.

**Jalankan Aplikasi dengan cara masuk ke /d/codemasters/Bookoe/project-bokoe lalu npm run dev untuk menjalankannya**

