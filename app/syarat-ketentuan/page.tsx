import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { CONTACT } from "@/lib/config";

export const metadata: Metadata = { title: "Syarat dan Ketentuan" };

export default function Page() {
  return (
    <Legal
      title="Syarat dan Ketentuan"
      updated="24 November 2026"
      intro="Dengan memakai Pautin, kamu setuju dengan syarat di halaman ini, dengan Terms (aturan penggunaan), dan dengan Privacy Policy. Kalau tidak setuju, sebaiknya jangan memakai layanan ini."
      sections={[
        {
          h: "Tentang layanan",
          p: [
            "Pautin adalah layanan pemendek link yang dikelola Kograph. Kamu memasukkan sebuah link, lalu Pautin memberi alamat pendek dan QR code yang mengarah ke link itu lewat halaman perantara.",
          ],
        },
        {
          h: "Gratis dan apa adanya",
          p: [
            "Saat ini Pautin gratis. Kalau suatu hari ada perubahan, pengumumannya akan muncul di situs ini.",
            "Layanan diberikan apa adanya. Kami berusaha menjaga link tetap jalan, tetapi tidak menjamin layanan selalu aktif tanpa gangguan, atau link bertahan selamanya.",
          ],
        },
        {
          h: "Tanggung jawabmu",
          p: [
            "Kamu bertanggung jawab atas link yang kamu buat dan cara kamu membagikannya. Pastikan kamu berhak membagikan tujuan link itu dan isinya tidak melanggar Terms.",
            "Hati-hati kalau mencetak QR code di media fisik. Kalau link dihapus atau layanan berhenti, QR code itu ikut tidak berfungsi.",
          ],
        },
        {
          h: "Halaman perantara",
          p: [
            "Setiap shortlink dibuka lewat halaman yang menampilkan alamat tujuan dan tombol Lanjutkan ke situs. Kami tidak mengelola situs tujuan dan tidak bertanggung jawab atas isinya.",
          ],
        },
        {
          h: "Hak kami",
          p: [
            "Kami dapat menghapus link, memblokir path, atau membatasi pemakaian kapan saja, termasuk tanpa pemberitahuan, terutama jika ada pelanggaran atau permintaan dari pihak berwenang.",
            "Kami juga dapat mengubah atau menghentikan layanan.",
          ],
        },
        {
          h: "Batas tanggung jawab",
          p: [
            "Sejauh diizinkan hukum, Kograph tidak bertanggung jawab atas kerugian yang timbul dari pemakaian Pautin, termasuk link yang berhenti berfungsi atau kerugian akibat mengunjungi situs tujuan.",
          ],
        },
        {
          h: "Perubahan syarat",
          p: ["Syarat ini bisa kami ubah. Versi terbaru selalu ada di halaman ini, lengkap dengan tanggal pembaruannya."],
        },
        { h: "Hukum yang berlaku", p: ["Syarat ini tunduk pada hukum Republik Indonesia."] },
        { h: "Kontak", p: [CONTACT] },
      ]}
    />
  );
}
