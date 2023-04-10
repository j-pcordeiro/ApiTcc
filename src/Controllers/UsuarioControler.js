const UsuarioModel = require("../moldes/Usuarios");


module.exports = {

    async findAll(req, res) { 
        var users = await UsuarioModel.findAll();
        
        return res.json(users);  
    },

    async findID_Aluno(req, res) {
        const { ID_Aluno } = req.params;

        var result = await UsuarioModel.findID_Aluno(ID_Aluno);

        if (result === -1) {
            return res.status(404).json("User not found")
        }else{            
            return res.json(result);
        }
    },
    async findID_Coordenador(req, res) {
        const { ID_Coordenador } = req.params;

        var result = await UsuarioModel.findID_Coordenador(ID_Coordenador);

        if (result === -1) {
            return res.status(404).json("User not found")
        }else{            
            return res.json(result);
        }
    },
    async findMatriculaAluno (req, res) { 
        const { MatriculaAluno  } = req.params;
        var Vu = await UsuarioModel.findMatriculaAluno(MatriculaAluno);
        
        return res.json(Vu);  
    },
    async findMatriculaCoordenador (req, res) { 
        const { MatriculaCoordenador  } = req.params;
        var Vu = await UsuarioModel.findMatriculaCoordenador(MatriculaCoordenador);
        
        return res.json(Vu);  
    },
    async findSenhaAluno (req, res) { 
        const { SenhaAluno  } = req.params;
        var Vu = await UsuarioModel.findSenhaAluno(SenhaAluno);
        
        return res.json(Vu);  
    },
    async findSenhaCoordenador (req, res) { 
        const { SenhaCoordenador  } = req.params;
        var Vu = await UsuarioModel.findSenhaCoordenador(SenhaCoordenador);
        
        return res.json(Vu);  
    },
    async findstatus (req, res) { 
        const { status  } = req.params;
        var Vu = await UsuarioModel.findstatus(status);
        
        return res.json(Vu);  
    },




    async create(req, res) {
        var allUserData = req.body; 

        var user = {
            ID_Aluno: allUserData.ID_Aluno,
            ID_Coordenador:allUserData.ID_Coordenador,
            MatriculaAluno: allUserData.MatriculaAluno,
            MatriculaCordenador: allUserData.MatriculaCordenador,
            SenhaAluno: allUserData.SenhaAluno,
            SenhaCoordenador: allUserData.SenhaCoordenador,
            status: allUserData.Status,
        }

        var result = await UsuarioModel.create(user);

        return res.json(result);
    }



   
}