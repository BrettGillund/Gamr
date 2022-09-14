
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
    _id: ID
    game: String
   
  }
  type Auth {
    user: User
    token: ID
  }
  type Query {
    getUsers: [User]
    getGames: [Library]
    getOneUser(id: ID): User
  }
  type Mutation {
    addUser(email: String!, password: String!, gamerTag: String, faveConsole: String, faveGame: String): Auth
    loginUser(email: String!, password: String!): Auth
    addGame(user: ID, game: String!): Library
    updateConsole(id: ID!, faveConsole: String!): User
    updateGamertag(id: ID!, gamerTag: String!): User
    deleteUser(userId: ID!): Auth
    removeGame(gameId: ID): Library
  }
`;

module.exports = typeDefs;