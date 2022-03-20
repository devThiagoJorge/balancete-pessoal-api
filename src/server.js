const express = require('express');

const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

//const requireDir = require('require-dir');

//requireDir('./models'); 

app.use(express.json());

app.use('/', require('./routes'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

console.log('Server is running!');