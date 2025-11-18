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