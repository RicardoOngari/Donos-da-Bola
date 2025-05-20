// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jogadorRoutes = require('./routes/jogadorRoutes');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api', jogadorRoutes);

// Swagger Configuração
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Jogadores',
      version: '1.0.0',
      description: 'Documentação da API para gerenciamento de jogadores'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./routes/*.js'], // <- arquivos com as anotações Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação Swagger disponível em http://localhost:${PORT}/api-docs`);
});
