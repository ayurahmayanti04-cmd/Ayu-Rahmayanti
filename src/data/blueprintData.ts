import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 5) Mata Pelajaran Matematika
 * Lingkup Materi: Bilangan Cacah 1-1.000.000, KPK dan FPB, Pecahan
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Pilihan Ganda Matematika Kelas 5
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membaca bilangan cacah sampai 1.000.000 dengan tepat.',
    indikatorSoal:
      'Disajikan data jumlah penduduk berupa bilangan cacah enam angka, peserta didik dapat menentukan cara membaca bilangan tersebut dengan benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai tempat dan nilai angka pada bilangan cacah sampai 1.000.000.',
    indikatorSoal:
      'Disajikan gambar kartu nilai tempat bilangan enam angka dengan satu angka disorot, peserta didik dapat menentukan nilai angka pada posisi puluh ribuan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menulis lambang bilangan cacah sampai 1.000.000.',
    indikatorSoal:
      'Disajikan nama bilangan harga barang dalam kalimat, peserta didik dapat menuliskan lambang bilangan cacah dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan bilangan cacah sampai 1.000.000.',
    indikatorSoal:
      'Disajikan gambar grafik batang data pengunjung perpustakaan selama empat bulan, peserta didik dapat mengurutkan bulan dari jumlah paling sedikit hingga paling banyak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan komposisi dan dekomposisi bilangan cacah sampai 1.000.000.',
    indikatorSoal:
      'Disajikan bentuk uraian penjumlahan nilai tempat suatu bilangan enam angka, peserta didik dapat menentukan bilangan utuh hasil komposisinya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan operasi hitung penjumlahan dan pengurangan bilangan cacah sampai 1.000.000.',
    indikatorSoal:
      'Disajikan soal cerita persediaan beras di gudang beserta kiriman masuk dan keluar, peserta didik dapat menghitung sisa persediaan beras.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyusun komposisi nilai uang dan bilangan cacah sampai 1.000.000.',
    indikatorSoal:
      'Disajikan gambar beberapa pecahan uang kertas rupiah beserta jumlah lembarannya, peserta didik dapat menghitung total nilai uang seluruhnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah operasi perkalian bilangan cacah hingga 1.000.000.',
    indikatorSoal:
      'Disajikan data produksi harian buku sebuah percetakan dan lama hari kerja, peserta didik dapat menghitung jumlah total buku yang dicetak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah operasi pembagian bilangan cacah hingga 1.000.000.',
    indikatorSoal:
      'Disajikan jumlah total dana bantuan pendidikan dan banyak siswa penerima, peserta didik dapat menentukan besar dana yang diterima setiap siswa.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah penalaran operasi hitung campuran bilangan cacah sampai 1.000.000.',
    indikatorSoal:
      'Disajikan gambar daftar harga perlengkapan sekolah dan rincian barang yang dibeli serta uang pembayaran, peserta didik dapat menghitung uang kembaliannya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan kelipatan persekutuan dari dua bilangan cacah.',
    indikatorSoal:
      'Disajikan dua bilangan cacah satu angka, peserta didik dapat menentukan kelipatan persekutuan kedua bilangan tersebut dengan batas tertentu.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan faktor persekutuan dari dua bilangan cacah.',
    indikatorSoal:
      'Disajikan dua bilangan cacah dua angka, peserta didik dapat menentukan semua faktor persekutuan dari kedua bilangan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan faktorisasi prima suatu bilangan menggunakan pohon faktor.',
    indikatorSoal:
      'Disajikan gambar pohon faktor dari bilangan 72, peserta didik dapat menentukan bentuk faktorisasi prima yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan Kelipatan Persekutuan Terkecil (KPK) dari tiga bilangan.',
    indikatorSoal:
      'Disajikan tiga bilangan dua angka, peserta didik dapat menghitung nilai KPK dari ketiga bilangan tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan Faktor Persekutuan Terbesar (FPB) dari tiga bilangan.',
    indikatorSoal:
      'Disajikan tiga bilangan dua angka, peserta didik dapat menghitung nilai FPB dari ketiga bilangan tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep KPK untuk menyelesaikan masalah waktu kejadian bersamaan.',
    indikatorSoal:
      'Disajikan gambar tiga lampu hias dengan interval menyala berbeda dan waktu nyala awal bersamaan, peserta didik dapat menentukan pukul ketiganya menyala bersamaan lagi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis masalah kontekstual penjadwalan tanggal menggunakan KPK.',
    indikatorSoal:
      'Disajikan jadwal latihan rutin tiga siswa beserta tanggal latihan bersama pertama, peserta didik dapat menentukan tanggal latihan bersama berikutnya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep FPB dalam pembagian barang sama banyak.',
    indikatorSoal:
      'Disajikan gambar tiga keranjang berisi buah berbeda jumlah, peserta didik dapat menentukan jumlah maksimal parsel yang dapat dibuat dengan isi sama banyak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah penalaran pembagian paket barang menggunakan FPB.',
    indikatorSoal:
      'Disajikan jumlah tiga jenis bahan pokok bantuan sosial, peserta didik dapat menentukan banyaknya masing-masing jenis barang yang diterima setiap keluarga.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan antara nilai KPK dan FPB dari dua bilangan.',
    indikatorSoal:
      'Disajikan dua bilangan dua angka, peserta didik dapat menghitung selisih antara nilai KPK dan FPB dari kedua bilangan tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal dan menentukan nilai pecahan berdasarkan gambar.',
    indikatorSoal:
      'Disajikan gambar lingkaran yang dibagi menjadi 8 bagian sama besar dengan 3 bagian diarsir, peserta didik dapat menentukan nilai pecahannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyederhanakan pecahan biasa ke bentuk paling sederhana.',
    indikatorSoal:
      'Disajikan sebuah pecahan biasa dengan pembilang dan penyebut dua angka, peserta didik dapat menentukan bentuk paling sederhananya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan pecahan senilai menggunakan model visual pita pecahan.',
    indikatorSoal:
      'Disajikan gambar dua pita pecahan sama panjang yang terbagi berbeda dan diarsir sejajar, peserta didik dapat menentukan nilai pecahan pada pita kedua.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan berbagai pecahan berpenyebut berbeda.',
    indikatorSoal:
      'Disajikan empat buah pecahan berpenyebut berbeda, peserta didik dapat mengurutkan pecahan dari nilai terkecil hingga terbesar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan penjumlahan pecahan berpenyebut berbeda.',
    indikatorSoal:
      'Disajikan gambar dua gelas ukur berisi cairan dalam satuan pecahan liter berbeda penyebut, peserta didik dapat menghitung volume total gabungan cairan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengubah bentuk pecahan biasa ke bentuk desimal dan persen.',
    indikatorSoal:
      'Disajikan sebuah pecahan biasa, peserta didik dapat menentukan bentuk desimal dan persen yang senilai secara berturut-turut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan operasi pengurangan pecahan campuran dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan soal cerita pembelian dan pemakaian tepung terigu berbentuk pecahan campuran, peserta didik dapat menghitung sisa tepung terigu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan operasi perkalian pecahan campuran.',
    indikatorSoal:
      'Disajikan ukuran panjang dan lebar taman berbentuk pecahan campuran, peserta didik dapat menghitung luas taman tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan operasi pembagian pecahan dalam konteks sehari-hari.',
    indikatorSoal:
      'Disajikan volume minyak goreng berbentuk pecahan campuran yang dikemas ke botol berkapasitas pecahan biasa, peserta didik dapat menghitung banyak botol yang dibutuhkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah penalaran HOTS yang melibatkan bagian pecahan dari suatu kuantitas.',
    indikatorSoal:
      'Disajikan luas tanah dan rincian pembagian lahan dalam bentuk pecahan untuk kolam dan kebun sayur, peserta didik dapat menentukan luas sisa lahan untuk rumah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('bilangan') || t.includes('pecahan') || t.includes('fpb') || t.includes('kpk') || t.includes('pangkat')) {
    return 'Bilangan';
  }
  if (t.includes('lingkaran') || t.includes('bangun datar') || t.includes('kubus') || t.includes('geometri') || t.includes('layang')) {
    return 'Geometri';
  }
  if (t.includes('debit') || t.includes('volume') || t.includes('kecepatan') || t.includes('jarak')) {
    return 'Pengukuran';
  }
  if (t.includes('skala') || t.includes('perbandingan') || t.includes('diskon') || t.includes('bruto') || t.includes('aritmatika')) {
    return 'Aljabar';
  }
  if (t.includes('statistika') || t.includes('diagram') || t.includes('mean') || t.includes('modus') || t.includes('median')) {
    return 'Analisis Data dan Peluang';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
