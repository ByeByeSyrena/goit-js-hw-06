const inputName = document.getElementById("validation-input");
const dataAction = document.querySelector('[data-length="6"]');

const number = dataAction.dataset.length;
const thisIsNumber = Number(number);

inputName.addEventListener("blur", checkValidation);


function checkValidation(event) {
    if (event.target.value.length === thisIsNumber) {
        inputName.classList.add("valid");
        inputName.classList.remove("invalid");
    }
    else {
        inputName.classList.add("invalid");
        inputName.classList.remove("valid");
    }
    return;
}