let formulario = document.querySelector(".formlogyreg");
let camposForm = document.querySelectorAll(".camposForm");
let termsycondiciones = document.querySelector(".terms");
let otraPassword = document.querySelector("#otraPassword");

let mjemail = document.querySelector("#emailError");
let mjepass = document.querySelector("#passwordError");
let mjepass2 = document.querySelector("#otraPasswordError");
let mjeterms = document.querySelector("#tycError");



formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    for (let index = 0; index < camposForm.length; index++) {
        const element = camposForm[index];

        if (element.value === "") {

            let elementoDOM = document.querySelector(`#${element.id}Error`)
            elementoDOM.style.display = "block";
            elementoDOM.innerText = `Complete este campo`;
            return;
        }
    }

   

    if (camposForm[1].value.length < 6) {
         mjepass.style.display = "block";
        mjepass.innerText = `Ingrese al menos 6 caracteres`;
        return;
    }

     if (camposForm[2].value.length < 6) {
        mjepass2.style.display = "block";
        mjepass2.innerText = `Ingrese al menos 6 caracteres`;
        return;
    }

   else if (termsycondiciones.checked==false) {
        mjeterms.innerText = `Debe aceptar los términos y condiciones`;
        return;
   }

    else if (camposForm[1].value != camposForm[2].value) {
        mjepass2.style.display = "block";
        mjepass2.innerText = `Las contraseñas deben coincidir`;
        return;

    } else {
        
        this.submit()
    }
});

formulario.mail.addEventListener('input', function () {
    mjemail.style.display = "none";

});

formulario.password.addEventListener('input', function () {
    mjepass.style.display = "none";

});

formulario.otraPassword.addEventListener('input', function () {
    mjepass2.style.display = "none";

});

formulario.terminosycondicioens.addEventListener('input', function () {
    mjeterms.style.display = "none";

});