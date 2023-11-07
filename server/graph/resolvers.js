const { getCategorias } = require("../controllers/Categoria.controller");
const {
  getProductoPorCategoria,
  getProductoPorNombre,
  getProductoPorId,
} = require("../controllers/Producto.controller");
const {
  postUsuario,
  getUsuario,
  getUsuarioInformationToken,
  patchUser,
} = require("../controllers/Usuario.controller");

module.exports.resolvers = {
  Query: {
    getCategorias: (root, {}, context) => {
      return getCategorias();
    },

    getProductoPorCategoria: (root, { categoria, limite }, context) => {
      return getProductoPorCategoria(categoria, limite);
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

    getUsuarioInformationToken: (root, {}, context) => {
      return getUsuarioInformationToken(context.usuario);
    },
  },

  Mutation: {
    postUsuario: (root, { input }, context) => {
      return postUsuario(input);
    },

    patchUser: (root, { input }, context) => {
      return patchUser(input, context.usuario);
    },
  },
};
