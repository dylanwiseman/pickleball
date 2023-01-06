import { gql } from "@apollo/client";

export const RegisterUser = gql`
  mutation RegisterUser(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    RegisterUser(userName: $userName, email: $email, password: $password) {
      authId
      email
      userName
      games
      _id
      updatedAt
      createdAt
    }
  }
`;
