//const mysql = require("promise-mysql");
/*Hacer que process funcione de .nv y la conección se realice*/
/*const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.host,
    database:process.env.database,
    user:process.env.user,
    password:process.env.password
})*/
/*Ahora vamos a tener que crear está connection cada vez que nos
conectemos, es por ello que guardamos está información */

/*const getConnection = async()=> await connection;

module.exports={
    getConnection
}*/

const mysql = require("mysql2/promise"); // Cliente con soporte de promesas
require("dotenv").config(); // Para cargar las variables de entorno

const connectionConfig = {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
};

const getConnection = async () => {
    try {
        const connection = await mysql.createConnection(connectionConfig);
        console.log("Conexión a MySQL establecida correctamente.");
        return connection;
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw error;
    }
};

module.exports = { getConnection };