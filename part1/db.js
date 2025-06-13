const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'DogWalkService'
});

connection.connect((err) => {
    if (err) {
        console.error
    }

})