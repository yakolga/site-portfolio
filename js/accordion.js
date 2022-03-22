const featureLink = document.querySelectorAll('.feature__link'), 
      featureSub = document.querySelectorAll('.feature-sub');

featureLink.forEach((link) => {
  link.addEventListener('click', () => {
    featureLink.forEach((button) => {
      button.classList.remove('feature__link_active');
      button.nextElementSibling.classList.add('hidden');
    });
    link.classList.toggle('feature__link_active');
    link.nextElementSibling.classList.toggle('hidden');
  });
});