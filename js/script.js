const btnMenu = document.querySelector('.site-header__nav-menu')
const hiddenMenu = document.querySelector('.hidden-header__nav-list')

btnMenu.addEventListener('click', () => {
	hiddenMenu.classList.toggle('active')
})
