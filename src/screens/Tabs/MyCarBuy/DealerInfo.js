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
  Linking,
} from 'react-native';
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';
import moment from 'moment';

const Width = Dimensions.get('window').width;

export default function AllBuyPay({ route, navigation }) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  const { dealer_no } = route.params;
  const [data, setData] = useState(null);

  const _star = (star_point, width, height) => {
    switch (star_point) {
      case '0':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '1':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '2':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '3':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '4':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '5':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
          </View>
        );
    }
  };

  const _getDealer = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00028({
        dealer_no: dealer_no,
      });
      console.log('_getDealer', data);
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
      console.log('_getDealer', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _getDealer();
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
          <Text style={{ ...styles.headercenter }}>
            {data.data[0].dealer_nm} 인증딜러
          </Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ ...styles.topview }}>
            <Image
              style={{ width: '100%', height: scale(200) }}
              source={{ uri: data.data[0].dealer_img }}
            />
            <View style={{ padding: scale(15) }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text style={{ ...styles.dealername }}>
                    {data.data[0].dealer_nm} 인증딜러
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: scale(2),
                    }}
                  >
                    {_star(data.data[0].review_point, 24, 24)}
                    <Text style={{ ...styles.review, marginLeft: scale(8) }}>
                      {data.data[0].review_point}점 / 후기{' '}
                      {data.data[0].review_cnt}
                    </Text>
                  </View>
                </View>
                {data.data[0].review_write_yn ? (
                  <Image
                    style={{ ...styles.compelete }}
                    source={require('../../../images/stamp_2_ic_320.png')}
                  />
                ) : (
                  <View style={{ ...styles.compelete }} />
                )}
              </View>
              <View style={{ marginTop: -scale(10) }}>
                <Text
                  style={{
                    ...styles.smalltext,
                    marginTop: scale(1),
                    marginBottom: scale(1),
                  }}
                >
                  {data.data[0].sido} · {data.data[0].store_nm}
                </Text>
                <Text style={{ ...styles.smalltext }}>
                  판매중 {data.data[0].process_cnt} · 판매완료{' '}
                  {data.data[0].complete_cnt}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <View
              style={{
                ...styles.sameview,
                marginTop: scale(20),
                paddingHorizontal: scale(15),

                paddingTop: scale(20),
              }}
            >
              <Text style={{ ...styles.desc }}>{data.data[0].dealer_desc}</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${data.data[0].dealer_phone}`);
                }}
                style={{
                  width: scale(280),
                  height: scale(40),
                  borderRadius: 10,
                  backgroundColor: '#459bfe',
                  justifyContent: 'center',
                  marginHorizontal: scale(5),
                  marginTop: scale(30),
                  marginBottom: scale(37.8),
                }}
                delayPressIn={0}
              >
                <Text style={{ ...styles.topbuttontext }}>딜러 연락하기</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.sameview,
                paddingBottom: scale(24.5),
                paddingTop: scale(20),
                paddingHorizontal: scale(15),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ ...styles.text1 }}>거래후기 평점</Text>
                  <View style={{ flexDirection: 'row' }}>
                    {_star(data.data[0].review_point, 24, 24)}
                  </View>
                  <Text style={{ ...styles.text1, fontSize: scale(15) }}>
                    {data.data[0].review_point}점
                  </Text>
                </View>
                <View
                  style={{
                    width: 0,
                    height: 65,
                    opacity: 0.4,
                    borderStyle: 'solid',
                    borderWidth: 0.5,
                    borderColor: '#707070',
                  }}
                />
                <View
                  style={{
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ ...styles.small, marginRight: scale(5) }}>
                      친절도
                    </Text>
                    {_star(data.data[0].kind_point, 16, 16)}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ ...styles.small, marginRight: scale(5) }}>
                      전문성
                    </Text>
                    {_star(data.data[0].profession_point, 16, 16)}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ ...styles.small, marginRight: scale(5) }}>
                      가격만족도
                    </Text>
                    {_star(data.data[0].price_point, 16, 16)}
                  </View>
                </View>
              </View>
              {data.data[0].review_write_yn ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ReviewRegist', {
                      review: data.data[0].review_write_trade_no,
                    });
                  }}
                  delayPressIn={0}
                  style={{
                    width: scale(280),
                    height: scale(40),
                    borderRadius: 10,
                    backgroundColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#459bfe',
                    marginTop: scale(20),
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ ...styles.reviewfield }}>후기 남기기</Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <View
              style={{
                ...styles.sameview,
                marginTop: scale(20),
                paddingHorizontal: scale(15),
              }}
            >
              <View
                style={{
                  paddingVertical: scale(25),

                  borderStyle: 'solid',
                  borderBottomWidth: 0.3,
                  borderColor: 'rgba(112, 112, 112, 0.4)',
                }}
              >
                <Text style={{ ...styles.reviewcount }}>
                  총 {data.data[0].review_cnt}개의 후기가 있습니다
                </Text>
              </View>
              {data.review_list.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      paddingTop: scale(20),
                      paddingBottom: scale(10),
                      borderStyle: 'solid',
                      borderBottomWidth: 0.3,
                      borderColor: 'rgba(112, 112, 112, 0.4)',
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ ...styles.namecarname }}>
                        {item.user_nm}님
                      </Text>
                      <View
                        style={{
                          width: 0,
                          height: 16,
                          opacity: 0.4,
                          borderStyle: 'solid',
                          borderWidth: 0.5,
                          borderColor: '#707070',
                          marginHorizontal: scale(5),
                        }}
                      />
                      <Text style={{ ...styles.namecarname }}>
                        {item.car_nm}
                      </Text>
                    </View>
                    <Text style={{ ...styles.reviewyear, marginTop: scale(2) }}>
                      {moment(item.reg_dt * 1000).format('YYYY년 MM월 DD일')}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: scale(15),
                      }}
                    >
                      <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.small }}>친절도</Text>
                        {_star(item.kind_point, 16, 16)}
                      </View>
                      <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.small }}>전문성</Text>
                        {_star(item.profession_point, 16, 16)}
                      </View>
                      <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.small }}>가격만족도</Text>
                        {_star(item.price_point, 16, 16)}
                      </View>
                    </View>
                    <Text style={{ ...styles.desc, marginTop: scale(15) }}>
                      {item.review_desc}
                    </Text>
                  </View>
                );
              })}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DealerReviewList', {
                    dealer_no: data.data[0].dealer_no,
                    review_cnt: data.data[0].review_cnt,
                  });
                }}
                delayPressIn={0}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: scale(17),
                }}
              >
                <Text style={{ ...styles.moretext }}>전체보기</Text>
                <Image
                  style={{ ...styles.moreic }}
                  source={require('../../../images/more_ic_72.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.sameview,
                marginTop: scale(20),
                paddingVertical: scale(20),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: scale(15),
                  marginBottom: scale(15),
                }}
              >
                <Text style={{ ...styles.namecarname }}>판매중인 차량</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DealerCarAll', {
                      dealer_no: dealer_no,
                    });
                  }}
                  delayPressIn={0}
                >
                  <Text style={{ ...styles.smalltext }}>전체보기 {'>'}</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginLeft: scale(15) }}
              >
                {data.car_list.map((item, index) => {
                  return (
                    <View key={index} style={{ marginRight: scale(10) }}>
                      <Image
                        style={{ ...styles.carimage }}
                        source={require('../../../images/1111.png')}
                      />
                      <Text style={{ ...styles.carname }}>{item.brand_nm}</Text>
                      <Text style={{ ...styles.carpackage }}>
                        {item.car_nm}
                      </Text>
                      <Text style={{ ...styles.carprice }}>
                        {item.car_price
                          .substring(item.car_price.length - 4, 0)
                          .replace(regexp, ',')}
                        만원
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <Image
              style={{
                width: scale(330),
                height: scale(160),
                marginTop: scale(20),
                marginBottom: scale(25),
              }}
              source={require('../../../images/no_path.png')}
            />
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
  topview: {
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
  star: {
    width: scale(24),
    height: scale(24),
  },
  dealername: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),

    fontStyle: 'normal',

    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  review: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  compelete: {
    width: scale(80),
    height: scale(80),
  },
  smalltext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: -0.3,
    textAlign: 'left',
    color: '#999999',
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
  desc: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),

    fontStyle: 'normal',

    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  topbuttontext: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  star1: {
    width: scale(16),
    height: scale(16),
  },
  text1: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  small: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  reviewfield: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#459bfe',
  },
  reviewcount: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  namecarname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  reviewyear: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(9),
    fontStyle: 'normal',
    letterSpacing: -0.27,
    textAlign: 'left',
    color: '#999999',
  },
  moreic: {
    width: scale(18),
    height: scale(18),
  },
  moretext: {
    fontFamily: 'Jalnan',
    fontSize: scale(16),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#999999',
  },
  carimage: {
    width: scale(125),
    height: scale(100),
  },
  carname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  carpackage: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  carprice: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#459bfe',
  },
});
