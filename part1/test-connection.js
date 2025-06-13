const mysql = require('mysql2/promise');

async function test() {
  try {
    const pool = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'DogWalkService',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
    const [rows] = await pool.query('SELECT 1');
    console.log('Connection success:', rows);
    process.exit(0);
  } catch (err) {
    console.error('Connection failed:', err);
    process.exit(1);
  }
}

test();