const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const Carrito = require("./Carrito");
const Favorito = require("./Favorito");

const { DBConfiguration } = require("../config/DBConfiguration");

const Usuario = DBConfiguration.define("usuario", {
  _id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: { args: true, msg: "email ya registrado" },
  },

  nombre: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  direccion: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },

  telefono: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },

  piso: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
});

Usuario.hasMany(Carrito);
Usuario.hasMany(Favorito);

Usuario.afterValidate(async (user) => {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
});

module.exports = Usuario;
