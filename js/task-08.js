
const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {

    event.preventDefault();

const email = event.currentTarget.elements.email;
const password = event.currentTarget.elements.password;
const object = {};  
    
    if (email.value === '' || password.value === '') {
       return alert("All fields must be fullfilled");
    }
    else {
        object.email = email.value;
        object.password = password.value;

        console.log(object);
    }
    
    form.reset();
};