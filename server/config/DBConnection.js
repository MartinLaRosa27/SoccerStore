require("../models/Categoria");
require("../models/Marca");
require("../models/Producto");
require("../models/Usuario");
const { DBConfiguration } = require("./DBConfiguration");

module.exports.DBConnection = () => {
  DBConfiguration.sync()
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((e) => console.log(e));
};
