const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.error("Error de conexión:", err);
        return;
    }

    console.log("Base de datos conectada");
});

module.exports = connection;