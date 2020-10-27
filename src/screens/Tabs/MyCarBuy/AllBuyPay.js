import React, { useState, useEffect } from 'react';
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

export default function AllBuyPay({ route, navigation }) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  const { car_no, car_user_type } = route.params;
  const [data, setData] = useState(null);

  const _getDetail = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00027({
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
          <Text style={{ ...styles.headercenter }}>총 구매비용 계산</Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              paddingVertical: scale(21),
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                marginHorizontal: scale(15),
                borderStyle: 'solid',
                borderBottomWidth: 0.3,
                borderColor: '#d2d2d2',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: scale(4),
                }}
              >
                <Text style={{ ...styles.lefttext }}>차량가격</Text>
                <Text style={{ ...styles.righttext }}>
                  {data.data.car_price
                    .substring(data.data.car_price.length - 4, 0)
                    .replace(regexp, ',')}
                  만원
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: scale(4),
                }}
              >
                <Text style={{ ...styles.lefttext }}>배송료</Text>
                <Text style={{ ...styles.righttext }}>
                  {data.data.delivery_price.toString().replace(regexp, ',')}원
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: scale(4),
                }}
              >
                <Text style={{ ...styles.lefttext }}>매도비용</Text>
                <Text style={{ ...styles.righttext }}>
                  {data.data.sell_price.toString().replace(regexp, ',')}원
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: scale(4),
                }}
              >
                <Text style={{ ...styles.lefttext }}>성능보증보험료</Text>
                <Text style={{ ...styles.righttext }}>
                  {data.data.insurance_price.toString().replace(regexp, ',')}원
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: scale(4),
                  marginBottom: scale(16),
                }}
              >
                <Text style={{ ...styles.lefttext }}>이전비용</Text>
                <Text style={{ ...styles.righttext }}>
                  {data.data.transfer_price.toString().replace(regexp, ',')}원
                  (약 {data.data.transfer_rate * 100}%적용)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: scale(20),
                paddingHorizontal: scale(15),
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ ...styles.allprice }}>총 구매비용</Text>
                <Text style={{ ...styles.suballprice }}>(보험료 제외)</Text>
              </View>
              <Text style={{ ...styles.price }}>
                {data.data.total_price.toString().replace(regexp, ',')}원
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <Text
              style={{
                ...styles.subtitle,
                marginTop: scale(15),
                marginBottom: scale(10),
              }}
            >
              배달의 딜러 서비스
            </Text>
            <View style={{ ...styles.sameview }}>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: scale(15),
                  borderStyle: 'solid',
                  borderBottomWidth: 0.3,
                  borderColor: '#d2d2d2',
                }}
              >
                <View>
                  <Text style={{ ...styles.lefttext1 }}>
                    이 차량을 {data.data.base_period}개월 기준, 최저금리{' '}
                    {data.data.base_interest}% 적용 시
                  </Text>
                  <Text style={{ ...styles.lefttext2 }}>
                    월 납입액{' '}
                    {data.data.calc_price.toString().replace(regexp, ',')} 원
                  </Text>
                </View>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require('../../../images/see_more_icon_881.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: scale(15),
              marginTop: scale(20),
              marginBottom: Platform.OS === 'ios' ? scale(13) : scale(28),
            }}
          >
            <Text style={{ ...styles.desctext }}>
              확인하세요!{'\n'}- 위 금액은 예상비용으로 실제 금액과 상이할 수
              있으며, 경우에 따라 매도비용, 알선수수료가 발생할 수 있습니다.
              {'\n'}- 실제 거래신고 금액이 과세표준금액보다 적으면, 과세표준금액
              기준으로 이전등록비가 부과됩니다.{'\n'}
              {'\n'}친환경차 세금감면 안내{'\n'}- 전기차 : 취득세 최대 140만원
              감면, 공채 매입 최대 250만원 면제{'\n'}- 하이브리드차 : 취득세
              최대 140만원 감면, 공채 매입 최대 200만원 면제{'\n'}- 플러그인
              하이브리드차 : 취득세 최대 140만원 감면, 공채 매입 최대 200만원
              면제{'\n'}- 수소전기차 : 취득세 최대 140만원 감면, 공채 매입 최대
              250만원 면제{'\n'}- 2019년 7월 23일 기준입니다.{'\n'}
              {'\n'}경차 세금감면 안내{'\n'}- 취득세 50만원 이하 면세, 50만원
              초과 시 최대 50만원 공제
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
  lefttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#999999',
  },
  righttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#000000',
  },
  allprice: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#459bfe',
  },
  suballprice: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: -0.6,
    textAlign: 'left',
    color: '#459bfe',
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(25),
    fontStyle: 'normal',
    letterSpacing: -1.5,
    textAlign: 'right',
    color: '#459bfe',
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
  lefttext1: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  lefttext2: {
    fontFamily: 'Roboto-Bold',
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
  subtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(11),
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  desctext: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(9),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: -0.54,
    textAlign: 'left',
    color: '#818181',
  },
});
