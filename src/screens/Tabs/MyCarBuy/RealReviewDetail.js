import React, { useState, useEffect } from 'react';
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
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';
import moment from 'moment';

const Width = Dimensions.get('window').width;

export default function RealReviewDetail({ route, navigation }) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  const [data, setData] = useState(null);
  const { review_no } = route.params;

  const _star = () => {
    switch (data.dealer_info.review_point) {
      case '0':
        return (
          <View style={{ flexDirection: 'row', marginTop: scale(7) }}>
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '1':
        return (
          <View style={{ flexDirection: 'row', marginTop: scale(7) }}>
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '2':
        return (
          <View style={{ flexDirection: 'row', marginTop: scale(7) }}>
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '3':
        return (
          <View style={{ flexDirection: 'row', marginTop: scale(7) }}>
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '4':
        return (
          <View style={{ flexDirection: 'row', marginTop: scale(7) }}>
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '5':
        return (
          <View style={{ flexDirection: 'row', marginTop: scale(7) }}>
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ ...styles.star }}
              source={require('../../../images/likes_on.png')}
            />
          </View>
        );
    }
  };

  const _getReview = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00020({
        review_no: review_no,
      });
      console.log('_getReview>>', data);
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
      console.log('_getReview>>', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _getReview();
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
          <Text style={{ ...styles.headercenter }}>{data.data.car_number}</Text>
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
              <Text style={{ ...styles.carname }}>{data.data.car_nm}</Text>
              <Text style={{ ...styles.date, marginTop: scale(3) }}>
                {moment(data.data.trade_dt * 1000).format('YYYY.MM.DD')}거래완료
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
                <Text style={{ ...styles.price }}>
                  {data.data.trade_price
                    .substring(data.data.trade_price.length - 4, 0)
                    .replace(regexp, ',')}
                  만원
                </Text>
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
                  {data.data.review_desc}
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
                  {data.data.dealer_nm} 딜러
                </Text>
                <Rating
                  editable={false}
                  initial={Number(data.data.review_point)}
                  selectedStar={require('../../../images/likes_on.png')}
                  unselectedStar={require('../../../images/likes_off.png')}
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
                  {data.data.review_point}점 / 후기 {data.data.review_cnt}
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
                  {data.data.dealer_desc}
                </Text>
              </View>
            </View>
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
