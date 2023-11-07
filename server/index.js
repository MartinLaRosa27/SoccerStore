require("dotenv").config({ path: ".env" });
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graph/schema");
const { resolvers } = require("./graph/resolvers");
const { DBConnection } = require("./config/DBConnection");
const { auth } = require("./middleware/auth");

DBConnection();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const usuario = auth(req.headers.authorization);
    console.log(usuario);
    return {
      usuario,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`The server is running in the URL ${url}`);
});
