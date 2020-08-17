import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

class SwitchComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Creating a traveler to go through the componentsStateArray
      travelerComponents: 0,

      // Components object
      componentsStateArray: {
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
  }

  // Chooser components
  handlerChooseComponent(travelerComponents, componentsStateArray) {
    if (
      componentsStateArray[travelerComponents] == componentsStateArray.length
    ) {
      // Resetting the traveler
      this.setState({ travelerComponents: 0 });
    }
    // Returning the component which matches with the traveler
    return componentsStateArray[travelerComponents];
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerContent}>
          <View style={styles.textWhichChangeContainer}>
            {this.handlerChooseComponent(
              this.state.travelerComponents,
              this.state.componentsStateArray
            )}
          </View>
          <Button
            title={`${
              this.state.travelerComponents != 2
                ? "👀 I'm not seeing you"
                : "🗣️ OK MOTHERFUCK#RRR"
            }`}
            color="#6272a4"
            onPress={() => {
              this.setState({
                travelerComponents: this.state.travelerComponents + 1,
              });
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
