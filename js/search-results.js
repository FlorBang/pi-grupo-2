// URL fetch categorias
let urlCategorias = 'https://dummyjson.com/products/category-list';

// recuperar elementos del DOM
let listaCategorias = document.querySelector(".categoriaslist");

// fetch
fetch(urlCategorias)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let html = "";

        for (let i = 0; i < data.length; i++) {
            html += `
                <li>
                    <a href="./category.html" class="categoriaelement">
                        ${data[i]}
                    </a>
                </li>`;
        }

        listaCategorias.innerHTML = html;
    })
    .catch(function (error) {
        console.log("Error: " + error);

    })


// Obtener la query string 
let queryString = location.search;
let qsObj = new URLSearchParams(queryString);
let busqueda = qsObj.get("buscar");

let tituloResultados = document.querySelector(".tituloResultados");
tituloResultados.innerText = `Resultados de búsqueda para: "${busqueda}"`;

// Seleccionar el contenedor donde van los resultados
let resultados = document.querySelector(".masVendidos");
let url = `https://dummyjson.com/products/search?q=${busqueda}`;


// Fetch a la API
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.products.length === 0) {
            tituloResultados.innerHTML = `<p>No hay resultados para la búsqueda: "${busqueda}".</p>`;
            return;
        }

        let productos = "";

        for (let i = 0; i < data.products.length; i++) {
            const element = data.products[i];

            productos += `
                <article class="portada">
                    <h2>${element.title}</h2>
                    <img src="${element.images[0]}" alt="${element.title}">
                    <p class="descripcion">${element.description}</p>
                    <p class="precio">$${element.price}</p>
                    <a href="./product.html?id=${element.id}" class="btncat">Ver detalle</a>
                </article>
            `;
        }

        // Insertar el HTML generado en la página
        resultados.innerHTML = productos;
    })
    .catch(function (error) {
        console.log("Error: " + error);
        resultados.innerHTML = "<p>Ocurrió un error al buscar los productos.</p>";
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


