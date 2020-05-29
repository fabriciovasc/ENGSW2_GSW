const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root', 
    password: 'Brawlhalla@123#',
    database: 'gsw'
});

module.exports = conexao