var mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'my123',
    database: 'test_db',
    port: 3306
});

module.exports = db;