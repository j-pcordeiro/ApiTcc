const connection = require('../database/config');

module.exports = {

    async findAll() {
        try {
            var Atividade = await 
                connection('tb_alunoatividade as A')
                .select(
                    'A.ID_AlunoAtividade as ID_AlunoAtividade',
                    'A.ID_Usuario as ID_Usuario',
                    'A.ID_CadastrarAtividade as ID_CadastrarAtividade'

                )
                .orderBy('ID_AlunoAtividade', 'ID_CadastrarAtividade', 'ID_Usuario');

        
            return Atividade

        } catch (error) {
            console.log(error);
        }  
    },
    async findID_CadastraAtividade(ID_CadastraAtividade) {
        try {
            const ID_CadastraAtividade = await connection('tb_alunoatividade')
            .where('ID_CadastraAtividade', ID_CadastraAtividade)
            .first();

            if(ID_CadastraAtividade === null || ID_CadastraAtividade === undefined) {
                return -1;
            }
            else {
                return ID_CadastraAtividade;
            }
        } catch (error) { 
            
        }
        
    },
    async findID_Usuario(ID_Usuario) {
        try {
            const ID_Usuario = await connection('tb_alunoatividade')
            .where('ID_Usuario', ID_Usuario)
            .first();

            if(ID_Usuario === null || ID_Usuario === undefined) {
                return -1;
            }
            else {
                return ID_Usuario;
            }
        } catch (error) { 
            
        }
        
    },
    async findID_AlunoAtividade(ID_AlunoAtividade) {
        try {
            const ID_AlunoAtividade = await connection('tb_alunoatividade')
            .where('ID_AlunoAtividade', ID_AlunoAtividade)
            .first();

            if(ID_AlunoAtividade === null || ID_AlunoAtividade === undefined) {
                return -1;
            }
            else {
                return ID_AlunoAtividade;
            }
        } catch (error) { 
            
        }
        
    },

    async create(ID_CadastraAtividade) {
        try {
        
            var ID_CadastraAtividade =  await connection('tb_alunoatividade').insert(ID_CadastraAtividade);

            return ID_CadastraAtividade;
        } catch (error) {  
            console.log("erro = ", JSON.stringify(error));    
            
            return error.errno;          
        }
    }
}
