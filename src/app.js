const express = require('express');
const mysql = require("mysql2");
const port = 3002;
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')
const bcrypt = require("bcrypt");
const saltRounds = 10;



const app = express ();

app.use(cors());

app.use(bodyParser.json()); //Necessário para pegar o corpo da requisicao
app.use(bodyParser.urlencoded({
    extended: true
})); 

//Rotas
const AlunoAtividadeRouter = require('./Routes/AlunoAtividadeRouterr');
app.use('/AlunoAtividadeRouter', AlunoAtividadeRouter); // O /users é um path virtual

const AtividadeRouter = require('./Routes/AtividadeRouter');
app.use('/AtividadeRouter', AtividadeRouter); // O /users é um path virtual

const UsuariosRoutes = require('./Routes/UsuariosRoutes');

app.use('/UsuariosRoutes', UsuariosRoutes); // O /users é um path virtual

app.get('/primeira', (req, res) => {
    res.sendFile(path.join(__dirname , '/Paginas/Login.html'));
});



app.get('/segunda', (req, res) => {
    res.sendFile(path.join(__dirname , '/index.html'));
});

//

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});


const db = mysql.createPool({
  host: "localhost",
  port:3306,
  user: "root",
  password: "Cordeiro@123",
  database: "tccfinal_db",
});

