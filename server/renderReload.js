const Producto = require("./models/Producto");
const { QueryTypes } = require("sequelize");

const smallOperation = async () => {
  try {
    const productos = await Producto.sequelize.query(
      `SELECT * FROM productos;`,
      {
        type: QueryTypes.SELECT,
      }
    );
    console.log(productos);
  } catch (e) {
    console.log(e);
  }
};

setInterval(() => {
  smallOperation();
}, 600000);
