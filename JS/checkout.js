let listCart = [];

function checkCart() {
    let cartData = localStorage.getItem('listCart');
    if (cartData) {
        listCart = JSON.parse(cartData);
    } else {
        listCart = [];
    }
}

function saveCartToCookie() {
    // Eliminar la cookie
    document.cookie = 'listCart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Eliminar los datos del almacenamiento local
    localStorage.removeItem('listCart');
}


checkCart();
addCartToHTML();

function addCartToHTML() {
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inicioSesion-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Validar el número de celular
        const phoneInput = document.getElementById('phone');
        const phoneValue = phoneInput.value.trim();

        // Agregar una validación para asegurarse de que el número comience con 9
        if (!phoneValue.startsWith('9') || !/^\d{9}$/.test(phoneValue)) {
            Swal.fire({
                title: "Error",
                text: "Por favor ingrese un número de celular válido que comience con el dígito 9 y tenga 9 dígitos.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return; // Detener el envío del formulario si la validación falla
        }

        // Validar el nombre
        const nameInput = document.getElementById('name');
        const nameValue = nameInput.value.trim();
        if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/.test(nameValue)) {
            Swal.fire({
                title: "Error en el nombre",
                text: "El nombre debe contener solo letras.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return; // Detener el envío del formulario si la validación falla
        }

        // Validar la dirección
        const addressInput = document.getElementById('address');
        const addressValue = addressInput.value.trim();
        if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s\d]+$/.test(addressValue)) {
            Swal.fire({
                title: "Error",
                text: "Por favor ingrese una dirección válida.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return; // Detener el envío del formulario si la validación falla
        }

        // Si todas las validaciones son exitosas, continuar con el envío del formulario
        // Guardar los datos del carrito en las cookies y en el almacenamiento local
        saveCartToCookie();
        // Reiniciar el carrito
        listCart = [];
        // Mostrar la alerta
        Swal.fire({
            title: "Compra Exitosa!",
            text: "Muchas gracias por comprar en FITNESS FUSION!!",
            icon: "success",
            confirmButtonText: "OK"
        }).then(() => {
            // Redirigir a la página de inicio
            window.location.href = "Index.html";
        });
    });
});



window.addEventListener('DOMContentLoaded', function() {
    checkCart(); // Obtener datos del carrito de las cookies
    addCartToHTML(); // Mostrar los productos en el carrito en la página de checkout
});