import { gql } from 'graphql-tag';

export default gql`
    mutation addMovie($id: ID!, $movieId: ID!) {
        addMovie(id: $ID!, movieId: $ID!) {
            id
            movieId
        }
    }
`