const mobileMenuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".nav-content");
const navLink = document.querySelectorAll(".nav-link");
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

for (let i = 0; i < navLink.length; i++) {
  let show = false;
  navLink[i].addEventListener("click", () => {
    show = !show;
    if (show) {
      // reset other menus
      mobileCatMenu.forEach((el) => {
        el.style.display = "none";
      });
      arrowIcon.forEach((el) => {
        el.style.transform = "rotate(0deg)";
      });

      mobileCatMenu[i].style.display = "flex";
      arrowIcon[i].style.transform = "rotate(-180deg)";
    } else {
      mobileCatMenu[i].style.display = "none";
      arrowIcon[i].style.transform = "rotate(0deg)";
    }
  });
}
