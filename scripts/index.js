'use strict'

const button = document.querySelector('.qr__button')
const inputValue = document.querySelector('.qr__input').value
const qrImage = document.querySelector('.qr__image')
button.addEventListener('click', () => {
	qrImage.innerHTML = `
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${inputValue}">`
})
