import Link from 'next/link';
import { JADWAL, tanggalSiaran } from '@/lib/siaran';

export default function SiaranBerikutnya() {
  const berikut = JADWAL.slice(1, 4);
  return (
    <section className="bg-deck py-14 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="slug mb-4 text-live-bright">Setelah siaran ini</p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Tiga siaran berikutnya sudah ada di jadwal</h2>
          </div>
          <Link href="/jadwal-siaran" className="slug shrink-0 border border-white/30 px-4 py-3 text-white hover:border-white">
            Buka jadwal siaran
          </Link>
        </div>
        <ul className="grid gap-px bg-white/15 sm:grid-cols-3">
          {berikut.map((j) => (
            <li key={j.nomor} className="bg-deck p-5">
              <p className="slug tnum text-live-bright">#{j.nomor} · {tanggalSiaran(j.nomor).tanggal}</p>
              <p className="mt-3 font-semibold text-white">{j.judul}</p>
              <p className="mt-2 text-sm text-white/75">{j.jam} WIB</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
