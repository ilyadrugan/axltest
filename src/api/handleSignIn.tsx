import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../utils/firebaseConfig";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const handleSignIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      AsyncStorage.setItem("@token", user?.stsTokenManager?.accessToken);
      AsyncStorage.setItem("@username", user?.email || "");
      return true;
    })
    .catch((error) => {
      Alert.alert(error.message.split(":")[1]);
      return false;
    });
