import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Continue from "@/components/Continue";
import { SLUG_RE } from "@/lib/config";
import { db } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Lanjutkan ke situs", robots: { index: false, follow: false } };

export default async function Go({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug.toLowerCase();
  if (!SLUG_RE.test(slug)) notFound();

  const supabase = db();
  const { data } = await supabase.from("links").select("url").eq("slug", slug).maybeSingle();
  if (!data) notFound();
  await supabase.rpc("increment_clicks", { p_slug: slug });

  const host = new URL(data.url).host;

  return (
    <main className="flex min-h-screen flex-col bg-paper text-ink">
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-16 sm:px-8">
        <p className="text-lg">Kamu akan dibawa ke</p>
        <p className="mt-1 break-all text-[clamp(2rem,8vw,4.5rem)] font-extrabold leading-none tracking-tight">
          {host}
        </p>
        <p className="mt-3 line-clamp-2 break-all text-sm text-ink/70">{data.url}</p>
        <Continue url={data.url} />
      </section>

      <section className="bg-ink px-5 py-10 text-paper sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-2xl font-extrabold tracking-tight">Mau bikin shortlink juga?</p>
          <p className="mt-2">
            100% gratis.{" "}
            <Link href="/" className="font-bold underline underline-offset-4">
              Klik di sini
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
