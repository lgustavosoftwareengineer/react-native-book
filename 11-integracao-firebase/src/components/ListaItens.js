import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ItensComponente from "./Itens";
import { db } from "../config/config";

let itensRef = db.ref("/itens");

export default class ListaItens extends Component {
  state = {
    itens: [],
  };

  componentDidMount() {
    itensRef.on("value", (snapshot) => {
      let data = snapshot.val();
      let itens = Object.values(data);
      this.setState({ itens });
    });
  }

  render() {
    return (
      <View style={styles.conteudoPrincipal}>
        {this.state.itens.length > 0 ? (
          <ItensComponente itens={this.state.itens} />
        ) : (
          <Text>Não há itens salvos</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteudoPrincipal: {
    flex: 1,
    justifyContent: "center",
  },
});
