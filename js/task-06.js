const inputName = document.getElementById("validation-input");
const dataAction = document.querySelector('[data-length="6"]');

const number = dataAction.dataset.length;
const thisIsNumber = Number(number);

console.log(number);

inputName.addEventListener("blur", checkValidation);


function checkValidation(event) {
    const password = [...inputName.value].length;
    if (password === thisIsNumber) {
        inputName.classList.add("valid");
    }
    else if (password > thisIsNumber) {
        inputName.classList.add("invalid");
    }
    return;
}