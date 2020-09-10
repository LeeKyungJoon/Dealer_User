import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyCarSellMain from "./MyCarSell/MyCarSellMain";

const Stack = createStackNavigator();

export default function MyCarSellTab() {
  return (
    <Stack.Navigator initialRouteName="MyCarSellMain" headerMode="none">
      <Stack.Screen name="MyCarSellMain" component={MyCarSellMain} />
    </Stack.Navigator>
  );
}
