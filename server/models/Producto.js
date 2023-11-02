const Sequelize = require("sequelize");
const { DBConfiguration } = require("../config/DBConfiguration");

const Producto = DBConfiguration.define("producto", {
  _id: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    allowNull: false,
  },

  nombre: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  descripcion: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },

  urlImg: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },

  precio: {
    type: Sequelize.DOUBLE(11, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    default: 1,
  },

  cantidad: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    default: 0,
  },

  talleS: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    default: 0,
  },

  talleM: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    default: 0,
  },

  talleL: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    default: 0,
  },

  talleXL: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    default: 0,
  },
});

module.exports = Producto;