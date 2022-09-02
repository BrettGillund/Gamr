const express = require('express')
const path = require('path');
const {ApolloServer, gql} = require('apollo-server-express')
const db = require('./config/connection')
const PORT = process.env.PORT || 3333;
// Pull in the TypeDefs which pull in the models
const {typeDefs, resolvers} = require('./schemas')

const app = express();
                                            // this is connecting server with "client"/ build
                                            // client is your react app name
                                            // this is connecting server with the build
app.use(express.static(path.join(__dirname, '../client/build')));



async function startServer(typeDefs, resolvers) {
    const server = new ApolloServer({
        typeDefs,
        resolvers
        
    });
  
    await server.start();

    server.applyMiddleware({app});

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log('app sarted on port %s',  PORT);
            console.log('GraphQl is ready on %s', server.graphqlPath)
        })
    })
}

startServer(typeDefs, resolvers);
