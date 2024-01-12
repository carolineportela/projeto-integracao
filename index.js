/* ***************************************************************************************************************************************************
 * Objetivo : API para integração entre back e banco de dados (GET, POST, PUT, DELETE, ETC.)
 * Autor : Caroline Portela
 * Data 11/01/2023
 * Versão : 1.0 
 *************************************************************************************************************************************************** */

// Import das bibliotecas para API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import do arquivo de configuração das variáveis, constantes e funções globais.
var message = require('./controller/modulo/config.js');

// Cria um objeto conforme a classe do express
const app = express();

// Define quem poderá acessar a API e quais métodos serão utilizados
app.use(cors());

// Define que os dados que irão chegar no corpo da requisição serão no padrão JSON
const bodyParserJSON = bodyParser.json();
app.use(bodyParserJSON);

// Defina suas rotas abaixo deste ponto
// Exemplo: app.get('/rota', (req, res) => { /* ... */ });

app.listen(8080, function () {
    console.log('Servidor aguardando requisição na porta 8080');
});
