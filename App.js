import React from "react";

import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Screens
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from './screens/GameScreen'

export default function App() {
  const [userNumber, setUserNumber] = React.useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={rootScreen}
        imageStyle={backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const { rootScreen, backgroundImage } = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
