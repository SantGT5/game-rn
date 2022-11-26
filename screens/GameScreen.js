import { Text, View, StyleSheet } from "react-native";

// Component
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={screen}>
      <Title>Opponent's Guess</Title>
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
