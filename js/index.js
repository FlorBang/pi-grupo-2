// 

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
            catmod += `<li><a href="./category.html?category=${element.category}" class="categoriaelement">${element}</a></li>`
            listaCategorias.innerHTML = catmod;

        }
    })

    .catch(function (error) {
        console.log("Error: " + error);

    })

let url2 = "https://dummyjson.com/products/category/smartphones"
let sectionsmartphones = document.querySelector(".smartphones")
fetch(url2)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data)
        let products = data.products;
        let contenido1 = ""
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
                contenido1 += `<article class="portada">
                            <h2>${element.title}</h2>
                            <img src="${element.images[0]}">
                            <p class="descripcion">${element.description}</p>
                            <p class="precio">$${element.price}</p>
                            <a href="./product.html?id=${element.id}" class="btncat">Ver detalle</a>
                            </article>`
                sectionsmartphones.innerHTML = contenido1

        }})
    .catch(function (error) {
        console.log("Error: " + error);
    })

let url3 = "https://dummyjson.com/products/category/mobile-accessories"
let sectionmobileaccessories = document.querySelector(".mobile-accessories")
fetch(url3)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data)
        let products = data.products;
        let contenido2= ""
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
                contenido2 += `<article class="portada">
                            <h2>${element.title}</h2>
                            <img src="${element.images[0]}">
                            <p class="descripcion">${element.description}</p>
                            <p class="precio">$${element.price}</p>
                            <a href="./product.html?id=${element.id}" class="btncat">Ver detalle</a>
                            </article>`
                sectionmobileaccessories.innerHTML = contenido2

        }})
    .catch(function (error) {
        console.log("Error: " + error);
    })

