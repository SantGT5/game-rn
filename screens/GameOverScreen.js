import {
  Text,
  StyleSheet,
  Image,
  View,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={screen}>
      <View style={rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[imageContainer, imageStyle]}>
          <Image
            style={image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View>
          <Text style={summaryText}>
            Your phone needed <Text style={highlight}>{roundsNumber}</Text>{" "}
            rounds to guess the number{" "}
            <Text style={highlight}>{userNumber}</Text>.
          </Text>
        </View>
        <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const { imageContainer, image, rootContainer, summaryText, highlight, screen } =
  StyleSheet.create({
    screen: {
      flex: 1,
    },
    rootContainer: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
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
