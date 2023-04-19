
const AtividadeModel = require("../moldes/ModelAlunoAtividade");


module.exports = {

    async findAll(req, res) { 
        var Atividade = await AtividadeModel.findAll();
        
        return res.json(Atividade);  
    },

    async findID_CadastraAtividade(req, res) {
        const { id } = req.params;

        var result = await AtividadeModel.findById(id);

        if (result === -1) {
            return res.status(404).json("User not found")
        }else{            
            return res.json(result);
        }
    },
    async findTitulo (req, res) { 
        const { Titulo  } = req.params;
        var Vu = await AtividadeModel.findTitulo(Titulo);
        
        return res.json(Vu);  
    },
    async findLocal (req, res) { 
        const { Local  } = req.params;
        var Vu = await AtividadeModel.findLocal(Local);
        
        return res.json(Vu);  
    },
    async findDescricao (req, res) { 
        const { Descricao  } = req.params;
        var Vu = await AtividadeModel.findDescricao(Descricao);
        
        return res.json(Vu);  
    },
    async findImagem (req, res) { 
        const { Imagem  } = req.params;
        var Vu = await AtividadeModel.findDescicao(Imagem);
        
        return res.json(Vu);  
    },
    async findTipo (req, res) { 
        const { Tipo  } = req.params;
        var Vu = await AtividadeModel.findTipo(Tipo);
        
        return res.json(Vu);  
    },
    async findData (req, res) { 
        const { Data  } = req.params;
        var Vu = await AtividadeModel.findData(Data);
        
        return res.json(Vu);  
    },
    async findHora (req, res) { 
        const { Hora  } = req.params;
        var Vu = await AtividadeModel.findHora(Hora);
        
        return res.json(Vu);  
    },
    async findDuracao (req, res) { 
        const { Duracao  } = req.params;
        var Vu = await AtividadeModel.findDuracao(Duracao);
        
        return res.json(Vu);  
    },



    async create(req, res) {
        console.log(JSON.stringify(req.body));
        var allUserData = req.body; 

        var Atividade = {
  
            Titulo: allUserData.Titulo,
            Local: allUserData.Local,
            Descricao: allUserData.Descricao,
            Imagem: allUserData.Imagem,
            Tipo: allUserData.Tipo,
            Data: allUserData.Data,
            Hora: allUserData.Hora,
            Duracao: allUserData.Duracao,

        }

        var result = await AtividadeModel.create(Atividade);

        return res.json(result);
    }



   
}