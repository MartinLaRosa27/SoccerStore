const Carrito = require("../models/Carrito");
const Producto = require("../models/Producto");
const mercadopago = require("mercadopago");
const { QueryTypes } = require("sequelize");

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
    let preferenceId = "";

    try {
      // Verifica cantidad:
      await Promise.all(
        input.map(async (valor) => {
          const value = await Producto.sequelize.query(
            `SELECT cantidad AS cantidad, precio AS precio
          FROM productos
          WHERE _id = ${valor._id};`,
            {
              type: QueryTypes.SELECT,
            }
          );
          valor.precio = value[0].precio;
          if (value[0].cantidad < valor.cantidad) {
            throw new Error(
              `No hay cantidad de ${valor.nombre} necesarias para satisfacer tu demanda.`
            );
          }
        })
      );

      // MERCADO PAGO:
      await Promise.all(
        input.map((valor) => {
          valor.title = valor.nombre;
          valor.unit_price = valor.precio;
          valor.quantity = valor.cantidad;
          valor.currency_id = "ARS";
        })
      );

      mercadopago.configure({
        access_token: process.env.MP_AT,
      });

      let preference = {
        items: input,
        back_urls: {
          success: process.env.URL,
          failure: process.env.URL,
          pending: "",
        },
        auto_return: "approved",
      };

      await mercadopago.preferences
        .create(preference)
        .then(function (response) {
          preferenceId = response.body.id;
        })
        .catch(function (error) {
          console.log(error);
        });

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

      return preferenceId;
    } catch (e) {
      throw new Error(e);
    }
  } else {
    throw new Error("session expired");
  }
};

// ---------------------------------------------------------------------------
module.exports.getCarritoCompras = async (usuario) => {
  if (usuario) {
    try {
      const productos = await Carrito.sequelize.query(
        `SELECT p.nombre, p.precio, p.urlImg, c.cantidad, c.talle, p._id AS _id, c.estado AS estado
        FROM carritos AS c
        INNER JOIN productos AS p ON c.productoId = p._id
        WHERE usuarioId = '${usuario._id}' AND estado = "retiro pendiente" OR estado = "entrega pendiente";`,
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
