const UsuarioModel = require("../moldes/UserModel");
const bcrypt = require("bcrypt")
const db = require("../moldes/db");
const { QueryTypes } = require('sequelize');
const { await } = require("await");
const saltRounds = 10;
module.exports = {

    async findAll(req, res) { 
        var users = await UsuarioModel.findAll();
        
        return res.json(users);  
    },

    async findById(req, res) {
        const { ID_Usuario } = req.params;

        var result = await UsuarioModel.findById(ID_Usuario);
        console.log("Resposta do ID", result)
        if (result === -1) {
            return res.status(404).json("User not found")
        }else{            
            return res.json(result);
        }
    },
    async findByEmail (req, res) { 
        const { email  } = req.params;
        var Vu = await UsuarioModel.findByEmail(email);
        
        return res.json(Vu);  
    },
    async findByPassoword(req, res) { 
        console.log('front ', JSON.stringify(req));
        const { password  } = req.params;
        var Vu = await UsuarioModel.findByPassoword(password);
        
        return res.json(Vu);  
    },

    async create(req, res) {
        var allUserData = req.body; 

        var user = {
            ID_Usuario: allUserData.ID_Usuario,
            email: allUserData.email,
            password: allUserData.password,
        }
        console.log("Resposta", user.email)
        console.log("Resposta", user.password)

        var result = await UsuarioModel.create(user);
        
        
   

        return res.json(result);

        
    }, 
    async login(req, res){
      const email = req.body.email;
       const senha = req.body.password;
       

       console.log("Ok controller login", email);
       
    console.log("DEU CERTO");

        const user = await db.query("SELECT * FROM tb_usuario WHERE email = ?" ,
      {
        replacements: [email],
        type: QueryTypes.SELECT
      });
      let senhaC = await bcrypt.hashSync(user[0].password, 8);
      console.log("senha =  ", senha);
      console.log("senha cript =  ",  user[0].password);
      bcrypt.compare(senha, user[0].password, (error, response) => {
          console.log("res =  ", JSON.stringify(response));
          if (error) {
            res.send(error);
            console.log("ERRO NO BCRYPT", error);
          }
          if (response) {
            res.send({ msg: "Usuário logado" });
          } else {
            console.log("c = ", JSON.stringify(response));
           // res.send({ msg: "Senha incorreta" });
          }
      });
      (err, result) => {
          console.log("resposta=", result);
          if (err) {  
            console.log("erro=", err);
            res.send(err);
          }
          if (result.length > 0) {
           // console.log("senha enc ",  bcrypt.hash(senha, 8));
            bcrypt.compare(senha, result[0].password, (error, response) => {
              if (error) {
                res.send(error);
              }
              if (response) {
                res.send({ msg: "Usuário logado" });
              } else {
                console.log("c = ", JSON.stringify(response));
                res.send({ msg: "Senha incorreta" });
              }
            });
          } else {
            res.send({ msg: "Usuário não registrado!" });
          }
        }
      },
      async Cadastrar(req, res) {
        const email = req.body.email;
        const password = req.body.password;
      
        try {
          const user = await db.query("SELECT * FROM tb_usuario WHERE email = ?" ,
          {
            replacements: [email],
            type: QueryTypes.SELECT
          });
          console.log('resposta=', user);
      
          if (user.length === 0) {
            let j = await bcrypt.hashSync(password, saltRounds);
            console.log("j=",j);
            db.query(
              "INSERT INTO tb_usuario (email, password) VALUES (?, ?)",{
                replacements:[email, j],
                type: QueryTypes.INSERT
              });
            let s = await bcrypt.hashSync(password, saltRounds, (err, hash) => {
              if (err) {
                console.log('erro=', err);
                res.send(err);
              } else {
                console.log("insert",email, password);
                db.query(
                  "INSERT INTO tb_usuario (email, password) VALUES (?, ?)",{
                    replacements:[email, j],
                    type: QueryTypes.INSERT
                  }
                ,
                  (error, response) => {
                    console.log('cadastrado=', email, password);
                    res.send({ msg: 'Usuário cadastrado com sucesso' });
                  })
                  .catch((error) => {
                    console.log('erro=', error);
                    res.send(error);
                  });
              }
            });
          } else {
            console.log('Resultadoif=', user);
            res.send({ msg: 'Email já cadastrado' });
          }
        } catch (error) {
          console.log('erro=', error);
          res.send(error);
        }
      }
  
  }
