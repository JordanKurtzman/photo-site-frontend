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


const submitFormData = async () => {
    let response = await fetch('https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback', {
        method: 'POST',
        body: new FormData(formElem)
    });
    let result = await response.json()
    alert(result.message)
}

formElem.onsubmit = (e) => {
    e.preventDefault();
    submitFormData()
};

// formElem.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const formData = new FormData(this)
//     fetch('https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback',
//     {
//         method: 'post',
//         body: formData
//     }).then((response)=>{
//         return response.text()
//     }).then((text) =>{
//         alert(text.message)
//     }).catch((error)=>{
//         alert(error)
//     })
// })