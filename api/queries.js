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
