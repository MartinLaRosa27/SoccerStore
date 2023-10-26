const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  input pruebaInput {
    contendio: String!
  }

  type pruebaType {
    _id: String
    contendio: String
  }

  type Query {
    getPrueba: [pruebaType]
  }

  type Mutation {
    postPrueba(input: pruebaInput): pruebaType
  }
`;
