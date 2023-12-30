const express = require("express");
const router = require("./routes/productos");
const Knex = require("knex");
const knexConfig = require("../knexfile");
const { Model } = require("objection");

const app = express();
const PORT = process.env.PORT || 3000;

const connection = Knex(knexConfig.development);
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
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
