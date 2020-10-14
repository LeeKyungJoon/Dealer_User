import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import scale from '../../../common/Scale';
import {
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import Rating from 'react-native-rating';
import { Easing } from 'react-native';

const Width = Dimensions.get('window').width;

export default function RealReviewDetail({ route, navigation }) {
  return (
    <>
      <Header
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
              style={{ ...styles.backicon }}
              source={require('../../../images/back_ic_72.png')}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Text style={{ ...styles.headercenter }}>12가3456</Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView>
          <Swiper
            loop={false}
            height={scale(200)}
            style={{ height: scale(200), flex: 0 }}
            containerStyle={{
              height: scale(200),
              flex: 0,
            }}
            activeDotColor={'#001740'}
            dotColor={'#e9e9e9'}
            paginationStyle={{ bottom: 10 }}
          >
            <Image
              resizeMode={'cover'}
              style={{ width: '100%', height: '100%', flex: 1 }}
              source={require('../../../images/k_7_02.png')}
            />
            <Image
              resizeMode={'cover'}
              style={{ width: '100%', height: '100%', flex: 1 }}
              source={require('../../../images/k_7_02.png')}
            />
            <Image
              resizeMode={'cover'}
              style={{ width: '100%', height: '100%', flex: 1 }}
              source={require('../../../images/k_7_02.png')}
            />
          </Swiper>
          <View style={{ flex: 1 }}>
            <View
              style={{
                width: Width,
                backgroundColor: '#ffffff',
                borderBottomColor: 'rgba(222, 222, 222, 0.9)',
                borderBottomWidth: 1.5,
                paddingBottom: scale(14.8),
                paddingTop: scale(10),
                paddingLeft: scale(15),
              }}
            >
              <Text style={{ ...styles.carname }}>기아 더뉴 K7</Text>
              <Text style={{ ...styles.date, marginTop: scale(3) }}>
                2020.05.06 거래완료
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(15.5),
                }}
              >
                <Text style={{ ...styles.sub, marginRight: scale(30) }}>
                  거래 금액
                </Text>
                <Text style={{ ...styles.price }}>1,740만원</Text>
              </View>
            </View>
            <View style={{ alignSelf: 'center', marginTop: scale(20) }}>
              <Text style={{ ...styles.sub, marginBottom: scale(5) }}>
                후기 내용
              </Text>
              <View
                style={{
                  ...styles.sameview,
                  paddingHorizontal: scale(15),
                  paddingVertical: scale(20),
                }}
              >
                <Text style={{ ...styles.subsub }}>
                  생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때 마음이
                  좀 싱숭생숭 했지만 좋은 딜러분 만나서 마음 편히 거래했습니다.
                  생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때 마음이
                  좀 싱숭생숭 했지만 좋은 딜러분 만나서 마음 편히 거래했습니다.
                  생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때 마음이
                  좀 싱숭생숭 했지만 좋은 딜러분 만나서 마음 편히 거래했습니다.
                  생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때 마음이
                  좀 싱숭생숭 했지만 좋은 딜러분 만나서 마음 편히 거래했습니다.
                  생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때 마음이
                  좀 싱숭생숭 했지만 좋은 딜러분 만나서 마음 편히 거래했습니다.
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: scale(20),
                alignSelf: 'center',
                marginBottom: scale(30),
              }}
            >
              <Text style={{ ...styles.sub, marginBottom: scale(5) }}>
                딜러 정보
              </Text>

              <View
                style={{
                  ...styles.sameview,
                  paddingBottom: scale(25),
                  paddingTop: scale(20),
                  alignItems: 'center',
                  paddingHorizontal: scale(15),
                }}
              >
                <Image
                  style={{ width: scale(50), height: scale(50) }}
                  source={require('../../../images/shutterstock_682551649.png')}
                />
                <Text style={{ ...styles.name, marginVertical: scale(8) }}>
                  홍길동 인증딜러
                </Text>
                <Rating
                  editable={false}
                  initial={4}
                  selectedStar={require('../../../images/likes_100_on.png')}
                  unselectedStar={require('../../../images/likes_100_off.png')}
                  config={{
                    easing: Easing.inOut(Easing.ease),
                    duration: 0,
                  }}
                  //maxScale={1.4}
                  starStyle={{
                    width: scale(24),
                    height: scale(24),
                  }}
                />
                <Text style={{ ...styles.score, marginTop: scale(5) }}>
                  4점 / 후기 55
                </Text>
                <View
                  style={{
                    width: scale(300),
                    height: 1,
                    borderStyle: 'solid',
                    borderWidth: 0.3,
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    marginVertical: scale(20),
                  }}
                />
                <Text style={{ ...styles.subsub }}>
                  안녕하세요. 배달의 딜러 우수 인증딜러 홍길동입니다. 우수
                  인증딜러는 배달의 딜러 내에 약 5000명 딜러종사자 중 배달의
                  딜러에서 인증한 50명에 선정된 우수 딜러입니다.{'\n'}
                  {'\n'}어떤 차량을 선택하는지도 중요하지만 어떤 딜러와 인연이
                  될지 선택하는 것이 더욱 중요합니다. 단 한번의 계약으로 평생의
                  카매니저가 되어드리겠습니다. ^^{'\n'}
                  {'\n'}- 차종 : 니로 1.6 하이브리드 노블레스{'\n'}- 특이사항 :
                  무사고 A급 차량{'\n'}
                  {'\n'}* 전액 할부가능 (차대금+이전비+보험료 포함){'\n'}
                  {'\n'}오시는 길{'\n'}-{'>'} 수원시 권선구 권선로 341
                  오토컬렉션
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backicon: {
    width: scale(18),
    height: scale(18),
  },
  headercenter: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(16),
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  sameview: {
    width: scale(330),
    backgroundColor: '#ffffff',
    elevation: 1.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  carname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  date: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: -0.3,
    textAlign: 'left',
    color: '#999999',
  },
  sub: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: -0.45,
    textAlign: 'left',
    color: '#000000',
  },
  subsub: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  score: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: -0.45,
    textAlign: 'left',
    color: '#459bfe',
  },
});
