import { gql } from 'graphql-tag'

export default gql`
  query {
      getGenres {
          genreId
          name
      }
  }
`