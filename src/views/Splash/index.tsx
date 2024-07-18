import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { navigation } from "../../routes";
export default function SplashScreen() {
  const { navigate } = navigation();
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require("../../animations/splash.json")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        speed={2}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigate("Login")}
      />
    </View>
  );
}
