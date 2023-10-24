const Prueba = require("../models/Prueba");
const shortid = require("shortid");
const { QueryTypes } = require("sequelize");

// ---------------------------------------------------------------------------
module.exports.getPrueba = async () => {
  try {
    const pruebas = await Prueba.sequelize.query(`SELECT * from pruebas;`, {
      type: QueryTypes.SELECT,
    });
    return pruebas;
  } catch (e) {
    console.log(e);
    throw new Error("ERROR");
  }
};

// ---------------------------------------------------------------------------
module.exports.postPrueba = async (input) => {
  const { contendio } = input;
  try {
    const pruebas = await Prueba.create({
      _id: shortid.generate(),
      contendio,
    });
    return pruebas;
  } catch (e) {
    console.log(e);
    throw new Error("ERROR");
  }
};
