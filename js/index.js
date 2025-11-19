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

let url2 = "https://dummyjson.com/products?limit=0&skip=0"
let sectionsmartphones = document.querySelector(".smartphones")
let sectionmobileAccessories = document.querySelector(".mobile-accessories")
fetch(url2)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        let products = data.products;
        let contenido1 = ""
        let contenido2= ""
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            if (element.category == "smartphones") {
                contenido1 += `<article class="portada">
                            <h2>${element.title}</h2>
                            <img src="${element.images[0]}">
                            <p class="descripcion">${element.description}</p>
                            <p class="precio">$${element.price}</p>
                            <a href="./product.html?id=${element.id}" class="btncat">Ver detalle</a>
                            </article>`
                sectionsmartphones.innerHTML = contenido1

            } else if (element.category == "mobile-accessories") {
                contenido2 += `<article class="portada">
                            <h2>${element.title}</h2>
                            <img src="${element.images[0]}">
                            <p class="descripcion">${element.description}</p>
                            <p class="precio">$${element.price}</p>
                            <a href="./product.html?id=${element.id}" class="btncat">Ver detalle</a>
                            </article>`
                sectionmobileAccessories.innerHTML = contenido2
            }
        }})
    .catch(function (error) {
        console.log("Error: " + error);
    })
