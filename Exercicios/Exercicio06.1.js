import React from "react";
import { View } from "react-native";

export default () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View
        style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
      ></View>
      <View style={{ flexBasis: 50, backgroundColor: "skyblue" }}></View>
      <View style={{ flexBasis: 100, backgroundColor: "steelblue" }}></View>
    </View>
  );
};
