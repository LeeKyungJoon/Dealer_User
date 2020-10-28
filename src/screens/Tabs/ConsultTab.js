import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConsultMain from './Consult/ConsultMain';

import { CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function ConsultTab() {
  return (
    <Stack.Navigator initialRouteName="ConsultMain" headerMode="none">
      <Stack.Screen
        name="ConsultMain"
        component={ConsultMain}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
    </Stack.Navigator>
  );
}
