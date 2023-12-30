const httpHandleErrors = require("../helpers/httpHandleErrors");
const ProductoModel = require("../models/Producto");
const { response } = require("express");
const { v4: uuidv4 } = require("uuid");

const getAllProductos = async (req, res = response) => {
  try {
    const productos = await ProductoModel.query();
    res.status(200).json({ totalProductos: productos.length, productos });
  } catch (error) {
    return httpHandleErrors(
      res,
      500,
      "Error al obtener la lista de productos",
      error
    );
  }
};

const getProductoById = async (req, res = response) => {
  try {
    const productoId = req.params.id;

    const producto = await ProductoModel.query().findById(productoId);
    if (!producto) {
      return httpHandleErrors(
        res,
        404,
        `El producto con id ${productoId} no existe`
      );
    }

    res.status(200).json(producto);
  } catch (error) {
    return httpHandleErrors(res, 500, "Error al obtener el producto", error);
  }
};

const createProducto = async (req, res = response) => {
  const { nombre, descripcion, precio, stock } = req.body;
  try {
    const productExists = await ProductoModel.query().findOne({ nombre });

    if (productExists) {
      return httpHandleErrors(
        res,
        400,
        `El producto con nombre ${nombre} ya existe`
      );
    }

    const product = await ProductoModel.query().insert({
      id: uuidv4(),
      nombre: nombre.toLowerCase(),
      descripcion,
      precio,
      stock,
    });

    res
      .status(201)
      .json({ message: "Producto creado correctamente", producto: product });
  } catch (error) {
    return httpHandleErrors(res, 500, "Error al crear el producto", error);
  }
};

const updateProducto = async (req, res = response) => {
  const productoId = req.params.id;
  const { nombre, descripcion, precio, stock } = req.body;
  try {
    const producto = await ProductoModel.query().findById(productoId);
    if (!producto) {
      return httpHandleErrors(
        res,
        404,
        `El producto con id ${productoId} no existe`
      );
    }

    const productUpdated = await ProductoModel.query().patchAndFetchById(
      productoId,
      {
        nombre: nombre.toLowerCase(),
        descripcion,
        precio,
        stock,
      }
    );

    res.status(200).json({
      message: `Producto con id ${productoId} actualizado correctamente`,
      producto: productUpdated,
    });
  } catch (error) {
    return httpHandleErrors(res, 500, "Error al actualizar el producto", error);
  }
};

const deleteProducto = async (req, res = response) => {
  const productoId = req.params.id;

  try {
    const producto = await ProductoModel.query().findById(productoId);
    if (!producto) {
      return httpHandleErrors(
        res,
        404,
        `El producto con id ${productoId} no existe`
      );
    }

    await ProductoModel.query().deleteById(productoId);

    res.json({
      message: `Producto con id ${productoId} eliminado de la base de datos`,
    });
  } catch (error) {
    return httpHandleErrors(res, 500, "Error al eliminar el producto", error);
  }
};

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
};
