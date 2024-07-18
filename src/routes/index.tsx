import React, { useEffect } from "react";
import {
  NavigationContainer,
  useNavigation,
  NavigationProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home/View/Home";
import Login from "../views/Auth/View/Login";
import CreateTag from "../views/Tags/View/CreateTag";
import { SocketProvider, useSocket } from "../services/SocketContext";
import { useSelector } from "react-redux";
import SplashScreen from "../views/Splash";
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CreateTag: undefined;
  Splash: undefined;
};

export const navigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigate = (name: keyof RootStackParamList, params?: any) => {
    navigation.navigate(name, params);
  };

  return { navigate };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function Router() {
  const { callerId } = useSelector((state: any) => ({
    callerId: state.dados.profile._id,
  }));

  return (
    <SocketProvider callerId={callerId}>
      <NavigationContainer>
        <Navigator initialRouteName="Splash">
          <Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="CreateTag"
            component={CreateTag}
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
        <SocketListener />
      </NavigationContainer>
    </SocketProvider>
  );
}
function SocketListener() {
  const socket = useSocket();
  const navigation = useNavigation();

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("Socket conectado!");
    });

    socket.on("newCall", (data) => {
      console.log("Recebendo chamada");
      navigation.goBack();
    });

    return () => {
      socket.off("connect");
    };
  }, [socket, navigation]);

  return null;
}
