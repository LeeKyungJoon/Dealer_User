import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NoticMain from "./Notic/NoticMain";

const Stack = createStackNavigator();

export default function NoticTab() {
  return (
    <Stack.Navigator initialRouteName="NoticMain" headerMode="none">
      <Stack.Screen name="NoticMain" component={NoticMain} />
    </Stack.Navigator>
  );
}
