const Sequelize = require("sequelize");
const { DBConfiguration } = require("../config/DBConfiguration");

const Carrito = DBConfiguration.define("carrito", {
  _id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  cantidad: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    default: 0,
  },

  talle: {
    type: Sequelize.STRING(11),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    default: 0,
  },
});

module.exports = Carrito;
