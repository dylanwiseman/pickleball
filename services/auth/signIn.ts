import Constants from "expo-constants";

export const signIn = async (variables: any) => {
  try {
    const auth = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${Constants?.manifest?.extra?.firebaseAuth}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: variables?.email,
          password: variables?.password,
          returnSecureToken: true,
        }),
      }
    );
    console.log("signup complete!");
    return await auth.json();
  } catch (error) {
    console.warn(JSON.parse(JSON.stringify(error)));
  }
};
