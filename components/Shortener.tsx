"use client";

import { useState } from "react";
import QRCode from "qrcode";

type Result = { shortUrl: string; slug: string; qr: string };

const bigType = "text-[clamp(1.5rem,5vw,2.5rem)] font-extrabold leading-tight tracking-tight";

export default function Shortener({ host }: { host: string }) {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, slug }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Terjadi kesalahan.");
        return;
      }
      const qr = await QRCode.toDataURL(data.shortUrl, {
        width: 640,
        margin: 2,
        color: { dark: "#0017AA", light: "#FCF8D8" },
      });
      setResult({ shortUrl: data.shortUrl, slug: data.slug, qr });
    } catch {
      setError("Tidak bisa terhubung ke server. Periksa koneksi lalu coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  async function copy() {
    if (!result) return;
    await navigator.clipboard.writeText(result.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <>
      <form onSubmit={submit} className="rounded-[28px] bg-paper p-6 text-ink sm:p-8">
        <label htmlFor="url" className="text-sm font-semibold">Link yang mau dipendekkan</label>
        <input
          id="url"
          type="text"
          inputMode="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://contoh.com/halaman-yang-panjang-banget"
          className="mt-2 block w-full border-b-2 border-ink bg-transparent pb-2 text-xl font-semibold placeholder:text-ink/40"
        />

        <label htmlFor="slug" className="mt-8 block text-sm font-semibold">
          Path sendiri <span className="font-normal text-ink/60">(opsional, kosongin aja kalau mau diacak)</span>
        </label>
        <div className={`mt-2 flex flex-wrap items-baseline border-b-2 border-dashed border-ink pb-2 ${bigType}`}>
          <span className="text-ink/50">{host}/</span>
          <input
            id="slug"
            type="text"
            value={slug}
            maxLength={32}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
            placeholder="nama-bebas"
            className="min-w-[8ch] flex-1 bg-transparent placeholder:text-ink/30"
          />
        </div>

        {error && (
          <p role="alert" className="mt-5 border-l-4 border-ink pl-3 font-semibold">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 cursor-pointer rounded-full bg-ink px-7 py-3.5 text-lg font-bold text-paper hover:bg-ink/90 disabled:cursor-wait disabled:opacity-60"
        >
          {loading ? "Sebentar..." : "Pautin link ini"}
        </button>
      </form>

      {result && (
        <section aria-live="polite" className="mt-4 rounded-[28px] bg-paper p-6 text-ink sm:p-8">
          <p className="text-sm font-semibold">Link pendekmu</p>
          <a
            href={result.shortUrl}
            target="_blank"
            rel="noopener"
            className={`mt-1 block break-all underline decoration-2 underline-offset-4 ${bigType}`}
          >
            {result.shortUrl.replace(/^https?:\/\//, "")}
          </a>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={result.qr}
              alt={`QR code untuk ${result.shortUrl}`}
              width={176}
              height={176}
              className="h-44 w-44 rounded-2xl"
            />
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copy}
                className="cursor-pointer rounded-full bg-ink px-6 py-3 font-bold text-paper hover:bg-ink/90"
              >
                {copied ? "Tersalin" : "Salin"}
              </button>
              <a
                href={result.qr}
                download={`qr-${result.slug}.png`}
                className="rounded-full border-2 border-ink px-6 py-3 font-bold hover:bg-ink hover:text-paper"
              >
                Unduh QR
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
