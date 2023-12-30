const { check } = require("express-validator");
const validateData = require("../../middlewares/validate-data.middleware");

const validateCreateProduct = [
  check("nombre").notEmpty().withMessage("El nombre es requerido"),
  check("descripcion").notEmpty().withMessage("La descripcion es requerida"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es requerido")
    .isNumeric()
    .withMessage("El precio debe ser un numero"),
  check("stock")
    .notEmpty()
    .withMessage("El stock es requerido")
    .isNumeric()
    .withMessage("El stock debe ser un numero"),
  validateData,
];

const validateUpdateProduct = [
  check("nombre").notEmpty().withMessage("El nombre es requerido"),
  check("descripcion").notEmpty().withMessage("La descripcion es requerida"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es requerido")
    .isNumeric()
    .withMessage("El precio debe ser un numero"),
  check("stock")
    .notEmpty()
    .withMessage("El stock es requerido")
    .isNumeric()
    .withMessage("El stock debe ser un numero"),
  validateData,
];

module.exports = {
  validateCreateProduct,
  validateUpdateProduct,
};
