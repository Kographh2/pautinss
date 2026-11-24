import { Footer } from "@/components/Footer";
import Shortener from "@/components/Shortener";
import { SITE_HOST, SITE_NAME, SLOGAN } from "@/lib/config";
import { getStats } from "@/lib/stats";

export const revalidate = 60;

const fmt = (n: number) => n.toLocaleString("id-ID");

export default async function Home() {
  const stats = await getStats();

  return (
    <main className="min-h-screen bg-ink text-paper">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-5 py-6 sm:px-8">
        <header className="flex items-baseline justify-between gap-4">
          <span className="text-2xl font-extrabold tracking-tight">{SITE_NAME}</span>
          <span className="text-sm text-paper/80">100% gratis, tanpa daftar</span>
        </header>

        <h1 className="mt-14 text-[clamp(2.75rem,10vw,5.75rem)] font-extrabold leading-[0.95] tracking-tight">
          {SLOGAN.split("? ")[0]}?
          <br />
          {SLOGAN.split("? ")[1]}
        </h1>
        <p className="mt-5 max-w-md text-lg text-paper/85">
          Tempel linknya, pilih path kalau mau, QR-nya langsung jadi.
        </p>

        <div className="mt-8">
          <Shortener host={SITE_HOST} />
        </div>

        {stats && (
          <p className="mt-6 max-w-xl text-paper/85">
            Sampai sekarang <b>{fmt(stats.links)}</b> link sudah dibuat dan dibuka <b>{fmt(stats.clicks)}</b> kali.{" "}
            <b>{stats.pct}%</b> link pernah dibuka minimal sekali.
          </p>
        )}

        <div className="mt-auto pt-14">
          <div className="border-t border-paper/25 pt-5">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
