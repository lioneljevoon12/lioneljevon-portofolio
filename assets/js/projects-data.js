/**
 * Centralized Projects Data for Lionel Jevon's Portfolio
 * 19 Projects across Web, Mobile, and Desktop & CLI
 * Verified directly against GitHub repositories & actual source code.
 */

const PROJECTS_DATA = [
  {
    id: "baktinusantara",
    title: "BaktiNusantara — KKN Matching Platform",
    category: "web",
    categoryLabel: { id: "Aplikasi Web", en: "Web Application" },
    context: "competition",
    contextLabel: { id: "Kompetisi Internasional", en: "International Competition" },
    award: "Finalist — Gayatama 5 International Web Technologies Competition 2026",
    status: "Featured",
    tech: ["Next.js", "TypeScript", "Laravel (PHP)", "Python", "Haversine Algorithm", "Tailwind CSS", "MySQL"],
    tags: ["Website", "Next.js", "TypeScript", "Laravel", "Python", "Haversine", "Competition", "Team"],
    summary: {
      id: "Platform pencocokan KKN cerdas berbasis algoritma Haversine dan AI untuk optimasi penempatan mahasiswa.",
      en: "Intelligent community service (KKN) matching platform utilizing Haversine algorithm and AI for optimal placement."
    },
    description: {
      id: "BaktiNusantara dikembangkan bersama Tim Memasak Bersama Gayatama (MBG) untuk kompetisi Gayatama 5. Frontend dibangun dengan Next.js App Router & TypeScript, sedangkan backend ditenagai Laravel (PHP) dengan modul kalkulasi Haversine dan skrip Python untuk pencocokan kompetensi mahasiswa dengan kriteria desa.",
      en: "BaktiNusantara was built with Team Memasak Bersama Gayatama (MBG) for the Gayatama 5 competition. The frontend is engineered with Next.js App Router and TypeScript, coupled with a robust Laravel (PHP) REST backend utilizing Haversine distance computations and Python algorithms to match student competencies with village needs."
    },
    keyFeatures: {
      id: [
        "Kalkulasi jarak presisi antar lokasi desa dan kampus dengan formula Haversine",
        "Algoritma AI pencocokan minat, keahlian mahasiswa, dan profil kebutuhan desa",
        "Frontend modern berbasis Next.js App Router, TypeScript, dan Tailwind CSS",
        "Dashboard komprehensif untuk pengelola KKN dan peserta mahasiswa"
      ],
      en: [
        "Precision distance calculation between university and village coordinates using Haversine formula",
        "AI matching algorithm scoring student competencies against village requirements",
        "Modern frontend engineered with Next.js App Router, TypeScript, and Tailwind CSS",
        "Comprehensive dashboard for university administrators and participating students"
      ]
    },
    github: "https://github.com/NandoAbdillah/GayatamaWeb",
    demo: null,
    image: "assets/img/portfolio/portfolio-11.webp"
  },
  {
    id: "goodang",
    title: "Goodang — AI Warehouse Management System",
    category: "web",
    categoryLabel: { id: "Aplikasi Web & Mobile", en: "Web & Mobile Ecosystem" },
    context: "internship",
    contextLabel: { id: "Industri / Magang", en: "Industry Internship" },
    award: null,
    status: "Featured",
    tech: ["Laravel (PHP)", "Vue.js", "Flutter (Dart)", "Python", "MySQL", "REST API"],
    tags: ["Website", "Mobile", "Laravel", "Vue.js", "Flutter", "Python", "AI Chatbot", "Internship"],
    summary: {
      id: "Sistem manajemen pergudangan terpadu dengan integrasi AI Chatbot untuk asisten inventaris dan POS.",
      en: "Unified warehouse management system featuring an intelligent AI Chatbot for stock queries and integrated POS."
    },
    description: {
      id: "Sistem informasi pergudangan yang dikembangkan selama menjalani program magang Software Engineer di CV Hexa Integra Mandiri IT Workshop. Arsitektur backend dibangun dengan Laravel (PHP), dashboard analitik web menggunakan Vue.js, aplikasi kurir mobile dengan Flutter (Dart), serta modul chatbot berbasis Python.",
      en: "Enterprise warehouse system developed during my Software Engineer Internship at CV Hexa Integra Mandiri IT Workshop. Features a Laravel (PHP) backend, Vue.js web analytics dashboard, Flutter (Dart) companion mobile app, and a dedicated Python-powered AI chatbot assistant."
    },
    keyFeatures: {
      id: [
        "Chatbot Python interaktif untuk query ketersediaan stok barang dan saran restock",
        "Manajemen multi-warehouse, pelacakan SKU, dan pencatatan mutasi barang",
        "Dashboard web analitik inventaris berbasis Vue.js dan Laravel",
        "Aplikasi mobile kurir dan staf gudang lapangan berbasis Flutter"
      ],
      en: [
        "Interactive Python chatbot answering real-time stock availability and restock alerts",
        "Multi-warehouse inventory management, SKU tracking, and goods transfer logs",
        "Web analytics dashboard powered by Vue.js and Laravel REST APIs",
        "Companion mobile app for warehouse staff and field couriers built with Flutter"
      ]
    },
    github: "https://github.com/lioneljevoon12/Goodang",
    demo: null,
    image: "assets/img/portfolio/portfolio-4.webp"
  },
  {
    id: "puredrop",
    title: "PureDrop — IoT Smart Water Dispenser",
    category: "mobile",
    categoryLabel: { id: "Mobile & IoT", en: "Mobile & IoT Ecosystem" },
    context: "personal",
    contextLabel: { id: "Inovasi IoT & Hardware", en: "IoT & Hardware Innovation" },
    award: null,
    status: "Featured",
    tech: ["Flutter (Dart)", "ESP32 (C++)", "Firebase", "REST API", "Cloud Telemetry"],
    tags: ["Mobile", "Flutter", "ESP32", "C++", "IoT", "Firebase", "Team"],
    summary: {
      id: "Ekosistem smart water dispenser dengan aplikasi mobile Flutter dan telemetri IoT ESP32 secara real-time.",
      en: "Smart water dispenser ecosystem with a Flutter mobile app and real-time ESP32 IoT telemetry."
    },
    description: {
      id: "PureDrop adalah ekosistem dispenser air minum pintar terintegrasi IoT. Menggabungkan hardware mikrokontroler ESP32 dengan sensor ultrasonik dan TDS yang diprogram dalam C++. Telemetri dikirim ke cloud Firebase dan dipantau pengguna secara langsung melalui aplikasi mobile Flutter.",
      en: "PureDrop is an integrated smart drinking water dispensing solution powered by IoT. Combining an ESP32 microcontroller with ultrasonic and TDS water quality sensors programmed in C++, telemetry streams to Firebase and is monitored in real-time via a Flutter mobile application."
    },
    keyFeatures: {
      id: [
        "Monitoring ketinggian air dan deteksi galon habis secara real-time",
        "Sensor kejernihan & TDS untuk memastikan higienitas air minum",
        "Aplikasi mobile Flutter untuk transaksi dan riwayat penggunaan",
        "Integrasi sistem remote dispenser control berbasis cloud"
      ],
      en: [
        "Real-time water level tracking and automated low-volume alerts",
        "TDS and water clarity sensor monitoring for hygiene assurance",
        "Intuitive Flutter mobile interface for transactions and usage logs",
        "Cloud-based remote hardware control and telemetry dashboard"
      ]
    },
    github: "https://github.com/lioneljevoon12/puredrop-mobile-app",
    demo: "https://puredrop.cloud",
    image: "assets/img/portfolio/portfolio-8.webp"
  },
  {
    id: "structify",
    title: "Structify — Algorithm & Data Structure Platform",
    category: "web",
    categoryLabel: { id: "Aplikasi Web", en: "Web Application" },
    context: "campus",
    contextLabel: { id: "Eksplorasi Edukasi", en: "Educational Innovation" },
    award: null,
    status: "In Development",
    tech: ["Laravel (PHP)", "Blade", "Vite", "JavaScript", "MySQL", "Data Structures"],
    tags: ["Website", "Laravel", "PHP", "Blade", "JavaScript", "Data Structures", "In Development"],
    summary: {
      id: "Platform web terstruktur untuk memvisualisasikan dan mempelajari algoritma dan struktur data.",
      en: "Structured web platform engineered to demonstrate and visualize fundamental data structures and algorithms."
    },
    description: {
      id: "Structify adalah platform web berbasis Laravel (PHP) dengan integrasi JavaScript interaktif untuk membantu mahasiswa memahami konsep abstrak dalam mata kuliah Struktur Data. Menyajikan modul terstruktur untuk representasi array, linked list, stack, queue, dan algoritma sorting.",
      en: "Structify is a web platform built on Laravel (PHP) with interactive JavaScript front-end components designed to help students grasp abstract computing concepts in Data Structures coursework. Encompasses modules for arrays, linked lists, stacks, queues, and sorting routines."
    },
    keyFeatures: {
      id: [
        "Backend terstruktur menggunakan Laravel dan arsitektur MVC bersih",
        "Modul visualisasi langkah demi langkah operasi struktur data",
        "Sistem kuis dan latihan implementasi kode untuk mahasiswa",
        "Dokumentasi analitis kompleksitas Big-O untuk setiap algoritma"
      ],
      en: [
        "Structured backend engineered with Laravel and clean MVC architecture",
        "Step-by-step visual demonstration modules for data structure operations",
        "Interactive quiz and coding practice suite for computer science learners",
        "Analytical Big-O complexity documentation accompanying every algorithm"
      ]
    },
    github: "https://github.com/lioneljevoon12/Structify",
    demo: null,
    image: "assets/img/portfolio/portfolio-12.webp"
  },
  {
    id: "depsolve-cli",
    title: "DepSolve CLI — Dependency Resolution Engine",
    category: "desktop",
    categoryLabel: { id: "Desktop & CLI", en: "Desktop & CLI Tool" },
    context: "personal",
    contextLabel: { id: "Developer Tools", en: "Developer Tools" },
    award: null,
    status: null,
    tech: ["Python", "CLI", "Directed Acyclic Graph (DAG)", "Topological Sort"],
    tags: ["Desktop & CLI", "Python", "CLI", "Graph Algorithms", "DevTools"],
    summary: {
      id: "Tool baris perintah berbasis Python untuk menganalisis dan mendeteksi dependensi siklik menggunakan DAG.",
      en: "Python command-line utility for resolving package dependency trees and detecting circular dependencies with DAG."
    },
    description: {
      id: "DepSolve CLI adalah alat bantu pengembang berbasis Python murni untuk memvalidasi dan menyelesaikan grafik dependensi perangkat lunak. Dibangun menggunakan konsep graf berarah tanpa siklus (Directed Acyclic Graph / DAG) dan Topological Sort untuk mendeteksi circular dependencies serta menentukan urutan build deterministik.",
      en: "DepSolve CLI is a pure Python command-line utility engineered to validate and resolve software dependency graphs. Built on Directed Acyclic Graph (DAG) principles and Topological Sorting, it detects circular dependency cycles and calculates deterministic build orders."
    },
    keyFeatures: {
      id: [
        "Pendeteksian dependensi siklik (circular dependency cycle) secara otomatis",
        "Topological Sorting engine untuk menentukan urutan instalasi/build yang benar",
        "Visualisasi pohon dependensi dalam format teks ASCII di terminal",
        "Ekspor matriks dependensi ke format JSON"
      ],
      en: [
        "Automated circular dependency cycle detection and traceback",
        "Topological Sorting engine computing deterministic build order",
        "Clean ASCII tree representation rendered directly in terminal",
        "Export dependency matrix to structured JSON format"
      ]
    },
    github: "https://github.com/lioneljevoon12/DepSolve-CLI",
    demo: null,
    image: "assets/img/portfolio/portfolio-1.webp"
  },
  {
    id: "apipicoffee",
    title: "APIPICOFFEE — POS & Coffeeshop Management",
    category: "web",
    categoryLabel: { id: "Aplikasi Web", en: "Web Application" },
    context: "business",
    contextLabel: { id: "Sistem Bisnis / POS", en: "Business / POS System" },
    award: null,
    status: null,
    tech: ["Laravel (PHP)", "Blade", "JavaScript", "MySQL", "Tailwind CSS"],
    tags: ["Website", "Laravel", "PHP", "Blade", "JavaScript", "POS", "Business"],
    summary: {
      id: "Sistem kasir dan manajemen operasional kedai kopi dengan pemantauan stok bahan baku dan laporan omzet.",
      en: "Point of sale and coffeeshop operations system with raw bean inventory tracking and daily revenue reports."
    },
    description: {
      id: "Aplikasi Point of Sales (POS) berbasis Laravel (PHP) dan Blade yang dirancang khusus untuk alur kerja kedai kopi. Mengakomodasi modifikasi pesanan minuman (sugar level, size, extra shot), manajemen stok biji kopi, cetak struk kasir, serta rekapitulasi laba harian.",
      en: "Point of Sale (POS) application built with Laravel (PHP) and Blade tailored for specialty coffee workflows. Handles drink customizations (sugar levels, size, add-ons), raw ingredient depletion tracking, cashier receipts, and daily sales analytics."
    },
    keyFeatures: {
      id: [
        "Antarmuka kasir responsif yang ramah layar sentuh",
        "Manajemen resep & pengurangan stok otomatis bahan baku saat pesanan dibuat",
        "Laporan keuangan komprehensif (laba kotor, produk terlaris, jam sibuk)",
        "Dukungan multi-kasir dengan sistem login aman"
      ],
      en: [
        "Rapid cashier interface optimized for touchscreen monitors and tablets",
        "Recipe-linked inventory tracking with automatic ingredient deduction",
        "Financial reporting suite (gross profit, top-selling items, peak hours)",
        "Role-based multi-cashier access with secure authentication"
      ]
    },
    github: "https://github.com/lioneljevoon12/APIPICOFFE",
    demo: null,
    image: "assets/img/portfolio/portfolio-5.webp"
  },
  {
    id: "dsalon",
    title: "D'Salon — Salon Booking & Management App",
    category: "mobile",
    categoryLabel: { id: "Aplikasi Mobile & Web", en: "Mobile & Web Ecosystem" },
    context: "business",
    contextLabel: { id: "Aplikasi Bisnis", en: "Business Application" },
    award: null,
    status: null,
    tech: ["Android (Java/Kotlin)", "Laravel (PHP)", "REST API", "MySQL"],
    tags: ["Mobile", "Android", "Java", "Kotlin", "Laravel", "PHP", "REST API", "Business"],
    summary: {
      id: "Sistem reservasi jadwal salon dengan klien mobile native Android dan backend Laravel REST API.",
      en: "Salon appointment booking system with native Android client app and Laravel REST API backend."
    },
    description: {
      id: "D'Salon adalah sistem informasi salon terintegrasi (UKOM RPL). Frontend mobile dikembangkan secara native untuk Android menggunakan Java/Kotlin, terhubung via REST API ke server backend Laravel (PHP) dan basis data relasional MySQL.",
      en: "D'Salon is an integrated salon management solution developed for vocational competency. The mobile client is natively built for Android using Java/Kotlin, interfacing via REST API with a robust Laravel (PHP) backend and MySQL database."
    },
    keyFeatures: {
      id: [
        "Aplikasi native Android dengan navigasi mulus dan UI responsif",
        "Backend RESTful API dibangun dengan Laravel (PHP) & MySQL",
        "Booking jadwal appointment dengan pemilihan stylist dan jam perawatan",
        "Dashboard admin web untuk memantau kalender reservasi harian"
      ],
      en: [
        "Native Android client application with smooth responsive mobile UX",
        "RESTful API backend engineered with Laravel (PHP) & MySQL",
        "Self-service appointment booking with stylist selection and time slots",
        "Web administration dashboard to oversee daily salon reservation schedules"
      ]
    },
    github: "https://github.com/lioneljevoon12/D-Salon-Salon-Management",
    demo: null,
    image: "assets/img/portfolio/portfolio-5.webp"
  },
  {
    id: "meownesa",
    title: "Meownesa — Campus Cat Rescue Platform",
    category: "web",
    categoryLabel: { id: "Aplikasi Web", en: "Web Application" },
    context: "campus",
    contextLabel: { id: "Proyek Sosial Kampus", en: "Campus Social Platform" },
    award: null,
    status: null,
    tech: ["Laravel (PHP)", "Blade", "JavaScript", "Tailwind CSS", "MySQL"],
    tags: ["Website", "Laravel", "PHP", "Blade", "Tailwind CSS", "Campus Project", "Social"],
    summary: {
      id: "Platform komunitas kampus UNESA untuk mendata, merawat, dan memfasilitasi adopsi kucing terlantar.",
      en: "Campus community platform to catalog, care for stray cats, and coordinate adoptions at UNESA."
    },
    description: {
      id: "Inisiatif web berbasis kepedulian satwa di lingkungan Universitas Negeri Surabaya. Dibangun menggunakan framework Laravel (PHP), Blade templating, dan Tailwind CSS untuk mendata populasi kucing kampus, mencatat status vaksinasi, dan membuka jalur adopsi yang bertanggung jawab.",
      en: "An animal welfare web platform launched for the Universitas Negeri Surabaya campus. Engineered with Laravel (PHP), Blade templates, and Tailwind CSS to help students catalog resident cats, record medical histories, and coordinate safe adoptions."
    },
    keyFeatures: {
      id: [
        "Katalog profil kucing dengan foto, nama, lokasi favorit, dan status kesehatan",
        "Formulir pengajuan adopsi terintegrasi verifikasi pengadopsi",
        "Forum laporan kucing sakit atau membutuhkan pertolongan medis darurat",
        "Desain antarmuka bersih dan ramah pengguna dengan Tailwind CSS"
      ],
      en: [
        "Resident cat directory with photos, health status, and campus hangout spots",
        "Structured adoption application workflow with applicant vetting",
        "Emergency injury and rescue reporting board for campus volunteers",
        "Clean, responsive user interface styled with Tailwind CSS"
      ]
    },
    github: "https://github.com/lioneljevoon12/Meownesa",
    demo: null,
    image: "assets/img/portfolio/portfolio-6.webp"
  },
  {
    id: "clothesrent",
    title: "ClothesRent — Fashion Rental POS",
    category: "mobile",
    categoryLabel: { id: "Aplikasi Mobile", en: "Mobile Application" },
    context: "business",
    contextLabel: { id: "Mobile POS", en: "Mobile POS" },
    award: null,
    status: null,
    tech: ["Flutter (Dart)", "SQLite", "Local DB", "Mobile POS"],
    tags: ["Mobile", "Flutter", "Dart", "SQLite", "POS", "Business"],
    summary: {
      id: "Aplikasi mobile kasir dan pencatatan sewa pakaian/kostum dengan kalkulasi denda keterlambatan.",
      en: "Mobile POS and rental tracker for fashion boutiques with automated late-return fee calculations."
    },
    description: {
      id: "Aplikasi mobile berbasis Flutter (Dart) yang dirancang untuk butik persewaan baju pesta dan kostum. Mengotomatisasi pengecekan ketersediaan busana berdasarkan tanggal pemakaian, pendataan deposit jaminan, dan penghitungan denda sewa harian menggunakan basis data lokal SQLite.",
      en: "Mobile POS app crafted with Flutter (Dart) tailored for party gown and costume rental boutiques. Automates wardrobe availability checks across rental dates, deposit logging, and daily overdue fee calculations using local SQLite storage."
    },
    keyFeatures: {
      id: [
        "Kalender ketersediaan busana untuk mencegah double-booking pakaian",
        "Penghitungan denda otomatis per hari saat terjadi keterlambatan",
        "Pencatatan uang jaminan / deposit serta kondisi pakaian saat kembali",
        "Penyimpanan lokal cepat dan reliabel berbasis SQLite"
      ],
      en: [
        "Outfit availability calendar preventing overlapping bookings",
        "Automated daily penalty calculator for late returns",
        "Security deposit management and garment inspection checklist",
        "Fast and reliable offline persistence powered by SQLite"
      ]
    },
    github: "https://github.com/lioneljevoon12/ClothesRent",
    demo: null,
    image: "assets/img/portfolio/portfolio-7.webp"
  },
  {
    id: "formsurvey",
    title: "FormSurvey — Dynamic Survey Engine",
    category: "web",
    categoryLabel: { id: "Aplikasi Web", en: "Web Application" },
    context: "personal",
    contextLabel: { id: "Fullstack Web Tool", en: "Fullstack Web Tool" },
    award: null,
    status: null,
    tech: ["Laravel (PHP)", "React.js", "JavaScript", "MySQL", "Tailwind CSS"],
    tags: ["Website", "Laravel", "React.js", "PHP", "JavaScript", "Fullstack"],
    summary: {
      id: "Aplikasi survei dinamis fullstack dengan backend Laravel dan antarmuka interaktif React.js.",
      en: "Dynamic full-stack survey engine featuring a Laravel REST API backend and interactive React.js interface."
    },
    description: {
      id: "Aplikasi fullstack yang menggabungkan backend Laravel (PHP) sebagai penyedia REST API dan frontend React.js untuk merakit formulir survei interaktif. Memungkinkan pembuatan kuesioner custom, pengumpulan respon real-time, dan ekspor data.",
      en: "Full-stack application combining a Laravel (PHP) REST backend with a reactive React.js frontend. Enables dynamic questionnaire generation, real-time submission aggregation, and survey data export."
    },
    keyFeatures: {
      id: [
        "Arsitektur decoupled modern: backend Laravel REST API & frontend React.js",
        "Builder form kustom dengan penambahan beragam jenis pertanyaan dinamis",
        "Visualisasi grafik chart respons secara real-time",
        "Validasi input form yang ketat dan proteksi respon ganda"
      ],
      en: [
        "Decoupled full-stack architecture: Laravel REST API & React.js frontend",
        "Custom questionnaire builder with flexible dynamic field types",
        "Real-time graphical chart visualization of received responses",
        "Rigorous form input sanitization and anti-duplicate submission safeguards"
      ]
    },
    github: "https://github.com/lioneljevoon12/Form-Survey-Project",
    demo: null,
    image: "assets/img/portfolio/portfolio-1.webp"
  },
  {
    id: "project-management",
    title: "SocietyProject — Team Task Manager",
    category: "web",
    categoryLabel: { id: "Aplikasi Web", en: "Web Application" },
    context: "personal",
    contextLabel: { id: "Productivity Web", en: "Productivity Web" },
    award: null,
    status: null,
    tech: ["Laravel (PHP)", "Tailwind CSS", "Vite", "JavaScript", "MySQL"],
    tags: ["Website", "Laravel", "PHP", "Tailwind CSS", "JavaScript", "Productivity"],
    summary: {
      id: "Aplikasi manajemen proyek kolaboratif dengan papan Kanban dan pelacakan milestone penugasan.",
      en: "Collaborative project management tool featuring interactive Kanban boards and milestone tracking."
    },
    description: {
      id: "Aplikasi berbasis Laravel (PHP), Tailwind CSS, dan Vite untuk membantu tim pengembang mengelola alur kerja proyek secara terorganisir. Dilengkapi papan Kanban dinamis, penugasan tiket, batas waktu pengerjaan, dan audit log riwayat tugas.",
      en: "Web application engineered with Laravel (PHP), Tailwind CSS, and Vite to help software teams manage project lifecycles. Features dynamic Kanban boards, ticket assignees, deadline tracking, and task revision logs."
    },
    keyFeatures: {
      id: [
        "Papan Kanban interaktif dengan status tugas dinamis",
        "Penetapan deadline tugas, tingkat prioritas, dan penanggung jawab",
        "Pencatatan riwayat perubahan aktivitas proyek",
        "Dashboard overview beban kerja tim"
      ],
      en: [
        "Interactive Kanban task board with status workflows",
        "Due dates, task priority markers, and member assignments",
        "Audit log tracking project revisions and ticket status changes",
        "Team workload overview and progress percentage metrics"
      ]
    },
    github: "https://github.com/lioneljevoon12/Belajar_Personal/tree/main/Projek/Website/Project%20Management",
    demo: null,
    image: "assets/img/portfolio/portfolio-2.webp"
  },
  {
    id: "smkrevit",
    title: "SMKRevit — Resto & E-Commerce Management",
    category: "web",
    categoryLabel: { id: "Aplikasi Web", en: "Web Application" },
    context: "campus",
    contextLabel: { id: "Proyek Vokasi", en: "Vocational Project" },
    award: null,
    status: null,
    tech: ["Laravel (PHP)", "Blade", "MySQL", "Bootstrap"],
    tags: ["Website", "Laravel", "PHP", "Blade", "CMS", "E-Commerce"],
    summary: {
      id: "Sistem e-commerce dan operasional restoran dengan katalog menu dan back-office kasir.",
      en: "Restaurant ordering and e-commerce portal with dynamic menu catalogs and back-office cashier module."
    },
    description: {
      id: "Platform restoran terintegrasi yang dibangun dengan Laravel (PHP) dan Blade. Menggabungkan etalase pemesanan makanan online untuk pengunjung dan dashboard admin/kasir untuk mengelola menu, kategori, dan laporan transaksi.",
      en: "Integrated restaurant platform developed with Laravel (PHP) and Blade templates. Combines an online food ordering catalog with an administrative cashier portal for menu, category, and sales transactions."
    },
    keyFeatures: {
      id: [
        "Katalog menu makanan interaktif dengan filter kategori dan pencarian",
        "Keranjang belanja dan sistem checkout pesanan pelanggan",
        "Panel admin CMS untuk update harga, diskon, dan foto hidangan",
        "Laporan rekapitulasi penjualan harian restoran"
      ],
      en: [
        "Interactive food catalog with instant category filtering and search",
        "Cart management and fast guest checkout system",
        "Back-office CMS to manage dishes, promotional discounts, and pricing",
        "Daily cashier sales recap and order status tracker"
      ]
    },
    github: "https://github.com/lioneljevoon12/SMKRevit-Resto-Management",
    demo: null,
    image: "assets/img/portfolio/portfolio-10.webp"
  },
  {
    id: "insertcoin",
    title: "INSERTCOIN — Arcade Web Game Hub",
    category: "web",
    categoryLabel: { id: "Aplikasi Web", en: "Web Application" },
    context: "personal",
    contextLabel: { id: "Eksperimen Interaktif", en: "Interactive Experiment" },
    award: null,
    status: null,
    tech: ["JavaScript (Vanilla)", "HTML5 Canvas", "CSS3", "Web Audio"],
    tags: ["Website", "JavaScript", "Canvas", "Gaming", "Frontend"],
    summary: {
      id: "Portal kurasi game retro arcade berbasis browser dengan sound effect 8-bit dan papan leaderboard.",
      en: "Browser-based retro arcade portal with nostalgic 8-bit sound design and local leaderboard scores."
    },
    description: {
      id: "INSERTCOIN adalah portal permainan web arcade yang dibangun dengan JavaScript murni dan HTML5 Canvas tanpa framework eksternal. Menampilkan engine fisika sederhana, rendering grafis 60 FPS, efek suara chiptune, dan penyimpanan skor.",
      en: "INSERTCOIN is a retro arcade web portal powered purely by vanilla JavaScript and HTML5 Canvas with zero external frameworks. Features physics loops, 60 FPS Canvas rendering, chiptune audio, and local high-score records."
    },
    keyFeatures: {
      id: [
        "Mini-games arcade dibangun dengan vanilla JavaScript & HTML5 Canvas murni",
        "Sistem penghitungan high-score dengan penyimpanan lokal",
        "Desain antarmuka retro arcade dengan sound effects 8-bit",
        "Dukungan input keyboard desktop dan kontrol layar sentuh mobile"
      ],
      en: [
        "Arcade mini-games built with pure vanilla JS and Canvas rendering",
        "High-score persistence system preserving user records",
        "Retro arcade aesthetic complete with 8-bit chiptune sound effects",
        "Responsive controls supporting desktop keyboard and mobile touch"
      ]
    },
    github: "https://github.com/lioneljevoon12/Game-Hub",
    demo: null,
    image: "assets/img/portfolio/portfolio-7.webp"
  },
  {
    id: "weatherapipi",
    title: "WeatherAPIPI — Live Weather Forecast",
    category: "mobile",
    categoryLabel: { id: "Aplikasi Mobile & Web", en: "Mobile & Web Ecosystem" },
    context: "personal",
    contextLabel: { id: "Fullstack Mobile", en: "Fullstack Mobile" },
    award: null,
    status: null,
    tech: ["Flutter (Dart)", "Laravel (PHP Backend)", "OpenWeather API", "REST API"],
    tags: ["Mobile", "Flutter", "Dart", "Laravel", "PHP", "REST API"],
    summary: {
      id: "Aplikasi prakiraan cuaca real-time dengan klien mobile Flutter dan backend Laravel.",
      en: "Real-time weather forecast application with a Flutter mobile client and Laravel backend API."
    },
    description: {
      id: "WeatherAPIPI memadukan aplikasi mobile Flutter (Dart) yang intuitif dengan backend Laravel (PHP) yang mengelola caching data cuaca dari OpenWeather API. Menampilkan prakiraan cuaca detail per jam, indeks atmosfer, dan deteksi lokasi otomatis.",
      en: "WeatherAPIPI pairs an intuitive Flutter (Dart) mobile app with a Laravel (PHP) backend service caching OpenWeather API responses. Displays hourly weather timelines, atmospheric indexes, and automatic GPS geolocation."
    },
    keyFeatures: {
      id: [
        "Aplikasi mobile cross-platform dibangun dengan Flutter & Dart",
        "Backend Laravel (PHP) untuk caching API dan manajemen konfigurasi",
        "Prakiraan cuaca detail per jam dan proyeksi 7 hari ke depan",
        "Metrik lengkap: kelembapan, tekanan udara, indeks UV, dan arah angin"
      ],
      en: [
        "Cross-platform mobile application built with Flutter & Dart",
        "Laravel (PHP) backend service for API caching and request throttling",
        "Hourly weather timeline and comprehensive 7-day forecast projections",
        "Metric cards: humidity, atmospheric pressure, UV index, and wind speeds"
      ]
    },
    github: "https://github.com/lioneljevoon12/WeatherAPIPI",
    demo: null,
    image: "assets/img/portfolio/portfolio-6.webp"
  },
  {
    id: "iknownotes",
    title: "IKnowNotes — Native Android Note App",
    category: "mobile",
    categoryLabel: { id: "Aplikasi Mobile", en: "Mobile Application" },
    context: "personal",
    contextLabel: { id: "Mobile & Backend", en: "Mobile & Backend" },
    award: null,
    status: null,
    tech: ["Android (Kotlin)", "Python (Django Backend)", "SQLite", "REST API"],
    tags: ["Mobile", "Android", "Kotlin", "Python", "Django", "SQLite", "Productivity"],
    summary: {
      id: "Aplikasi catatan native Android berbasis Kotlin dengan backend REST API Python Django.",
      en: "Native Android note-taking application built with Kotlin and backed by a Python Django REST API."
    },
    description: {
      id: "IKnowNotes adalah aplikasi catatan yang menggabungkan aplikasi Android native berbasis Kotlin dengan backend REST API berbasis Python Django. Mendukung penyimpanan catatan offline-first dengan sinkronisasi basis data SQLite lokal.",
      en: "IKnowNotes is a productivity application pairing a native Android client written in Kotlin with a Python Django REST API backend. Supports offline-first note-taking with local SQLite database synchronization."
    },
    keyFeatures: {
      id: [
        "Aplikasi mobile native Android modern ditulis dengan bahasa Kotlin",
        "Backend REST API ditenagai framework Python Django",
        "Penyimpanan lokal SQLite berkecepatan tinggi tanpa hambatan koneksi",
        "Pencarian teks lengkap instan dan pengelompokan catatan dengan label warna"
      ],
      en: [
        "Modern native Android mobile client written cleanly in Kotlin",
        "REST API backend powered by the Python Django framework",
        "High-performance local SQLite storage ensuring zero-latency launch",
        "Instant full-text query search and color-coded note tag categorization"
      ]
    },
    github: "https://github.com/lioneljevoon12/IKnowNotes",
    demo: null,
    image: "assets/img/portfolio/portfolio-2.webp"
  },
  {
    id: "ping-game",
    title: "PING! — Cozy Network Simulation & Logic Puzzle Game",
    category: "mobile",
    categoryLabel: { id: "Game Mobile & Edukasi", en: "Mobile & Edu Game" },
    context: "campus",
    contextLabel: { id: "Proyek Pemrograman Game", en: "Game Dev Project" },
    award: null,
    status: null,
    tech: ["Godot Engine 4", "GDScript", "Android APK", "AudioStreamGenerator", "Computer Networking"],
    tags: ["Mobile", "Desktop", "Game", "Godot", "GDScript", "Simulation", "Puzzle", "Education", "Computer Networks", "SDGs"],
    summary: {
      id: "Game edukasi interaktif 2D bertema jaringan komputer dengan visual cozy kawaii doodle, time-attack logic puzzle, dan simulasi jaringan standar kurikulum IT.",
      en: "A 2D cozy kawaii doodle educational game simulating computer networking concepts through time-attack logic puzzles, aligned with IT curriculum."
    },
    description: {
      id: "PING! adalah game simulasi dan teka-teki logika 2D edukatif bertema jaringan komputer yang dikembangkan dengan Godot Engine 4.x (GDScript) untuk Android dan PC. Mengusung semangat SDGs Goal 4 (Pendidikan Berkualitas), game ini mentransformasi materi jaringan yang abstrak (pengkabelan UTP T568A/B, subnetting IPv4 CIDR, routing, hingga 7 OSI Layer & TCP 3-way handshake) menjadi gameplay interaktif yang estetik, hangat, dan ramah pemula lewat metode personifikasi data & perangkat.",
      en: "PING! is an educational 2D simulation and logic puzzle game themed around computer networking, engineered with Godot Engine 4.x (GDScript) for Android and PC. Championing SDGs Goal 4 (Quality Education), it transforms complex networking concepts (UTP T568A/B cable crimping, IPv4 CIDR subnetting, dynamic routing, 7 OSI layers, and TCP 3-way handshakes) into warm, accessible, kawaii doodle gameplay with responsive device personifications."
    },
    keyFeatures: {
      id: [
        "5 Stage Kurikulum Jaringan: Mencakup Physical Layer (kabel Straight/Cross, pin RJ45 T568A/B), Addressing (IPv4 & ARP), Subnetting CIDR, Topologi (Star/Ring/Mesh), hingga Transport Layer & OSI 7 Layer",
        "Eksplorasi Top-Down & Contextual Raycast: Kontrol teknisi via Virtual D-Pad / WASD dengan balon interaksi dinamis untuk membuka minigame pemecahan masalah perangkat",
        "Time-Attack & Star Rating: Tantangan batas waktu dinamis dengan evaluasi 1-3 bintang serta sistem 3 HP tanpa efek frustrasi (animasi komikal karakter pusing)",
        "In-Game Guidebook Interaktif: Buku panduan animasi halaman terpadu memuat standar TIA/EIA 568A/B, klasifikasi kelas IP, dan diagram arsitektur jaringan",
        "Audio Synthesizer Prosedural: Engine audio real-time berbasis pure GDScript AudioStreamGenerator dipadukan arsitektur ekspor multiplatform (Android APK & Windows PC)"
      ],
      en: [
        "5-Stage Networking Curriculum: Encompasses Physical Layer (Straight/Cross sorting, RJ45 crimping), Addressing (IPv4 & ARP), CIDR Subnetting, Topologies (Star/Ring/Mesh), and Transport/OSI 7 Layers",
        "Top-Down Exploration & Contextual Raycast: Intuitive technician navigation via Virtual D-Pad / WASD triggering contextual minigames on affected hardware",
        "Time-Attack & Star Rating: Dynamic countdown puzzles with 1-3 star evaluations and a gentle 3-HP system featuring comical screen bounces instead of harsh fail states",
        "Interactive In-Game Guidebook: On-demand animated manual detailing TIA/EIA 568A/B wiring, IP address classes, and networking topology diagrams",
        "Procedural Audio Synthesis: Real-time GDScript AudioStreamGenerator synthesizer engine paired with a multiplatform export pipeline (Android APK & Windows PC)"
      ]
    },
    github: "https://github.com/lioneljevoon12/PING-",
    demo: null,
    image: "assets/img/portfolio/portfolio-12.webp"
  },
  {
    id: "imstructified",
    title: "IMStructified — Data Structures in Python",
    category: "desktop",
    categoryLabel: { id: "Desktop & CLI", en: "Desktop & CLI Tool" },
    context: "campus",
    contextLabel: { id: "Akademik & Algoritma", en: "Academics & Algorithms" },
    award: null,
    status: null,
    tech: ["Python", "Data Structures", "OOP", "Algorithm Benchmarks"],
    tags: ["Desktop & CLI", "Python", "Data Structures", "Algorithms", "Education"],
    summary: {
      id: "Implementasi fundamental struktur data klasik dengan pengujian efisiensi memori dan waktu di Python.",
      en: "Clean Python implementations of classic data structures with algorithmic time and memory benchmarks."
    },
    description: {
      id: "Koleksi implementasi mandiri struktur data dasar (Linked List, Doubly Linked List, Queue, Binary Search Tree, AVL Tree, Heap) dalam Python murni dengan paradigma Object Oriented Programming (OOP), dilengkapi script benchmark Big-O.",
      en: "A robust suite of foundational data structure implementations (Linked Lists, Stacks, Queues, BST, AVL Trees, Heaps) written in pure Python using Object-Oriented Programming, coupled with Big-O runtime benchmarks."
    },
    keyFeatures: {
      id: [
        "Implementasi OOP bersih dan modular untuk 8+ struktur data klasik",
        "Visualisasi struktur pohon (Tree printing) di konsol terminal",
        "Perbandingan kecepatan algoritma pencarian dan traversal",
        "Dokumentasi kode lengkap dengan analisis kompleksitas waktu Big-O"
      ],
      en: [
        "Clean, object-oriented implementations of 8+ fundamental data structures",
        "Console ASCII tree diagram rendering for binary search trees",
        "Comparative benchmark runner testing search and traversal timings",
        "Extensive docstrings documenting Big-O time and space complexities"
      ]
    },
    github: "https://github.com/lioneljevoon12/Struktur-Data-",
    demo: null,
    image: "assets/img/portfolio/portfolio-1.webp"
  },
  {
    id: "apotekers",
    title: "Apotekers — Pharmacy Management System",
    category: "desktop",
    categoryLabel: { id: "Software Desktop", en: "Desktop Software" },
    context: "business",
    contextLabel: { id: "Desktop POS", en: "Desktop POS" },
    award: null,
    status: null,
    tech: ["C#", ".NET (Windows Forms)", "SQL Server", "Crystal Reports"],
    tags: ["Desktop & CLI", "C#", ".NET", "SQL Server", "Desktop POS", "Business"],
    summary: {
      id: "Software desktop kasir dan inventaris apotek terpadu dengan peringatan kedaluwarsa obat otomatis.",
      en: "Desktop pharmacy POS and inventory management suite with automated medicine expiration alerts."
    },
    description: {
      id: "Aplikasi desktop native yang dibangun dengan C# dan framework .NET Windows Forms untuk mengelola operasional apotek harian. Memiliki fitur pencatatan batch obat, tanggal kedaluwarsa, resep dokter, transaksi kasir, serta integrasi SQL Server.",
      en: "Native Windows desktop software developed in C# and .NET Windows Forms to manage daily pharmacy retail operations. Encompasses batch tracking, expiration date warnings, doctor prescription management, cashier checkouts, and SQL Server integration."
    },
    keyFeatures: {
      id: [
        "Dibangun secara native dengan C# dan framework .NET Windows Forms",
        "Notifikasi obat yang mendekati tanggal kedaluwarsa (expired date alert)",
        "Pencatatan obat resep vs obat bebas dengan kalkulasi racikan",
        "Cetak struk kasir dan faktur penjualan otomatis"
      ],
      en: [
        "Natively built with C# and the .NET Windows Forms framework",
        "Automated alerts for pharmaceuticals nearing their expiration dates",
        "Prescription vs over-the-counter medicine categorization with dosage notes",
        "Direct thermal receipt printing and automated sales invoicing"
      ]
    },
    github: "https://github.com/lioneljevoon12/Project-Personal/tree/main/C%23/Apotek%20Desktop",
    demo: null,
    image: "assets/img/portfolio/portfolio-4.webp"
  },
  {
    id: "spaces-war",
    title: "Spaces War — Retro Arcade Space Shooter",
    category: "desktop",
    categoryLabel: { id: "Game Desktop", en: "Desktop Game" },
    context: "personal",
    contextLabel: { id: "Game Development", en: "Game Development" },
    award: null,
    status: null,
    tech: ["Python", "Pygame", "OOP", "Game Loop"],
    tags: ["Desktop & CLI", "Python", "Pygame", "Game Dev", "OOP"],
    summary: {
      id: "Game tembak-menembak antariksa retro berbasis Python Pygame dengan gelombang musuh adaptif.",
      en: "Retro space shooter arcade desktop game crafted in Python Pygame with adaptive enemy waves."
    },
    description: {
      id: "Game arcade 2D klasik yang dibangun menggunakan Python dan library Pygame. Mengimplementasikan game loop berkecepatan 60 FPS, collision detection presisi antarpeluru dan musuh, animasi partikel ledakan, sound effect 16-bit, dan sistem upgrade senjata.",
      en: "Classic 2D space shooter arcade game built with Python and Pygame. Implements a 60 FPS game loop, precise collision detection between projectiles and alien squadrons, particle explosions, 16-bit audio, and upgradable weapon power-ups."
    },
    keyFeatures: {
      id: [
        "Game loop modular dibangun dengan Python & Pygame",
        "Collision detection presisi antarpeluru dan armada musuh",
        "Power-up senjata: triple shot, laser beam, dan shield energi",
        "Sistem pergerakan gelombang musuh yang dinamis dan scoreboard skor"
      ],
      en: [
        "Modular game loop architecture built with Python & Pygame",
        "Pixel-perfect collision checks between shots and enemy formations",
        "Tiered weapon power-ups: spread shot, plasma beam, and protective shields",
        "Dynamic enemy wave algorithms and persistent local high-score tracking"
      ]
    },
    github: "https://github.com/lioneljevoon12/Project-Personal/tree/main/Python/Space%20War",
    demo: null,
    image: "assets/img/portfolio/portfolio-10.webp"
  }
];

// Helper to get project by ID
function getProjectById(id) {
  return PROJECTS_DATA.find(p => p.id === id);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS_DATA, getProjectById };
}
