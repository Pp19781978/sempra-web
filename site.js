(function () {
  document.documentElement.classList.add('js');

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('.mobile-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      var menu = link.closest('details');
      if (menu) menu.removeAttribute('open');
    });
  });

  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 12); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var targets = document.querySelectorAll('.section-head, .section .card, .showcase-card, .seed-feature, .industry-contact, .stat, .contact-card');
  if (!('IntersectionObserver' in window)) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  targets.forEach(function (el) {
    var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
    el.style.setProperty('--d', Math.min(siblings, 5) * 0.07 + 's');
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
