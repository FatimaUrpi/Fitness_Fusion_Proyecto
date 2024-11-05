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

// Función para verificar si los campos están vacíos antes de iniciar sesión
document.getElementById("correo").addEventListener("input", validarCorreo);
document.getElementById("contraseña").addEventListener("input", validarContraseña);

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

function iniciarSesion() {
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    validarCorreo();
    validarContraseña();

    const errorCorreo = document.getElementById("error-correo");
    const errorContraseña = document.getElementById("error-contraseña");

    // Verifica que no haya mensajes de error visibles antes de continuar
    if (errorCorreo.style.display === "none" && errorContraseña.style.display === "none") {
        // Alerta de éxito con SweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Ingreso exitoso!',
            text: 'Bienvenido a Fitness Fusion',
            confirmButtonText: 'Continuar'
        }).then(() => {
            // Redirige a la página de inicio
            window.location.href = 'Index.html';
        });
    }
}

