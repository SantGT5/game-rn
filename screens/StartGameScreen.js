import { TextInput, View, StyleSheet, Alert } from "react-native";
import React from "react";

import Colors from "../constants/colors";

// Component
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
    <View style={rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  );
}

export default StartGameScreen;

const {
  numberInput,
  buttonsContainer,
  buttonContainer,
  rootContainer,
  instructionText,
} = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
