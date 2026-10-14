/* ==========================================================================
   Satu sumber isi siaran Lumicast. Beranda, rundown, panduan acara, dan
   halaman cek perangkat membaca dari sini supaya jam dan durasi selalu cocok.
   Semua nama, jadwal, dan harga adalah contoh untuk purwarupa desain.
   ========================================================================== */

export const SITE = 'https://landing-lumicast.pintuweb.id';

export const SIARAN = {
  nomor: '14',
  judul: 'Membaca Laporan Keuangan untuk Pengurus Organisasi',
  pendek: 'Laporan Keuangan untuk Pengurus',
  hari: 'Rabu, 16 Desember 2026',
  iso: '2026-12-16',
  jam: '08.30–16.00 WIB',
  format: 'In-house training, daring',
  peserta: 'Pengurus non-keuangan',
};

export const BERKAS = [
  ['Penyelenggara', 'Lumicast'],
  ['Format', SIARAN.format],
  ['Durasi', '450 menit · 6 segmen'],
  ['Peserta', 'Ketua, sekretaris, bendahara, pengawas'],
];

export const NARASUMBER = [
  {
    kode: 'N1',
    nama: 'Hendra Kusuma, S.E., Ak.',
    peran: 'Pemateri I · Akuntan publik',
    ringkas: 'Lima belas tahun mengaudit laporan yayasan, koperasi, dan perkumpulan. Hafal kesalahan yang paling sering membuat laporan ditolak rapat anggota.',
    segmen: ['Membaca neraca & laporan arus kas', 'Diskusi panel'],
  },
  {
    kode: 'N2',
    nama: 'Ratih Wulandari',
    peran: 'Pemateri II · Pelatih tata kelola organisasi',
    ringkas: 'Pernah menjadi bendahara tiga organisasi relawan sebelum melatih pengurus. Membawa berkas latihan dari kasus yang pernah ia tangani sendiri.',
    segmen: ['Praktik: anggaran vs realisasi', 'Diskusi panel'],
  },
  {
    kode: 'MC',
    nama: 'Yoga Pratama',
    peran: 'Pemandu siaran · Lumicast',
    ringkas: 'Menjaga jam: memberi aba-aba lima menit sebelum segmen berakhir dan memastikan pertanyaan dari kolom obrolan tidak tertinggal.',
    segmen: ['Pembukaan', 'Penutup'],
  },
];

export const SEGMEN = [
  { mulai: '08.30', durasi: 30, judul: 'Registrasi & uji perangkat', jenis: 'Persiapan', pj: 'Pemandu siaran', catatan: 'Tautan dibuka 15 menit lebih awal. Ikuti daftar cek perangkat sebelum masuk.' },
  { mulai: '09.00', durasi: 120, judul: 'Membaca neraca & laporan arus kas', jenis: 'Materi', pj: 'Pemateri I', catatan: 'Dari mana uang datang, ke mana perginya, dan apa yang tersisa. Termasuk 20 menit tanya jawab.' },
  { mulai: '11.00', durasi: 90, judul: 'Praktik: anggaran vs realisasi', jenis: 'Praktik', pj: 'Pemateri II', catatan: 'Peserta mengisi berkas latihan organisasi fiktif bersama-sama.' },
  { mulai: '12.30', durasi: 60, judul: 'Rehat', jenis: 'Jeda', pj: '—', catatan: 'Ruang tetap terbuka bagi yang ingin bertanya di luar siaran.' },
  { mulai: '13.30', durasi: 120, judul: 'Tanda bahaya & diskusi panel', jenis: 'Panel', pj: 'Pemateri I & II', catatan: 'Tujuh tanda laporan perlu dipertanyakan, lalu pertanyaan peserta yang dikumpulkan sejak pagi.' },
  { mulai: '15.30', durasi: 30, judul: 'Penutup & sertifikat', jenis: 'Penutup', pj: 'Pemandu siaran', catatan: 'Sertifikat dikirim ke surel pada hari yang sama.' },
];

export const TOTAL_MENIT = SEGMEN.reduce((n, s) => n + s.durasi, 0);

export const DIBAHAS = [
  'Membaca neraca tanpa latar akuntansi',
  'Laporan arus kas: kenapa kas bisa menipis saat "untung"',
  'Anggaran vs realisasi — dan cara menjelaskan selisihnya',
  'Tujuh tanda laporan perlu dipertanyakan sebelum ditandatangani',
  'Menyiapkan laporan untuk rapat anggota',
];

export const UNTUK = [
  { judul: 'Ketua & sekretaris', isi: 'Yang ikut menandatangani laporan, tapi selama ini hanya membaca halaman terakhir.', posisi: ['Ketua umum', 'Sekretaris', 'Wakil ketua'] },
  { judul: 'Bendahara baru', isi: 'Baru menerima buku kas dari pengurus lama dan ingin tahu apa yang harus diperiksa lebih dulu.', posisi: ['Bendahara', 'Staf keuangan relawan'] },
  { judul: 'Pengawas', isi: 'Dewan pengawas atau pembina yang harus memberi pendapat atas laporan tahunan.', posisi: ['Dewan pengawas', 'Pembina'] },
  { judul: 'Calon pengurus', isi: 'Anggota yang akan dicalonkan di periode berikutnya dan ingin siap sejak awal.', posisi: ['Kepala divisi', 'Anggota aktif'] },
];

export const PAKET = [
  { nama: 'Umum', harga: 'Gratis', satuan: '', dapat: ['Siaran langsung', 'Materi presentasi (PDF)', 'Sertifikat elektronik'], tombol: 'Daftar gratis' },
  { nama: 'Plus', harga: 'Rp 150.000', satuan: '/ peserta', unggulan: true, dapat: ['Semua isi paket Umum', 'Tayang ulang selama 1 tahun', 'Berkas latihan (lembar kerja)', 'Konsultasi kelompok 30 menit'], tombol: 'Pilih Plus' },
  { nama: 'Organisasi', harga: 'Rp 2.500.000', satuan: '/ hingga 10 orang', dapat: ['Semua isi paket Plus', 'Siaran khusus untuk organisasi Anda', 'Laporan organisasi Anda dibedah (dengan izin)'], tombol: 'Pilih Organisasi' },
];

export const FAQ = [
  { t: 'Saya tidak punya latar akuntansi. Apakah akan tertinggal?', j: 'Siaran ini justru dirancang untuk Anda. Istilah teknis selalu dijelaskan dengan contoh organisasi fiktif, bukan rumus.' },
  { t: 'Apa yang perlu disiapkan?', j: 'Laptop, koneksi stabil, dan — bila ada — satu laporan keuangan organisasi Anda untuk dibaca sendiri selama segmen praktik. Kalkulator di ponsel cukup.' },
  { t: 'Kalau saya tidak bisa ikut sampai selesai?', j: 'Rundown sengaja dicetak lengkap supaya Anda bisa memilih segmen. Peserta paket Plus bisa menonton ulang segmen yang terlewat.' },
  { t: 'Apakah laporan organisasi saya akan dilihat orang lain?', j: 'Tidak, kecuali Anda memilih paket Organisasi dan memberi izin tertulis. Itu pun hanya dibedah di siaran khusus untuk organisasi Anda.' },
  { t: 'Bagaimana sertifikatnya?', j: 'Sertifikat elektronik dikirim ke surel pada hari yang sama untuk peserta yang hadir di minimal empat dari enam segmen.' },
];

export const JADWAL = [
  { nomor: '14', tanggal: '16 Des 2026', hari: 'Rabu', jam: '08.30–16.00', judul: SIARAN.judul, durasi: 450, status: 'Pendaftaran dibuka', tautan: '/#daftar' },
  { nomor: '15', tanggal: '20 Jan 2027', hari: 'Rabu', jam: '09.00–12.00', judul: 'Menyusun anggaran tahunan organisasi', durasi: 180, status: 'Segera', ringkas: 'Dari daftar kegiatan menjadi angka yang bisa disetujui rapat.' },
  { nomor: '16', tanggal: '17 Feb 2027', hari: 'Rabu', jam: '09.00–11.30', judul: 'Notulen yang bisa dipertanggungjawabkan', durasi: 150, status: 'Segera', ringkas: 'Mencatat keputusan, bukan percakapan — dan cara membagikannya.' },
  { nomor: '17', tanggal: '17 Mar 2027', hari: 'Rabu', jam: '08.30–15.30', judul: 'Rapat anggota tahunan tanpa drama', durasi: 420, status: 'Segera', ringkas: 'Menyusun acara, menyiapkan laporan, dan memimpin sesi tanya jawab.' },
  { nomor: '18', tanggal: '21 Apr 2027', hari: 'Rabu', jam: '09.00–12.00', judul: 'Serah terima pengurus yang rapi', durasi: 180, status: 'Rencana', ringkas: 'Daftar berkas, rekening, dan akses yang wajib berpindah tangan.' },
];

export const CEK = [
  { kel: 'Satu hari sebelum', item: [
    ['Buka tautan siaran di peramban yang akan dipakai', 'Tautan dikirim H-1 pukul 16.00. Pastikan peramban tidak memblokir mikrofon.'],
    ['Unduh materi dan berkas latihan', 'Supaya tidak bergantung pada koneksi saat segmen praktik.'],
    ['Siapkan satu laporan keuangan organisasi Anda', 'Opsional — dibaca sendiri, tidak dibagikan.'],
  ] },
  { kel: 'Lima belas menit sebelum', item: [
    ['Tutup aplikasi yang memakai kamera atau mikrofon', 'Aplikasi rapat lain sering "mengunci" perangkat.'],
    ['Uji suara lewat ruang tunggu siaran', 'Ucapkan satu kalimat; indikator hijau berarti suara masuk.'],
    ['Pakai headset bila ada', 'Mencegah gema saat Anda dipanggil bertanya.'],
  ] },
  { kel: 'Saat siaran', item: [
    ['Matikan mikrofon kecuali sedang bertanya', 'Pemandu siaran akan membuka giliran bicara.'],
    ['Tulis pertanyaan di kolom obrolan dengan awalan "T:"', 'Pertanyaan berawalan T: dikumpulkan untuk diskusi panel.'],
  ] },
];

export const menitKeJam = (m) => `${Math.floor(m / 60)} jam${m % 60 ? ` ${m % 60} menit` : ''}`;
