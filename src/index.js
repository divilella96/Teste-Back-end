require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const app = express();

// configuração do banco 
const port = process.env.PORT || 3030;
const database_url = `${process.env.DATABASE_URL}${process.env.DATABASE_DB}` || 'mongodb://localhost:27017/';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.listen(port);

// Rota 
app.use('/universities', require('./routes/universitiesRoute.js'));

// conectando ao banco de dados
mongoose.connect(database_url);




module.exports = app