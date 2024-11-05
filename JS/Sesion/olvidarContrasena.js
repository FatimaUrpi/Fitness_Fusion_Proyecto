document.getElementById("correo").addEventListener("input", validarCorreo);

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

function buscarCuenta() {
    const correo = document.getElementById("correo").value.trim();
    
    validarCorreo(); // Llama a validarCorreo para mostrar cualquier mensaje de error
    const errorCorreo = document.getElementById("error-correo");

    // Verifica que no haya mensajes de error visibles antes de continuar
    if (errorCorreo.style.display === "none") {
        // Alerta de éxito con SweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Correo enviado!',
            text: 'Revisa tu bandeja de entrada para restablecer tu contraseña.',
            confirmButtonText: 'Continuar'
        }).then(() => {
            window.location.href = 'iniciarSesion.html';
        });
    }
}
