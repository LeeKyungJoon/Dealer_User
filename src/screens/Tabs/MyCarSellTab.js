import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyCarSellMain from './MyCarSell/MyCarSellMain';

import { CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function MyCarSellTab() {
  return (
    <Stack.Navigator initialRouteName="MyCarSellMain" headerMode="none">
      <Stack.Screen
        name="MyCarSellMain"
        component={MyCarSellMain}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
    </Stack.Navigator>
  );
}
