"use client";

import { useEffect, useState } from "react";

export default function Continue({ url }: { url: string }) {
  const [left, setLeft] = useState(5);

  useEffect(() => {
    if (left <= 0) {
      window.location.replace(url);
      return;
    }
    const t = setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => clearTimeout(t);
  }, [left, url]);

  return (
    <div className="mt-10">
      <a
        href={url}
        rel="noopener noreferrer nofollow"
        className="inline-block rounded-full bg-ink px-8 py-4 text-xl font-extrabold text-paper hover:bg-ink/90"
      >
        Lanjutkan ke situs
      </a>
      <p className="mt-4 text-sm text-ink/70">Otomatis lanjut dalam {Math.max(left, 0)} detik.</p>
    </div>
  );
}
