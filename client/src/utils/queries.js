import { gql } from '@apollo/client'

export const PROFILE_QUERY = gql`
query {
  getUsers {
    _id
    email
    gamerTag
    faveConsole
    library {
      _id
      game
    }
  }
}
`