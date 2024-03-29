import { gql } from "@apollo/client";

export const GetSelf = gql`
  query Query {
    GetSelf {
      authId
      userName
      email
      _id
      updatedAt
      createdAt
      games
      gamesPlayed
      avgContribution
      totalContribution
    }
  }
`;

export const GetUserByName = gql`
  query Query($userName: String) {
    GetUserByName(userName: $userName) {
      _id
      userName
      email
    }
  }
`;

export const GetUserById = gql`
  query GetUserById($getUserByIdId: MongoID) {
    GetUserById(id: $getUserByIdId) {
      userName
      gamesPlayed
      avgContribution
      totalContribution
      _id
    }
  }
`;
