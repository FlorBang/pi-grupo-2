let url = 'https://dummyjson.com/products/category-list';

// 

let listaCategorias = document.querySelector(".categoriaslist");

// 

fetch(url)
    .then(function (response) {
        return response.json();

    })

    .then(function (data) {
        let categorias = data;
        let catmod = "";

        for (let i = 0; i < categorias.length; i++) {
            const element = categorias[i];
            catmod += `<li><a href="./category.html?category=${element.category}" class="categoriaelement">${element}</a></li>`;
        }
        listaCategorias.innerHTML = catmod;
    })

    .catch(function (error) {
        console.log("Error: " + error);

    })

let formulario = document.querySelector(".formlogyreg");
let camposForm = document.querySelectorAll(".camposForm");
let termsycondiciones = document.querySelector(".terms")
let termino = false

console.log(camposForm);

termsycondiciones.addEventListener('click', function () {
    termino = true;
});

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

    else if (termino == false) {
        alert("Debe aceptar los términos y condiciones");
        return;
    }

    else if (camposForm[1].value != camposForm[2].value) {
        alert("Las contraseñas no coinciden");
        return;

    } else {
        this.submit()
    }
});

