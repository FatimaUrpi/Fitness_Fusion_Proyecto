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



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('incioSesion-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
        
        // Aquí puedes agregar tu lógica para guardar los datos en JSON
        
        // Luego, muestra la alerta
        Swal.fire({
            title: "Inicio de Sesión exitoso!",
            text: "Bienvenito a FITNESS FUSION!!",
            icon: "success"
        }).then(() => {
            // Redirigir a la página de inicio
            window.location.href = "Index.html";
        });
    });
});

