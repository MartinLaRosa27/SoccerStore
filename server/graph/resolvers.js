const { postPrueba } = require("../controllers/Prueba.controller");
const { getCategorias } = require("../controllers/Categoria.controller");
const {
  getProductoPorCategoria,
  getProductoPorCategoriaConFiltros,
  getProductoPorNombre,
  getProductoPorId,
  getProductoPorNombreConFiltros,
} = require("../controllers/Producto.controller");

module.exports.resolvers = {
  Query: {
    getCategorias: (root, {}, context) => {
      return getCategorias();
    },

    getProductoPorCategoria: (root, { categoria, limite }, context) => {
      return getProductoPorCategoria(categoria, limite);
    },

    getProductoPorCategoriaConFiltros: (
      root,
      { categoria, filtro },
      context
    ) => {
      return getProductoPorCategoriaConFiltros(categoria, filtro);
    },

    getProductoPorNombreConFiltros: (root, { nombre, filtro }, context) => {
      return getProductoPorNombreConFiltros(nombre, filtro);
    },

    getProductoPorNombre: (root, { nombre, limite }, context) => {
      return getProductoPorNombre(nombre, limite);
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
