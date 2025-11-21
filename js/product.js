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

//recuperar QS

let qs = location.search;

let qsObj = new URLSearchParams(qs);

let idBuscado = qsObj.get("id");

// URL Fetch

let url = "https://dummyjson.com/products/" + idBuscado;

// recuperar elementos del DOM

let nombreProducto = document.querySelector(".nombreProducto");
let marca = document.querySelector(".marca");
let descripcion = document.querySelector(".descripcionProducto");
let precio = document.querySelector(".precio");
let fotoProducto = document.querySelector(".fotoProducto");
let categoria = document.querySelector(".categoria");
let stock = document.querySelector(".stock");
let tags = document.querySelector(".tags");

let articleReviews = document.querySelector(".reviewsList");

// fetch - 2

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        nombreProducto.innerText += ` ${data.title}`;
        marca.innerText += ` ${data.brand}`;
        descripcion.innerText += ` ${data.description}`;
        precio.innerText += ` ${data.price}`;
        fotoProducto.src = `${data.images[0]}`;
        categoria.innerText += ` ${data.category}`;
        categoria.href += `${data.category}`;
        stock.innerText += ` ${data.stock} unidades`;
        tags.innerText += ` ${data.tags}`;
        let arrayReviews = data.reviews;
        let reviews = "";

        for (let i = 0; i < arrayReviews.length; i++) {
            const element = arrayReviews[i];

            reviews += `<article class="reviews">
                            <article id="perfilyUser">
                                 <img src="./img/fotousuario.png" alt="icono de usuario">
                                 <p id="usuarioreviews">${element.reviewerName}</p>
                           </article>
                        
                            <p class="rating"><strong>Rating:</strong> ${element.rating} ★</p>

                            <p class="fecha"><strong>Fecha:</strong> ${element.date}</p>

                            <p class="comentario"><strong>Comentario:</strong> ${element.comment}</p> 
                        </article>`;
        }

        articleReviews.innerHTML = reviews;
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


