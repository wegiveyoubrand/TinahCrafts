const menuToggler = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggler.addEventListener("click", function () {
  menu.classList.toggle("active");
});
