import React from 'react';
import { Header } from 'react-native-elements';
import scale from '../../../common/Scale';
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';

const Width = Dimensions.get('window').width;

export default function InsuranceHistory({ route, navigation }) {
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
          borderBottomWidth: 2,
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
          <Text style={{ ...styles.headercenter }}>보험이력</Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: '#ffffff',
                paddingVertical: scale(15),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ ...styles.carnumber }}>12가3456</Text>
              <Text style={{ ...styles.infoyear }}>정보조회일 2020/05/11</Text>
            </View>
            <View style={{ paddingHorizontal: scale(15) }}>
              <Text style={{ ...styles.subtitle, marginTop: scale(20) }}>
                중고차 사고이력 정보 요약
              </Text>
              <View style={{ ...styles.sameview, marginTop: scale(10) }}>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>일반사양</Text>
                  <Text style={{ ...styles.righttext }}>
                    기아, 더뉴 K7, 2017년식
                  </Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>용도 변경이력</Text>
                  <Text style={{ ...styles.righttext }}>없음</Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>
                    번호 / 소유자 변경이력
                  </Text>
                  <Text style={{ ...styles.righttext }}>0회 / 3회</Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>특수 사고이력</Text>
                  <Text style={{ ...styles.righttext }}>
                    전손 0회 / 침수(전손,분손) 0회 / 도난 0회
                  </Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>
                    보험 사고 이력 (내차 피해)
                  </Text>
                  <Text style={{ ...styles.righttext }}>없음</Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>
                    보험 사고 이력 (타차 가해)
                  </Text>
                  <Text style={{ ...styles.righttext }}>없음</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.sameview,
              padding: scale(15),
              marginTop: scale(15),
              marginBottom: scale(25),
              alignSelf: 'center',
            }}
          >
            <Text style={{ ...styles.insurancetext }}>
              보험개발원(www.kidi.or.kr)은 보험업법 제176조에 의하여 설립된
              보험요율산출기관이며,
              중고차사고이력정보서비스(www.carhistory.or.kr)는 보험업법시행령
              제86조 제1호에 근거하여 제공합니다.
            </Text>
            <Text style={{ ...styles.yeartext, marginVertical: scale(10) }}>
              2020년 01월 22일
            </Text>
            <TouchableOpacity
              delayPressIn={0}
              style={{
                width: scale(257.3),
                backgroundColor: '#959595',
                borderStyle: 'solid',
                borderWidth: 0.3,
                borderColor: '#707070',
                paddingVertical: scale(9.5),
                alignSelf: 'center',
              }}
            >
              <Text style={{ ...styles.intext }}>
                보험개발원장 (인) *이미지*
              </Text>
            </TouchableOpacity>
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
  carnumber: {
    fontFamily: 'Roboto-Bold',

    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: -0.45,
    textAlign: 'center',
    color: '#000000',
  },
  infoyear: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(9),
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.27,
    textAlign: 'center',
    color: '#999999',
  },
  subtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(11),
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  subview: {
    borderStyle: 'solid',
    borderBottomWidth: 0.3,
    borderColor: '#d2d2d2',
    flexDirection: 'row',
    padding: scale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lefttext: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  righttext: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  seeicon: {
    width: scale(22),
    height: scale(22),
  },
  insurancetext: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(9),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  yeartext: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(11),
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.66,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  intext: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'center',
    color: '#1d1d1d',
  },
});
