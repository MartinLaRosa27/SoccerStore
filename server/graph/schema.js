const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  input usuarioInput {
    nombre: String
    email: String!
    password: String
    piso: String
    telefono: String
    direccion: String
  }

  input carritoInput {
    _id: Int
    cantidad: Int
    nombre: String
    talle: String
    productoId: Int
  }

  type usuarioType {
    _id: Int
    email: String
    nombre: String
    password: String
    piso: String
    telefono: String
    direccion: String
  }

  type carritoType {
    _id: Int
    cantidad: Int
    estado: String
    talle: String
    urlImg: String
    precio: Float
    nombre: String
  }

  type categoriaType {
    _id: Int
    nombre: String
  }

  type productoType {
    _id: Int
    nombre: String
    descripcion: String
    urlImg: String
    precio: Float
    categoriaNombre: String
    marcaNombre: String
    talleS: Int
    talleM: Int
    talleL: Int
    talleXL: Int
    talle37: Int
    talle39: Int
    talle41: Int
    talle43: Int
    marcaId: Int
    categoriumId: Int
    cantidad: Int
  }

  type Query {
    getCategorias: [categoriaType]
    getProductoPorCategoria(categoria: Int, limite: Int): [productoType]
    getProductoPorMarca(marca: Int): [productoType]
    getProductoPorId(idProducto: Int): [productoType]
    getProductoPorNombre(nombre: String, limite: Int): [productoType]
    getUsuario(input: usuarioInput): String
    getUsuarioInformationToken: usuarioType
    getCarritoCount: Int
    getCarritoProducts: [carritoType]
    getCarritoCompras: [carritoType]
    getFavoritoCount: Int
    getFavoritosProducts: [carritoType]
  }

  type Mutation {
    postUsuario(input: usuarioInput): String
    patchUser(input: usuarioInput): String
    postCarrito(input: carritoInput): carritoType
    deleteCarrito(input: carritoInput): String
    crearCompra(input: [carritoInput]): String
    postFavorito(productoId: Int): carritoType
    deleteFavorito(productoId: Int): String
  }
`;
