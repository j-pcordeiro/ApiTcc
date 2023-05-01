const connection = require('../database/config');

module.exports = {

    async findAll() {
        try {
            var users = await 
                connection('tb_usuario as u')
                .select(
                    'u.ID_Usuario as ID_Usuario', 
                    'u.MatriculaUsuario as MatriculaUsuario', 
                    'u.SenhaUsuario as SenhaUsuario', 
                )
                .orderBy('ID_Usuario', 'MatriculaUsuario','SenhaUsuario');
        
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