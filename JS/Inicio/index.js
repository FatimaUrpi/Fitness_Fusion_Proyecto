let products = null;

fetch('./JS/Inicio/productos.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML1();
        addDataToHTML2();
        addDataToHTML3();
    })


function addDataToHTML1() {
    let listproductHtML = document.querySelector('.listRopaDeportiva');
    listproductHtML.innerHTML = "";

    // Contadores para cada tipo de producto
    let poleraCount = 0;
    let casacaCount = 0;
    let conjuntoCount = 0;

    // Agregar datos
    if (products != null) {
        products.forEach(product => {
            if (poleraCount < 2 && product.tipo === "polera" && product.genero === "Hombre") {
                addProduct(product);
                poleraCount++;
            } else if (casacaCount < 1 && product.tipo === "casaca" && product.genero === "Hombre") {
                addProduct(product);
                casacaCount++;
            } else if (conjuntoCount < 1 && product.tipo === "conjunto" && product.genero === "Hombre") {
                addProduct(product);
                conjuntoCount++;
            }
        });
    }

    // Función auxiliar para agregar un producto al HTML
    function addProduct(product) {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button onclick="addCart(${product.id})">Comprar</button>`;
        listproductHtML.appendChild(newProduct);
    }
}
   

function addDataToHTML2() {
    let listproductHtML = document.querySelector('.listSuplementos');
    listproductHtML.innerHTML = "";

    // Contadores para cada tipo de producto
    let CreatinaCount = 0;
    let PreEntrenoCount = 0;
    let ProteinaCount = 0;
    let VitaminasCount = 0;

    // Agregar datos
    if (products != null) {
        products.forEach(product => {
            if (CreatinaCount < 1 && product.tipo === "Creatina") {
                addProduct(product);
                CreatinaCount++;
            } else if (PreEntrenoCount < 1 && product.tipo === "Pre-Entreno") {
                addProduct(product);
                PreEntrenoCount++;
            } else if (ProteinaCount < 1 && product.tipo === "Proteina") {
                addProduct(product);
                ProteinaCount++;
            }else if (VitaminasCount < 1 && product.tipo === "Vitamina") {
                addProduct(product);
                VitaminasCount++;
            }
        });
    }

    // Función auxiliar para agregar un producto al HTML
    function addProduct(product) {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button onclick="addCart(${product.id})">Comprar</button>`;
        listproductHtML.appendChild(newProduct);
    }
}



function addDataToHTML3() {
    let listproductHtML = document.querySelector('.listAccesoriosInicio');
    listproductHtML.innerHTML = "";

    // Contador para el número total de productos mostrados
    let productsShown = 0;

    // Agregar datos
    if (products != null) {
        products.forEach(product => {
            if (productsShown < 4 && product.categoria === "Accesorios") {
                addProduct(product);
                productsShown++; // Incrementar el contador de productos mostrados
            }
        });
    }

    // Función auxiliar para agregar un producto al HTML
    function addProduct(product) {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button onclick="addCart(${product.id})">Comprar</button>`;
        listproductHtML.appendChild(newProduct);
    }
}



document.addEventListener("DOMContentLoaded", function() {
    function mostrarOpcionesRopaOcultarVerMas() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        var verMasRopaBtn = document.getElementById("ver-mas-ropa-btn");
        opcionesRopa.style.display = "block";
        verMasRopaBtn.style.display = "none";
    }

    function ocultarOpcionesRopaMostrarVerMas() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        var verMasRopaBtn = document.getElementById("ver-mas-ropa-btn");
        opcionesRopa.style.display = "none";
        verMasRopaBtn.style.display = "block";
    }

    document.getElementById("ver-mas-ropa-btn").addEventListener("click", function() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        if (opcionesRopa.style.display === "none" || opcionesRopa.style.display === "") {
            mostrarOpcionesRopaOcultarVerMas();
            reiniciarTimerRopa();
        } else {
            ocultarOpcionesRopaMostrarVerMas();
        }
    });

    var botonOpcionHombre = document.getElementById("opcion-hombre");
    var botonOpcionMujer = document.getElementById("opcion-mujer");

    botonOpcionHombre.addEventListener("click", function() {
        ocultarOpcionesRopaMostrarVerMas();
    });

    botonOpcionMujer.addEventListener("click", function() {
        ocultarOpcionesRopaMostrarVerMas();
    });

    function mostrarOpcionesSuplementosOcultarVerMas() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        var verMasSuplementosBtn = document.getElementById("ver-mas-suplementos-btn");
        opcionesSuplementos.style.display = "block";
        verMasSuplementosBtn.style.display = "none";
    }

    function ocultarOpcionesSuplementosMostrarVerMas() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        var verMasSuplementosBtn = document.getElementById("ver-mas-suplementos-btn");
        opcionesSuplementos.style.display = "none";
        verMasSuplementosBtn.style.display = "block";
    }

    document.getElementById("ver-mas-suplementos-btn").addEventListener("click", function() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        if (opcionesSuplementos.style.display === "none" || opcionesSuplementos.style.display === "") {
            mostrarOpcionesSuplementosOcultarVerMas();
            reiniciarTimerSuplementos();
        } else {
            ocultarOpcionesSuplementosMostrarVerMas();
        }
    });

    var tiempoLimiteRopa = 5000; 
    var timerRopa;

    function reiniciarTimerRopa() {
        clearTimeout(timerRopa); 
        timerRopa = setTimeout(function() {
            ocultarOpcionesRopaMostrarVerMas();
        }, tiempoLimiteRopa);
    }

    var tiempoLimiteSuplementos = 5000; 
    var timerSuplementos;

    function reiniciarTimerSuplementos() {
        clearTimeout(timerSuplementos); 
        timerSuplementos = setTimeout(function() {
            ocultarOpcionesSuplementosMostrarVerMas();
        }, tiempoLimiteSuplementos);
    }
    document.getElementById("ver-mas-ropa-btn").addEventListener("click", reiniciarTimerRopa);
    document.getElementById("ver-mas-suplementos-btn").addEventListener("click", reiniciarTimerSuplementos);
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para redirigir a la página de ropa deportiva para hombres
    document.getElementById("opcion-hombre").addEventListener("click", function() {
        window.location.href = "hombres-RopaDeportiva.html";
    });

    // Función para redirigir a la página de ropa deportiva para mujeres
    document.getElementById("opcion-mujer").addEventListener("click", function() {
        window.location.href = "Mujeres-RopaDeportiva.html";
    });

    document.getElementById("opcion-creatina").addEventListener("click", function() {
        window.location.href = "suplementos-Creatina.html";
    });

    document.getElementById("opcion-pre-entreno").addEventListener("click", function() {
        window.location.href = "suplementos-PreEntreno.html";
    });

    document.getElementById("opcion-proteina").addEventListener("click", function() {
        window.location.href = "suplementos-Proteina.html";
    });

    document.getElementById("opcion-vitaminas").addEventListener("click", function() {
        window.location.href = "suplementos-Vitaminas.html";
    });

    document.getElementById("ver-mas-accesorios").addEventListener("click", function() {
        window.location.href = "accesorios.html";
    });
});
























