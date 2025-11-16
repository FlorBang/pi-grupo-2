// recuperar info del session

let data = sessionStorage.getItem("miClave");

let dataObj = JSON.parse(data);

// recuperar elementos del dom saludo y lista de links

let saludo = document.querySelector(".saludo");
let lista = document.querySelector(".listaLogyReg");

if (dataObj) {
    saludo.innerText = `Bienvenido ${dataObj.email}`;

    lista.innerHTML = ` <li><p>Bienvenido ${dataObj.email}</p></li>
                        <li><a href="./login.html">Logout</a></li>`;
    
}else{
    alert("No se guardaron bien los datos");
}

// hay que agregarle script a varios html