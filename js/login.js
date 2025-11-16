let formulario = document.querySelector(".formlogyreg");			
let camposForm = document.querySelectorAll(".camposForm");

console.log(camposForm);

formulario.addEventListener('submit', function (event) {
    event.preventDefault();  	

    for (let index = 0; index < camposForm.length; index++) {
        const element = camposForm[index];
        
        if (element.value === "") {
            element.placeholder = "Complete este campo";
            return;
        } 
    }

    if (camposForm[1].value.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }

    // session storage
    let user = {
        email: this.email.value,
        password: this.password.value
    };

    let userEnString = JSON.stringify(user);

    sessionStorage.setItem("miClave", userEnString);

    this.submit();
});