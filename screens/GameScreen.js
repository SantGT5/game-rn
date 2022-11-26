import { Text, View, StyleSheet } from "react-native";
import react from "react";

function GameScreen() {
  return (
    <View style={screen}>
      <Text>Opponent's Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const { screen } = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
