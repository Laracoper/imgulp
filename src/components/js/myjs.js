const rrr = document.querySelector('.block-header__logo')
rrr.addEventListener('click', (e)=>{
    if(rrr) {
        
        e.preventDefault()

        rrr.classList.toggle('active')
    }
})