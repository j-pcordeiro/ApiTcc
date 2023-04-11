const express = require('express');
const port = 3002;
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')



const app = express ();

app.use(cors());

app.use(bodyParser.json()); //Necessário para pegar o corpo da requisicao
app.use(bodyParser.urlencoded({
    extended: true
})); 

//Rotas
const AlunoAtividadeRouter = require('./Routes/AlunoAtividadeRouter');
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
