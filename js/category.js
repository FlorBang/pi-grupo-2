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
            catmod += `<li><a href="./category.html?id=${element.id}" class="categoriaelement">${element}</a></li>`


            listaCategorias.innerHTML = catmod;

        }
    })

    .catch(function (error) {
        console.log("Error: " + error);

    })