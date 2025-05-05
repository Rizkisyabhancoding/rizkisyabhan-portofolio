document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-content");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          hero.classList.add("animate");
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(hero);
  });
  
// ===============================
// Navbar Hamburger Menu & Scroll Effect
// ===============================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

// Event saat scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (hamburger && navLinks) {
    // Tampilkan hamburger menu jika scroll > 100px
    if (scrollY > 100) {
      hamburger.style.display = 'flex';
      navLinks.style.display = 'none';
    } else {
      hamburger.style.display = 'none';
      navLinks.style.display = 'flex';
    }
  }

  if (navbar) {
    // Efek navbar (misal: ubah background)
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Toggle menu saat hamburger diklik
hamburger?.addEventListener('click', () => {
  if (navLinks) {
    navLinks.classList.toggle('active');
    navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
  }
});

// Tutup menu jika klik di luar nav saat terbuka (opsional untuk UX)
document.addEventListener('click', (e) => {
  if (
    navLinks?.classList.contains('active') &&
    !hamburger.contains(e.target) &&
    !navLinks.contains(e.target)
  ) {
    navLinks.classList.remove('active');
    navLinks.style.display = 'none';
  }
});

// ===============================
// Smooth Scroll for Anchor Links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

