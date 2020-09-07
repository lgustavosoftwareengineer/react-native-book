import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default class Inicial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          color="#000"
          title="Adicionar itens"
          onPress={() => this.props.navigation.navigate("AdicionarItens")}
        />
        <View style={{ height: 2 }}></View>
        <Button
          color="#0004"
          title="Listar itens"
          onPress={() => this.props.navigation.navigate("ListaItens")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 20,
  },
});
