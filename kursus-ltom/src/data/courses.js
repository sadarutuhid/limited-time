// Semua isi kursus ada di file ini. Untuk menambah kursus, tambahkan satu objek lagi ke daftar "courses".
const L = (id, module, title, body, extra = {}) => ({ id, type: "lesson", module, title, body, ...extra });
const Q = (id, module, title, questions) => ({ id, type: "quiz", module, title, questions });

export const courses = [
  {
    id: "ltom",
    badge: "PAD",
    color: "#1f6f5c",
    title: "Limited-time Optimization Method",
    short: "3 langkah membangun satu kebiasaan kecil tanpa harus meluangkan waktu baru.",
    description:
      "Kursus untuk kamu yang hidupnya sudah penuh tetapi tetap ingin berkembang. Kamu akan merancang satu Limited-time Action dengan kerangka PAD (Point, Action, Development), mengujinya lewat 7 Point Test, lalu mengoptimalkannya.",
    instructor: "Fizu (Sadarutuh.id)",
    category: "Pengembangan Diri",
    level: "Pemula",
    minutes: 45,
    items: [
      L("l1", "Pengantar", "Sebelum Kita Mulai", [
        "LTOM bukan program yang meminta kamu menjadi lebih sibuk. Kita tidak mencari waktu baru, tetapi melihat waktu dan rutinitas yang sudah kamu punya, lalu menyisipkan satu tindakan kecil di dalamnya.",
        "Ada 3 aturan. Pertama, jangan langsung mengubah banyak hal: satu perubahan kecil sudah cukup. Kedua, jangan meremehkan tindakan yang terlalu kecil: tujuan pertama adalah membuatnya bisa dilakukan. Ketiga, kamu tidak harus sempurna: kalau suatu hari terlewat, lihat apa yang membuatnya sulit, perbaiki, lalu coba lagi.",
      ], { key: "Kamu tidak harus menjeda hidup untuk berkembang. Grow as you go." }),
      L("l2", "Pengantar", "Science + Personal Experience", [
        "Metode ini lahir dari pertanyaan sederhana: bagaimana tetap berkembang di tengah hidup yang sudah penuh? Daripada mencari waktu baru, gunakan sesuatu yang sudah pasti terjadi setiap hari, lalu sisipkan tindakan yang sangat kecil di sana.",
        "Konsep psikologi Implementation Intention (Peter Gollwitzer) menghubungkan situasi dan tindakan: “Ketika X terjadi, saya akan melakukan Y.” Contoh: bukan “Saya mau lebih rajin membaca”, tetapi “Setelah saya duduk di kereta, saya akan membaca satu paragraf.”",
        "Penanda saja belum cukup, tindakannya juga harus kecil: lima squat, bukan satu jam olahraga. Dari sinilah lahir PAD Framework: Point (di mana tindakan ditempelkan), Action (tindakan terkecil), Development (untuk apa dilakukan). Metode ini bukan jaminan kebiasaan pasti terbentuk, jadi kita akan mengujinya di kehidupan nyata.",
      ], { key: "Satu Point, satu Action, satu Development." }),
      L("l3", "Pengantar", "Back to Reality", [
        "Kebiasaan terbentuk ketika perilaku berulang dalam konteks yang relatif sama, sehingga konteks itu menjadi pemicu. Perilaku lama terasa ringan karena sudah punya jalurnya sendiri.",
        "Kebiasaan baru terasa berat karena butuh ingat, mulai, dan menyiapkan sesuatu, apalagi saat lelah. Ada jarak antara niat (intention) dan perilaku (behavior). Hari pertama semangat, hari ketiga mulai berat, lalu kita menyimpulkan “saya tidak konsisten”. Padahal masalahnya sering ada pada desain kebiasaan yang terlalu jauh dari kehidupanmu.",
        "Solusinya bukan kemauan yang lebih besar, melainkan cara memulai yang lebih mudah: tempelkan tindakan kecil pada momen yang sudah familiar, misalnya “Setelah menyikat gigi pagi, saya melakukan lima squat.”",
      ]),
      Q("q1", "Pengantar", "Cek Pemahaman: Pengantar", [
        { q: "Apa pendekatan utama LTOM untuk menemukan waktu berkembang?", options: ["Mencari waktu kosong 30 menit setiap hari", "Memanfaatkan rutinitas yang sudah ada dan menyisipkan tindakan kecil", "Mengurangi jam kerja", "Membuat jadwal baru yang ketat"], answer: 1 },
        { q: "Manakah contoh Implementation Intention yang baik?", options: ["Saya akan lebih rajin membaca", "Saya harus olahraga lebih banyak", "Setelah duduk di kereta, saya akan membaca satu paragraf", "Saya akan belajar kalau sudah senggang"], answer: 2 },
        { q: "Dalam PAD Framework, huruf D berarti?", options: ["Disiplin", "Development", "Durasi", "Deadline"], answer: 1 },
      ]),
      L("l4", "Gameplay", "Cara Mengikuti Program", [
        "Pass 1: baca seluruh course dalam 30–60 menit untuk memahami gambaran besarnya, tanpa perlu mengisi worksheet. Alurnya: Design → Build → Do → Test → Optimize.",
        "Pass 2: terapkan ke kehidupanmu dengan prinsip Baca → Isi → Lakukan. Isi worksheet berdasarkan rutinitasmu yang sebenarnya, bukan rutinitas ideal, dan langsung bawa Action ke kehidupan nyata.",
        "Course bisa dipahami dalam satu sesi, tetapi perubahannya dibawa ke kehidupan sehari-hari.",
      ], { key: "Jangan kejar progress bar. Pahami keseluruhannya, praktikkan satu per satu." }),
      L("l5", "Gameplay", "Cukup Satu Kebiasaan", [
        "Selama program ini fokusmu hanya 1 Point → 1 Action → 1 Development. Semakin banyak yang diubah sekaligus, semakin besar beban yang harus diingat dan dipertahankan.",
        "Kita ingin tahu: apakah Point-nya benar-benar muncul, apakah Action-nya cukup ringan, dan apakah bisa diulang saat sibuk. Kalau Action terasa terlalu sederhana, itu bagus: memang itu yang kita cari.",
        "Jangan tambah kebiasaan lain dulu. Uji dahulu, lalu optimalkan: Action bisa diperkecil, Point dipindahkan, atau kebiasaannya dihentikan.",
      ]),
      L("l6", "Gameplay", "Kapan Kamu Dianggap Selesai?", [
        "Selesai bukan berarti semua materi sudah dibaca, tetapi ketika kamu membawa metode ini ke kehidupan nyata. Setidaknya kamu sudah: (1) menemukan 1 Point, (2) menentukan 1 Action, (3) memilih 1 Development, (4) membuat 1 Limited-time Action, dan (5) menjalankan 7 Point Test.",
        "Setelah itu kamu mengoptimalkan dengan salah satu keputusan: KEEP, SHRINK, MOVE, atau DROP. Definisi selesainya: Design → Build → Do → 7 Point Test → Optimize.",
      ], { key: "Kita tidak menguji dirimu. Kita menguji apakah kebiasaan ini realistis untuk hidupmu." }),
      Q("q2", "Gameplay", "Cek Pemahaman: Gameplay", [
        { q: "Kapan kamu dianggap menyelesaikan program ini?", options: ["Setelah membaca semua materi", "Setelah memahami Point, Action, dan Development", "Setelah membawa metode ke kehidupan nyata dan mengujinya", "Setelah progress bar mencapai 100%"], answer: 2 },
        { q: "Berapa kebiasaan yang dibangun selama program?", options: ["Satu", "Tiga", "Tujuh", "Sebanyak mungkin"], answer: 0 },
      ]),
      L("l7", "Design", "Audit Your Routine", [
        "Cukup audit 1 hari yang mewakili kehidupanmu, dari pagi sampai malam. Tulis gambaran besarnya, misalnya 06.00–07.00 bersiap dan sarapan, 07.00–08.30 perjalanan ke kantor, 09.00–12.00 kerja. Tidak perlu mencatat tiap 10 menit.",
        "Lalu cari momen yang sering terjadi, mudah dikenali, relatif stabil, atau berupa transisi antar aktivitas: setelah bangun tidur, setelah sarapan, setelah duduk di kendaraan, setelah membuka laptop, setelah sampai rumah, atau sebelum tidur. Ini adalah calon Point-mu.",
      ], { key: "Kita bukan mencari waktu kosong. Kita mencari momen yang sudah ada." }),
      L("l8", "Design", "Development: Pilih Satu Arah", [
        "LTOM melihat perkembangan diri lewat empat area: Olahraga (tubuh dan kebugaran), Olahrasa (kesadaran emosi dan hubungan), Olahpikir (pengetahuan dan keterampilan), serta Olahhati (karakter, nilai, dan spiritual).",
        "Gunakan assessment Development Compass untuk melihat area yang paling butuh perhatian, lalu pilih satu fokus. Tanyakan: “Kalau hanya boleh mengembangkan satu bagian dari diri saya sekarang, apa yang paling berarti?” Cari yang paling relevan, bukan yang paling sempurna.",
      ], { link: { label: "Unduh Development Compass", url: "https://drive.google.com/file/d/1OGwOCn0c-hbj-gQCY77-JQ5GqQ7TUcIQ/view?pli=1" } }),
      L("l9", "Design", "Point: Rumah untuk Kebiasaanmu", [
        "Pertemukan hasil audit dengan Development yang kamu pilih: di momen mana ia bisa masuk ke kehidupanmu? Misalnya Olahpikir → Copywriting, dengan Point “setelah duduk di kereta saat berangkat kerja”.",
        "Point bukan sekadar jam. “07.30” hanya waktu, sedangkan “setelah duduk di kereta” adalah momen yang bisa dikenali. Point yang baik cukup sering muncul, mudah dikenali, stabil, dan memungkinkan Action dilakukan setelahnya.",
      ], { key: "Pilih Point yang benar-benar terjadi, bukan yang terlihat ideal." }),
      L("l10", "Design", "Action: Simplify, Small, Short", [
        "Kesalahan umum adalah memilih Action yang terlalu besar, seperti belajar copywriting 1 jam setiap hari. Gunakan prinsip Simplify (hilangkan langkah tak perlu), Small (kecilkan ukuran), dan Short (singkatkan durasi). Hasilnya: “membaca satu konsep copywriting”.",
        "Uji Action-mu: apakah kamu tahu persis apa yang harus dilakukan, cukup kecil untuk dilakukan saat lelah, tanpa persiapan rumit, dan bisa langsung dimulai saat Point muncul? Kalau belum yakin, kecilkan lagi.",
      ]),
      L("l11", "Design", "Build Your Limited-time Action", [
        "Gabungkan ketiganya dengan formula: Setelah [Point], saya akan [Action] untuk mengembangkan [Development].",
        "Contoh: “Setelah menyikat gigi pagi, saya akan melakukan lima squat untuk mengembangkan kebugaran tubuh.” Gunakan Micro Action Canvas untuk menyusun satu Limited-time Action saja.",
        "Checkpoint DESIGN: kamu sudah punya 1 Development, 1 Point, 1 Action, dan 1 Limited-time Action.",
      ], { link: { label: "Buka Micro Action Canvas", url: "https://drive.google.com/file/d/1A8Ml4C1vVL5wJaYKBtwoWupuouL8wrJC/view" } }),
      Q("q3", "Design", "Cek Pemahaman: Design", [
        { q: "Apa yang dicari saat Audit Your Routine?", options: ["Waktu kosong terbanyak", "Momen yang sudah ada dan stabil dalam rutinitas", "Aktivitas yang membuang waktu", "Jadwal ideal"], answer: 1 },
        { q: "Manakah Limited-time Action yang sesuai formula?", options: ["Saya akan lebih sehat", "Setiap hari jam 7 saya olahraga 1 jam", "Setelah menyikat gigi pagi, saya melakukan lima squat untuk mengembangkan kebugaran tubuh", "Saya ingin rajin berolahraga"], answer: 2 },
        { q: "Prinsip untuk mengecilkan Action adalah?", options: ["Simplify, Small, Short", "Plan, Act, Review", "Read, Write, Repeat", "Start, Stop, Continue"], answer: 0 },
      ]),
      L("l12", "Practice", "Build dan Do", [
        "Sebelum mulai, cek 4 hal: Point-nya jelas, Action-nya kecil, persiapannya ringan, dan tetap masuk akal ketika lelah. Tanyakan: “Apakah saya bisa melakukan ini saat hidup sedang tidak ideal?”",
        "Saat Point muncul, langsung lakukan Action tanpa menunggu mood atau waktu luang. Kalau terlewat, jangan menyimpulkan kamu tidak konsisten. Cari tahu apa yang membuatnya sulit: Point tidak selalu terjadi, Action masih berat, persiapan terlalu banyak, atau ada gangguan.",
      ]),
      L("l13", "Practice", "7 Point Test", [
        "Jangan uji dirimu, uji rancanganmu. 7 Point bukan 7 hari, tetapi 7 kali Point benar-benar terjadi. Kalau Point-nya “setelah duduk di kereta”, hitung setiap kesempatan itu muncul.",
        "Gunakan siklus D.O.C.: Do (lakukan Action), Observe (apa yang mudah, berat, atau membuatmu melewatkannya), Correct (kecilkan Action, pindahkan Point, atau kurangi persiapan). Catat singkat di 7 Point Tracker.",
      ], { link: { label: "Buka 7 Point Tracker", url: "https://drive.google.com/file/d/1po77DrH-QuahVUtVNCMeAYoDbQCCv9kp/view?usp=drive_link" } }),
      L("l14", "Practice", "Optimize dan Langkah Selanjutnya", [
        "Setelah 7 Point, pilih satu keputusan. KEEP: pertahankan karena sudah cocok. SHRINK: perkecil Action yang masih berat, misalnya 1 halaman menjadi 1 paragraf. MOVE: pindahkan Point yang tidak stabil. DROP: hentikan jika sudah tidak relevan. Drop bukan gagal, melainkan keputusan berdasarkan apa yang kamu pelajari.",
        "Course ini selesai, tetapi perjalananmu belum. Bawa satu perubahan kecilmu ke kehidupan nyata, sedikit demi sedikit. 1% setiap hari.",
      ], { key: "Kamu tidak butuh rancangan yang sempurna, tetapi rancangan yang bisa masuk ke hidupmu lalu terus diperbaiki." }),
      Q("q4", "Practice", "Cek Pemahaman: Practice", [
        { q: "Apa arti 7 Point Test?", options: ["Menjalankan Action 7 hari berturut-turut", "Menjalankan Action sampai Point terjadi 7 kali", "Membaca materi 7 kali", "Menunggu 7 minggu"], answer: 1 },
        { q: "Point sering terlewat, padahal Action-nya cocok. Keputusan yang tepat?", options: ["KEEP", "SHRINK", "MOVE", "DROP"], answer: 2 },
      ]),
    ],
  },
];
