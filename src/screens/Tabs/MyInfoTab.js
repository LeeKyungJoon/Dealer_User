import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyInfoMain from "./MyInfo/MyInfoMain";

const Stack = createStackNavigator();

export default function MyInfoTab() {
  return (
    <Stack.Navigator initialRouteName="MyInfoMain" headerMode="none">
      <Stack.Screen name="MyInfoMain" component={MyInfoMain} />
    </Stack.Navigator>
  );
}
