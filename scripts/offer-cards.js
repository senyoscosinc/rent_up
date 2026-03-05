document.addEventListener('DOMContentLoaded', function() {
  // Navigation Menu Toggle
  const menuButton = document.querySelector('.menu-button');
  const closeMenuButton = document.querySelector('.close-menu-button');
  const navMenu = document.querySelector('.nav-menu');

  function openMenu() {
    navMenu.classList.add('open');
  }

  function closeMenu() {
    navMenu.classList.remove('open');
  }

  // Menu button click
  if (menuButton) {
    menuButton.addEventListener('click', openMenu);
  }

  // Close button click
  if (closeMenuButton) {
    closeMenuButton.addEventListener('click', closeMenu);
  }

  // ESC key to close menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // Offer Card Toggle
  const cards = Array.from(document.querySelectorAll('.offer-card'));
  function closeAll() {
    cards.forEach(card => {
      card.classList.remove('open');
      const btn = card.querySelector('.offer-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  cards.forEach(card => {
    const btn = card.querySelector('.offer-toggle');
    if (!btn) return;

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = card.classList.contains('open');
      closeAll();
      if (!isOpen) {
        card.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Prevent clicks inside the card from closing it immediately
    card.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  // Close when clicking anywhere else on the document
  document.addEventListener('click', function() {
    closeAll();
  });

  // FAQ Toggle
  const faqItems = Array.from(document.querySelectorAll('.faq-item'));

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function() {
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current FAQ item
      item.classList.toggle('active');
    });
  });
});
