# Portofolio Sahrul Hidayat (React + Vite)

## Cara jalanin di local
```bash
npm install
npm run dev
```
Buka link yang muncul di terminal (biasanya http://localhost:5173).

**Bukan** dobel-klik `index.html` — di React, `npm run dev` yang jalanin server-nya.

## Struktur
```
src/
├── main.jsx          # entry point
├── App.jsx           # menyusun semua section
├── components/       # satu file per section (Hero, About, Skills, dst)
├── data/content.js   # semua teks/konten (edit di sini, nggak perlu sentuh komponen)
├── hooks/             # useReveal (scroll animation), useScrollProgress
└── styles/index.css   # semua styling (variabel warna di paling atas)

public/assets/         # foto profil, CV, screenshot proyek, foto musik
```

## Cara ganti konten
- Teks proyek/skill/pengalaman/musik → edit `src/data/content.js`, gampang tanpa nyentuh JSX
- Foto/CV → ganti file di `public/assets/` dengan nama yang sama
- Warna aksen → ubah `--accent` di baris atas `src/styles/index.css`

## Build buat production
```bash
npm run build
```
Hasilnya di folder `dist/` — ini yang di-deploy, bukan folder `src/`.

## Deploy ke Vercel
1. Push folder ini ke GitHub repo yang sama dengan yang connect ke `porto-sahrul-omega.vercel.app`
2. Di Vercel dashboard, pastikan:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Push ke branch `main` → Vercel otomatis build & deploy, link tetap sama
