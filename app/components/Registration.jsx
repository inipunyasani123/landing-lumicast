'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PAKET, SIARAN } from '@/lib/siaran';

const POSISI = ['Ketua / wakil ketua', 'Sekretaris', 'Bendahara', 'Pengawas / pembina', 'Anggota / calon pengurus'];

export default function Registration({ hari }) {
  const [paket, setPaket] = useState('Umum');
  const [selesai, setSelesai] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('paket');
    if (p && PAKET.some((x) => x.nama === p)) setPaket(p);
  }, []);

  const kirim = (e) => {
    e.preventDefault();
    // Purwarupa desain: tidak ada data yang dikirim ke mana pun.
    setSelesai(true);
  };

  const input = 'w-full border border-rule bg-sheet px-4 py-3 text-ink focus:border-live focus:outline-none';

  return (
    <section id="daftar" className="scroll-mt-16 bg-sheet py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <p className="slug mb-5 text-live">Daftar</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold md:text-[2.6rem]">Satu formulir, tautan dikirim H-1</h2>
          <p className="mt-5 leading-relaxed">
            Tautan siaran dan berkas latihan dikirim ke surel Anda sehari sebelum siaran, pukul 16.00. Sebelum masuk, ikuti{' '}
            <Link href="/cek-perangkat" className="font-medium text-live underline underline-offset-4">daftar cek perangkat</Link>.
          </p>
          <dl className="mt-8 border-t-2 border-ink text-sm">
            {[['Siaran', `#${SIARAN.nomor} · ${SIARAN.pendek}`], ['Tanggal', hari], ['Jam', SIARAN.jam]].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-rule py-3">
                <dt className="slug text-ink-soft">{k}</dt>
                <dd className="text-right text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border border-rule bg-sheet-2 p-6 sm:p-8">
          {selesai ? (
            <div role="status" className="py-8">
              <p className="slug tanda flex items-center text-live">Tercatat · paket {paket}</p>
              <p className="mt-4 text-2xl font-semibold text-ink">Terima kasih, sampai jumpa di menit ke-nol.</p>
              <p className="mt-3 leading-relaxed">Ini purwarupa desain, jadi tidak ada data yang dikirim dan tidak ada surel yang akan datang.</p>
              <button type="button" onClick={() => setSelesai(false)} className="slug mt-6 border border-ink px-4 py-3 text-ink hover:bg-ink hover:text-white">
                Isi ulang
              </button>
            </div>
          ) : (
            <form onSubmit={kirim} className="space-y-5">
              <fieldset>
                <legend className="slug mb-3 text-ink">Paket</legend>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {PAKET.map((p) => (
                    <label key={p.nama} className={`cursor-pointer border p-2.5 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-live sm:p-3.5 ${paket === p.nama ? 'border-live bg-live/8' : 'border-rule bg-sheet hover:border-ink-soft'}`}>
                      <input type="radio" name="paket" value={p.nama} checked={paket === p.nama} onChange={() => setPaket(p.nama)} className="sr-only" />
                      <span className="slug block text-ink">{p.nama}</span>
                      <span className="mt-1.5 block text-xs whitespace-nowrap text-ink sm:text-sm">{p.harga}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="slug mb-2 block text-ink">Nama lengkap</label>
                  <input id="nama" name="nama" required autoComplete="name" className={input} />
                </div>
                <div>
                  <label htmlFor="surel" className="slug mb-2 block text-ink">Surel</label>
                  <input id="surel" name="surel" type="email" required autoComplete="email" className={input} />
                </div>
                <div>
                  <label htmlFor="organisasi" className="slug mb-2 block text-ink">Nama organisasi</label>
                  <input id="organisasi" name="organisasi" required autoComplete="organization" className={input} />
                </div>
                <div>
                  <label htmlFor="posisi" className="slug mb-2 block text-ink">Posisi</label>
                  <select id="posisi" name="posisi" required defaultValue="" className={input}>
                    <option value="" disabled>Pilih posisi</option>
                    {POSISI.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="harapan" className="slug mb-2 block text-ink">Satu hal yang ingin Anda pahami (boleh kosong)</label>
                <textarea id="harapan" name="harapan" rows={3} className={`${input} resize-y`} />
              </div>
              <button type="submit" className="w-full bg-live py-4 text-sm font-semibold text-white hover:opacity-90">
                Daftar siaran #{SIARAN.nomor} · paket {paket}
              </button>
              <p className="text-xs leading-relaxed">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
