import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

class SwitchComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cont: 0,
      components: {
        0: (
          <Text style={[styles.textWhichChangeText, { fontSize: 10 }]}>
            See u me?
          </Text>
        ),
        1: (
          <Text style={[styles.textWhichChangeText, { fontSize: 15 }]}>
            See me a little more
          </Text>
        ),
        2: (
          <Text style={[styles.textWhichChangeText, { fontSize: 25 }]}>
            🗣️ LOOK AT MEEEE!!!!!!!!!!!!!!!🗣️
          </Text>
        ),
      },
    };

    this.handlerChooseComponent = this.handlerChooseComponent.bind(this);
  }

  handlerChooseComponent(cont, components) {
    if (components[cont] == components.length) {
      this.setState({ cont: 0 });
    }
    return components[cont];
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerContent}>
          <View style={styles.textWhichChangeContainer}>
            {this.handlerChooseComponent(
              this.state.cont,
              this.state.components
            )}
          </View>
          <Button
            title={`${
              this.state.cont != 2
                ? "👀 I'm not seeing you"
                : "🗣️ OK MOTHERFUCK#RRR"
            }`}
            color="#6272a4"
            onPress={() => {
              this.setState({ cont: this.state.cont + 1 });
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#282a36",
  },
  containerContent: {
    paddingHorizontal: "20%",
    paddingVertical: "5%",
    borderColor: "#44475a",
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
  },
  textWhichChangeContainer: {
    marginVertical: "10%",
  },

  textWhichChangeText: {
    color: "#6272a4",
  },
});
export default SwitchComponents;
