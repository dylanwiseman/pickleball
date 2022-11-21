import { gql } from "@apollo/client";

export const RegisterUser = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    RegisterUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      _id
      firstName
    }
  }`