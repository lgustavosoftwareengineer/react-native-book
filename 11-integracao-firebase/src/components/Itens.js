import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import PropTypes from "prop-types";

export default class Itens extends Component {
  static propTypes = {
    itens: PropTypes.array.isRequired,
  };

  render() {
    return (
      <View>
        {this.props.itens.map(({ item }, index) => {
          return (
            <View key={index}>
              <Text style={styles.textItens}>{item}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listaItens: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  textItens: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
