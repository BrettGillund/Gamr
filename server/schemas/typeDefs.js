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
    _id: String
    game: String
  }

  type Query {
    getUsers: [User]
    getGames: [Library]
  }


  type Mutation {
    addUser(email: String!, password: String!, gamerTag: String!, faveConsole: String!, faveGame: String!): User
    addGame(userId: String!, game: String!): Library
  }
`;

module.exports = typeDefs;