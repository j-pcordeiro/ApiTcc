const connection = require('../database/config');
const encryptHelper = require('../helpers/encryptHelper');


module.exports = {

    async findAll() {
        try {
            var users = ''
            return users

        } catch (error) {
            console.log(error);
        }  
    },
    
    async findById(userId) {
        try {
            const user = await connection('tb_usuario')
            .where('ID_Usuario', userId)
            .first()
            .select('ID_Usuario', 'email', 'password');

            console.log('user -> ', JSON.stringify(user));

            if(user === null || user === undefined) {
                return -1;
            }
            else {
                return user;
            }
        } catch (error) {
            console.log("ERRO no findById" + error);
            
        }
        
        
    },

   
    async findByEmail(email) {
        try {
            const user = await connection('tb_usuario')
            .where('email', email)
            .first();

            if(user === null || user === undefined) {
                return -1;
            }
            else {
                return user;
            }
        } catch (error) {
           // console.log("ERR " + error);
        }
        
    },
    async findByPassoword(password) {
        try {
            const user = await connection('tb_usuario')
            .where('password', password)
            .first();

            if(user === null || user === undefined) {
                return -1;
            }
            else {
                return user;
            }
        } catch (error) {
           // console.log("ERR " + error);
        }
        
    },
     
    async create(user) {
        try {

          //  console.log("USU = " + JSON.stringify(user));
            user.senha = await encryptHelper.encrypt(user.password);
            

            var userID =  await connection('tb_usuario').insert(user);

            return userID;
        } catch (error) {     
            console.log("ERRO create = " +error); 
            return error.errno;          
        }
    },
    
    async update(user) {
        
    },
    
    async delete(userId) {
        const user = await connection('tb_usuario')
        .where('id', userId)
        .delete();

        if (user) {
            return 1;
        }
        else {
            return -1;
        }
    },

    async resetPassword(userEmail) {
        
        try {
            const user = await connection('tb_usuario')
            .where('email', userEmail)
            .first();

            if(user === null || user === undefined) {
                return -1;
            }

            user.senha = await encryptHelper.encrypt("senH4P4dra0");

            await connection('tb_usuario')
            .where('id', user.id)
            .update(user);

            return 0;
        } catch (error) {
            console.log("ERR " + error);
            
        }
        
    }
}

/*const connection = require('../database/config');

module.exports = {

    async findAll() {
        try {
            var users = await 
                connection('tb_usuario as u')
                .select(
                    'u.ID_Usuario as ID_Usuario', 
                    'u.email as email', 
                    'u.password as password', 
                )
                .orderBy('ID_Usuario', 'email','passoword');
        
            return users

        } catch (error) {
            console.log(error);
        }  
    },
    
    async findById(userId) {
        try {
            const user = await connection('tb_usuario')
            .where('ID_Usuario', userId)
            .first();

            if(user === null || user === undefined) {
                return -1;
            }
            else {
                return user;
            }
        } catch (error) { 
            
        }
        
    },

    async create(user) {
        try {
        
            var userID =  await connection('tb_usuario').insert(user);

            return userID;
        } catch (error) {      
            
            return error.errno;          
        }
    }
}






/*
const Sequileze = require('sequelize');
const db = require("./db");
const usuarios = db.define('tb_usuario',{
    id: {
        type: Sequileze.INTEGER, 
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true

    },
    matriculaAluno: {
        type: Sequileze.INTEGER,
        allowNULL: false,
    },
    matriculaCoordenador: {
        type: Sequileze.INTEGER,
        allowNULL: false,
    },
    senhaAluno: {
        type: Sequileze.STRING,
        allowNULL: false,
    },
    senhaCoordenador: {
        type: Sequileze.STRING,
        allowNULL: false,
    }

}, function(require, factory) {
    'use strict';
    
});
*/