(function () {
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('.mobile-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      var menu = link.closest('details');
      if (menu) menu.removeAttribute('open');
    });
  });
})();

