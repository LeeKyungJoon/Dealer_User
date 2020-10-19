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
  ImageBackground,
} from 'react-native';

export default function ConsultMain({ route, navigation }) {
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
        centerComponent={
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ ...styles.title }}>채팅문의</Text>
            <Text
              style={{
                ...styles.toptext,
                alignSelf: 'flex-end',
                marginLeft: scale(10),
              }}
            >
              응답에 시간이 걸릴 수 있습니다
            </Text>
          </View>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: scale(15),
            paddingHorizontal: scale(15),
            flex: 1,
          }}
        >
          <View>
            <Text style={{ ...styles.date, marginTop: scale(9) }}>
              2020-05-07
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(8),
              }}
            >
              <Image
                style={{ ...styles.leftavator }}
                source={require('../../../images/dealer_icon_160.png')}
              />
              <Text style={{ ...styles.dealer, marginLeft: scale(5) }}>
                배달의 딜러 매니저
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: scale(4),
                marginLeft: scale(45),
              }}
            >
              <View style={{ ...styles.leftbox }}>
                <Text style={{ ...styles.leftdesc }}>
                  안녕하세요, 배달의 딜러 입니다.{'\n'}어떤 도움이 필요하신가요?
                  {'\n'}
                  자세히 알려주시면, 확인 후 안내드릴게요!
                </Text>
              </View>
              <Text
                style={{
                  ...styles.date,
                  alignSelf: 'flex-end',
                  marginLeft: scale(5),
                }}
              >
                4:54 PM
              </Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Head_Question');
          }}
          delayPressIn={0}
          style={{
            ...styles.yellow,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 25,
            right: 15,
            zIndex: 1,
          }}
        >
          <Text style={{ ...styles.yellowtext }}>방문{'\n'}예약</Text>
        </TouchableOpacity>
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
  search: {
    width: scale(18),
    height: scale(18),
  },
  mainlogo: {
    width: scale(140),
    height: scale(22),
  },
  date: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#c2c2c2',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  leftavator: {
    width: scale(40),
    height: scale(40),
  },
  dealer: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  leftdesc: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  leftbox: {
    width: scale(214.5),
    borderRadius: scale(10),
    backgroundColor: '#ffffff',
    padding: scale(15),
  },
  yellow: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(50),
    backgroundColor: '#ffd619',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  yellowtext: {
    fontFamily: 'Jalnan',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  toptext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    lineHeight: scale(15),
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
