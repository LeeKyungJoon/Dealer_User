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
//import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

export default function MyCarSellMain({ route, navigation }) {
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
        //leftComponent={
        //  <TouchableOpacity
        //    style={{ marginRight: scale(5) }}
        //    delayPressIn={0}
        //    hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
        //  >
        //    <Image
        //      style={{ ...styles.alert }}
        //      source={require('../../../images/alert_ic_72.png')}
        //    />
        //  </TouchableOpacity>
        //}
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
        <View style={{ flex: 1 }}>
          <View
            style={{
              paddingBottom: scale(30),
              paddingTop: scale(20),
            }}
          >
            {/*<Swiper
              loop={false}
              height={scale(130)}
              style={{ height: scale(130), flex: 0 }}
              containerStyle={{
                height: scale(130),
                flex: 0,
              }}
              activeDotColor={'#ffbe26'}
              dotColor={'#e9e9e9'}
              paginationStyle={{ bottom: 10 }}
            >
              <Image
                style={{ ...styles.topimage }}
                source={require('../../../images/banner.png')}
              />
              <Image
                style={{ ...styles.topimage }}
                source={require('../../../images/banner.png')}
              />
              <Image
                style={{ ...styles.topimage }}
                source={require('../../../images/banner.png')}
              />
            </Swiper>*/}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DealerAuction');
              }}
              activeOpacity={0.5}
              delayPressIn={0}
            >
              <ImageBackground
                style={{
                  width: scale(330),
                  height: scale(130),
                  alignSelf: 'center',
                  paddingLeft: scale(18),
                  paddingRight: scale(10),
                  paddingVertical: scale(11),
                }}
                source={require('../../../images/456456465465454.png')}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      ...styles.smallbox,
                      backgroundColor: '#459bfe',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ ...styles.text1 }}>승인완료</Text>
                  </View>
                  <Text style={{ ...styles.text2 }}>0명 경매 참여 {'>'}</Text>
                </View>
                <Text style={{ ...styles.text3, marginTop: scale(14) }}>
                  <Text style={{ color: '#459bfe' }}>12가3456</Text> 차량
                  견적요청 완료!
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: scale(10),
                  }}
                >
                  <Text style={{ ...styles.text4 }}>요청차량</Text>
                  <Text style={{ ...styles.text5, marginLeft: scale(15) }}>
                    5시리즈 528i 세단
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: scale(8),
                  }}
                >
                  <Text style={{ ...styles.text4 }}>등록일시</Text>
                  <Text style={{ ...styles.text5, marginLeft: scale(15) }}>
                    2020-04-24 14:17:20
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('QuoteRequest');
              }}
              delayPressIn={0}
              style={{
                ...styles.topbox,
                justifyContent: 'center',
                marginTop: scale(5),
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
                alignSelf: 'center',
              }}
            >
              <Text style={{ ...styles.topboxtext }}>견적 요청하기</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={{
              paddingBottom: scale(15),
              marginTop: scale(5),
            }}
          >
            <View>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  paddingVertical: scale(1),
                  shadowColor: '#a6a6a6',
                  shadowOffset: {
                    width: 0,
                    height: -1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                  elevation: 2.5,
                  borderTopColor: '#e6e6e6',
                  borderTopWidth: 0.5,
                  borderBottomColor: '#e6e6e6',
                  borderBottomWidth: 0.5,
                }}
              >
                <Text
                  style={{
                    ...styles.real,

                    paddingVertical: scale(9.2),
                    paddingHorizontal: scale(15),
                    backgroundColor: '#ffffff',
                  }}
                >
                  #내차팔기 <Text style={{ color: '#1d1d1d' }}>후기 보기</Text>
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: scale(15),
                  marginBottom: scale(15),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  marginTop: scale(5),
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RealReviewDetail');
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
                    borderRadius: 5,
                  }}
                >
                  <ImageBackground
                    style={{
                      ...styles.realcar,
                    }}
                    imageStyle={{
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                    source={require('../../../images/g_703.png')}
                  >
                    <Image
                      style={{
                        ...styles.premark,
                        position: 'absolute',
                      }}
                      source={require('../../../images/premium.png')}
                    />
                  </ImageBackground>
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                      position: 'absolute',
                      right: 4,
                      bottom: 40,
                    }}
                    source={require('../../../images/shutterstock_682551649.png')}
                  />
                  <View
                    style={{
                      paddingHorizontal: scale(4),
                      paddingVertical: scale(7),
                    }}
                  >
                    <Text style={{ ...styles.smallcarname }}>제네시스 G70</Text>
                    <Text style={{ ...styles.review }} numberOfLines={2}>
                      생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때
                      마음이 좀 싱숭생숭 했었습니다. 새 주인을 잘 만나길
                      기도합니다. 제발제발 좋게 써주세요.
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RealReviewDetail');
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
                    marginBottom: scale(20),
                    borderRadius: 5,
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
                    imageStyle={{
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                    source={require('../../../images/g_703.png')}
                  ></ImageBackground>
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                      position: 'absolute',
                      right: 4,
                      bottom: 40,
                    }}
                    source={require('../../../images/shutterstock_682551649.png')}
                  />
                  <View
                    style={{
                      paddingHorizontal: scale(4),
                      paddingVertical: scale(7),
                    }}
                  >
                    <Text style={{ ...styles.smallcarname }}>제네시스 G70</Text>
                    <Text style={{ ...styles.review }} numberOfLines={2}>
                      생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때
                      마음이 좀 싱숭생숭 했었습니다. 새 주인을 잘 만나길
                      기도합니다. 제발제발 좋게 써주세요.
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RealReviewDetail');
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
                    marginBottom: scale(20),
                    borderRadius: 5,
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
                    imageStyle={{
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                    source={require('../../../images/g_703.png')}
                  ></ImageBackground>
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                      position: 'absolute',
                      right: 4,
                      bottom: 40,
                    }}
                    source={require('../../../images/shutterstock_682551649.png')}
                  />
                  <View
                    style={{
                      paddingHorizontal: scale(4),
                      paddingVertical: scale(7),
                    }}
                  >
                    <Text style={{ ...styles.smallcarname }}>제네시스 G70</Text>
                    <Text style={{ ...styles.review }} numberOfLines={2}>
                      생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때
                      마음이 좀 싱숭생숭 했었습니다. 새 주인을 잘 만나길
                      기도합니다. 제발제발 좋게 써주세요.
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
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
  premark: {
    width: scale(59),
    height: scale(59),
  },
  topbox: {
    width: scale(330),
    height: scale(50),
    borderRadius: 10,
    backgroundColor: '#ffbe26',
  },
  topboxtext: {
    fontFamily: 'Jalnan',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  topimage: {
    width: scale(330),
    height: scale(130),
    borderRadius: 10,
    alignSelf: 'center',
  },
  smallbox: {
    width: scale(88),
    height: scale(20),
    borderRadius: scale(25),
  },
  text1: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  text2: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#ffffff',
  },
  text3: {
    fontFamily: 'Jalnan',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  text4: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),

    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#9d9d9d',
  },
  text5: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
});
