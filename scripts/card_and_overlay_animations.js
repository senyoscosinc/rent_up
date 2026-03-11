document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect - apply to both nav and .navbar
  const nav = document.querySelector('nav');
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
      navbar.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
      navbar.classList.remove('scrolled');
    }
  });

  // Navigation Menu Toggle
  const menuButton = document.querySelector('.open-menu-button');
  const closeMenuButton = document.querySelector('.close-menu-button');
  const navMenu = document.querySelector('.nav-menu');

  function openMenu() {
    closeWaitlist();  // close waitlist if open
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

  // Waitlist popup behavior
  const waitlistTriggers = Array.from(document.querySelectorAll('[id="join-waitlist"]'));
  const waitlistCard = document.querySelector('.waitlist-card');
  const successCard = document.querySelector('.success-card');
  const popupCloseBtns = Array.from(document.querySelectorAll('.popup-close-btn'));
  const copyLinkBtn = document.getElementById('copy-link-btn');

  function openWaitlist(e) {
    e.stopPropagation();
    closeMenu();  // close nav menu if open
    if (waitlistCard) {
      waitlistCard.classList.add('open');
    }
  }

  function closeWaitlist() {
    if (waitlistCard) {
      waitlistCard.classList.remove('open');
    }
  }

  function openSuccess() {
    if (successCard) {
      successCard.classList.add('open');
    }
  }

  function closeSuccess() {
    if (successCard) {
      successCard.classList.remove('open');
    }
  }

  // copy current page URL to clipboard
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', function() {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        copyLinkBtn.textContent = 'Link Copied!';
        setTimeout(() => { copyLinkBtn.textContent = 'Copy Link'; }, 2000);
        // auto-close success card after 1 second
        setTimeout(() => { closeSuccess(); }, 1000);
      }).catch(err => {
        console.error('Copy failed', err);
      });
    });
  }

  // Attach click listeners to every element that has the waitlist id
  if (waitlistTriggers.length) {
    waitlistTriggers.forEach(trigger => {
      trigger.addEventListener('click', openWaitlist);
    });
  }

  // Close popup via any close button. Determine which card to close based on parent element.
  popupCloseBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const parent = btn.closest('.waitlist-card, .success-card');
      if (parent && parent.classList.contains('waitlist-card')) {
        closeWaitlist();
      }
      if (parent && parent.classList.contains('success-card')) {
        closeSuccess();
      }
    });
  });

  // Close when clicking outside any overlay card
  document.addEventListener('click', function() {
    closeWaitlist();
    closeSuccess();
  });

  // stop propagation on the cards themselves so outside clicks close only when necessary
  if (waitlistCard) {
    waitlistCard.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  if (successCard) {
    successCard.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // ESC key closes nav, waitlist, and success cards
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
      closeWaitlist();
      closeSuccess();
    }
  });
});
