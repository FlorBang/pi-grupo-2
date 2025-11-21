// ASIDE

let urlAside = 'https://dummyjson.com/products/category-list';

let listaCategorias = document.querySelector(".categoriaslist");

// 
fetch(urlAside)
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
