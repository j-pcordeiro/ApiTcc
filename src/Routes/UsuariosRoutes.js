const express = require('express');
const fs = require('fs');

const router = express.Router();
const UsuarioControler = require('../controllers/UsuarioControler');

router.get('/', UsuarioControler.findAll);+-

router.get('/:ID_Usuario',UsuarioControler.findID_Usuario);{

} ;
router.get('/:MatriculaUsuario',UsuarioControler.findMatriculaUsuario);{

} ;router.get('/:SenhaUsuario',UsuarioControler.findSenhaUsuario);{

} ;
router.post('/',UsuarioControler.create); {

} 

module.exports = router;