// aside

let urlAside = 'https://dummyjson.com/products/category-list';

// 

let listaCategorias = document.querySelector(".categoriaslist");

// 

fetch(urlAside)
    .then(function (response) {
        return response.json();

    })

    .then(function (data) {
        let categorias = data;
        let catmod = "";

        for (let i = 0; i < categorias.length; i++) {
            const element = categorias[i];
            catmod += `<li><a href="./category.html?category=${element.category}" class="categoriaelement">${element}</a></li>`
            console.log(element);
            

            listaCategorias.innerHTML = catmod;

        }
    })

    .catch(function (error) {
        console.log("Error: " + error);

    })

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