import React from "react";
import { Text, View } from "react-native";
import { geral } from "../estilos/index";

export default ({ name }) => {
  return (
    <View style={geral.textContainer}>
      <Text>Olá</Text>
      <Text style={geral.text}>{name}</Text>
    </View>
  );
};
