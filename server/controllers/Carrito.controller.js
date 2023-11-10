const Carrito = require("../models/Carrito");
const { QueryTypes, INTEGER } = require("sequelize");

// ---------------------------------------------------------------------------
module.exports.postCarrito = async (input, usuario) => {
  const { talle, productoId } = input;
  if (usuario) {
    try {
      const carritoExists = await Carrito.findOne({
        where: {
          usuarioId: usuario._id,
          productoId,
        },
      });
      if (carritoExists) {
        throw new Error("Producto ya agregado al carrito");
      }
      const carrito = await Carrito.create({
        talle,
        cantidad: 1,
        productoId,
        usuarioId: usuario._id,
      });
      return carrito;
    } catch (e) {
      throw new Error(e);
    }
  } else {
    throw new Error("session expired");
  }
};

// ---------------------------------------------------------------------------
module.exports.getCarritoCount = async (usuario) => {
  if (usuario) {
    try {
      const value = await Carrito.sequelize.query(
        `SELECT COUNT(productoId) as value
        FROM carritos
        WHERE usuarioId='${usuario._id}';`,
        {
          type: QueryTypes.SELECT,
        }
      );
      return parseInt(value[0].value);
    } catch (e) {
      throw new Error("Error al obtener productos de usuario");
    }
  } else {
    throw new Error("session expired");
  }
};
