export const AGENT_INFO = {
  name: "Al Azhar Memorial Garden",
  badge: "Official Authorized Sales Agent",
  phone: "6281234567890", // Example official agent WhatsApp number format
  phoneFormatted: "0812-3456-7890",
  email: "info@makamalazhar-official.id",
  location: "Jl. Raya Peruri KM 53-54, Karawang Timur, Jawa Barat",
  exitTol: "10 Menit dari Exit Tol Karawang Timur 2 (MBZ Skyway / Cipularang)",
  developer: "PT Nuansa Usaha Mandiri & YPI Al Azhar",
  iso: "ISO 9001 Management Certified",
};

export const ADVANTAGES_12 = [
  {
    id: 1,
    title: "100% Sesuai Syariat Islam",
    desc: "Khusus Muslim, terbebas dari bercampurnya makam non-Muslim, kedalaman liang 1.5m, dan posisi jenazah presisi menghadap Kiblat.",
    icon: "Mosque",
  },
  {
    id: 2,
    title: "Pengelolaan Profesional ISO 9001",
    desc: "Dikelola oleh kolaborasi YPI Al Azhar & PT Nuansa Usaha Mandiri sejak 2011 dengan standar manajemen internasional ISO 9001.",
    icon: "Award",
  },
  {
    id: 3,
    title: "Akses Strategis 10 Menit",
    desc: "Sangat mudah dijangkau via Tol Layang MBZ, Exit Tol Karawang Timur 2, Tol Cipularang, serta akses Tol Cimaci.",
    icon: "MapPin",
  },
  {
    id: 4,
    title: "Sertifikasi Arah Kiblat Resmi",
    desc: "Telah tersertifikasi secara resmi oleh Kementerian Agama (Kemenag) Kabupaten Karawang untuk kepastian presisi Kiblat.",
    icon: "Compass",
  },
  {
    id: 5,
    title: "Walkway di Setiap Baris Kavling",
    desc: "Setiap baris makam memiliki jalan setapak tertata, ramah kursi roda, serta menjamin makam tidak terinjak, terlangkahi, atau terduduki.",
    icon: "Footprints",
  },
  {
    id: 6,
    title: "Bebas Biaya Perawatan Rumput Selamanya",
    desc: "Konsep sekali bayar (One-Time Payment). Tanpa iuran bulanan atau tahunan selamanya untuk perawatan tanaman dan kebersihan.",
    icon: "ShieldCheck",
  },
  {
    id: 7,
    title: "Layanan Kedukaan 24 Jam Non-Stop",
    desc: "Tim siap siaga 24/7 mengurus seluruh tahapan pemulasaraan, transportasi ambulance, persiapan lahan, hingga pemakaman.",
    icon: "Clock",
  },
  {
    id: 8,
    title: "Ustadz Pendamping Prosesi Pemakaman",
    desc: "Dipandu langsung oleh Ustadz berpengalaman untuk memimpin doa dan memastikan seluruh prosesi sesuai Sunnah Rasulullah SAW.",
    icon: "UserCheck",
  },
  {
    id: 9,
    title: "Landscape Asri & Taman Modern",
    desc: "Didesain dengan konsep taman bunga yang asri, tenang, dan jauh dari kesan seram sehingga sangat nyaman untuk ziarah keluarga.",
    icon: "Trees",
  },
  {
    id: 10,
    title: "Nomor Kavling & Pemetaan Terstruktur",
    desc: "Sistem penomoran dan peta digital yang rapi memudahkan sanak saudara menemukan lokasi ziarah kapan saja.",
    icon: "Grid",
  },
  {
    id: 11,
    title: "Sertifikat Pemanfaatan Lahan Makam (YPIA)",
    desc: "Legalitas kepemilikan hak pakai lahan resmi diterbitkan oleh YPI Al Azhar sebagai jaminan keamanan jangka panjang.",
    icon: "FileCheck",
  },
  {
    id: 12,
    title: "Kemudahan Pembayaran & Cicilan Syariah",
    desc: "Pilihan pembayaran tunai, paket Pre-Need (kunci harga awal hemat), atau cicilan Syariah fleksibel melalui BTN Syariah.",
    icon: "CreditCard",
  },
];

export const PLOT_TYPES = [
  {
    id: "single",
    name: "Tipe Single",
    subtitle: "Solusi Perorangan / Paket Hemat",
    area: "4.5 m² (1.5m x 3m)",
    capacity: "1 Lubang / Kapasitas 1 Jenazah",
    walkway: "Walkway 0.9m di sekeliling kavling",
    image: "/images/hero.jpg",
    features: [
      "Ukuran presisi 1.5m x 3.0m",
      "Gundukan rumput jepang pilihan",
      "Nisan batu granit solid berkualitas",
      "Akses jalan setapak 0.9m",
      "Tersedia paket keluarga 10 unit kavling"
    ],
    priceEst: "Mulai dari Rp 40.000.000,-",
    recommendedFor: "Perorangan / Cadangan Pribadi",
    badge: "Paling Populer Pre-Need"
  },
  {
    id: "double",
    name: "Tipe Double",
    subtitle: "Pilihan Utama Pasangan Suami Istri",
    area: "13.65 m² (3.5m x 3.9m)",
    capacity: "2 Lubang / Kapasitas 2 Jenazah",
    walkway: "Pagar pembatas tanaman asri & walkway",
    image: "/images/double_plot.jpg",
    features: [
      "Varian B / C / D dengan layout eksklusif",
      "Pembatas tanaman pembatas asri (hedge)",
      "2 nisan batu granit solid berdampingan",
      "Bebas perawatan rumput selamanya",
      "Privasi ziarah keluarga lebih terjaga"
    ],
    priceEst: "Mulai dari Rp 110.000.000,-",
    recommendedFor: "Pasangan Suami Istri",
    badge: "Best Value Couple"
  },
  {
    id: "family",
    name: "Tipe Family (A / B)",
    subtitle: "Perencanaan Makam Keluarga Inti",
    area: "22.75 m² - 26.25 m² (3.5m x 7.5m)",
    capacity: "4 Lubang / Kapasitas 4 Jenazah",
    walkway: "Walkway 1.2m dengan perkerasan batu alam",
    image: "/images/double_plot.jpg",
    features: [
      "Kapasitas 4 lubang pemakaman",
      "Desain lanskap pembatas tanaman elegan",
      "Walkway pribadi 1.2m",
      "Privasi penuh saat acara ziarah keluarga",
      "Garansi pemeliharaan rumput seumur hidup"
    ],
    priceEst: "Mulai dari Rp 240.000.000,-",
    recommendedFor: "Keluarga Inti (Orang Tua & Anak)",
    badge: "Keluarga Inti"
  },
  {
    id: "super-family",
    name: "Tipe Super Family (A/B/D/G)",
    subtitle: "Kavling Megah Keluarga Besar",
    area: "52.5 m² - 100 m²",
    capacity: "6 - 8 Lubang Pemakaman",
    walkway: "Pembatas Tembok / Tomb Eksklusif & Paved Walkway",
    image: "/images/royal_family.jpg",
    features: [
      "Kapasitas 6 hingga 8 lubang",
      "Pembatas tembok/tomb batu granit eksklusif",
      "Desain khusus dengan tanaman hias premium",
      "Area tempat duduk ziarah pribadi",
      "Akses paling dekat dengan jalan utama site"
    ],
    priceEst: "Mulai dari Rp 550.000.000,-",
    recommendedFor: "Keluarga Besar Lintas Generasi",
    badge: "Eksklusif & Private"
  },
  {
    id: "royal-family",
    name: "Tipe Royal Family (A/C/D/E/G/H/AB)",
    subtitle: "Mahakarya Pemakaman Eksklusif & Prestige",
    area: "135 m² - 247.5 m²",
    capacity: "12 - 18 Lubang Pemakaman",
    walkway: "Gazebo Pribadi, Gapura Ukir, & Walkway batu marmer/granit",
    image: "/images/royal_family.jpg",
    features: [
      "Kapasitas 12 hingga 18 lubang",
      "Gazebo istirahat ziarah pribadi berarsitektur Islami",
      "Gapura gerbang penyambut batu granit solid",
      "Aksesoris batu alam & taman bunga privat",
      "Sertifikat Pemanfaatan Lahan Prioritas YPIA"
    ],
    priceEst: "Mulai dari Rp 1.200.000.000,-",
    recommendedFor: "Trahi Trah / Syarifah / Tokoh Nasional",
    badge: "Luxury Royal Class"
  }
];

export const SYARIAH_RULES = [
  {
    title: "100% Posisi Menghadap Kiblat",
    desc: "Arah kiblat lahan diukur dan disahkan melalui Sertifikat Kemenag Karawang untuk memastikan sudut derajat sesuai Ka'bah.",
    detail: "Setiap baris liang lahat dipetakan secara presisi sebelum pembangunan."
  },
  {
    title: "Lahan Khusus Muslim",
    desc: "Area seluas puluhan hektar ini 100% diperuntukkan hanya untuk umat Muslim tanpa bercampur dengan non-Muslim.",
    detail: "Menjaga kesucian dan kekhusyukan lingkungan pemakaman."
  },
  {
    title: "Sederhana Tanpa Bangunan Megah",
    desc: "Bentuk fisik makam hanya gundukan rumput dengan batu nisan granit solid sesuai Fatwa MUI No. 9 Tahun 2014.",
    detail: "Menghindari Tabzir (sia-sia) dan Israf (berlebih-lebihan) sesuai syariat Islam."
  },
  {
    title: "Tidak Menumpuk Jenazah",
    desc: "Satu liang lahat diperuntukkan khusus untuk satu jenazah (kecuali kondisi darurat syar'i) sesuai Fatwa MUI DKI Jakarta 2011.",
    detail: "Menjamin kehormatan setiap jenazah hingga akhir zaman."
  }
];

export const FACILITIES = [
  { title: "Mushola Full AC & Wudhu Bersih", desc: "Ruang ibadah nyaman untuk sholat berjamaah dan berdoa dengan penyejuk udara." },
  { title: "Lounge VIP Peziarah", desc: "Ruang tunggu privat yang tenang dan elegan dilengkapi refreshment untuk keluarga." },
  { title: "Function Hall Outdoor (Hall 1, 2, 3)", desc: "Area aula terbuka asri untuk tempat berkumpul keluarga sebelum/sesudah prosesi." },
  { title: "Restroom & Toilet Bersih", desc: "Fasilitas sanitasi berstandar kebersihan hotel untuk kenyamanan peziarah." },
  { title: "Area Parkir Luas & Aman", desc: "Kapasitas ratusan mobil & bus rombongan dengan pengawasan keamanan 24 jam." },
  { title: "Keamanan & Maintenance 24/7", desc: "Petugas keamanan siap sedia memastikan ketenangan lingkungan pemakaman." }
];

export const UPJ_SERVICES = [
  "Layanan Penjemputan Ambulance 24 Jam Jabodetabek & Karawang",
  "Prosesi Pemulasaraan Jenazah lengkap (Memandikan & Mengkafani)",
  "Penyediaan Kain Kafan, Perlengkapan, & Air Mawar",
  "Ustadz Pendamping Sholat Jenazah & Pemimpin Doa Pemakaman",
  "Penyediaan Papan Ari, Patok Nisan Sementara, & Tenda Kerinduan",
  "Sound System, Kursi Tamu, & Dokumentasi Prosesi",
  "Sertifikat & Pemasangan Nisan Granit Solid Permanen"
];

export const ROUTE_GUIDE = [
  {
    from: "Dari Jabodetabek (Jakarta, Bekasi, Depok)",
    steps: [
      "Gunakan Tol Jakarta-Cikampek atau Tol Layang MBZ (Sheikh Mohammed Bin Zayed) ke arah Cikampek/Bandung.",
      "Ambil jalur keluar di Exit Tol Karawang Timur 2 (KM 54).",
      "Pilih percabangan jalan menuju Kawasan Industri / Peruri.",
      "Ikuti jalan utama Jl. Raya Peruri sekitar 10 menit (KM 53-54) hingga menemukan Gerbang Utama Al Azhar Memorial Garden."
    ],
    timeEst: "± 45 - 60 Menit dari Jakarta Pusat"
  },
  {
    from: "Dari Bandung, Cimahi, & Purwakarta",
    steps: [
      "Masuk Tol Purbaleunyi / Tol Cipularang menuju arah Jakarta.",
      "Melanjutkan ke Tol Jakarta-Cikampek.",
      "Keluar di Gerbang Tol Karawang Timur 2.",
      "Ambil arah Kawasan Industri dan lurus ke Jl. Raya Peruri KM 53-54."
    ],
    timeEst: "± 45 - 50 Menit dari Pasteur Bandung"
  },
  {
    from: "Dari Bogor, Depok, & Tangerang Selatan (Via Tol Cimaci)",
    steps: [
      "Gunakan akses Tol Cimanggis - Cibitung (Cimaci).",
      "Terhubung langsung ke Jalur Tol Jakarta-Cikampek tanpa melewati kemacetan dalam kota.",
      "Ambil Exit Tol Karawang Timur 2 dan ikuti petunjuk ke Kawasan Industri Peruri."
    ],
    timeEst: "Akses Cepat Bebas Macet"
  }
];

export const KNOWLEDGE_ARTICLES = [
  {
    id: "hukum-waris-wasiat",
    category: "Edukasi Syariah",
    title: "Panduan Hukum Waris & Wasiat Lahan Makam dalam Islam",
    summary: "Bagaimana posisi perencanaan lahan makam pra-kebutuhan (Pre-Need) dalam hukum syariat Islam serta keabsahan pengalihan sertifikasi pemanfaatan lahan.",
    readTime: "5 Menit Baca",
    date: "2026-07-15",
    content: `
      Dalam syariat Islam, mempersiapkan lahan pemakaman bagi diri sendiri atau keluarga tercinta merupakan langkah bijak yang tidak bertentangan dengan syariat. 

      ### 1. Wasiat dan Perencanaan Masa Depan
      Menyiapkan lahan makam sebelum terjadinya kematian (Pre-Need) membantu meringankan beban psikologis dan finansial keluarga yang ditinggalkan. Saat musibah duka terjadi, keluarga tidak perlu panik mencari lokasi pemakaman yang sesuai syariat.

      ### 2. Hukum Pembelian Lahan Makam
      Fatwa Majelis Ulama Indonesia (MUI) menegaskan bahwa jual beli lahan pemakaman diperbolehkan selama peruntukannya jelas untuk makam Muslim, tidak digunakan untuk kemewahan yang berlebihan (Israf), dan menjamin pengelolaan kelangsungan tanah makam secara amanah.

      ### 3. Sertifikat Pemanfaatan Lahan
      Di Al Azhar Memorial Garden, setiap pembeli menerima Sertifikat Pemanfaatan Lahan Makam (SPLM) yang diterbitkan oleh YPI Al Azhar. Sertifikat ini menjamin hak pakai selamanya tanpa biaya iuran perpanjangan tahunan.
    `
  },
  {
    id: "pentingnya-pre-need",
    category: "Perencanaan Kedukaan",
    title: "Pentingnya Menyiapkan Lahan Makam Sejak Dini (Pre-Need Planning)",
    summary: "Mengapa membeli lahan makam di awal (Pre-Need) memberikan kedamaian pikiran dan menghindarkan keluarga dari beban keputusan terburu-buru.",
    readTime: "4 Menit Baca",
    date: "2026-07-20",
    content: `
      Banyak keluarga di kota besar menghadapi kendala kelangkaan lahan makam Muslim yang layak dan sesuai syariat saat hari duka tiba.

      ### Keuntungan Utama Perencanaan Pre-Need:
      1. **Kedamaian Pikiran (Peace of Mind):** Memastikan lokasi makam terbaik dan bernuansa syar'i telah siap kapan saja dibutuhkan.
      2. **Kepastian Harga Awal:** Menghindari lonjakan kenaikan harga lahan makam di masa depan.
      3. **Menghindari Beban Keluarga:** Saat ditinggalkan, sanak keluarga tidak perlu disibukkan dengan urusan pencarian tanah makam dalam waktu singkat (After-Need).
      4. **Bisa Memilih Posisi Bergandengan:** Bagi pasangan suami istri atau keluarga besar, pilihan Pre-Need memungkinkan pemilihan kavling berdampingan.
    `
  },
  {
    id: "adab-ziarah-kubur",
    category: "Sunnah & Etika",
    title: "Tata Cara & Adab Ziarah Kubur Sesuai Sunnah Rasulullah SAW",
    summary: "Etika berziarah, mendoakan almarhum, serta pentingnya fasilitas walkway agar makam lain tidak terinjak atau terlangkahi.",
    readTime: "6 Menit Baca",
    date: "2026-07-22",
    content: `
      Ziarah kubur adalah sunnah yang diajarkan Rasulullah SAW untuk mengingat kematian dan melunakkan hati. 

      ### Adab Utama Ziarah Kubur:
      1. **Mengucapkan Salam:** Mengucapkan salam kepada ahli kubur saat memasuki area pemakaman.
      2. **Menghadap Kiblat saat Mendoakan:** Berdoa memohon ampunan untuk almarhum/almarhumah dengan menghadap kiblat.
      3. **Larangan Menginjak Makam:** Dalam Hadits Riwayat Muslim, Rasulullah SAW melarang menduduki atau menginjak gundukan makam.
      
      *Di Al Azhar Memorial Garden, seluruh kavling dilengkapi walkway (jalan setapak) khusus di setiap barisnya sehingga peziarah dapat melangkah dengan tenang tanpa risiko menginjak makam orang lain.*
    `
  },
  {
    id: "keunggulan-mbz-skyway",
    category: "Aksesibilitas",
    title: "Keunggulan Akses MBZ Skyway Menuju Karawang Timur",
    summary: "Kemudahan jangkauan peziarah dari Jabodetabek menuju Al Azhar Memorial Garden Karawang hanya dalam hitungan 45-60 menit.",
    readTime: "3 Menit Baca",
    date: "2026-07-25",
    content: `
      Keberadaan Jalan Tol Layang Sheikh Mohammed Bin Zayed (MBZ) memberikan kemudahan akses signifikan bagi masyarakat Jakarta dan sekitarnya yang ingin berziarah ke Karawang.

      Tanpa terkendala macet di jalur bawah, waktu tempuh dari Cikunir / Jakarta Timur menuju Exit Tol Karawang Timur 2 hanya membutuhkan waktu sekitar 35 - 45 menit, menjadikan ziarah rutin akhir pekan menjadi sangat nyaman dan lancar.
    `
  }
];

export const TESTIMONIALS = [
  {
    quote: "Subhanallah, Al Azhar Memorial Garden tertata sangat rapi, bersih, dan asri. Saat ziarah merasa sangat tenang dan tidak ada kesan seram sama sekali. walkway-nya sangat memudahkan orang tua kami yang memakai kursi roda.",
    name: "Drs. H. Ahmad Wijaya, M.A.",
    role: "Keluarga Pemilik Kavling Double (Jakarta Selatan)",
    tag: "Verified Client"
  },
  {
    quote: "Sebagai Muslim, kepastian arah kiblat dan penataan syar'i adalah hal utama. Sertifikat Kemenag Karawang dan kepengurusan YPI Al Azhar memberikan ketenangan luar biasa bagi keluarga kami.",
    name: "Hj. Ratna Kusuma & Keluarga",
    role: "Pemilik Kavling Family (Bekasi)",
    tag: "Verified Client"
  },
  {
    quote: "Layanan UPJ 24 jam sangat profesional dan sigap. Saat musibah tiba-tiba, tim Al Azhar mengurus semuanya dari penjemputan hingga prosesi pemakaman dengan sangat terhormat dan sesuai sunnah.",
    name: "Bpk. Ir. Rian Harahap",
    role: "Keluarga Pengguna Layanan UPJ",
    tag: "Layanan Kedukaan"
  }
];
