import { TextInput, View, StyleSheet } from "react-native";

// Component
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={inputContainer}>
      <TextInput
        style={numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={buttonsContainer}>
        <View style={buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const { inputContainer, numberInput, buttonsContainer, buttonContainer } =
  StyleSheet.create({
    inputContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 100,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: "#3b021f",
      borderRadius: 8,
      // Android
      elevation: 4,
      // IOS
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
    },
    numberInput: {
      height: 50,
      width: 50,
      fontSize: 32,
      borderBottomColor: "#ddb52f",
      borderBottomWidth: 2,
      color: "#ddb52f",
      marginVertical: 8,
      fontWeight: "bold",
      textAlign: "center",
    },
    buttonsContainer: {
      flexDirection: "row",
    },
    buttonContainer: {
      flex: 1,
    },
  });
