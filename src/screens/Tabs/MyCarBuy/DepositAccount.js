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
import Modal from 'react-native-modal';
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';

export default function DepositAccount({ route, navigation }) {
  let regexp = /\B(?=(\d{3})+(?!\d))/g;
  const { trade_no, car_no, car_user_type } = route.params;
  const [data, setData] = useState(null);
  const [data1, setData1] = useState({
    bank_nm: '',
    account_number: '',
    account_user: '',
  });
  const [isvisible, setIsvisible] = useState(false);

  const _postDepositCom = async () => {
    try {
      let result = await AppServer.CARDEALER_API_00035({
        trade_no: trade_no,
      });
      console.log('_postDepositCom>>', result);
      if (result.success_yn) {
        setIsvisible(true);
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
      console.log('_postDepositCom>>', error);
    }
  };

  const _postDeposit = async () => {
    let result = await AppServer.CARDEALER_API_00034({
      trade_no: trade_no,
    });
    console.log('_postDeposit>>', result);
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
  };

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
              data1.bank_nm && data1.account_number && data1.account_user
                ? navigation.popToTop()
                : navigation.goBack();
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
        centerComponent={<Text style={{ ...styles.title }}>차량 구매</Text>}
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
                구매비용 확인 후 입금 계좌를 요청해주세요
              </Text>
            </View>
            <View
              style={{
                marginTop: scale(21),
                paddingBottom: scale(20),
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
                  {data.data.delivery_price.replace(regexp, ',')}원
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
                  {data.data.insurance_price.replace(regexp, ',')}원
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
                <Text style={{ ...styles.lefttext }}>이전비용</Text>
                <Text style={{ ...styles.righttext }}>
                  {data.data.transfer_price.toString().replace(regexp, ',')}
                  원(약 {data.data.transfer_rate * 100}%적용)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: scale(21),
              }}
            >
              <View>
                <Text style={{ ...styles.bottomleft }}>총 구매비용</Text>
                <Text style={{ ...styles.lefttext, color: '#459bfe' }}>
                  (보험료, 배송료 제외)
                </Text>
              </View>
              <Text style={{ ...styles.bottomright }}>
                {data.data.total_price.toString().replace(regexp, ',')}원
              </Text>
            </View>
            {data1.bank_nm && data1.account_number && data1.account_user ? (
              <View
                style={{
                  ...styles.bottombox,
                  //paddingHorizontal: scale(29),
                  paddingVertical: scale(10.8),
                  marginTop: scale(20),
                }}
              >
                <Text style={{ ...styles.bottomboxtext }}>
                  {data1.bank_nm} {data1.account_number} 예금주 :{' '}
                  {data1.account_user}
                </Text>
              </View>
            ) : null}
          </View>
        </ScrollView>
        {data1.bank_nm && data1.account_number && data1.account_user ? (
          <TouchableOpacity
            onPress={() => {
              _postDepositCom();
            }}
            delayPressIn={0}
            style={{
              ...styles.bottombutton,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: scale(15),
              alignSelf: 'center',
            }}
          >
            <Text style={{ ...styles.bottombuttontext }}>입금완료</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              _postDeposit();
            }}
            delayPressIn={0}
            style={{
              ...styles.bottombutton,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: scale(15),
              alignSelf: 'center',
            }}
          >
            <Text style={{ ...styles.bottombuttontext }}>입금계좌요청</Text>
          </TouchableOpacity>
        )}
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
              입금완료 요청을 하였습니다. 빠르게 확인 후 문자로
              안내해드리겠습니다.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsvisible(false);
                navigation.popToTop();
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
    backgroundColor: '#459bfe',
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
  lefttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#707070',
  },
  righttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#000000',
  },
  openclose: {
    width: scale(12),
    height: scale(12),
  },
  bottomleft: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#459bfe',
  },
  bottomright: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(25),
    fontStyle: 'normal',
    letterSpacing: -1.5,
    textAlign: 'right',
    color: '#459bfe',
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
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
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
    lineHeight: 18,
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
