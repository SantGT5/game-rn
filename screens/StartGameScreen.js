import { TextInput, View, StyleSheet, Alert } from "react-native";
import React from "react";

// Component
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = React.useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandle() {
    setEnteredNumber("");
  }

  function confirmInputHandle() {
    const chosenNumber = Number(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandle }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={inputContainer}>
      <TextInput
        style={numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={buttonsContainer}>
        <View style={buttonContainer}>
          <PrimaryButton onPress={resetInputHandle}>Reset</PrimaryButton>
        </View>
        <View style={buttonContainer}>
          <PrimaryButton onPress={confirmInputHandle}>Confirm</PrimaryButton>
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
