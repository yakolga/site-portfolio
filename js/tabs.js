const tabButtons = document.querySelectorAll('.design-list__item'), 
      tabDescr = document.querySelectorAll('.design__descr'), 
      tabImages = document.querySelectorAll('.design-images');

const changeContent = (array, value) => {
  array.forEach((elem) => {
      if (elem.dataset.tabsField === value) {
        elem.classList.remove('hidden');
      } else {
        elem.classList.add('hidden');
      }
    });
}

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    const dataValue = tabButton.dataset.tabsHandler;
    
    changeContent(tabImages, dataValue)
    changeContent(tabDescr, dataValue)

    tabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});