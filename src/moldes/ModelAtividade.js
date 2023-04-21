const { json } = require('express');
const connection = require('../database/config');

module.exports = {

    async findAll() {
        try {
            var ModelAtividade = await 
                connection('tb_atividade')
                .select(
                    'tb_atividade.ID_CadastraAtividade as ID_CadastraAtividade',
                    'tb_atividade.Titulo as Titulo', 
                    'tb_atividade.Descricao as Descricao',
                    'tb_atividade.Local as Local' ,
                    'tb_atividade.Imagem as Imagem',
                    'tb_atividade.Tipo as Tipo',
                    'tb_atividade.Data as Data',
                    'tb_atividade.Hora as Hora',
                    'tb_atividade.Duracao as Duracao'

                )
                .orderBy('ID_CadastraAtividade', 'Titulo','Descricao','Local',
                'Imagem','Local','Imagem','Tipo','Data','Hora',
                'Duracao');
        
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
    async create(atividade) {
        try {
        
            var id =  await connection('tb_atividade').insert(atividade);

            return id;
        } catch (error) {      
            
            return error;          
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
    async create(atv) {
        try {
        
            var ID_CadastraAtividade =  await connection('tb_atividade').insert(atv);

            return ID_CadastraAtividade;
        } catch (error) {      
            console.log("Erro na model", JSON.stringify(error))
            return error;          
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
        
    }
}




