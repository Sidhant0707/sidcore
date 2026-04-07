// ── NAVBAR SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── ACTIVE NAV ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}, { passive: true });

// ── FADE UP ON SCROLL ──
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => fadeObserver.observe(el));

// ── SKILL BARS ANIMATE ON SCROLL ──
const skillFills = document.querySelectorAll('.skill-fill');
skillFills.forEach(fill => {
  const target = fill.style.width;
  fill.style.setProperty('--target-width', target);
});
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
skillFills.forEach(fill => skillObserver.observe(fill));

// ── PROGRESS BAR ANIMATE ON SCROLL ──
const progressFill = document.querySelector('.progress-fill');
if (progressFill) {
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressFill.classList.add('animate');
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  progressObserver.observe(progressFill);
}

// ── RESUME BUTTON PLACEHOLDER ──
document.querySelectorAll('a[href="your-resume-link-here"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Resume coming soon! Reach me at sidhantkumar0707@gmail.com');
  });
});
