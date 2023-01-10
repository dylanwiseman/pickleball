import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import InsetShadow from "react-native-inset-shadow";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useMutation } from "@apollo/client";
import { RegisterUser } from "../graphql/Users/mutations";
import { signIn } from "../services/auth/signIn";

const SignUp = ({ navigation, route }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const client = useApolloClient();
  const [register, { data, loading, error, reset }] = useMutation(RegisterUser);

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
              Sign up:
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
                <TextInput
                  placeholder="Username"
                  style={styles.textInput}
                  onChangeText={(text) => setUsername(text)}
                  value={username}
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
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
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
            onPress={async () => {
              const variables = {
                userName: username.toLowerCase(),
                email: email,
                password: password,
              };
              //   console.log("register params: ", variables);
              const data = await register({
                variables: variables,
              });
              console.log("registration complete!");
              const auth = await signIn(variables);

              // TODO: getSelf() to get signin data
              console.log("data: ", data);
              navigation.navigate("Home", { user: data });
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
                backgroundColor: COLORS.darkGreen,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {loading ? "CREATING USER" : error ? "ERROR" : "SIGN UP"}
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
            Already a user?
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
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
              LOG IN
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default SignUp;
