const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'dogpassword',
  database: 'DogWalkService'
});

module.exports = pool;