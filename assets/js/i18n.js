/**
 * Bilingual (ID / EN) Localization Engine
 * Lionel Jevon's Portfolio
 * Strictly supports Indonesian (id) and English (en)
 */

const I18N_DICTIONARY = {
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.projects": "Proyek",
    "nav.experience": "Pengalaman",
    "nav.credentials": "Prestasi & Lisensi",
    "nav.contact": "Kontak",
    "nav.talk": "Hubungi Saya",
    "nav.download_cv": "Unduh CV",

    // Hero Section
    "hero.badge": "Terbuka untuk Magang & Peluang Kolaborasi",
    "hero.greeting": "Halo, saya Lionel Jevon",
    "hero.iam": "Saya seorang",
    "hero.subgreeting": "Software Developer & Concept Innovator",
    "hero.description": "Fokus pada rekayasa aplikasi web, mobile, dan sistem terintegrasi yang terstruktur, andal, dan siap pakai.",
    "hero.cta_projects": "Jelajahi Proyek",
    "hero.cta_cv": "Unduh CV",
    "hero.cta_contact": "Kontak Saya",
    "hero.stat_gpa": "IPK Akademik",
    "hero.stat_projects": "Total Proyek",
    "hero.stat_awards": "Prestasi & Kompetisi",
    "hero.stat_certs": "Sertifikasi Resmi",

    // Featured Projects
    "featured.tag": "Proyek Unggulan",
    "featured.title": "Karya Pilihan & Hasil Rekayasa",
    "featured.subtitle": "Inovasi nyata dari kompetisi internasional, magang industri, hingga integrasi hardware IoT.",
    "featured.view_all": "Lihat Semua 19 Proyek",
    "featured.card_details": "Detail Proyek",
    "featured.github": "Kode Sumber",
    "featured.live_demo": "Kunjungi Demo",
    "featured.banner_title": "Katalog Lengkap 19 Proyek",
    "featured.banner_desc": "Aplikasi POS, sistem reservasi salon, game mobile Godot, tool CLI DAG, hingga implementasi struktur data.",
    "featured.banner_btn": "Buka Katalog Proyek Interaktif",

    // Core Tech Stack
    "stack.tag": "Keahlian & Teknologi",
    "stack.title": "Teknologi yang Saya Gunakan",
    "stack.subtitle": "Kumpulan bahasa pemrograman, framework, dan tool yang menjadi senjata harian saya.",
    "stack.languages": "Bahasa Pemrograman",
    "stack.frameworks": "Framework & Libs",
    "stack.database_tools": "Database & Cloud",
    "stack.devops": "Tools & Workflow",

    // Quick Experience & Leadership
    "journey.tag": "Jejak Rekam",
    "journey.title": "Pengalaman & Organisasi",
    "journey.subtitle": "Kombinasi antara keahlian teknis perangkat lunak dan koordinasi aktif di organisasi kampus.",
    "journey.view_full": "Lihat Perjalanan Lengkap",
    "journey.academic_tag": "Pendidikan Terapan",
    "journey.academic_major": "D4 Manajemen Informatika (2025–2029)",
    "journey.gpa_label": "Indeks Prestasi",
    "journey.awards_title": "Prestasi & Kompetisi Pilihan:",
    "journey.view_credentials": "Lihat Semua Prestasi & Sertifikasi (11+)",

    // Contact
    "contact.tag": "Mari Terhubung",
    "contact.title": "Punya Ide Menarik? Mari Berkolaborasi",
    "contact.subtitle": "Saya selalu terbuka untuk peluang magang, proyek kolaboratif, atau diskusi teknologi.",
    "contact.location": "Lokasi",
    "contact.location_val": "Surabaya & Sidoarjo, Jawa Timur, Indonesia",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.social": "Media Sosial:",
    "contact.form_name": "Nama Lengkap",
    "contact.form_email": "Alamat Email",
    "contact.form_subject": "Subjek / Topik",
    "contact.form_message": "Pesan Anda",
    "contact.form_send": "Kirim Pesan Langsung via WhatsApp",
    "contact.wa_direct": "Chat Langsung via WhatsApp",

    // Projects Page
    "projects.header_tag": "Katalog Lengkap",
    "projects.header_title": "19 Proyek & Lab Eksplorasi",
    "projects.header_subtitle": "Arsip lengkap karya perangkat lunak: aplikasi web, aplikasi mobile, sistem desktop, tool CLI, dan inovasi IoT.",
    "projects.search_placeholder": "Cari proyek berdasarkan nama, teknologi (Laravel, Flutter, Python...), atau fitur...",
    "projects.filter_all": "Semua Kategori",
    "projects.filter_web": "Aplikasi Web",
    "projects.filter_mobile": "Aplikasi Mobile",
    "projects.filter_desktop": "Desktop & CLI",
    "projects.counter_showing": "Menampilkan",
    "projects.counter_of": "dari",
    "projects.counter_projects": "proyek",
    "projects.empty": "Tidak ada proyek yang cocok dengan filter pencarian.",
    "projects.empty_sub": "Coba gunakan kata kunci teknologi lain (misal: 'Flutter', 'Laravel', 'Python') atau reset filter.",
    "projects.empty_reset": "Reset Filter",

    // Modal Details
    "modal.key_features": "Fitur Utama & Implementasi Teknis",
    "modal.tech_stack": "Teknologi & Algoritma",
    "modal.view_github": "Lihat di GitHub",
    "modal.view_live": "Buka Live Demo",
    "modal.close": "Tutup Detail",

    // Experience Page
    "exp.header_tag": "Perjalanan Profesional",
    "exp.header_title": "Pengalaman & Organisasi",
    "exp.header_subtitle": "Rekam jejak karier teknologi, keterlibatan aktif kepengurusan, dan pencapaian akademik.",
    "exp.tab_tech": "Teknologi & Industri",
    "exp.tab_leadership": "Kepemimpinan & Organisasi",
    "exp.tab_education": "Pendidikan & Akademik",

    // Credentials Page
    "cred.header_tag": "Validasi Kompetensi",
    "cred.header_title": "Prestasi Lomba & Lisensi Sertifikasi",
    "cred.header_subtitle": "Pencapaian kompetisi teknologi tingkat internasional/nasional dan lisensi sertifikasi resmi industri.",
    "cred.awards_title": "Prestasi & Kompetisi",
    "cred.awards_subtitle": "Bukti dedikasi dalam memecahkan masalah komputasi dan karya ilmiah.",
    "cred.certs_title": "Sertifikasi & Pelatihan Resmi",
    "cred.certs_subtitle": "11+ lisensi industri, sertifikat profesi pemerintah, dan coding camp.",
    "cred.filter_all": "Semua",
    "cred.filter_competency": "Kompetensi Profesi",
    "cred.filter_dev": "Web & Mobile",
    "cred.filter_core": "Bahasa & Algoritma",

    // Footer
    "footer.rights": "Hak cipta dilindungi undang-undang."
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.credentials": "Credentials",
    "nav.contact": "Contact",
    "nav.talk": "Let's Talk",
    "nav.download_cv": "Download CV",

    // Hero Section
    "hero.badge": "Available for Internship & Opportunities",
    "hero.greeting": "Hi, I'm Lionel Jevon",
    "hero.iam": "I am a",
    "hero.subgreeting": "Software Developer & Concept Innovator",
    "hero.description": "Focusing on structured, reliable, and production-ready web, mobile, and integrated software engineering.",
    "hero.cta_projects": "Explore Projects",
    "hero.cta_cv": "Download CV",
    "hero.cta_contact": "Get In Touch",
    "hero.stat_gpa": "Academic GPA",
    "hero.stat_projects": "Completed Projects",
    "hero.stat_awards": "Honors & Awards",
    "hero.stat_certs": "Industry Credentials",

    // Featured Projects
    "featured.tag": "Featured Works",
    "featured.title": "Highlighted Engineering Projects",
    "featured.subtitle": "Impactful systems spanning international web competitions, industry internships, and IoT telemetry.",
    "featured.view_all": "View All 19 Projects",
    "featured.card_details": "Project Details",
    "featured.github": "Source Code",
    "featured.live_demo": "Live Demo",
    "featured.banner_title": "Complete 19 Projects Archive",
    "featured.banner_desc": "POS applications, salon reservation systems, Godot mobile games, DAG CLI utilities, and algorithm visualizers.",
    "featured.banner_btn": "Open Interactive Project Catalog",

    // Core Tech Stack
    "stack.tag": "Skills & Tech",
    "stack.title": "Technology Arsenal",
    "stack.subtitle": "A curated overview of the programming languages, frameworks, and dev tools I use daily.",
    "stack.languages": "Programming Languages",
    "stack.frameworks": "Frameworks & Libraries",
    "stack.database_tools": "Database & Cloud",
    "stack.devops": "Workflow & Tools",

    // Quick Experience & Leadership
    "journey.tag": "Track Record",
    "journey.title": "Experience & Organizations",
    "journey.subtitle": "Bridging full-stack technical craftsmanship with active campus leadership and collaboration.",
    "journey.view_full": "Explore Full Journey",
    "journey.academic_tag": "Applied Education",
    "journey.academic_major": "Applied Bachelor in Informatics Management (2025–2029)",
    "journey.gpa_label": "Grade Point Average",
    "journey.awards_title": "Selected Awards & Honors:",
    "journey.view_credentials": "View All Awards & Certificates (11+)",

    // Contact
    "contact.tag": "Get In Touch",
    "contact.title": "Have a Vision? Let's Build Together",
    "contact.subtitle": "I am open to internship opportunities, tech collaborations, or engineering discussions.",
    "contact.location": "Location",
    "contact.location_val": "Surabaya & Sidoarjo, East Java, Indonesia",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.social": "Social Media:",
    "contact.form_name": "Full Name",
    "contact.form_email": "Email Address",
    "contact.form_subject": "Subject / Topic",
    "contact.form_message": "Your Message",
    "contact.form_send": "Send Direct WhatsApp Message",
    "contact.wa_direct": "Direct WhatsApp Chat",

    // Projects Page
    "projects.header_tag": "Complete Archive",
    "projects.header_title": "19 Projects & Engineering Lab",
    "projects.header_subtitle": "Curated collection of software works: responsive web apps, mobile apps, desktop systems, CLI utilities, and IoT solutions.",
    "projects.search_placeholder": "Search projects by name, tech stack (Laravel, Flutter, Python...), or features...",
    "projects.filter_all": "All Categories",
    "projects.filter_web": "Web Applications",
    "projects.filter_mobile": "Mobile Applications",
    "projects.filter_desktop": "Desktop & CLI",
    "projects.counter_showing": "Showing",
    "projects.counter_of": "of",
    "projects.counter_projects": "projects",
    "projects.empty": "No projects match your active filter or search query.",
    "projects.empty_sub": "Try using another technology keyword (e.g., 'Flutter', 'Laravel', 'Python') or reset filters.",
    "projects.empty_reset": "Reset Filters",

    // Modal Details
    "modal.key_features": "Key Features & Engineering Highlights",
    "modal.tech_stack": "Technologies & Algorithms",
    "modal.view_github": "View on GitHub",
    "modal.view_live": "Open Live Demo",
    "modal.close": "Close Details",

    // Experience Page
    "exp.header_tag": "Professional Journey",
    "exp.header_title": "Experience & Organizations",
    "exp.header_subtitle": "Detailed timeline of software engineering roles, campus leadership, and academic milestones.",
    "exp.tab_tech": "Tech & Industry",
    "exp.tab_leadership": "Leadership & Community",
    "exp.tab_education": "Education & Academics",

    // Credentials Page
    "cred.header_tag": "Verified Competencies",
    "cred.header_title": "Awards & Certifications",
    "cred.header_subtitle": "Recognitions in international/national technology competitions and verified industry certifications.",
    "cred.awards_title": "Honors & Awards",
    "cred.awards_subtitle": "Demonstrated track record in competitive software engineering and scientific papers.",
    "cred.certs_title": "Certificates & Training",
    "cred.certs_subtitle": "11+ industry qualifications, government competency licenses, and software coding camps.",
    "cred.filter_all": "All",
    "cred.filter_competency": "Professional Competency",
    "cred.filter_dev": "Web & Mobile",
    "cred.filter_core": "Algorithms & Languages",

    // Footer
    "footer.rights": "All rights reserved."
  }
};

const i18n = {
  currentLang: localStorage.getItem("lionel_portfolio_lang") || "id",

  t(key) {
    const dict = I18N_DICTIONARY[this.currentLang] || I18N_DICTIONARY.id;
    return dict[key] || key;
  },

  setLanguage(lang) {
    if (lang !== "id" && lang !== "en") return;
    this.currentLang = lang;
    localStorage.setItem("lionel_portfolio_lang", lang);
    this.applyTranslations();
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  },

  toggleLanguage() {
    this.setLanguage(this.currentLang === "id" ? "en" : "id");
  },

  applyTranslations() {
    document.documentElement.lang = this.currentLang;

    // Translate all standard text elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = this.t(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const translation = this.t(key);
      if (translation) {
        el.setAttribute("placeholder", translation);
      }
    });

    // Update active state of switch buttons
    document.querySelectorAll(".lang-switch-btn").forEach(btn => {
      const targetLang = btn.getAttribute("data-lang-btn");
      if (targetLang === this.currentLang) {
        btn.classList.add("bg-blue-600", "text-white", "font-semibold");
        btn.classList.remove("text-slate-600", "dark:text-slate-400", "hover:text-slate-900", "dark:hover:text-white");
      } else {
        btn.classList.remove("bg-blue-600", "text-white", "font-semibold");
        btn.classList.add("text-slate-600", "dark:text-slate-400");
      }
    });
  },

  init() {
    this.applyTranslations();

    document.querySelectorAll(".lang-switch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang-btn");
        this.setLanguage(lang);
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  i18n.init();
});
