// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 var db_name =  'projecttest';
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : db_name
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      database: 'projectest',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },



};
