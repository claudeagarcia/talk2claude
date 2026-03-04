/* ═══════════════════════════════════════════════════════════════
   TALK2CLAUDE — Interactive Features
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── SCROLL REVEAL ───
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // ─── FRAMEWORK CARD TOGGLES ───
  document.querySelectorAll('.card-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.framework-card');
      const expanded = card.querySelector('.card-expanded');
      const isOpen = expanded.classList.contains('open');

      // Close all others
      document.querySelectorAll('.card-expanded.open').forEach(el => {
        el.classList.remove('open');
        el.closest('.framework-card').querySelector('.card-toggle').classList.remove('open');
      });

      // Toggle current
      if (!isOpen) {
        expanded.classList.add('open');
        btn.classList.add('open');
      }
    });
  });

  // ─── MOBILE NAV TOGGLE ───
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // ─── NEWSLETTER FORM ───
  const form = document.querySelector('.newsletter-form');
  if (form) {
    // Create hidden iframe for form submission
    const iframe = document.createElement('iframe');
    iframe.name = 'bd-subscribe-frame';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    form.setAttribute('target', 'bd-subscribe-frame');

    form.addEventListener('submit', () => {
      const btn = form.querySelector('button');
      const originalText = btn.textContent;
      // Delay the UI update so the form submits with the email value first
      setTimeout(() => {
        btn.textContent = 'Thank you!';
        btn.style.background = 'var(--violet)';
        form.querySelector('input[type="email"]').value = '';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 3000);
      }, 100);
    });
  }

  // ─── NAV BACKGROUND ON SCROLL ───
  let lastScroll = 0;
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      nav.style.background = 'rgba(10,10,10,0.98)';
    } else {
      nav.style.background = '';
    }
    lastScroll = currentScroll;
  }, { passive: true });

});
