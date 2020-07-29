import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OlaMundoF from "./componentes/OlaMundoFuncao";
import OlaMundoC from "./componentes/OlaMundoClasse";

export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundoF name="Luiz" />
      <OlaMundoC name="Gustavo" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
