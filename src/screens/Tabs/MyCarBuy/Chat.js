import React, { useState } from 'react';
import { Header, Input } from 'react-native-elements';
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
            backgroundColor: '#f9f9f9',
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('VisitReservation');
            }}
            delayPressIn={0}
            style={{
              ...styles.yellow,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 30,
              right: 15,
              zIndex: 1,
            }}
          >
            <Text style={{ ...styles.yellowtext }}>방문{'\n'}예약</Text>
          </TouchableOpacity>
        </ScrollView>

        <View
          style={{
            ...styles.bottombox,
            paddingHorizontal: scale(11),
            justifyContent: 'center',
            paddingVertical: scale(7.5),
            maxHeight: scale(100),
          }}
        >
          <View
            style={{
              ...styles.bottominput1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: scale(10),
              maxHeight: scale(100),
            }}
          >
            <TextInput
              maxLength={500}
              multiline={true}
              style={{
                ...styles.bottominput,
                paddingBottom: 0,
                paddingTop: 0,
                marginVertical: scale(8),
                maxHeight: scale(100),
              }}
              placeholder={'메세지를 입력해주세요.'}
              placeholderTextColor={'#acacac'}
            />
            <TouchableOpacity delayPressIn={0}>
              <Image
                style={{ width: scale(22), height: scale(22) }}
                source={require('../../../images/send_icon_on_88.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: '#ffffff',
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
  bottombox: {
    width: '100%',
    //height: scale(50),
    backgroundColor: '#ffffff',
  },
  bottominput: {
    width: scale(295),
    //height: scale(14),
    backgroundColor: '#f9f9f9',
    //backgroundColor: 'red',
    fontFamily: 'Roboto-Medium',
    fontSize: scale(14),
    fontStyle: 'normal',
    textAlign: 'left',
  },
  bottominput1: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: scale(10),
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#cfcfcf',
  },
});
