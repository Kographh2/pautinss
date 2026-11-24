import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SITE_NAME } from "@/lib/config";

export type Section = { h: string; p: string[] };

export default function Legal({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <main className="flex min-h-screen flex-col bg-paper text-ink">
      <article className="mx-auto w-full max-w-2xl flex-1 px-5 py-8 sm:px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          {SITE_NAME}
        </Link>
        <h1 className="mt-12 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-ink/70">Terakhir diperbarui {updated}</p>
        <p className="mt-8 text-lg leading-relaxed">{intro}</p>
        {sections.map((s) => (
          <section key={s.h} className="mt-10">
            <h2 className="text-2xl font-extrabold tracking-tight">{s.h}</h2>
            {s.p.map((t, i) => (
              <p key={i} className="mt-3 leading-relaxed">
                {t}
              </p>
            ))}
          </section>
        ))}
      </article>
      <div className="bg-ink px-5 py-8 text-paper sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Footer />
        </div>
      </div>
    </main>
  );
}
