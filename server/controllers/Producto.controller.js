const Producto = require("../models/Producto");
const { QueryTypes } = require("sequelize");

// ---------------------------------------------------------------------------
module.exports.getProductoPorCategoria = async (categoria) => {
  try {
    const productos = await Producto.sequelize.query(
      `SELECT p.*, m.nombre AS marcaNombre, c.nombre AS categoriaNombre
      FROM productos AS p 
      INNER JOIN categoria AS c ON c._id = p.categoriumId
      INNER JOIN marcas AS m ON m._id = p.marcaId
      WHERE categoriumId = "${categoria}"
      ORDER BY _id DESC;`,
      {
        type: QueryTypes.SELECT,
      }
    );
    return productos;
  } catch (e) {
    console.log(e);
    throw new Error("ERROR");
  }
};

// ---------------------------------------------------------------------------
module.exports.getProductoPorId = async (idProducto) => {
  try {
    const producto = await Producto.sequelize.query(
      `SELECT p.*, m.nombre AS marcaNombre, c.nombre AS categoriaNombre
      FROM productos AS p 
      INNER JOIN categoria AS c ON c._id = p.categoriumId
      INNER JOIN marcas AS m ON m._id = p.marcaId
      WHERE p._id = ${idProducto};`,
      {
        type: QueryTypes.SELECT,
      }
    );
    return producto;
  } catch (e) {
    console.log(e);
    throw new Error("ERROR");
  }
};
