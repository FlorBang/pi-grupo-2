let formulario = document.querySelector(".formlogyreg");
let camposForm = document.querySelectorAll(".camposForm");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let mjeError = document.querySelector(".mjeError")

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (email.value === "") {
        mjeError.innerText = "Complete el campo del mail";
        return;
    }

    if (password.value === "") {
        mjeError.innerText = "Complete el campo de la contraseña";
        return;
    }

    else if (password.value.length < 6) {
        mjeError.innerText = "La contraseña debe tener al menos 6 caracteres";
        return;
    }

    // local storage
    let user = {
        email: this.email.value,
        password: this.password.value
    };

    let userEnString = JSON.stringify(user);

    localStorage.setItem("miClave", userEnString);

    this.submit();
});