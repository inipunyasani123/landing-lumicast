import { BERKAS, SEGMEN, SIARAN, tanggalSiaran } from '@/lib/siaran';

export default function Hero() {
  const t = tanggalSiaran(SIARAN.nomor);
  return (
    <section className="relative overflow-hidden bg-deck pt-24 pb-0 text-white md:pt-36">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <p className="slug tanda naik mb-6 flex items-center text-white md:mb-7">
              Siaran #{SIARAN.nomor} · {t.hari}
            </p>

            <h1 className="text-[2.4rem] leading-[1.02] font-semibold text-white sm:text-5xl lg:text-[3.9rem]">
              Acaranya dimulai
              <br />
              {/* Tanda hubung tak-terputus (U+2011) supaya "ke‑nol" tidak terbelah di ujung baris. */}
              <span className="text-live-bright">tepat menit ke&#8209;nol.</span>
            </h1>

            <p className="naik naik-2 mt-6 max-w-lg leading-relaxed text-white md:mt-7">
              {SIARAN.judul}: in-house training dengan rundown tercetak. Tiap segmen punya durasi pasti, jadi Anda tahu persis kapan bisa kembali ke pekerjaan.
            </p>

            <div className="naik naik-3 mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-9">
              <a
                href="#daftar"
                className="inline-flex items-center justify-center bg-live px-8 py-4 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90"
              >
                Daftar sekarang
              </a>
              <a
                href="#rundown"
                className="inline-flex items-center justify-center border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60"
              >
                Baca rundown
              </a>
            </div>
          </div>

          {/* Kartu berkas acara — meniru kepala lembar rundown */}
          <div className="naik naik-2 h-fit bg-white/5 p-5 backdrop-blur-sm sm:p-7">
            <p className="slug mb-3 border-b border-white/20 pb-3 text-white sm:mb-6 sm:pb-4">Berkas acara</p>
            <dl className="grid grid-cols-2 gap-x-5 sm:block">
              {BERKAS.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 border-white/12 py-3 [&:nth-child(-n+2)]:border-b sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:border-b sm:py-4 sm:last:border-b-0">
                  <dt className="slug text-white">{k}</dt>
                  <dd className="text-sm font-medium text-white sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Pita waktu di kaki hero */}
      <div className="relative z-10 mt-12 border-t border-white/15 md:mt-14">
        <div className="mx-auto grid max-w-6xl grid-cols-4 px-6">
          {SEGMEN.filter((s) => s.jenis !== 'Jeda').slice(0, 4).map((s) => (
            <div key={s.mulai} className="timecol border-white/15 px-2 py-4 first:border-l-0 sm:px-4 sm:py-5">
              <span className="slug tnum text-white">{s.mulai}</span>{' '}
              <span className="slug mt-1 block tracking-[0.06em] text-white/80 sm:mt-0 sm:inline sm:tracking-[0.16em] sm:text-white">{s.jenis}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
