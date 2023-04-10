const connection = require('../database/config');

module.exports = {

    async findAll() {
        try {
            var users = await 
                connection('TB_Usuario as u')
                .select(
                    'u.IDUSUARIO as id', 
                    'u.Matricula as Matricula', 
                    'u.Nome as nome', 
                    'u.Senha as senha',
                    'u.Status as status'
                )
                .orderBy('id', 'desc');
        
            return users

        } catch (error) {
            console.log(error);
        }  
    },
    
    async findById(userId) {
        try {
            const user = await connection('TB_Usuario')
            .where('IDUSUARIO', userId)
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
        
            var userID =  await connection('TB_Usuario').insert(user);

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