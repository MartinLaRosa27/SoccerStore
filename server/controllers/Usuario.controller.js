const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const { QueryTypes } = require("sequelize");
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
    let usuario;
    if (password) {
      usuario = await Usuario.create({
        email,
        nombre,
        password,
      });
    } else {
      usuario = await Usuario.create({
        email,
        nombre,
      });
    }
    return createToken(usuario);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

// ---------------------------------------------------------------------------
module.exports.getUsuarioInformationToken = async (usuario) => {
  if (usuario) {
    try {
      if (!usuario) {
        throw new Error("Error, por favor registrese nuevamente");
      }
      return usuario;
    } catch (e) {
      throw new Error("Por favor, inicie sesión nuevamente");
    }
  } else {
    throw new Error("session expired");
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
    throw new Error("Información incorrecta");
  }
};

// ---------------------------------------------------------------------------
module.exports.patchUser = async (input, usuario) => {
  const { email, nombre, direccion, telefono, piso } = input;
  if (usuario) {
    try {
      if (piso) {
        await Usuario.sequelize.query(
          `UPDATE usuarios SET email='${email}', nombre='${nombre}', direccion='${direccion}', telefono='${telefono}', piso='${piso}'
          WHERE _id='${usuario._id}';`,
          {
            type: QueryTypes.UPDATE,
          }
        );
      } else {
        await Usuario.sequelize.query(
          `UPDATE usuarios SET email='${email}', nombre='${nombre}', direccion='${direccion}', telefono='${telefono}'
          WHERE _id='${usuario._id}';`,
          {
            type: QueryTypes.UPDATE,
          }
        );
      }
      const modifyUser = await Usuario.findOne({
        where: {
          _id: usuario._id,
        },
      });
      const token = createToken(modifyUser);
      return token;
    } catch (e) {
      throw new Error("No se pudo modificar la información del usuario");
    }
  } else {
    throw new Error("session expired");
  }
};
