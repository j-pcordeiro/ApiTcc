const express = require('express');
const fs = require('fs');

const router = express.Router();

const AlunoAtividadeControler = require('../Controllers/AlunoAtividadeControler');

const AtividadeControler = require('../Controllers/AtividadeControle');
const UsuarioControler = require('../Controllers/UsuarioControleer');



router.get('/', AlunoAtividadeControler.findAll);
router.get('/:ID_CadastraAtividade', AtividadeControler.findID_CadastraAtividade);
router.get('/:ID_Usuario', UsuarioControler.findById)
router.get('/:ID_AlunoAtividade', AlunoAtividadeControler.findID_AlunoAtividade)
router.get('/:Status', AlunoAtividadeControler.findStatus)

router.post('/create',AtividadeControler.create);

module.exports = router;