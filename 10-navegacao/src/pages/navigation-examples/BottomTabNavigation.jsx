import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { PageOne, PageTwo, PageThree } from "../index";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="PageOne"
          component={PageOne}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="exposure-plus-1"
                size={24}
                color={focused ? "#480273" : "#9f4ad4"}
              />
            ),
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? "#480273" : "#9f4ad4",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {" "}
                  PageOne{" "}
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="PageTwo"
          component={PageTwo}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="exposure-plus-1"
                size={24}
                color={focused ? "#480273" : "#9f4ad4"}
              />
            ),
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? "#480273" : "#9f4ad4",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {" "}
                  PageOne{" "}
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="PageThree"
          component={PageThree}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="exposure-plus-1"
                size={24}
                color={focused ? "#480273" : "#9f4ad4"}
              />
            ),
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? "#480273" : "#9f4ad4",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {" "}
                  PageOne{" "}
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
