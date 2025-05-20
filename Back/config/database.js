const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

// Caminho correto para acessar o certificado dentro do projeto
const caCertPath = path.join(__dirname, '..', 'certs', 'aiven-ca.pem');

const connection = mysql.createConnection({
  host: 'mysql-back-lsilva41559-98bf.l.aivencloud.com',
  port: 16801,
  user: 'avnadmin',
  password: 'AVNS_b3mFWIWt0AvycOxw3Lz',
  database: 'db_jogadores',
  ssl: {
    ca: fs.readFileSync(caCertPath) // Lendo o certificado
  }
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Conectado ao MySQL com SSL!');
  }
});

module.exports = connection;
