let logout = document.querySelector(".logout");
let listaLogout = document.querySelector(".listaLogyReg");

logout.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.clear();

    listaLogout.innerHTML = ` <li><a href="./login.html" class="logYRegHeader">Login</a></li>
                        <li><a href="./register.html" class="logYRegHeader">Register</a></li>`;
});

// validación search-results
let search = document.querySelector(".searchsection");

if (search) {

    let camposForm = document.querySelectorAll(".searchbox");

    search.addEventListener("submit", function (event) {
        event.preventDefault();

        for (let i = 0; i < camposForm.length; i++) {
            let element = camposForm[i];

            if (element.value === "") {
                element.value = "";
                element.placeholder = "Complete este campo";
                return;
            }
        }

        if (camposForm[0].value.length < 3) {
            camposForm[0].value = "";
            camposForm[0].placeholder = "Mínimo 3 caracteres";
            return;
        }

        this.submit();
    });
}


