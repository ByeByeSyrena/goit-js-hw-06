const form = document.getElementById("name-input");
const spanWord = document.getElementById("name-output");

form.addEventListener("input", getInput);

function getInput(event) {
    if (event.currentTarget.value == "") {
        spanWord.textContent = "Anonymus";
    } else {
    spanWord.textContent = event.currentTarget.value;}
};
