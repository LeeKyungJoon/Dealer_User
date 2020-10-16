import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import scale from '../../../common/Scale';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';

const Width = Dimensions.get('window').width;

export default function SearchCar({ route, navigation }) {
  return (
    <>
      <Header
        placement="left"
        backgroundColor={'#ffffff'}
        barStyle="dark-content"
        statusBarProps={{
          translucent: true,
          backgroundColor: '#ffffff',
        }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
          paddingHorizontal: scale(15),
        }}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            delayPressIn={0}
          >
            <Image
              style={{ ...styles.backsearchicon }}
              source={require('../../../images/back_ic_72.png')}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchCarDetail');
            }}
            delayPressIn={0}
            activeOpacity={0.5}
            style={{ width: '100%' }}
          >
            <Text style={{ ...styles.headerinput }}>검색결과</Text>
          </TouchableOpacity>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView></ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backsearchicon: {
    width: scale(18),
    height: scale(18),
  },
  headerinput: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tobtab: {
    width: Width,
    height: scale(44),
    backgroundColor: '#459bfe',
  },
  toptabtext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  toptabsmallbox: {
    width: 0,
    height: 0,
    borderLeftWidth: scale(9),
    borderRightWidth: scale(9),
    borderTopWidth: scale(9),
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  focustab: {
    width: Width,
    height: scale(44),
    backgroundColor: '#f3f3f3',
  },
  focustabtext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
  focustabsmallbox: {
    width: 0,
    height: 0,
    borderLeftWidth: scale(9),
    borderRightWidth: scale(9),
    borderTopWidth: scale(9),
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },

  brandimage: {
    width: scale(65),
    height: scale(40),
  },
  brandtext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#222222',
  },
  count: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#999999',
  },
  likes: {
    width: scale(24),
    height: scale(24),
  },
  delete: {
    width: scale(15),
    height: scale(15),
  },
  recentlytext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#222222',
  },
});
