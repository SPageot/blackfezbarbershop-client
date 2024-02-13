import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    getUsers {
      id
      first_name
      last_name
      phone_number
    }
  }
`;

export const GET_APPOINTMENTS = gql`
  query Appointments($client_id: String!) {
    getAppointments(client_id: $client_id) {
      id
      first_name
      username
      type_of_haircut
      Date
    }
  }
`;
