let products = null;

// Obtener datos de productos
fetch('./JS/Inicio/productos.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    })

// Mostrar productos en HTML
function addDataToHTML() {
    let listproductHtML = document.querySelector('.listPreEntreno');
    listproductHtML.innerHTML = "";

    // Agregar datos
    if (products != null) {
        products.forEach(product => {
            if (product.tipo === "Pre-Entreno") {
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
