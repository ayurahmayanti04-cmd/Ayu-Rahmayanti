/**
 * Ilustrasi SVG Presisi untuk Soal Matematika Kelas 5
 * Dihasilkan sebagai Data URI SVG yang tajam dan bebas distorsi angka/label.
 */

function encodeSvg(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
}

/**
 * Soal 2: Kartu Nilai Tempat Bilangan 739.426 (angka 3 disorot)
 */
export const IMG_NILAI_TEMPAT = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="210" viewBox="0 0 640 210">
  <rect width="640" height="210" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="320" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">
    KARTU NILAI TEMPAT BILANGAN CACAH
  </text>

  <!-- 6 Kotak Nilai Tempat -->
  <!-- Box 1: 7 -->
  <rect x="25" y="48" width="92" height="110" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="25" y="48" width="92" height="32" rx="10" fill="#1e3a8a"/>
  <rect x="25" y="68" width="92" height="12" fill="#1e3a8a"/>
  <text x="71" y="69" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Ratus Ribuan</text>
  <text x="71" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="bold" fill="#1e293b">7</text>

  <!-- Box 2: 3 (Disorot Amber) -->
  <rect x="125" y="48" width="92" height="110" rx="10" fill="#fffbeb" stroke="#d97706" stroke-width="3"/>
  <rect x="125" y="48" width="92" height="32" rx="10" fill="#d97706"/>
  <rect x="125" y="68" width="92" height="12" fill="#d97706"/>
  <text x="171" y="69" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Puluh Ribuan</text>
  <text x="171" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="#b45309">3</text>

  <!-- Box 3: 9 -->
  <rect x="225" y="48" width="92" height="110" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="225" y="48" width="92" height="32" rx="10" fill="#1e3a8a"/>
  <rect x="225" y="68" width="92" height="12" fill="#1e3a8a"/>
  <text x="271" y="69" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Ribuan</text>
  <text x="271" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="bold" fill="#1e293b">9</text>

  <!-- Titik pemisah ribuan -->
  <circle cx="326" cy="144" r="4" fill="#0f172a"/>

  <!-- Box 4: 4 -->
  <rect x="335" y="48" width="92" height="110" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="335" y="48" width="92" height="32" rx="10" fill="#1e3a8a"/>
  <rect x="335" y="68" width="92" height="12" fill="#1e3a8a"/>
  <text x="381" y="69" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Ratusan</text>
  <text x="381" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="bold" fill="#1e293b">4</text>

  <!-- Box 5: 2 -->
  <rect x="435" y="48" width="92" height="110" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="435" y="48" width="92" height="32" rx="10" fill="#1e3a8a"/>
  <rect x="435" y="68" width="92" height="12" fill="#1e3a8a"/>
  <text x="481" y="69" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Puluhan</text>
  <text x="481" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="bold" fill="#1e293b">2</text>

  <!-- Box 6: 6 -->
  <rect x="535" y="48" width="82" height="110" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="535" y="48" width="82" height="32" rx="10" fill="#1e3a8a"/>
  <rect x="535" y="68" width="82" height="12" fill="#1e3a8a"/>
  <text x="576" y="69" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Satuan</text>
  <text x="576" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="bold" fill="#1e293b">6</text>

  <!-- Footer Bilangan -->
  <rect x="195" y="170" width="250" height="28" rx="8" fill="#e2e8f0"/>
  <text x="320" y="189" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
    Bilangan: 739.426
  </text>
</svg>
`);

/**
 * Soal 4: Grafik Batang Data Pengunjung Perpustakaan
 */
export const IMG_GRAFIK_PENGUNJUNG = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="270" viewBox="0 0 600 270">
  <rect width="600" height="270" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  <text x="300" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
    GRAFIK PENGUNJUNG PERPUSTAKAAN DAERAH
  </text>

  <!-- Gridlines -->
  <line x1="80" y1="60" x2="560" y2="60" stroke="#e2e8f0" stroke-dasharray="4"/>
  <line x1="80" y1="100" x2="560" y2="100" stroke="#e2e8f0" stroke-dasharray="4"/>
  <line x1="80" y1="140" x2="560" y2="140" stroke="#e2e8f0" stroke-dasharray="4"/>
  <line x1="80" y1="180" x2="560" y2="180" stroke="#e2e8f0" stroke-dasharray="4"/>
  <line x1="80" y1="220" x2="560" y2="220" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="50" x2="80" y2="220" stroke="#64748b" stroke-width="2"/>

  <!-- Y Axis Labels -->
  <text x="72" y="64" text-anchor="end" font-family="Arial, sans-serif" font-size="10" fill="#475569">160.000</text>
  <text x="72" y="104" text-anchor="end" font-family="Arial, sans-serif" font-size="10" fill="#475569">150.000</text>
  <text x="72" y="144" text-anchor="end" font-family="Arial, sans-serif" font-size="10" fill="#475569">140.000</text>
  <text x="72" y="184" text-anchor="end" font-family="Arial, sans-serif" font-size="10" fill="#475569">130.000</text>
  <text x="72" y="224" text-anchor="end" font-family="Arial, sans-serif" font-size="10" fill="#475569">120.000</text>

  <!-- Bar 1: Januari = 145.600 -> y = 220 - ((145600-120000)/40000)*160 = 220 - 102.4 = 117.6 -->
  <rect x="115" y="118" width="75" height="102" rx="6" fill="#2563eb"/>
  <text x="152.5" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">145.600</text>
  <text x="152.5" y="242" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Januari</text>

  <!-- Bar 2: Februari = 152.400 -> y = 220 - ((152400-120000)/40000)*160 = 220 - 129.6 = 90.4 -->
  <rect x="230" y="90" width="75" height="130" rx="6" fill="#059669"/>
  <text x="267.5" y="82" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#065f46">152.400</text>
  <text x="267.5" y="242" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Februari</text>

  <!-- Bar 3: Maret = 138.900 -> y = 220 - ((138900-120000)/40000)*160 = 220 - 75.6 = 144.4 -->
  <rect x="345" y="144" width="75" height="76" rx="6" fill="#d97706"/>
  <text x="382.5" y="136" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#92400e">138.900</text>
  <text x="382.5" y="242" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Maret</text>

  <!-- Bar 4: April = 152.150 -> y = 220 - ((152150-120000)/40000)*160 = 220 - 128.6 = 91.4 -->
  <rect x="460" y="91" width="75" height="129" rx="6" fill="#7c3aed"/>
  <text x="497.5" y="83" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#5b21b6">152.150</text>
  <text x="497.5" y="242" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">April</text>
</svg>
`);

/**
 * Soal 7: Pecahan Uang Rupiah (4x100rb + 3x50rb + 2x20rb + 5x5rb + 3x2rb = 621.000)
 */
export const IMG_UANG_RUPIAH = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="620" height="250" viewBox="0 0 620 250">
  <rect width="620" height="250" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="310" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
    KOLEKSI PECAHAN UANG IBU SINTA
  </text>

  <!-- Row 1: 4 lembar Rp100.000 & 3 lembar Rp50.000 -->
  <g transform="translate(26,48)">
    <rect width="175" height="72" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
    <rect x="10" y="10" width="155" height="52" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-dasharray="3"/>
    <text x="87" y="34" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#991b1b">Rp100.000</text>
    <text x="87" y="53" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">× 4 Lembar</text>
  </g>

  <g transform="translate(222,48)">
    <rect width="175" height="72" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <rect x="10" y="10" width="155" height="52" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-dasharray="3"/>
    <text x="87" y="34" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#1e40af">Rp50.000</text>
    <text x="87" y="53" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">× 3 Lembar</text>
  </g>

  <g transform="translate(418,48)">
    <rect width="175" height="72" rx="10" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
    <rect x="10" y="10" width="155" height="52" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-dasharray="3"/>
    <text x="87" y="34" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#065f46">Rp20.000</text>
    <text x="87" y="53" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#047857">× 2 Lembar</text>
  </g>

  <!-- Row 2: 5 lembar Rp5.000 & 3 lembar Rp2.000 -->
  <g transform="translate(115,142)">
    <rect width="180" height="72" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <rect x="10" y="10" width="160" height="52" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-dasharray="3"/>
    <text x="90" y="34" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#92400e">Rp5.000</text>
    <text x="90" y="53" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#b45309">× 5 Lembar</text>
  </g>

  <g transform="translate(325,142)">
    <rect width="180" height="72" rx="10" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
    <rect x="10" y="10" width="160" height="52" rx="6" fill="#ffffff" stroke="#64748b" stroke-dasharray="3"/>
    <text x="90" y="34" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Rp2.000</text>
    <text x="90" y="53" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#334155">× 3 Lembar</text>
  </g>
</svg>
`);

/**
 * Soal 10: Katalog Harga Toko Perlengkapan Sekolah
 */
export const IMG_KATALOG_BELANJA = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="620" height="225" viewBox="0 0 620 225">
  <rect width="620" height="225" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  <rect width="620" height="42" rx="14" fill="#1e3a8a"/>
  <rect y="24" width="620" height="18" fill="#1e3a8a"/>
  <text x="310" y="27" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">
    DAFTAR HARGA TOKO PERLENGKAPAN SEKOLAH "CERDAS"
  </text>

  <!-- Card 1: Tas Sekolah -->
  <rect x="20" y="60" width="135" height="142" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Ikon Tas sederhana -->
  <rect x="65" y="78" width="44" height="46" rx="8" fill="#2563eb"/>
  <path d="M77 78 C77 68, 97 68, 97 78" fill="none" stroke="#1e40af" stroke-width="4"/>
  <rect x="74" y="96" width="26" height="16" rx="3" fill="#93c5fd"/>
  <text x="87" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Tas Sekolah</text>
  <rect x="32" y="160" width="110" height="26" rx="6" fill="#dbeafe"/>
  <text x="87" y="178" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">Rp185.000</text>

  <!-- Card 2: Sepatu Sekolah -->
  <rect x="168" y="60" width="135" height="142" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Ikon Sepatu sederhana -->
  <path d="M206 116 L206 94 L226 94 L238 106 L262 108 L262 118 L206 118 Z" fill="#0f172a"/>
  <rect x="206" y="117" width="56" height="6" rx="2" fill="#94a3b8"/>
  <text x="235" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Sepatu Sekolah</text>
  <rect x="180" y="160" width="110" height="26" rx="6" fill="#dbeafe"/>
  <text x="235" y="178" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">Rp240.000</text>

  <!-- Card 3: Kotak Pensil -->
  <rect x="316" y="60" width="135" height="142" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Ikon Kotak Pensil -->
  <rect x="352" y="88" width="64" height="30" rx="6" fill="#d97706"/>
  <line x1="358" y1="98" x2="410" y2="98" stroke="#fef3c7" stroke-width="2"/>
  <text x="383" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Kotak Pensil</text>
  <rect x="328" y="160" width="110" height="26" rx="6" fill="#dbeafe"/>
  <text x="383" y="178" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">Rp35.000</text>

  <!-- Card 4: Buku Tulis (1 Pak) -->
  <rect x="464" y="60" width="135" height="142" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Ikon Buku -->
  <rect x="507" y="78" width="48" height="44" rx="4" fill="#059669"/>
  <rect x="515" y="86" width="32" height="10" rx="2" fill="#ecfdf5"/>
  <text x="531" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Buku (1 Pak)</text>
  <rect x="476" y="160" width="110" height="26" rx="6" fill="#dbeafe"/>
  <text x="531" y="178" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">Rp45.000</text>
</svg>
`);

/**
 * Soal 13: Pohon Faktor Bilangan 72
 */
export const IMG_POHON_FAKTOR = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="305" viewBox="0 0 480 305">
  <rect width="480" height="305" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="240" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">
    POHON FAKTOR BILANGAN 72
  </text>

  <!-- Branches -->
  <!-- Level 1: 72 -> 2 & 36 -->
  <line x1="180" y1="62" x2="115" y2="108" stroke="#64748b" stroke-width="2.5"/>
  <line x1="180" y1="62" x2="245" y2="108" stroke="#64748b" stroke-width="2.5"/>
  <!-- Level 2: 36 -> 2 & 18 -->
  <line x1="245" y1="118" x2="180" y2="164" stroke="#64748b" stroke-width="2.5"/>
  <line x1="245" y1="118" x2="310" y2="164" stroke="#64748b" stroke-width="2.5"/>
  <!-- Level 3: 18 -> 2 & 9 -->
  <line x1="310" y1="174" x2="245" y2="220" stroke="#64748b" stroke-width="2.5"/>
  <line x1="310" y1="174" x2="375" y2="220" stroke="#64748b" stroke-width="2.5"/>
  <!-- Level 4: 9 -> 3 & 3 -->
  <line x1="375" y1="230" x2="320" y2="274" stroke="#64748b" stroke-width="2.5"/>
  <line x1="375" y1="230" x2="430" y2="274" stroke="#64748b" stroke-width="2.5"/>

  <!-- Nodes -->
  <circle cx="180" cy="60" r="20" fill="#ffffff" stroke="#334155" stroke-width="2"/>
  <text x="180" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">72</text>

  <circle cx="115" cy="114" r="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="115" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#1e3a8a">2</text>

  <circle cx="245" cy="114" r="18" fill="#ffffff" stroke="#334155" stroke-width="2"/>
  <text x="245" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">36</text>

  <circle cx="180" cy="170" r="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="180" y="176" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#1e3a8a">2</text>

  <circle cx="310" cy="170" r="18" fill="#ffffff" stroke="#334155" stroke-width="2"/>
  <text x="310" y="176" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">18</text>

  <circle cx="245" cy="226" r="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="245" y="232" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#1e3a8a">2</text>

  <circle cx="375" cy="226" r="18" fill="#ffffff" stroke="#334155" stroke-width="2"/>
  <text x="375" y="232" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">9</text>

  <circle cx="320" cy="276" r="18" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
  <text x="320" y="282" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#065f46">3</text>

  <circle cx="430" cy="276" r="18" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
  <text x="430" y="282" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#065f46">3</text>
</svg>
`);

/**
 * Soal 16: Tiga Lampu Hias dengan Interval Menyala (8, 12, 16 detik)
 */
export const IMG_LAMPU_KPK = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="205" viewBox="0 0 560 205">
  <rect width="560" height="205" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <text x="280" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#f8fafc">
    POLA MENYALA LAMPU HIAS TAMAN
  </text>

  <!-- Lampu 1: Merah -->
  <g transform="translate(45,48)">
    <rect width="135" height="135" rx="12" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
    <circle cx="67.5" cy="48" r="24" fill="#ef4444" stroke="#fca5a5" stroke-width="3"/>
    <rect x="57" y="70" width="21" height="10" rx="2" fill="#94a3b8"/>
    <text x="67.5" y="102" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#fca5a5">Lampu Merah</text>
    <text x="67.5" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Setiap 8 detik</text>
  </g>

  <!-- Lampu 2: Kuning -->
  <g transform="translate(212,48)">
    <rect width="135" height="135" rx="12" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
    <circle cx="67.5" cy="48" r="24" fill="#f59e0b" stroke="#fde68a" stroke-width="3"/>
    <rect x="57" y="70" width="21" height="10" rx="2" fill="#94a3b8"/>
    <text x="67.5" y="102" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#fde68a">Lampu Kuning</text>
    <text x="67.5" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Setiap 12 detik</text>
  </g>

  <!-- Lampu 3: Hijau -->
  <g transform="translate(380,48)">
    <rect width="135" height="135" rx="12" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
    <circle cx="67.5" cy="48" r="24" fill="#10b981" stroke="#a7f3d0" stroke-width="3"/>
    <rect x="57" y="70" width="21" height="10" rx="2" fill="#94a3b8"/>
    <text x="67.5" y="102" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#a7f3d0">Lampu Hijau</text>
    <text x="67.5" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Setiap 16 detik</text>
  </g>
</svg>
`);

/**
 * Soal 18: 3 Keranjang Buah untuk Soal FPB (42 Jeruk, 56 Apel, 70 Mangga)
 */
export const IMG_KERANJANG_FPB = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="580" height="205" viewBox="0 0 580 205">
  <rect width="580" height="205" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="290" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
    PERSEDIAAN BUAH YANG AKAN DIKEMAS
  </text>

  <!-- Keranjang 1: Jeruk -->
  <g transform="translate(30,48)">
    <rect width="155" height="135" rx="12" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
    <circle cx="60" cy="44" r="14" fill="#f97316"/>
    <circle cx="95" cy="44" r="14" fill="#fb923c"/>
    <circle cx="77" cy="60" r="14" fill="#ea580c"/>
    <path d="M40 62 L115 62 L105 90 L50 90 Z" fill="#b45309"/>
    <text x="77.5" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#9a3412">Buah Jeruk</text>
    <text x="77.5" y="126" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">42 Buah</text>
  </g>

  <!-- Keranjang 2: Apel -->
  <g transform="translate(212,48)">
    <rect width="155" height="135" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
    <circle cx="60" cy="44" r="14" fill="#ef4444"/>
    <circle cx="95" cy="44" r="14" fill="#f87171"/>
    <circle cx="77" cy="60" r="14" fill="#dc2626"/>
    <path d="M40 62 L115 62 L105 90 L50 90 Z" fill="#b45309"/>
    <text x="77.5" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#991b1b">Buah Apel</text>
    <text x="77.5" y="126" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">56 Buah</text>
  </g>

  <!-- Keranjang 3: Mangga -->
  <g transform="translate(394,48)">
    <rect width="155" height="135" rx="12" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
    <ellipse cx="60" cy="44" rx="15" ry="12" fill="#10b981"/>
    <ellipse cx="95" cy="44" rx="15" ry="12" fill="#34d399"/>
    <ellipse cx="77" cy="60" rx="15" ry="12" fill="#059669"/>
    <path d="M40 62 L115 62 L105 90 L50 90 Z" fill="#b45309"/>
    <text x="77.5" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#065f46">Buah Mangga</text>
    <text x="77.5" y="126" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">70 Buah</text>
  </g>
</svg>
`);

/**
 * Soal 21: Lingkaran Pecahan 3/8 (8 juring sama besar, 3 diarsir)
 */
export const IMG_PECAHAN_LINGKARAN = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="380" height="230" viewBox="0 0 380 230">
  <rect width="380" height="230" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  <text x="190" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">
    MODEL PECAHAN LINGKARAN
  </text>

  <!-- Lingkaran pusat (190, 125), radius 80 -->
  <!-- 8 juring masing-masing 45 derajat. 3 juring diarsir: -90..-45, -45..0, 0..45 -->
  <!-- Sector 1 (-90 to -45): (190,125) -> (190,45) arc to (246.57,68.43) -->
  <path d="M190,125 L190,45 A80,80 0 0,1 246.57,68.43 Z" fill="#2563eb" stroke="#1e293b" stroke-width="2"/>
  <!-- Sector 2 (-45 to 0): (190,125) -> (246.57,68.43) arc to (270,125) -->
  <path d="M190,125 L246.57,68.43 A80,80 0 0,1 270,125 Z" fill="#2563eb" stroke="#1e293b" stroke-width="2"/>
  <!-- Sector 3 (0 to 45): (190,125) -> (270,125) arc to (246.57,181.57) -->
  <path d="M190,125 L270,125 A80,80 0 0,1 246.57,181.57 Z" fill="#2563eb" stroke="#1e293b" stroke-width="2"/>

  <!-- Unshaded 5 sectors -->
  <path d="M190,125 L246.57,181.57 A80,80 0 0,1 190,205 Z" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
  <path d="M190,125 L190,205 A80,80 0 0,1 133.43,181.57 Z" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
  <path d="M190,125 L133.43,181.57 A80,80 0 0,1 110,125 Z" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
  <path d="M190,125 L110,125 A80,80 0 0,1 133.43,68.43 Z" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
  <path d="M190,125 L133.43,68.43 A80,80 0 0,1 190,45 Z" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
</svg>
`);

/**
 * Soal 23: Model Pita Pecahan Senilai (3/4 = 9/12)
 */
export const IMG_PECAHAN_SENILAI = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="200" viewBox="0 0 560 200">
  <rect width="560" height="200" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">
    MODEL PITA PECAHAN SENILAI
  </text>

  <!-- Pita A: 4 bagian sama besar (lebar total 420 -> tiap bagian 105), 3 diarsir -->
  <text x="25" y="76" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a">Pita A (3/4)</text>
  <g transform="translate(115,50)">
    <rect x="0" y="0" width="105" height="44" fill="#3b82f6" stroke="#1e293b" stroke-width="2"/>
    <rect x="105" y="0" width="105" height="44" fill="#3b82f6" stroke="#1e293b" stroke-width="2"/>
    <rect x="210" y="0" width="105" height="44" fill="#3b82f6" stroke="#1e293b" stroke-width="2"/>
    <rect x="315" y="0" width="105" height="44" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  </g>

  <!-- Pita B: 12 bagian sama besar (lebar total 420 -> tiap bagian 35), 9 diarsir -->
  <text x="25" y="148" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#065f46">Pita B (?)</text>
  <g transform="translate(115,122)">
    <rect x="0" y="0" width="35" height="44" fill="#10b981" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="35" y="0" width="35" height="44" fill="#10b981" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="70" y="0" width="35" height="44" fill="#10b981" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="105" y="0" width="35" height="44" fill="#10b981" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="140" y="0" width="35" height="44" fill="#10b981" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="175" y="0" width="35" height="44" fill="#10b981" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="210" y="0" width="35" height="44" fill="#10b981" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="245" y="0" width="35" height="44" fill="#10b981" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="280" y="0" width="35" height="44" fill="#10b981" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="315" y="0" width="35" height="44" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="350" y="0" width="35" height="44" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="385" y="0" width="35" height="44" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
  </g>

  <!-- Garis bantu keselarasan -->
  <line x1="430" y1="44" x2="430" y2="174" stroke="#dc2626" stroke-width="2" stroke-dasharray="4"/>
</svg>
`);

/**
 * Soal 25: Penjumlahan Pecahan pada Gelas Ukur (2/5 L + 1/4 L)
 */
export const IMG_GELAS_UKUR = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="215" viewBox="0 0 560 215">
  <rect width="560" height="215" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  <text x="280" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">
    PENGUKURAN VOLUME CAIRAN DALAM GELAS UKUR (KAPASITAS 1 LITER)
  </text>

  <!-- Gelas 1: 2/5 liter -->
  <g transform="translate(48,46)">
    <rect x="10" y="10" width="84" height="120" rx="6" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
    <!-- Air 2/5 dari 120 = 48 px dari bawah (y = 130 - 48 = 82) -->
    <rect x="12" y="82" width="80" height="46" rx="4" fill="#38bdf8"/>
    <line x1="10" y1="34" x2="24" y2="34" stroke="#64748b" stroke-width="1.5"/>
    <line x1="10" y1="58" x2="24" y2="58" stroke="#64748b" stroke-width="1.5"/>
    <line x1="10" y1="82" x2="28" y2="82" stroke="#0f172a" stroke-width="2"/>
    <line x1="10" y1="106" x2="24" y2="106" stroke="#64748b" stroke-width="1.5"/>
    <text x="52" y="152" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0369a1">2/5 liter</text>
  </g>

  <text x="180" y="122" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#334155">+</text>

  <!-- Gelas 2: 1/4 liter -->
  <g transform="translate(215,46)">
    <rect x="10" y="10" width="84" height="120" rx="6" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
    <!-- Air 1/4 dari 120 = 30 px dari bawah (y = 130 - 30 = 100) -->
    <rect x="12" y="100" width="80" height="28" rx="4" fill="#38bdf8"/>
    <line x1="10" y1="40" x2="24" y2="40" stroke="#64748b" stroke-width="1.5"/>
    <line x1="10" y1="70" x2="24" y2="70" stroke="#64748b" stroke-width="1.5"/>
    <line x1="10" y1="100" x2="28" y2="100" stroke="#0f172a" stroke-width="2"/>
    <text x="52" y="152" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0369a1">1/4 liter</text>
  </g>

  <text x="355" y="122" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#334155">=</text>

  <!-- Gelas Gabungan: ? -->
  <g transform="translate(405,46)">
    <rect x="10" y="10" width="84" height="120" rx="6" fill="#f1f5f9" stroke="#334155" stroke-width="2.5" stroke-dasharray="5"/>
    <text x="52" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="#1e3a8a">?</text>
    <text x="52" y="152" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">... liter</text>
  </g>
</svg>
`);
