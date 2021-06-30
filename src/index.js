import {displayPetPhoto, displayMaternityPhoto, displayPortraitPhoto} from './portfolio'
import Glide, { Autoplay } from "@glidejs/glide"

const toggleNav = document.querySelector('#toggleNav')
const primaryMenu = document.querySelector('#primarymenu')
const dropdownBtn = document.querySelector('#dropdownbtn')
const submenu = document.querySelector('#submenu')
const formElem = document.getElementById('#formElem')
const messageArea = document.getElementById('#messageArea')

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

// formElem.addEventListener('submit', (e) => {
    
//     let request = new XMLHttpRequest()
//     request.open("POST", 'https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback')
//     let formData = new FormData(formElem)
//     request.send(formData)
//     formElem.reset()
// })



formElem.addEventListener('submit',(e) => {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("POST", "https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback", true);
    let formData = new FormData(formElem)
    xmlhttp.send(formData)
    formElem.classList.add('contact__form--hidden')
}) 




// const submitFormData = async () => {
//     try {
//         let response = await fetch('https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback', {
//             method: 'POST',
//             body: new FormData(formElem)
//         });
//         let result = await response.json()
//         alert(result.message)
//         // const successMessage = document.createElement('p')
//         // successMessage.textContent = 'Thanks for getting in touch! We will get in touch with you shortly.'
//         // messageArea.appendChild(successMessage)
//     }
//     catch (error) {
//         console.log(error)
//     }
    
// }



