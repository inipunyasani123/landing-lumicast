import { Sora, Inter } from "next/font/google";
import MotionProvider from "./components/MotionProvider";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Lumicast","description":"Siaran pelatihan in-house untuk pengurus organisasi","url":"https://landing-lumicast.pintuweb.id","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-lumicast.pintuweb.id"),
  title: { default: "Lumicast — Siaran Pelatihan untuk Pengurus Organisasi", template: "%s — Lumicast" },
  description: "Lumicast menyiarkan pelatihan in-house untuk pengurus organisasi dengan rundown tercetak. Siaran #14: Membaca Laporan Keuangan untuk Pengurus Organisasi, Rabu 16 Desember 2026.",
  applicationName: "Lumicast",
  keywords: ["webinar", "webinar eksklusif", "kelas online", "pengembangan diri"],
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
    description: "Lumicast menyiarkan pelatihan in-house untuk pengurus organisasi dengan rundown tercetak. Siaran #14: Membaca Laporan Keuangan untuk Pengurus Organisasi, Rabu 16 Desember 2026.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lumicast — Siaran Pelatihan untuk Pengurus Organisasi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumicast — Siaran Pelatihan untuk Pengurus Organisasi",
    description: "Lumicast menyiarkan pelatihan in-house untuk pengurus organisasi dengan rundown tercetak. Siaran #14: Membaca Laporan Keuangan untuk Pengurus Organisasi, Rabu 16 Desember 2026.",
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
        <MotionProvider>
          <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-live focus:px-4 focus:py-2 focus:text-white">Lompat ke konten</a>
          <SiteHeader />
          <div id="konten">{children}</div>
          <SiteFooter />
        </MotionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
