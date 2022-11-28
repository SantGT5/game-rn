import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [buttonInnerContainer, pressedButton] : buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const {
  buttonInnerContainer,
  buttonOuterContainer,
  buttonText,
  pressedButton,
} = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressedButton: {
    opacity: 0.75,
  },
});
