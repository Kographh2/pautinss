# Pautin

Link panjang? Pautin aja.

Pemendek link + QR. Next.js 15, React 19, Tailwind 4, Supabase.

## Setup
1. Supabase: jalankan `supabase/schema.sql` di SQL Editor.
2. `cp .env.example .env.local`, isi:
   - `NEXT_PUBLIC_SITE_URL` = `https://pautin.my.id` (ini yang jadi domain shortlink)
   - `NEXT_PUBLIC_SITE_NAME` = nama brand
   - `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_CONTACT_EMAIL` = email yang tampil di halaman Privacy, Syarat, dan Terms
3. `npm install && npm run dev`

## Deploy (Vercel)
Isi env yang sama di Project Settings > Environment Variables, lalu pasang domain kamu.
Service role key hanya dipakai di server, jangan diberi prefix `NEXT_PUBLIC_`.

## Warna
Ubah di `app/globals.css` (`--color-ink`, `--color-paper`) dan warna QR di `components/Shortener.tsx`.

## Update dari versi lama
Jalankan ulang `supabase/schema.sql` (aman, semua pakai `if not exists` / `create or replace`) supaya fungsi statistik `link_stats` ikut terbuat.
