const express = require('express')
const rutaProductos = require('./routes/rutaProductos.js')
const knex = require('./db/knex.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', rutaProductos)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
