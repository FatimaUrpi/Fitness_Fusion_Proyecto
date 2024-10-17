let products = null;

// Obtener datos de productos
fetch('./JS/Inicio/productos.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML1();
        addDataToHTML2();
        addDataToHTML3();
    })

// Mostrar productos en HTML
function addDataToHTML1() {
    let listproductHtML = document.querySelector('.listProductPolerasMujeres');
    listproductHtML.innerHTML = "";

    // Agregar datos
    if (products != null) {
        products.forEach(product => {
            if (product.tipo === "polera" && product.genero === "Mujer") {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">S/.${product.price}</div>
                <button onclick="addCart(${product.id})">Comprar</button>`;
                listproductHtML.appendChild(newProduct);
            }
        });
    }
}


function addDataToHTML2() {
    let listproductHtML = document.querySelector('.listProductCasacasMujeres');
    listproductHtML.innerHTML = "";

    // Agregar datos
    if (products != null) {
        products.forEach(product => {
            if (product.tipo === "casaca" && product.genero === "Mujer") {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">S/.${product.price}</div>
                <button onclick="addCart(${product.id})">Comprar</button>`;
                listproductHtML.appendChild(newProduct);
            }
        });
    }
}




function addDataToHTML3() {
    let listproductHtML = document.querySelector('.listProductConjuntosMujeres');
    listproductHtML.innerHTML = "";

    // Agregar datos
    if (products != null) {
        products.forEach(product => {
            if (product.tipo === "conjunto" && product.genero === "Mujer") {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">S/.${product.price}</div>
                <button onclick="addCart(${product.id})">Comprar</button>`;
                listproductHtML.appendChild(newProduct);
            }
        });
    }
}
