// Active nav state for services sidebar
const navItems = document.querySelectorAll('.services-nav-item');
navItems.forEach(item => {
  item.addEventListener('click', function () {
    navItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});

// Fade-in on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.serve-card, .news-card, .service-tile, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
