const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".li-style");
const links = document.querySelectorAll(".li-style li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});