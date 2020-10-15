import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import scale from '../../../common/Scale';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function QuoteRequest({ route, navigation }) {
  return (
    <>
      <Header
        placement="left"
        backgroundColor={'#459bfe'}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: '#459bfe' }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
        }}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ marginLeft: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.back }}
              source={require('../../../images/back_ic_80.png')}
            />
          </TouchableOpacity>
        }
        centerComponent={<Text style={{ ...styles.title }}>견적 요청</Text>}
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView
          style={{ paddingHorizontal: scale(15) }}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(30),
              }}
            >
              <Image
                style={{ ...styles.logoicon }}
                source={require('../../../images/dealer_icon_160.png')}
              />
              <Text style={{ ...styles.logotext, marginLeft: scale(5) }}>
                나의 차량을 판매할 경로를 선택해주세요
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DefaultInfo', { all: 8, count: 1 });
              }}
              delayPressIn={0}
              style={{
                ...styles.buttonbox,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: scale(15),
                alignSelf: 'center',
                marginTop: scale(50),
              }}
            >
              <Text style={{ ...styles.buttontext }}>
                딜러를 통해 판매할래요
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EnterSellsPrice', { all: 9, count: 1 });
              }}
              delayPressIn={0}
              style={{
                ...styles.buttonbox,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: scale(15),
                alignSelf: 'center',
              }}
            >
              <Text style={{ ...styles.buttontext }}>직접 판매할래요</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  back: {
    width: scale(20),
    height: scale(20),
  },
  title: {
    fontFamily: 'Jalnan',
    fontSize: scale(16),
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  buttonbox: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: '#459bfe',
  },
  buttontext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  logoicon: {
    width: scale(40),
    height: scale(40),
  },
  logotext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  subtitile: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#001740',
  },
  righttop: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#ffffff',
  },
});
