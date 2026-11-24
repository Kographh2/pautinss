import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-ink px-5 text-paper sm:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Link ini tidak ketemu.</h1>
        <p className="mt-3 text-lg">Path-nya mungkin salah ketik, atau linknya sudah tidak ada.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-paper px-7 py-3.5 font-bold text-ink">
          Pautin link baru
        </Link>
      </div>
    </main>
  );
}
