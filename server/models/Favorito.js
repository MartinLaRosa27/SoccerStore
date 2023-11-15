const Sequelize = require("sequelize");
const { DBConfiguration } = require("../config/DBConfiguration");

const Favorito = DBConfiguration.define("favoirito", {
  _id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

module.exports = Favorito;
