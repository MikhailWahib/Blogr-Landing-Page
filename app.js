const mobileMenuBtn = document.querySelector('.menu-btn')
const mobileMenu = document.querySelector('.nav-content')
const navLinks = document.querySelectorAll('.nav-link')
const mobileCatMenu = document.querySelectorAll('.cat-menu')
const arrowIcon = document.querySelectorAll('.mobile-arrow')

let isMobileMenuOpen = false

mobileMenuBtn.addEventListener('click', () => {
	isMobileMenuOpen = !isMobileMenuOpen
	mobileMenu.style.display = isMobileMenuOpen ? 'flex' : 'none'
	mobileMenuBtn.classList.toggle('close', isMobileMenuOpen)
})

navLinks.forEach((el, i) => {
	let isSubMenuOpen = false
	el.addEventListener('click', () => {
		isSubMenuOpen = !isSubMenuOpen
		mobileCatMenu.forEach((menu, j) => {
			menu.style.display = j === i && isSubMenuOpen ? 'flex' : 'none'
			arrowIcon[j].style.transform =
				j === i && isSubMenuOpen ? 'rotate(-180deg)' : 'rotate(0deg)'
		})
	})
})
