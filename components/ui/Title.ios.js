import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={title}>{children}</Text>;
}

export default Title;

const { title } = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 12,
    maxWidth:'80%',
    width: 300
  },
});
