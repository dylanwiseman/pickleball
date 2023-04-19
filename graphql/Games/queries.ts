import { gql } from "@apollo/client";

export const GetGame = gql`
  query GetGame($getGameId: MongoID) {
    GetGame(id: $getGameId) {
      player1 {
        id
        plus
        plusPoint
        minus
        minusPoint
      }
      player2 {
        id
        plus
        plusPoint
        minus
        minusPoint
      }
      player3 {
        id
        plus
        plusPoint
        minus
        minusPoint
      }
      player4 {
        id
        plus
        plusPoint
        minus
        minusPoint
      }
      team1Score
      team2Score
      win
      _id
      updatedAt
      createdAt
    }
  }
`;
