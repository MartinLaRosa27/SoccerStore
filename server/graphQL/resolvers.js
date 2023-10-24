const { getPrueba, postPrueba } = require("../controllers/Prueba.controller");

module.exports.resolvers = {
  Query: {
    getPrueba: (root, {}, context) => {
      return getPrueba();
    },
  },

  Mutation: {
    postPrueba: (root, { input }, context) => {
      return postPrueba(input);
    },
  },
};
