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
    return {
      usuario,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`The server is running in the URL ${url}`);
});

// ------------------------------- INTERVALO RENDER SERVER -------------------------------
const smallOperation = async () => {
  try {
    const request = await fetch("https://soccerstore-api.onrender.com");
    console.log("self ping reports: " + request.status);
  } catch (e) {
    console.log(e);
  }
};

setInterval(() => {
  smallOperation();
}, 720000);
// ------------------------------- INTERVALO RENDER SERVER -------------------------------
