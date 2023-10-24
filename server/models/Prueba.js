const Sequelize = require("sequelize");
const { DBConfiguration } = require("../config/DBConfiguration");

const Prueba = DBConfiguration.define("prueba", {
  _id: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    allowNull: false,
  },

  contendio: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

module.exports = Prueba;
