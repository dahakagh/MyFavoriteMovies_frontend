import { gql } from 'graphql-tag'

export default gql`
  mutation selectGenre($userId: ID!, genreId: ID!) {
      selectGenre(userId: $ID!, genreId: $ID!) {
        id: ID!
        genreId: ID!
        name: String
      }
  }
`