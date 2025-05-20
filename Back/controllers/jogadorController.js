// backend/controllers/jogadorController.js
const connection = require('../config/database');

// Inserir um novo jogador (incluindo posicao)
exports.createJogador = (req, res) => {
  const { nome, time, nacionalidade, idade, url_imagem, posicao } = req.body;
  const sql = 'INSERT INTO jogadores (nome, time, nacionalidade, idade, url_imagem, posicao) VALUES (?, ?, ?, ?, ?, ?)';
  
  connection.query(sql, [nome, time, nacionalidade, idade, url_imagem, posicao], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Jogador criado!', id: result.insertId });
  });
};

// Listar jogadores (a consulta retornará também a posição, sem alterações necessárias)
exports.getJogadores = (req, res) => {
  const sql = 'SELECT * FROM jogadores';
  
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Atualizar um jogador (agora incluindo posicao)
exports.updateJogador = (req, res) => {
  const { id } = req.params;
  const { nome, time, nacionalidade, idade, url_imagem, posicao } = req.body;
  const sql = 'UPDATE jogadores SET nome = ?, time = ?, nacionalidade = ?, idade = ?, url_imagem = ?, posicao = ? WHERE id = ?';
  
  connection.query(sql, [nome, time, nacionalidade, idade, url_imagem, posicao, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Jogador atualizado!' });
  });
};

// Remover jogador (sem necessidade de alteração, pois não utiliza o campo posicao)
exports.deleteJogador = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM jogadores WHERE id=?';
  
  connection.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Jogador removido!' });
  });
};
