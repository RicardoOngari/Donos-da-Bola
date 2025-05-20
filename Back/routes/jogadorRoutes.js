const express = require('express');
const router = express.Router();
const jogadorController = require('../controllers/jogadorController');

/**
 * @swagger
 * tags:
 *   name: Jogadores
 *   description: Endpoints para gerenciamento de jogadores
 */

/**
 * @swagger
 * /api/jogadores:
 *   post:
 *     summary: Cria um novo jogador
 *     tags: [Jogadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - pontuacao
 *             properties:
 *               nome:
 *                 type: string
 *               pontuacao:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Jogador criado com sucesso
 */
router.post('/jogadores', jogadorController.createJogador);

/**
 * @swagger
 * /api/jogadores:
 *   get:
 *     summary: Lista todos os jogadores
 *     tags: [Jogadores]
 *     responses:
 *       200:
 *         description: Lista de jogadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/jogadores', jogadorController.getJogadores);

/**
 * @swagger
 * /api/jogadores/{id}:
 *   put:
 *     summary: Atualiza os dados de um jogador
 *     tags: [Jogadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do jogador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               pontuacao:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Jogador atualizado com sucesso
 */
router.put('/jogadores/:id', jogadorController.updateJogador);

/**
 * @swagger
 * /api/jogadores/{id}:
 *   delete:
 *     summary: Remove um jogador
 *     tags: [Jogadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do jogador
 *     responses:
 *       200:
 *         description: Jogador removido com sucesso
 */
router.delete('/jogadores/:id', jogadorController.deleteJogador);

module.exports = router;
