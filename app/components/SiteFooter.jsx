import Link from 'next/link';
import { SIARAN, tanggalSiaran } from '@/lib/siaran';

export default function SiteFooter() {
  const t = tanggalSiaran(SIARAN.nomor);
  return (
    <footer className="bg-deck text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <p className="slug tanda flex items-center text-white">Lumicast</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            Siaran pelatihan in-house untuk organisasi, dijalankan dengan rundown tercetak. Siaran #{SIARAN.nomor}: {t.hari}.
          </p>
        </div>
        <nav aria-label="Siaran ini">
          <p className="slug mb-4 text-live-bright">Siaran #{SIARAN.nomor}</p>
          <ul className="space-y-0.5 text-sm text-white/80">
            <li><Link href="/#rundown" className="inline-block py-3 hover:text-white">Rundown</Link></li>
            <li><Link href="/#narasumber" className="inline-block py-3 hover:text-white">Narasumber</Link></li>
            <li><Link href="/#paket" className="inline-block py-3 hover:text-white">Paket</Link></li>
            <li><Link href="/#daftar" className="inline-block py-3 hover:text-white">Daftar</Link></li>
          </ul>
        </nav>
        <nav aria-label="Sebelum dan sesudah siaran">
          <p className="slug mb-4 text-live-bright">Panduan</p>
          <ul className="space-y-0.5 text-sm text-white/80">
            <li><Link href="/jadwal-siaran" className="inline-block py-3 hover:text-white">Jadwal siaran berikutnya</Link></li>
            <li><Link href="/cek-perangkat" className="inline-block py-3 hover:text-white">Cek perangkat</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="slug mx-auto max-w-6xl px-6 py-6 leading-[1.7] text-white/70">
          © 2026 Lumicast · Nama, jadwal, dan harga di situs ini adalah contoh untuk purwarupa desain.
        </p>
      </div>
    </footer>
  );
}
