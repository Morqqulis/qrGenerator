'use strict'

const button = document.querySelector('.qr__button')
const inputValue = document.querySelector('.qr__input')
const qrImage = document.querySelector('.qr__image')

const generateQR = url =>
	(qrImage.innerHTML = `
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${url}">
    `)

button.addEventListener('click', () => {
	const url = inputValue.value.trim()
	url !== '' ? generateQR(url) : null
})
