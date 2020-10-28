import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyCarBuyMain from './MyCarBuy/MyCarBuyMain';
import SearchCar from './MyCarBuy/SearchCar';
import SearchCarDetail from './MyCarBuy/SearchCarDetail';
import SearchResult from './MyCarBuy/SearchResult';
import List from './MyCarBuy/List';
import ListReal from './MyCarBuy/ListReal';

import { CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function MyCarBuyTab() {
  return (
    <Stack.Navigator initialRouteName="MyCarBuyMain" headerMode="none">
      <Stack.Screen
        name="MyCarBuyMain"
        component={MyCarBuyMain}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="SearchCar"
        component={SearchCar}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="SearchCarDetail"
        component={SearchCarDetail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="ListReal"
        component={ListReal}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
    </Stack.Navigator>
  );
}
