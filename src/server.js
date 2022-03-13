const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

//const requireDir = require('require-dir');

//require('./database/connection'); //Importa o arquivo de conexão do banco de dados

//requireDir('./models'); 

app.use(express.json());

app.use('/', require('./routes'));

app.listen(3001);

console.log('Server is running!');