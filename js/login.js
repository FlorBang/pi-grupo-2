let formulario = document.querySelector("form");			
let camposForm = document.querySelectorAll(".camposForm");

formulario.addEventListener('submit', function (event) {
    event.preventDefault()  	
    
    let user = {
        email: this.email.value,
        password: this.password.value
    }

    let userEnString = JSON.stringify(user);

    sessionStorage.setItem("miClave", userEnString)

    for (let index = 0; index < camposForm.length; index++) {
        const element = camposForm[index];
        
        if (element.value == "") {
            element.placeholder = "Completa este campo";
            return false;
        } 
    }
    this.submit()
})