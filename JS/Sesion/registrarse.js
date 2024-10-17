function togglePasswordVisibility() {
    var passwordField = document.getElementById("passwordField");
    var icon = document.querySelector(".toggle-password i");

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

function validateNames(input) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(input);
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registro-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
        
        // Validar que solo se ingresen letras en los campos de nombres y apellidos
        const nombreInput = document.querySelector('input[name="nombre"]');
        const apellidoInput = document.querySelector('input[name="apellido"]');
        const nombre = nombreInput.value.trim();
        const apellido = apellidoInput.value.trim();
        const letrasRegex = /^[A-Za-z]+$/;

        if (!letrasRegex.test(nombre)) {
            // Mostrar alerta de SweetAlert para nombres inválidos
            Swal.fire({
                title: "Error en el nombre",
                text: "El nombre debe contener solo letras.",
                icon: "error"
            });
            return; // Detener el envío del formulario
        }

        if (!letrasRegex.test(apellido)) {
            // Mostrar alerta de SweetAlert para apellidos inválidos
            Swal.fire({
                title: "Error en el apellido",
                text: "El apellido debe contener solo letras.",
                icon: "error"
            });
            return; // Detener el envío del formulario
        }

        // Si todos los campos son válidos, puedes continuar con la lógica para guardar los datos en JSON

        // Luego, muestra la alerta de registro exitoso
        Swal.fire({
            title: "Registro exitoso!",
            text: "Bienvenido a FITNESS FUSION!!",
            icon: "success"
        }).then(() => {
            // Redirigir a la página de inicio
            window.location.href = "Index.html";
        });
    });
});