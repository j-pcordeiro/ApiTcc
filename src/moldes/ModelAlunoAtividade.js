const connection = require('../database/config');

module.exports = {

    async findAll() {
        try {
            var Atividade = await 
                connection('tb_atividade as A')
                .select(
                    'A.ID_CadastrarAtividade as id', 
                    'A.Titulo as Titulo',
                    'A.Local as Local',
                    'A.Descricao as Descricao',
                    'A.Imagem as Imagem',
                    'A.Data as Data ' ,
                    'A.Hora as Hora',
                    'A.Duracao as Duracao',

                )
                .orderBy('ID_CadastrarAtividade', 'Titulo', 'Local',  
                 'Descricao', 'Imagem',  'Data',  'Hora',  'Duracao');

        
            return Atividade

        } catch (error) {
            console.log(error);
        }  
    },
    
    async findMiniCurso(MiniCurso) { 
        try {
            const MiniCurso = await connection('tb_atividade')
            .where('MiniCurso', MiniCurso)
            .first();

            if(MiniCurso === null || MiniCurso === undefined) {
                return -1;
            }
            else {
                return MiniCurso;
            }
        } catch (error) { 
            
        }
    },
    async findPalestra(Palestra) { 
        try {
            const Palestra = await connection('tb_atividade')
            .where('Palestra', Palestra)
            .first();

            if(Palestra === null || Palestra === undefined) {
                return -1;
            }
            else {
                return Palestra;
            }
        } catch (error) { 
            
        }
    },
    async findTitulo ( Titulo) { 
        try {
            const Titulo = await connection('tb_atividade')
            .where('Titulo', Titulo)
            .first();

            if(Titulo === null || Titulo === undefined) {
                return -1;
            }
            else {
                return Titulo;
            }
        } catch (error) { 
            
        }
    },
    async findLocal (Local) { 
        try {
            const Local = await connection('tb_atividade')
            .where('Local', Local)
            .first();

            if(Local === null || Local === undefined) {
                return -1;
            }
            else {
                return Local;
            }
        } catch (error) { 
            
        }
    },
    async findDescricao (Descricao) { 
        try {
            const Descricao = await connection('tb_atividade')
            .where('Descricao', Descricao)
            .first();

            if(Descricao === null || Descricao === undefined) {
                return -1;
            }
            else {
                return Descricao;
            }
        } catch (error) { 
            
        }
    },
    async findImagem (Imagem ) { 
        try {
            const Imagem  = await connection('tb_atividade')
            .where('Imagem ', Imagem )
            .first();

            if(Imagem  === null || Imagem  === undefined) {
                return -1;
            }
            else {
                return Imagem ;
            }
        } catch (error) { 
            
        }
    },
    async findTipo(Tipo ) { 
        try {
            const Tipo  = await connection('tb_atividade')
            .where('Tipo ', Tipo )
            .first();

            if(Tipo  === null || Tipo  === undefined) {
                return -1;
            }
            else {
                return Tipo ;
            }
        } catch (error) { 
            
        }
    },
    async findData(Data ) { 
        try {
            const Data  = await connection('tb_atividade')
            .where('Data ', Data )
            .first();

            if(Data  === null || Data  === undefined) {
                return -1;
            }
            else {
                return Data ;
            }
        } catch (error) { 
            
        }
    },
    async findHora(Hora ) { 
        try {
            const Hora  = await connection('tb_atividade')
            .where('Hora ', Hora )
            .first();

            if(Hora  === null || Hora  === undefined) {
                return -1;
            }
            else {
                return Hora ;
            }
        } catch (error) { 
            
        }
    },
    async findDuracao(Duracao ) { 
        try {
            const Duracao  = await connection('tb_atividade')
            .where('Duracao ', Duracao )
            .first();

            if(Duracao  === null || Duracao  === undefined) {
                return -1;
            }
            else {
                return Duracao ;
            }
        } catch (error) { 
            
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
            console.log("erro = ", JSON.stringify(error));    
            
            return error.errno;          
        }
    }
}
