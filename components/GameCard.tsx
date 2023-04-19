import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PlayerNameAndPic from "./PlayerNameAndPic";
import { useQuery } from "@apollo/client";
import { GetGame } from "../graphql/Games/queries";
import { useEffect } from "react";

const GameCard = ({ game }: { game: any }) => {
  const navigation = useNavigation();
  console.log("gameCard:");
  console.log(game);

  const { loading, data, error } = useQuery(GetGame, {
    variables: { getGameId: game },
  });
  if (!loading) console.log("GAME DATA: ", data);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  let gameData = data?.GetGame;
  console.log("------- gameData: ", gameData);

  return (
    <View
      style={{
        height: 250,
        margin: SIZES.small,
        marginBottom: 0,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        ...SHADOWS.dark,
      }}
    >
      <TouchableWithoutFeedback
        //@ts-ignore
        onPress={() => navigation.navigate("GameDetails", { gameData })}
      >
        <View
          style={{
            backgroundColor: gameData?.win ? COLORS.green : COLORS.red,
            height: "55%",
            width: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          // style={[tw`h-2/4`]}
        >
          <View
            style={{
              flexDirection: "row",
              padding: SIZES.small,
              height: "100%",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: gameData?.win ? COLORS.darkGreen : COLORS.darkRed,
                  fontStyle: "italic",
                  fontFamily: "Inter_900Black",
                  marginLeft: 15,
                }}
              >
                {/* {`${gameData?.dayOfWeek}\n${gameData?.date}\n${gameData?.time}`} */}
              </Text>
            </View>
            <Text
              style={{
                marginTop: 10,
                marginRight: 15,
                color: gameData?.win ? COLORS.darkGreen : COLORS.darkRed,
                fontSize: 76,
                fontFamily: "Inter_900Black",
              }}
            >{`${gameData?.team1Score}-${gameData?.team2Score}`}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: "45%",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              paddingLeft: SIZES.small,
              width: "40%",
              left: 0,
            }}
          >
            <PlayerNameAndPic
              player={gameData?.player1?.name}
              picSide={"right"}
              pic={gameData?.player1?.pic}
            />
            <PlayerNameAndPic
              player={gameData?.player2?.name}
              picSide={"right"}
              pic={gameData?.player2?.pic}
            />
          </View>
          <Text
            style={{
              width: "20%",
              textAlign: "center",
              fontFamily: "Montserrat_900Black",
              color: "darkgray",
            }}
          >
            vs.
          </Text>
          <View
            style={{
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              paddingRight: SIZES.small,
              width: "40%",
              right: 0,
            }}
          >
            <PlayerNameAndPic
              player={gameData?.player3?.name}
              picSide={"left"}
              pic={gameData?.player3?.pic}
            />
            <PlayerNameAndPic
              player={gameData?.player4?.name}
              picSide={"left"}
              pic={gameData?.player4?.pic}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  winningContainer: {
    backgroundColor: COLORS.green,
    color: COLORS.darkGreen,
  },
  playerPic: {
    width: 40,
    height: 40,
    //@ts-ignore
    borderRadius: "50%",
  },
});

export default GameCard;
