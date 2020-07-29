import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { geral } from "../estilos/index";
export default class OlaMundo extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <View style={estilos.textContainer}>
        <Text>Olá</Text>
        <Text style={estilos.text}>{name}</Text>
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "purple",
  },
  textContainer: {
    padding: 20,
    borderWidth: 3,
    borderColor: "purple",
  },
});
