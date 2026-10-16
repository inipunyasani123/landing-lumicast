import { SIARAN, SITE, tanggalSiaran } from '@/lib/siaran';
import DaftarCek from '../components/DaftarCek';

export const metadata = {
  title: 'Cek Perangkat',
  description: `Daftar periksa sebelum siaran Lumicast #${SIARAN.nomor}: tautan, materi, mikrofon, dan cara bertanya saat siaran berjalan.`,
  alternates: { canonical: `${SITE}/cek-perangkat` },
};

export default function CekPerangkat() {
  const t = tanggalSiaran(SIARAN.nomor);
  return (
    <main className="pt-16">
      <section className="bg-deck px-6 pt-16 pb-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="slug tanda flex items-center text-white">Sebelum menit ke-nol</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold text-white md:text-5xl">
            Delapan langkah supaya Anda tidak menghabiskan segmen pertama mencari tombol mikrofon
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-white/80">
            Untuk siaran #{SIARAN.nomor} · {t.hari} · {SIARAN.jam}. Tautan dibuka 15 menit lebih awal khusus untuk uji suara.
          </p>
        </div>
      </section>
      <section className="bg-sheet px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <DaftarCek />
        </div>
      </section>
    </main>
  );
}
