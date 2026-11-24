import { NextResponse } from "next/server";
import { db } from "@/lib/supabase";
import { RESERVED, SITE_HOST, SITE_URL, SLUG_RE } from "@/lib/config";

const ALPHABET = "abcdefghijkmnopqrstuvwxyz23456789";

function randomSlug(n = 6) {
  const bytes = crypto.getRandomValues(new Uint8Array(n));
  return Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join("");
}

const fail = (error: string, status: number) => NextResponse.json({ error }, { status });

export async function POST(req: Request) {
  let body: { url?: string; slug?: string };
  try {
    body = await req.json();
  } catch {
    return fail("Permintaan tidak valid.", 400);
  }

  const raw = (body.url ?? "").trim();
  if (!raw || raw.length > 2048) return fail("Link-nya belum diisi atau terlalu panjang (maks. 2048 karakter).", 400);

  let target: URL;
  try {
    target = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
  } catch {
    return fail("Link tujuan tidak valid. Contoh: https://contoh.com", 400);
  }
  if (!["http:", "https:"].includes(target.protocol) || !target.hostname.includes(".")) {
    return fail("Link tujuan harus diawali http:// atau https://", 400);
  }
  if (target.host === SITE_HOST) return fail("Link dari situs ini tidak bisa dipendekkan lagi.", 400);

  const custom = (body.slug ?? "").trim().toLowerCase();
  if (custom) {
    if (!SLUG_RE.test(custom)) return fail("Path harus 3-32 karakter, isinya huruf, angka, - atau _.", 400);
    if (RESERVED.has(custom)) return fail("Path itu dipakai sistem. Pilih yang lain.", 400);
  }

  const supabase = db();
  for (let i = 0; i < 5; i++) {
    const slug = custom || randomSlug();
    const { error } = await supabase.from("links").insert({ slug, url: target.toString() });
    if (!error) return NextResponse.json({ slug, shortUrl: `${SITE_URL}/${slug}` });
    if (error.code === "23505") {
      if (custom) return fail("Path itu sudah dipakai orang lain. Coba yang lain.", 409);
      continue;
    }
    return fail("Gagal menyimpan link. Coba lagi sebentar.", 500);
  }
  return fail("Gagal membuat path acak. Coba lagi.", 500);
}
