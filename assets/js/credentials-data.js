/**
 * Complete Bilingual Data for Credentials Page
 * Lionel Jevon's Portfolio
 */

const CREDENTIALS_DATA = {
  awards: [
    {
      id: "gayatama",
      title: {
        id: "Finalis — Gayatama 5 International Web Technologies Competition",
        en: "Finalist — Gayatama 5 International Web Technologies Competition"
      },
      tag: {
        id: "Internasional",
        en: "International"
      },
      year: "2026",
      team: "Tim MBG",
      description: {
        id: "Platform Matching KKN (BaktiNusantara) berbasis pendekatan algoritma Haversine dan teknologi Artificial Intelligence.",
        en: "KKN matching platform (BaktiNusantara) engineered with Haversine distance algorithm and Artificial Intelligence."
      },
      link: "projects.html#baktinusantara",
      linkText: {
        id: "Lihat Proyek",
        en: "View Project"
      }
    },
    {
      id: "inosains",
      title: {
        id: "Juara Favorit — Inosains LKTI Nasional",
        en: "Favorite Winner — Inosains National Scientific Paper"
      },
      tag: {
        id: "Karya Tulis Ilmiah",
        en: "Scientific Paper"
      },
      year: "2026",
      team: {
        id: "Tingkat Nasional",
        en: "National Level"
      },
      description: {
        id: "Lomba Karya Tulis Ilmiah (LKTI) nasional dengan fokus inovasi solusi teknologi dan rekayasa terapan.",
        en: "National scientific paper competition focusing on applied engineering innovations and technological solutions."
      }
    },
    {
      id: "seo-gold",
      title: {
        id: "Medali Emas — SEO Bidang Informatika",
        en: "Gold Medal — SEO Informatics Field"
      },
      tag: {
        id: "Medali Emas",
        en: "Gold Medal"
      },
      year: "2025",
      team: {
        id: "Bidang Informatika",
        en: "Informatics Field"
      },
      description: {
        id: "Olimpiade Sains dan Kompetisi Akademik bidang Informatika tingkat perguruan tinggi dan vokasi.",
        en: "Science Olympiad and Academic Competition in Informatics for university and vocational students."
      }
    },
    {
      id: "lks-sidoarjo",
      title: {
        id: "Juara 2 — LKS IT Software Solutions for Business",
        en: "2nd Place — LKS IT Software Solutions for Business"
      },
      tag: {
        id: "Juara 2",
        en: "2nd Place"
      },
      year: "2024",
      team: "SMKN 2 Buduran",
      description: {
        id: "Lomba Kompetensi Siswa (LKS) Kabupaten Sidoarjo. Mengembangkan solusi perangkat lunak enterprise lengkap dengan basis data dan desktop architecture.",
        en: "Vocational Student Skills Competition (LKS) Sidoarjo Regency. Developed full-featured enterprise software solutions with relational databases and desktop architecture."
      }
    },
    {
      id: "kainnovation",
      title: {
        id: "Peserta — KAInnovation Challenge 2025",
        en: "Participant — KAInnovation Challenge 2025"
      },
      tag: {
        id: "Kompetisi Inovasi",
        en: "Innovation Challenge"
      },
      year: "2025",
      team: "Tim Society.co",
      description: {
        id: "Perancangan solusi inovatif untuk tantangan industri bersama Tim Society.co.",
        en: "Conceived technological and operational solutions for real-world industrial challenges with Team Society.co."
      }
    }
  ],

  certificates: [
    {
      title: {
        id: "Sertifikat Kompetensi RPL — Mobile Development",
        en: "RPL Competency Certificate — Mobile Development"
      },
      issuer: "PT MASPION",
      date: {
        id: "Maret 2025",
        en: "March 2025"
      },
      category: "kompetensi",
      badge: {
        id: "Sertifikasi Industri",
        en: "Industry Certification"
      },
      description: {
        id: "Uji kompetensi keahlian resmi standar industri dalam rekayasa aplikasi perangkat bergerak.",
        en: "Official industry-standard competency assessment in mobile application engineering."
      }
    },
    {
      title: {
        id: "Sertifikat Kompetensi RPL — Web Development",
        en: "RPL Competency Certificate — Web Development"
      },
      issuer: "Pemerintah Provinsi Jawa Timur",
      date: {
        id: "Juni 2024",
        en: "June 2024"
      },
      category: "kompetensi",
      badge: {
        id: "Sertifikasi Pemerintah",
        en: "Government Certification"
      },
      description: {
        id: "Sertifikasi keahlian pengembangan aplikasi web resmi dari Dinas Tenaga Kerja & Pendidikan Pemprov Jatim.",
        en: "Certified qualification in web application engineering by the East Java Provincial Education and Manpower Office."
      }
    },
    {
      title: {
        id: "RevoU Software Engineering Coding Camp",
        en: "RevoU Software Engineering Coding Camp"
      },
      issuer: "RevoU",
      date: {
        id: "Mei 2026",
        en: "May 2026"
      },
      category: "dev",
      badge: "Software Engineering",
      description: {
        id: "Intensive bootcamp: arsitektur sistem modern, agile development, dan best practices software engineering.",
        en: "Intensive training covering modern system architectures, agile sprint workflows, and software engineering best practices."
      }
    },
    {
      title: {
        id: "Logicodix Web Development (React.js)",
        en: "Logicodix Web Development (React.js)"
      },
      issuer: "HIMTI UNESA",
      date: {
        id: "Desember 2025",
        en: "December 2025"
      },
      category: "dev",
      badge: "React.js",
      description: {
        id: "Pelatihan hands-on arsitektur frontend component-based dengan React.js dan Hooks.",
        en: "Hands-on engineering workshop on component-based frontend architectures using React.js and Hooks."
      }
    },
    {
      title: {
        id: "Project Management",
        en: "Project Management"
      },
      issuer: "Dicoding Indonesia",
      date: {
        id: "November 2025",
        en: "November 2025"
      },
      category: "kompetensi",
      badge: "Project Management",
      description: {
        id: "Prinsip manajemen proyek software, alur sprint, manajemen risiko, dan komunikasi tim.",
        en: "Software project management principles, agile sprint cadences, risk mitigation, and cross-functional team communication."
      }
    },
    {
      title: {
        id: "Intro to Data Analytics",
        en: "Intro to Data Analytics"
      },
      issuer: "RevoU",
      date: {
        id: "November 2025",
        en: "November 2025"
      },
      category: "core",
      badge: "Analytics",
      description: {
        id: "Analisis data, manipulasi spreadsheet, dan visualisasi metrik bisnis.",
        en: "Data analytics fundamentals, spreadsheet modeling, and business metric visualizations."
      }
    },
    {
      title: {
        id: "Flutter Beginner (Apps with Flutter)",
        en: "Flutter Beginner (Apps with Flutter)"
      },
      issuer: "Cursa",
      date: {
        id: "September 2025",
        en: "September 2025"
      },
      category: "dev",
      badge: "Mobile / Flutter",
      description: {
        id: "Fondasi widget tree, state management, dan navigasi aplikasi mobile Flutter.",
        en: "Core Flutter principles: widget trees, state handling, responsive mobile layouts, and application navigation."
      }
    },
    {
      title: {
        id: "Fullstack Web Development",
        en: "Fullstack Web Development"
      },
      issuer: "Udemy",
      date: {
        id: "September 2025",
        en: "September 2025"
      },
      category: "dev",
      badge: "Fullstack Web",
      description: {
        id: "Pembangunan aplikasi web end-to-end dengan database, server-side render, dan REST APIs.",
        en: "End-to-end web engineering covering relational databases, server-side business logic, and RESTful APIs."
      }
    },
    {
      title: {
        id: "Mastering Functions in C++",
        en: "Mastering Functions in C++"
      },
      issuer: "CodeSignal",
      date: {
        id: "Desember 2025",
        en: "December 2025"
      },
      category: "core",
      badge: "C++ Programming",
      description: {
        id: "Optimasi alokasi memori, pointers, function overloading, dan rekursi dalam C++.",
        en: "Memory management optimization, raw pointers, function overloading, and recursion techniques in C++."
      }
    },
    {
      title: {
        id: "Haskell Programming",
        en: "Haskell Programming"
      },
      issuer: "Dicoding Indonesia",
      date: {
        id: "Desember 2025",
        en: "December 2025"
      },
      category: "core",
      badge: "Functional / Haskell",
      description: {
        id: "Pemrograman fungsional murni (pure functional), immutability, dan pattern matching.",
        en: "Pure functional programming concepts, immutable data structures, type systems, and recursive pattern matching."
      }
    },
    {
      title: {
        id: "Certified C++ Programmer",
        en: "Certified C++ Programmer"
      },
      issuer: "Sololearn",
      date: "2025",
      category: "core",
      badge: "C++ Language",
      description: {
        id: "Sertifikasi dasar dan lanjutan sintaks C++, OOP, class design, dan polymorphism.",
        en: "Verification of fundamental and advanced C++ syntax, Object-Oriented design, and class polymorphism."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CREDENTIALS_DATA;
}
