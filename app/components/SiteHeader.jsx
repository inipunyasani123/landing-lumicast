import Link from 'next/link';
import Navigasi from './Navigasi';

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-deck/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="slug tanda flex items-center text-white">
          Lumicast
        </Link>
        <Navigasi>
          <Link href="/#daftar" className="inline-flex h-10 items-center bg-live px-4 text-xs font-semibold text-white hover:opacity-90">
            Daftar siaran
          </Link>
        </Navigasi>
      </div>
    </header>
  );
}
