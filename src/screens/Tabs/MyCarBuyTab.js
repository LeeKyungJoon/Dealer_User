import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyCarBuyMain from './MyCarBuy/MyCarBuyMain';
import SearchCar from './MyCarBuy/SearchCar';
import SearchCarDetail from './MyCarBuy/SearchCarDetail';
import SearchResult from './MyCarBuy/SearchResult';
import List from './MyCarBuy/List';
import ListReal from './MyCarBuy/ListReal';

const Stack = createStackNavigator();

export default function MyCarBuyTab() {
  return (
    <Stack.Navigator initialRouteName="MyCarBuyMain" headerMode="none">
      <Stack.Screen name="MyCarBuyMain" component={MyCarBuyMain} />
      <Stack.Screen name="SearchCar" component={SearchCar} />
      <Stack.Screen name="SearchCarDetail" component={SearchCarDetail} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="ListReal" component={ListReal} />
    </Stack.Navigator>
  );
}
