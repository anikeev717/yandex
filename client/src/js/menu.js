const mbutton = document.getElementsByClassName("menu__button")[0];
const menu = document.getElementsByClassName("menu__list")[0];
const items = [...document.getElementsByClassName("menu__item")];
const lbutton = document.getElementsByClassName("menu__list-button")[0];
mbutton.addEventListener("click", () => {
  mbutton.classList.toggle("menu__button--is-active");
  menu.classList.toggle("menu__list--is-open");
  lbutton.classList.toggle("menu__list-button--is-visible");
  items.forEach((element) => {
    element.classList.toggle("menu__item--is-visible");
  });
});
