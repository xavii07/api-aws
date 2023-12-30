const ProductoModel = require("../models/Producto");

const getAllProductos = async (req, res) => {
  const productos = await ProductoModel.query();
  res.status(200).json(productos);
};

const getProductoById = async (req, res) => {
  const productoId = req.params.id;

  const producto = await ProductoModel.query().findById(productoId);
  if (!producto) {
    return res.status(404).json({
      status: 404,
      message: `El producto con id ${productoId} no existe`,
    });
  }

  res.status(200).json(producto);
};

const createProducto = async (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;

  const product = await ProductoModel.query().insert({
    nombre,
    descripcion,
    precio,
    stock,
  });

  res
    .status(201)
    .json({ message: "Producto creado correctamente", producto: product });
};

const updateProducto = async (req, res) => {
  const productoId = req.params.id;
  const { nombre, descripcion, precio, stock } = req.body;

  const producto = await ProductoModel.query().findById(productoId);
  if (!producto) {
    return res.status(404).json({
      status: 404,
      message: `El producto con id ${productoId} no existe`,
    });
  }

  const productUpdated = await ProductoModel.query().patchAndFetchById(
    productoId,
    {
      nombre,
      descripcion,
      precio,
      stock,
    }
  );

  res.status(200).json({
    message: `Producto con id ${productoId} actualizado correctamente`,
    producto: productUpdated,
  });
};

const deleteProducto = async (req, res) => {
  const productoId = req.params.id;

  const producto = await ProductoModel.query().findById(productoId);
  if (!producto) {
    return res.status(404).json({
      status: 404,
      message: `El producto con id ${productoId} no existe`,
    });
  }

  await ProductoModel.query().deleteById(productoId);

  res.json({
    message: `Producto con id ${productoId} eliminado de la base de datos`,
  });
};

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
};
