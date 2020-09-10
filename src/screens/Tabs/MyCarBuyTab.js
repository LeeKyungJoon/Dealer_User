import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyCarBuyMain from "./MyCarBuy/MyCarBuyMain";

const Stack = createStackNavigator();

export default function MyCarBuyTab() {
  return (
    <Stack.Navigator initialRouteName="MyCarBuyMain" headerMode="none">
      <Stack.Screen name="MyCarBuyMain" component={MyCarBuyMain} />
    </Stack.Navigator>
  );
}
