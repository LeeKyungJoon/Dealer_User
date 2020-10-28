import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyInfoMain from './MyInfo/MyInfoMain';

import { CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function MyInfoTab(props) {
  return (
    <Stack.Navigator initialRouteName="MyInfoMain" headerMode="none">
      <Stack.Screen
        name="MyInfoMain"
        component={MyInfoMain}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
    </Stack.Navigator>
  );
}
