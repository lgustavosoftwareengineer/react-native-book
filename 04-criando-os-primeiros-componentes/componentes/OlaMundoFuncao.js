import React from "react";
import { Text, View } from "react-native";

export default ({ name }) => {
  return (
    <View>
      <Text>Olá</Text>
      <Text>{name}</Text>
    </View>
  );
};
