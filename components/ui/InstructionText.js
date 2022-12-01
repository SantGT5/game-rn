import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const { instructionText } = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
