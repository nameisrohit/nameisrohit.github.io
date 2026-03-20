/* ═══════════════════════════════════════════
   ROHIT YADAV — PORTFOLIO JS
   Scroll reveals, nav, cursor, mobile menu
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Scroll reveal ──
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  // ── Nav scroll shadow ──
  const nav = document.getElementById('nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = y;
  }, { passive: true });

  // ── Smooth scroll for nav links ──
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
      }
    });
  });

  // ── Mobile menu toggle ──
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      }
    });
  }

  // ── Cursor glow (desktop only) ──
  const glow = document.getElementById('cursorGlow');
  if (glow && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach((a) => {
            a.style.color = '';
            if (a.getAttribute('href') === '#' + id) {
              a.style.color = 'var(--accent)';
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  // ── Stagger reveal children ──
  document.querySelectorAll('.hero-left > .reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.1) + 's';
  });

})();
