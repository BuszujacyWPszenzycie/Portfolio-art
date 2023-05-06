const body = document.querySelector('body')
const hamburgerBtn = document.querySelector('.hamburger')
const navModal = document.querySelector('.nav__mobile-modal')
const navMobileIcon = document.querySelector('.nav__mobile-icon-a')
const navTop = document.querySelector('.nav__top')
const allMobileNavItems = document.querySelectorAll('.nav__mobile-modal-item')

// Funcion for adding shadow and background to nav__top

document.addEventListener('DOMContentLoaded', function () {
	function addShadow() {
		const navTopAll = document.querySelectorAll('.nav__top')
		if (window.scrollY >= 80) {
			for (let i = 0; i < navTopAll.length; i++) {
				navTopAll[i].classList.add('nav__top-shadow')
			}
		} else {
			for (let i = 0; i < navTopAll.length; i++) {
				navTopAll[i].classList.remove('nav__top-shadow')
			}
		}
	}
	window.addEventListener('scroll', addShadow)
})

// Function for showing the modal for nav__mobile

document.addEventListener('DOMContentLoaded', function () {
	allMobileNavItems.forEach(item =>
		item.addEventListener('click', () => {
			body.classList.remove('stop-scrolling')
			hamburgerBtn.classList.remove('is-active')
			navModal.classList.remove('nav__mobile-modal-active')
			navMobileIcon.classList.remove('nav__mobile-icon-a-active')
		})
	)
})

const openMobileNav = () => {
	body.classList.toggle('stop-scrolling')
	hamburgerBtn.classList.toggle('is-active')
	navModal.classList.toggle('nav__mobile-modal-active')
	navMobileIcon.classList.toggle('nav__mobile-icon-a-active')
	navModal.style.top = window.scrollY + 'px'
}

hamburgerBtn.addEventListener('click', openMobileNav)

//
