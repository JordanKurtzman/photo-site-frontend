import {displayPetPhoto, displayMaternityPhoto, displayPortraitPhoto} from './portfolio'
import Glide, { Autoplay } from "@glidejs/glide"
import { getToken, sendFormData } from './contact'

const toggleNav = document.querySelector('#toggleNav')
const primaryMenu = document.querySelector('#primarymenu')
const dropdownBtn = document.querySelector('#dropdownbtn')
const submenu = document.querySelector('#submenu')
const submitBtn = document.querySelector('#btnSubmit')

toggleNav.addEventListener('click', () => {
    primaryMenu.classList.toggle('active')
})

dropdownBtn.addEventListener('click', () => {
    submenu.classList.toggle('dropdown')
})

var glide = new Glide('#hero', {
    type: 'carousel',
    animationDuration: 2000,
    autoplay: 4000,
    focusAt: 'center',
    perView: 1
});

submitBtn.addEventListener(('click', (e) => {
    e.preventDefault()
    getToken()
    sendFormData()
}))



displayPetPhoto()
displayMaternityPhoto()
displayPortraitPhoto()

glide.mount()

