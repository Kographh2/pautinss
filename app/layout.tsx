import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { SITE_NAME, SITE_URL, SLOGAN } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME}: ${SLOGAN}`,
  description: "Pendekkan link panjang jadi alamat pendek di domain sendiri, lengkap dengan QR code. Gratis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
