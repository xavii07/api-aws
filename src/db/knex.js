const knex = require('knex')
const dotenv = require('dotenv')
require('dotenv').config()

dotenv.config()
const knexInstance = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    port: process.env.DB_PORT,
  },
})

module.exports = knexInstance
