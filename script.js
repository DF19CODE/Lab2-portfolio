//skapad av Desiree F,D 2026-11-04 
//form
const feedbackForm = document.getElementById("feedbackForm");

//input
const Name = document.getElementById("name");
const email = document.getElementById("email");
const topic = document.getElementById("topic");
const comments = document.getElementById("message");

const commentsCounter = document.getElementById("commentCounter");
const formStatus = document.getElementById("formStatus");

//error
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const topicError = document.getElementById("Error");
const commentsError = document.getElementById("commentsError");

//button clear
const clearButton = document.getElementById("clear");

// Store fields and errors
const fields = [
    { input: Name, error: nameError, validate: validateName },
    { input: email, error: emailError, validate: validateEmail },
    { input: topic, error: topicError, validate: validateTopic },
    { input: comments, error: commentsError, validate: validateComments }
];

const checkedFields = new Set();

let successTimer;

//error message

function showFieldError(input, message, errorElement) {

    //red error
    input.classList.add("invalid");

    //green valid
    input.classList.remove("valid");

    // field are invalid
    input.setAttribute("aria-invalid", "true");

    //error message
    errorElement.textContent = message;
}

//remove error message
function clearError(input, errorElement) {

    input.classList.remove("invalid");
    input.classList.remove("valid");
    input.setAttribute("aria-invalid", "false");

    // remove error text
    errorElement.textContent = "";
}

// validate Name

function validateName() {

    const nameValue = Name.value.trim();

    const namePattern = /^[\p{L}]+(?:[ '\u2019-][\p{L}]+)*$/u;

    clearError(Name, nameError);

    if (nameValue.length < 2) {

        showFieldError(Name, "The name needs at least 2 characters.", nameError);
        return false;
    }

    if (!namePattern.test(nameValue)) {

        showFieldError(Name, "Please use letters.", nameError);
        return false;
    }

    Name.classList.add("valid");

    return true;
}

//validate email
function validateEmail() {

    const emailValue = email.value.trim();

    clearError(email, emailError);

    if (emailValue === "" || !email.checkValidity()) {

        showFieldError(
            email,
            "Please enter a valid email address.",
            emailError
        );

        return false;
    }

    email.classList.add("valid");

    return true;
}

// validate topic

function validateTopic() {

    clearError(topic, topicError);

    if (topic.value === "") {

        showFieldError(topic, "Please pick a topic.", topicError);

        return false;
    }

    topic.classList.add("valid");
    return true;
}

// validate comments

function validateComments() {

    const commentsValue = comments.value.trim();

    clearError(comments, commentsError);

    if (commentsValue.length < 15 || commentsValue.length > 40) {

        showFieldError(
            comments,
            "Comments must contain  between 15 and 40 characters.",
            commentsError
        );

        return false;
    }

    comments.classList.add("valid");
    return true;
}

// validate form
function validateField(input) {

    const field = fields.find(function(item) {

        return item.input === input;

    });

    return field ? field.validate() : true;
}

// characters counter
function updateCounter() {

    const characterCount = comments.value.trim().length;

    commentsCounter.textContent =
        characterCount + " / 40 characters";

    if (characterCount >= 15 && characterCount <= 40) {

        commentsCounter.classList.add("counter-valid");

    } else {

        commentsCounter.classList.remove("counter-valid");

    }

}

//resetform

function resetForm() {

    clearTimeout(successTimer);

    checkedFields.clear();

    fields.forEach(function(field) {

        clearError(field.input, field.error);

    });

    updateCounter();

    formStatus.textContent = "";
}

// find field input

fields.forEach(function(field) {

    field.input.addEventListener("input", function() {

        if (checkedFields.has(field.input)) {

            validateField(field.input);

        }

        if (field.input === comments) {

            updateCounter();

        }

    });

    // Validate when leaving a field

    field.input.addEventListener("blur", function() {

        checkedFields.add(field.input);

        validateField(field.input);

    });

});

feedbackForm.addEventListener("submit", function(event) {

    event.preventDefault();

    clearTimeout(successTimer);

    formStatus.textContent = "";

    let formIsValid = true;

    // Validate fields

    fields.forEach(function(field) {

        checkedFields.add(field.input);

        const isValid = validateField(field.input);

        if (!isValid) {

            formIsValid = false;

        }

    });

    updateCounter();

    // form invalid

    if (!formIsValid) {

        const firstInvalidField =
            feedbackForm.querySelector(".invalid");

        if (firstInvalidField) {

            firstInvalidField.focus();

        }

        return;

    }

    // Save the Name before resetting the form

    const submittedName = Name.value.trim();

    // show message

    feedbackForm.reset();

    resetForm();

    formStatus.textContent =
        "Thanks for your feedback, " + submittedName + "!";

    // Remove message after 4 seconds

    successTimer = setTimeout(function() {

        formStatus.textContent = "";

    }, 4000);

});

// Clear button

clearButton.addEventListener("click", function() {

    feedbackForm.reset();

    resetForm();

});

updateCounter();
