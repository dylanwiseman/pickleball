import { View, SafeAreaView, FlatList, Text, Pressable } from "react-native";
import GameCard from "../components/GameCard";
import HomeHeader from "../components/HomeHeader";
import { SHADOWS } from "../constants/theme";
import { useContext } from "react";
import AppContext from "../components/AppContext";

const Home = ({ navigation, route }: any) => {
  const signOut = () => {
    navigation.navigate("Login");
  };

  const { loggedInUser } = useContext(AppContext);
  // console.log("context at home: ", loggedInUser);

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
          renderItem={({ item }) => {
            return <GameCard game={item} />;
          }}
          keyExtractor={(item: any) => item}
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
