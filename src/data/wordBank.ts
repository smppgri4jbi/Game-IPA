export type ItemCategory = 'makhluk_hidup' | 'makhluk_mati';

export interface BioWord {
  word: string;
  category: ItemCategory;
  subCategory: string;
  funFact: string;
  characteristics: string[];
}

export const WORD_BANK: BioWord[] = [
  // ================= A =================
  {
    word: 'ayam',
    category: 'makhluk_hidup',
    subCategory: 'Unggas (Aves)',
    funFact: 'Ayam memiliki penglihatan warna yang sangat tajam dan bernapas dengan paru-paru serta kantung udara.',
    characteristics: ['Bernapas', 'Bertelur (Ovipar)', 'Memerlukan Nutrisi'],
  },
  {
    word: 'anjing',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Karnivora',
    funFact: 'Indra penciuman anjing hingga 100.000 kali lebih sensitif dibanding hidung manusia.',
    characteristics: ['Melahirkan (Vivipar)', 'Menyusui', 'Bergerak Aktif'],
  },
  {
    word: 'anggrek',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Berbunga (Epifit)',
    funFact: 'Bunga anggrek hidup menempel pada pohon lain tanpa merugikan inangnya (simbiosis komensalisme).',
    characteristics: ['Fotosintesis', 'Tumbuh & Berkembang', 'Peka Cahaya'],
  },
  {
    word: 'alga',
    category: 'makhluk_hidup',
    subCategory: 'Protista Mirip Tumbuhan',
    funFact: 'Alga di lautan menghasilkan lebih dari 50% oksigen atmosfer bumi melalui fotosintesis.',
    characteristics: ['Memiliki Klorofil', 'Menghasilkan Oksigen', 'Bersel Tunggal/Banyak'],
  },
  {
    word: 'anoa',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Endemik Sulawesi',
    funFact: 'Anoa adalah hewan endemik langka di hutan Sulawesi yang sering disebut sapi hutan kerdil.',
    characteristics: ['Herbivora', 'Bernapas dengan Paru-paru', 'Melahirkan'],
  },
  {
    word: 'air',
    category: 'makhluk_mati',
    subCategory: 'Senyawa Abiotik Alam (H2O)',
    funFact: 'Air menutupi 71% permukaan bumi dan merupakan pelarut universal esensial bagi seluruh ekosistem.',
    characteristics: ['Tidak Bernapas', 'Dapat Berubah Wujud (Cair/Gas/Padat)', 'Komponen Abiotik'],
  },
  {
    word: 'angin',
    category: 'makhluk_mati',
    subCategory: 'Gejala Alam Fisik',
    funFact: 'Angin adalah udara yang bergerak akibat perbedaan tekanan dan pemanasan matahari.',
    characteristics: ['Benda Gas', 'Massa Udara Bergerak', 'Tidak Berkembang Biak'],
  },
  {
    word: 'asfal',
    category: 'makhluk_mati',
    subCategory: 'Material Buatan / Tambang',
    funFact: 'Asfal adalah campuran hidrokarbon kental yang digunakan untuk mengeraskan permukaan jalan raya.',
    characteristics: ['Benda Padat/Kental', 'Tidak Memerlukan Nutrisi', 'Benda Mati'],
  },
  {
    word: 'awan',
    category: 'makhluk_mati',
    subCategory: 'Fenomena Atmosfer',
    funFact: 'Awan terdiri dari miliaran tetesan air kecil atau kristal es yang melayang di troposfer.',
    characteristics: ['Massa Uap Air Kondensasi', 'Tidak Bernapas', 'Objek Abiotik'],
  },
  {
    word: 'arloji',
    category: 'makhluk_mati',
    subCategory: 'Benda Buatan Mekanik',
    funFact: 'Arloji memanfaatkan getaran kristal kuarsa atau pegas mekanik untuk mengukur satuan waktu.',
    characteristics: ['Benda Buatan Manusia', 'Tidak Bertumbuh', 'Komponen Logam & Kaca'],
  },

  // ================= B =================
  {
    word: 'badak',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Terancam Punah',
    funFact: 'Cula badak terbuat dari protein keratin, jenis protein yang sama persis dengan kuku dan rambut manusia.',
    characteristics: ['Melahirkan', 'Bernapas', 'Herbivora Besar'],
  },
  {
    word: 'buaya',
    category: 'makhluk_hidup',
    subCategory: 'Reptil Karnivora',
    funFact: 'Buaya telah menghuni bumi selama lebih dari 80 juta tahun dan dapat mendeteksi getaran di air lewat sisik khususnya.',
    characteristics: ['Berdarah Dingin (Poikiloterm)', 'Bertelur', 'Bernapas Paru-paru'],
  },
  {
    word: 'bakteri',
    category: 'makhluk_hidup',
    subCategory: 'Mikroorganisme Prokariotik',
    funFact: 'Bakteri seperti Lactobacillus membantu proses pencernaan manusia dan pembuatan yogurt.',
    characteristics: ['Uniseluler', 'Membelah Diri', 'Memerlukan Nutrisi'],
  },
  {
    word: 'bambu',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Rerumputan Raksasa',
    funFact: 'Bambu adalah salah satu tanaman dengan pertumbuhan tercepat di dunia, bisa tumbuh hingga 90 cm per hari!',
    characteristics: ['Tumbuh Cepat', 'Batang Berongga', 'Fotosintesis'],
  },
  {
    word: 'batu',
    category: 'makhluk_mati',
    subCategory: 'Mineral Geologi Abiotik',
    funFact: 'Batu terbentuk melalui proses geologis ratusan ribu tahun seperti pendinginan magma atau pengendapan sedimen.',
    characteristics: ['Benda Padat Keras', 'Tidak Bernapas', 'Tidak Bertumbuh Sendiri'],
  },
  {
    word: 'buku',
    category: 'makhluk_mati',
    subCategory: 'Benda Buatan / Media',
    funFact: 'Kertas dalam buku berasal dari serat selulosa kayu pohon yang diolah secara mekanis dan kimiawi.',
    characteristics: ['Benda Padat', 'Tidak Bergerak Mandiri', 'Benda Mati Buatan'],
  },
  {
    word: 'bintang',
    category: 'makhluk_mati',
    subCategory: 'Benda Langit Kosmik',
    funFact: 'Bintang adalah bola gas plasma berpijar raksasa yang menghasilkan cahaya sendiri melalui fusi nuklir hidrogen.',
    characteristics: ['Objek Kosmis', 'Reaksi Fusi Nuklir', 'Abiotik'],
  },
  {
    word: 'besi',
    category: 'makhluk_mati',
    subCategory: 'Unsur Logam (Fe)',
    funFact: 'Besi merupakan salah satu unsur paling melimpah di kerak bumi dan dapat ditarik oleh medan magnet.',
    characteristics: ['Unsur Kimia Logam', 'Konduktor Panas & Listrik', 'Benda Mati'],
  },

  // ================= C =================
  {
    word: 'cacing',
    category: 'makhluk_hidup',
    subCategory: 'Invertebrata (Annelida)',
    funFact: 'Cacing tanah tidak memiliki mata atau paru-paru; mereka bernapas langsung melalui kulitnya yang selalu lembap.',
    characteristics: ['Bernapas Lewat Kulit', 'Dekomposer Tanah', 'Hermafrodit'],
  },
  {
    word: 'cendrawasih',
    category: 'makhluk_hidup',
    subCategory: 'Burung Endemik Papua',
    funFact: 'Dikenal sebagai "Bird of Paradise" karena keindahan bulu jantan yang digunakan untuk tarian ritual kawin.',
    characteristics: ['Unggas Indah', 'Bertelur', 'Omnivora Hutan'],
  },
  {
    word: 'cumi',
    category: 'makhluk_hidup',
    subCategory: 'Moluska Laut (Cephalopoda)',
    funFact: 'Cumi-cumi memiliki 3 buah jantung dan darah berwarna biru muda karena mengandung zat hemosianin.',
    characteristics: ['Darah Berwarna Biru', 'Menyemprotkan Tinta', 'Bergerak dengan Jet Sifon'],
  },
  {
    word: 'cemara',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Gymnospermae',
    funFact: 'Pohon cemara memiliki daun berbentuk jarum untuk meminimalkan penguapan air di daerah bersuhu ekstrem.',
    characteristics: ['Daun Jarum', 'Tumbuhan Biji Terbuka', 'Fotosintesis'],
  },
  {
    word: 'cermin',
    category: 'makhluk_mati',
    subCategory: 'Benda Optik Buatan',
    funFact: 'Cermin modern dibuat dengan melapisi kaca bening dengan lapisan perak atau aluminium tipis melalui proses reduksi kimia.',
    characteristics: ['Memantulkan Cahaya Sempurna', 'Benda Padat Kaca', 'Benda Tak Hidup'],
  },
  {
    word: 'cangkir',
    category: 'makhluk_mati',
    subCategory: 'Peralatan Keramik/Kaca',
    funFact: 'Cangkir keramik dibakar di dalam tanur khusus pada suhu lebih dari 1.000 derajat Celsius agar kedap cairan.',
    characteristics: ['Peralatan Rumah Tangga', 'Benda Padat Getas', 'Tidak Bernapas'],
  },
  {
    word: 'celana',
    category: 'makhluk_mati',
    subCategory: 'Pakaian Tekstil',
    funFact: 'Celana jeans pertama kali diciptakan pada abad ke-19 untuk para pekerja tambang emas karena kekuatannya.',
    characteristics: ['Benda Buatan Tekstil', 'Tidak Bergerak Mandiri', 'Benda Mati'],
  },

  // ================= D =================
  {
    word: 'domba',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Herbivora',
    funFact: 'Domba memiliki pupil mata persegi panjang horisontal yang memberi mereka sudut pandang periferal hampir 360 derajat.',
    characteristics: ['Melahirkan', 'Menghasilkan Wol', 'Ruminansia (Memamah Biak)'],
  },
  {
    word: 'delfin',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Laut (Lumba-lumba)',
    funFact: 'Delfin menggunakan gelombang suara ekolokasi untuk melihat bentuk dan jarak benda di dalam air keruh.',
    characteristics: ['Mamalia Laut', 'Bernapas dengan Paru-paru', 'Sangat Cerdas'],
  },
  {
    word: 'durian',
    category: 'makhluk_hidup',
    subCategory: 'Pohon Buah Tropis',
    funFact: 'Pohon durian dapat tumbuh hingga tinggi 50 meter dan bunganya diserbuki oleh kelelawar di malam hari.',
    characteristics: ['Tumbuhan Berbunga', 'Buah Berduri Tajam', 'Fotosintesis'],
  },
  {
    word: 'dinding',
    category: 'makhluk_mati',
    subCategory: 'Struktur Bangunan',
    funFact: 'Dinding bata dan beton berfungsi menahan beban struktural sekaligus menyekat suhu dan suara antarruangan.',
    characteristics: ['Struktur Padat Statis', 'Benda Buatan Arsitektur', 'Tidak Tumbuh'],
  },
  {
    word: 'drum',
    category: 'makhluk_mati',
    subCategory: 'Alat Musik Perkusi',
    funFact: 'Drum menghasilkan suara melalui getaran membran plastik atau kulit yang dipukul, menghasilkan gelombang akustik.',
    characteristics: ['Alat Musik Akustik', 'Benda Padat Resonan', 'Benda Mati'],
  },
  {
    word: 'dadu',
    category: 'makhluk_mati',
    subCategory: 'Alat Permainan Geometris',
    funFact: 'Pada dadu standar 6 sisi, jumlah angka pada dua sisi yang saling berhadapan selalu sama dengan 7.',
    characteristics: ['Benda Padat Kubus', 'Tidak Bernapas', 'Benda Mati'],
  },

  // ================= E =================
  {
    word: 'elang',
    category: 'makhluk_hidup',
    subCategory: 'Burung Pemangsa (Raptor)',
    funFact: 'Elang mampu melihat mangsa kecil seperti kelinci dari jarak lebih dari 3 kilometer dengan ketajaman luar biasa.',
    characteristics: ['Karnivora', 'Penglihatan Super', 'Paruh dan Cakar Tajam'],
  },
  {
    word: 'eceng',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Air (Eceng Gondok)',
    funFact: 'Eceng gondok memiliki tangkai daun berongga udara yang memungkinkannya mengapung bebas di permukaan perairan.',
    characteristics: ['Tumbuhan Air Mengapung', 'Perkembangbiakan Cepat', 'Fotosintesis'],
  },
  {
    word: 'emas',
    category: 'makhluk_mati',
    subCategory: 'Logam Mulia (Au)',
    funFact: 'Emas adalah logam mulia yang tidak bereaksi dengan oksigen sehingga tidak akan pernah berkarat sepanjang masa.',
    characteristics: ['Unsur Logam Mulia', 'Tahan Korosi', 'Konduktor Baik'],
  },
  {
    word: 'ember',
    category: 'makhluk_mati',
    subCategory: 'Wadah Plastik/Seng',
    funFact: 'Ember modern umumnya terbuat dari polipropilena yang dicetak menggunakan teknik injeksi plastik cair presisi.',
    characteristics: ['Wadah Penampung', 'Benda Buatan', 'Tidak Bernapas'],
  },
  {
    word: 'engsel',
    category: 'makhluk_mati',
    subCategory: 'Komponen Mekanik Pintu',
    funFact: 'Engsel adalah bantalan mekanis yang menghubungkan dua objek padat dan memungkinkan sudut rotasi terbatas.',
    characteristics: ['Perangkat Mekanik Logam', 'Tidak Bertumbuh', 'Benda Mati'],
  },

  // ================= G =================
  {
    word: 'gajah',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Darat Terbesar',
    funFact: 'Belalai gajah memiliki lebih dari 40.000 otot terpisah tanpa tulang, mampu mengangkat pohon hingga sebatang jarum.',
    characteristics: ['Herbivora Raksasa', 'Memiliki Belalai & Gading', 'Melahirkan'],
  },
  {
    word: 'gurita',
    category: 'makhluk_hidup',
    subCategory: 'Moluska Cerdas',
    funFact: 'Gurita memiliki neuron di tentakelnya sehingga setiap lengannya dapat menjelajah dan mencicipi secara mandiri.',
    characteristics: ['Cephalopoda Cerdas', 'Kamuflase Kulit Cepat', 'Tanpa Rangka Tulang'],
  },
  {
    word: 'ganggang',
    category: 'makhluk_hidup',
    subCategory: 'Protista Fotoautotrof',
    funFact: 'Ganggang merah menghasilkan agar-agar yang digunakan dalam pembuatan makanan dan media kultur laboratorium biologi.',
    characteristics: ['Autotrof', 'Hidup di Air', 'Mengandung Pigmen Klorofil'],
  },
  {
    word: 'gunting',
    category: 'makhluk_mati',
    subCategory: 'Alat Pemotong Mekanis',
    funFact: 'Gunting bekerja berdasarkan prinsip pesawat sederhana tuas jenis pertama dengan titik tumpu di antara beban dan kuasa.',
    characteristics: ['Benda Padat Logam', 'Alat Buatan Manusia', 'Tidak Memerlukan Nutrisi'],
  },
  {
    word: 'gelas',
    category: 'makhluk_mati',
    subCategory: 'Benda Padat Amorf (Kaca)',
    funFact: 'Gelas terbuat dari pasir silika (SiO2) yang dipanaskan hingga meleleh pada suhu sekitar 1.700°C lalu didinginkan cepat.',
    characteristics: ['Padatan Silika Bening', 'Kedap Air', 'Benda Tak Hidup'],
  },
  {
    word: 'garam',
    category: 'makhluk_mati',
    subCategory: 'Senyawa Kimia Mineral (NaCl)',
    funFact: 'Garam dapur terbentuk dari ikatan ionik antara atom natrium yang reaktif dan gas klorin yang beracun menjadi kristal stabil.',
    characteristics: ['Kristal Ionik', 'Dapat Larut di Air', 'Benda Abiotik'],
  },
  {
    word: 'garpu',
    category: 'makhluk_mati',
    subCategory: 'Peralatan Makan Logam',
    funFact: 'Garpu makan dari baja nirkarat (stainless steel) mengandung kromium untuk mencegah oksidasi dan karat.',
    characteristics: ['Peralatan Logam', 'Benda Buatan', 'Tidak Bernapas'],
  },

  // ================= H =================
  {
    word: 'harimau',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Karnivora Besar',
    funFact: 'Bukan hanya bulunya yang bergaris loreng, kulit harimau di bawah bulunya pun memiliki pola belang yang sama uniknya!',
    characteristics: ['Karnivora Puncak', 'Melahirkan', 'Mengaum Keras'],
  },
  {
    word: 'hiu',
    category: 'makhluk_hidup',
    subCategory: 'Ikan Bertulang Rawan',
    funFact: 'Hiu tidak memiliki tulang keras sama sekali; seluruh kerangkanya tersusun atas tulang rawan yang lentur dan ringan.',
    characteristics: ['Bernapas dengan Insang', 'Gigi Berganti Terus', 'Predator Laut'],
  },
  {
    word: 'helikopter',
    category: 'makhluk_mati',
    subCategory: 'Wahana Transportasi Udara',
    funFact: 'Baling-baling rotor helikopter menghasilkan gaya angkat aerodinamis Bernoulli sehingga bisa terbang vertikal dan melayang diam.',
    characteristics: ['Kendaraan Mesin Mekanik', 'Benda Buatan Manusia', 'Tidak Berkembang Biak'],
  },
  {
    word: 'helm',
    category: 'makhluk_mati',
    subCategory: 'Alat Pelindung Diri',
    funFact: 'Lapisan busa EPS di dalam helm dirancang untuk menyerap dan mendistribusikan energi benturan saat tabrakan.',
    characteristics: ['Benda Padat Polimer/Fiber', 'Pelindung Kepala', 'Benda Mati'],
  },
  {
    word: 'handuk',
    category: 'makhluk_mati',
    subCategory: 'Barang Tekstil Penyerap',
    funFact: 'Handuk katun menyerap air dengan cepat karena aksi kapiler di antara celah serat selulosa benang.',
    characteristics: ['Bahan Kain Lembut', 'Menyerap Air', 'Benda Tak Hidup'],
  },

  // ================= I =================
  {
    word: 'ikan',
    category: 'makhluk_hidup',
    subCategory: 'Vertebrata Air (Pisces)',
    funFact: 'Sebagian besar ikan memiliki gelembung renang internal yang bisa diisi gas untuk mengatur daya apung di kedalaman air.',
    characteristics: ['Bernapas dengan Insang', 'Berenang dengan Sirip', 'Berdarah Dingin'],
  },
  {
    word: 'iguana',
    category: 'makhluk_hidup',
    subCategory: 'Reptil Herbivora',
    funFact: 'Iguana memiliki "mata ketiga" parietal di atas kepalanya yang berfungsi mendeteksi perubahan cahaya dari burung predator.',
    characteristics: ['Bersisik Kering', 'Bertelur', 'Herbivora Daun'],
  },
  {
    word: 'intan',
    category: 'makhluk_mati',
    subCategory: 'Mineral Kristal Karbon murni',
    funFact: 'Intan adalah mineral alami terkeras di bumi dengan skala Mohs 10, terbentuk dari atom karbon bertekanan super tinggi di mantel bumi.',
    characteristics: ['Kristal Karbon Keras', 'Membiaskan Cahaya Indah', 'Mineral Abiotik'],
  },
  {
    word: 'isolasi',
    category: 'makhluk_mati',
    subCategory: 'Pita Perekat Buatan',
    funFact: 'Pita perekat mengikat benda menggunakan gaya Van der Waals antara lem polimer tipis dan permukaan benda padat.',
    characteristics: ['Pita Polimer Berperekat', 'Benda Buatan', 'Tidak Bernapas'],
  },

  // ================= J =================
  {
    word: 'jerapah',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Tertinggi di Dunia',
    funFact: 'Meskipun leher jerapah panjangnya mencapai 2 meter, lehernya hanya memiliki 7 ruas tulang leher, sama persis seperti leher manusia!',
    characteristics: ['Herbivora Tinggi', 'Jantung Bertekanan Kuat', 'Lidah Panjang Kebiruan'],
  },
  {
    word: 'jamur',
    category: 'makhluk_hidup',
    subCategory: 'Kerajaan Fungi',
    funFact: 'Jamur bukan tumbuhan karena tidak berfotosintesis; jamur menyerap nutrisi dari bahan organik sebagai dekomposer penting.',
    characteristics: ['Dekomposer Alami', 'Dinding Sel dari Kitin', 'Bereproduksi dengan Spora'],
  },
  {
    word: 'jangkrik',
    category: 'makhluk_hidup',
    subCategory: 'Serangga (Insekta)',
    funFact: 'Jangkrik jantan bersuara kencang dengan cara menggesekkan tepi sayap depannya (disebut stridulasi) untuk menarik betina.',
    characteristics: ['Serangga Bersayap', 'Telinga di Kaki Depan', 'Metamorfosis Tidak Sempurna'],
  },
  {
    word: 'jam',
    category: 'makhluk_mati',
    subCategory: 'Instrumen Penunjuk Waktu',
    funFact: 'Jam atom cesium adalah jam paling akurat di dunia, hanya bergeser 1 detik dalam puluhan juta tahun.',
    characteristics: ['Alat Ukur Waktu', 'Benda Buatan Mesin', 'Tidak Bertumbuh'],
  },
  {
    word: 'jembatan',
    category: 'makhluk_mati',
    subCategory: 'Infrastruktur Sipil',
    funFact: 'Jembatan gantung memanfaatkan kabel baja elastis berkekuatan tarik tinggi untuk menopang geladak jalan lintas sungai/selat.',
    characteristics: ['Konstruksi Baja & Beton', 'Benda Padat Statis', 'Benda Tak Hidup'],
  },
  {
    word: 'jarum',
    category: 'makhluk_mati',
    subCategory: 'Alat Jahit Logam',
    funFact: 'Jarum jahit bermata pertama kali dibuat dari tulang hewan sejak zaman prasejarah lebih dari 20.000 tahun lalu.',
    characteristics: ['Benda Padat Runcing Logam', 'Alat Buatan', 'Tidak Bernapas'],
  },

  // ================= K =================
  {
    word: 'kucing',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Karnivora Kecil',
    funFact: 'Kucing mendengkur (purring) pada frekuensi 20–140 Hz yang terbukti dapat merangsang penyembuhan tulang dan jaringan otot.',
    characteristics: ['Melahirkan', 'Menyusui', 'Kumis Sensorik Presisi'],
  },
  {
    word: 'kuda',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Berkuku Ganjil',
    funFact: 'Kuda dapat tidur sambil berdiri karena memiliki mekanisme pengunci sendi tendon kaki khusus (stay apparatus).',
    characteristics: ['Herbivora Cepat', 'Melahirkan', 'Tidur Berdiri'],
  },
  {
    word: 'kelinci',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Lagomorpha',
    funFact: 'Gigi depan kelinci tidak pernah berhenti tumbuh sepanjang hidupnya, sehingga mereka harus sering mengunyah rumput serat kasar.',
    characteristics: ['Telinga Panjang Pendengar Tajam', 'Herbivora', 'Melahirkan Banyak Anak'],
  },
  {
    word: 'katak',
    category: 'makhluk_hidup',
    subCategory: 'Amfibi (Anura)',
    funFact: 'Katak mengalami metamorfosis sempurna dari kecebong yang bernapas dengan insang menjadi katak dewasa berparu-paru dan berkulit lembap.',
    characteristics: ['Metamorfosis Sempurna', 'Hidup di Dua Alam', 'Lompatan Kuat'],
  },
  {
    word: 'kaktus',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Sukulen Gurun',
    funFact: 'Duri pada kaktus sebenarnya adalah modifikasi daun yang berfungsi mengurangi penguapan dan melindungi batang penyimpan air.',
    characteristics: ['Batang Sukulen Berair', 'Daun Menjadi Duri', 'Adaptasi Ekstrem Kering'],
  },
  {
    word: 'kertas',
    category: 'makhluk_mati',
    subCategory: 'Material Lembaran Olahan',
    funFact: 'Kertas ditemukan pertama kali di Tiongkok oleh Cai Lun sekitar tahun 105 Masehi dari bubur kulit pohon mulberry dan kain rami.',
    characteristics: ['Bahan Selulosa Tipis', 'Mudah Dilipat', 'Benda Mati'],
  },
  {
    word: 'kursi',
    category: 'makhluk_mati',
    subCategory: 'Mebel / Perabot Rumah',
    funFact: 'Desain kursi ergonomis modern dihitung berdasarkan data antropometri tubuh manusia agar tulang belakang tidak lekas lelah.',
    characteristics: ['Perabot Duduk', 'Benda Buatan Kayu/Besi', 'Tidak Bergerak Sendiri'],
  },
  {
    word: 'komputer',
    category: 'makhluk_mati',
    subCategory: 'Perangkat Elektronik Digital',
    funFact: 'Mikroprosesor di dalam komputer modern memuat miliaran transistor mikroskopis berukuran hanya beberapa nanometer.',
    characteristics: ['Sirkuit Elektronik Silikon', 'Memproses Kode Biner', 'Benda Mati Canggih'],
  },
  {
    word: 'kunci',
    category: 'makhluk_mati',
    subCategory: 'Perangkat Keamanan Mekanis',
    funFact: 'Mata gerigi kunci disusun dengan kedalaman presisi untuk menggeser pasak (pin tumbler) silinder kunci tepat pada garis geser.',
    characteristics: ['Benda Padat Kuningan/Baja', 'Pengunci Pintu', 'Benda Tak Hidup'],
  },

  // ================= L =================
  {
    word: 'lumut',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Perintis (Bryophyta)',
    funFact: 'Lumut adalah tumbuhan perintis yang mampu hidup di atas batu cadas gersang dan memecahnya menjadi bakal tanah subur.',
    characteristics: ['Tumbuhan Tanpa Pembuluh', 'Spora Reproduksi', 'Menyerap Air Tinggi'],
  },
  {
    word: 'lalat',
    category: 'makhluk_hidup',
    subCategory: 'Serangga Diptera',
    funFact: 'Lalat mencicipi makanan menggunakan reseptor rasa yang berada di ujung kakinya, bukan di mulutnya!',
    characteristics: ['Serangga Dua Sayap', 'Mata Majemuk Faset', 'Penerbang Lincah'],
  },
  {
    word: 'lumba',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Laut Cerdas',
    funFact: 'Lumba-lumba tidur dengan hanya mengistirahatkan satu belahan otak secara bergantian agar tetap bisa berenang ke permukaan untuk bernapas.',
    characteristics: ['Bernapas dengan Paru-paru', 'Ekolokasi Sonar', 'Hewan Sosial'],
  },
  {
    word: 'lampu',
    category: 'makhluk_mati',
    subCategory: 'Sumber Cahaya Buatan',
    funFact: 'Lampu LED menghasilkan cahaya melalui elektroluminesensi semikonduktor, 80% lebih hemat energi dibanding bohlam pijar kawat pijar Thomas Edison.',
    characteristics: ['Pemancar Foton Buatan', 'Komponen Semikonduktor/Filamen', 'Benda Mati'],
  },
  {
    word: 'lemari',
    category: 'makhluk_mati',
    subCategory: 'Furnitur Penyimpan',
    funFact: 'Lemari kayu alami dapat mengembang atau menyusut beberapa milimeter mengikuti kelembapan udara relatif di sekitarnya.',
    characteristics: ['Penyimpan Benda', 'Struktur Mebel Kayu/Plat', 'Tidak Bertumbuh'],
  },
  {
    word: 'logam',
    category: 'makhluk_mati',
    subCategory: 'Material Anorganik Konduktif',
    funFact: 'Atom-atom logam diikat oleh "lautan elektron bebas" yang membuatnya mudah ditempa dan sangat baik menghantarkan arus listrik.',
    characteristics: ['Konduktor Listrik & Panas', 'Dapat Ditempa', 'Abiotik Anorganik'],
  },

  // ================= M =================
  {
    word: 'monyet',
    category: 'makhluk_hidup',
    subCategory: 'Primata Cerdas',
    funFact: 'Sebagian monyet dapat mengenali dirinya sendiri di cermin dan menggunakan batu sebagai perkakas untuk membuka cangkang kacang keras.',
    characteristics: ['Melahirkan', 'Ibu Jari Berlawanan (Opposable)', 'Omnivora Cerdas'],
  },
  {
    word: 'merpati',
    category: 'makhluk_hidup',
    subCategory: 'Burung Navigasi Magnetik',
    funFact: 'Merpati pos memiliki kristal magnetit kecil di paruhnya yang berfungsi seperti kompas biologis untuk mendeteksi medan magnet bumi.',
    characteristics: ['Navigasi Arah Hebat', 'Monogami (Setia Pasangan)', 'Bertelur'],
  },
  {
    word: 'mawar',
    category: 'makhluk_hidup',
    subCategory: 'Tanaman Berbunga Hias',
    funFact: 'Duri tajam pada batang bunga mawar sebenarnya adalah tonjolan jaringan epidermis korteks yang disebut emergensi untuk perlindungan.',
    characteristics: ['Bunga Harum', 'Batang Berduri Pelindung', 'Fotosintesis'],
  },
  {
    word: 'meja',
    category: 'makhluk_mati',
    subCategory: 'Perabot Permukaan Datar',
    funFact: 'Meja kerja dengan tinggi ideal sekitar 72–75 cm dirancang untuk menjaga postur siku dan pundak tetap rileks saat beraktivitas.',
    characteristics: ['Permukaan Datar Berkaki', 'Benda Kayu/Besi', 'Benda Mati'],
  },
  {
    word: 'mobil',
    category: 'makhluk_mati',
    subCategory: 'Kendaraan Roda Empat',
    funFact: 'Satu unit mobil modern tersusun atas sekitar 30.000 komponen suku cadang terpisah yang dirakit secara presisi.',
    characteristics: ['Kendaraan Bermotor', 'Benda Buatan Industri', 'Tidak Bernapas'],
  },
  {
    word: 'magma',
    category: 'makhluk_mati',
    subCategory: 'Batuan Cair Bersuhu Tinggi',
    funFact: 'Magma adalah lelehan batuan pijar bersuhu antara 700°C hingga 1.300°C yang berada di bawah kerak bumi.',
    characteristics: ['Batuan Cair Pijar', 'Suhu Sangat Tinggi', 'Unsur Abiotik Geologi'],
  },
  {
    word: 'minyak',
    category: 'makhluk_mati',
    subCategory: 'Zat Cair Hidrokarbon',
    funFact: 'Minyak bumi terbentuk dari sisa-sisa jasad renik plankton laut purba yang terperangkap dan tertekan selama ratusan juta tahun di perut bumi.',
    characteristics: ['Cairan Hidrokarbon', 'Tidak Larut dalam Air', 'Abiotik Bahan Bakar'],
  },

  // ================= N =================
  {
    word: 'nyamuk',
    category: 'makhluk_hidup',
    subCategory: 'Serangga Parasit Darah',
    funFact: 'Hanya nyamuk betina yang menghisap darah mamalia untuk memperoleh protein pembentukan telur; nyamuk jantan hanya meminum nektar bunga.',
    characteristics: ['Serangga Bersayap Dua', 'Belalai Penghisap (Probosis)', 'Metamorfosis Sempurna'],
  },
  {
    word: 'nuri',
    category: 'makhluk_hidup',
    subCategory: 'Burung Paruh Bengkok Tropis',
    funFact: 'Burung nuri memiliki struktur vokal siring yang unik sehingga dapat menirukan ucapan kata manusia dengan sangat artikulatif.',
    characteristics: ['Bulu Warna Cerah', 'Paruh Bengkok Kuat', 'Sangat Cerdas'],
  },
  {
    word: 'nanas',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Buah Majemuk',
    funFact: 'Satu buah nanas sebenarnya merupakan gabungan dari lusinan buah beri kecil individu yang menyatu bersama di sekitar poros bunga utama.',
    characteristics: ['Buah Majemuk Tropis', 'Mengandung Enzim Bromelin', 'Fotosintesis'],
  },
  {
    word: 'nilon',
    category: 'makhluk_mati',
    subCategory: 'Polimer Sintetis Serat',
    funFact: 'Nilon adalah serat sintetis murni pertama di dunia yang diciptakan di laboratorium DuPont pada tahun 1935, terkenal ulet dan tahan air.',
    characteristics: ['Serat Sintetis Buatan', 'Tahan Tarikan Kuat', 'Benda Mati'],
  },
  {
    word: 'nikel',
    category: 'makhluk_mati',
    subCategory: 'Logam Transisi Feromagnetik',
    funFact: 'Indonesia merupakan pemilik cadangan tambang nikel terbesar di dunia yang kini menjadi bahan baku utama baterai kendaraan listrik.',
    characteristics: ['Unsur Logam Mengilap (Ni)', 'Tahan Karat & Panas', 'Mineral Abiotik'],
  },

  // ================= O =================
  {
    word: 'orangutan',
    category: 'makhluk_hidup',
    subCategory: 'Kera Besar Endemik Indonesia',
    funFact: 'Orangutan memiliki rentang lengan hingga 2,2 meter dan membagikan lebih dari 97% DNA genetik yang identik dengan manusia.',
    characteristics: ['Primata Arboreal Cerdas', 'Melahirkan & Menyusui', 'Pembuat Sarang Pohon Tiap Sore'],
  },
  {
    word: 'onta',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Berpunuk Gurun',
    funFact: 'Punuk onta bukan berisi air, melainkan cadangan lemak hingga 36 kg yang dapat diubah menjadi energi dan air saat melintasi padang pasir tandus.',
    characteristics: ['Tahan Haus Ekstrem', 'Kelopak Mata Berlapis Tiga', 'Melahirkan'],
  },
  {
    word: 'oksigen',
    category: 'makhluk_mati',
    subCategory: 'Unsur Gas Atmosfer (O2)',
    funFact: 'Gas oksigen menyusun sekitar 21% udara yang kita hirup, sangat dibutuhkan untuk respirasi seluler makhluk hidup.',
    characteristics: ['Gas Tak Berwarna/Berbau', 'Membantu Pembakaran', 'Unsur Abiotik Esensial'],
  },
  {
    word: 'obeng',
    category: 'makhluk_mati',
    subCategory: 'Perkakas Tangan Mekanis',
    funFact: 'Mata obeng dibuat dari baja perkakas paduan vanadium untuk mencegah deformasi puntiran saat mengencangkan sekrup erat.',
    characteristics: ['Alat Perkakas Baja', 'Pemutar Sekrup', 'Benda Tak Hidup'],
  },

  // ================= P =================
  {
    word: 'padi',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Serealia Pangan',
    funFact: 'Tanaman padi adalah makanan pokok bagi lebih dari separuh populasi dunia dan memiliki sistem perakaran serabut yang efisien.',
    characteristics: ['Tanaman Pangan Monokotil', 'Bulir Beras Kaya Karbohidrat', 'Fotosintesis'],
  },
  {
    word: 'paus',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Laut Terbesar',
    funFact: 'Paus biru adalah hewan terbesar yang pernah hidup di bumi; lidahnya saja seberat seekor gajah dan jantungnya sebesar mobil kecil.',
    characteristics: ['Mamalia Laut Raksasa', 'Bernapas dengan Paru-paru', 'Melahirkan & Menyusui'],
  },
  {
    word: 'penyu',
    category: 'makhluk_hidup',
    subCategory: 'Reptil Laut Purba',
    funFact: 'Penyu betina dapat berenang mengarungi ribuan mil samudra dan selalu kembali bertelur di pantai persis tempat ia dulu menetas.',
    characteristics: ['Tempurung Pelindung Karapas', 'Bertelur di Pasir', 'Berdarah Dingin'],
  },
  {
    word: 'paku',
    category: 'makhluk_mati',
    subCategory: 'Benda Logam Pengikat',
    funFact: 'Paku baja menahan dua potong balok kayu bersama melalui gaya gesekan kompresi serat kayu di sepanjang batang paku.',
    characteristics: ['Benda Padat Baja', 'Pengikat Rangka Kayu', 'Benda Mati'],
  },
  {
    word: 'pensil',
    category: 'makhluk_mati',
    subCategory: 'Alat Tulis Grafit',
    funFact: 'Isi pensil bukan timbal beracun, melainkan campuran bubuk grafit murni dan tanah liat lempung yang dipanggang padat.',
    characteristics: ['Alat Tulis Grafit & Kayu', 'Meninggalkan Goresan Karbon', 'Benda Mati'],
  },
  {
    word: 'pasir',
    category: 'makhluk_mati',
    subCategory: 'Material Butiran Geologi',
    funFact: 'Butiran pasir pantai sebagian besar berasal dari pelapukan batuan granit yang kaya mineral kuarsa tahan gesek selama jutaan tahun.',
    characteristics: ['Butiran Batuan Mineral', 'Tidak Bernapas', 'Komponen Abiotik'],
  },
  {
    word: 'piring',
    category: 'makhluk_mati',
    subCategory: 'Alat Makan Keramik/Melamin',
    funFact: 'Piring cekung dirancang untuk menahan kuah makanan menggunakan gravitasi bumi agar tidak tumpah ke meja.',
    characteristics: ['Wadah Makanan Datar', 'Benda Padat Keramik', 'Benda Tak Hidup'],
  },

  // ================= R =================
  {
    word: 'rusa',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Bertanduk Ranting',
    funFact: 'Tanduk rusa (antler) adalah jaringan tulang yang tumbuh paling cepat pada mamalia, dan rontok lalu tumbuh baru setiap tahunnya!',
    characteristics: ['Herbivora Lincah', 'Tanduk Bertunas Ulang', 'Melahirkan'],
  },
  {
    word: 'rayap',
    category: 'makhluk_hidup',
    subCategory: 'Serangga Sosial Pengurai',
    funFact: 'Rayap memiliki protozoa mikroskopis di ususnya yang mampu mencerna serat selulosa kayu mati menjadi energi.',
    characteristics: ['Serangga Berkoloni Ratu', 'Pencerna Kayu', 'Dekomposer'],
  },
  {
    word: 'ranting',
    category: 'makhluk_mati',
    subCategory: 'Bahan Organik Mati (Kering)',
    funFact: 'Ranting pohon yang gugur ke tanah telah berhenti berfotosintesis dan menjadi komponen detritus bagi cacing serta jamur pengurai.',
    characteristics: ['Bagian Kayu Mati Kering', 'Tidak Bermetabolisme', 'Sumber Bahan Organik'],
  },
  {
    word: 'robot',
    category: 'makhluk_mati',
    subCategory: 'Mesin Otomasi Elektronik',
    funFact: 'Meskipun robot humanoid dapat berjalan dan berbicara dengan sensor cerdas, mereka tidak bernapas dan tidak memiliki sel hidup biologis.',
    characteristics: ['Mesin Buatan Elektronik', 'Diprogram Algoritma', 'Benda Mati Modern'],
  },
  {
    word: 'radio',
    category: 'makhluk_mati',
    subCategory: 'Penerima Gelombang Elektromagnetik',
    funFact: 'Radio menangkap modulasi amplitudo (AM) atau modulasi frekuensi (FM) dari udara lalu mengubahnya menjadi gelombang suara yang terdengar.',
    characteristics: ['Perangkat Elektronik Akustik', 'Penerima Gelombang Radio', 'Benda Tak Hidup'],
  },
  {
    word: 'rumah',
    category: 'makhluk_mati',
    subCategory: 'Bangunan Tempat Tinggal',
    funFact: 'Rumah tradisional tahan gempa di nusantara dibangun dengan sambungan pasak kayu fleksibel tanpa paku mati kaku.',
    characteristics: ['Struktur Bangunan Statis', 'Benda Buatan Arsitektur', 'Tidak Bertumbuh'],
  },

  // ================= S =================
  {
    word: 'sapi',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Herbivora Ruminansia',
    funFact: 'Sapi memiliki lambung beruang empat (rumen, retikulum, omasum, dan abomasum) untuk mencerna rumput serat tinggi secara fermentatif.',
    characteristics: ['Melahirkan & Menyusui', 'Lambung Empat Ruang', 'Menghasilkan Susu & Daging'],
  },
  {
    word: 'singa',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Kucing Besar Sosial',
    funFact: 'Singa adalah satu-satunya spesies kucing liar di dunia yang hidup dalam kelompok sosial besar terorganisir (disebut pride).',
    characteristics: ['Karnivora Predator', 'Berdarah Panas', 'Melahirkan'],
  },
  {
    word: 'semut',
    category: 'makhluk_hidup',
    subCategory: 'Serangga Sosial Koloni',
    funFact: 'Seekor semut dapat mengangkat beban hingga 50 kali berat tubuhnya sendiri berkat kekuatan otot eksoskeletonnya yang luar biasa.',
    characteristics: ['Eksoskeleton Kuat', 'Sistem Kasta Ratu & Pekerja', 'Komunikasi Feromon'],
  },
  {
    word: 'sirih',
    category: 'makhluk_hidup',
    subCategory: 'Tanaman Obat Merambat',
    funFact: 'Daun sirih mengandung zat aktif kavikol yang berfungsi sebagai antiseptik alami pembunuh bakteri hingga 5 kali lebih kuat dari fenol.',
    characteristics: ['Tumbuhan Merambat', 'Kaya Antiseptik Alami', 'Fotosintesis'],
  },
  {
    word: 'sepatu',
    category: 'makhluk_mati',
    subCategory: 'Alas Kaki Buatan',
    funFact: 'Sol sepatu olahraga modern menggunakan busa polimer EVA atau bantalan udara bertekanan untuk meredam benturan sendi lutut.',
    characteristics: ['Alas Kaki Pelindung', 'Benda Buatan Karet/Kulit', 'Benda Mati'],
  },
  {
    word: 'sendok',
    category: 'makhluk_mati',
    subCategory: 'Peralatan Makan Cekung',
    funFact: 'Bentuk cekung sendok didasarkan pada bentuk telapak tangan manusia yang ditangkupkan saat meminum air dari sungai zaman purba.',
    characteristics: ['Alat Makan Stainless/Kayu', 'Benda Padat Cekung', 'Tidak Bernapas'],
  },
  {
    word: 'salju',
    category: 'makhluk_mati',
    subCategory: 'Presipitasi Kristal Es Alami',
    funFact: 'Setiap kristal keping salju yang jatuh ke tanah memiliki simetri heksagonal enam sisi yang unik dan hampir tidak pernah ada dua keping yang persis sama.',
    characteristics: ['Kristal Air Beku (Padat)', 'Suhu Di Bawah 0°C', 'Unsur Abiotik Alam'],
  },
  {
    word: 'sepeda',
    category: 'makhluk_mati',
    subCategory: 'Kendaraan Roda Dua Kayuh',
    funFact: 'Sepeda adalah alat transportasi paling efisien energi di bumi; manusia bersepeda membakar energi jauh lebih sedikit per kilometer dibanding berjalan kaki.',
    characteristics: ['Kendaraan Mekanik Kayuh', 'Rangka Logam & Gir Rantai', 'Benda Tak Hidup'],
  },

  // ================= T =================
  {
    word: 'tupai',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Pengerat Lincah',
    funFact: 'Tupai secara tidak sengaja menanam jutaan pohon setiap tahun karena sering lupa di mana mereka mengubur biji kenari dan pohon ek mereka!',
    characteristics: ['Gigi Pengerat Tajam', 'Ekor Tebal Penyeimbang', 'Melahirkan'],
  },
  {
    word: 'teratai',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Air Berbunga Indah',
    funFact: 'Permukaan daun teratai memiliki lapisan nanostruktur lilin mikroskopis sehingga tetesan air dan lumpur tidak pernah bisa menempel (efek lotus).',
    characteristics: ['Tumbuhan Mengapung di Air', 'Daun Bundar Lebar Hidrofobik', 'Fotosintesis'],
  },
  {
    word: 'tiram',
    category: 'makhluk_hidup',
    subCategory: 'Moluska Bivalvia Penghasil Mutiara',
    funFact: 'Tiram menghasilkan mutiara berkilau sebagai mekanisme pertahanan alami untuk membungkus butiran pasir pengiritasi dengan zat nacre berlapis-lapis.',
    characteristics: ['Cangkang Katup Ganda', 'Penyaring Air Laut', 'Menghasilkan Mutiara'],
  },
  {
    word: 'tanah',
    category: 'makhluk_mati',
    subCategory: 'Lapisan Mineral & Fisik Bumi',
    funFact: 'Tanah subur tersusun atas 45% mineral batuan lapuk, 25% air pori, 25% udara, dan 5% bahan organik sisa pelapukan.',
    characteristics: ['Media Tumbuh Abiotik', 'Lapisan Kerak Bumi', 'Tidak Bernapas'],
  },
  {
    word: 'tali',
    category: 'makhluk_mati',
    subCategory: 'Alat Pengikat Pilinan',
    funFact: 'Tali tambang memperoleh kekuatannya dari pilinan searah serat helai benang yang mendistribusikan gaya tarik secara merata.',
    characteristics: ['Benda Fleksibel Panjang', 'Pengikat Buatan', 'Benda Mati'],
  },
  {
    word: 'topi',
    category: 'makhluk_mati',
    subCategory: 'Penutup Kepala Tekstil',
    funFact: 'Topi pelindung surya dibuat dengan tepi lingkar lebar untuk menangkis radiasi sinar ultraviolet matahari langsung mengenai kulit wajah.',
    characteristics: ['Pelindung Kepala dari Panas', 'Bahan Kain/Anyaman', 'Benda Tak Hidup'],
  },
  {
    word: 'timbangan',
    category: 'makhluk_mati',
    subCategory: 'Alat Ukur Massa',
    funFact: 'Timbangan pegas mengukur gaya berat massa menggunakan Hukum Hooke regangan pegas linear.',
    characteristics: ['Instrumen Pengukur Massa', 'Benda Buatan Mekanik', 'Tidak Bertumbuh'],
  },

  // ================= U =================
  {
    word: 'ular',
    category: 'makhluk_hidup',
    subCategory: 'Reptil Karnivora Tanpa Kaki',
    funFact: 'Ular menjulurkan lidah bercabang untuk menangkap molekul bau di udara lalu menempelkannya ke organ Jacobson di langit-langit mulutnya untuk mencium mangsa.',
    characteristics: ['Reptil Bersisik', 'Organ Jacobson Sensor Bau', 'Berganti Kulit Periodik'],
  },
  {
    word: 'udang',
    category: 'makhluk_hidup',
    subCategory: 'Krustasea Air',
    funFact: 'Jantung seekor udang terletak tepat di bagian kepalanya (sefalotoraks), dan cangkangnya kaya akan zat kitin keras.',
    characteristics: ['Krustasea Eksoskeleton', 'Berenang Mundur Cepat', 'Insang Pelindung'],
  },
  {
    word: 'unta',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Gurun Pasir',
    funFact: 'Unta memiliki sel darah merah berbentuk oval unik yang tetap dapat mengalir lancar meski darahnya mengental saat kekurangan air ekstrem.',
    characteristics: ['Sel Darah Merah Oval Fleksibel', 'Kaki Berbantalan Lebar Anti-Amblas', 'Melahirkan'],
  },
  {
    word: 'ubur',
    category: 'makhluk_hidup',
    subCategory: 'Invertebrata Laut (Cnidaria)',
    funFact: 'Tubuh ubur-ubur terdiri dari 95% air dan mereka tidak memiliki otak, jantung, maupun tulang darah sejati.',
    characteristics: ['Tentakel Penyengat Nematosista', 'Bercahaya Bioluminesensi', 'Hewan Laut Sederhana'],
  },
  {
    word: 'udara',
    category: 'makhluk_mati',
    subCategory: 'Campuran Gas Atmosfer',
    funFact: 'Udara di bumi terdiri atas 78% gas nitrogen, 21% gas oksigen, 0,9% argon, dan gas-gas mulia lainnya.',
    characteristics: ['Fluida Gas Tak Terlihat', 'Menekan ke Segala Arah', 'Unsur Abiotik Pokok'],
  },
  {
    word: 'uang',
    category: 'makhluk_mati',
    subCategory: 'Alat Tukar Finansial',
    funFact: 'Kertas uang rupiah dibuat dari serat kapas abaka berkualitas tinggi agar tidak mudah koyak dan tahan dilipat puluhan ribu kali.',
    characteristics: ['Media Transaksi', 'Kertas Serat / Koin Logam', 'Benda Mati'],
  },
  {
    word: 'ubin',
    category: 'makhluk_mati',
    subCategory: 'Lantai Keramik/Granit',
    funFact: 'Ubin porselen dibuat dari lempung kaolin murni yang dipres dengan tekanan hidrolik ribuan ton per meter persegi.',
    characteristics: ['Penutup Lantai Keras', 'Kedap Air', 'Benda Tak Hidup'],
  },

  // ================= W =================
  {
    word: 'walet',
    category: 'makhluk_hidup',
    subCategory: 'Burung Penerbang Cepat',
    funFact: 'Sarang burung walet yang bernilai tinggi dibuat murni dari air liur kental burung walet yang mengeras di dinding gua gelap.',
    characteristics: ['Ekolokasi di Gua Gelap', 'Sarang Air Liur Alami', 'Penerbang Akrobatik'],
  },
  {
    word: 'wotel', // common typo tolerance or word
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Umbi Akar (Wortel)',
    funFact: 'Wortel kaya akan senyawa beta-karoten yang diubah tubuh manusia menjadi vitamin A untuk kesehatan retina mata.',
    characteristics: ['Umbi Akar Jingga', 'Kaya Vitamin A', 'Tumbuhan Dua Tahunan'],
  },
  {
    word: 'wortel',
    category: 'makhluk_hidup',
    subCategory: 'Tumbuhan Sayuran Akar',
    funFact: 'Wortel berwarna jingga cerah karena pigmen beta-karoten yang bertindak sebagai antioksidan pelindung sel tanaman.',
    characteristics: ['Umbi Akar Bergizi', 'Fotosintesis Daun Hijau', 'Memerlukan Air & Tanah'],
  },
  {
    word: 'wajan',
    category: 'makhluk_mati',
    subCategory: 'Alat Masak Logam Penggoreng',
    funFact: 'Wajan besi cor (cast iron) dapat menahan panas merata untuk waktu yang sangat lama dan tahan banting puluhan tahun.',
    characteristics: ['Peralatan Dapur Logam', 'Penghantar Kalor Masak', 'Benda Tak Hidup'],
  },
  {
    word: 'wadah',
    category: 'makhluk_mati',
    subCategory: 'Tempat Penampung Barang',
    funFact: 'Wadah kedap udara memanfaatkan cincin segel silikon untuk menghalangi oksigen masuk yang dapat memicu pembusukan makanan.',
    characteristics: ['Penampung Benda', 'Bahan Polimer/Kaca', 'Benda Mati'],
  },

  // ================= Y =================
  {
    word: 'yuyu',
    category: 'makhluk_hidup',
    subCategory: 'Kepiting Air Tawar',
    funFact: 'Yuyu adalah jenis kepiting air tawar yang sering membuat lubang persembunyian di pematang sawah dan tepian sungai bersih.',
    characteristics: ['Krustasea Air Tawar', 'Sepasang Capit Pelindung', 'Bernapas dengan Insang Lembap'],
  },
  {
    word: 'yoyo',
    category: 'makhluk_mati',
    subCategory: 'Mainan Klasik Giroskopik',
    funFact: 'Yoyo berputar dan dapat kembali naik ke tangan pemain berkat hukum kekekalan momentum sudut rotasi poros putar.',
    characteristics: ['Alat Mainan Fisika', 'Prinsip Inersia Putar', 'Benda Mati'],
  },

  // ================= Z =================
  {
    word: 'zebra',
    category: 'makhluk_hidup',
    subCategory: 'Mamalia Kuda Belang Afrika',
    funFact: 'Pola garis belang hitam-putih pada zebra terbukti membingungkan mata lalat penggigit tsetse sehingga jarang digigit serangga parasit!',
    characteristics: ['Herbivora Savana', 'Belang Unik Tiap Individu', 'Melahirkan'],
  },
  {
    word: 'zink',
    category: 'makhluk_mati',
    subCategory: 'Unsur Logam Seng (Zn)',
    funFact: 'Zink digunakan untuk proses galvanisasi, yaitu melapisi besi dan baja agar terhindar dari perkaratan akibat udara lembap.',
    characteristics: ['Unsur Logam (Seng)', 'Anti Karat Pelapis', 'Benda Abiotik'],
  },
  {
    word: 'zipper',
    category: 'makhluk_mati',
    subCategory: 'Ritsleting Pengunci Pakaian',
    funFact: 'Ritsleting mengaitkan dua pita gigi bergantian menggunakan penggeser berbentuk baji berbentuk Y secara sangat presisi.',
    characteristics: ['Mekanisme Kaitan Logam/Plastik', 'Pengunci Baju', 'Benda Mati'],
  },
];

// Helper dictionaries for fast lookup
const WORD_MAP = new Map<string, BioWord>();
WORD_BANK.forEach((entry) => {
  WORD_MAP.set(entry.word.toLowerCase().trim(), entry);
});

// Group words by starting letter
const WORDS_BY_LETTER = new Map<string, BioWord[]>();
WORD_BANK.forEach((entry) => {
  const firstLetter = entry.word[0].toLowerCase();
  if (!WORDS_BY_LETTER.has(firstLetter)) {
    WORDS_BY_LETTER.set(firstLetter, []);
  }
  WORDS_BY_LETTER.get(firstLetter)!.push(entry);
});

/**
 * Check if a word exists in the curated bank
 */
export function findWordInBank(word: string): BioWord | undefined {
  return WORD_MAP.get(word.toLowerCase().trim());
}

/**
 * Get all available words starting with a character
 */
export function getAvailableWordsStartingWith(
  char: string,
  categoryFilter?: ItemCategory,
  usedWords: Set<string> = new Set()
): BioWord[] {
  const list = WORDS_BY_LETTER.get(char.toLowerCase()) || [];
  return list.filter((item) => {
    if (categoryFilter && item.category !== categoryFilter) return false;
    if (usedWords.has(item.word.toLowerCase())) return false;
    return true;
  });
}

/**
 * Pick a random word from the bank
 */
export function pickRandomWord(
  categoryFilter?: ItemCategory,
  startingChar?: string,
  usedWords: Set<string> = new Set()
): BioWord | null {
  let pool: BioWord[] = [];
  if (startingChar) {
    pool = getAvailableWordsStartingWith(startingChar, categoryFilter, usedWords);
  } else {
    pool = WORD_BANK.filter((item) => {
      if (categoryFilter && item.category !== categoryFilter) return false;
      if (usedWords.has(item.word.toLowerCase())) return false;
      return true;
    });
  }

  if (pool.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

/**
 * 8 Characteristics of Living Things according to Indonesian Junior High Curriculum (IPA SMP)
 */
export interface LifeTrait {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  livingExample: string;
  nonLivingContrast: string;
}

export const CIRI_MAKHLUK_HIDUP: LifeTrait[] = [
  {
    id: 'bernapas',
    name: '1. Bernapas (Respirasi)',
    nameEn: 'Respiration',
    description: 'Menghirup oksigen untuk membakar makanan menjadi energi dan menghembuskan karbondioksida.',
    livingExample: 'Ikan bernapas dengan insang, burung dengan paru-paru & pundi hawa, tumbuhan melalui stomata daun.',
    nonLivingContrast: 'Batu, air, dan komputer tidak membutuhkan oksigen dan tidak melakukan pertukaran gas respirasi.',
  },
  {
    id: 'nutrisi',
    name: '2. Memerlukan Makanan & Nutrisi',
    nameEn: 'Nutrition',
    description: 'Membutuhkan asupan energi untuk menjaga fungsi sel, beraktivitas, dan memperbaiki sel tubuh yang rusak.',
    livingExample: 'Tumbuhan menyerap mineral dan berfotosintesis; hewan memakan tumbuhan atau hewan lain.',
    nonLivingContrast: 'Meja atau mobil membutuhkan bahan bakar atau daya baterai buatan, bukan metabolisme organik biologis.',
  },
  {
    id: 'bergerak',
    name: '3. Bergerak',
    nameEn: 'Locomotion / Movement',
    description: 'Kemampuan berpindah tempat (gerak aktif hewan) atau pergerakan bagian tubuh mengikuti rangsang (gerak pasif tumbuhan).',
    livingExample: 'Kuda berlari dengan kaki, bunga matahari bergerak membelok menghadap datangnya sinar matahari.',
    nonLivingContrast: 'Batu hanya bergerak jika ditendang atau terbawa air mengalir oleh gaya luar semata.',
  },
  {
    id: 'tumbuh',
    name: '4. Tumbuh & Berkembang',
    nameEn: 'Growth & Development',
    description: 'Pertambahan ukuran, massa, dan volume sel tubuh yang tidak dapat balik (irreversibel) serta pematangan organ.',
    livingExample: 'Biji kecambah tumbuh menjadi pohon rimbun; anak kucing tumbuh menjadi kucing dewasa.',
    nonLivingContrast: 'Gunting atau pensil ukurannya tidak akan membesar secara mandiri; malah mengecil bila diasah.',
  },
  {
    id: 'reproduksi',
    name: '5. Berkembang Biak (Reproduksi)',
    nameEn: 'Reproduction',
    description: 'Kemampuan menghasilkan keturunan sejenis untuk melestarikan populasinya dari kepunahan.',
    livingExample: 'Ayam bertelur, sapi melahirkan anak, pohon pisang menghasilkan tunas baru dari rizoma.',
    nonLivingContrast: 'Cermin atau batu tidak dapat beranak pinak atau membelah diri menjadi cermin-cermin baru.',
  },
  {
    id: 'iritabilitas',
    name: '6. Peka terhadap Rangsang (Iritabilitas)',
    nameEn: 'Irritability / Response to Stimuli',
    description: 'Kemampuan merespons rangsangan dari luar berupa cahaya, sentuhan, suhu, gravitasi, atau suara.',
    livingExample: 'Daun putri malu mengatup cepat saat disentuh; pupil mata mengecil saat terkena sorotan lampu silau.',
    nonLivingContrast: 'Piring tidak merasakan sakit atau kaget saat dipukul; piring hanya pecah karena tekanan mekanis.',
  },
  {
    id: 'ekskresi',
    name: '7. Mengeluarkan Zat Sisa (Ekskresi)',
    nameEn: 'Excretion',
    description: 'Membuang produk sisa metabolisme yang beracun bila ditimbun di dalam tubuh.',
    livingExample: 'Manusia berkeringat dan mengeluarkan urin; tumbuhan menggugurkan garam berlebih dan transpirasi air.',
    nonLivingContrast: 'Benda mati tidak memproduksi sisa metabolisme internal biologis.',
  },
  {
    id: 'adaptasi',
    name: '8. Menyesuaikan Diri (Adaptasi)',
    nameEn: 'Adaptation',
    description: 'Penyesuaian morfologi, fisiologi, atau tingkah laku agar mampu bertahan hidup di lingkungan habitatnya.',
    livingExample: 'Kaktus berdaun duri dan batang tebal berlilin untuk menahan air di gurun pasir tandus.',
    nonLivingContrast: 'Pasir atau besi tidak memiliki mekanisme pertahanan adaptif terhadap perubahan iklim.',
  },
];
