const db = require('./db'); 

db.query('SELECT * FROM usuario', (err, rows) => {
  if (err) throw err;
  console.log('Usuarios:', rows);
});
