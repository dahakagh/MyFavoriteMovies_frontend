import { gql } from '@apollo/client';

export const ADD_MOVIE = gql`
    mutation addMovie($id: ID!, $movieId: ID!) {
        addMovie(id: $ID!, movieId: $ID!) {
            id
            movieId
        }
    }
`

export const AUTH = gql`
  mutation autorization($login: String!, $password: String!) {
      autorization(login: $login, password: $password){
          token
      }
  }
`

export const DELETE_MOVIE = gql`
    mutation deleteMovie($userId: ID!, $movieId: ID!) {
        deleteMovie(userId: $ID!, movieId: $ID!)
        userId
        movieId 
    }
`

export const MOVE_TO_WATCHED = gql`
    mutation moveToWatched($movieId: ID!) {
        moveToWatched(movieId: $ID!) {
            movieId
        }
    }
`

export const SELECT_GENRE = gql`
  mutation selectGenre($userId: ID!, genreId: ID!) {
      selectGenre(userId: $ID!, genreId: $ID!) {
        id: ID!
        genreId: ID!
        name: String
      }
  }
`