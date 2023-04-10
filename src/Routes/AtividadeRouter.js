const express = require('express');
const fs = require('fs');

const router = express.Router();

const AtividadeControler = require('../Controllers/AtividadeControle');

router.get('/', AtividadeControler.findAll);
router.get('/:ID_CadastraAtividade', AtividadeControler.findID_CadastraAtividade);
router.get('/:Titulo', AtividadeControler.findTitulo);
router.get('/:Local',AtividadeControler.findLocal);
router.get('/:Descricao', AtividadeControler.findDescricao);
router.get('/:Imagem', AtividadeControler.findImagem);
router.get('/:Tipo', AtividadeControler.findTipo);
router.get('/:Data', AtividadeControler.findData);
router.get('/:Hora', AtividadeControler.findHora);
router.get('/:Duracao', AtividadeControler.findDuracao);

router.post('/',AtividadeControler.create);

module.exports = router;