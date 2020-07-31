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
        alignItems: "stretch",
      }}
    >
      <View style={{ flexBasis: 100, backgroundColor: "powderblue" }}></View>
      <View style={{ flexBasis: 500, backgroundColor: "skyblue" }}></View>
      <View style={{ flexBasis: 200, backgroundColor: "steelblue" }}></View>
    </View>
  );
};
