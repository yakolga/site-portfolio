const linksPrevent = document.querySelectorAll('.menu-list__link');
const mainButton = document.querySelector('.main__button');
const mainScroll = document.querySelector('.main__scroll');

const allLinks = [...linksPrevent, mainButton, mainScroll];

allLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const hashTag = link.getAttribute('href').substring(1);
    const section = document.getElementById(hashTag);
    
    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  });
});