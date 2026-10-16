import Hero from "./components/Hero";
import Dibahas from "./components/Dibahas";
import Rundown from "./components/Rundown";
import Narasumber from "./components/Narasumber";
import Untuk from "./components/Untuk";
import Paket from "./components/Paket";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import SiaranBerikutnya from "./components/SiaranBerikutnya";
import { NARASUMBER, PAKET, SIARAN, SITE, tanggalSiaran } from "@/lib/siaran";

export default function Home() {
  // Dihitung saat render (bukan di tingkat modul) supaya ikut bergulir tiap revalidate.
  const t = tanggalSiaran(SIARAN.nomor);
  const eventLd = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: `Lumicast #${SIARAN.nomor}: ${SIARAN.judul}`,
    description: "Pelatihan in-house daring untuk pengurus non-keuangan: membaca neraca, arus kas, anggaran vs realisasi, dan tanda bahaya laporan.",
    startDate: `${t.iso}T08:30:00+07:00`,
    endDate: `${t.iso}T16:00:00+07:00`,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: SITE },
    image: [`${SITE}/og.jpg`],
    organizer: { "@type": "Organization", name: "Lumicast", url: SITE },
    performer: NARASUMBER.filter((n) => n.kode !== "MC").map((n) => ({ "@type": "Person", name: n.nama })),
    offers: PAKET.map((p) => ({
      "@type": "Offer",
      name: `Paket ${p.nama}`,
      price: Number(p.harga.replace(/\D/g, "")) || 0,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: `${SITE}/?paket=${encodeURIComponent(p.nama)}#daftar`,
    })),
  };

  return (
    <main>
      <Hero />
      <Dibahas />
      <Rundown />
      <Narasumber />
      <Untuk />
      <Paket />
      <FAQ />
      <Registration hari={t.hari} />
      <SiaranBerikutnya />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }} />
    </main>
  );
}
