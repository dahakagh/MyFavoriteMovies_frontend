import { gql } from 'graphql-tag';

export default gql`
  query {
      getMovies {
          id
          movieId
          title
          poster_path
          release_data
          watched
          genre_ids
      }
  }
`