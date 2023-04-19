import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PlayerNameAndPic from "./PlayerNameAndPic";

const GameCard = ({ game }: { game: any }) => {
  const navigation = useNavigation();
  console.log("gameCard:");
  console.log(game);
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
        onPress={() => navigation.navigate("GameDetails", { game })}
      >
        <View
          style={{
            backgroundColor: game?.win ? COLORS.green : COLORS.red,
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
                  color: game?.win ? COLORS.darkGreen : COLORS.darkRed,
                  fontStyle: "italic",
                  fontFamily: "Inter_900Black",
                  marginLeft: 15,
                }}
              >
                {`${game.dayOfWeek}\n${game.date}\n${game.time}`}
              </Text>
            </View>
            <Text
              style={{
                marginTop: 10,
                marginRight: 15,
                color: game?.win ? COLORS.darkGreen : COLORS.darkRed,
                fontSize: 76,
                fontFamily: "Inter_900Black",
              }}
            >{`${game.userScore}-${game.oppScore}`}</Text>
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
              player={game?.player1?.name}
              picSide={"right"}
              pic={game?.player1?.pic}
            />
            <PlayerNameAndPic
              player={game?.player2?.name}
              picSide={"right"}
              pic={game?.player2?.pic}
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
              player={game?.player3?.name}
              picSide={"left"}
              pic={game?.player3?.pic}
            />
            <PlayerNameAndPic
              player={game?.player4?.name}
              picSide={"left"}
              pic={game?.player4?.pic}
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
