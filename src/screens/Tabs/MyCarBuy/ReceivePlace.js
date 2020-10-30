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
} from 'react-native';
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';
import Postcode from 'react-native-daum-postcode';
import Modal from 'react-native-modal';

export default function ReceivePlace({ route, navigation }) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  const { trade_no } = route.params;
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [address, setAddress] = useState('');
  const [address1, setAddress1] = useState('');
  const [select, setSelect] = useState('');
  const [isvisible, setIsvisible] = useState(false);

  const _postChangeCom = async () => {
    try {
      let result = await AppServer.CARDEALER_API_00038({
        trade_no: trade_no,
        change_yn: select === 'change' ? true : false,
        take_over_address_new: address,
        take_over_address_detail_new: address1,
      });
      console.log('_postChangeCom>>', result);
      if (result.success_yn) {
        navigation.navigate('RefundAccount', {
          trade_no: trade_no,
        });
      } else if (
        !result.success_yn &&
        result.msg === '세션이 종료되어 로그인 페이지로 이동합니다.'
      ) {
        await AsyncStorage.clear();
        navigation.reset({
          routes: [{ name: 'Sign' }],
        });
      }
    } catch (error) {
      console.log('_postChangeCom>>', error);
    }
  };

  const _getChangeConfirm = async (add, add1) => {
    try {
      let result = await AppServer.CARDEALER_API_00037({
        trade_no: trade_no,
        take_over_address: data.take_over_address,
        take_over_address_detail: data.take_over_address_detail,
        take_over_address_new: add,
        take_over_address_detail_new: add1,
      });
      console.log('_getChangeConfirm>>>', result);
      if (result.success_yn) {
        setData1(result);
      } else if (
        !result.success_yn &&
        result.msg === '세션이 종료되어 로그인 페이지로 이동합니다.'
      ) {
        await AsyncStorage.clear();
        navigation.reset({
          routes: [{ name: 'Sign' }],
        });
      }
    } catch (error) {
      console.log('_getChangeConfirm>>>', error);
    }
  };

  const _address1 = (address1text) => {
    setAddress1(address1text);
    _getChangeConfirm(address, address1text);
  };

  const _getPlace = async () => {
    try {
      let result = await AppServer.CARDEALER_API_00036({
        trade_no: trade_no,
      });
      console.log('_getPlace>>>', result);
      if (result.success_yn) {
        setData(result);
      } else if (
        !result.success_yn &&
        result.msg === '세션이 종료되어 로그인 페이지로 이동합니다.'
      ) {
        await AsyncStorage.clear();
        navigation.reset({
          routes: [{ name: 'Sign' }],
        });
      }
    } catch (error) {
      console.log('_getPlace>>>', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _getPlace();
    });
    return unsubscribe;
  }, [navigation]);

  return data ? (
    <>
      <Header
        placement="left"
        backgroundColor={'#459bfe'}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: '#459bfe' }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
        }}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ marginLeft: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.back }}
              source={require('../../../images/back_ic_80.png')}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Text style={{ ...styles.title }}>차량 인수 정보 입력</Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView
          style={{ paddingHorizontal: scale(15) }}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(30),
              }}
            >
              <Image
                style={{ ...styles.logoicon }}
                source={require('../../../images/dealer_icon_160.png')}
              />
              <Text style={{ ...styles.logotext, marginLeft: scale(5) }}>
                차량을 인수받을 장소를 입력해주세요
              </Text>
            </View>
            <View
              style={{
                ...styles.sameview,
                paddingLeft: scale(10),
                paddingVertical: scale(25),
                marginTop: scale(28.8),
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setSelect('noChange');
                    setAddress('');
                    setAddress1('');
                  }}
                  delayPressIn={0}
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                  {select === 'noChange' ? (
                    <Image
                      style={{ ...styles.circleicon }}
                      source={require('../../../images/check_on_60.png')}
                    />
                  ) : (
                    <Image
                      style={{ ...styles.circleicon }}
                      source={require('../../../images/check_off_60.png')}
                    />
                  )}

                  <View>
                    <Text style={{ ...styles.subtitle, marginLeft: scale(5) }}>
                      구매 시 입력한 주소
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    ...styles.subdesc,
                    marginLeft: scale(20),
                    marginTop: scale(5),
                  }}
                >
                  {data.take_over_address},{data.take_over_address_detail}
                </Text>
              </View>
              <View style={{ marginTop: scale(40) }}>
                <TouchableOpacity
                  onPress={() => {
                    setSelect('change');
                  }}
                  delayPressIn={0}
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                  {select === 'change' ? (
                    <Image
                      style={{ ...styles.circleicon }}
                      source={require('../../../images/check_on_60.png')}
                    />
                  ) : (
                    <Image
                      style={{ ...styles.circleicon }}
                      source={require('../../../images/check_off_60.png')}
                    />
                  )}

                  <Text style={{ ...styles.subtitle, marginLeft: scale(5) }}>
                    다른 주소 입력 (추가 비용이 발생 할 수 있습니다)
                  </Text>
                </TouchableOpacity>
                <View style={{ marginLeft: scale(20), marginTop: scale(9.5) }}>
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
                        width: scale(211),
                        paddingLeft: scale(6),
                        paddingBottom: 0,
                        paddingTop: 0,
                      }}
                      placeholder={'주소를 입력하세요.'}
                      placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
                      value={address}
                    />
                    <TouchableOpacity
                      disabled={select === 'noChange' ? true : false}
                      onPress={() => {
                        setIsvisible(true);
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
                      <Text style={{ ...styles.searchaddresstext }}>
                        주소검색
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      ...styles.searchaddress,
                      flexDirection: 'row',
                    }}
                  >
                    <TextInput
                      editable={select === 'noChange' ? false : true}
                      style={{
                        ...styles.searchaddressinput,
                        width: scale(270),
                        paddingLeft: scale(6),
                        paddingBottom: 0,
                        paddingTop: 0,
                      }}
                      placeholder={'나머지 주소 입력(없을 시 빈칸)'}
                      placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
                      value={address1}
                      onChangeText={(text) => {
                        _address1(text);
                      }}
                    />
                  </View>
                </View>
              </View>
              {data1?.delivery_price &&
              data1?.change_delivery_price &&
              address ? (
                <View
                  style={{
                    marginTop: scale(15),
                    width: scale(270),
                    marginLeft: scale(20),
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ ...styles.bottomboxtext }}>
                      기존 배송료{' '}
                    </Text>
                    <Text style={{ ...styles.bottomboxtext1 }}>
                      {data1.delivery_price.replace(regexp, ',')}원
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: scale(5),
                    }}
                  >
                    <Text style={{ ...styles.bottomboxtext }}>
                      변경 배송료{' '}
                    </Text>
                    <Text style={{ ...styles.bottomboxtext1 }}>
                      {data1.change_delivery_price.replace(regexp, ',')}원
                    </Text>
                  </View>
                </View>
              ) : null}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              _postChangeCom();
            }}
            disabled={
              select
                ? select === 'noChange'
                  ? false
                  : address
                  ? false
                  : true
                : true
            }
            delayPressIn={0}
            style={{
              ...styles.bottombutton,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: scale(15),
              alignSelf: 'center',
              backgroundColor: select
                ? select === 'noChange'
                  ? '#459bfe'
                  : address
                  ? '#459bfe'
                  : 'rgba(69, 155, 254, 0.3)'
                : 'rgba(69, 155, 254, 0.3)',
            }}
          >
            <Text style={{ ...styles.bottombuttontext }}>다음</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <Modal
        isVisible={isvisible}
        useNativeDriver={true}
        onBackButtonPress={() => setIsvisible(false)}
        onBackdropPress={() => setIsvisible(false)}
      >
        <View style={{ height: '80%', width: '100%' }}>
          <Postcode
            style={{ flex: 1 }}
            jsOptions={{ animated: false }}
            onSelected={(data) => {
              setAddress(data.address);
              _getChangeConfirm(data.address, address1);
              setIsvisible(false);
            }}
          />
        </View>
      </Modal>
    </>
  ) : (
    <SubLoading />
  );
}

const styles = StyleSheet.create({
  back: {
    width: scale(20),
    height: scale(20),
  },
  title: {
    fontFamily: 'Jalnan',
    fontSize: scale(16),
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  bottombutton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
  },
  bottombuttontext: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  logoicon: {
    width: scale(40),
    height: scale(40),
  },
  logotext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
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
  circleicon: {
    width: scale(15),
    height: scale(15),
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#999999',
  },
  subdesc: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  searchaddress: {
    width: scale(270),
    height: scale(25),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  searchaddressinput: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  searchaddresstext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  bottombox: {
    width: scale(330),
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  bottomboxtext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#999999',
  },
  bottomboxtext1: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#000000',
  },
});
