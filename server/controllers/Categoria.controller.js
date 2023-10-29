const Categoria = require("../models/Categoria");
const { QueryTypes } = require("sequelize");

// ---------------------------------------------------------------------------
module.exports.getCategorias = async () => {
  try {
    const categorias = await Categoria.sequelize.query(
      `SELECT * from categoria;`,
      {
        type: QueryTypes.SELECT,
      }
    );
    return categorias;
  } catch (e) {
    console.log(e);
    throw new Error("ERROR");
  }
};
