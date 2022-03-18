const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

//const requireDir = require('require-dir');

//requireDir('./models'); 

app.use(express.json());

app.use('/', require('./routes'));

app.listen(process.env.PORT | 3001);

console.log('Server is running!');