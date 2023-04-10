module.exports = {

    development: {
      client: 'mysql2', 
      connection: {
        host : 'localhost',
        port: "3306",
        user : 'root',
        password : 'Cordeiro@123',
        database : 'tccfinal_db',
        timezone: '+03:00',
      },
      migrations: {
        tableName: 'migrations',
        directory: './src/database/migrations'
      }
    },
  

    production: {
        client: 'mysql2', 
        connection: {
          host : 'localhost',
          port: "3306",
          user : 'root',
          password : 'Cordeiro@123',
          database : 'tccfinal_db',
          timezone: '+03:00',
      },
      migrations: {
        tableName: 'migrations',
        directory: './src/database/migrations'
      }
    }
  };