const menuIcon = document.querySelector('.menu__icon')
const blockHeaderMenu = document.querySelector('.block-header__menu')

if (menuIcon) {
    menuIcon.addEventListener('click', function(e) {
        menuIcon.classList.toggle('active')
        blockHeaderMenu.classList.toggle('active')
        document.body.classList.toggle('lock')
       
    })
}