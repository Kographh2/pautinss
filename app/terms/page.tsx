import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { CONTACT } from "@/lib/config";

export const metadata: Metadata = { title: "Terms (Aturan Penggunaan)" };

export default function Page() {
  return (
    <Legal
      title="Terms (Aturan Penggunaan)"
      updated="24 November 2026"
      intro="Aturan ini berlaku untuk semua link yang dibuat lewat Pautin. Singkatnya: jangan pakai Pautin untuk menipu, menyerang, atau menyebarkan hal yang melanggar hukum."
      sections={[
        {
          h: "Yang dilarang",
          p: [
            "Link ke situs phishing atau penipuan, termasuk yang menyamar sebagai bank, instansi, atau merek lain.",
            "Link ke malware, ransomware, atau situs yang mengunduh perangkat lunak berbahaya tanpa sepengetahuan pengunjung.",
            "Link ke konten yang melanggar hukum di Indonesia, termasuk judi online, pornografi, eksploitasi anak, dan terorisme.",
            "Link ke konten yang melanggar hak cipta atau merek dagang pihak lain.",
            "Spam atau pengiriman pesan massal yang tidak diminta penerimanya.",
          ],
        },
        {
          h: "Path yang menyesatkan",
          p: ["Jangan memilih path yang sengaja meniru nama instansi, bank, atau merek untuk mengecoh orang."],
        },
        {
          h: "Pemakaian otomatis",
          p: ["Jangan membuat link dalam jumlah besar lewat skrip atau bot, dan jangan membebani server dengan permintaan berlebihan."],
        },
        {
          h: "Laporkan link bermasalah",
          p: [
            "Kalau menemukan shortlink Pautin yang melanggar aturan ini, kirim alamat shortlink dan alasannya ke kontak di bawah. Setiap laporan kami periksa satu per satu.",
          ],
        },
        {
          h: "Tindakan kami",
          p: [
            "Link yang melanggar bisa dihapus dan path-nya diblokir tanpa pemberitahuan.",
            "Untuk pelanggaran serius, kami dapat meneruskan informasi yang kami punya kepada pihak berwenang kalau hukum mewajibkannya.",
          ],
        },
        { h: "Kontak", p: [CONTACT] },
      ]}
    />
  );
}
