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


// const submitFormData = (e) => {
//     e.preventDefault()
//     let xmlhttp = new XMLHttpRequest();

//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4) {   // XMLHttpRequest.DONE == 4
//             if (xmlhttp.status == 400) {
//                 alert('There was an error 400');
//             }
//             else {
//                 alert('something else other than 200 was returned');
//             }
//         }
//     };
    
//     xmlhttp.open("POST", "https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback", true);
//     let formData = new FormData(formElem)
//     xmlhttp.send(formData)
//     e.target.reset()
// }


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
            const messageArea = document.getElementById('messageArea');
            if($(messageArea).html().length === 0);{
                $(messageArea).append("<p>Thanks for contacting me! I'll be in touch shortly.<p>")
            }
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