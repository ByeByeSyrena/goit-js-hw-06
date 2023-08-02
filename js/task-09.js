function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const colorText = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", getColor);

function getColor(event) {

  const color = getRandomHexColor();
  colorText.textContent = `${color}`;
  document.body.style.color = color;
}

console.dir(changeColor);
