import { View, SafeAreaView, FlatList, Text, Pressable } from "react-native";
import placeholderData from "../placeholderData";
import GameCard from "../components/GameCard";
import HomeHeader from "../components/HomeHeader";
import { SHADOWS } from "../constants/theme";
import { useEffect, useContext } from "react";
import AppContext from "../components/AppContext";
import PlaceholderCard from "../components/PlaceholderCard";

const Home = ({ navigation, route }: any) => {
  const signOut = () => {
    navigation.navigate("Login");
  };

  // getSelf when we come to homepage, store that data locally.
  const { loggedInUser } = useContext(AppContext);
  console.log("context at home: ", loggedInUser);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <View style={{ position: "relative", overflow: "hidden" }}>
        <FlatList
          stickyHeaderIndices={[0]}
          data={loggedInUser?.games}
          renderItem={({ item }) =>
            loggedInUser?.games?.length > 0 ? (
              <GameCard game={item} />
            ) : (
              <PlaceholderCard game={item} />
            )
          }
          keyExtractor={(item) => item?.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            width: "100%",
            paddingBottom: 75,
          }}
          ListHeaderComponent={<HomeHeader signOut={signOut} />}
        />
        <View
          style={{
            height: 60,
            width: "100%",
            backgroundColor: "white",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            justifyContent: "center",
            ...SHADOWS.dark,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("NewGame");
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              NEW GAME
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
