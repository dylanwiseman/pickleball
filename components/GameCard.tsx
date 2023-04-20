import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PlayerNameAndPic from "./PlayerNameAndPic";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GetGame } from "../graphql/Games/queries";
import { GetUserById } from "../graphql/Users/queries";
import { useContext, useEffect } from "react";
import AppContext from "./AppContext";
import { client } from "../services/auth/apolloClient";
import { useState } from "react";

const GameCard = ({ game }: { game: any }) => {
  const navigation = useNavigation();

  const context = useContext(AppContext);

  const { loading, data, error } = useQuery(GetGame, {
    variables: { getGameId: game },
  });

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  const [player2Name, setPlayer2Name] = useState("loading...");
  const [player3Name, setPlayer3Name] = useState("loading...");
  const [player4Name, setPlayer4Name] = useState("loading...");

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  let gameData = data?.GetGame;
  //   console.log("------- gameData: ", gameData);

  async function getPlayerNames() {
    const playerIds = [
      gameData?.player2?.id,
      gameData?.player3?.id,
      gameData?.player4?.id,
    ];
    let count = 0;

    await Promise.all(
      playerIds.map(async (id) => {
        try {
          const { data } = await client.query({
            query: GetUserById,
            variables: { getUserByIdId: id },
          });
          //   console.log("GET USER BY ID: ", data);
          if (count === 0) setPlayer2Name(data?.GetUserById?.userName);
          else if (count === 1) setPlayer3Name(data?.GetUserById?.userName);
          else setPlayer4Name(data?.GetUserById?.userName);
          count++;
          return {
            name: data?.GetUserById?.userName,
          };
        } catch (error) {
          console.warn(error);
          return { name: "error" };
        }
      })
    );
  }
  getPlayerNames();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(gameData?.updatedAt);

  function formatDate(date: Date) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, "0");
    const month = months[monthIndex];
    return `${month} ${day}, ${year}`;
  }

  function formatTime(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const amOrPm = hours < 12 ? "am" : "pm";
    const twelveHourFormat = hours % 12 === 0 ? 12 : hours % 12;
    return `${twelveHourFormat}:${minutes}${amOrPm}`;
  }

  gameData = {
    ...gameData,
    player1Name: context?.loggedInUser?.userName,
    player2Name,
    player3Name,
    player4Name,
  };

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
                {`${weekday[date.getDay()]}\n${formatDate(date)}\n${formatTime(
                  date
                )}`}
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
              player={context.loggedInUser?.userName}
              picSide={"right"}
              pic={gameData?.player1?.pic}
            />
            <PlayerNameAndPic
              player={player2Name}
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
              player={player3Name}
              picSide={"left"}
              pic={gameData?.player3?.pic}
            />
            <PlayerNameAndPic
              player={player4Name}
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
