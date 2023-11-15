const Favorito = require("../models/Favorito");
const { QueryTypes } = require("sequelize");

// ---------------------------------------------------------------------------
module.exports.postFavorito = async (productoId, usuario) => {
  if (usuario) {
    try {
      const carritoExists = await Favorito.findOne({
        where: {
          usuarioId: usuario._id,
          productoId,
        },
      });
      if (carritoExists) {
        throw new Error("Producto ya esta en favoritos");
      }
      const favorito = await Favorito.create({
        productoId,
        usuarioId: usuario._id,
      });
      return favorito;
    } catch (e) {
      throw new Error(e);
    }
  } else {
    throw new Error("session expired");
  }
};

// ---------------------------------------------------------------------------
module.exports.getFavoritoCount = async (usuario) => {
  if (usuario) {
    try {
      const value = await Favorito.sequelize.query(
        `SELECT COUNT(productoId) as value
        FROM favoiritos
        WHERE usuarioId = ${usuario._id};`,
        {
          type: QueryTypes.SELECT,
        }
      );
      return parseInt(value[0].value);
    } catch (e) {
      throw new Error("Error al obtener productos favoritos del usuario");
    }
  } else {
    throw new Error("session expired");
  }
};

// ---------------------------------------------------------------------------
module.exports.getFavoritosProducts = async (usuario) => {
  if (usuario) {
    try {
      const productos = await Favorito.sequelize.query(
        `SELECT p.nombre, p.precio, p.urlImg, p._id AS _id
        FROM favoiritos AS c
        INNER JOIN productos AS p ON c.productoId = p._id
        WHERE usuarioId = ${usuario._id};`,
        {
          type: QueryTypes.SELECT,
        }
      );
      return productos;
    } catch (e) {
      throw new Error("Error al obtener productos favoritos del usuario");
    }
  } else {
    throw new Error("session expired");
  }
};
