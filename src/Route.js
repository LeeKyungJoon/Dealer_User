import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Sign from "./Sign";
import Tabs from "./Tabs";
import SearchCar from "./screens/Tabs/MyCarBuy/SearchCar";
import CarDetail from "./screens/Tabs/MyCarBuy/CarDetail";
import CarPerformanceCheck from "./screens/Tabs/MyCarBuy/CarPerformanceCheck";

const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"} initialRouteName={"Tabs"}>
        <Stack.Screen name={"Sign"} component={Sign} />
        <Stack.Screen name={"Tabs"} component={Tabs} />
        <Stack.Screen name={"SearchCar"} component={SearchCar} />
        <Stack.Screen name={"CarDetail"} component={CarDetail} />
        <Stack.Screen
          name={"CarPerformanceCheck"}
          component={CarPerformanceCheck}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
