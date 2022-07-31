// SCROLL NAV
;(function () {
	const header = document.querySelector('.header')
	const logoSignature = document.querySelector('.header__logo-signature')
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 30) {
			header.classList.add('header-active')
			logoSignature.style.color = '#57D6FF'
			headerLogo.style.display = 'block'
			headerLogoActive.style.display = 'none'
			header.classList.remove('header__logo-active')
		} else {
			header.classList.remove('header-active')
			logoSignature.style.color = '#ffffff'
			headerLogo.style.display = 'none'
			headerLogoActive.style.display = 'block'
			header.classList.add('header__logo-active')
		}
	})
})()

// BURGER MENU
let burger = document.querySelector('.header__burger')
let nav = document.querySelector('.header__nav')
const body = document.body
let scrollPosition = 0
burger.addEventListener('click', function () {
	if (nav.classList.contains('header__nav-active')) {
		body.style.removeProperty('overflow')
		body.style.removeProperty('position')
		body.style.removeProperty('top')
		body.style.removeProperty('width')
	} else {
		scrollPosition = window.pageYOffset
		body.style.overflow = 'hidden'
		body.style.position = 'fixed'
		body.style.width = '100%'
	}
	nav.classList.toggle('header__nav-active')
})

new Swiper('.intro', {
	speed: 500,
	effect: 'fade',
	loop: true,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	autoplay: {
		delay: 4000,
	},
	a11y: {
		enabled: true,
	},
	allowTouchMove: false,
})
new Swiper('.subscribe-slider', {
	spaceBetween: 35,
	speed: 800,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	a11y: {
		enabled: true,
	},
	slidesPerView: 'auto',
})

let contactExit = document.querySelector('.contact-arrow')
let contactBlock = document.querySelector('.contact')
contact.addEventListener('click', function () {
	contactBlock.classList.add('contact-active')
	body.classList.add('lock')
	nav.classList.remove('header__nav-active')
})
contactExit.addEventListener('click', function () {
	body.classList.remove('lock')
	contactBlock.classList.remove('contact-active')
})
