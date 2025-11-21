// ASIDE

let url = 'https://dummyjson.com/products/category-list';

let listaCategorias = document.querySelector(".categoriaslist");

// 
fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        let catmod = "";
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            catmod += `<li><a href="./category.html?category=${element}" class="categoriaelement">${element}</a></li>`
        }

            listaCategorias.innerHTML = catmod;
    
    })

    .catch(function (error) {
        console.log("Error: " + error);

    })


// QS

let params = new URLSearchParams(location.search);
let categoriaSeleccionada = params.get("category");

document.querySelector(".genre").innerText = categoriaSeleccionada;

// fetch URL productos según categoria
let urlProductos = `https://dummyjson.com/products/category/${categoriaSeleccionada}`;
console.log(urlProductos)

let listaProductos = document.querySelector(".categoryList");

// fetch

fetch(urlProductos)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        let productos = data.products;
        let cat = "";

        for (let i = 0; i < productos.length; i++) {
            let p = productos[i];
            cat += `
                
                <article class="portada">
                    
                    <h2>${p.title}</h2>
                    <img src="${p.images[0]}" alt="${p.title}">
                    <p class="descripcion">${p.description}</p>
                    <p class="precio">$${p.price}</p>
                     
                    <a href="./product.html?id=${p.id}" class="btncat">Ver detalle</a>
                        
                </article>
              
                `;
        }
        listaProductos.innerHTML = cat;
    })

    .catch(function (error) {
        console.log("Error: " + error);

    })

   