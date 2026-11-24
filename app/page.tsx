import Shortener from "@/components/Shortener";
import { SITE_HOST, SITE_NAME, SLOGAN } from "@/lib/config";

export default function Home() {
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

        <footer className="mt-auto pt-12 text-sm text-paper/70">
          Gratis, tanpa akun. Linknya tidak kedaluwarsa.
        </footer>
      </div>
    </main>
  );
}
