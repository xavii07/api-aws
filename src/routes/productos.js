const express = require("express");
const {
  createProducto,
  deleteProducto,
  getAllProductos,
  getProductoById,
  updateProducto,
} = require("../controllers/productos");
const {
  validateCreateProduct,
  validateUpdateProduct,
} = require("../helpers/validations/handleValidateProducto");

const router = express.Router();

router.get("/", getAllProductos);

router.get("/:id", getProductoById);

router.post("/", validateCreateProduct, createProducto);

router.put("/:id", validateUpdateProduct, updateProducto);

router.delete("/:id", deleteProducto);

module.exports = router;
