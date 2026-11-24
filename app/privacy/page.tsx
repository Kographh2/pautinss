import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { CONTACT } from "@/lib/config";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <Legal
      title="Privacy Policy"
      updated="24 November 2026"
      intro="Halaman ini menjelaskan data apa saja yang disimpan Pautin saat kamu memakai layanan ini, dan data apa yang tidak."
      sections={[
        {
          h: "Data yang kami simpan",
          p: [
            "Saat kamu membuat shortlink, kami menyimpan link tujuan, path shortlink, dan waktu pembuatannya.",
            "Setiap kali halaman sebuah shortlink dibuka, hitungan kunjungan link itu bertambah satu. Yang tersimpan hanya angkanya, bukan siapa yang membuka.",
          ],
        },
        {
          h: "Data yang tidak kami simpan",
          p: [
            "Pautin tidak meminta akun, nama, atau email. Kami tidak menyimpan alamat IP pengunjung di database, dan tidak memasang cookie pelacak maupun alat analitik pihak ketiga.",
            "QR code dibuat di browser kamu. Gambarnya tidak dikirim ke server kami.",
          ],
        },
        {
          h: "Penyedia layanan",
          p: [
            "Pautin berjalan di penyedia hosting dan database pihak ketiga (saat ini Vercel dan Supabase). Mereka dapat mencatat data teknis, misalnya alamat IP, di log server masing-masing sesuai kebijakan mereka.",
          ],
        },
        {
          h: "Siapa yang bisa melihat datamu",
          p: [
            "Shortlink bersifat publik. Siapa pun yang tahu atau menebak path-nya bisa membukanya dan melihat alamat tujuan di halaman perantara. Jangan memendekkan link yang berisi hal rahasia, seperti token, kata sandi, atau dokumen pribadi.",
            "Angka total link dan total kunjungan ditampilkan di beranda. Angka itu tidak memuat data pribadi.",
          ],
        },
        {
          h: "Berapa lama data disimpan",
          p: [
            "Link disimpan selama layanan berjalan, atau sampai kami menghapusnya karena melanggar aturan atau karena ada permintaan penghapusan.",
          ],
        },
        {
          h: "Minta link dihapus",
          p: [
            "Kirim alamat shortlink yang ingin dihapus ke kontak di bawah. Karena Pautin tidak memakai akun, kami tidak bisa langsung memastikan siapa pembuat sebuah link, jadi setiap permintaan kami nilai satu per satu.",
            "Kami mengelola data sesuai peraturan yang berlaku di Indonesia.",
          ],
        },
        {
          h: "Perubahan kebijakan",
          p: ["Kalau kebijakan ini berubah, versi terbaru akan tampil di halaman ini dengan tanggal pembaruan yang baru."],
        },
        { h: "Kontak", p: [CONTACT] },
      ]}
    />
  );
}
