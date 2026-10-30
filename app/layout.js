import { Sora, Inter } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Lumicast","description":"Siaran pelatihan in-house untuk pengurus organisasi","url":"https://landing-lumicast.pintuweb.id","inLanguage":"id"};

const DESKRIPSI = "Lumicast menyiarkan pelatihan in-house untuk pengurus organisasi dengan rundown tercetak. Siaran #14: membaca laporan keuangan tanpa latar akuntansi.";

// Tanggal siaran dihitung dari hari ini (lib/siaran.js), jadi halaman dibangun ulang tiap jam.
export const revalidate = 3600;

export const metadata = {
  metadataBase: new URL("https://landing-lumicast.pintuweb.id"),
  title: { default: "Lumicast — Siaran Pelatihan untuk Pengurus Organisasi", template: "%s — Lumicast" },
  description: DESKRIPSI,
  applicationName: "Lumicast",
  keywords: ["pelatihan pengurus organisasi", "membaca laporan keuangan", "pelatihan bendahara", "in-house training daring", "tata kelola organisasi"],
  authors: [{ name: "Lumicast" }],
  creator: "Lumicast",
  publisher: "Lumicast",
  alternates: { canonical: "https://landing-lumicast.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-lumicast.pintuweb.id",
    siteName: "Lumicast",
    title: "Lumicast — Siaran Pelatihan untuk Pengurus Organisasi",
    description: DESKRIPSI,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lumicast — Siaran Pelatihan untuk Pengurus Organisasi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumicast — Siaran Pelatihan untuk Pengurus Organisasi",
    description: DESKRIPSI,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-live focus:px-4 focus:py-2 focus:text-white">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=lumicast" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px', display: 'inline-block', padding: '12px 8px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
