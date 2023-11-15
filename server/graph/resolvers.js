const { getCategorias } = require("../controllers/Categoria.controller");
const {
  postCarrito,
  getCarritoCount,
  getCarritoProducts,
  deleteCarrito,
  crearCompra,
  getCarritoCompras,
} = require("../controllers/Carrito.controller");
const {
  postFavorito,
  getFavoritoCount,
  getFavoritosProducts,
} = require("../controllers/favorito.controller");
const {
  getProductoPorCategoria,
  getProductoPorNombre,
  getProductoPorId,
  getProductoPorMarca,
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

    getProductoPorMarca: (root, { marca }, context) => {
      return getProductoPorMarca(marca);
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

    getCarritoCount: (root, {}, context) => {
      return getCarritoCount(context.usuario);
    },

    getCarritoProducts: (root, {}, context) => {
      return getCarritoProducts(context.usuario);
    },

    getCarritoCompras: (root, {}, context) => {
      return getCarritoCompras(context.usuario);
    },

    getFavoritosProducts: (root, {}, context) => {
      return getFavoritosProducts(context.usuario);
    },

    getFavoritoCount: (root, {}, context) => {
      return getFavoritoCount(context.usuario);
    },
  },

  Mutation: {
    postUsuario: (root, { input }, context) => {
      return postUsuario(input);
    },

    postCarrito: (root, { input }, context) => {
      return postCarrito(input, context.usuario);
    },

    patchUser: (root, { input }, context) => {
      return patchUser(input, context.usuario);
    },

    deleteCarrito: (root, { input }, context) => {
      return deleteCarrito(input, context.usuario);
    },

    crearCompra: (root, { input }, context) => {
      return crearCompra(input, context.usuario);
    },

    postFavorito: (root, { productoId }, context) => {
      return postFavorito(productoId, context.usuario);
    },
  },
};
