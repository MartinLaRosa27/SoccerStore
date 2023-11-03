const Usuario = require("../models/Usuario");
const { QueryTypes } = require("sequelize");

// ---------------------------------------------------------------------------
module.exports.postUsuario = async (input) => {
  const { email, nombre, password } = input;

  try {
    const usuario = await Usuario.create({
      email,
      nombre,
      password,
    });
    return usuario;
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};
