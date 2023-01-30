const mobileMenuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".nav-content");
const navLinks = document.querySelectorAll(".nav-link");
const mobileCatMenu = document.querySelectorAll(".cat-menu");
const arrowIcon = document.querySelectorAll(".mobile-arrow");

let show = false;
mobileMenuBtn.addEventListener("click", () => {
  show = !show;
  if (show) {
    mobileMenu.style.display = "flex";
    mobileMenuBtn.classList.add("close");
  } else {
    mobileMenu.style.display = "none";
    mobileMenuBtn.classList.remove("close");
  }
});

navLinks.forEach((el, i) => {
  let show = false;
  el.addEventListener("click", () => {
    show = !show;
    // Hide other menus
    mobileCatMenu.forEach((menu, j) => {
      menu.style.display = "none";
      arrowIcon[j].style.transform = "rotate(0deg)";
    });
    // Show or hide the clicked menu
    if (show) {
      mobileCatMenu[i].style.display = "flex";
      arrowIcon[i].style.transform = "rotate(-180deg)";
    } else if (!show) {
      mobileCatMenu[i].style.display = "none";
      arrowIcon[i].style.transform = "rotate(0deg)";
    }
  });
});
