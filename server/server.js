require('dotenv').config()
const express = require("express");
const path = require("path");
const { ApolloServer, gql } = require("apollo-server-express");
const db = require("./config/connection");
const PORT = process.env.PORT || 3333;
const api_routes = require('./routes/api_routes');
// Pull in the TypeDefs which pull in the models
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require('./auth');

const app = express();
// this is connecting server with "client"/ build
// client is your react app name
// this is connecting server with the build
app.use(express.static(path.join(__dirname, "../client/build")));

app.use('/', api_routes);

// app.use('/pc', api_routes);

async function startServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (authMiddleware)
  });


  await server.start();

  server.applyMiddleware({app})

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log('app sharted on port %s',  PORT);
            console.log('GraphQl is ready on %s', server.graphqlPath)
        })
    })
}

startServer(typeDefs, resolvers);
