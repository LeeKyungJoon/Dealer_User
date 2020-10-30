import React, { useState, useEffect } from 'react';
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
  Linking,
} from 'react-native';
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';
import AppServer from '../../../common/AppServer';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import SubLoading from '../../../common/SubLoading';

export default function MyCarBuyMain({ route, navigation }) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  const [isvisible, setIsvisible] = useState(false);
  const [isvisible1, setIsvisible1] = useState(false);
  const [isvisible2, setIsvisible2] = useState(false);
  const [premiumCheck, setPremiumCheck] = useState(false);
  const [data, setData] = useState(null);

  const _getBuying = async (car_no, car_user_type) => {
    try {
      let result = await AppServer.CARDEALER_API_00033({ car_no: car_no });
      console.log('_getBuying>>>', result);
      if (result.success_yn) {
        switch (result.data.trade_status_user_txt) {
          case '주문승인':
            navigation.navigate('BuyCar', {
              trade_no: result.data.trade_no,
              car_no: car_no,
              car_user_type: car_user_type,
            });
            break;
          case '입금계좌 요청':
            navigation.navigate('DepositAccountCom', {
              trade_no: result.data.trade_no,
              car_no: car_no,
              car_user_type: car_user_type,
            });
            break;
          case '입금완료 요청':
            setIsvisible2(true);
            break;
          case '입금확인':
            navigation.navigate('ReceivePlace', {
              trade_no: result.data.trade_no,
            });
            break;
          case '인수장소 입력':
            navigation.navigate('RefundAccount', {
              trade_no: result.data.trade_no,
            });
            break;
          case '이전비 환불 정보입력':
            navigation.navigate('DeliverySchedule', {
              trade_no: result.data.trade_no,
            });
            break;
        }
      }
    } catch (error) {
      console.log('_getBuying>>>', error);
    }
  };

  const _getBuyList = async ({ check }) => {
    try {
      const data = await AppServer.CARDEALER_API_00015({
        premium_yn: check,
        premium_yn_other: check,
      });
      console.log('_getBuyList', data);
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
      console.log('_getBuy', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _getBuyList({ check: premiumCheck });
    });
    return unsubscribe;
  }, [navigation]);

  return data ? (
    <>
      <Header
        backgroundColor={'#459bfe'}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: '#459bfe' }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
        }}
        centerComponent={
          <Image
            style={{ ...styles.mainlogo }}
            source={require('../../../images/logo.png')}
          />
        }
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchCar');
            }}
            style={{ marginRight: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.search }}
              source={require('../../../images/search_ic_72.png')}
            />
          </TouchableOpacity>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView
          style={{
            backgroundColor: '#ffffff',
          }}
        >
          <View
            style={{
              width: '100%',
              paddingVertical: scale(20),
            }}
          >
            <Swiper
              loop={false}
              height={scale(130)}
              style={{ height: scale(130), flex: 0 }}
              containerStyle={{
                height: scale(130),
                flex: 0,
              }}
              activeDotColor={'#001740'}
              dotColor={'#e9e9e9'}
              paginationStyle={{ bottom: 10 }}
            >
              {data.ad_list.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      Linking.openURL(item.link_url);
                    }}
                    delayPressIn={0}
                  >
                    <Image
                      style={{ ...styles.topimage }}
                      source={{ uri: item.ad_image }}
                    />
                  </TouchableOpacity>
                );
              })}
            </Swiper>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: scale(15),
              backgroundColor: '#f9f9f9',
              paddingBottom: scale(15),
            }}
          >
            <Text
              style={{
                ...styles.categorytitle,
                marginBottom: scale(12),
                marginTop: scale(15),
              }}
            >
              구매 진행 중인 차량
            </Text>

            {data.process_list.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    _getBuying(item.car_no, item.car_user_type);
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

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: scale(12),
                marginTop: scale(15),
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('List', { title: false });
                }}
                delayPressIn={0}
              >
                <Text style={{ ...styles.categorytitle }}>
                  인기 매물 <Text style={{ color: '#459bfe' }}>#국산차</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPremiumCheck(!premiumCheck);
                  _getBuyList({ check: !premiumCheck });
                }}
                delayPressIn={0}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
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
            </View>
            {data.car_list.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    item.car_user_type === 'dealer'
                      ? navigation.navigate('CarDetail', {
                          car_no: item.car_no,
                          car_user_type: item.car_user_type,
                          sido: item.sido,
                        })
                      : navigation.navigate('CarDetailPersonal', {
                          car_no: item.car_no,
                          car_user_type: item.car_user_type,
                          sido: item.sido,
                        });
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('List', { title: true });
              }}
              delayPressIn={0}
            >
              <Text
                style={{
                  ...styles.categorytitle,
                  marginBottom: scale(12),
                  marginTop: scale(15),
                }}
              >
                인기 매물 <Text style={{ color: '#459bfe' }}>#수입차</Text>
              </Text>
            </TouchableOpacity>
            {data.car_list_other.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    item.car_user_type === 'dealer'
                      ? navigation.navigate('CarDetail', {
                          car_no: item.car_no,
                          car_user_type: item.car_user_type,
                          sido: item.sido,
                        })
                      : navigation.navigate('CarDetailPersonal', {
                          car_no: item.car_no,
                          car_user_type: item.car_user_type,
                          sido: item.sido,
                        });
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
            <View style={{ marginTop: scale(25) }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ListReal', { review_type: 'RT_009' });
                }}
                delayPressIn={0}
              >
                <Text style={{ ...styles.real, marginBottom: scale(10) }}>
                  #리얼 후기 <Text style={{ color: '#1d1d1d' }}>확인하기</Text>
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginBottom: scale(15),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                {data.review_list.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        navigation.navigate('RealReviewDetail', {
                          review_no: item.review_no,
                        });
                      }}
                      delayPressIn={0}
                      style={{
                        width: scale(157.5),
                        height: scale(180),
                        backgroundColor: '#ffffff',
                        elevation: 1.5,
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                      }}
                    >
                      <ImageBackground
                        style={{ ...styles.realcar }}
                        source={{ uri: item.review_img }}
                      ></ImageBackground>
                      <Image
                        style={{
                          width: scale(30),
                          height: scale(30),
                          position: 'absolute',
                          right: 4,
                          bottom: 40,
                          borderRadius: scale(50),
                        }}
                        source={{ uri: item.dealer_img }}
                      />
                      <View
                        style={{
                          paddingHorizontal: scale(4),
                          paddingVertical: scale(7),
                        }}
                      >
                        <Text style={{ ...styles.smallcarname }}>
                          {item.car_nm}
                        </Text>
                        <Text
                          style={{ ...styles.review, marginTop: scale(4) }}
                          numberOfLines={2}
                        >
                          {item.review_desc}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
        <Modal
          isVisible={isvisible}
          style={{ alignItems: 'center' }}
          useNativeDriver={true}
        >
          <View
            style={{
              ...styles.modalview,
              paddingHorizontal: scale(20),
              paddingVertical: scale(16),
            }}
          >
            <Text style={{ ...styles.modaltext }}>
              주문 요청하신{'\n'}
              <Text style={{ fontFamily: 'Roboto-Bold' }}>
                12가3456, 기아, 더뉴 K7, 2017년식
              </Text>{' '}
              차량을 지금 바로 구매하실 수 있습니다.
            </Text>
            <TouchableOpacity delayPressIn={0} style={{ marginTop: scale(20) }}>
              <Text style={{ ...styles.modalbutton }}>구매하러 가기</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          isVisible={isvisible1}
          style={{ alignItems: 'center' }}
          useNativeDriver={true}
        >
          <View
            style={{
              ...styles.modalview,
              paddingHorizontal: scale(20),
              paddingVertical: scale(16),
            }}
          >
            <Text style={{ ...styles.modaltext }}>
              입금이 확인되었습니다. 구매하신 차량을 인수받을 장소와 일정을 필히
              입력해주세요.
            </Text>
            <TouchableOpacity delayPressIn={0} style={{ marginTop: scale(20) }}>
              <Text style={{ ...styles.modalbutton }}>입력하러 가기</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          isVisible={isvisible2}
          style={{ alignItems: 'center' }}
          useNativeDriver={true}
          onBackButtonPress={() => {
            setIsvisible2(false);
          }}
          onBackdropPress={() => {
            setIsvisible2(false);
          }}
        >
          <View
            style={{
              ...styles.modalview,
              paddingHorizontal: scale(20),
              paddingVertical: scale(16),
            }}
          >
            <Text style={{ ...styles.modaltext }}>입금확인 대기 중입니다.</Text>
            <TouchableOpacity
              onPress={() => {
                setIsvisible2(false);
              }}
              delayPressIn={0}
              style={{ marginTop: scale(20) }}
            >
              <Text style={{ ...styles.modalbutton }}>확인</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  ) : (
    <SubLoading />
  );
}

const styles = StyleSheet.create({
  search: {
    width: scale(18),
    height: scale(18),
  },
  mainlogo: {
    width: scale(140),
    height: scale(22),
  },
  alert: {
    width: scale(18),
    height: scale(18),
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topimage: {
    width: scale(330),
    height: scale(130),
    borderRadius: 10,
    alignSelf: 'center',
  },
  categorytitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
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
  real: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#459bfe',
  },
  realcar: {
    width: scale(157.5),
    height: scale(130),
  },
  smallcarname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(8),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#459bfe',
  },
  review: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    lineHeight: 10,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  modalview: {
    width: scale(280),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  modaltext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    lineHeight: scale(18),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  modalbutton: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#459bfe',
  },
});
