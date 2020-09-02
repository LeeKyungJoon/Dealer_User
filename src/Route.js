import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import MainScreen from "./screens/Sign/MainScreen";
import SignUp from "./screens/Sign/SignUp";
import SingIn from "./screens/Sign/SingIn";
import SearchPassword from "./screens/Sign/SearchPassword";

const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"} initialRouteName={"SearchPassword"}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SingIn} />
        <Stack.Screen name="SearchPassword" component={SearchPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
