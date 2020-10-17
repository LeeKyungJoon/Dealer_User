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
import Rating from 'react-native-rating';
import { Easing } from 'react-native';

export default function ReviewRegist({ route, navigation }) {
  const [buy, setBuy] = useState(['현금', '할부', '리스']);
  const [selectBuy, setSelectBuy] = useState('');
  const [se, setSe] = useState(['남성', '여성']);
  const [selectSe, setSelectSe] = useState('');
  const [age, setAge] = useState(['20대', '30대', '40대', '50대 이상']);
  const [selectAge, setSelectAge] = useState('');
  const [agree, setAgree] = useState(false);

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
        centerComponent={<Text style={{ ...styles.title }}>후기등록</Text>}
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
                함께한 딜러님에 대해 후기를 남겨주세요
              </Text>
            </View>
            <View style={{ marginTop: scale(25) }}>
              <Text style={{ ...styles.subtitle }}>딜러 정보</Text>
              <View
                style={{
                  ...styles.dealerbox,
                  paddingHorizontal: scale(15),
                  paddingVertical: scale(10),
                  marginTop: scale(5),
                }}
              >
                <Text style={{ ...styles.subtext }}>홍길동</Text>
              </View>
              <View
                style={{
                  ...styles.dealerbox,
                  paddingHorizontal: scale(15),
                  paddingVertical: scale(10),
                  marginTop: scale(5),
                }}
              >
                <Text style={{ ...styles.subtext }}>한모터스</Text>
              </View>
            </View>
            <View style={{ marginTop: scale(25) }}>
              <Text style={{ ...styles.subtitle }}>딜러 평가</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: scale(10),
                }}
              >
                <Text style={{ ...styles.subtext }}>친절도</Text>
                <Rating
                  onChange={(rating) => console.log(rating)}
                  selectedStar={require('../../../images/likes_100_on.png')}
                  unselectedStar={require('../../../images/likes_100_off.png')}
                  config={{
                    easing: Easing.inOut(Easing.ease),
                    duration: 0,
                  }}
                  //maxScale={1.4}
                  starStyle={{
                    width: scale(25),
                    height: scale(25),
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: scale(5),
                }}
              >
                <Text style={{ ...styles.subtext }}>전문성</Text>
                <Rating
                  onChange={(rating) => console.log(rating)}
                  selectedStar={require('../../../images/likes_100_on.png')}
                  unselectedStar={require('../../../images/likes_100_off.png')}
                  config={{
                    easing: Easing.inOut(Easing.ease),
                    duration: 0,
                  }}
                  //maxScale={1.4}
                  starStyle={{
                    width: scale(25),
                    height: scale(25),
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: scale(5),
                }}
              >
                <Text style={{ ...styles.subtext }}>가격만족도</Text>
                <Rating
                  onChange={(rating) => console.log(rating)}
                  selectedStar={require('../../../images/likes_100_on.png')}
                  unselectedStar={require('../../../images/likes_100_off.png')}
                  config={{
                    easing: Easing.inOut(Easing.ease),
                    duration: 0,
                  }}
                  //maxScale={1.4}
                  starStyle={{
                    width: scale(25),
                    height: scale(25),
                  }}
                />
              </View>
              <TextInput
                multiline={true}
                style={{
                  ...styles.reviewinput,
                  padding: 0,
                  paddingLeft: scale(10),
                  paddingTop: scale(10),
                  textAlignVertical: 'top',
                  marginTop: scale(15),
                }}
                placeholder="후기 (후기는 최소 50자 이상 작성해주세요.)"
                placeholderTextColor="rgba(0, 0, 0, 0.3)"
              />
              <Text style={{ ...styles.textsmall, textAlign: 'right' }}>
                0/5000
              </Text>
            </View>
            <View style={{ marginTop: scale(11) }}>
              <Text style={{ ...styles.subtitle }}>차량 번호 입력</Text>
              <TextInput
                style={{
                  ...styles.carnumberinput,
                  width: scale(330),
                  height: scale(35),
                  padding: 0,
                  paddingLeft: scale(15),
                  paddingVertical: scale(10),
                  marginTop: scale(5),
                }}
                placeholder="띄어쓰기 없이 입력해주세요."
                placeholderTextColor="rgba(0, 0, 0, 0.3)"
              />
              <Text
                style={{
                  ...styles.textsmall,
                  textAlign: 'left',
                  marginTop: scale(5),
                }}
              >
                ※ 거래를 완료한 차량의 번호를 입력해주세요.
              </Text>
            </View>
            <View style={{ marginTop: scale(25) }}>
              <Text style={{ ...styles.subtitle }}>매매 계약서 사진 등록</Text>
              <View style={{ flexDirection: 'row', marginTop: scale(15) }}>
                <TouchableOpacity
                  delayPressIn={0}
                  style={{
                    ...styles.photobox,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    style={{ ...styles.photoicon }}
                    source={require('../../../images/plus_ic_100.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    ...styles.alerttext,
                    width: scale(205),
                    marginLeft: scale(10),
                  }}
                >
                  ※ 유의사항{'\n'}자동차양동증명서의 정면 사진을 촬영하여
                  등록해주세요.{'\n'}단순 거래 확인용이며, 앱에 노출되지
                  않습니다.{'\n'}
                  주민등록번호는 가려서 올려주세요.
                </Text>
              </View>
            </View>
            <View style={{ marginTop: scale(25) }}>
              <Text style={{ ...styles.subtitle }}>구매자 정보</Text>
              <TextInput
                style={{
                  ...styles.carnumberinput,
                  width: scale(330),
                  height: scale(35),
                  padding: 0,
                  paddingLeft: scale(15),
                  paddingVertical: scale(10),
                  marginTop: scale(5),
                }}
                placeholder="구매자 본인 이름"
                placeholderTextColor="rgba(0, 0, 0, 0.3)"
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(5),
                }}
              >
                <TextInput
                  style={{
                    ...styles.carnumberinput,
                    width: scale(271),
                    height: scale(35),
                    padding: 0,
                    paddingLeft: scale(15),
                    paddingVertical: scale(10),
                  }}
                  placeholder={`연락 가능 번호 ("-"없이 숫자만 입력)`}
                  placeholderTextColor="rgba(0, 0, 0, 0.3)"
                />
                <TouchableOpacity
                  delayPressIn={0}
                  style={{
                    ...styles.verifybox,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ ...styles.verifytext }}>인증</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ ...styles.textsmall, marginTop: scale(5) }}>
                ※ 거래 사실 확인을 위해 반드시 구매자 본인의 휴대폰 번호를
                기입해주세요.
              </Text>
            </View>
            <View style={{ marginTop: scale(25) }}>
              <Text style={{ ...styles.subtitle }}>구매 방법</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(15),
                }}
              >
                {buy.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={{
                        ...styles.selectbox,
                        width: scale(110),
                        backgroundColor: '#dfdfdf',
                      }}
                      delayPressIn={0}
                      key={index}
                    >
                      <Text style={{ ...styles.selecttext, color: '#9b9b9b' }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={{ marginTop: scale(25) }}>
              <Text style={{ ...styles.subtitle }}>설문조사</Text>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.dealerbox,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: scale(15),
                  paddingVertical: scale(9),
                  marginTop: scale(5),
                }}
              >
                <Text style={{ ...styles.subtext }}>
                  배달의 딜러를 알게 된 경로를 선택해주세요.
                </Text>
                <Image
                  style={{ ...styles.moreicon }}
                  source={require('../../../images/see_more_icon_88.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.dealerbox,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: scale(15),
                  paddingVertical: scale(9),
                  marginTop: scale(5),
                }}
              >
                <Text style={{ ...styles.subtext }}>
                  고객님의 거주지역을 선택해주세요.
                </Text>
                <Image
                  style={{ ...styles.moreicon }}
                  source={require('../../../images/see_more_icon_88.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(15),
              }}
            >
              {se.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    delayPressIn={0}
                    style={{
                      ...styles.selectbox,
                      width: scale(165),
                      backgroundColor: '#dfdfdf',
                    }}
                  >
                    <Text style={{ ...styles.selecttext, color: '#9b9b9b' }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(5),
              }}
            >
              {age.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    delayPressIn={0}
                    style={{
                      ...styles.selectbox,
                      width: scale(82.5),
                      backgroundColor: '#dfdfdf',
                    }}
                  >
                    <Text style={{ ...styles.selecttext, color: '#9b9b9b' }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity
              delayPressIn={0}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(10),
              }}
            >
              <Image
                style={{ width: scale(17), height: scale(17) }}
                source={require('../../../images/circle_off_ic_68.png')}
              />
              <Text style={{ ...styles.agreetext, marginLeft: scale(3) }}>
                개인정보 수집 및 이용 동의서
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                ...styles.textsmall,
                marginTop: scale(15),
                marginBottom: scale(50),
              }}
            >
              ※ 후기는 배달의 딜러를 통한 실거래가 확인된 분만 등록됩니다. (상담
              후기나 단순 방문 후기는 불가하니 양해 부탁드립니다.)
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
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
            <Text style={{ ...styles.bottombuttontext }}>등록하기</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
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
  subtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  dealerbox: {
    width: scale(330),
    borderRadius: 2.5,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  subtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.33,
    textAlign: 'left',
    color: '#000000',
  },
  reviewinput: {
    width: scale(330),
    height: scale(100),
    borderRadius: 2.5,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#dddddd',
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.33,
    textAlign: 'left',
    color: '#000000',
  },
  textsmall: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(9),
    fontStyle: 'normal',
    letterSpacing: 0,

    color: '#000000',
  },
  carnumberinput: {
    borderRadius: 2.5,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#dddddd',
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.33,
    textAlign: 'left',
    color: '#000000',
  },
  photobox: {
    width: scale(115),
    height: scale(115),
    borderRadius: 2.5,
    backgroundColor: '#ffffff',
    borderStyle: 'dashed',
    borderWidth: 0.4,
    borderColor: '#707070',
  },
  photoicon: {
    width: scale(25),
    height: scale(25),
  },
  alerttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    lineHeight: 12.5,
    letterSpacing: -0.24,
    textAlign: 'left',
    color: '#000000',
  },
  verifybox: {
    width: scale(59),
    height: scale(35),
    backgroundColor: '#459bfe',
  },
  verifytext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  selectbox: {
    height: scale(35),
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#aaaaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selecttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.33,
    textAlign: 'left',
  },
  moreicon: {
    width: scale(22),
    height: scale(22),
  },
  agreetext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    textDecorationLine: 'underline',
  },
});
