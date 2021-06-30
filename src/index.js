import {displayPetPhoto, displayMaternityPhoto, displayPortraitPhoto} from './portfolio'
import Glide, { Autoplay } from "@glidejs/glide"
import {$, jQuery} from 'jquery'


const toggleNav = document.querySelector('#toggleNav')
const primaryMenu = document.querySelector('#primarymenu')
const dropdownBtn = document.querySelector('#dropdownbtn')
const submenu = document.querySelector('#submenu')
const formElem = document.getElementById('formElem')
const messageArea = document.getElementById('messageArea')

window.$ = $;
window.jQuery = jQuery;

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




// const submitFormData = () => {
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
//     e.preventDefault()
//     xmlhttp.open("POST", "https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback", true);
//     let formData = new FormData(formElem)
//     xmlhttp.send(formData)
// }


// formElem.addEventListener('submit', (e) => {
//     e.preventDefault()
//     submitFormData()
//     formElem.reset()
// })




$(document).ready(function(){
    $('#formElem').on('submit', function (event) {
        event.preventDefault();
        let request = $.ajax({
            url: "https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback",
            type: "post",
            data: new FormData(this)
        });
        $(this).find("input").val('');
        $(this).find('input:date').removeAttr('selected');
    })
})

