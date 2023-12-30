const express = require("express");
const routerProductos = require("./routes/productos");
const Knex = require("knex");
const cors = require("cors");
const env = process.env.NODE_ENV || "development";
const knexConfig = require("../knexfile")[env];
const { Model } = require("objection");

const app = express();
const PORT = process.env.PORT || 3000;

const connection = Knex(knexConfig);
Model.knex(connection);

connection
  .raw("SELECT 1+1 as result")
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos", error);
  });

app.use(express.json());
app.use(cors());
app.use("/api/productos", routerProductos);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
