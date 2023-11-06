const { getCategorias } = require("../controllers/Categoria.controller");
const {
  getProductoPorCategoria,
  getProductoPorCategoriaConFiltros,
  getProductoPorNombre,
  getProductoPorId,
} = require("../controllers/Producto.controller");
const {
  postUsuario,
  getUsuario,
} = require("../controllers/Usuario.controller");

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

    getProductoPorNombre: (root, { nombre, limite }, context) => {
      return getProductoPorNombre(nombre, limite);
    },

    getProductoPorId: (root, { idProducto }, context) => {
      return getProductoPorId(idProducto);
    },

    getUsuario: (root, { input }, context) => {
      return getUsuario(input);
    },
  },

  Mutation: {
    postUsuario: (root, { input }, context) => {
      return postUsuario(input);
    },
  },
};
