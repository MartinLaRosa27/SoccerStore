const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  input usuarioInput {
    nombre: String!
    email: String!
    password: String!
  }

  type usuarioType {
    _id: Int
    nombre: String
    email: String
    password: String
    piso: String
    telefono: String
    direccion: String
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
    getProductoPorCategoriaConFiltros(
      categoria: Int
      filtro: String
    ): [productoType]
    getProductoPorNombreConFiltros(
      nombre: String
      filtro: String
    ): [productoType]
    getProductoPorId(idProducto: Int): [productoType]
    getProductoPorNombre(nombre: String, limite: Int): [productoType]
  }

  type Mutation {
    postUsuario(input: usuarioInput): usuarioType
  }
`;
