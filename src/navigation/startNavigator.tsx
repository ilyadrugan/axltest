import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { Login } from "../screens/login";
import { Main } from "../screens/main";

const Stack = createStackNavigator();
interface Props {
  isAuth?: boolean;
}

export const StartNavigator: FC<Props> = ({ isAuth }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuth ? "main" : "login"}
        screenOptions={{
          headerShown: false,
          title: "",
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp",
              }),
            },
          }),
        }}
      >
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
