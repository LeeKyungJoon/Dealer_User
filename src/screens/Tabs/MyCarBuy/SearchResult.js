import React, { useState } from 'react';
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

const Width = Dimensions.get('window').width;

export default function SearchCar({ route, navigation }) {
  const [likeCheck, setLikeCheck] = useState(false);
  const [premiumCheck, setPremiumCheck] = useState(false);

  return (
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
                #제네시스
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
                premiumCheck ? setPremiumCheck(false) : setPremiumCheck(true);
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
