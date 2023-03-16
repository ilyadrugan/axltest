import { FC, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/stack";
import { Container } from "../components/container";
import { Stack } from "../components/stack";
import { H2, Medium18 } from "../constants/text";
import { InputField } from "../components/input";
import { RoundedButton } from "../components/button";
import React from "react";

import { Loader } from "../components/loader";
import { handleSignIn } from "../api/handleSignIn";

type Props = NativeStackScreenProps<RootStackParamList, "login">;

export const Login: FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const buttonClick = async () => {
    setIsLoading(true);
    console.log(email, password);
    const result = await handleSignIn(email, password);
    if (result) {
      navigation.replace("main", { navigation });
    }
    setIsLoading(false);
  };

  return (
    <Container pb={150}>
      <Stack>
        <H2 color="#000">Логин</H2>
        <InputField
          onChangeText={setEmail}
          mt={10}
          placeholder="Введите логин..."
        />
        <H2 mt={8} color="#000">
          Пароль
        </H2>
        <InputField
          onChangeText={setPassword}
          mt={10}
          placeholder="Введите пароль..."
          secureTextEntry
        />
        <RoundedButton disabled={isLoading} onPress={buttonClick} mt={24}>
          {isLoading ? <Loader /> : <Medium18 color="#FFF">Войти</Medium18>}
        </RoundedButton>
      </Stack>
    </Container>
  );
};
