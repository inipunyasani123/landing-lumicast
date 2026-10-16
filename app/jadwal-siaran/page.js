import Link from 'next/link';
import { JADWAL, SITE, menitKeJam, tanggalSiaran } from '@/lib/siaran';

export const metadata = {
  title: 'Jadwal Siaran',
  description: 'Panduan acara Lumicast: siaran pelatihan in-house untuk pengurus organisasi, dari laporan keuangan sampai serah terima pengurus.',
  alternates: { canonical: `${SITE}/jadwal-siaran` },
};

const warna = {
  'Pendaftaran dibuka': 'bg-live text-white',
  Segera: 'bg-deck text-white',
  Rencana: 'border border-rule text-ink-soft',
};

export default function JadwalSiaran() {
  const terpanjang = Math.max(...JADWAL.map((j) => j.durasi));
  return (
    <main className="pt-16">
      <section className="bg-deck px-6 pt-16 pb-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="slug tanda flex items-center text-white">Panduan acara</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold text-white md:text-5xl">
            Siaran untuk pengurus organisasi, setiap Rabu ketiga
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-white/80">
            Setiap siaran punya rundown tercetak dan durasi yang dikunci. Batang di kanan menunjukkan
            berapa lama Anda perlu meninggalkan pekerjaan.
          </p>
        </div>
      </section>

      <section className="relative bg-sheet px-6 py-14 md:py-20">
        <div aria-hidden="true" className="ruled absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <div className="hidden border-y-2 border-ink py-3 md:grid md:grid-cols-[4rem_7.5rem_minmax(0,1.5fr)_minmax(0,1fr)_9rem] md:gap-6">
            {['No.', 'Tanggal', 'Siaran', 'Durasi', 'Status'].map((h) => (
              <span key={h} className="slug text-ink-soft">{h}</span>
            ))}
          </div>
          <ol>
            {JADWAL.map((j) => (
              <li key={j.nomor} className="grid gap-x-6 gap-y-3 border-b border-rule py-6 md:grid-cols-[4rem_7.5rem_minmax(0,1.5fr)_minmax(0,1fr)_9rem] md:items-center">
                <span className="slug tnum text-live">#{j.nomor}</span>
                <span>
                  <span className="block font-semibold text-ink tnum">{tanggalSiaran(j.nomor).tanggal}</span>
                  <span className="text-sm">{tanggalSiaran(j.nomor).namaHari} · {j.jam}</span>
                </span>
                <span>
                  <h2 className="text-lg leading-snug font-semibold">{j.judul}</h2>
                  {j.ringkas && <span className="mt-1 block text-sm leading-relaxed">{j.ringkas}</span>}
                </span>
                <span className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-2.5 bg-live/80" style={{ width: `${Math.round((j.durasi / terpanjang) * 100)}%`, maxWidth: '10rem', minWidth: '2rem' }} />
                  <span className="slug tnum shrink-0 text-ink-soft">{menitKeJam(j.durasi)}</span>
                </span>
                <span className="flex flex-wrap items-center gap-3 md:flex-col md:items-start">
                  <span className={`slug inline-block px-2.5 py-1.5 ${warna[j.status]}`}>{j.status}</span>
                  {j.tautan && (
                    <Link href={j.tautan} className="slug text-live underline underline-offset-4">Daftar</Link>
                  )}
                </span>
              </li>
            ))}
          </ol>
          <p className="slug mt-8 leading-[1.7] text-ink-soft">
            Jadwal di atas adalah contoh untuk keperluan purwarupa desain. Siaran berstatus “Segera” dibuka pendaftarannya satu bulan sebelum tanggal siar.
          </p>
        </div>
      </section>
    </main>
  );
}
