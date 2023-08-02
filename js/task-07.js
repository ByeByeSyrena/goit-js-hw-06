const inputStyle = document.getElementById("font-size-control");
const textBelow = document.getElementById("text");

inputStyle.addEventListener("input", getInput);

function getInput(event) {
textBelow.style.fontSize = event.currentTarget.value + 'px';
};
