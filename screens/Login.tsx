import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Dimensions,
  ImageStyle,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import InsetShadow from "react-native-inset-shadow";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { players } from "../placeholderData";
import { signIn } from "../services/auth/signIn";
import AppContext from "../components/AppContext";
import { GetSelf } from "../graphql/Users/queries";
import { useLazyQuery } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import updateHeaders from "../services/auth/updateHeaders";
import getToken from "../services/auth/getToken";
import { httpLink, client } from "../services/auth/apolloClient";
import { gql } from "@apollo/client";

const Login = ({ navigation, route }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const context = useContext(AppContext);

  const [getSelf, { data, loading, error }] = useLazyQuery(GetSelf);

  const handleLogin = async () => {
    const variables = {
      userName: username.toLowerCase(),
      email: email,
      password: password,
    };
    const auth = await signIn(variables);
    // console.log("auth: ", auth);
    try {
      await AsyncStorage.setItem("@idToken", auth.idToken);
      await updateHeaders(client, httpLink, auth.idToken);
      const { data } = await client.query({
        query: gql`
          query Query {
            GetSelf {
              authId
              email
              userName
              _id
              updatedAt
              createdAt
              games
              stats {
                gamesPlayed
                avgContribution
                totalContribution
              }
            }
          }
        `,
        context: {
          headers: {
            "pickleball-access-token": auth.idToken,
          },
        },
      });
      console.log("query data: ", data.GetSelf);
      context.loggedInUser = data?.GetSelf;
      console.log("context: ", context);
      // await getSelf();
    } catch (e) {
      console.warn(JSON.stringify(e, null, 2));
    }

    // if (error) console.log("ERROR: ", JSON.parse(JSON.stringify(error)));
    // TODO: getSelf() to get signin data
    // if (!loading) console.log("GET SELF DATA: ", data);
    // context.setLoggedInUser(data?.RegisterUser);

    navigation.navigate("Home" /*, { user: data } */);
  };

  return (
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: "white",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <KeyboardAwareScrollView
        style={{
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
        }}
        contentContainerStyle={{ justifyContent: "center" }}
      >
        <View
          style={{
            paddingHorizontal: 40,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 2,
              marginVertical: 40,
            }}
          >
            <Text
              style={{
                ...styles.text,
                marginBottom: 15,
              }}
            >
              Log in:
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                ...styles.shadowContainer,
                backgroundColor: "white",
              }}
            >
              <InsetShadow shadowRadius={3} bottom={false}>
                {/* <TextInput
                  placeholder="Username"
                  style={styles.textInput}
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                  onBlur={() => {
                    // setPlayer1(getPlayer(player1Name));
                  }}
                /> */}
                <TextInput
                  placeholder="Email"
                  style={styles.textInput}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  onBlur={() => {
                    // setPlayer1(getPlayer(player1Name));
                  }}
                />
              </InsetShadow>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                ...styles.shadowContainer,
                backgroundColor: "white",
              }}
            >
              <InsetShadow shadowRadius={3} bottom={false}>
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  onBlur={() => {
                    // setPlayer3(getPlayer(player3Name));
                  }}
                />
              </InsetShadow>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Pressable
            style={{ width: "80%" }}
            onPress={() => {
              handleLogin();
              //   navigation.navigate("Home");
            }}
          >
            <View
              style={{
                width: "100%",
                borderRadius: 7,
                height: 55,
                paddingHorizontal: 20,
                marginHorizontal: 40,
                marginBottom: 10,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.green,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {loading ? "LOGGING IN..." : "LOG IN"}
              </Text>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            width: "100%",
            paddingHorizontal: 60,
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Not a user yet?
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text
              style={{
                fontSize: SIZES.medium,
                fontWeight: "bold",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              SIGN UP
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

type Style = {
  playerPic: ImageStyle;
  text: TextStyle;
  shadowContainer: ViewStyle;
  textInput: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  textInput: {
    width: "100%",
    borderRadius: 7,
    height: 55,
    paddingHorizontal: 20,
    fontSize: 18,
    marginBottom: 10,
    overflow: "hidden",
  },
  text: { color: "black", fontSize: 24, fontWeight: "bold" },
  shadowContainer: {
    width: "100%",
    height: 55,
    marginBottom: 10,
    marginRight: 25,
    borderRadius: 7,
    overflow: "hidden",
    borderColor: "#D3D3D3",
    borderWidth: 1,
  },
  playerPic: {
    width: 55,
    height: 55,
    //@ts-ignore
    borderRadius: "50%",
  },
});

export default Login;
