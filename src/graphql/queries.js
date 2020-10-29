import { gql } from "@apollo/client";

export const GET_GENRES = gql`
  query {
    getGenres {
      genreId
      name
      selectGenres
    }
  }
`;

export const GET_MOVIES = gql`
  query getMovies($id: ID!, $movieId: ID!) {
    getMovies(id: $ID!, movieId: $ID!) {
      id
      movieId
      title
      poster_path
      release_data
      watched
      genres {
        id
        name
      }
    }
  }
`;

export const GET_MOVIES_BY_FILTERS = gql`
  query getMoviesByFilters($filters: String, $id: ID!, $movieId!: ID!) {
    getMoviesByFilters(filters: $String, id: $ID!, movieId: $ID!) {
      id
      movieId
      title
      poster_path
    }
  }
`;

export const GET_SEARCH_RESULT = gql`
  query getSearchResult($keyword: String!) {
    getSearchResult(keyword: $String!) {
      id
      movieId
      title
      poster_path
    }
  }
`;

export const USER = gql`
  query User($login: String!) {
    user(login: $String) {
      id
      login
      password
      genres
      movies
    }
  }
`;

export const CHECK_USER = gql`
  query checkUser($login: String!, $password: String!){
    checkUser(login: $login, password: $password)
  }
`;
