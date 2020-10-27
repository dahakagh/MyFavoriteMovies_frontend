import { gql } from 'graphql-tag';

export default gql`
    mutation deleteMovie($userId: ID!, $movieId: ID!) {
        deleteMovie(userId: $ID!, movieId: $ID!)
        userId
        movieId 
    }
`