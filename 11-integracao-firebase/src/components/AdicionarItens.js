import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";

import { db } from "../config/config";

export default class AdicionarItens extends Component {
  state = {
    item: "",
  };

  salvaItem = () => {
    db.ref("/itens").push({
      item: this.state.item,
    });

    alert("Item salvo!");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> Adicionar Item </Text>
        <TextInput
          style={styles.itemInput}
          onChangeText={(item) => {
            this.setState({ item });
          }}
        />
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#fff"
          onPress={this.salvaItem}
        >
          <Text style={styles.textBtn}>Adicionar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },

  titulo: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
  },

  itemInput: {
    height: 50,
    padding: 4,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "#0004",
    borderRadius: 8,
    color: "#000",
  },

  btn: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },

  textBtn: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
});
