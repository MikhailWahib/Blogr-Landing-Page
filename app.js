const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuBtns = document.querySelectorAll('#mobile-menu-btn');
const mobileCatMenu = document.querySelectorAll('#mobile-cat-menu');


let show = false;
mobileMenuToggle.addEventListener('click', () => {
    show = !show;
    if (show) {
        mobileMenu.style.display = "block";
    } else{
        mobileMenu.style.display = "none";
    }
})

for (let i = 0; i < mobileMenuBtns.length; i++) {
    let show = false;
    mobileMenuBtns[i].addEventListener('click', () => {
        show = !show;
        if (show) {
            mobileCatMenu[i].style.display = 'flex';
        } else {
            mobileCatMenu[i].style.display = 'none';
        }
    })
}