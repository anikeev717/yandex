const header = document.getElementsByClassName("header")[0];
document.addEventListener("scroll", () => {
  if (window.pageYOffset >= 1) {
    header.classList.add("header--is-scrolled");
  } else {
    header.classList.remove("header--is-scrolled");
  }
});
