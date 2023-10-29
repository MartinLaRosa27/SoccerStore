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
    urlImg: String
    precio: Float
    talleS: Int
    talleM: Int
    talleL: Int
    talleXL: Int
  }

  type Query {
    getCategorias: [categoriaType]
    getProductoPorCategoria(categoria: Int): [productoType]
  }

  type Mutation {
    postPrueba(input: pruebaInput): pruebaType
  }
`;
