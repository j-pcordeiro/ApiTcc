const UsuarioModel = require("../moldes/Usuarios");


module.exports = {

    async findAll(req, res) { 
        var users = await UsuarioModel.findAll();
        
        return res.json(users);  
    },

    async findID_Usuario(req, res) {
        const { ID_Usuario } = req.params;

        var result = await UsuarioModel.findID_Usuario(ID_Usuario);

        if (result === -1) {
            return res.status(404).json("User not found")
        }else{            
            return res.json(result);
        }
    },
    async findMatriculaUsuario (req, res) { 
        const { MatriculaUsuario  } = req.params;
        var Vu = await UsuarioModel.findMatriculaUsuario(MatriculaUsuario);
        
        return res.json(Vu);  
    },
    async findSenhaUsuario(req, res) { 
        const { SenhaUsuario  } = req.params;
        var Vu = await UsuarioModel.findSenhaUsuario(SenhaUsuario);
        
        return res.json(Vu);  
    },

    async create(req, res) {
        var allUserData = req.body; 

        var user = {
            ID_Usuario: allUserData.ID_Usuario,
            MatriculaUsuario: allUserData.MatriculaUsuario,
            SenhaUsuario: allUserData.SenhaUsuario,
        }

        var result = await UsuarioModel.create(user);

        return res.json(result);
    }



   
}