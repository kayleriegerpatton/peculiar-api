require("dotenv").config();
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const mongoose = require("mongoose");
const verifyToken = require("./utils/verifyToken");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.set('strictQuery', false)

const init = async () => {
  try {
    const connectionUrl =
      process.env.MONGODB_URI ||
      `mongodb://localhost:27017/${process.env.DB_NAME}`;

    mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const {url} = await startStandaloneServer(server, {
      context: verifyToken,
      listen: {
        port: process.env.PORT || 4000,
      }
    })
    console.log(`Server running on ${url}`);
  } catch (error) {
    console.log(`[ERROR]: Failed to connect to DB | ${error.message}`);
  }
};

init();
