import Link from "next/link";
import { SITE_NAME } from "@/lib/config";

const links = [
  ["/privacy", "Privacy Policy"],
  ["/syarat-ketentuan", "Syarat dan Ketentuan"],
  ["/terms", "Terms"],
] as const;

export function Footer() {
  return (
    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-baseline sm:justify-between">
      <p className="font-bold">{SITE_NAME} by Kograph</p>
      <nav aria-label="Informasi legal" className="flex flex-wrap gap-x-5 gap-y-1">
        {links.map(([href, label]) => (
          <Link key={href} href={href} className="underline-offset-4 hover:underline">
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
