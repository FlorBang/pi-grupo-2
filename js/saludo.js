// ya funciona y está en linkeado en todos los html

let data = localStorage.getItem("miClave");

let dataObj = JSON.parse(data);

let saludo = document.querySelector(".saludo");
let lista = document.querySelector(".listaLogyReg");

if (dataObj) {
    saludo.innerText = `Bienvenido ${dataObj.email}`;

    lista.innerHTML = ` <li><p class="saludo">Bienvenido ${dataObj.email}</p></li>
                        <li><a class="logout" href="./index.html">Logout</a></li>`;
}


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


