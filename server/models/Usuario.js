const Sequelize = require("sequelize");
const { DBConfiguration } = require("../config/DBConfiguration");

const Usuario = DBConfiguration.define("usuario", {
  _id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  nombre: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  direccion: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  telefono: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  piso: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
});

module.exports = Usuario;
