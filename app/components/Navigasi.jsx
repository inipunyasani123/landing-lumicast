'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV = [
  ['/#rundown', 'Rundown'],
  ['/#narasumber', 'Narasumber'],
  ['/jadwal-siaran', 'Jadwal siaran'],
  ['/cek-perangkat', 'Cek perangkat'],
];

/* Navigasi utama + menu ponsel. Di ponsel panelnya berupa potongan lembar rundown: kolom jam di kiri (urutan baca), nama halaman di kanan.
   Menu tertutup sendiri saat pindah halaman, menekan Escape (fokus kembali ke
   tombol), atau mengetuk di luar panel. */
export default function Navigasi({ children }) {
  const path = usePathname();
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const panel = useRef(null);

  useEffect(() => setBuka(false), [path]);

  useEffect(() => {
    if (!buka) return undefined;
    const tutup = (e) => {
      if (e.type === 'keydown' && e.key !== 'Escape') return;
      if (e.type === 'pointerdown' && (panel.current?.contains(e.target) || tombol.current?.contains(e.target))) return;
      setBuka(false);
      if (e.type === 'keydown') tombol.current?.focus();
    };
    document.addEventListener('keydown', tutup);
    document.addEventListener('pointerdown', tutup);
    return () => {
      document.removeEventListener('keydown', tutup);
      document.removeEventListener('pointerdown', tutup);
    };
  }, [buka]);

  const aktif = (href) => (!href.includes('#') && href !== '/' && path.startsWith(href) ? 'page' : undefined);

  return (
    <>
      <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href} aria-current={aktif(href)} className="slug text-white/80 transition-colors hover:text-white aria-[current=page]:text-live-bright">
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        {children}
        <button
          ref={tombol}
          type="button"
          aria-expanded={buka}
          aria-controls="menu-ponsel"
          onClick={() => setBuka((b) => !b)}
          className="slug inline-flex h-10 min-w-[4.75rem] items-center justify-center border border-white/30 px-3 text-white md:hidden"
        >
          {buka ? 'Tutup' : 'Menu'}
        </button>
      </div>
      <nav id="menu-ponsel" ref={panel} aria-label="Navigasi ponsel" hidden={!buka} className="absolute inset-x-0 top-full border-b-2 border-ink bg-sheet shadow-[0_18px_30px_-20px_rgb(14_26_43/0.6)] md:hidden">
        <ol className="mx-auto max-w-6xl px-6 py-2">
          {NAV.map(([href, label], i) => (
            <li key={href} className="border-b border-rule last:border-b-0">
              <Link href={href} onClick={() => setBuka(false)} aria-current={aktif(href)} className="grid grid-cols-[3.75rem_minmax(0,1fr)] items-baseline gap-4 py-3.5 text-ink">
                <span className="slug tnum text-live">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-semibold decoration-live decoration-2 underline-offset-4 [[aria-current=page]_&]:underline">{label}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
