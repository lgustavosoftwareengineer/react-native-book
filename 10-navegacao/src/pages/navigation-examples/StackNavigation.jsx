import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { PageOne, PageTwo, PageThree } from "../index";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageOne" component={PageOne} />
      <Stack.Screen name="PageTwo" component={PageTwo} />
      <Stack.Screen name="PageThree" component={PageThree} />
    </Stack.Navigator>
  );
}
export default function Home() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
