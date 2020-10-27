import { gql } from 'graphql-tag'

export default gql`
  mutation autorization($login: String!, $password: String!) {
      autorization(login: $login, password: $password){
          token
      }
  }
`