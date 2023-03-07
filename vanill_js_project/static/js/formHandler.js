"use strict"

let btnSendForm = document.querySelector("#reg-form__submit");
let form = document.querySelector("#reg-form");
let bgForm = document.querySelector("#form-background");
let accBtn = document.querySelector("#account");
let exitForm = document.querySelector("#form-exit");

function ExitForm() {
    form.classList.add('form-anime');
    setTimeout(
        function() {
            form.classList.add('hide');
            bgForm.classList.add('hide');
            form.classList.remove('form-anime');
        },
        500
    );
}

// accBtn.onclick = () => {
//     form.classList.remove('hide');
//     bgForm.classList.remove('hide');
// }

btnSendForm.onclick = (event) => {
    event.preventDefault();
    let temp = validation(form);
    if (temp) {
        console.log(serialize(form));
    } else {
        alert(temp);
    }
};

bgForm.onclick = () => {
    ExitForm();
};

exitForm.onclick = () => {
    ExitForm();
};