/**
 * Shared Site Utilities & Interactive Behaviors
 * Lionel Jevon's Portfolio
 * - Theme Switcher (Dark & Light Mode)
 * - Typewriter Animation
 * - Count-Up Animation
 * - Navigation & Modals
 */

// ================= THEME MANAGER (DARK / LIGHT) =================
const ThemeManager = {
  currentTheme: localStorage.getItem('lionel_theme') || 'dark',

  init() {
    this.applyTheme(this.currentTheme);

    const toggleBtns = document.querySelectorAll('#theme-toggle, .theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.toggle();
      });
    });
  },

  applyTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('lionel_theme', theme);

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Update Icons
    document.querySelectorAll('.theme-icon-sun').forEach(el => {
      el.classList.toggle('hidden', theme !== 'dark');
    });
    document.querySelectorAll('.theme-icon-moon').forEach(el => {
      el.classList.toggle('hidden', theme === 'dark');
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  },

  toggle() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }
};

// Immediate apply before render to avoid FOUC
(function() {
  const saved = localStorage.getItem('lionel_theme') || 'dark';
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

// ================= TYPEWRITER EFFECT =================
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const roles = [
    'Mobile Developer',
    'Concept Innovator',
    'Project Leader',
    'Software Engineer'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentWord = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      el.textContent = currentWord.substring(0, charIdx);
    } else {
      charIdx++;
      el.textContent = currentWord.substring(0, charIdx);
    }

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && charIdx === currentWord.length) {
      delay = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400; // Pause before typing next word
    }

    setTimeout(type, delay);
  }

  type();
}

// ================= COUNT-UP ANIMATION =================
function initCountUp() {
  const counterElements = document.querySelectorAll('[data-count-target]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      obs.unobserve(el);

      const targetStr = el.getAttribute('data-count-target');
      const isDecimal = targetStr.includes('.');
      const target = parseFloat(targetStr);
      const duration = 1600; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * easeOut;

        if (isDecimal) {
          el.textContent = currentVal.toFixed(2);
        } else {
          el.textContent = Math.floor(currentVal);
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = isDecimal ? target.toFixed(2) : target;
        }
      }

      requestAnimationFrame(update);
    });
  }, { threshold: 0.2 });

  counterElements.forEach(el => observer.observe(el));
}

// ================= DOM READY INIT =================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Initialize Theme
  ThemeManager.init();

  // 3. Initialize Typewriter
  initTypewriter();

  // 4. Initialize Count-Up Animation
  initCountUp();

  // 5. Sticky & Glassmorphism Header
  const header = document.getElementById("site-header");
  const scrollTopBtn = document.getElementById("scroll-top");

  function handleScroll() {
    const isScrolled = window.scrollY > 30;
    if (header) {
      if (isScrolled) {
        header.classList.add("shadow-lg", "py-2");
        header.classList.remove("py-4");
      } else {
        header.classList.remove("shadow-lg", "py-2");
        header.classList.add("py-4");
      }
    }

    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
        scrollTopBtn.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
      } else {
        scrollTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
        scrollTopBtn.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
      }
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 6. Mobile Drawer Menu Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconX = document.getElementById("icon-x");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        if (iconMenu) iconMenu.classList.add("hidden");
        if (iconX) iconX.classList.remove("hidden");
      } else {
        mobileMenu.classList.add("hidden");
        if (iconMenu) iconMenu.classList.remove("hidden");
        if (iconX) iconX.classList.add("hidden");
      }
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        if (iconMenu) iconMenu.classList.remove("hidden");
        if (iconX) iconX.classList.add("hidden");
      });
    });
  }

  // 7. Update Copyright Year
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 8. Contact Form Handler (Direct WhatsApp)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name")?.value || "";
      const email = document.getElementById("contact-email")?.value || "";
      const subject = document.getElementById("contact-subject")?.value || "";
      const message = document.getElementById("contact-message")?.value || "";

      const text = `Halo Lionel, saya *${name}* (${email}).%0A%0A*Topik:* ${subject}%0A*Pesan:*%0A${message}`;
      const waUrl = `https://wa.me/6289514590179?text=${encodeURIComponent(text)}`;
      
      const statusEl = document.getElementById("form-status");
      if (statusEl) {
        statusEl.className = "text-sm p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mb-4";
        statusEl.innerHTML = `<span class="font-semibold">Membuka WhatsApp...</span> Jika tidak terbuka otomatis, <a href="${waUrl}" target="_blank" class="underline font-bold text-blue-600 dark:text-amber-400">klik di sini</a>.`;
        statusEl.classList.remove("hidden");
      }

      window.open(waUrl, "_blank");
    });
  }
});
