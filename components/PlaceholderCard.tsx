import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";

const PlaceholderCard = ({ game }: { game: any }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 650,
        margin: SIZES.small,
        marginBottom: 0,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        // ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          borderTopLeftRadius: 20,
          borderRadius: 20,
          borderTopRightRadius: 20,
        }}
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
                color: "darkgray",
                fontStyle: "italic",
                fontFamily: "Inter_900Black",
                marginLeft: 30,
                marginRight: 30,
                textAlign: "center",
              }}
            >
              You haven't played any games yet. When you do, they'll show up
              here.
            </Text>
            <Text
              style={{
                color: "darkgray",
                fontStyle: "italic",
                fontFamily: "Inter_900Black",
                marginLeft: 30,
                marginRight: 30,
                textAlign: "center",
                marginTop: 15,
              }}
            >
              Tap NEW GAME to get started.
            </Text>
          </View>
        </View>
      </View>
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

export default PlaceholderCard;
