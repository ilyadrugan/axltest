import { FC, useEffect, useState } from "react";
import React from "react";
import { Stack, TouchableStack } from "../components/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/stack";
import { Alert } from "react-native";
import WebView from "react-native-webview";
import { Medium18 } from "../constants/text";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<RootStackParamList, "main">;

export const Main: FC<Props> = ({ navigation }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = async () => {
    const username = await AsyncStorage.getItem("@username");
    setUser(username || "");
  };

  const logOut = () => {
    Alert.alert("Вы точно хотите выйти?", "", [
      {
        text: "Отмена",
      },
      {
        text: "Выйти",
        onPress: () => {
          clearToken();
          navigation.replace("login", { navigation });
        },
      },
    ]);
  };

  const clearToken = () => AsyncStorage.clear();
  return (
    <>
      <Stack
        row
        aic="center"
        justify="space-between"
        bg="#FFF"
        style={{ height: 80 }}
        pt={40}
      >
        <Medium18 ml={14} color="#000">
          {user}
        </Medium18>
        <TouchableStack
          onPress={logOut}
          pb={6}
          pl={10}
          pt={6}
          pr={10}
          br={8}
          mr={14}
          bg="red"
          ml={8}
          mb={2}
        >
          <Medium18 color="#FFF">Выйти</Medium18>
        </TouchableStack>
      </Stack>

      <WebView source={{ uri: "https://www.google.ru/" }} />
    </>
  );
};
