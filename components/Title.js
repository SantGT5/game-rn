import { Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={title}>{children}</Text>;
}

export default Title;

const { title } = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
