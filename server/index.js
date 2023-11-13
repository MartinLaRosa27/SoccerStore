require("dotenv").config({ path: ".env" });
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graph/schema");
const { resolvers } = require("./graph/resolvers");
const { DBConnection } = require("./config/DBConnection");
const { auth } = require("./middleware/auth");

// ------------------------------- INTERVALO RENDER SERVER -------------------------------
const Producto = require("./models/Producto");
const { QueryTypes } = require("sequelize");
// ------------------------------- INTERVALO RENDER SERVER -------------------------------

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
    const productos = await Producto.sequelize.query(
      `SELECT * FROM productos;`,
      {
        type: QueryTypes.SELECT,
      }
    );
    console.log(productos);
  } catch (e) {
    console.log(e);
  }
};

setInterval(() => {
  smallOperation();
}, 600000);
// ------------------------------- INTERVALO RENDER SERVER -------------------------------
