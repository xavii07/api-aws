const { Model } = require("objection");

module.exports = class ProductoModel extends Model {
  static get tableName() {
    return "producto";
  }
};
