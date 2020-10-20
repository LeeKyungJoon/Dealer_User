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

export default function VisitReservation({ route, navigation }) {
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
        centerComponent={<Text style={{ ...styles.title }}>방문예약</Text>}
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
                marginTop: scale(30),
              }}
            >
              <Image
                style={{ ...styles.logoicon }}
                source={require('../../../images/dealer_icon_160.png')}
              />
              <View style={{ marginLeft: scale(5), marginTop: scale(12) }}>
                <Text
                  style={{
                    ...styles.logotext,

                    width: scale(285),
                  }}
                >
                  원하시는 방문 날짜와 시간을 선택하세요
                </Text>
                <Text
                  style={{
                    ...styles.smalltext,
                    width: scale(240),
                    marginTop: scale(2),
                  }}
                >
                  방문하실 날짜와 시간에 대한 가능여부를 알림을 통해 빠르게
                  알려드립니다.
                </Text>
              </View>
            </View>
            <View style={{ alignSelf: 'center', marginTop: scale(20) }}>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.box,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: scale(10),
                  paddingVertical: scale(11.2),
                }}
              >
                <Text style={{ ...styles.boxtext }}>날짜 선택하기</Text>
                <Image
                  style={{ ...styles.boxicon }}
                  source={require('../../../images/calender_ic_80.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.box,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: scale(10),
                  paddingVertical: scale(11.2),
                  marginTop: scale(15),
                }}
              >
                <Text style={{ ...styles.boxtext }}>시간 선택하기</Text>
                <Image
                  style={{ ...styles.boxicon }}
                  source={require('../../../images/clock_ic_80.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            delayPressIn={0}
            style={{
              ...styles.bottombutton,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: scale(15),
            }}
          >
            <Text style={{ ...styles.bottombuttontext }}>예약하기</Text>
          </TouchableOpacity>
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
  logoicon: {
    width: scale(40),
    height: scale(40),
  },
  logotext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  bottombutton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: '#459bfe',
  },
  bottombuttontext: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  smalltext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#001740',
  },
  box: {
    width: scale(240),
    borderRadius: scale(2.5),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  boxtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: -0.39,
    textAlign: 'left',
    color: '#bababa',
  },
  boxicon: {
    width: scale(20),
    height: scale(20),
  },
});
