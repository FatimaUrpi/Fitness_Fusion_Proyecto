async function getUsuarios() {
    try {
        const response = await fetch("http://localhost:4000/usuario"); // Llamada al endpoint
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json(); // Extrae los datos JSON
        console.log(data); // Para depuración
        return data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error;
    }
}

// Exporta la función si la necesitas en otros scripts
// module.exports = { getUsuarios }; // Si usas Node.js