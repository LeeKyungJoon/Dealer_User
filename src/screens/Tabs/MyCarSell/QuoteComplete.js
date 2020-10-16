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

export default function QuoteComplete({ route, navigation }) {
  return (
    <>
      <Header
        placement="left"
        backgroundColor={'#ffffff'}
        barStyle="dark-content"
        statusBarProps={{ translucent: true, backgroundColor: 'transparent' }}
        containerStyle={{
          borderBottomWidth: 0,
          paddingTop: scale(40),
          paddingBottom: 0,
          height: scale(100),
        }}
        leftComponent={
          <Image
            style={{
              ...styles.topic,
              marginLeft: scale(10),
            }}
            source={require('../../../images/circle_on_ic_68.png')}
          />
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                paddingHorizontal: scale(15),
                paddingBottom: scale(30),
              }}
            >
              <Text style={{ ...styles.title, marginTop: scale(5) }}>
                <Text style={{ color: '#459bfe' }}>12가3456</Text> 차량
              </Text>
              <Text style={{ ...styles.title }}>견적요청 완료!</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(25),
                }}
              >
                <Text style={{ ...styles.subtitle }}>요청차량</Text>
                <Text style={{ ...styles.subtitle1, marginLeft: scale(15) }}>
                  5시리즈 528i 세단
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(8),
                }}
              >
                <Text style={{ ...styles.subtitle }}>등록일시</Text>
                <Text style={{ ...styles.subtitle1, marginLeft: scale(15) }}>
                  2020-04-24 14:17:20
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.popToTop();
                }}
                delayPressIn={0}
                style={{
                  ...styles.button,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: scale(40),
                  backgroundColor: '#001740',
                }}
              >
                <Text style={{ ...styles.buttontext }}>확인</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: 0.5 }}
            />
            <View
              style={{ paddingHorizontal: scale(15), marginTop: scale(25) }}
            >
              <Text style={{ ...styles.subtitle, color: '#1d1d1d' }}>
                이후 진행 절차
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(20),
                }}
              >
                <ImageBackground
                  source={require('../../../images/shutterstock_000000.png')}
                  style={{
                    width: scale(24),
                    height: scale(24),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ ...styles.number }}>1</Text>
                </ImageBackground>
                <Text style={{ ...styles.subtitle2, marginLeft: scale(6) }}>
                  등록정보 확인
                </Text>
              </View>
              <Text
                style={{
                  ...styles.desc,
                  width: scale(270),
                  marginLeft: scale(30),
                }}
              >
                배달의딜러에서 등록정보 확인 후 견적서비스가 시작됩니다. 정보
                확인은 평일 기준(공휴일 제외) 24시간 이내에 처리되며, 등록정보가
                부정확한 경우 승인이 지연될 수 있습니다.
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(20),
                }}
              >
                <ImageBackground
                  source={require('../../../images/shutterstock_000000.png')}
                  style={{
                    width: scale(24),
                    height: scale(24),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ ...styles.number }}>2</Text>
                </ImageBackground>
                <Text style={{ ...styles.subtitle2, marginLeft: scale(6) }}>
                  견적서비스 진행
                </Text>
              </View>
              <Text
                style={{
                  ...styles.desc,
                  width: scale(270),
                  marginLeft: scale(30),
                }}
              >
                견적서비스는 최대 20개 / 3일(72시간)동안 진행됩니다.
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(20),
                }}
              >
                <ImageBackground
                  source={require('../../../images/shutterstock_000000.png')}
                  style={{
                    width: scale(24),
                    height: scale(24),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ ...styles.number }}>3</Text>
                </ImageBackground>
                <Text style={{ ...styles.subtitle2, marginLeft: scale(6) }}>
                  견적 알림
                </Text>
              </View>
              <Text
                style={{
                  ...styles.desc,
                  width: scale(270),
                  marginLeft: scale(30),
                }}
              >
                견적이 들어오면 알림으로 안내해드립니다. (알림 설정 ON)
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  topic: {
    width: scale(40),
    height: scale(40),
  },
  button: {
    width: '100%',
    height: scale(40),
    borderRadius: 10,
  },
  buttontext: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  title: {
    fontFamily: 'Jalnan',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    lineHeight: 25,
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#9d9d9d',
  },
  subtitle1: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  number: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  subtitle2: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  desc: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
});
