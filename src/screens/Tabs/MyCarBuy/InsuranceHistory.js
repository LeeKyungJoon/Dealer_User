import React, { useEffect, useState } from 'react';
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
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';

const Width = Dimensions.get('window').width;

export default function InsuranceHistory({ route, navigation }) {
  const { car_no, car_user_type, car_nm, year } = route.params;
  const [data, setData] = useState(null);

  const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ('0' + (1 + date.getMonth())).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);

    return year + '/' + month + '/' + day;
  };

  const getToday1 = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ('0' + (1 + date.getMonth())).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);

    return year + '년 ' + month + '월 ' + day + '일';
  };

  const _getDetail = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00026({
        car_no: car_no,
        car_user_type: car_user_type,
      });
      console.log('_getDetail>>>', JSON.stringify(data));
      if (data.success_yn) {
        setData(data);
      } else if (
        !data.success_yn &&
        data.msg === '세션이 종료되어 로그인 페이지로 이동합니다.'
      ) {
        await AsyncStorage.clear();
        navigation.reset({
          routes: [{ name: 'Sign' }],
        });
      }
    } catch (error) {
      console.log('_getDetail>>>>>', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _getDetail();
    });
    return unsubscribe;
  }, [navigation]);

  return data ? (
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
              <Text style={{ ...styles.carnumber }}>
                {data.data.car_number}
              </Text>
              <Text style={{ ...styles.infoyear }}>
                정보조회일 {getToday()}
              </Text>
            </View>
            <View style={{ paddingHorizontal: scale(15) }}>
              <Text style={{ ...styles.subtitle, marginTop: scale(20) }}>
                중고차 사고이력 정보 요약
              </Text>
              <View style={{ ...styles.sameview, marginTop: scale(10) }}>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>일반사양</Text>
                  <Text style={{ ...styles.righttext }}>
                    {car_nm}, {year}년식
                  </Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>용도 변경이력</Text>
                  <Text style={{ ...styles.righttext }}>
                    {data.data.usage_change_yn ? '있음' : '없음'}
                  </Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>
                    번호 / 소유자 변경이력
                  </Text>
                  <Text style={{ ...styles.righttext }}>
                    {data.data.number_change_cnt}회 /{' '}
                    {data.data.owner_change_cnt}회
                  </Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>특수 사고이력</Text>
                  <Text style={{ ...styles.righttext }}>
                    전손 {data.data.total_loss_cnt}회 / 침수(전손,분손){' '}
                    {data.data.flooding_cnt}회 / 도난 {data.data.theft_cnt}회
                  </Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>
                    보험 사고 이력 (내차 피해)
                  </Text>
                  <Text style={{ ...styles.righttext }}>
                    {data.data.car_damage_my_cnt === 0
                      ? '없음'
                      : data.data.car_damage_my_cnt + '회'}
                  </Text>
                </View>
                <View style={{ ...styles.subview }}>
                  <Text style={{ ...styles.lefttext }}>
                    보험 사고 이력 (타차 가해)
                  </Text>
                  <Text style={{ ...styles.righttext }}>
                    {data.data.car_damage_other_cnt === 0
                      ? '없음'
                      : data.data.car_damage_other_cnt + '회'}
                  </Text>
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
            <Text style={{ ...styles.yeartext, marginTop: scale(10) }}>
              {getToday1()}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  ) : (
    <SubLoading />
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
