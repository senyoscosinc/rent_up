document.addEventListener('DOMContentLoaded', function() {
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
});
