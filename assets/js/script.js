const btnMenu = document.querySelector('.site-header__menu-btn')
const hiddenMenu = document.querySelector('.hidden-header__nav-list')

btnMenu.addEventListener('click', () => {
	hiddenMenu.classList.toggle('active')
})
