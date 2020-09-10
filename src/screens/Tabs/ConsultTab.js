import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ConsultMain from "./Consult/ConsultMain";

const Stack = createStackNavigator();

export default function ConsultTab() {
  return (
    <Stack.Navigator initialRouteName="ConsultMain" headerMode="none">
      <Stack.Screen name="ConsultMain" component={ConsultMain} />
    </Stack.Navigator>
  );
}
