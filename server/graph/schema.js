const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  input pruebaInput {
    contendio: String!
  }

  type pruebaType {
    _id: String
    contendio: String
  }

  type categoriaType {
    _id: String
    nombre: String
  }

  type productoType {
    _id: String
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
    getProductoPorId(idProducto: Int): [productoType]
    getProductoPorNombre(nombre: String): [productoType]
  }

  type Mutation {
    postPrueba(input: pruebaInput): pruebaType
  }
`;
