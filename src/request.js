const stripHtml = (string) => string.replace(/(<([^>]+)>)/gi, "");

const normalizeResponse = ('https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback', response) => {
    
    return {
        isSuccess: false,
        message: "Are you submitting to the right URL?",
        validationError: {}
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

const formSubmissionHandler = (e) => {
    e.preventDefault();

    const formElement = event.target,
        { action, method } = formElement,
        body = new FormData(formElement);

    fetch(action, {
        method,
        body
    })
        .then((response) => response.json())
        .then((response) => normalizeResponse(action, response))
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

const formElements = document.querySelectorAll("form");

formElements.forEach((formElement) =>
    formElement.addEventListener("submit", formSubmissionHandler)
);
