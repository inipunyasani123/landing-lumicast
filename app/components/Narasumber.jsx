import { NARASUMBER } from '@/lib/siaran';

/* Narasumber ditampilkan seperti di layar siaran: bingkai 16:9 dengan papan
   nama lower-third di kiri bawah. Tidak memakai foto — orangnya fiktif. */
export default function Narasumber() {
  return (
    <section id="narasumber" className="scroll-mt-16 bg-deck py-16 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 max-w-2xl md:mb-12">
          <p className="slug tanda mb-5 flex items-center text-white">Di layar</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold text-white md:text-[2.6rem]">
            Dua pemateri, satu pemandu yang menjaga jam
          </h2>
        </div>

        <ul className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
          {NARASUMBER.map((n) => (
            <li key={n.kode} className="w-[84%] shrink-0 snap-center md:w-auto">
              <article>
                <div className="relative aspect-video overflow-hidden bg-deck-2">
                  <div aria-hidden="true" className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgb(255_255_255/0.035)_0_1px,transparent_1px_4px)]" />
                  <span aria-hidden="true" className="slug absolute top-3 left-3 text-white/60">Kamera {n.kode}</span>
                  <span aria-hidden="true" className="absolute top-1/2 right-6 -translate-y-1/2 font-[family-name:var(--font-sora)] text-6xl font-extrabold text-white/10">
                    {n.kode}
                  </span>
                  {/* Lower-third */}
                  <div className="absolute bottom-4 left-4 max-w-[85%]">
                    <h3 className="bg-white px-3 py-1.5 text-sm leading-snug font-semibold text-ink">{n.nama}</h3>
                    <p className="slug bg-live px-3 py-1.5 text-white">{n.peran}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/85">{n.ringkas}</p>
                <p className="slug mt-4 text-live-bright">Tampil di</p>
                <ul className="mt-2 space-y-1 text-sm text-white/85">
                  {n.segmen.map((s) => (
                    <li key={s}>— {s}</li>
                  ))}
                </ul>
                <a href="#rundown" className="slug mt-4 inline-block border-b border-white/30 pb-1 text-white hover:border-white">
                  Lihat jamnya di rundown
                </a>
              </article>
            </li>
          ))}
        </ul>
        <p className="slug mt-4 text-white/70 md:hidden" aria-hidden="true">Geser untuk narasumber lain →</p>
      </div>
    </section>
  );
}
