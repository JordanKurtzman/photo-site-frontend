import {displayPetPhoto, displayMaternityPhoto, displayPortraitPhoto} from './portfolio'
import Glide, { Autoplay } from "@glidejs/glide"
import { normalizeResponse} from './contact'

const toggleNav = document.querySelector('#toggleNav')
const primaryMenu = document.querySelector('#primarymenu')
const dropdownBtn = document.querySelector('#dropdownbtn')
const submenu = document.querySelector('#submenu')
const submitBtn = document.querySelector('#btnSubmit')
const formElements = document.querySelectorAll("form");

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
    autoplay: 2000,
    focusAt: 'center',
    perView: 1
});

const formSubmissionHandler = (event) => {
    event.preventDefault();

    const formElement = event.target,
        { action, method } = formElement,
        body = new FormData(formElement);

    fetch(action, {
        method,
        body
    })
        .then((response) => response.json())
        // .then((response) => normalizeResponse(action, response))
        .then((response) => {
            alert(response.message);

            if (response.isSuccess) {
                formElement.reset();
            }
        })
        .catch((error) => {
            alert("Check the console for the error details.");
            console.log(error);
        });
};

formElements.forEach((formElement) =>
    formElement.addEventListener("submit", formSubmissionHandler)
);


glide.mount()



