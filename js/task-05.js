const inputName = document.getElementById("name-input");
const spanWord = document.getElementById("name-output");

inputName.addEventListener("input", getInput);

function getInput(event) {
    // if (event.currentTarget.value == "") {
    //     spanWord.textContent = "Anonymus";
    // } else {
    // spanWord.textContent = event.currentTarget.value;}

    spanWord.textContent = event.currentTarget.value || 'Anonymous'
};
