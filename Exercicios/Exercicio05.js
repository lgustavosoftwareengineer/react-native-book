import React from "react";
import { View, Text } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>React Native</Text>
      </View>
    </View>
  );
};

/* Testing the theory thats doesn't really needs the StyleSheet, 
because the only thing that really needs to works is be a object
*/
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionContainer: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  sectionText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
};
