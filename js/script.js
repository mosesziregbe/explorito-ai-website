// Mobile Menu
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
const mobileMenuLinks = document.querySelectorAll('.navbar__mobile-menu-link');

function navToggle() {
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on internal links (starting with #)
  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Only close menu for internal anchor links (starting with #)
      if (href && href.startsWith('#')) {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('active');
      }
    });
  });
}

// Close menu when clicking outside of it
function closeMenuModal() {
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      menuBtn.classList.remove('open');
      mobileMenu.classList.remove('active');
    }
  });
}

// set current year for copyright

const yearEl = document.querySelector('.footer__copyright-year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Typewriter on hero section
const words = [
  'Everything',
  'Slack',
  'SharePoint',
  'Dropbox',
  'OneDrive',
  'Outlook',
  'Gmail',
  'Folders',
];

let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1500;

function type() {
  const element = document.getElementById('typewriter');

  // Check if element exists before trying to use it
  if (!element) {
    return; // Exit if element doesn't exist
  }

  if (!isDeleting) {
    // Typing
    currentWord = words[i].substring(0, j + 1);
    element.textContent = currentWord;
    element.className =
      'hero__title--primary typewriter-container typewriter-cursor';
    j++;

    if (j === words[i].length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
      return;
    }
    setTimeout(type, typingSpeed);
  } else {
    // Deleting
    currentWord = words[i].substring(0, j - 1);
    element.textContent = currentWord;
    element.className =
      'hero__title--primary typewriter-container typewriter-cursor';
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 200);
      return;
    }
    setTimeout(type, deletingSpeed);
  }
}

// Navbar scroll changes
function navbarScroll() {
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY) {
      navbar.classList.add('navbar--scroll');
    } else {
      navbar.classList.remove('navbar--scroll');
    }
  });
}

// Open and Close Accordion Inner Content

function accordionContent() {
  const faqItems = document.querySelectorAll('.faq-accordion__tab-item');
  // console.log(faqItems);
  faqItems.forEach((faqItem) => {
    faqItem.addEventListener('click', function () {
      const button = faqItem.querySelector('.plus');
      const faqContainer = faqItem.querySelector(
        '.faq-accordion__tab-item-flex'
      );
      const innerContent = faqItem.querySelector(
        '.faq-accordion__tab-inner-content'
      );
      // console.log(innerContent.textContent);
      button.classList.toggle('open');
      innerContent.classList.toggle('active');

      if (innerContent.classList.contains('active')) {
        faqContainer.style.backgroundColor = '#111928';
      } else {
        faqContainer.style.backgroundColor = '';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    type(); // Start the typewriter effect
  }

  // Accordion Content
  accordionContent();

  // Navbar scroll
  navbarScroll();

  // Navigation Toggle
  navToggle();

  // Close menu modal
  closeMenuModal();
});
