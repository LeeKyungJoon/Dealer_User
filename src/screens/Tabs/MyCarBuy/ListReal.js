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

export default function ListReal({ route, navigation }) {
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
        <ScrollView contentContainerStyle={{ paddingBottom: scale(15) }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: scale(15),
              backgroundColor: '#f9f9f9',
            }}
          >
            <View style={{ marginTop: scale(15) }}>
              <TouchableOpacity onPress={() => {}} delayPressIn={0}>
                <Text style={{ ...styles.real, marginBottom: scale(10) }}>
                  #리얼 후기
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
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
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
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
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
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
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
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
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
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
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
    backgroundColor: '#f9f9f9',
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
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: 'right',
    color: '#459bfe',
  },
});
