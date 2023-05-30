const MAtividade= require("../moldes/ModelAtividade");
const ModelAtividade= require("../moldes/ModelAlunoAtividade");
const Usuarios = require("../moldes/UserModel");


module.exports = {

    async findAll(req, res) { 
        var Atividade = await MAtividade.findAll();
        
        return res.json(Atividade);  
    },
    async findStatus(req, res) { 
        const { Status } = req.params;
        var status = await MAtividade.findStatus(Status);
        
        return res.json(status);  
    },
    async findID_AlunoAtividade(req, res) {
        const { AlunoAtividade } = req.params;

        var result = await MAtividade.findID_AlunoAtividade(AlunoAtividade);

        if (result === -1) {
            return res.status(404).json("User not found")
        }else{            
            return res.json(result);
        }
    },
    async findID_Usuario(req, res) {
        const { ID_Usuario } = req.params;

        var result = await Usuarios.findID_Aluno(ID_Usuario);

        if (result === -1) {
            return res.status(404).json("User not found")
        }else{            
            return res.json(result);
        }
    },
    async findID_CadastraAtividade(req, res) {
        const { CadastraAtividade } = req.params;

        var result = await ModelAtividade.findID_CadastraAtividade(CadastraAtividade);

        if (result === -1) {
            return res.status(404).json("User not found")
        }else{            
            return res.json(result);
        }
    },

    async create(req, res) {
        var allUserData = req.body; 

        var AtividadeC = {
            ID_CadastraAtividade: allUserData.ID_CadastraAtividade,
            ID_Usuario: allUserData.ID_Usuario,
            ID_AlunoAtividade: allUserData.findID_AlunoAtividade
        }

        

        var result = await MoldelUnidadeMedida.create(UnidadeMedida);

        return res.json(result);
    }



   
}
