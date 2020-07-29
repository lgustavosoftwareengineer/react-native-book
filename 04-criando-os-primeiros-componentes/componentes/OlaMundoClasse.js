import React from "react";
import { View, Text } from "react-native";

export default class OlaMundo extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <View>
        <Text>Olá</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}
