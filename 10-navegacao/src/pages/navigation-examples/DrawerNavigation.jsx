import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { PageOne, PageTwo, PageThree } from "../index";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "rgba(255,255,255,.9)",
        }}
        drawerContentOptions={{
          activeTintColor: "#fff",
          activeBackgroundColor: "#6b52ae",
          labelStyle: { fontWeight: "bold" },
        }}
        overlayColor="#6b52ae"
        initialRouteName="PageOne"
      >
        <Drawer.Screen name="PageOne" component={PageOne} />
        <Drawer.Screen name="PageTwo" component={PageTwo} />
        <Drawer.Screen name="PageThree" component={PageThree} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigation;
