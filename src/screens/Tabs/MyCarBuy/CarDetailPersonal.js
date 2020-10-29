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
import NaverMapView, { Marker } from 'react-native-nmap';

const Width = Dimensions.get('window').width;

export default function CarDetailPersonal({ route, navigation }) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  const [isvisible1, setIsvisible1] = useState({ open: false, image: '' });
  const [isvisible3, setIsvisible3] = useState(false);
  const [isvisible4, setIsvisible4] = useState(false);
  const { car_no, car_user_type, sido } = route.params;
  const [data, setData] = useState(null);
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
            {data.user_data.car_number}
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
            {data.user_data.car_img_arr.map((item, index) => {
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
                      ...styles.swipebottom,
                      position: 'absolute',
                      bottom: 0,
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ ...styles.price }}>
                      {data.user_data.car_price
                        .substring(data.user_data.car_price.length - 4, 0)
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
                  {data.user_data.car_nm}
                </Text>
                <View style={{ flexDirection: 'row', marginTop: scale(4) }}>
                  <Text style={{ ...styles.subcarkinds }}>
                    {moment(data.user_data.confirm_dt * 1000).format(
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
                    _like(data.user_data.car_no, !data.user_data.like_yn);
                  }}
                  delayPressIn={0}
                >
                  {data.user_data.like_yn ? (
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
                  {moment(data.user_data.reg_dt * 1000).format('YYYY.MM.DD')} /{' '}
                  {data.user_data.like_cnt}명 찜
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
                {data.user_data.avg_price_low
                  .substring(data.user_data.avg_price_low.length - 4, 0)
                  .replace(regexp, ',')}
                만원 ~{' '}
                {data.user_data.avg_price_high
                  .substring(data.user_data.avg_price_high.length - 4, 0)
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
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{ ...styles.tripple }}
                  source={require('../../../images/performance_120232323.png')}
                />
                <Text style={{ ...styles.trippletext, marginTop: scale(5) }}>
                  개인거래
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('InsuranceHistory', {
                    car_no: car_no,
                    car_user_type: car_user_type,
                    car_nm: data.user_data.car_nm,
                    year: data.user_data.vehicle_year,
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
                  navigation.navigate('CarPerformancePersonal', {
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
            </View>
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
                    {data.user_data.vehicle_year}년
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
                    {data.user_data.fuel_txt} /{' '}
                    {data.user_data.transmission_txt}
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
                    {data.user_data.car_type_txt} /{' '}
                    {data.user_data.displacement.replace(regexp, ',')}cc
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
                    {data.user_data.address}
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
                <Image
                  style={{ ...styles.profile }}
                  source={{ uri: data.user_data.user_img }}
                />

                <Text
                  style={{
                    ...styles.name,
                    marginTop: scale(7),
                    paddingBottom: scale(20),
                  }}
                >
                  {data.user_data.user_nm}
                </Text>
              </View>
              <Text style={{ ...styles.introduce, marginTop: scale(20) }}>
                {data.user_data.request_desc}
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
                  latitude: data.user_data.latitude,
                  longitude: data.user_data.longitude,
                },
                zoom: 15,
              }}
            >
              <Marker
                coordinate={{
                  latitude: data.user_data.latitude,
                  longitude: data.user_data.longitude,
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
                  setIsvisible4(true);
                }}
                delayPressIn={0}
                style={{
                  ...styles.yellowbutton,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{ ...styles.yellowbuttonicon }}
                  source={require('../../../images/call_ic_160.png')}
                />
                <Text style={{ ...styles.ordertext }}>전화문의</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Modal
          isVisible={isvisible1.open}
          backdropOpacity={0.8}
          useNativeDriver={true}
          style={{ margin: 0 }}
          onBackButtonPress={() => {
            setIsvisible1({ open: false, image: '' });
          }}
          onBackdropPress={() => {
            setIsvisible1({ open: false, image: '' });
          }}
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
              {data.user_data.img_desc}
            </Text>
          </View>
        </Modal>
      </SafeAreaView>
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
      <Modal
        isVisible={isvisible4}
        style={{ alignItems: 'center' }}
        useNativeDriver={true}
      >
        <View
          style={{
            width: scale(280),
            backgroundColor: '#ffffff',
            paddingHorizontal: scale(20),
            paddingVertical: scale(15),
          }}
        >
          <Text style={{ ...styles.text1 }}>
            해당 매물은 개인매물로 배달의 딜러와 무관하오니 거래 시 당사자간
            신중히 검토하시길 바랍니다.
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsvisible4(false);
              Linking.openURL(`tel:${data.user_data.user_phone}`);
            }}
            style={{ alignSelf: 'flex-end' }}
            delayPressIn={0}
          >
            <Text style={{ ...styles.text2, marginTop: scale(20) }}>
              연결하기
            </Text>
          </TouchableOpacity>
        </View>
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
    width: '100%',
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
  modaltext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
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
  modalbox: {
    width: scale(280),
    backgroundColor: '#ffffff',
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
  text1: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  text2: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#459bfe',
  },
});
