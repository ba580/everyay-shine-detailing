const cards = document.querySelectorAll('.card, .service-card, .price-card');

cards.forEach(card => {

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px)';
  });

});
