import { gql } from 'graphql-tag';

export default gql`
    mutation moveToWatched($movieId: ID!) {
        moveToWatched(movieId: $ID!) {
            movieId
        }
    }
`