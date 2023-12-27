const knex = require('../db/knex.js')

const controladorProductos = {
  getAllProductos: async (req, res) => {
    try {
      const producto = await knex('producto').select('*')
      console.log(producto)
      res.json(producto)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Ocurrio un error en el servidor' })
    }
  },

  getProductoById: async (req, res) => {
    const productoId = req.params.id
    try {
      const producto = await knex('producto').where({ id: productoId }).first()
      if (!producto) {
        return res.status(404).json({ error: 'El producto no existe' })
      }
      res.json(producto)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Ocurrio un error en el servidor' })
    }
  },

  createProducto: async (req, res) => {
    const {
      nombre,
      descripcion,
      precio,
      stock,
      fecha_creacion,
      fecha_actualizacion,
    } = req.body

    try {
      const nuevoProducto = await knex('producto').insert(
        {
          nombre,
          descripcion,
          precio,
          stock,
          fecha_creacion,
          fecha_actualizacion,
        },
        '*'
      )
      res.status(201).json(nuevoProducto[0])
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'No se pudo agregar el producto' })
    }
  },

  updateProducto: async (req, res) => {
    const productId = req.params.id
    const {
      nombre,
      descripcion,
      precio,
      stock,
      fecha_creacion,
      fecha_actualizacion,
    } = req.body
    try {
      const updateProducto = await knex('producto')
        .where({ id: productId })
        .update(
          {
            nombre,
            descripcion,
            precio,
            stock,
            fecha_creacion,
            fecha_actualizacion,
          },
          '*'
        )
      if (!updateProducto || updateProducto.length === 0) {
        return res
          .status(404)
          .json({ error: 'No se pudo actualizar el producto' })
      }
      res.json(updateProducto[0])
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Ocurrio un error en el servidor' })
    }
  },

  deleteProducto: async (req, res) => {
    const productoId = req.params.id
    try {
      const deletedProducto = await knex('producto')
        .where({ id: productoId })
        .del()
      if (!deletedProducto) {
        return res
          .status(404)
          .json({ error: 'No se puede eliminar este producto' })
      }
      res.status(204).send()
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Ocurrio un error en el servidor' })
    }
  },
}

module.exports = controladorProductos
