const modalButton = document.querySelectorAll('.more'), 
      modal = document.querySelector('.modal'), 
      overlay = modal.querySelector('.overlay'), 
      modalClose = modal.querySelector('.modal__close');
 

modalButton.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
  })
});


overlay.addEventListener('click', () => {
   modal.classList.add('hidden');
});

modalClose.addEventListener('click', () => {
   modal.classList.add('hidden');
});