import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      user {
        email
      }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        email
      }
      token
    }
  }
`;

export const ADD_GAME = gql`
mutation addGame($user: ID, $game: String!) {
  addGame(user: $user game: $game) {
    _id
    game
  }
}
`

export const REMOVE_GAME = gql `
mutation removeGame ($gameId: ID) {
  removeGame(gameId: $gameId) {
    _id
 
  }
} `