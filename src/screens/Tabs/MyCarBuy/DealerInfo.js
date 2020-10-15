import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import scale from '../../../common/Scale';
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';

const Width = Dimensions.get('window').width;

export default function AllBuyPay({ route, navigation }) {
  return (
    <>
      <Header
        backgroundColor={'#ffffff'}
        barStyle="dark-content"
        statusBarProps={{
          translucent: true,
          backgroundColor: '#ffffff',
        }}
        containerStyle={{
          borderBottomWidth: 2,
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
          <Text style={{ ...styles.headercenter }}>홍길동 인증딜러</Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ ...styles.topview }}>
            <Image
              style={{ width: '100%', height: scale(200) }}
              source={require('../../../images/shutterstock_493593703.png')}
            />
            <View style={{ padding: scale(15) }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text style={{ ...styles.dealername }}>홍길동 인증딜러</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: scale(2),
                    }}
                  >
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
                    <Text style={{ ...styles.review, marginLeft: scale(8) }}>
                      4점 / 후기 55
                    </Text>
                  </View>
                  <Text style={{ ...styles.smalltext, marginTop: scale(3) }}>
                    경력 10년차
                  </Text>
                </View>

                <Image
                  style={{ ...styles.compelete }}
                  source={require('../../../images/stamp_2_ic_320.png')}
                />
              </View>
              <View style={{ marginTop: -scale(10) }}>
                <Text
                  style={{
                    ...styles.smalltext,
                    marginTop: scale(1),
                    marginBottom: scale(1),
                  }}
                >
                  경기 · 국민차매매단지(부천점) · 한모터스
                </Text>
                <Text style={{ ...styles.smalltext }}>
                  판매중 201 · 판매완료 54
                </Text>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <View
              style={{
                ...styles.sameview,
                marginTop: scale(20),
                paddingHorizontal: scale(15),
                paddingBottom: scale(37.8),
                paddingTop: scale(20),
              }}
            >
              <Text style={{ ...styles.desc }}>
                안녕하세요. 배달의 딜러 우수 인증딜러 홍길동입니다.{'\n'}우수
                인증딜러는 배달의 딜러 내에 약 5000명 딜러종사자 중 배달의
                딜러에서 인증한 50명에 선정된 우수 딜러입니다.{'\n'}
                {'\n'}어떤 차량을 선택하는지도 중요하지만 어떤 딜러와 인연이
                될지 선택하는 것이 더욱 중요합니다. 단 한번의 계약으로 평생의
                카매니저가 되어드리겠습니다. ^^{'\n'}
                {'\n'}말뿐이 아닌 행동으로 보여드리고{'\n'}믿음으로 보답하는
                {'\n'}홍 길 동이 되겠습니다.{'\n'}
                {'\n'}
                {'\n'}
                {'\n'}오시는 길{'\n'}-{'>'} 수원시 권선구 권선로 341 오토컬렉션
              </Text>
              <TouchableOpacity
                style={{
                  width: scale(280),
                  height: scale(40),
                  borderRadius: 10,
                  backgroundColor: '#459bfe',
                  justifyContent: 'center',
                  marginHorizontal: scale(5),
                  marginTop: scale(30),
                }}
                delayPressIn={0}
              >
                <Text style={{ ...styles.topbuttontext }}>딜러 연락하기</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.sameview,
                paddingBottom: scale(24.5),
                paddingTop: scale(20),
                paddingHorizontal: scale(15),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ ...styles.text1 }}>거래후기 평점</Text>
                  <View style={{ flexDirection: 'row' }}>
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
                  <Text style={{ ...styles.text1, fontSize: scale(15) }}>
                    4점
                  </Text>
                </View>
                <View
                  style={{
                    width: 0,
                    height: 65,
                    opacity: 0.4,
                    borderStyle: 'solid',
                    borderWidth: 0.5,
                    borderColor: '#707070',
                  }}
                />
                <View
                  style={{
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ ...styles.small }}>친절도</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_off.png')}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ ...styles.small }}>전문성</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_off.png')}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ ...styles.small }}>가격만족도</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_off.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  width: scale(280),
                  height: scale(40),
                  borderRadius: 10,
                  backgroundColor: '#ffffff',
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: '#459bfe',
                  marginTop: scale(20),
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ ...styles.reviewfield }}>후기 남기기</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.sameview,
                marginTop: scale(20),
                paddingHorizontal: scale(15),
              }}
            >
              <View
                style={{
                  paddingVertical: scale(25),

                  borderStyle: 'solid',
                  borderBottomWidth: 0.3,
                  borderColor: 'rgba(112, 112, 112, 0.4)',
                }}
              >
                <Text style={{ ...styles.reviewcount }}>
                  총 55개의 후기가 있습니다
                </Text>
              </View>
              <View
                style={{
                  paddingTop: scale(20),
                  paddingBottom: scale(10),
                  borderStyle: 'solid',
                  borderBottomWidth: 0.3,
                  borderColor: 'rgba(112, 112, 112, 0.4)',
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ ...styles.namecarname }}>김희*님</Text>
                  <View
                    style={{
                      width: 0,
                      height: 16,
                      opacity: 0.4,
                      borderStyle: 'solid',
                      borderWidth: 0.5,
                      borderColor: '#707070',
                      marginHorizontal: scale(5),
                    }}
                  />
                  <Text style={{ ...styles.namecarname }}>
                    현대 더 럭셔리 그랜저
                  </Text>
                </View>
                <Text style={{ ...styles.reviewyear, marginTop: scale(2) }}>
                  2020년 05월 06일
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: scale(15),
                  }}
                >
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...styles.small }}>친절도</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_off.png')}
                      />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...styles.small }}>전문성</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_off.png')}
                      />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...styles.small }}>가격만족도</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_off.png')}
                      />
                    </View>
                  </View>
                </View>
                <Text style={{ ...styles.desc, marginTop: scale(15) }}>
                  딜러분께서 친절하게 설명도 해주시고 쉽게 이해시켜주셔서 너무
                  편리하게 거래하였어요! ㅏㅁ사합니다~!
                </Text>
              </View>
              <View
                style={{
                  paddingTop: scale(20),
                  paddingBottom: scale(10),
                  borderStyle: 'solid',
                  borderBottomWidth: 0.3,
                  borderColor: 'rgba(112, 112, 112, 0.4)',
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ ...styles.namecarname }}>김희*님</Text>
                  <View
                    style={{
                      width: 0,
                      height: 16,
                      opacity: 0.4,
                      borderStyle: 'solid',
                      borderWidth: 0.5,
                      borderColor: '#707070',
                      marginHorizontal: scale(5),
                    }}
                  />
                  <Text style={{ ...styles.namecarname }}>
                    현대 더 럭셔리 그랜저
                  </Text>
                </View>
                <Text style={{ ...styles.reviewyear, marginTop: scale(2) }}>
                  2020년 05월 06일
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: scale(15),
                  }}
                >
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...styles.small }}>친절도</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_off.png')}
                      />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...styles.small }}>전문성</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_off.png')}
                      />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...styles.small }}>가격만족도</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_on.png')}
                      />
                      <Image
                        style={{ ...styles.star1 }}
                        source={require('../../../images/likes_off.png')}
                      />
                    </View>
                  </View>
                </View>
                <Text style={{ ...styles.desc, marginTop: scale(15) }}>
                  딜러분께서 친절하게 설명도 해주시고 쉽게 이해시켜주셔서 너무
                  편리하게 거래하였어요! ㅏㅁ사합니다~!
                </Text>
              </View>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: scale(17),
                }}
              >
                <Text style={{ ...styles.moretext }}>전체보기</Text>
                <Image
                  style={{ ...styles.moreic }}
                  source={require('../../../images/more_ic_72.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.sameview,
                marginTop: scale(20),
                paddingVertical: scale(20),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: scale(15),
                  marginBottom: scale(15),
                }}
              >
                <Text style={{ ...styles.namecarname }}>판매중인 차량</Text>
                <TouchableOpacity delayPressIn={0}>
                  <Text style={{ ...styles.smalltext }}>전체보기 {'>'}</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginLeft: scale(15) }}
              >
                <View style={{ marginRight: scale(10) }}>
                  <Image
                    style={{ ...styles.carimage }}
                    source={require('../../../images/1111.png')}
                  />
                  <Text style={{ ...styles.carname }}>BMW</Text>
                  <Text style={{ ...styles.carpackage }}>528i 풀패키지</Text>
                  <Text style={{ ...styles.carprice }}>4000만원</Text>
                </View>
                <View style={{ marginRight: scale(10) }}>
                  <Image
                    style={{ ...styles.carimage }}
                    source={require('../../../images/1111.png')}
                  />
                  <Text style={{ ...styles.carname }}>BMW</Text>
                  <Text style={{ ...styles.carpackage }}>528i 풀패키지</Text>
                  <Text style={{ ...styles.carprice }}>4000만원</Text>
                </View>
                <View style={{ marginRight: scale(10) }}>
                  <Image
                    style={{ ...styles.carimage }}
                    source={require('../../../images/1111.png')}
                  />
                  <Text style={{ ...styles.carname }}>BMW</Text>
                  <Text style={{ ...styles.carpackage }}>528i 풀패키지</Text>
                  <Text style={{ ...styles.carprice }}>4000만원</Text>
                </View>
                <View style={{ marginRight: scale(10) }}>
                  <Image
                    style={{ ...styles.carimage }}
                    source={require('../../../images/1111.png')}
                  />
                  <Text style={{ ...styles.carname }}>BMW</Text>
                  <Text style={{ ...styles.carpackage }}>528i 풀패키지</Text>
                  <Text style={{ ...styles.carprice }}>4000만원</Text>
                </View>
              </ScrollView>
            </View>
            <Image
              style={{
                width: scale(330),
                height: scale(160),
                marginTop: scale(20),
                marginBottom: scale(25),
              }}
              source={require('../../../images/no_path.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
  topview: {
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
  star: {
    width: scale(24),
    height: scale(24),
  },
  dealername: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),

    fontStyle: 'normal',

    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  review: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  compelete: {
    width: scale(80),
    height: scale(80),
  },
  smalltext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: -0.3,
    textAlign: 'left',
    color: '#999999',
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
  desc: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),

    fontStyle: 'normal',

    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  topbuttontext: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  star1: {
    width: scale(16),
    height: scale(16),
  },
  text1: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  small: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  reviewfield: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#459bfe',
  },
  reviewcount: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  namecarname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  reviewyear: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(9),
    fontStyle: 'normal',
    letterSpacing: -0.27,
    textAlign: 'left',
    color: '#999999',
  },
  moreic: {
    width: scale(18),
    height: scale(18),
  },
  moretext: {
    fontFamily: 'Jalnan',
    fontSize: scale(16),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#999999',
  },
  carimage: {
    width: scale(125),
    height: scale(100),
  },
  carname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  carpackage: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  carprice: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#459bfe',
  },
});
