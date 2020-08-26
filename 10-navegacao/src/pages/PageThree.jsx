import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default function PageThree({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>PageThree</Text>
      <Button
        title="Go To PageOne"
        onPress={() => navigation.navigate("PageOne")}
      />
    </View>
  );
}
