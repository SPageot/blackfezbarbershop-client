import { gql } from "@apollo/client";

export const SET_USER = gql`
  mutation user($username: String!, $password: String!) {
    setUser(username: $username, password: $password) {
      _id
      first_name
      last_name
      email
      username
      phone_number
      isAdmin
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
    $client_id: String!
    $first_name: String!
    $phone_number: String!
    $email: String!
    $username: String!
    $type_of_haircut: String!
    $Date: String!
  ) {
    updateAppointments(
      client_id: $client_id
      phone_number: $phone_number
      email: $email
      first_name: $first_name
      username: $username
      type_of_haircut: $type_of_haircut
      Date: $Date
    ) {
      id
      client_id
      Date
      first_name
      phone_number
      email
      username
      type_of_haircut
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($deleteUserId: String!) {
    deleteUser(_id: $deleteUserId) {
      message
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: String!
    $first_name: String!
    $last_name: String!
    $email: String!
    $phone_number: String!
    $username: String!
  ) {
    updateUser(
      _id: $id
      first_name: $first_name
      last_name: $last_name
      email: $email
      phone_number: $phone_number
      username: $username
    ) {
      _id
      first_name
      last_name
      email
      phone_number
      username
    }
  }
`;
