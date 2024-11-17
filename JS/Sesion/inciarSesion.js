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
  const correo = document.getElementById("correo").value;
  const contraseña = document.getElementById("contraseña").value;

  if (!correo || !contraseña) {
      Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Por favor, complete todos los campos.',
      });
      return;
  }

  const url = "http://localhost:4000/api/login";

  // Send POST request with login data
  fetch(url, {
      method: "POST", // Changed from GET to POST
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          correo: correo,
          contraseña: contraseña
      })
  })
  .then(response => response.json())
  .then(data => {
      if (data.message === "Acceso permitido.") {
          // Successful login, handle next step (e.g., redirect)
          window.location.href = 'index.html';
        } else {
          // Display error message
          Swal.fire({
              icon: 'error',
              title: '¡Error!',
              text: data.message,
          });
      }
  })
  .catch(error => {
      console.error("Error al iniciar sesión:", error);
      Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Hubo un problema al iniciar sesión.',
      });
  });
}