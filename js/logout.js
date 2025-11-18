let logout = document.querySelector(".logout");
let listaLogout = document.querySelector(".listaLogyReg");

logout.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.clear();

    listaLogout.innerHTML = ` <li><a href="./login.html" class="logYRegHeader">Login</a></li>
                        <li><a href="./register.html" class="logYRegHeader">Register</a></li>`;
});