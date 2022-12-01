import { Text, StyleSheet, Image, View } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartGame }) {
  return (
    <View style={rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={imageContainer}>
        <Image style={image} source={require("../assets/images/success.png")} />
      </View>
      <View>
        <Text style={summaryText}>
          Your phone needed <Text style={highlight}>{roundsNumber}</Text> rounds
          to guess the number <Text style={highlight}>{userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const { imageContainer, image, rootContainer, summaryText, highlight } =
  StyleSheet.create({
    rootContainer: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: Colors.primary800,
      overflow: "hidden",
      margin: 36,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    summaryText: {
      fontFamily: "open-sans",
      fontSize: 24,
      textAlign: "center",
      marginBottom: 24,
    },
    highlight: {
      fontFamily: "open-sans-bold",
      color: Colors.primary500,
    },
  });
