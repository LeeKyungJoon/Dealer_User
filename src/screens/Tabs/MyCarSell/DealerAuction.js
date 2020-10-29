import React, { useState } from 'react';
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
import { slice } from 'lodash';

export default function DealerAuction({ route, navigation }) {
  const [dealerList, setDealerList] = useState([
    {
      avator: require('../../../images/dealer_icon_160.png'),
      percent: '60%',
      price: '650만원',
      color: '#001740',
    },
    {
      avator: require('../../../images/shutterstock_682551649.png'),
      percent: '55%',
      price: '600만원',
      color: '#d42f23',
    },
    {
      avator: require('../../../images/dealer_icon_160.png'),
      percent: '45%',
      price: '400만원',
      color: '#d42f23',
    },
    {
      avator: require('../../../images/dealer_icon_160.png'),
      percent: '35%',
      price: '200만원',
      color: '#001740',
    },
    {
      avator: require('../../../images/dealer_icon_160.png'),
      percent: '35%',
      price: '200만원',
      color: '#001740',
    },
    {
      avator: require('../../../images/dealer_icon_160.png'),
      percent: '30%',
      price: '150만원',
      color: '#001740',
    },
  ]);
  const [isvisible, setIsvisible] = useState(false);

  return (
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
          <Text style={{ ...styles.title }}>경매 진행 내역</Text>
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
                backgroundColor: '#ffffff',
                paddingTop: scale(25),
                paddingBottom: scale(30),
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ ...styles.smallbox, justifyContent: 'center' }}>
                  <Text style={{ ...styles.wait }}>대기중</Text>
                </View>
                <Text style={{ ...styles.subtitle, marginLeft: scale(10) }}>
                  <Text style={{ color: '#459bfe' }}>6</Text>명 경매 참여중
                </Text>
              </View>
              <Text style={{ ...styles.alerttext, marginBottom: scale(2.8) }}>
                막대그래프 색상 : 파란색 - 일반견적 / 빨간색 - 감가없는견적
              </Text>
              {dealerList.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setIsvisible(true);
                    }}
                    delayPressIn={0}
                    key={index}
                    style={{
                      marginTop: scale(10),
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Image style={{ ...styles.avator }} source={item.avator} />
                    <View
                      style={{
                        width: item.percent,
                        height: scale(10),
                        backgroundColor: item.color,
                        marginLeft: scale(7),
                      }}
                    />
                    <Text style={{ ...styles.price, marginLeft: scale(10) }}>
                      {item.price}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(15),
              }}
            >
              <Text style={{ ...styles.topselect }}>최고가</Text>
              <Text style={{ ...styles.topprice, marginLeft: scale(10) }}>
                650만원
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(10),
              }}
            >
              <Text style={{ ...styles.topselect }}>선택가</Text>
              <Text style={{ ...styles.topprice, marginLeft: scale(10) }}>
                -
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(50.5),
              }}
            >
              <Text style={{ ...styles.selectdealer }}>내가 선택한 딜러</Text>
              <Text
                style={{
                  ...styles.result,
                  color: 'rgba(0, 0, 0, 0.3)',
                  marginLeft: scale(10),
                }}
              >
                (위의 딜러 프로필을 눌러 선택하세요)
              </Text>
            </View>
          </View>
          <TouchableOpacity
            delayPressIn={0}
            style={{
              ...styles.button,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: scale(27.2),
              backgroundColor: 'rgba(0, 23, 64, 0.3)',
              alignSelf: 'center',
              marginBottom: Platform.OS === 'ios' ? 0 : scale(30),
            }}
          >
            <Text style={{ ...styles.buttontext }}>딜러 확정하기</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <Modal
        isVisible={isvisible}
        style={{ margin: 0, justifyContent: 'flex-end' }}
        useNativeDriver={true}
      >
        <TouchableOpacity
          onPress={() => {
            setIsvisible(false);
          }}
          delayPressIn={0}
        >
          <Image
            style={{
              width: scale(22),
              height: scale(22),
              alignSelf: 'flex-end',
              marginBottom: scale(15),
              marginRight: scale(15),
            }}
            source={require('../../../images/close_icon_wh_88.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            ...styles.modalview,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{
                width: scale(50),
                height: scale(50),
                marginTop: scale(50),
              }}
              source={require('../../../images/shutterstock_682551649.png')}
            />
            <Text style={{ ...styles.modalname }}>홍길동 딜러</Text>
            <View style={{ marginTop: scale(30) }}>
              <Text
                style={{ ...styles.modalcarnumber, fontFamily: 'Roboto-Bold' }}
              >
                12가3456
              </Text>
              <Text
                style={{
                  ...styles.modalcarnumber,
                  fontFamily: 'Roboto-Regular',
                }}
              >
                차량에 대한 제 견적은
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(20),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderBottomColor: '#ffffff',
                  borderBottomWidth: 1,
                  width: scale(120),
                  justifyContent: 'flex-end',
                }}
              >
                <Text style={{ ...styles.modalprice }}>2020</Text>
                <Text style={{ ...styles.modalprice, marginLeft: scale(17.8) }}>
                  만원
                </Text>
              </View>
              <Text style={{ ...styles.modalprice1, marginLeft: scale(2) }}>
                입니다.
              </Text>
            </View>
            <Text style={{ ...styles.modalalert, marginTop: scale(20) }}>
              (견적실수, 찔러보기식의 낮은견적 주의)
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: scale(30),
            }}
          >
            <TouchableOpacity
              style={{ ...styles.yellow, alignItems: 'center' }}
              delayPressIn={0}
            >
              <Image
                style={{ ...styles.yellowicon }}
                source={require('../../../images/consult_ic_160.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.yellow,
                alignItems: 'center',
                marginHorizontal: scale(5),
              }}
              delayPressIn={0}
            >
              <Image
                style={{ ...styles.yellowicon }}
                source={require('../../../images/call_ic_160.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsvisible(false);
              }}
              delayPressIn={0}
              style={{
                ...styles.button,
                width: scale(200),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#001740',
              }}
            >
              <Text style={{ ...styles.buttontext }}>딜러선택</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
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
  button: {
    width: '100%',
    height: scale(40),
    borderRadius: 10,
  },
  buttontext: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  smallbox: {
    width: scale(88),
    height: scale(20),
    borderRadius: scale(25),
    backgroundColor: '#9e9e9e',
  },
  wait: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  subtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  alerttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(9),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#707070',
    lineHeight: 20,
  },
  avator: {
    width: scale(30),
    height: scale(30),
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  topselect: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  topprice: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  selectdealer: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  result: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(12),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
  modalview: {
    width: '100%',
    height: scale(409.5),
    backgroundColor: '#459bfe',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  modalname: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  modalcarnumber: {
    fontSize: scale(17),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  modalprice: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
    textAlign: 'right',
  },
  modalprice1: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  modalalert: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  yellow: {
    width: scale(60),
    height: scale(40),
    borderRadius: scale(10),
    backgroundColor: '#ffd619',
  },
  yellowicon: {
    width: scale(40),
    height: scale(40),
  },
});
