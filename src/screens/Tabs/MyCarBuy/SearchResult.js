import React, { useState, useEffect } from 'react';
import { Header } from 'react-native-elements';
import scale from '../../../common/Scale';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const Width = Dimensions.get('window').width;

export default function SearchCar({ route, navigation }) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  const [data, setData] = useState(null);
  const [premiumCheck, setPremiumCheck] = useState(false);
  const { result } = route.params;

  const _getResult = async ({ check }) => {
    try {
      let data = await AppServer.CARDEALER_API_00017({
        search_text: result,
        premium_yn: check,
        user_type: 'user',
        page: 1,
        range: 30,
      });
      console.log('_getResult>>>>', data);
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
      console.log('_getResult>>>>', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _getResult({ check: premiumCheck });
    });
    return unsubscribe;
  }, [navigation]);

  return data ? (
    <>
      <Header
        placement="left"
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
              style={{ ...styles.backsearchicon }}
              source={require('../../../images/back_ic_72.png')}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchCarDetail');
            }}
            delayPressIn={0}
            activeOpacity={0.5}
            style={{ width: '100%' }}
          >
            <Text style={{ ...styles.toptext }}>
              검색결과{' '}
              <Text style={{ color: '#459bfe', marginLeft: scale(5) }}>
                #{result}
              </Text>
            </Text>
          </TouchableOpacity>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: scale(15),
            paddingHorizontal: scale(15),
          }}
        >
          <View
            style={{
              width: '100%',
              paddingVertical: scale(12),
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setPremiumCheck(!premiumCheck);
                _getResult({ check: !premiumCheck });
              }}
              delayPressIn={0}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginBottom: scale(5),
              }}
            >
              <Image
                style={{ ...styles.preicon }}
                source={require('../../../images/premium_on.png')}
              />
              <Text style={{ ...styles.pretext, marginRight: scale(3) }}>
                프리미엄 매물 모아보기
              </Text>
              {premiumCheck ? (
                <Image
                  style={{ ...styles.onofficon }}
                  source={require('../../../images/check_on_ic_40.png')}
                />
              ) : (
                <Image
                  style={{ ...styles.onofficon }}
                  source={require('../../../images/check_off_ic_40.png')}
                />
              )}
            </TouchableOpacity>
            {data.search_list.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate('CarDetail');
                  }}
                  delayPressIn={0}
                  style={{
                    ...styles.carlist,
                    elevation: 1.5,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    marginBottom: scale(10),
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.carimage }}
                    source={{ uri: item.car_img }}
                  >
                    <View
                      style={{
                        width: scale(90),
                        height: scale(30),
                        backgroundColor: '#001740',
                        position: 'absolute',
                        bottom: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ ...styles.price }}>
                        {item.car_price
                          .substring(item.car_price.length - 4, 0)
                          .replace(regexp, ',')}
                        만원
                      </Text>
                    </View>
                    {item.premium_yn ? (
                      <Image
                        style={{ ...styles.premark, position: 'absolute' }}
                        source={require('../../../images/premium.png')}
                      />
                    ) : null}

                    <View style={{ position: 'absolute', right: 5, top: 5 }}>
                      {item.like_yn ? (
                        <Image
                          style={{
                            ...styles.like,
                          }}
                          source={require('../../../images/likes_on.png')}
                        />
                      ) : (
                        <Image
                          style={{
                            ...styles.like,
                          }}
                          source={require('../../../images/likes_off.png')}
                        />
                      )}
                    </View>
                  </ImageBackground>

                  <Image
                    style={{
                      ...styles.avator,
                      position: 'absolute',
                      right: 10,
                      bottom: 50,
                    }}
                    source={{ uri: item.dealer_img }}
                  />
                  <View style={{ padding: scale(10) }}>
                    <Text style={{ ...styles.carname }}>{item.car_nm}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: scale(3),
                      }}
                    >
                      <Text style={{ ...styles.carhistory }}>
                        {item.sido} / {item.vehicle_year}년 /{' '}
                        {item.driven_distance.toString().replace(regexp, ',')}km
                      </Text>
                      <Text style={{ ...styles.daypeople }}>
                        {moment(item.reg_dt * 1000).format('YYYY.MM.DD')} /{' '}
                        {item.like_cnt}명 찜
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  ) : (
    <SubLoading />
  );
}

const styles = StyleSheet.create({
  backsearchicon: {
    width: scale(18),
    height: scale(18),
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  toptext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  carlist: {
    width: scale(330),
    height: scale(250),
    backgroundColor: '#ffffff',
  },
  carimage: {
    width: scale(330),
    height: scale(182.5),
  },
  premark: {
    width: scale(59),
    height: scale(59),
  },
  like: {
    width: scale(24),
    height: scale(24),
  },
  avator: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
  },
  price: {
    fontFamily: 'NotoSans-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  carname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  carhistory: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: -0.3,
    textAlign: 'left',
    color: '#999999',
  },
  daypeople: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#bebebe',
  },
  preicon: {
    width: scale(20),
    height: scale(20),
  },
  pretext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: 'right',
    color: '#1d1d1d',
  },
  onofficon: {
    width: scale(9),
    height: scale(9),
  },
});
