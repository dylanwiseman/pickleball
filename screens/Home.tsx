import { View, SafeAreaView, FlatList, Text, Pressable } from "react-native";
import placeholderData from "../placeholderData";
import GameCard from "../components/GameCard";
import HomeHeader from "../components/HomeHeader";
import { SHADOWS } from "../constants/theme";

const Home = ({ navigation, route }: any) => {
  const signOut = () => {
    navigation.navigate("Login");
  };

  // getSelf when we come to homepage, store that data locally.

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
          data={placeholderData}
          renderItem={({ item }) => <GameCard game={item} />}
          keyExtractor={(item) => item.id}
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
