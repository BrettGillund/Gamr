const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password:
  }

  type Profile {
    _id: String!
    game: String!
    console: String!
    gamerTag: String!
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    addUser(email: String!, password: String!): User
    addProfile(game: String!, console: String!, gamerTag: String! ): Profile
  }
`;

module.exports = typeDefs;