/* =====================================================================
   Đỗ Văn Thuỳ 1975 — main.js
   Menu mobile, header khi cuộn, hiệu ứng hiện dần (reveal),
   nút cuộn lên đầu, lightbox ảnh giấy phép, năm tự động.
   ===================================================================== */

(function () {
  'use strict';

  /* ---------- Menu mobile ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const open = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });

    // Đóng menu khi bấm vào 1 link
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Header đổi nền khi cuộn ---------- */
  const header = document.querySelector('.site-header');
  const backTop = document.getElementById('back-top');

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 12);
    if (backTop) backTop.classList.toggle('show', y > 420);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Hiệu ứng hiện dần khi cuộn tới ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-right');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;

        // Stagger cho lưới sản phẩm: mỗi card trễ thêm 60ms
        const parent = el.parentElement;
        let delay = 0;
        if (parent && parent.classList.contains('products-grid')) {
          delay = Array.prototype.indexOf.call(parent.children, el) * 60;
        }

        if (delay) {
          el.style.transitionDelay = delay + 'ms';
        }
        el.classList.add('in');

        // Bỏ delay sau khi hiện xong để hover không bị trễ
        setTimeout(function () {
          el.style.transitionDelay = '';
        }, delay + 800);

        observer.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Trình duyệt cũ: hiện hết luôn
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Lightbox ảnh giấy phép ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  // Ảnh giấy phép (khi bạn thêm ảnh thật) sẽ tự có thể bấm phóng to.
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('.js-lightbox');
    if (trigger) {
      openLightbox(trigger.currentSrc || trigger.src, trigger.alt);
    }
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* ---------- Năm tự động ở footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
