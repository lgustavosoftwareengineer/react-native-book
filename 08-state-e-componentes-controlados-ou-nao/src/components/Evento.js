import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class Evento extends React.Component {
  // Initializing the state
  state = {
    input: "",
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Showing the state */}
        <Text style={styles.font30}>{this.state.input}</Text>

        {/*Getting the text from a input and setting the state with function setState() */}
        <TextInput
          style={styles.input}
          value={this.state.input}
          onChangeText={(input) => this.setState({ input })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 50,
    width: 300,
    fontSize: 30,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 10,
    flexWrap: "wrap",
    padding: 10,
  },

  font30: {
    fontSize: 30,
    flexWrap: "wrap",
  },
});
