import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Sign() {
  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={"MainScreen"}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SingIn} />
      <Stack.Screen name="SearchPassword" component={SearchPassword} />
      <Stack.Screen name="SignIn" component={SingIn} />
    </Stack.Navigator>
  );
}
