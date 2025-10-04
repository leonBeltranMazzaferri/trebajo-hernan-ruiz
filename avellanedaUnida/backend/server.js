// server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // tu usuario de MySQL (por defecto root en XAMPP)
  password: "",        // tu contraseña (vacía si no configuraste nada)
  database: "appavellaneda"
});

// Verificar conexión
db.connect(err => {
  if (err) {
    console.error("❌ Error conectando a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a la base de datos appavellaneda");
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor Node.js conectado con MySQL ✅");
});

// Ejemplo: obtener todos los usuarios
app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error en la consulta");
      return;
    }
    res.json(results);
  });
});

// Levantar servidor
const PORT = 3306;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
