const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    gamerTag: String
    faveConsole: String
    library: [Library]
  }

  type Library {
    _id: String!
    game: String
   

  }

  type Query {
    getUsers: [User]
    getGames: [Library]
    getOneUser(id: ID): User
  }


  type Mutation {
    addUser(email: String!, password: String!, gamerTag: String!, faveConsole: String!, faveGame: String!): User
    addGame(user: ID!, game: String!): Library
    deleteUser(userId: ID!): User
    deleteGame(gameId: ID!): Library
  }
`;

module.exports = typeDefs;