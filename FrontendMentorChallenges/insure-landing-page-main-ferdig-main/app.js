// Get elements
const mobileNav = document.querySelector('.mobile-nav');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

// Open menu
openBtn.addEventListener('click', function() {
  mobileNav.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', function() {
  mobileNav.classList.remove('active');
});

// Close menu when link is clicked
const navLinks = document.querySelectorAll('.mobile-nav a');
for (const link of navLinks) {
  link.addEventListener('click', function() {
    mobileNav.classList.remove('active');
  });
}

// Close menu on scroll
window.addEventListener('scroll', function() {
  mobileNav.classList.remove('active');
});
