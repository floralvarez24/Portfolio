const modal= document.querySelectorAll('.services__modal'),
        modalButton= document.querySelectorAll('.services__button'),
        modalClose= document.querySelectorAll('.services__modal-close')

let activeModal= (modalClick) =>{
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((button, i) =>{
    button.addEventListener('click', () =>{
        activeModal(i)
    })
})

modalClose.forEach((close, i) =>{
    close.addEventListener('click', () =>{
        modal.forEach((modalRemove) =>{
            modalRemove.classList.remove('active-modal')
        })
    })
})

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)