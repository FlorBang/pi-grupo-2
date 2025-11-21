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


