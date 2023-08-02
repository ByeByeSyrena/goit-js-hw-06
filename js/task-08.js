
const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

console.dir(form);

function onSubmit(event) {

    event.preventDefault();

const email = event.currentTarget.elements.email;
const password = event.currentTarget.elements.password;
const object = {};  
    
    if (email.value === '' || password.value === '') {
        alert("All fields must be fullfilled");
    }
    else {
        object.email = email.value;
        object.password = password.value;

        console.log(object);
    }
    
    form.reset();
};