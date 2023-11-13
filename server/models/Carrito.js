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

  // procesando - retiro pendiente - entrega pendiente - entregado
  estado: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    default: "procesando",
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
