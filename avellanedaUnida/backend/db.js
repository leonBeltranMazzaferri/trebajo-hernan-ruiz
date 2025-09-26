const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'appavellaneda'
});

connection.connect(err => {
  if (err) {
    console.error('❌ Error al conectar con la base de datos:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos appavellaneda');
});

module.exports = connection;
