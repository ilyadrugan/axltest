import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Loader } from "./src/components/loader";
import { StartNavigator } from "./src/navigation/startNavigator";
import { Container } from "./src/components/container";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem("@token");
    if (token) {
      setIsAuth(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Container>
          <Loader />
        </Container>
      ) : (
        <StartNavigator isAuth={isAuth} />
      )}
    </>
  );
}
