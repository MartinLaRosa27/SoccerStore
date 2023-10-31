const { postPrueba } = require("../controllers/Prueba.controller");
const { getCategorias } = require("../controllers/Categoria.controller");
const {
  getProductoPorCategoria,
  getProductoPorId,
} = require("../controllers/Producto.controller");

module.exports.resolvers = {
  Query: {
    getCategorias: (root, {}, context) => {
      return getCategorias();
    },

    getProductoPorCategoria: (root, { categoria }, context) => {
      return getProductoPorCategoria(categoria);
    },

    getProductoPorId: (root, { idProducto }, context) => {
      return getProductoPorId(idProducto);
    },
  },

  Mutation: {
    postPrueba: (root, { input }, context) => {
      return postPrueba(input);
    },
  },
};
