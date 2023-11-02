const Sequelize = require("sequelize");
const Producto = require("./Producto");
const { DBConfiguration } = require("../config/DBConfiguration");

const Categoria = DBConfiguration.define("categoria", {
  _id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
  },

  nombre: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
});

Categoria.hasMany(Producto);

module.exports = Categoria;
