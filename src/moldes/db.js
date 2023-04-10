const Sequileze = require('sequelize');
const sequeleze = new Sequileze("tccfinal_db","root", "Cordeiro@123",
{
    host:'localhost',
    dialect:'mysql'
});

sequeleze.authenticate()
.then(function(){
    console.log("CONEXÃO AO BANCO EFETUADA COM SUCESSO");

}).catch(function() {
    console.log("ERRO NA CONEXÃO");
});
module.exports = sequeleze;