var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',      
    password: 'admin',
    database: 'cabinreservations'
});

module.exports = connection;
