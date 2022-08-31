const express = require('express')
const path = require('path');
const {ApolloServer, gql} = require('apollo-server-express')
const PORT = process.env.PORT || 3333;

const app = express();
                                            // this is connecting server with "client"/ build
                                            // client is your react app name
                                            // this is connecting server with the build
app.use(express.static(path.join(__dirname, '../client/build')));

const typeDefs = gql `
type Query {
    james: String
    brett: String
}
`;

const resolvers = {
    Query: {
        james() {
            return 'Hi there!'
        },
        brett() {
            return 'I am authenticator'
        }
    }
}

async function startServer(typeDefs, resolvers) {
    const server = new ApolloServer({
        typeDefs,
        resolvers
        
    });
    // that waits for server to start then... 
    await server.start();

    server.applyMiddleware({app});

    app.listen(PORT, () => {
        console.log('app sarted on port %s',  PORT);
        console.log('GraphQl is ready on %s', server.graphqlPath)
    })
}

startServer(typeDefs, resolvers);
