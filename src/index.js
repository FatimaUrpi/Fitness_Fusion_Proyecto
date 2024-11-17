/*const express = require("express");
const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");

const app = express();
app.set("port", 4000);


// Middleware
app.use(morgan("dev"));
app.use(cors({
    origin: ["http://127.0.0.1:5505", "http://127.0.0.1:5500"]
}));
app.use(express.json()); // Asegúrate de llamarlo como función

// Rutas
app.get("/usuarios", async (req, res) => {
    try {
        const connection = await database.getConnection();
        const [result] = await connection.query("SELECT * FROM usuarios");
        console.log(result); // Para depuración
        res.status(200).json(result); // Envía respuesta JSON
        connection.end();
    } catch (error) {
        console.error("Error en /usuarios:", error);
        res.status(500).send("Error al obtener los usuarios.");
    }
});

// Iniciar el servidor
app.listen(app.get("port"), () => {
    console.log("Servidor escuchando en el puerto " + app.get("port"));
});*/
//----------------------------------------------------------


/*
const express = require("express");
const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");

const app = express();
app.set("port", 4000);

// Middleware
app.use(morgan("dev"));
app.use(cors({
    origin: ["http://127.0.0.1:5505", "http://127.0.0.1:5500"]
}));
app.use(express.json()); // Para manejar cuerpos JSON
*/


//const bcrypt = require("bcrypt");

/*// Ruta para login con GET (verificación de email y contraseña)
app.get("/api/login", async (req, res) => {
    const { email, contraseña } = req.query; // Obtenemos los parámetros de la URL

    if (!email || !contraseña) {
        return res.status(400).json({ message: "Por favor, ingrese el correo electrónico y la contraseña." });
    }

    try {
        // Conexión a la base de datos
        const connection = await database.getConnection();
        
        // Consulta para verificar las credenciales
        const [rows] = await connection.query("SELECT * FROM usuarios WHERE email = ?", [email]);
        
        // Si no encontramos ningún usuario con el correo proporcionado
        if (rows.length === 0) {
            return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos." });
        }

        // Verificar que la contraseña coincida
        const usuario = rows[0]; // El primer usuario encontrado
        if (usuario.contraseña === contraseña) {
            // Si la contraseña es correcta
            return res.status(200).json({ message: "Acceso permitido." });
        } else {
            // Si la contraseña no es correcta
            return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos." });
        }
    } catch (error) {
        console.error("Error al realizar la consulta de login:", error);
        res.status(500).send("Error al intentar iniciar sesión.");
    }
});

// Iniciar el servidor
app.listen(app.get("port"), () => {
    console.log("Servidor escuchando en el puerto " + app.get("port"));
});*/



/*const express = require("express");
const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");

const app = express();
app.set("port", 4000);


// Middleware
app.use(morgan("dev"));
app.use(cors({
    origin: ["http://127.0.0.1:5505", "http://127.0.0.1:5500"]
}));
app.use(express.json()); // Asegúrate de llamarlo como función

// Rutas
app.get("/usuarios", async (req, res) => {
    try {
        const connection = await database.getConnection();
        const [result] = await connection.query("SELECT * FROM usuarios");
        console.log(result); // Para depuración
        res.status(200).json(result); // Envía respuesta JSON
        connection.end();
    } catch (error) {
        console.error("Error en /usuarios:", error);
        res.status(500).send("Error al obtener los usuarios.");
    }
});

// Iniciar el servidor
app.listen(app.get("port"), () => {
    console.log("Servidor escuchando en el puerto " + app.get("port"));
});*/
//----------------------------------------------------------

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const database = require("./database"); // Conexión a tu base de datos

const app = express();
const port = 4000;

// Middleware
app.use(morgan("dev"));
app.use(cors({ origin: ["http://127.0.0.1:5505", "http://127.0.0.1:5500"] }));
app.use(express.json()); // Para manejar cuerpos JSON

// Route to handle login (with POST method)
app.post("/api/login", async (req, res) => {
    const { correo, contraseña } = req.body; // Get data from the request body

    if (!correo || !contraseña) {
        return res.status(400).json({ message: "Por favor, ingrese el correo electrónico y la contraseña." });
    }

    try {
        const connection = await database.getConnection();
        const [rows] = await connection.query("SELECT * FROM usuario WHERE correo = ?", [correo]); // Ensure querying by 'correo'

        if (rows.length === 0) {
            return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos." });
        }

        const usuario = rows[0];
        if (usuario.contraseña === contraseña) {
            return res.status(200).json({ message: "Acceso permitido." });
        } else {
            return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos." });
        }
    } catch (error) {
        console.error("Error al realizar la consulta de login:", error);
        res.status(500).send("Error al intentar iniciar sesión.");
    }
});

// Ruta para registrar un nuevo usuario

/*_____________________________Registrar usuario_______________________________*/

/*fetch("http://localhost:4000/registrar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
})
.then(response => response.json())
.then(data => {
    if (data.message) {
        Swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            text: data.message,
            confirmButtonText: 'Continuar'
        }).then(() => {
            window.location.href = 'Index.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema con el registro.',
        });
    }
})
.catch(error => {
    console.error("Error al registrar:", error);
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema con el registro.',
    });
});*/

app.post("/registrar", async (req, res) => {
    const { nombre, apellido, telefono, correo, contraseña } = req.body;

    if (!nombre || !apellido || !telefono || !correo || !contraseña) {
        console.log("Faltan campos obligatorios:", req.body);
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    try {
        // Conexión a la base de datos
        const connection = await database.getConnection();
        console.log("Conexión a la base de datos establecida.");

        // Inserción de datos en la tabla usuario
        const [result] = await connection.query(
            "INSERT INTO usuario (nombre, apellido, telefono, correo, contraseña) VALUES (?, ?, ?, ?, ?)",
            [nombre, apellido, telefono, correo, contraseña] // Almacenando la contraseña sin encriptar
        );

        // Finalizar conexión
        connection.end();
        console.log("Usuario registrado con ID:", result.insertId);

        // Respuesta de éxito
        res.status(201).json({ message: "Usuario registrado exitosamente.", userId: result.insertId });
    } catch (error) {
        console.error("Error en /registrar:", error);
        res.status(500).send("Error al registrar el usuario.");
    }
});



// Ruta para actualizar la contraseña
app.post('/actualizarContrasena', async (req, res) => {
    try {
        const { correo, nuevaContrasena } = req.body;

        // Validación de datos
        if (!correo || !nuevaContrasena) {
            return res.status(400).json({ message: 'Correo y contraseña son obligatorios.' });
        }

        // Verificar si el correo existe en la base de datos
        const connection = await database.getConnection();
        const [rows] = await connection.query('SELECT * FROM usuario WHERE correo = ?', [correo]);

        if (rows.length === 0) {
            return res.status(404).json({ encontrado: false, message: 'Correo no encontrado.' });
        }

        // Actualizar la contraseña en la base de datos
        await connection.query('UPDATE usuario SET contraseña = ? WHERE correo = ?', [nuevaContrasena, correo]);

        // Respuesta exitosa
        res.status(200).json({ encontrado: true, message: 'Contraseña actualizada correctamente.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
