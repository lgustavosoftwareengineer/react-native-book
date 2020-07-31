import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default () => {
  return (
    <>
      <Text style={styles.title}>ExAlignItems</Text>
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        ></View>
        <View
          style={{ width: 50, height: 50, backgroundColor: "skyblue" }}
        ></View>
        <View
          style={{ width: 50, height: 50, backgroundColor: "steelblue" }}
        ></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    flexDirection: "column",
    alignItems: "center",
  },
});
