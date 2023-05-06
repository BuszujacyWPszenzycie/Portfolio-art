const body = document.querySelector('body')
const hamburgerBtn = document.querySelector('.hamburger')
const navModal = document.querySelector('.nav__mobile-modal')
const navMobileIcon = document.querySelector('.nav__mobile-icon-a')

const openMobileNav = () => {
	body.classList.toggle('stop-scrolling')
	hamburgerBtn.classList.toggle('is-active')
	navModal.classList.toggle('nav__mobile-modal-active')
	navMobileIcon.classList.toggle('nav__mobile-icon-a-active')
	navModal.style.top = window.scrollY + 'px'
}

hamburgerBtn.addEventListener('click', openMobileNav)
