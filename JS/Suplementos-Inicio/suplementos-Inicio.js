let products = null;
let creatineCount = 0;
let proteinCount = 0;
let preWorkoutCount = 0;
let vitaminCount = 0;

// Obtener datos de productos
fetch('./JS/Inicio/productos.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    });

// Mostrar productos en HTML
function addDataToHTML() {
    let listproductHTML = document.querySelector('.listProduct');
    listproductHTML.innerHTML = "";

    // Verificar si se han cargado los datos de productos y si hay al menos 2 productos de cada tipo
    if (products !== null && products.length >= 8) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            if ((product.tipo === "Creatina" && creatineCount < 2) ||
                (product.tipo === "Proteina" && proteinCount < 2) ||
                (product.tipo === "Pre-Entreno" && preWorkoutCount < 2) ||
                (product.tipo === "Vitamina" && vitaminCount < 2)) {
                newProduct.innerHTML = `
                    <img src="${product.image}" alt="">
                    <h2>${product.name}</h2>
                    <div class="price">S/.${product.price}</div>
                    <button onclick="addCart(${product.id})">Comprar</button>`;
                listproductHTML.appendChild(newProduct);

                // Incrementar el contador para el tipo de producto correspondiente
                if (product.tipo === "Creatina") {
                    creatineCount++;
                } else if (product.tipo === "Proteina") {
                    proteinCount++;
                } else if (product.tipo === "Pre-Entreno") {
                    preWorkoutCount++;
                } else if (product.tipo === "Vitamina") {
                    vitaminCount++;
                }
            }
        });
    } else {
        // Manejar el caso en que no se hayan cargado los datos de productos o haya menos de 8 productos
        listproductHTML.innerHTML = "<p>No se encontraron productos disponibles.</p>";
    }
}

// Función para agregar productos al carrito (debe ser implementada)

