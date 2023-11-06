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
module.exports.getUsuario = async (input) => {
  const { email, password } = input;
  try {
    const userExists = await Usuario.findOne({
      where: {
        email,
      },
    });
    if (!userExists) {
      throw new Error("Información incorrecta");
    }
    if (!bcrypt.compareSync(password, userExists.password)) {
      throw new Error("Información incorrecta");
    }
    return createToken(userExists);
  } catch (e) {
    throw new Error(e);
  }
};
