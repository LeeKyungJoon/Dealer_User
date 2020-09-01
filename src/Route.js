import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import MainScreen from "./screens/Sign/MainScreen";
import SignUp from "./screens/Sign/SignUp";

const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"} initialRouteName={"SignUp"}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
