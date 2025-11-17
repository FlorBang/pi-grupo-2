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


// URL Fetch productos
let urlProductos = `https://dummyjson.com/products/category/smartphones`;

// recuperar elementos del DOM
let listaProductos = document.querySelector(".categoryList");

// fetch
fetch(urlProductos)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;
        let smartPhones = "";

        for (let i = 0; i < productos.length; i++) {
            let p = productos[i];

            smartPhones += `
                <article class="portada">
                    <p>${p.title}</p>
                    <a href="./product.html?id=${p.id}">
                        <img src="${p.images[0]}" alt="${p.title}">
                    </a>
                    <p class="descripcion">${p.description}</p>
                    <p class="precio">$${p.price}</p>
                </article>
            `;
        }
        listaProductos.innerHTML = smartPhones;
    })
    .catch(function (error) {
        console.log("Error: " + error);

    })