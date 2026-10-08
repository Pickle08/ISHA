# ISHA

Situs portofolio untuk ISHA, seniman visual real-time yang berkarya dengan TouchDesigner. Situs ini menampilkan karya generative, instalasi, dan projection mapping dalam tampilan gelap bergaya galeri.

## Teknologi

- [React](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com) v3
- [React Router](https://reactrouter.com) untuk halaman detail tiap karya
- [Three.js](https://threejs.org) untuk latar hero (CRT Warp dari [React Bits](https://reactbits.dev))
- Deploy di [Vercel](https://vercel.com)

## Fitur

- Hero dengan latar visual WebGL dan teks berjalan (marquee)
- Navbar yang berubah dari transparan ke solid saat di-scroll, dengan menu hamburger di mobile
- Grid karya, dengan halaman detail sendiri untuk setiap karya (`/karya/<slug>`)
- Carousel testimoni dengan autoplay dan indikator progres
- Layout responsif untuk mobile, tablet, dan desktop
- Fallback otomatis ke animasi canvas jika WebGL gagal dimuat

## Menjalankan di lokal

Pastikan [Node.js](https://nodejs.org) versi LTS sudah terpasang, lalu:

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Perintah lainnya:

```bash
npm run build     # build untuk produksi (hasil di folder dist)
npm run preview   # coba hasil build secara lokal
```

## Struktur folder

```
ISHA/
├── public/
│   └── images/works/<slug>/   # foto tiap karya
├── src/
│   ├── components/            # Navbar, Hero, Works, Testimonials, Footer, dll
│   ├── pages/
│   │   └── WorkDetail.jsx     # template halaman detail karya
│   ├── data/
│   │   ├── works.js           # data karya
│   │   └── testimonials.js    # data testimoni
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js         # palet warna dan font
└── vercel.json                # rewrite agar routing berfungsi di Vercel
```

## Menambah karya baru

1. Taruh foto di `public/images/works/<slug>/`, misalnya `public/images/works/nama-karya/cover.webp`.
2. Tambahkan satu blok baru di `src/data/works.js`:

```js
{
  id: 5,
  slug: "nama-karya",            // jadi URL: /karya/nama-karya
  title: "Nama Karya",
  year: 2026,
  medium: "TouchDesigner, real-time visuals",
  tools: ["TouchDesigner"],
  image: "/images/works/nama-karya/cover.webp",
  gallery: [
    "/images/works/nama-karya/2.webp",
  ],
  description: [
    "Paragraf pertama.",
    "Paragraf kedua.",
  ],
  vimeoId: "",                   // dicadangkan untuk video, belum dipakai
},
```

Kartu di grid dan halaman detailnya dibuat otomatis. Jika `image` dikosongkan, kartu memakai placeholder animasi.

Nama file di Windows tidak membedakan huruf besar-kecil, tetapi di Vercel (Linux) dibedakan. Samakan persis penulisan nama file dengan yang ada di `works.js`, dan sebaiknya pakai huruf kecil tanpa spasi. Kompres foto dulu (format `.webp`, idealnya di bawah ~300KB).

## Mengubah testimoni

Edit `src/data/testimonials.js`. Setiap item berisi `quote`, `source`, dan `location`.

## Mengubah warna dan font

Palet dan font ada di `tailwind.config.js`:

| Token     | Fungsi        |
| --------- | ------------- |
| `ink`     | latar utama   |
| `surface` | latar kartu   |
| `paper`   | teks utama    |
| `muted`   | teks sekunder |
| `copper`  | warna aksen   |

Font judul memakai Fraunces dan font isi memakai Inter, keduanya dimuat dari Google Fonts di `index.html`.

## Deploy

Project ini di-deploy lewat Vercel yang terhubung ke repositori GitHub. Setiap `git push` ke branch utama memicu deploy otomatis.

File `vercel.json` wajib ada. Tanpa itu, membuka atau me-refresh langsung URL seperti `/karya/nama-karya` akan menghasilkan 404.

## Kredit

Developed by codex.project
