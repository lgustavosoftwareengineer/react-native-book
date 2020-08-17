import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import SwitchComponents from "./src/components/Desafio01StatedComponents";
import Evento from "./src/components/Evento";

export default class App extends React.Component {
  render() {
    return <SwitchComponents />;
  }
}
