import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NoticMain from './Notic/NoticMain';

import { CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function NoticTab() {
  return (
    <Stack.Navigator initialRouteName="NoticMain" headerMode="none">
      <Stack.Screen
        name="NoticMain"
        component={NoticMain}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
    </Stack.Navigator>
  );
}
