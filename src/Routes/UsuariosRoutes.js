const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UsuarioControleer');
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');


router.get('/', verifyJWT,  UserController.findAll);
router.get('/:id', verifyJWT,  UserController.findById);
router.get('/:email',verifyJWT,UserController.findByEmail)
router.get('/:password',verifyJWT,UserController.findByPassoword)
router.get('/:Nome',verifyJWT,UserController.findByNome)
router.get('/:Curso',verifyJWT,UserController.findByCurso)
router.get('/:Perfil',verifyJWT,UserController.findByPerfil)
//router.post('/', UserController.create);
router.post('/login', UserController.login);
router.post('/Cadastrar', UserController.Cadastrar);
//router.post('/resetPassword', UserController.resetPassword);
//router.delete('/:id',verifyJWT, UserController.delete);
//router.delete('/:id', UserController.delete);

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        
        req.userId = decoded.userId;
        next();
    });
}

module.exports = router;


/*const express = require('express');
const fs = require('fs');

const router = express.Router();
const UsuarioControler = require('../controllers/UsuarioControler');

router.get('/', UsuarioControler.findAll);+-

router.get('/:ID_Usuario',UsuarioControler.findID_Usuario);{

} ;
router.get('/:email',UsuarioControler.findemail);{

} ;router.get('/:password',UsuarioControler.findpassword);{

} ;
router.post('/',UsuarioControler.create); {

} 
router.post('/login',UsuarioControler.login); {

} 



module.exports = router;*/