import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  AdicionarItens,
  Inicial,
  Itens,
  ListaItens,
} from "./src/components/index";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Itens" component={Itens} />
      <Stack.Screen name="ListaItens" component={ListaItens} />
      <Stack.Screen name="AdicionarItens" component={AdicionarItens} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
