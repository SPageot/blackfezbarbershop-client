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
      appointments {
        id
        Date
        first_name
        username
        Date
        Time
        type_of_haircut
      }
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

export const UPDATE_APPOINTMENTS = gql`
  mutation updateUserAppointments(
    $id: ID!
    $first_name: String!
    $username: String!
    $type_of_haircut: String!
    $Date: String!
    $Time: String!
  ) {
    updateAppointments(
      id: $id
      first_name: $first_name
      username: $username
      type_of_haircut: $type_of_haircut
      Date: $Date
      Time: $Time
    ) {
      id
      first_name
      last_name
      email
      username
      phone_number
      appointments {
        id
        Date
        first_name
        username
        Time
        type_of_haircut
      }
    }
  }
`;
