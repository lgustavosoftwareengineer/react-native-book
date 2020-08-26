import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default function PageOne({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>PageOne</Text>
      <Button
        title="Go to PageTwo"
        onPress={() => navigation.navigate("PageTwo")}
      />
    </View>
  );
}
