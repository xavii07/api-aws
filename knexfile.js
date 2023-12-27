// Update with your config settings.

require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.NAME_DB,
      port: process.env.DB_PORT,
    },
  },
  staging: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.NAME_DB,
      port: process.env.DB_PORT,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.NAME_DB,
      port: process.env.DB_PORT,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
