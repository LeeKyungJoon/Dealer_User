import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/Sign/MainScreen';
import SignUp from './screens/Sign/SignUp';
import SignIn from './screens/Sign/SingIn';
import SearchPassword from './screens/Sign/SearchPassword';
import SignTerms from './screens/Sign/SignTerms';
import EachTerms from './screens/Sign/EachTerms';

import { CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Sign() {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={'MainScreen'}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="SignTerms"
        component={SignTerms}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="EachTerms"
        component={EachTerms}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="SearchPassword"
        component={SearchPassword}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
    </Stack.Navigator>
  );
}
