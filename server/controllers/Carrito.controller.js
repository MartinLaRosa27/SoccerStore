const Carrito = require("../models/Carrito");

// ---------------------------------------------------------------------------
module.exports.postCarrito = async (input, usuario) => {
  const { talle, productoId } = input;
  if (usuario) {
    try {
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
