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
  ImageBackground,
} from 'react-native';

export default function List({ route, navigation }) {
  const [premiumCheck, setPremiumCheck] = useState(false);
  const [likeCheck, setLikeCheck] = useState(false);

  return (
    <>
      <Header
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
              style={{ ...styles.alert }}
              source={require('../../../images/back_ic_80.png')}
            />
          </TouchableOpacity>
        }
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
          contentContainerStyle={{ paddingBottom: scale(15) }}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: scale(15),
              backgroundColor: '#f9f9f9',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: scale(12),
                marginTop: scale(15),
              }}
            >
              <Text style={{ ...styles.categorytitle, color: '#459bfe' }}>
                #국산차
              </Text>

              <TouchableOpacity
                onPress={() => {
                  premiumCheck ? setPremiumCheck(false) : setPremiumCheck(true);
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
            <TouchableOpacity
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
                source={require('../../../images/k_7_02.png')}
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
                  <Text style={{ ...styles.price }}>2,000만원</Text>
                </View>
                <Image
                  style={{ ...styles.premark, position: 'absolute' }}
                  source={require('../../../images/premium.png')}
                />
                <TouchableOpacity
                  onPress={() => {
                    likeCheck ? setLikeCheck(false) : setLikeCheck(true);
                  }}
                  delayPressIn={0}
                  style={{ position: 'absolute', right: 5, top: 5 }}
                >
                  {likeCheck ? (
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
                </TouchableOpacity>
              </ImageBackground>

              <Image
                style={{
                  ...styles.avator,
                  position: 'absolute',
                  right: 10,
                  bottom: 50,
                }}
                source={require('../../../images/shutterstock_682551649.png')}
              />
              <View style={{ padding: scale(10) }}>
                <Text style={{ ...styles.carname }}>기아 더뉴 K7</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: scale(3),
                  }}
                >
                  <Text style={{ ...styles.carhistory }}>
                    서울 / 18년 10월 / 8,859km
                  </Text>
                  <Text style={{ ...styles.daypeople }}>5일전 / 30명 찜</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
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
              }}
            >
              <ImageBackground
                style={{ ...styles.carimage }}
                source={require('../../../images/321_373244444.png')}
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
                  <Text style={{ ...styles.price }}>2,000만원</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    likeCheck ? setLikeCheck(false) : setLikeCheck(true);
                  }}
                  delayPressIn={0}
                  style={{ position: 'absolute', right: 5, top: 5 }}
                >
                  {likeCheck ? (
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
                </TouchableOpacity>
              </ImageBackground>

              <Image
                style={{
                  ...styles.avator,
                  position: 'absolute',
                  right: 10,
                  bottom: 50,
                }}
                source={require('../../../images/shutterstock_682551649.png')}
              />
              <View style={{ padding: scale(10) }}>
                <Text style={{ ...styles.carname }}>르노삼성 QM6</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: scale(3),
                  }}
                >
                  <Text style={{ ...styles.carhistory }}>
                    서울 / 18년 10월 / 8,859km
                  </Text>
                  <Text style={{ ...styles.daypeople }}>5일전 / 30명 찜</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
