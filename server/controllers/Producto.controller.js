const Producto = require("../models/Producto");
const { QueryTypes } = require("sequelize");

// ---------------------------------------------------------------------------
module.exports.getProductoPorCategoria = async (categoria, limite) => {
  try {
    let productos;

    if (limite > 0) {
      productos = await Producto.sequelize.query(
        `SELECT p.*, m.nombre AS marcaNombre, c.nombre AS categoriaNombre
        FROM productos AS p 
        INNER JOIN categoria AS c ON c._id = p.categoriumId
        INNER JOIN marcas AS m ON m._id = p.marcaId
        WHERE categoriumId = ${categoria}
        ORDER BY _id DESC
        LIMIT ${limite};`,
        {
          type: QueryTypes.SELECT,
        }
      );
    } else {
      productos = await Producto.sequelize.query(
        `SELECT p.*, m.nombre AS marcaNombre, c.nombre AS categoriaNombre
        FROM productos AS p 
        INNER JOIN categoria AS c ON c._id = p.categoriumId
        INNER JOIN marcas AS m ON m._id = p.marcaId
        WHERE categoriumId = ${categoria}
        ORDER BY _id DESC;`,
        {
          type: QueryTypes.SELECT,
        }
      );
    }

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

// ---------------------------------------------------------------------------
module.exports.getProductoPorNombre = async (nombre, limite) => {
  try {
    let producto = [];
    if (limite > 0) {
      producto = await Producto.sequelize.query(
        `SELECT p.*, m.nombre AS marcaNombre, c.nombre AS categoriaNombre
        FROM productos AS p 
        INNER JOIN categoria AS c ON c._id = p.categoriumId
        INNER JOIN marcas AS m ON m._id = p.marcaId
        WHERE p.nombre LIKE "%${nombre}%"
        ORDER BY _id DESC
        LIMIT ${limite};`,
        {
          type: QueryTypes.SELECT,
        }
      );
    } else {
      producto = await Producto.sequelize.query(
        `SELECT p.*, m.nombre AS marcaNombre, c.nombre AS categoriaNombre
        FROM productos AS p 
        INNER JOIN categoria AS c ON c._id = p.categoriumId
        INNER JOIN marcas AS m ON m._id = p.marcaId
        WHERE p.nombre LIKE "%${nombre}%"
        ORDER BY _id DESC;`,
        {
          type: QueryTypes.SELECT,
        }
      );
    }
    return producto;
  } catch (e) {
    console.log(e);
    throw new Error("ERROR");
  }
};

// ---------------------------------------------------------------------------
module.exports.getProductoPorMarca = async (marca) => {
  try {
    let productos;
    productos = await Producto.sequelize.query(
      `SELECT p.*, m.nombre AS marcaNombre, c.nombre AS categoriaNombre
        FROM productos AS p 
        INNER JOIN categoria AS c ON c._id = p.categoriumId
        INNER JOIN marcas AS m ON m._id = p.marcaId
        WHERE marcaId = ${marca}
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
