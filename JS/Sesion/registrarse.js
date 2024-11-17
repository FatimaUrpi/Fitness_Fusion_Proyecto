function togglePasswordVisibility() {
    const passwordField = document.getElementById("contraseña");
    const icon = document.querySelector(".toggle-password i");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}


// Validación de campos
document.getElementById("nombre").addEventListener("input", validarNombre);
document.getElementById("apellido").addEventListener("input", validarApellido);
document.getElementById("telefono").addEventListener("input", validarTelefono);
document.getElementById("correo").addEventListener("input", validarCorreo);
document.getElementById("contraseña").addEventListener("input", validarContraseña);

function validarNombre() {
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("error-nombre");
    const nombreRegex = /^[A-Za-zÀ-ÿ\s]{3,30}$/; // Solo letras y espacios, 3 a 30 caracteres
    
    if (!nombre) {
        errorNombre.style.display = "block";
        errorNombre.textContent = "Por favor, ingrese su nombre.";
    } else if (!nombreRegex.test(nombre)) {
        errorNombre.style.display = "block";
        errorNombre.textContent = "El nombre debe tener entre 3 y 30 caracteres y solo contener letras.";
    } else {
        errorNombre.style.display = "none";
        errorNombre.textContent = "";
    }
}

function validarApellido() {
    const apellido = document.getElementById("apellido").value.trim();
    const errorApellido = document.getElementById("error-apellido");
    const apellidoRegex = /^[A-Za-zÀ-ÿ\s]{3,30}$/; // Solo letras y espacios, 3 a 30 caracteres
    
    if (!apellido) {
        errorApellido.style.display = "block";
        errorApellido.textContent = "Por favor, ingrese su apellido.";
    } else if (!apellidoRegex.test(apellido)) {
        errorApellido.style.display = "block";
        errorApellido.textContent = "El apellido debe tener entre 3 y 30 caracteres y solo contener letras.";
    } else {
        errorApellido.style.display = "none";
        errorApellido.textContent = "";
    }
}



function validarTelefono() {
    const telefono = document.getElementById("telefono").value.trim();
    const errorTelefono = document.getElementById("error-telefono");
    const telefonoRegex = /^\d{9}$/; // Exactamente 9 dígitos
    
    if (!telefono) {
        errorTelefono.style.display = "block";
        errorTelefono.textContent = "Por favor, ingrese su teléfono.";
    } else if (!telefonoRegex.test(telefono)) {
        errorTelefono.style.display = "block";
        errorTelefono.textContent = "El teléfono debe tener exactamente 9 dígitos.";
    } else {
        errorTelefono.style.display = "none";
        errorTelefono.textContent = "";
    }
}


function validarCorreo() {
    const correo = document.getElementById("correo").value.trim();
    const errorCorreo = document.getElementById("error-correo");

    if (!correo) {
        errorCorreo.textContent = "Por favor, ingrese su correo.";
        errorCorreo.style.display = "block";
    } else if (!correo.includes("@")) {
        errorCorreo.textContent = "Formato de correo incorrecto.";
        errorCorreo.style.display = "block";
    } else {
        errorCorreo.style.display = "none"; // Oculta el mensaje si es válido
    }
}

function validarContraseña() {
    const contraseña = document.getElementById("contraseña").value.trim();
    const errorContraseña = document.getElementById("error-contraseña");

    if (!contraseña) {
        errorContraseña.textContent = "Por favor, ingrese su contraseña.";
        errorContraseña.style.display = "block";
    } else if (contraseña.length < 6) {
        errorContraseña.textContent = "La contraseña debe tener al menos 6 caracteres.";
        errorContraseña.style.display = "block";
    } else {
        errorContraseña.style.display = "none"; // Oculta el mensaje si es válido
    }
}

function registrar() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    // Validación de campos
    validarNombre();
    validarApellido();
    validarTelefono();
    validarCorreo();
    validarContraseña();

    const errorNombre = document.getElementById("error-nombre");
    const errorApellido = document.getElementById("error-apellido");
    const errorTelefono = document.getElementById("error-telefono");
    const errorCorreo = document.getElementById("error-correo");
    const errorContraseña = document.getElementById("error-contraseña");

    // Verifica que no haya mensajes de error visibles antes de continuar
    if (
        errorNombre.style.display === "none" &&
        errorApellido.style.display === "none" &&
        errorTelefono.style.display === "none" &&
        errorCorreo.style.display === "none" &&
        errorContraseña.style.display === "none"
    ) {
        // Datos a enviar al backend
        const userData = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            contraseña: contraseña
        };

        // Enviar datos al backend con Fetch
        fetch("http://localhost:4000/registrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                // Alerta de éxito con SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: '¡Registro exitoso!',
                    text: data.message,
                    confirmButtonText: 'Continuar'
                }).then(() => {
                    // Redirige a la página de inicio o a otra página
                    window.location.href = 'iniciarSesion.html';
                });
            } else {
                // Mostrar error si algo sale mal
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema con el registro.'
                });
            }
        })
        .catch(error => {
            console.error("Error al registrar:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema con el registro.'
            });
        });
    }
}
