// ya funciona y está en linkeado en todos los html

let data = sessionStorage.getItem("miClave");

let dataObj = JSON.parse(data);

let saludo = document.querySelector(".saludo");
let lista = document.querySelector(".listaLogyReg");

if (dataObj) {
    saludo.innerText = `Bienvenido ${dataObj.email}`;

    lista.innerHTML = ` <li><p>Bienvenido ${dataObj.email}</p></li>
                        <li><a class="logout" href="./login.html">Logout</a></li>`;
}