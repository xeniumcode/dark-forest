// Theme toggle
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Update aria-label for accessibility
      themeToggle.setAttribute('aria-label', newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });

    // Set initial aria-label
    const currentTheme = html.getAttribute('data-theme');
    themeToggle.setAttribute('aria-label', currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('navigation-menu');

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (nav.classList.contains('menu-open') && !nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('menu-open');
      }
    });

    // Close menu when clicking a link (mobile)
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('menu-open');
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('menu-open')) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('menu-open');
        mobileMenuBtn.focus();
      }
    });
  }
});
