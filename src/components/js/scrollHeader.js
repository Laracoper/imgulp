window.addEventListener('scroll', function () {
    if (pageYOffset > 80) {
        document.querySelector('.header').classList.add('active')
    } else {
        document.querySelector('.header').classList.remove('active')
    }
})