import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DivisbleOrDont({ number }) {
  function handlerIsOrDontDivisible(num) {
    return num % 3 == 0 ? (
      <Text style={styles.textContainer}>It's divisible for 3</Text>
    ) : (
      <Text style={styles.textContainer}>Isn't divisible for 3</Text>
    );
  }
  return (
    <View style={styles.container}>{handlerIsOrDontDivisible(number)}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },

  textContainer: {
    fontSize: 30,
    color: "powderblue",
  },
});
