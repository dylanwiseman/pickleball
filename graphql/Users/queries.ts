import { gql } from "@apollo/client";

export const GetSelf = gql`
  query Query {
    GetSelf {
      authId
      email
      firstName
      lastName
      _id
      updatedAt
      createdAt
      games
      stats {
        gamesPlayed
        avgContribution
        totalContribution
      }
    }
  }
`;
