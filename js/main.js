// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  // Animate template cards on scroll
  const cards = document.querySelectorAll('.template-card');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-visible');
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(card => {
    observer.observe(card);
  });

  // Animate contact form on scroll
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const formObserver = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactForm.classList.add('form-visible');
        }
      });
    }, { threshold: 0.3 });
    formObserver.observe(contactForm);
  }

  // Animate logo on page load
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.opacity = 0;
    setTimeout(() => {
      logo.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1)';
      logo.style.opacity = 1;
    }, 200);
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
