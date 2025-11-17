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
let resultados = document.querySelector(".searchResults");
let url = `https://dummyjson.com/products/search?q=${busqueda}`;


// Fetch a la API
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Si no hay resultados
        if (data.products.length === 0) {
            resultados.innerHTML = `<p>No hay resultados para la búsqueda: "${busqueda}".</p>`;
            return;
        }

        // Crear variable para armar el HTML
        let productos = "";

        // Recorrer los resultados y crear un article por personaje
        for (let i = 0; i < data.products.length; i++) {
            const element = data.products[i];

            productos += `
                <article class="portada">
                    <p>${element.title}</p>
                    <a href="./product.html?id=${element.id}">
                        <img src="${element.images[0]}" alt="${element.title}">
                    </a>
                    <p class="descripcion">${element.description}</p>
                    <p class="precio">$${element.price}</p>
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

