import "dotenv/config";

export default {
  expo: {
    extra: {
      firebaseAuth: process.env.REACT_APP_FIREBASE_AUTH_KEY,
    },
  },
};
