import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  DimensoesFixas,
  ExAlignItems,
  ExFlexWrap,
  ExFlexGrow,
  ExFlexShrink,
  ExFlexBasis,
} from "./components/Index";
/*

//============================= 
// Exemplo com DimensoesFixas
//=============================
export default function App() {
  return <DimensoesFixas />;
}

//=============================
// Exemplo com AlignItems
//=============================
export default function App() {
  return <ExAlignItems />;
}

//=============================
// Exemplo com FlexWrap
//=============================
export default function App() {
  return <ExFlexWrap />;
}

//=============================
// Exemplo com FlexGrow
//=============================
export default function App() {
  return <ExFlexGrow />;
}

//=============================
// Exemplo com FlexShrink
//=============================
export default function App() {
  return <ExFlexShrink />;
}

//=============================
// Exemplo com FlexBasis
//=============================
export default function App() {
  return <ExFlexBasis />;
}
*/
export default function App() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.mainText}>
        Troque entre os exemplos a cima (comentados) no código fonte da
        aplicação para ver as diferenças
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  mainText: {
    fontSize: 20,
  },
});
