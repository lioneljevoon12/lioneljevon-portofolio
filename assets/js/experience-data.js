/**
 * Complete Bilingual Data for Experience Page
 * Lionel Jevon's Portfolio
 */

const EXPERIENCE_DATA = {
  tech: [
    {
      id: "hexa-integra",
      role: {
        id: "Software Engineer Intern",
        en: "Software Engineer Intern"
      },
      period: {
        id: "Oktober 2024 – Maret 2025",
        en: "October 2024 – March 2025"
      },
      company: "CV Hexa Integra Mandiri IT Workshop, Sidoarjo",
      bullets: {
        id: [
          "Mengembangkan sistem informasi pergudangan terpadu (Goodang) lengkap dengan fitur asisten cerdas AI Chatbot.",
          "Mengembangkan modul frontend berbasis Vue.js (JavaScript), arsitektur backend REST API dengan Laravel (PHP), serta aplikasi mobile pendukung dengan Flutter (Dart).",
          "Memanfaatkan Git dan GitHub untuk version control, pull request review, serta berkolaborasi aktif merespons kebutuhan klien."
        ],
        en: [
          "Developed an enterprise warehouse information system (Goodang) augmented with an intelligent AI Chatbot assistant.",
          "Built interactive frontend modules with Vue.js (JavaScript), robust REST APIs with Laravel (PHP), and companion mobile apps with Flutter (Dart).",
          "Leveraged Git and GitHub for team version control, pull request reviews, and agile collaboration responding to client specifications."
        ]
      },
      tags: ["Vue.js", "Laravel", "Flutter", "AI Chatbot", "Git / GitHub"]
    },
    {
      id: "gdoc-member",
      role: {
        id: "Member — Mobile Development",
        en: "Member — Mobile Development"
      },
      period: {
        id: "Oktober 2025 – Oktober 2026",
        en: "October 2025 – October 2026"
      },
      company: "Google Developer Group on Campus (GDGoC) UNESA",
      bullets: {
        id: [
          "Mengikuti technical study jam, hands-on workshop, dan diskusi arsitektur pengembangan aplikasi Android serta teknologi Google ecosystem.",
          "Membangun kolaborasi teknis lintas disiplin dalam pemecahan masalah komputasi berbasis mobile framework."
        ],
        en: [
          "Participated in technical study jams, hands-on development workshops, and architectural sessions on Android and Google ecosystem technologies.",
          "Collaborated in cross-disciplinary engineering teams to solve computational problems with modern mobile frameworks."
        ]
      },
      tags: ["Android", "Google Tech", "Mobile Dev"]
    },
    {
      id: "skuling",
      role: {
        id: "Squad Mentor",
        en: "Squad Mentor"
      },
      period: {
        id: "Oktober 2025 – Mei 2026",
        en: "October 2025 – May 2026"
      },
      company: "Skuling",
      bullets: {
        id: [
          "Berbagi pengalaman, motivasi, dan materi edukatif kepada siswa SMA serta mahasiswa baru terkait persiapan akademik dan pengenalan dunia coding perangkat lunak."
        ],
        en: [
          "Shared practical experiences, educational mentorship, and study methodologies to high school students and university freshmen regarding software development."
        ]
      },
      tags: ["Mentorship", "Community", "Education"]
    },
    {
      id: "gdg-iox",
      role: {
        id: "Peserta — GDG Surabaya IOX 2026",
        en: "Participant — GDG Surabaya IOX 2026"
      },
      period: {
        id: "2026",
        en: "2026"
      },
      company: "Google Developer Group Surabaya",
      bullets: {
        id: [
          "Mengikuti konferensi dan sesi teknis untuk memperluas wawasan mengenai ekosistem teknologi modern, arsitektur cloud, dan penerapan Agentic AI terkini."
        ],
        en: [
          "Attended technical keynotes and breakout sessions exploring modern cloud architectures, developer ecosystems, and emerging Agentic AI capabilities."
        ]
      },
      tags: ["Agentic AI", "Cloud", "Tech Conference"]
    }
  ],

  leadership: [
    {
      id: "gdoc-core",
      role: {
        id: "Core Team Concept Innovation",
        en: "Core Team Concept Innovation"
      },
      period: {
        id: "2026",
        en: "2026"
      },
      organization: "Google Developer Group on Campus (GDGoC) UNESA",
      description: {
        id: "Berperan dalam perancangan konsep program kerja, inovasi kurikulum kegiatan teknis, serta inisiatif kolaboratif untuk komunitas developer mahasiswa di kampus.",
        en: "Spearheaded work program ideation, curriculum innovation for developer study tracks, and collaborative initiatives across the university developer community."
      }
    },
    {
      id: "olivia-lead",
      role: {
        id: "Ketua Pelaksana — Workshop OLIVIA 2026",
        en: "Project Leader — OLIVIA 2026 Workshop"
      },
      period: {
        id: "April – Mei 2026",
        en: "April – May 2026"
      },
      organization: "Fakultas Vokasi, Universitas Negeri Surabaya",
      bullets: {
        id: [
          "Mengoordinasikan persiapan dan pelaksanaan workshop persiapan olimpiade vokasi, termasuk perumusan tema, timeline, dan kebutuhan kegiatan.",
          "Menyelaraskan koordinasi lintas divisi kepanitiaan, pihak dekanat fakultas, serta pemateri workshop.",
          "Menyiapkan dokumen pertanggungjawaban kegiatan resmi (LPJ/SPJ)."
        ],
        en: [
          "Coordinated preparation and operational execution for the vocational olympiad workshop, establishing themes, milestones, and logistics.",
          "Bridged communication across cross-functional student committee divisions, faculty deanship, and guest keynote speakers.",
          "Prepared official event accountability reports (LPJ/SPJ) with compliance standards."
        ]
      }
    },
    {
      id: "bem-risnovtek",
      role: {
        id: "Staf Departemen Riset & Inovasi Teknologi (Risnovtek)",
        en: "Staff of Research & Tech Innovation (Risnovtek)"
      },
      period: {
        id: "Februari 2026 – Sekarang",
        en: "February 2026 – Present"
      },
      organization: "BEM Fakultas Vokasi UNESA",
      description: {
        id: "Mendukung pelaksanaan program kerja riset inovasi teknologi, koordinasi internal antar departemen, dan penyelesaian tugas organisasi secara konsisten.",
        en: "Supported technological innovation initiatives, internal inter-departmental coordination, and timely delivery of organizational objectives."
      }
    },
    {
      id: "additional-campus",
      items: [
        {
          title: {
            id: "Koordinator Sie Perlengkapan — LKMM-TM BEM Vokasi",
            en: "Logistics Coordinator — LKMM-TM BEM Vokasi"
          },
          period: "September 2026",
          desc: {
            id: "Mengoordinasikan logistik, alat operasional, dan kesiapan tim lapangan.",
            en: "Coordinated operational equipment, event supplies, and field readiness for student leadership training."
          }
        },
        {
          title: {
            id: "PIC / Pendamping Gugus — PKKMB Fakultas Vokasi",
            en: "Cohort Facilitator (PIC) — PKKMB Faculty of Vocational Studies"
          },
          period: "Agustus 2026",
          desc: {
            id: "Mendampingi orientasi mahasiswa baru dan mengoordinasikan kebutuhan gugus.",
            en: "Mentored freshman student cohorts and facilitated daily operational communication with the organizing board."
          }
        },
        {
          title: {
            id: "Liaison Officer (LO) — Olimpiade Vokasi Indonesia (OLIVIA 2026)",
            en: "Liaison Officer (LO) — Indonesian Vocational Olympiad (OLIVIA 2026)"
          },
          period: "Agustus 2026",
          desc: {
            id: "Mendampingi delegasi peserta kompetisi nasional dan memfasilitasi komunikasi operasional.",
            en: "Assisted national competition delegate teams and managed logistics coordination during the national event."
          }
        },
        {
          title: {
            id: "Sekretaris — English Club SMKN 2 Buduran",
            en: "Secretary — English Club SMKN 2 Buduran"
          },
          period: "2022 – 2025",
          desc: {
            id: "Mengelola administrasi persuratan, notulensi rapat, dan program diskusi bahasa Inggris.",
            en: "Administered official correspondence, meeting minutes, and facilitated English debate and practice workshops."
          }
        }
      ]
    }
  ],

  education: [
    {
      id: "unesa",
      institution: "Universitas Negeri Surabaya (UNESA)",
      period: {
        id: "Agustus 2025 – 2029",
        en: "August 2025 – 2029"
      },
      major: {
        id: "D4 Manajemen Informatika • Fakultas Vokasi",
        en: "Bachelor of Applied Science in Informatics Management • Faculty of Vocational Studies"
      },
      gpa: "3,87",
      gpaLabel: {
        id: "Indeks Prestasi Kumulatif (IPK)",
        en: "Cumulative Grade Point Average (GPA)"
      },
      description: {
        id: "Program studi terapan (vokasi) yang mengintegrasikan rekayasa sistem informasi, arsitektur basis data, pengembangan aplikasi mobile dan web berstandar industri, serta tata kelola proyek TI modern.",
        en: "Applied vocational program integrating enterprise information system engineering, database architectures, industry-grade web and mobile app development, and agile project governance."
      }
    },
    {
      id: "smkn2",
      institution: "SMK Negeri 2 Buduran, Sidoarjo",
      period: {
        id: "Juli 2022 – Mei 2025",
        en: "July 2022 – May 2025"
      },
      major: {
        id: "Rekayasa Perangkat Lunak (RPL)",
        en: "Software Engineering (RPL)"
      },
      description: {
        id: "Fondasi dalam paradigma Object Oriented Programming (OOP), database relasional MySQL, pengembangan aplikasi web, dan software solutions.",
        en: "Solid foundation in Object-Oriented Programming (OOP) paradigms, relational MySQL databases, full-stack web development, and desktop solutions."
      },
      bullets: {
        id: [
          "Meraih Juara 2 LKS Tingkat Kabupaten Sidoarjo bidang IT Software Solutions for Business (2024).",
          "Aktif sebagai pengurus inti / Sekretaris di English Club sekolah."
        ],
        en: [
          "Awarded 2nd Place in LKS Sidoarjo Regency for IT Software Solutions for Business (2024).",
          "Served as Core Board Secretary of the school's English Club."
        ]
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXPERIENCE_DATA;
}
