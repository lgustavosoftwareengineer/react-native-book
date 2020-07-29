import React from "react";
import { View } from "react-native";

class DimensoesFixas extends React.Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column", // Defining the main-axis
          justifyContent: "center", // Distributing the elements above the main-axis
          alignItems: "center",
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        ></View>
        <View
          style={{ width: 100 / 2, height: 50, backgroundColor: "skyblue" }}
        ></View>
        <View
          style={{ width: 50, height: 50, backgroundColor: "steelblue" }}
        ></View>
      </View>
    );
  }
}

export default DimensoesFixas;
