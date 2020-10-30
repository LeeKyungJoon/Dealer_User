import React, { useEffect, useState, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppServer from './AppServer';
import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import InfoContext from '../context/InfoContext';

export default function MainLoading({ route, navigation }) {
  const { setUserState, state } = useContext(InfoContext);
  const [uuid, setUuid] = useState('');
  const [push, setPush] = useState('');

  const firebasePushSetup = async () => {
    const token = await messaging().getToken();
    setPush(token);
    console.log('TOKEN =', token);

    const granted = await messaging().requestPermission();
    console.log('GRANTED =', granted);

    // if(granted == 1){
    let fcm_token = await AsyncStorage.getItem('pushtoken');
    if (fcm_token !== 'NONE' && !fcm_token) {
      await AsyncStorage.setItem('pushtoken', token);
    }
    // }else{
    // Step1();
    // }

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      navigation.navigate('NotiModal', remoteMessage);
      console.log('Message handled in the background1!', remoteMessage);
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      navigation.navigate('NotiModal', remoteMessage);
      console.log('FCM Message Data:', remoteMessage.data);
      // Alert.alert('A new FCM message arrived2!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  };

  const _getUUID = () => {
    let uniqueId = DeviceInfo.getUniqueId();
    setUuid(uniqueId);
  };

  const _autoLogin = async () => {
    try {
      const uniqueId = await DeviceInfo.getUniqueId();
      const pushKey = await messaging().getToken();
      const email = await AsyncStorage.getItem('_email');
      const password = await AsyncStorage.getItem('_pass');
      console.log(email, password, uniqueId, pushKey);
      if (email !== null && password !== null) {
        let data = await AppServer.CARDEALER_API_GET_TOKEN({
          user_pass: password,
          user_email: email,
          uuid: uniqueId,
          push_key: pushKey,
        });
        console.log('_autoLogin', data);
        if (data.success_yn) {
          setUserState(data);
          await AsyncStorage.setItem('_token', data.token);
          navigation.reset({
            routes: [{ name: 'Tabs' }],
          });
        }
      } else {
        await AsyncStorage.clear();
        navigation.reset({
          routes: [{ name: 'Sign' }],
        });
      }
    } catch (error) {
      console.log('_autoAsync>>>', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      firebasePushSetup();
      _getUUID();
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
