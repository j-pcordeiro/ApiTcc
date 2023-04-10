const express = require('express');
const fs = require('fs');

const router = express.Router();
const UsuarioControler = require('../controllers/UsuarioControler');

router.get('/', UsuarioControler.findAll);+-

router.get('/:ID_Aluno',UsuarioControler.findID_Aluno);{

} ;
router.get('/:ID_Coordenador',UsuarioControler.findID_Coordenador);{

} ;
router.get('/:MatriculaCoordenador',UsuarioControler.findMatriculaCoordenador);{

} ;router.get('/:MatriculaAluno',UsuarioControler.findMatriculaAluno);{

} ;router.get('/:SenhaAluno',UsuarioControler.findSenhaAluno);{

} ;router.get('/:SenhaCoordenador',UsuarioControler.findSenhaCoordenador);{

} ;
router.post('/',UsuarioControler.create); {

} 

module.exports = router;