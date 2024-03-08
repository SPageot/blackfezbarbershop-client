import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Query {
    getUsers {
      _id
      first_name
      last_name
      phone_number
      email
      username
    }
  }
`;

export const GET_USER = gql`
  query GetUser($getUserId: String!) {
    getUser(_id: $getUserId) {
      _id
      first_name
      last_name
      phone_number
      email
      username
    }
  }
`;

export const GET_ALL_APPOINTMENTS = gql`
  query GetAllAppointments {
    getAllAppointments {
      id
      client_id
      first_name
      username
      phone_number
      email
      type_of_haircut
      Date
    }
  }
`;

export const GET_APPOINTMENTS = gql`
  query Appointments($client_id: String!) {
    getAppointments(client_id: $client_id) {
      id
      first_name
      username
      phone_number
      email
      type_of_haircut
      Date
    }
  }
`;
