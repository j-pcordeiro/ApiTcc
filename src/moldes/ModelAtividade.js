const connection = require('../database/config');

module.exports = {

    async findAll() {
        try {
            var ModelAtividade = await 
                connection('tb_atividade as at')
                .select(
                    'at.ID_AlunoAtividade as ID_AlunoAtividade', 
                    'at.ID_Aluno as ID_Aluno', 
                    'at.ID_CadastraAtividade as ID_CadastraAtividade',
                    'at.Status as Status' 
                )
                .orderBy('ID_AlunoAtividade', 'ID_Aluno','ID_CadastraAtividade',
                'Status');
        
            return ModelAtividade

        } catch (error) {
            console.log(error);
        }  
    },
    async findID_Aluno(ID_Aluno) {
        try {
            const ID_Aluno = await connection('tb_usuario')
            .where('ID_Aluno', ID_Aluno)
            .first();

            if(ID_Aluno === null || ID_Aluno === undefined) {
                return -1;
            }
            else {
                return ID_Aluno;
            }
        } catch (error) { 
            
        }
        
    },
    async create(ID_Aluno) {
        try {
        
            var ID_Aluno =  await connection('tb_usuario').insert(ID_Aluno);

            return ID_Aluno;
        } catch (error) {      
            
            return error.errno;          
        }
    },
    async findID_CadastraAtividade(ID_CadastraAtividade) {
        try {
            const ID_CadastraAtividade = await connection('tb_atividade')
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
    async create(ID_CadastraAtividade) {
        try {
        
            var ID_CadastraAtividade =  await connection('tb_atividade').insert(ID_CadastraAtividade);

            return ID_CadastraAtividade;
        } catch (error) {      
            
            return error.errno;          
        }
    },
    async findStatus(Status) { 
        try {
            const Status = await connection('tb_alunoatividade')
            .where('Status', Status)
            .first();

            if(Status === null || Status === undefined) {
                return -1;
            }
            else {
                return Status;
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

    async create(ID_AlunoAtividade) {
        try {
        
            var ID_AlunoAtividade =  await connection('tb_alunoatividade').insert(ID_AlunoAtividade);

            return ID_AlunoAtividade;
        } catch (error) {      
            
            return error.errno;          
        }
    }
}




