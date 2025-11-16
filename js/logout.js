// no funciona bien todavía, es una idea

let logout = document.querySelector(".logout");
let lista = document.querySelector(".listaLogyReg");

logout.addEventListener("click", function() {
    sessionStorage.clear();

    lista.innerHTML = ` <li><a href="./login.html" class="logYRegHeader">Login</a></li>
                        <li><a href="./register.html" class="logYRegHeader">Register</a></li>`;
});