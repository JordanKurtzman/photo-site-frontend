import $ from "jquery";
import {displayPetPhoto, displayMaternityPhoto, displayPortraitPhoto} from './portfolio'
import Glide, { Autoplay } from "@glidejs/glide"



const toggleNav = document.querySelector('#toggleNav')
const primaryMenu = document.querySelector('#primarymenu')
const dropdownBtn = document.querySelector('#dropdownbtn')
const submenu = document.querySelector('#submenu')
const formElem = document.getElementById('formElem')
const datePicker = document.getElementById('preferred-date')


toggleNav.addEventListener('click', () => {
    primaryMenu.classList.toggle('active')
})

dropdownBtn.addEventListener('click', () => {
    submenu.classList.toggle('dropdown')
})

displayPetPhoto()
displayMaternityPhoto()
displayPortraitPhoto()



$(document).ready(function(){
    const $form = $('#formElem').on('submit', function (e) {

        e.preventDefault();

        let data = new FormData(this);
        
        let request = $.ajax({
            url: "https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback",
            type: "POST",
            data: data,
            contentType: false,
            processData: false
        })
        .done(function(){
            resetForm($form);
            
        });    
    })
    function resetForm($form) {
        $form.get(0).reset();
        
    }
});

var glide = new Glide('#hero', {
    type: 'carousel',
    animationDuration: 2000,
    autoplay: 4000,
    focusAt: 'center',
    perView: 1
});


glide.mount()