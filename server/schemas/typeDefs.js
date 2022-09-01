const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    profile: [Profile]
  }

  type Profile {
    _id: ID!
    gamerTag: String
    faveConsole: String
    faveGame: String
    user: User
  }

  type Query {
    getUsers: [User!]!
    getProfile: [Profile!]!
  }

  type Mutation {
    addUser(email: String!, password: String!): User!
    addProfile( gamerTag: String!, faveConsole: String!, faveGame: String!, user: String! ): Profile!
  }
`;

module.exports = typeDefs;