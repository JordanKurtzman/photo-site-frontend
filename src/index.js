import {displayPetPhoto, displayMaternityPhoto, displayPortraitPhoto} from './portfolio'
import Glide, { Autoplay } from "@glidejs/glide"

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
    autoplay: 4000,
    focusAt: 'center',
    perView: 1
});




glide.mount()


const stripHtml = (string) => string.replace(/(<([^>]+)>)/gi, "");

const initialState = {
    isSuccess: false,
    message: "",
    validationError: {}
};

const normalizeResponse = (url, response) => {
    if (
        url.match(/wp-json\/contact-form-7\/v1\/contact-forms\/\d+\/feedback/)
    ) {
        return normalizeContactForm7Response(response);
    }
    return {
        ...initialState,
        ...{
            message: "Are you submitting to the right URL?"
        }
    };
};

const normalizeContactForm7Response = (response) => {
    const isSuccess = response.status === "mail_sent";
    const message = response.message;
    const validationError = isSuccess
        ? {}
        : Object.fromEntries(
            response.invalid_fields.map((error) => {
                const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];

                return [key, error.message];
            })
        );

    return {
        isSuccess,
        message,
        validationError
    };
};

const wpForm = () => {
    return {
        ...initialState,
        submit() {
            const formElement = this.$refs.form,
                { action, method } = formElement,
                body = new FormData(formElement);

            fetch(action, {
                method,
                body
            })
                .then((response) => response.json())
                .then((response) => normalizeResponse(action, response))
                .then((response) => {
                    this.updateState(response);

                    if (this.isSuccess) {
                        formElement.reset();
                    }
                })
                .catch((error) => {
                    this.updateState({
                        ...initialState,
                        ...{
                            message: "Check the console for the error details."
                        }
                    });
                    console.log(error);
                });
        },
        updateState(newState) {
            Object.keys(newState).forEach((key) => (this[key] = newState[key]));
        }
    };
};

window.wpForm = wpForm;
