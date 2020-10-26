import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppServer from './AppServer';
import AsyncStorage from '@react-native-community/async-storage';

export default function MainLoading({ route, navigation }) {
  const _autoLogin = async () => {
    const _token = await AsyncStorage.getItem('_token');
    console.log('_token>>>>>>>>', _token);
    if (_token) {
      navigation.reset({
        routes: [{ name: 'Tabs' }],
      });
    } else {
      navigation.reset({
        routes: [{ name: 'Sign' }],
      });
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      _autoLogin();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#459bfe',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
}
