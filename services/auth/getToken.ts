import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getToken() {
  const token = await AsyncStorage.getItem("@idToken");
  //   console.log("token from getToken on App.tsx: ", token);
  return token;
}
