const siteHeader = document.querySelector(".site-header");
const menuToggleBtn = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scroll", window.scrollY > 10);
});

menuToggleBtn.addEventListener("click", () => {
  menuToggleBtn.classList.toggle("active");
  mainNav.classList.toggle("open");
  document.body.classList.toggle("overhide");
});
