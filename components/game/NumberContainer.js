import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={container}>
      <Text style={numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const { container, numberText } = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
