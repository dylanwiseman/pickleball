import { gql } from "@apollo/client";

export const CreateGame = gql`
  mutation Mutation(
    $player1Id: String!
    $player1Plus: Int!
    $player1PlusPoint: Int!
    $player1Minus: Int!
    $player1MinusPoint: Int!
    $player2Id: String!
    $player2Plus: Int!
    $player2PlusPoint: Int!
    $player2Minus: Int!
    $player2MinusPoint: Int!
    $player3Id: String!
    $player3Plus: Int!
    $player3PlusPoint: Int!
    $player3Minus: Int!
    $player3MinusPoint: Int!
    $player4Id: String!
    $player4Plus: Int!
    $player4PlusPoint: Int!
    $player4Minus: Int!
    $player4MinusPoint: Int!
    $team1Score: Int!
    $team2Score: Int!
    $win: Boolean!
  ) {
    CreateGame(
      player1_id: $player1Id
      player1_plus: $player1Plus
      player1_plusPoint: $player1PlusPoint
      player1_minus: $player1Minus
      player1_minusPoint: $player1MinusPoint
      player2_id: $player2Id
      player2_plus: $player2Plus
      player2_plusPoint: $player2PlusPoint
      player2_minus: $player2Minus
      player2_minusPoint: $player2MinusPoint
      player3_id: $player3Id
      player3_plus: $player3Plus
      player3_plusPoint: $player3PlusPoint
      player3_minus: $player3Minus
      player3_minusPoint: $player3MinusPoint
      player4_id: $player4Id
      player4_plus: $player4Plus
      player4_plusPoint: $player4PlusPoint
      player4_minus: $player4Minus
      player4_minusPoint: $player4MinusPoint
      team1Score: $team1Score
      team2Score: $team2Score
      win: $win
    ) {
      _id
      createdAt
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
      updatedAt
      win
    }
  }
`;
