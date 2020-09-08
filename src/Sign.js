import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/Sign/MainScreen";
import SignUp from "./screens/Sign/SignUp";
import SignIn from "./screens/Sign/SingIn";
import SearchPassword from "./screens/Sign/SearchPassword";

const Stack = createStackNavigator();

export default function Sign() {
  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={"SignUp"}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SearchPassword" component={SearchPassword} />
    </Stack.Navigator>
  );
}
