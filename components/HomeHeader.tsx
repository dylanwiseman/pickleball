import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import pic from "../assets/default-pic.jpeg";
import { useState, useContext } from "react";
import AppContext from "./AppContext";

const HomeHeader = ({ signOut }: any) => {
  const [showStats, setShowStats] = useState(false);

  const { loggedInUser } = useContext(AppContext);
  console.log("user: ", loggedInUser);
  return (
    <Pressable
      onPress={() => {
        setShowStats(!showStats);
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
          padding: SIZES.font,
          ...SHADOWS.dark,
          position: "fixed",
        }}
      >
        <View style={{ display: showStats ? "flex" : "none" }}>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 2,
              paddingBottom: 10,
              marginBottom: 10,
              paddingRight: 10,
            }}
          >
            {/* <Text style={styles.text}>Edit profile</Text> */}
            <Pressable
              onPress={() => {
                setShowStats(false);
                signOut();
              }}
            >
              <Text
                style={{
                  ...styles.text,
                  width: "100%",
                  textAlign: "right",
                  fontSize: SIZES.medium,
                }}
              >
                SIGN OUT
              </Text>
            </Pressable>
          </View>
          <Text style={styles.text}>
            Games played: {loggedInUser?.gamesPlayed}
          </Text>
          <Text style={styles.text}>
            Avg. contribution: {loggedInUser?.avgContribution}
          </Text>
          <Text style={styles.text}>
            Total contribution: {loggedInUser?.totalContribution}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: SIZES.large,
                }}
              >
                {loggedInUser?.userName ? loggedInUser.userName : "tanjiro"}
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontStyle: "italic",
                }}
              >
                {loggedInUser?.avgContribution}
              </Text>
            </View>
            <Image
              source={pic}
              style={{
                ...styles.playerPic,
                marginHorizontal: SIZES.small,
              }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.large,
    marginBottom: 5,
  },
  playerPic: {
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
});

export default HomeHeader;
