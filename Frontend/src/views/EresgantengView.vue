<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navLinks = ['Beranda', 'Kurikulum', 'Karya Siswa', 'Kontak']

const menuCepat = ['Jadwal Praktikum', 'Modul Pemrograman Web', 'Daftar Lab RPL', 'Info PKL & LSP']

const berita = [
  {
    img: 'https://picsum.photos/seed/qr/600/400',
    alt: 'Aplikasi Inventaris QR',
    judul: 'Aplikasi Inventaris QR',
    isi: 'Sistem peminjaman alat laboratorium berbasis web responsif dengan pemindai QR Code.',
  },
  {
    img: 'https://picsum.photos/seed/cbt/600/400',
    alt: 'Portal CBT Online',
    judul: 'Portal CBT Online',
    isi: 'Platform ujian berbasis komputer yang adaptif pada desktop lab maupun smartphone.',
  },
  {
    img: 'https://picsum.photos/seed/katalog/600/400',
    alt: 'E-Katalog Produk PKK',
    judul: 'E-Katalog Produk PKK',
    isi: 'Etalase digital karya kreatif siswa jurusan Rekayasa Perangkat Lunak.',
  },
  {
    img: 'https://picsum.photos/seed/absensi/600/400',
    alt: 'Aplikasi Absensi RFID',
    judul: 'Aplikasi Absensi RFID',
    isi: 'Absensi siswa pakai kartu RFID, datanya langsung masuk ke dashboard guru piket.',
  },
  {
    img: 'https://picsum.photos/seed/ppdb/600/400',
    alt: 'Website PPDB Online',
    judul: 'Website PPDB Online',
    isi: 'Formulir pendaftaran siswa baru yang bisa diisi lewat HP tanpa harus datang ke sekolah.',
  },
  {
    img: 'https://picsum.photos/seed/game/600/400',
    alt: 'Game Edukasi Matematika',
    judul: 'Game Edukasi Matematika',
    isi: 'Game hitung-hitungan buat anak SD, dibuat pakai HTML, CSS, dan JavaScript sederhana.',
  },
]
</script>

<template>
  <div class="page-wrapper">
    <!-- HEADER -->
    <header class="header">
      <div class="logo">
        <img class="logo-img" src="@/assets/logo-smkn9.png" alt="Logo SMKN 9 Medan" />
        <span>RPL SMKN 9 MEDAN</span>
      </div>
      <nav class="nav-links" :class="{ show: menuOpen }">
        <a v-for="item in navLinks" :key="item" href="#">{{ item }}</a>
      </nav>
      <button class="hamburger-btn" aria-label="Menu" @click="menuOpen = !menuOpen">&#9776;</button>
    </header>

    <!-- SAMBUTAN / HERO -->
    <section class="sambutan">
      <h1>Selamat Datang di Portal RPL</h1>
      <p>Wadah karya dan berita siswa jurusan Rekayasa Perangkat Lunak - SMK Negeri 9 Medan</p>
      <a class="sambutan-tombol" href="#">Lihat Karya Siswa</a>
    </section>

    <!-- SIDEBAR KIRI (Dihilangkan di Smartphone) -->
    <aside class="sidebar-kiri">
      <h3>Menu Cepat</h3>
      <ul>
        <li v-for="item in menuCepat" :key="item">{{ item }}</li>
      </ul>
    </aside>

    <!-- KONTEN UTAMA -->
    <main class="konten-utama">
      <h2>Berita &amp; Proyek Terbaru Kelas X RPL</h2>
      <p>
        Ini adalah hasil tugas responsive. Coba ubah ukuran browser dari HP, tablet, sampai desktop.
      </p>

      <div class="card-grid">
        <article v-for="kartu in berita" :key="kartu.judul" class="card">
          <img :src="kartu.img" :alt="kartu.alt" />
          <h4>{{ kartu.judul }}</h4>
          <p>{{ kartu.isi }}</p>
        </article>
      </div>
    </main>

    <!-- WIDGET PROMO KANAN (Dihilangkan di Tablet & Smartphone) -->
    <aside class="widget-promo">
      <h3>Info &amp; Promo Lab</h3>
      <div class="promo-box">
        <strong>Uji Kompetensi LSP!</strong>
        <p>Persiapkan portofolio web responsif kalian sebelum jadwal asesmen.</p>
      </div>
      <a class="promo-tombol" href="#">Daftar Sekarang</a>
    </aside>

    <!-- FOOTER -->
    <footer class="footer">
      <p>&copy; 2026 Jurusan RPL SMK Negeri 9 Medan - Tugas Responsive X RPL</p>
    </footer>
  </div>
</template>

<style>
/*
  PALET WARNA TEMA
  Hijau hutan : #1b4332
  Hijau daun  : #2d6a4f
  Kayu tua    : #6f4e37
  Kayu muda   : #8b5e34
  Krem        : #f3efe6
*/

body {
  font-family: 'Segoe UI', sans-serif;
  background: #f3efe6;
  color: #33302a;
  font-size: 16px;
  line-height: 1.6;
}

h1,
h2,
h3,
h4 {
  font-weight: bold;
}

/* ========== LAYOUT (FLEXBOX) ========== */

.page-wrapper {
  display: flex;
  flex-wrap: wrap; /* Kalau tidak muat, pindah ke baris bawah */
  gap: 14px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px;
}

.header,
.footer,
.sambutan {
  width: 100%; /* Header, hero & footer lebar penuh */
}

.sidebar-kiri {
  width: 200px;
}

.widget-promo {
  width: 220px;
}

.konten-utama {
  flex: 1; /* Konten mengisi sisa ruang yang kosong */
  background: #ffffff;
  border: 1px solid #e0d7c4;
  box-shadow: 4px 4px 0 #e6ddca;
  padding: 18px;
}

/* ========== HEADER ========== */

.header {
  position: relative; /* Biar menu HP bisa muncul di bawah header */
  background: #1b4332;
  color: #ffffff;
  border-bottom: 6px solid #8b5e34; /* Garis aksen kayu */
  padding: 10px 18px;
  display: flex;
  justify-content: space-between; /* Logo kiri, menu kanan */
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}

.logo-img {
  height: 44px;
}

.nav-links {
  display: flex;
  gap: 6px;
}

.nav-links a {
  color: #dcead9;
  text-decoration: none;
  padding: 6px 10px;
}

.nav-links a:hover {
  background: #2d6a4f;
}

.hamburger-btn {
  display: none; /* Tombol ☰ hanya muncul di HP */
  background: #8b5e34;
  color: #ffffff;
  border: none;
  padding: 8px 12px;
  font-size: 1.2rem;
  cursor: pointer;
}

/* ========== SAMBUTAN / HERO ========== */

.sambutan {
  background: linear-gradient(135deg, #1b4332, #2d6a4f); /* Gradasi hijau hutan */
  color: #ffffff;
  border-left: 8px solid #8b5e34;
  padding: 30px 24px;
}

.sambutan h1 {
  font-size: 1.7rem;
}

.sambutan p {
  margin-top: 6px;
  color: #d3e7da;
  max-width: 600px;
}

.sambutan-tombol {
  display: inline-block; /* Supaya bisa dikasih jarak */
  margin-top: 16px;
  background: #8b5e34;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 18px;
}

.sambutan-tombol:hover {
  background: #6f4e37;
}

/* ========== SIDEBAR ========== */

.sidebar-kiri {
  background: #2d6a4f;
  color: #ffffff;
  border-top: 6px solid #8b5e34;
  padding: 18px;
}

.sidebar-kiri h3 {
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  padding-bottom: 8px;
}

.sidebar-kiri ul {
  list-style: none;
  margin-top: 10px;
}

.sidebar-kiri li {
  padding: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: 0.2s; /* Biar gerakannya halus */
}

/* Saat di-hover, teks bergeser ke kanan */
.sidebar-kiri li:hover {
  background: #1b4332;
  padding-left: 14px;
  cursor: pointer;
}

/* ========== KONTEN & KARTU ========== */

.konten-utama h2 {
  color: #1b4332;
  border-left: 6px solid #8b5e34; /* Garis aksen di samping judul */
  padding-left: 10px;
}

.konten-utama > p {
  margin-top: 8px;
  color: #6b6357;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 kolom sama besar */
  gap: 14px;
  margin-top: 16px;
}

.card {
  background: #faf6ec;
  border: 1px solid #e0d7c4;
  box-shadow: 3px 3px 0 #e6ddca;
  padding: 14px;
  transition: 0.2s; /* Biar gerakannya halus */
}

/* Kartu naik sedikit saat di-hover */
.card:hover {
  border-color: #2d6a4f;
  box-shadow: 6px 6px 0 #d9cfbb;
  transform: translateY(-4px);
}

/* TANTANGAN 1: Gambar harus responsif */
.card img {
  width: 100%;
  max-width: 100%;
  display: block;
  margin-bottom: 10px;
}

.card h4 {
  color: #1b4332;
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.card p {
  color: #6b6357;
  font-size: 0.95rem;
}

/* ========== PROMO & FOOTER ========== */

.widget-promo {
  background: #8b5e34;
  color: #ffffff;
  border-top: 6px solid #6f4e37;
  padding: 18px;
}

.promo-box {
  background: #6f4e37;
  padding: 12px;
  margin-top: 10px;
}

.promo-tombol {
  display: block;
  text-align: center;
  margin-top: 14px;
  background: #ffffff;
  color: #6f4e37;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
}

.promo-tombol:hover {
  background: #f3efe6;
}

.footer {
  background: #3e2723;
  color: #efe4d3;
  border-top: 6px solid #8b5e34;
  text-align: center;
  padding: 16px;
  font-size: 0.95rem;
}

/* ========== BREAKPOINT 1: TABLET ========== */
/* Lebar maksimal 1023px → promo kanan disembunyikan */
@media (max-width: 1023px) {
  .widget-promo {
    display: none;
  }
  .sidebar-kiri {
    width: 170px;
  }
  .card-grid {
    grid-template-columns: 1fr 1fr; /* 2 kolom */
  }
}

/* ========== BREAKPOINT 2: SMARTPHONE ========== */
/* Lebar maksimal 600px → jadi 1 kolom, sidebar & menu teks disembunyikan */
@media (max-width: 600px) {
  .sidebar-kiri {
    display: none;
  }
  .nav-links {
    display: none;
  }
  .card-grid {
    grid-template-columns: 1fr; /* 1 kolom */
  }
  .sambutan {
    padding: 20px 16px;
  }
  .sambutan h1 {
    font-size: 1.25rem;
  }
  .logo {
    font-size: 1rem;
  }
  .logo-img {
    height: 36px;
  }
  .hamburger-btn {
    display: block;
  }

  /* Menu muncul saat tombol ☰ diklik */
  .nav-links.show {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background: #1b4332;
    padding: 10px 14px;
    gap: 4px;
    z-index: 10;
  }
}

/* ========== TANTANGAN 2: ORIENTATION ========== */
/* HP diputar mendatar → header ganti warna kayu */
@media (max-width: 850px) and (orientation: landscape) {
  .header {
    background: #6f4e37;
  }
}

/* ========== TANTANGAN 3: SMART TV ========== */
/* Layar di atas 1921px → tulisan diperbesar biar enak dibaca dari jauh */
@media (min-width: 1921px) {
  body {
    font-size: 20px;
  }
}
</style>
