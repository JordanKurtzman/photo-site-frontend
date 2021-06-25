import {displayPetPhoto, displayMaternityPhoto, displayPortraitPhoto} from './portfolio'
import Glide, { Autoplay } from "@glidejs/glide"

const toggleNav = document.querySelector('#toggleNav')
const primaryMenu = document.querySelector('#primarymenu')
const dropdownBtn = document.querySelector('#dropdownbtn')
const submenu = document.querySelector('#submenu')
const formElem = document.getElementById('#formElem')

toggleNav.addEventListener('click', () => {
    primaryMenu.classList.toggle('active')
})

dropdownBtn.addEventListener('click', () => {
    submenu.classList.toggle('dropdown')
})

displayPetPhoto()
displayMaternityPhoto()
displayPortraitPhoto()

var glide = new Glide('#hero', {
    type: 'carousel',
    animationDuration: 2000,
    autoplay: 4000,
    focusAt: 'center',
    perView: 1
});



glide.mount()

formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback', {
        method: 'POST',
        body: new FormData(formElem)
    });
    let result = await response.json()
    alert(result.message)
};
