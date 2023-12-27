const express = require('express')
const controladorProductos = require('../controllers/controladorProductos.js')
const router = express.Router()

router.get('/productos', controladorProductos.getAllProductos)
router.get('/productos/:id', controladorProductos.getProductoById)
router.post('/productos', controladorProductos.createProducto)
router.put('/productos/:id', controladorProductos.updateProducto)
router.delete('/productos/:id', controladorProductos.deleteProducto)
module.exports = router
