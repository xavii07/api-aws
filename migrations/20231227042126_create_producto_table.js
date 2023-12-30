require("dotenv").config();

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.createTable("producto", (table) => {
    table.increments("id").primary();
    table.string("nombre").notNullable();
    table.text("descripcion");
    table.decimal("precio", 10, 2).notNullable();
    table.integer("stock").notNullable();
    table.timestamp("fecha_creacion").defaultTo(knex.fn.now());
    table
      .timestamp("fecha_actualizacion")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("producto");
};
