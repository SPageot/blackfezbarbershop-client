import { gql } from "@apollo/client";

export const SET_USER = gql`
  mutation user($username: String!, $password: String!) {
    setUser(username: $username, password: $password) {
      id
      first_name
      last_name
      email
      username
      phone_number
    }
  }
`;

export const REGISTER_USER = gql`
  mutation userSignUp(
    $first_name: String!
    $last_name: String!
    $email: String!
    $phone_number: String!
    $username: String!
    $password: String!
  ) {
    registerUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      phone_number: $phone_number
      username: $username
      password: $password
    ) {
      first_name
    }
  }
`;
