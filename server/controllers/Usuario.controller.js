const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const { createToken } = require("../helpers/jwt");

// ---------------------------------------------------------------------------
module.exports.postUsuario = async (input) => {
  const { email, nombre, password } = input;
  try {
    const userExists = await Usuario.findOne({
      where: {
        email,
      },
    });
    if (userExists) {
      throw new Error("Email ya registrado");
    }
    const usuario = await Usuario.create({
      email,
      nombre,
      password,
    });
    return createToken(usuario);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

// ---------------------------------------------------------------------------
module.exports.getUsuarioInformationToken = async (usuario) => {
  try {
    if (!usuario) {
      throw new Error("Error, por favor registrese nuevamente");
    }
    return usuario;
  } catch (e) {
    throw new Error(e);
  }
};
