const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

const value = document.querySelector("#value");
let counterValue = 0;

function minusOne(event) {
    counterValue -= 1;
    value.textContent = counterValue;
}

function plusOne(event) {
    counterValue += 1;
    value.textContent = counterValue;
}

minusBtn.addEventListener("click", minusOne);
   

plusBtn.addEventListener("click", plusOne);

