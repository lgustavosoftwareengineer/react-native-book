import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default function PageTwo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>PageTwo</Text>
      <Button
        title="Go to PageThree"
        onPress={() => navigation.navigate("PageThree")}
      />
    </View>
  );
}
