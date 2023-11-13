const Carrito = require("../models/Carrito");
const Producto = require("../models/Producto");
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
          talle,
          estado: "procesando",
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
        estado: "procesando",
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
        WHERE usuarioId = '${usuario._id}' AND estado = "procesando";`,
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

// ---------------------------------------------------------------------------
module.exports.getCarritoProducts = async (usuario) => {
  if (usuario) {
    try {
      const productos = await Carrito.sequelize.query(
        `SELECT p.nombre, p.precio, p.urlImg, c.cantidad, c.talle, p._id AS _id
        FROM carritos AS c
        INNER JOIN productos AS p ON c.productoId = p._id
        WHERE usuarioId = '${usuario._id}' AND estado = "procesando";`,
        {
          type: QueryTypes.SELECT,
        }
      );
      return productos;
    } catch (e) {
      throw new Error("Error al obtener productos de usuario");
    }
  } else {
    throw new Error("session expired");
  }
};

// ---------------------------------------------------------------------------
module.exports.deleteCarrito = async (input, usuario) => {
  const { talle, productoId } = input;
  if (usuario) {
    try {
      await Carrito.sequelize.query(
        `DELETE FROM carritos
        WHERE usuarioId='${usuario._id}' AND productoId = ${productoId} AND talle = "${talle}" AND estado = "procesando";`,
        {
          type: QueryTypes.DELETE,
        }
      );
      return "Producto eliminado del carrito";
    } catch (e) {
      throw new Error(e);
    }
  } else {
    throw new Error("session expired");
  }
};

// ---------------------------------------------------------------------------
module.exports.crearCompra = async (input, usuario) => {
  if (usuario) {
    try {
      // Verifica cantidad:
      await Promise.all(
        input.map(async (valor) => {
          const value = await Producto.sequelize.query(
            `SELECT cantidad AS cantidad
          FROM productos
          WHERE _id = ${valor._id};`,
            {
              type: QueryTypes.SELECT,
            }
          );
          if (value[0].cantidad < valor.cantidad) {
            throw new Error(
              `No hay cantidad de ${valor.nombre} necesarias para satisfacer tu demanda.`
            );
          }
        })
      );

      // Elimina cantidad:
      await Promise.all(
        input.map(async (valor) => {
          await Producto.sequelize.query(
            `UPDATE productos
            SET cantidad = cantidad - ${valor.cantidad}
          WHERE _id = ${valor._id};`,
            {
              type: QueryTypes.UPDATE,
            }
          );
        })
      );

      // Modifica estado carrito:
      await Promise.all(
        input.map(async (valor) => {
          await Carrito.sequelize.query(
            `UPDATE carritos
            SET estado = "retiro pendiente"
          WHERE productoId = ${valor._id} AND usuarioId = ${usuario._id} AND estado = "procesando";`,
            {
              type: QueryTypes.UPDATE,
            }
          );
        })
      );

      return true;
    } catch (e) {
      throw new Error(e);
    }
  } else {
    throw new Error("session expired");
  }
};
