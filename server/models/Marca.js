const Sequelize = require("sequelize");
const Producto = require("./Producto");
const { DBConfiguration } = require("../config/DBConfiguration");

const Marca = DBConfiguration.define("marca", {
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

Marca.hasMany(Producto);

module.exports = Marca;
