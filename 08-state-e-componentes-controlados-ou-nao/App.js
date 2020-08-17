import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import Evento from "./src/components/Evento";
import SwitchComponent from "../Desafios/Desafio01StatedComponents";

export default class App extends React.Component {
  render() {
    return <SwitchComponent />;
  }
}
