import { gql } from "@apollo/client";

export const RegisterUser = gql`
  mutation RegisterUser(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    RegisterUser(userName: $userName, email: $email, password: $password) {
      stats {
        gamesPlayed
        avgContribution
        totalContribution
      }
      authId
      email
      userName
      games
      _id
      updatedAt
      createdAt
      gamesPlayed
      avgContribution
      totalContribution
    }
  }
`;
