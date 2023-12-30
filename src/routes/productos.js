const express = require("express");
const {
  createProducto,
  deleteProducto,
  getAllProductos,
  getProductoById,
  updateProducto,
} = require("../controllers/productos");

const router = express.Router();

router.get("/productos", getAllProductos);

router.get("/productos/:id", getProductoById);

router.post("/productos", createProducto);

router.put("/productos/:id", updateProducto);

router.delete("/productos/:id", deleteProducto);

module.exports = router;
