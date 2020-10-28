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
  Linking,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import Postcode from 'react-native-daum-postcode';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';

const Width = Dimensions.get('window').width;

export default function CarDetail({ route, navigation }) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  const [drop, setDrop] = useState(false);
  const [isvisible, setIsvisible] = useState(false);
  const [isvisible1, setIsvisible1] = useState({ open: false, image: '' });
  const [isvisible2, setIsvisible2] = useState(false);
  const [isvisible3, setIsvisible3] = useState(false);
  const [selectDe, setSelectDe] = useState({ desc: '', method: '' });
  const { car_no, car_user_type, sido } = route.params;
  const [data, setData] = useState(null);
  const [address, setAddress] = useState('');
  const [addressOther, setAddressOther] = useState('');
  const [deliveryPrice, setDeliveryPrice] = useState('');
  const [reportDesc, setReportDesc] = useState('');

  const _report = (reporttext) => {
    setReportDesc(reporttext);
  };

  const _reportPost = async () => {
    if (reportDesc) {
      setIsvisible3(false);
      try {
        let data = await AppServer.CARDEALER_API_00024({
          car_no: car_no,
          car_user_type: car_user_type,
          reason: reportDesc,
        });
        console.log('_reportPost>>>', data);
      } catch (error) {
        console.log('_reportPost>>>', error);
      }
    } else {
      setIsvisible3(false);
    }
  };

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

  const _deliveryPay = async (delivery_method) => {
    try {
      let data = await AppServer.CARDEALER_API_00023({
        car_no: car_no,
        car_user_type: car_user_type,
        delivery_method: delivery_method,
        address: address,
        address_detail: addressOther,
      });
      console.log('_deliveryPay>>', data);
      if (data.success_yn) {
        setDeliveryPrice(data.delivery_price);
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
      console.log('_deliveryPay>>', error);
    }
  };

  const _addressOther = (addressothertext) => {
    setAddressOther(addressothertext);
  };

  const _like = async (car_no, like_yn) => {
    try {
      let data = await AppServer.CARDEALER_API_00032({
        car_no: car_no,
        like_type: 'LT_001',
        like_yn: like_yn,
      });
      console.log('_like>>>>>', data);
      if (data.success_yn) {
        _getDetail();
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
      console.log('_like>>>>>>>', error);
    }
  };

  const _getDetail = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00022({
        car_no: car_no,
        car_user_type: car_user_type,
      });
      console.log('_getDetail>>>', data);
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
      console.log('_getDetail>>>', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _getDetail({ car_no: car_no, car_user_type: car_user_type });
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
          <Text style={{ ...styles.headercenter }}>
            {data.dealer_data.car_number}
          </Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            {data.dealer_data.car_img_arr.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setIsvisible1({ open: true, image: item });
                  }}
                  delayPressIn={0}
                  style={{ flex: 1 }}
                  activeOpacity={0.5}
                >
                  <Image
                    resizeMode={'cover'}
                    style={{ width: '100%', height: '100%', flex: 1 }}
                    source={{ uri: item }}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      right: 5,
                      top: 5,
                    }}
                  >
                    <View
                      style={{
                        ...styles.swipetop,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text style={{ ...styles.refund }}>3일내 환불</Text>
                    </View>
                    <View
                      style={{
                        ...styles.swipetop,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: scale(4),
                      }}
                    >
                      <Text style={{ ...styles.refund }}> 홈서비스 </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      ...styles.swipebottom,
                      position: 'absolute',
                      bottom: 0,
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ ...styles.price }}>
                      {data.dealer_data.car_price
                        .substring(data.dealer_data.car_price.length - 4, 0)
                        .replace(regexp, ',')}
                      만원
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </Swiper>

          <View
            style={{
              backgroundColor: '#ffffff',
              paddingHorizontal: scale(15),
              paddingTop: scale(10),
              paddingBottom: scale(15),
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text style={{ ...styles.carkinds }}>
                  {data.dealer_data.car_nm}
                </Text>
                <View style={{ flexDirection: 'row', marginTop: scale(4) }}>
                  <Text style={{ ...styles.subcarkinds }}>
                    {moment(data.dealer_data.confirm_dt * 1000).format(
                      'YYYY.MM.DD',
                    )}
                  </Text>
                  <Text style={{ ...styles.subcarkinds, marginLeft: scale(4) }}>
                    실매물 조회 완료
                  </Text>
                  <Text
                    style={{
                      ...styles.subcarkinds,
                      marginHorizontal: scale(2),
                    }}
                  >
                    {' '}
                    ·{' '}
                  </Text>
                  <Text style={{ ...styles.subcarkinds }}>{sido}</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity
                  onPress={() => {
                    _like(data.dealer_data.car_no, !data.dealer_data.like_yn);
                  }}
                  delayPressIn={0}
                >
                  {data.dealer_data.like_yn ? (
                    <Image
                      style={{ ...styles.like }}
                      source={require('../../../images/likes_on.png')}
                    />
                  ) : (
                    <Image
                      style={{ ...styles.like }}
                      source={require('../../../images/likes_off.png')}
                    />
                  )}
                </TouchableOpacity>

                <Text style={{ ...styles.peoplecount, marginTop: scale(5) }}>
                  {moment(data.dealer_data.reg_dt * 1000).format('YYYY.MM.DD')}{' '}
                  / {data.dealer_data.like_cnt}명 찜
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: scale(15),
                alignItems: 'center',
              }}
            >
              <Text style={{ ...styles.average }}>평균 시세</Text>
              <Text style={{ ...styles.averageprice, marginLeft: scale(30) }}>
                {data.dealer_data.avg_price_low
                  .substring(data.dealer_data.avg_price_low.length - 4, 0)
                  .replace(regexp, ',')}
                만원 ~{' '}
                {data.dealer_data.avg_price_high
                  .substring(data.dealer_data.avg_price_high.length - 4, 0)
                  .replace(regexp, ',')}
                만원
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <View
              style={{
                ...styles.sameview,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: scale(36.5),
                paddingVertical: scale(20),
                marginTop: scale(20),
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CarPerformanceCheck', {
                    car_no: car_no,
                    car_user_type: car_user_type,
                  });
                }}
                delayPressIn={0}
                style={{ alignItems: 'center' }}
              >
                <Image
                  style={{ ...styles.tripple }}
                  source={require('../../../images/performance_120.png')}
                />
                <Text style={{ ...styles.trippletext, marginTop: scale(5) }}>
                  성능점검
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('InsuranceHistory', {
                    car_no: car_no,
                    car_user_type: car_user_type,
                    car_nm: data.dealer_data.car_nm,
                    year: data.dealer_data.vehicle_year,
                  });
                }}
                delayPressIn={0}
                style={{ alignItems: 'center' }}
              >
                <Image
                  style={{ ...styles.tripple }}
                  source={require('../../../images/insurance_120.png')}
                />
                <Text style={{ ...styles.trippletext, marginTop: scale(5) }}>
                  보험이력
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AllBuyPay', {
                    car_no: car_no,
                    car_user_type: car_user_type,
                  });
                }}
                delayPressIn={0}
                style={{ alignItems: 'center' }}
              >
                <Image
                  style={{ ...styles.tripple }}
                  source={require('../../../images/reckoning_120.png')}
                />
                <Text style={{ ...styles.trippletext, marginTop: scale(5) }}>
                  총비용 계산기
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: scale(15),
              }}
            >
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.twice,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ ...styles.twicetext }}>보험료 계산</Text>
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.twice,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ ...styles.twicetext }}>할부한도 조회</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.sameview,
                height: scale(58.8),
                marginTop: scale(20),
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  drop ? setDrop(false) : setDrop(true);
                }}
                delayPressIn={0}
                style={{
                  width: scale(330),
                  backgroundColor: '#ffffff',
                  height: scale(58.8),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: scale(15),
                }}
              >
                <Text style={{ ...styles.anotherviewtitle }}>
                  배송료 계산하기
                </Text>
                <Image
                  style={{ ...styles.moreless }}
                  source={
                    drop
                      ? require('../../../images/see_less_icon_88.png')
                      : require('../../../images/see_more_icon_88.png')
                  }
                />
              </TouchableOpacity>
            </View>
            {drop ? (
              <View
                style={{
                  ...styles.sameview,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  height: scale(214),
                  paddingHorizontal: scale(15),
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>
                    {data.delivery_info[0].code_desc}
                  </Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    1Km {data.delivery_info[0].delivery_price}원
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: scale(20),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>
                    {data.delivery_info[1].code_desc}
                  </Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    1Km{' '}
                    {data.delivery_info[1].delivery_price
                      .toString()
                      .replace(regexp, ',')}
                    원
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>차고지 주소</Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    {data.dealer_data.address}, {data.dealer_info.store_nm}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>
                    차량 도착 주소
                  </Text>
                  <View
                    style={{
                      ...styles.searchaddress,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <TextInput
                      editable={false}
                      style={{
                        ...styles.searchaddressinput,
                        width: scale(161),
                        paddingLeft: scale(6),
                        paddingBottom: 0,
                        paddingTop: 0,
                      }}
                      placeholder={'주소를 입력하세요.'}
                      placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
                      value={address}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setIsvisible2(true);
                      }}
                      delayPressIn={0}
                      style={{
                        width: scale(59),
                        height: scale(25),
                        backgroundColor: '#bbbbbb',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ ...styles.searchtext }}>주소검색</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    ...styles.searchaddress,
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                  }}
                >
                  <TextInput
                    style={{
                      ...styles.searchaddressinput,
                      width: scale(161),
                      paddingLeft: scale(6),
                      paddingBottom: 0,
                      paddingTop: 0,
                    }}
                    placeholder={'나머지 주소 입력'}
                    placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
                    value={addressOther}
                    onChangeText={(text) => {
                      _addressOther(text);
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: scale(15),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>배달 방법</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: scale(220),
                    }}
                  >
                    {data.delivery_info.map((item, index) => {
                      return (
                        <TouchableOpacity
                          disabled={address && addressOther ? false : true}
                          onPress={() => {
                            setSelectDe({
                              desc: item.code_desc,
                              method: item.code_id,
                            });
                            _deliveryPay(item.code_id);
                          }}
                          key={index}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          delayPressIn={0}
                        >
                          {selectDe.desc === item.code_desc ? (
                            <Image
                              style={{
                                ...styles.checkicon,
                                marginRight: scale(2),
                              }}
                              source={require('../../../images/check_on_60.png')}
                            />
                          ) : (
                            <Image
                              style={{
                                ...styles.checkicon,
                                marginRight: scale(2),
                              }}
                              source={require('../../../images/check_off_60.png')}
                            />
                          )}

                          <Text style={{ ...styles.deliverytext }}>
                            {item.code_desc}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: scale(20),
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                      style={{
                        ...styles.deliveryprice,
                        marginRight: scale(10),
                      }}
                    >
                      배송료
                    </Text>
                    <Text style={{ ...styles.caution }}>
                      ※실제 금액과 차이가 있을 수 있습니다.
                    </Text>
                  </View>
                  <Text style={{ ...styles.totalprice }}>
                    {deliveryPrice
                      .substring(deliveryPrice.length - 2, 0)
                      .replace(regexp, ',')}
                    원
                  </Text>
                </View>
              </View>
            ) : null}
            <View
              style={{
                ...styles.sameview,
                marginTop: scale(20),
                paddingHorizontal: scale(15),
                paddingVertical: scale(20),
              }}
            >
              <Text style={{ ...styles.anotherviewtitle }}>기본 정보</Text>
              <View style={{ marginTop: scale(7) }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>연식 (연형)</Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    {data.dealer_data.vehicle_year}년
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>연료 / 변속기</Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    {data.dealer_data.fuel_txt} /{' '}
                    {data.dealer_data.transmission_txt}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>차종 / 배기량</Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    {data.dealer_data.car_type_txt} /{' '}
                    {data.dealer_data.displacement.replace(regexp, ',')}cc
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: scale(7),
                  }}
                >
                  <Text style={{ ...styles.baseinfotitle }}>차량위치</Text>
                  <Text style={{ ...styles.baseinfodesc }}>
                    {data.dealer_data.address}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                ...styles.sameview,
                height: scale(189.8),
                marginTop: scale(20),
                paddingVertical: scale(20),
                //paddingHorizontal: scale(15),
              }}
            >
              <Text
                style={{ ...styles.anotherviewtitle, marginLeft: scale(15) }}
              >
                주요 옵션
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  //justifyContent: 'space-between',
                }}
              >
                {data.option_list.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        ...styles.selectbox,
                        backgroundColor: item.select_yn ? '#459bfe' : '#ffffff',
                        marginLeft: scale(15),
                      }}
                    >
                      <Text
                        style={{
                          ...styles.selectboxtext,
                          color: item.select_yn ? '#ffffff' : '#999999',
                        }}
                      >
                        {item.option_nm}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
            <View
              style={{
                ...styles.sameview,
                marginTop: scale(20),
                paddingHorizontal: scale(15),
                paddingVertical: scale(20),
              }}
            >
              <Text style={{ ...styles.anotherviewtitle }}>A/S 정보</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: scale(15),
                }}
              >
                <Text style={{ ...styles.baseinfotitle }}>제조사보증</Text>
                <Text style={{ ...styles.baseinfodesc }}>
                  {data.dealer_data.guarantee_yn_txt}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: scale(7),
                }}
              >
                <Text style={{ ...styles.baseinfotitle }}>딜러보증</Text>
                <Text style={{ ...styles.baseinfodesc, color: '#459bfe' }}>
                  2,000km / 1개월
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: scale(7),
                }}
              >
                <Text style={{ ...styles.baseinfotitle }}>배달의딜러보증</Text>
                <Text style={{ ...styles.baseinfodesc, color: '#459bfe' }}>
                  3,000km / 2개월
                </Text>
              </View>
            </View>
            <View
              style={{
                ...styles.sameview,
                paddingHorizontal: scale(15),
                paddingVertical: scale(20),
                marginTop: scale(20),
              }}
            >
              <View
                style={{
                  borderStyle: 'solid',
                  borderBottomWidth: 0.3,
                  borderColor: '#707070',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DealerInfo', {
                      dealer_no: data.dealer_info.dealer_no,
                    });
                  }}
                  delayPressIn={0}
                >
                  <Image
                    style={{ ...styles.profile }}
                    source={{ uri: data.dealer_info.dealer_img }}
                  />
                </TouchableOpacity>
                <Text style={{ ...styles.name, marginTop: scale(7) }}>
                  {data.dealer_info.dealer_nm} 인증딜러
                </Text>
                {_star()}
                <Text
                  style={{
                    ...styles.score,
                    marginTop: scale(4),
                    marginBottom: scale(20),
                  }}
                >
                  {data.dealer_info.review_point}점 / 후기{' '}
                  {data.dealer_info.review_cnt}
                </Text>
              </View>
              <Text style={{ ...styles.introduce, marginTop: scale(20) }}>
                {data.dealer_info.dealer_desc}
              </Text>
            </View>
            <NaverMapView
              style={{
                width: scale(330),
                height: scale(160),
                marginTop: scale(20),
              }}
              showsMyLocationButton={false}
              zoomControl={false}
              scaleBar={false}
              center={{
                ...{
                  latitude: data.dealer_data.latitude,
                  longitude: data.dealer_data.longitude,
                },
                zoom: 15,
              }}
            >
              <Marker
                coordinate={{
                  latitude: data.dealer_data.latitude,
                  longitude: data.dealer_data.longitude,
                }}
                onClick={() => console.warn('onClick! p0')}
              />
            </NaverMapView>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: scale(20),
              }}
            >
              <Text style={{ ...styles.errortext }}>
                배달의 딜러는 실거래 및 정보에 대한 모든 책임이 판매자에게
                있습니다.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setIsvisible3(true);
                }}
                delayPressIn={0}
                style={{
                  width: scale(59),
                  height: scale(25.5),
                  backgroundColor: '#bbbbbb',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ ...styles.reporttext }}>신고하기</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: scale(25),
                marginBottom: Platform.OS === 'ios' ? 0 : scale(25),
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Chat');
                }}
                delayPressIn={0}
                style={{
                  ...styles.yellowbutton,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{ ...styles.yellowbuttonicon }}
                  source={require('../../../images/consult_ic_160.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${data.dealer_info.dealer_phone}`);
                }}
                delayPressIn={0}
                style={{
                  ...styles.yellowbutton,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{ ...styles.yellowbuttonicon }}
                  source={require('../../../images/call_ic_160.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setIsvisible(true);
                }}
                delayPressIn={0}
                style={{
                  width: scale(200),
                  height: scale(40),
                  borderRadius: 10,
                  backgroundColor: '#001740',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ ...styles.ordertext }}>주문하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Modal
          isVisible={isvisible}
          style={{ alignItems: 'center' }}
          useNativeDriver={true}
          onBackButtonPress={() => {
            setIsvisible(false);
          }}
          onBackdropPress={() => {
            setIsvisible(false);
          }}
        >
          <View style={{ ...styles.modal }}>
            <TouchableOpacity
              onPress={() => {
                setIsvisible(false);
                navigation.navigate('BuyCash');
              }}
              delayPressIn={0}
              style={{
                paddingVertical: scale(16.2),
                paddingHorizontal: scale(20),
                borderStyle: 'solid',
                borderBottomWidth: 0.3,
                borderColor: 'rgba(112, 112, 112, 0.5)',
              }}
            >
              <Text style={{ ...styles.modaltext }}>현금구매</Text>
            </TouchableOpacity>
            <TouchableOpacity
              delayPressIn={0}
              style={{
                paddingVertical: scale(16.2),
                paddingHorizontal: scale(20),
                borderStyle: 'solid',
                borderBottomWidth: 0.3,
                borderColor: 'rgba(112, 112, 112, 0.5)',
              }}
            >
              <Text style={{ ...styles.modaltext }}>할부구매</Text>
              <Text style={{ ...styles.modalsubtext }}>
                ※ 이미 할부 승인 고객님이시라면 현금구매로 진행해주세요.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              delayPressIn={0}
              style={{
                paddingVertical: scale(16.2),
                paddingHorizontal: scale(20),
                borderStyle: 'solid',
                borderBottomWidth: 0.3,
                borderColor: 'rgba(112, 112, 112, 0.5)',
              }}
            >
              <Text style={{ ...styles.modaltext }}>리스구매</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          isVisible={isvisible1.open}
          backdropOpacity={0.8}
          useNativeDriver={true}
          style={{ margin: 0 }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsvisible1({ open: false, image: '' });
            }}
            delayPressIn={0}
            hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
            style={{
              position: 'absolute',
              top: 50,
              right: 20,
            }}
          >
            <Image
              style={{ width: scale(22), height: scale(22) }}
              source={require('../../../images/close_icon_wh_88.png')}
            />
          </TouchableOpacity>
          <View>
            <Image
              resizeMode="contain"
              style={{ width: '100%', height: scale(270) }}
              source={{ uri: isvisible1.image }}
            />
            <Text style={{ ...styles.modalcardetail, marginLeft: scale(15) }}>
              {data.dealer_data.img_desc}
            </Text>
          </View>
        </Modal>
      </SafeAreaView>
      <Modal
        isVisible={isvisible2}
        useNativeDriver={true}
        onBackButtonPress={() => setIsvisible2(false)}
        onBackdropPress={() => setIsvisible2(false)}
      >
        <View style={{ height: '80%', width: '100%' }}>
          <Postcode
            style={{ flex: 1 }}
            jsOptions={{ animated: true }}
            onSelected={(data) => {
              setAddress(data.address);
              setIsvisible2(false);
            }}
          />
        </View>
      </Modal>
      <Modal
        isVisible={isvisible3}
        style={{ alignItems: 'center' }}
        useNativeDriver={true}
        onBackButtonPress={() => setIsvisible3(false)}
        onBackdropPress={() => setIsvisible3(false)}
      >
        <View
          style={{
            ...styles.modalbox,
            paddingHorizontal: scale(20),
            paddingVertical: scale(16.2),
          }}
        >
          <Text style={{ ...styles.modaltext }}>
            차량에 대한 신고 사유를 입력해주세요.
          </Text>
          <TextInput
            multiline={true}
            style={{
              ...styles.modalinput,
              textAlignVertical: 'top',
              marginTop: scale(16.2),
            }}
            placeholder={'직접입력'}
            placeholderTextColor={'rgba(29, 29, 29, 0.3)'}
            value={reportDesc}
            onChangeText={(text) => {
              _report(text);
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            _reportPost();
          }}
          style={{
            ...styles.modalbutton,
            paddingVertical: scale(10),
          }}
          delayPressIn={0}
        >
          <Text style={{ ...styles.modalbuttontext }}>확인</Text>
        </TouchableOpacity>
      </Modal>
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
  swipetop: {
    width: scale(60),
    height: scale(20),
    borderRadius: 25,
    backgroundColor: '#ffd619',
  },
  swipebottom: {
    width: scale(90),
    height: scale(30),
    backgroundColor: '#001740',
  },
  refund: {
    fontFamily: 'NotoSans-Bold',
    fontSize: scale(9),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#001740',
  },
  price: {
    fontFamily: 'NotoSans-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  carkinds: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  subcarkinds: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: -0.3,
    textAlign: 'left',
    color: '#999999',
  },
  like: {
    width: scale(24),
    height: scale(24),
  },
  peoplecount: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#bebebe',
  },
  average: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: -0.45,
    textAlign: 'left',
    color: '#000000',
  },
  averageprice: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: -0.45,
    textAlign: 'left',
    color: '#459bfe',
  },
  tripple: {
    width: scale(30),
    height: scale(30),
  },
  trippletext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: -0.36,
    textAlign: 'left',
    color: '#000000',
  },
  twice: {
    width: scale(160),
    height: scale(28),
    borderRadius: 5,
    backgroundColor: '#459bfe',
  },
  twicetext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.33,
    textAlign: 'center',
    color: '#ffffff',
  },
  moreless: {
    width: scale(22),
    height: scale(22),
  },
  baseinfotitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#999999',
  },
  baseinfodesc: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#000000',
  },
  searchaddress: {
    width: scale(220),
    height: scale(25),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  searchaddressinput: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  spreadaddress: {
    width: scale(220),
    height: scale(25),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  checkicon: {
    width: scale(15),
    height: scale(15),
  },
  deliveryprice: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#999999',
  },
  caution: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#bbbbbb',
  },
  totalprice: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#000000',
  },
  anotherviewtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  selectbox: {
    width: scale(90),
    height: scale(30),
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#b5b5b5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(14),
  },
  selectboxnull: {
    width: scale(90),
    height: scale(30),
  },
  selectboxtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
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
  profile: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  star: {
    width: scale(24),
    height: scale(24),
  },
  score: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  introduce: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  errortext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#b2b2b2',
  },
  reporttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  yellowbutton: {
    width: scale(60),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: '#ffd619',
  },
  yellowbuttonicon: {
    width: scale(40),
    height: scale(40),
  },
  ordertext: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  modal: {
    width: scale(280),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  modaltext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  modalsubtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ff0000',
  },
  modalcardetail: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  searchtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  deliverytext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  modalbox: {
    width: scale(280),
    backgroundColor: '#ffffff',
  },
  modaltext1: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  modalbutton: {
    width: scale(280),
    backgroundColor: '#459bfe',
  },
  modalbuttontext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  modalinput: {
    height: scale(83.8),
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
});
