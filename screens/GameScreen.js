import { Text, View, StyleSheet } from "react-native";

// Component
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

import React from "react";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess);

  return (
    <View style={screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const { screen, title } = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
