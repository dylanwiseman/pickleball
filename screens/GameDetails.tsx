import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from "react-native";
import { COLORS, SHADOWS } from "../constants/theme";

const PlayerStats = ({
  player,
  maxContribution,
}: {
  player: any;
  maxContribution: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 20,
      }}
    >
      <View style={{ position: "relative" }}>
        <Image
          source={player.pic}
          style={styles.playerPicStats as ImageStyle}
        />
        <View
          style={
            {
              backgroundColor:
                player.plus - player.minus >= 0
                  ? COLORS.darkGreen
                  : COLORS.darkRed,
              height: 50,
              width: 50,
              borderRadius: "50%",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: 20,
              left: 45,
              ...SHADOWS.dark,
            } as unknown as ViewStyle
          }
        >
          <Text
            style={{
              color:
                player.plus - player.minus >= 0 ? COLORS.green : COLORS.red,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {player.plus - player.minus >= 0
              ? `+${player.plus - player.minus}`
              : `-${player.minus - player.plus}`}
          </Text>
        </View>
        <Text style={{ textAlign: "center", marginTop: 5 }}>{player.name}</Text>
      </View>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
          width: 200,
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        <View
          style={{
            width: (player.plus / maxContribution) * 200,
            height: 20,
            backgroundColor: COLORS.green,
            borderRadius: 3,
            justifyContent: "flex-start",
            alignItems: "baseline",
            marginBottom: 5,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: -5,
              height: "100%",
              width: `${(player.plusPoint / player.plus) * 105}%`,
              backgroundColor: COLORS.darkGreen,
              borderTopLeftRadius: 3,
              borderBottomLeftRadius: 3,
              transform: [{ skewX: "22deg" }],
            }}
          ></View>
        </View>
        <View
          style={{
            width: (player.minus / maxContribution) * 200,
            height: 20,
            backgroundColor: COLORS.red,
            borderRadius: 3,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: -5,
              height: "100%",
              width: `${(player.minusPoint / player.minus) * 105}%`,
              backgroundColor: COLORS.darkRed,
              borderTopLeftRadius: 3,
              borderBottomLeftRadius: 3,
              transform: [{ skewX: "22deg" }],
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.darkGreen,
              fontSize: 16,
            }}
          >
            {player.plusPoint}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.green,
              fontSize: 16,
            }}
          >
            {player.plus}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.darkRed,
              fontSize: 16,
            }}
          >
            {player.minusPoint}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.red,
              fontSize: 16,
            }}
          >
            {player.minus}
          </Text>
        </View>
      </View>
    </View>
  );
};

const GameDetails = ({ route, navigation }: any) => {
  const { gameData } = route.params;
  const { player1, player2, player3, player4 } = gameData;
  let maxContribution: number = Math.max(
    player1.plus,
    player1.minus,
    player2.plus,
    player2.minus,
    player3.plus,
    player3.minus,
    player4.plus,
    player4.minus
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: gameData?.win ? COLORS.green : COLORS.red,
      }}
    >
      <View
        style={{
          backgroundColor: gameData?.win ? COLORS.green : COLORS.red,
          height: 120,
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={gameData?.player1?.pic} style={styles.playerPic} />
          <Image source={gameData?.player2?.pic} style={styles.playerPic} />
        </View>
        <Text
          style={{
            color: gameData?.win ? COLORS.darkGreen : COLORS.darkRed,
            fontSize: 76,
            fontFamily: "Inter_900Black",
          }}
        >{`${gameData?.team1Score} - ${gameData?.team2Score}`}</Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={gameData?.player3?.pic} style={styles.playerPic} />
          <Image source={gameData?.player4?.pic} style={styles.playerPic} />
        </View>
      </View>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View>
          <FlatList
            style={{ paddingVertical: 30 }}
            scrollEnabled={false}
            data={[player1, player2, player3, player4]}
            renderItem={({ item }) => (
              <PlayerStats player={item} maxContribution={maxContribution} />
            )}
            // keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 60,
            paddingTop: 40,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              HOME
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("ServeSelection", {
                player1,
                player2,
                player3,
                player4,
              });
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              REMATCH
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

type Style = {
  playerPic: ImageStyle;
  text: TextStyle;
  winningContainer: ViewStyle;
  playerPicStats: ImageStyle;
};

const styles = StyleSheet.create<Style>({
  winningContainer: {
    backgroundColor: COLORS.green,
    color: COLORS.darkGreen,
  },
  playerPic: {
    width: 40,
    height: 40,
    //@ts-ignore
    borderRadius: "50%",
    marginVertical: 4,
  },
  playerPicStats: {
    width: 80,
    height: 80,
    //@ts-ignore
    borderRadius: "50%",
  },
});

export default GameDetails;
