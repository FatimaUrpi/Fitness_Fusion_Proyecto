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

// Función para el placeholder
function togglePlaceholder(input, isFocused) {
    if (isFocused) {
        input.placeholder = '';
    } else if (!input.value) {
        input.placeholder = input.getAttribute('data-placeholder');
    }
}

document.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => {
    input.setAttribute('data-placeholder', input.placeholder);
});
