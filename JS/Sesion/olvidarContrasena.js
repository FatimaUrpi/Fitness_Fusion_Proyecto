// Validar correo electrónico
function validarCorreo() {
    const correo = document.getElementById("correo").value.trim();
    const errorCorreo = document.getElementById("error-correo");
    const correoInput = document.getElementById("correo");

    if (!correo) {
        mostrarError(errorCorreo, "Por favor, ingrese su correo.");
        correoInput.classList.add("invalid");
        correoInput.classList.remove("valid");
    } else if (!correo.includes("@") || !correo.includes(".") || correo.split('@')[0].length < 3) {
        mostrarError(errorCorreo, "El correo debe tener un formato válido, como ejemplo@dominio.com.");
        correoInput.classList.add("invalid");
        correoInput.classList.remove("valid");
    } else {
        ocultarError(errorCorreo);
        correoInput.classList.add("valid");
        correoInput.classList.remove("invalid");
    }
}

// Validar contraseña
function validarContrasena() {
    const contrasena = document.getElementById('nuevaContrasena').value;
    const instrucciones = document.getElementById('instrucciones-contrasena');
    
    const longitud = document.getElementById('longitud');
    const mayuscula = document.getElementById('mayuscula');
    const minuscula = document.getElementById('minuscula');
    const numero = document.getElementById('numero');

    // Mostrar instrucciones solo cuando el usuario comience a escribir
    if (contrasena.length > 0) {
        instrucciones.classList.remove('hidden'); // Mostrar la lista
    } else {
        instrucciones.classList.add('hidden'); // Ocultar la lista
    }

    // Verificar requisitos
    longitud.classList.toggle('valid', contrasena.length >= 8);
    mayuscula.classList.toggle('valid', /[A-Z]/.test(contrasena));
    minuscula.classList.toggle('valid', /[a-z]/.test(contrasena)); // Nueva validación de minúscula
    numero.classList.toggle('valid', /[0-9]/.test(contrasena));

    // Comprobar si todos los requisitos están cumplidos
    if (contrasena.length >= 8 && /[A-Z]/.test(contrasena) && /[a-z]/.test(contrasena) && /[0-9]/.test(contrasena)) {
        document.getElementById('nuevaContrasena').classList.add('valid');
        document.getElementById('nuevaContrasena').classList.remove('invalid');
    } else {
        document.getElementById('nuevaContrasena').classList.add('invalid');
        document.getElementById('nuevaContrasena').classList.remove('valid');
    }
}



// Validar confirmar contraseña
function validarConfirmarContrasena() {
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;
    const contrasena = document.getElementById('nuevaContrasena').value;
    const errorConfirmar = document.getElementById('error-confirmar');

    if (confirmarContrasena !== contrasena) {
        mostrarError(errorConfirmar, "Las contraseñas no coinciden.");
    } else {
        ocultarError(errorConfirmar);
    }
}

// Mostrar error
function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}

// Ocultar error
function ocultarError(elemento) {
    elemento.style.display = 'none';
}


function togglePasswordVisibility(inputId, toggleIconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(toggleIconId);

    // Cambiar el tipo del campo entre 'password' y 'text'
    if (input.type === 'password') {
        input.type = 'text'; // Mostrar la contraseña
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password'; // Ocultar la contraseña
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Función para actualizar la contraseña
// Función para actualizar la contraseña
async function actualizarContrasena() {
    const correo = document.getElementById('correo').value.trim();
    const nuevaContrasena = document.getElementById('nuevaContrasena').value.trim();
    const confirmarContrasena = document.getElementById('confirmarContrasena').value.trim();
    
    const errorCorreo = document.getElementById('error-correo');
    const errorContrasena = document.getElementById('error-contrasena'); // Verifica si este existe en tu HTML
    const errorConfirmar = document.getElementById('error-confirmar');

    ocultarError(errorCorreo);
    ocultarError(errorContrasena);  // Verifica si error-contrasena está presente en el HTML
    ocultarError(errorConfirmar);

    // Validación de campos
    if (!correo) {
        mostrarError(errorCorreo, 'El correo es obligatorio.');
        return;
    } else if (!correo.includes("@")) {
        mostrarError(errorCorreo, 'Formato de correo incorrecto.');
        return;
    }

    // Validar contraseña
    if (!nuevaContrasena) {
        mostrarError(errorContrasena, 'La nueva contraseña es obligatoria.');
        return;
    } else if (nuevaContrasena.length < 8 || !/[A-Z]/.test(nuevaContrasena) || !/[0-9]/.test(nuevaContrasena)) {
        mostrarError(errorContrasena, 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.');
        return;
    }

    if (nuevaContrasena !== confirmarContrasena) {
        mostrarError(errorConfirmar, 'Las contraseñas no coinciden.');
        return;
    }

    // Proceder con la actualización de la contraseña
    try {
        const response = await fetch('http://localhost:4000/actualizarContrasena', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, nuevaContrasena }),
        });

        const result = await response.json();

        if (response.ok) {
            // Mensaje de éxito usando Swal
            Swal.fire({
                icon: 'success',
                title: '¡Contraseña actualizada!',
                text: 'Tu contraseña se actualizó correctamente.',
                confirmButtonText: 'Continuar',
            }).then(() => {
                // Redirigir al usuario a la página de inicio de sesión después de hacer clic en "Continuar"
                window.location.href = 'iniciarSesion.html';
            });
        } else {
            // Mensaje de error si la respuesta no es exitosa
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: result.message || 'No se pudo actualizar la contraseña.',
            });
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error interno del servidor.',
        });
    }
}
