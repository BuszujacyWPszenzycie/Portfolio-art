const body = document.querySelector('body')
const hamburgerBtn = document.querySelector('.hamburger')
const navModal = document.querySelector('.nav__mobile-modal')
const navMobileIcon = document.querySelector('.nav__mobile-icon-a')
const navMobileTop = document.querySelector('.nav__top')
const allMobileNavItems = document.querySelectorAll('.nav__mobile-modal-item')
console.log(allMobileNavItems)

document.addEventListener('DOMContentLoaded', function () {
	function addShadow() {
		if (window.scrollY >= 80) {
			navMobileTop.classList.add('nav__top-shadow')
		} else {
			navMobileTop.classList.remove('nav__top-shadow')
		}
	}

	allMobileNavItems.forEach(item =>
		item.addEventListener('click', () => {
			body.classList.remove('stop-scrolling')
			hamburgerBtn.classList.remove('is-active')
			navModal.classList.remove('nav__mobile-modal-active')
			navMobileIcon.classList.remove('nav__mobile-icon-a-active')
		})
	)

	window.addEventListener('scroll', addShadow)
})

const openMobileNav = () => {
	body.classList.toggle('stop-scrolling')
	hamburgerBtn.classList.toggle('is-active')
	navModal.classList.toggle('nav__mobile-modal-active')
	navMobileIcon.classList.toggle('nav__mobile-icon-a-active')
	navModal.style.top = window.scrollY + 'px'
}

hamburgerBtn.addEventListener('click', openMobileNav)
