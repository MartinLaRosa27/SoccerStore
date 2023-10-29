const { getPrueba, postPrueba } = require("../controllers/Prueba.controller");
const { getCategorias } = require("../controllers/Categoria.controller");
const {
  getProductoPorCategoria,
} = require("../controllers/Producto.controller");

module.exports.resolvers = {
  Query: {
    getCategorias: (root, {}, context) => {
      return getCategorias();
    },

    getProductoPorCategoria: (root, { categoria }, context) => {
      return getProductoPorCategoria(categoria);
    },
  },

  Mutation: {
    postPrueba: (root, { input }, context) => {
      return postPrueba(input);
    },
  },
};
