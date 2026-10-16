import Link from 'next/link';
import { SEGMEN, TOTAL_MENIT } from '@/lib/siaran';

/* ============================================================================
   Bagian penanda Lumicast: RUNDOWN.
   Jadwal acara biasanya ditulis sebagai daftar jam mulai saja. Di sini
   ditampilkan seperti lembar rundown penyiaran — ada durasi tiap segmen,
   penanggung jawab, dan jenis segmennya, sehingga peserta bisa menghitung
   sendiri kapan mereka bisa kembali bekerja.
   ========================================================================== */

const segmen = SEGMEN.map((s) => ({ ...s, durasi: `${s.durasi}′` }));

const warnaJenis = {
  Materi: 'bg-live/12 text-live',
  Praktik: 'bg-deck/8 text-deck',
  Panel: 'bg-live/12 text-live',
  Jeda: 'bg-rule/50 text-ink-soft',
  Persiapan: 'bg-rule/50 text-ink-soft',
  Penutup: 'bg-rule/50 text-ink-soft',
};

export default function Rundown() {
  return (
    <section id="rundown" className="relative scroll-mt-16 overflow-hidden bg-sheet py-16 md:py-28">
      <div aria-hidden="true" className="ruled absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-8 max-w-2xl md:mb-12">
          <p className="slug mb-5 text-live">Rundown</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold md:text-[2.6rem]">
            Enam segmen, total {TOTAL_MENIT} menit, tanpa jam karet
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Durasi tiap segmen sudah dikunci sejak rundown disusun. Kalau satu segmen selesai lebih
            cepat, jedanya tidak dipakai untuk memanjangkan segmen berikutnya.
          </p>
        </div>

        {/* Kepala kolom */}
        <div className="hidden border-y-2 border-ink py-3 md:grid md:grid-cols-[5.5rem_3.5rem_minmax(0,1.6fr)_7rem_minmax(0,1fr)] md:gap-5">
          {['Mulai', 'Durasi', 'Segmen', 'Jenis', 'Penanggung jawab'].map((h) => (
            <span key={h} className="slug text-ink-soft">
              {h}
            </span>
          ))}
        </div>

        <ol>
          {segmen.map((s) => (
            <li
              key={s.mulai}
              className="grid grid-cols-[3.75rem_minmax(0,1fr)] gap-x-4 gap-y-1.5 border-b border-rule py-4 md:grid-cols-[5.5rem_3.5rem_minmax(0,1.6fr)_7rem_minmax(0,1fr)] md:items-baseline md:gap-x-5 md:gap-y-2 md:py-5"
            >
              <span className="row-span-2 md:row-span-1">
                <span className="tnum block text-lg font-semibold text-ink md:text-base">{s.mulai}</span>
                <span className="slug tnum mt-1 block text-ink-soft md:hidden">{s.durasi}</span>
              </span>
              <span className="slug tnum hidden text-ink-soft md:block">{s.durasi}</span>

              <span>
                <span className="block font-medium text-ink">{s.judul}</span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{s.catatan}</span>
              </span>

              <span className="flex flex-wrap items-center gap-x-3 gap-y-1 md:contents">
                <span className="md:justify-self-start">
                  <span className={`slug inline-block px-2.5 py-1.5 ${warnaJenis[s.jenis]}`}>
                    {s.jenis}
                  </span>
                </span>
                <span className="text-sm text-ink-soft">{s.pj}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 border-t-2 border-ink pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="slug text-ink-soft">Total tayang</span>
          <span className="tnum text-lg font-semibold text-ink">{TOTAL_MENIT} menit · 08.30–16.00 WIB</span>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="slug leading-[1.7] text-ink-soft">Susunan acara di atas adalah contoh untuk keperluan purwarupa desain.</p>
          <Link href="/cek-perangkat" className="slug shrink-0 border border-ink px-4 py-3 text-ink hover:bg-ink hover:text-white">Cek perangkat sebelum 08.30</Link>
        </div>
      </div>
    </section>
  );
}
