'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CEK } from '@/lib/siaran';

export default function DaftarCek() {
  const semua = CEK.flatMap((g) => g.item.map(([t]) => t));
  const [centang, setCentang] = useState(() => new Set());
  const siap = centang.size === semua.length;

  const ubah = (t) =>
    setCentang((s) => {
      const n = new Set(s);
      n.has(t) ? n.delete(t) : n.add(t);
      return n;
    });

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)]">
      <div className="space-y-10">
        {CEK.map((g) => (
          <fieldset key={g.kel}>
            <legend className="slug mb-4 text-live">{g.kel}</legend>
            <ul className="border-t-2 border-ink">
              {g.item.map(([t, d]) => (
                <li key={t} className="border-b border-rule">
                  <label className="flex cursor-pointer gap-4 py-4">
                    <input
                      type="checkbox"
                      checked={centang.has(t)}
                      onChange={() => ubah(t)}
                      className="mt-0.5 h-6 w-6 shrink-0 accent-[#0a6845]"
                    />
                    <span>
                      <span className={`block font-medium ${centang.has(t) ? 'text-ink-soft line-through' : 'text-ink'}`}>{t}</span>
                      <span className="mt-1 block text-sm leading-relaxed">{d}</span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        ))}
      </div>

      <aside className="h-fit lg:sticky lg:top-24">
        <div className={`p-6 ${siap ? 'bg-live text-white' : 'bg-deck text-white'}`}>
          <p className={`slug flex items-center ${siap ? 'tanda' : ''}`} aria-live="polite">
            {siap ? 'Siap siar' : 'Belum siap'}
          </p>
          <p className="mt-4 text-4xl font-semibold tnum">
            {centang.size}/{semua.length}
          </p>
          <div aria-hidden="true" className="mt-4 h-1.5 bg-white/20">
            <div className="h-full bg-white transition-[width]" style={{ width: `${(centang.size / semua.length) * 100}%` }} />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            {siap
              ? 'Semua beres. Ruang tunggu siaran dibuka 08.15 — sampai jumpa di menit ke-nol.'
              : 'Centang tiap langkah yang sudah Anda lakukan. Tidak ada yang disimpan; halaman ini hanya untuk Anda.'}
          </p>
        </div>
        <Link href="/#rundown" className="slug mt-4 block border border-ink px-4 py-3 text-center text-ink hover:bg-ink hover:text-white">
          Kembali ke rundown
        </Link>
      </aside>
    </div>
  );
}
