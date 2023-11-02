const { postPrueba } = require("../controllers/Prueba.controller");
const { getCategorias } = require("../controllers/Categoria.controller");
const {
  getProductoPorCategoria,
  getProductoPorCategoriaConFiltros,
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

    getProductoPorCategoriaConFiltros: (
      root,
      { categoria, filtro },
      context
    ) => {
      return getProductoPorCategoriaConFiltros(categoria, filtro);
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
