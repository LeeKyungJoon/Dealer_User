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

export default function AddCarInfo({ route, navigation }) {
  const { all, count } = route.params;
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [no, setNo] = useState(false);
  const [add, setAdd] = useState([{ desc: '' }]);

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
        centerComponent={<Text style={{ ...styles.title }}>견적 요청</Text>}
        rightComponent={
          <Text style={{ ...styles.righttop, marginRight: scale(5) }}>
            {count} / {all}
          </Text>
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
                해당하는 차량정보를 입력해주세요.
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                drop ? setDrop(false) : setDrop(true);
              }}
              style={{
                ...styles.sameview,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: scale(15),
                paddingVertical: scale(14),
                marginTop: scale(25),
              }}
              delayPressIn={0}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ ...styles.subtitle }}>외판 도색 필요</Text>
                <Text style={{ ...styles.smalltext, marginLeft: scale(3) }}>
                  (미입력 후 현장 확인시 8 ~ 13만원 감가)
                </Text>
              </View>
              {drop ? (
                <Image
                  style={{ width: scale(17), height: scale(17) }}
                  source={require('../../../images/circle_on_ic_68.png')}
                />
              ) : (
                <Image
                  style={{ width: scale(17), height: scale(17) }}
                  source={require('../../../images/circle_off_ic_68.png')}
                />
              )}
            </TouchableOpacity>
            {drop ? (
              <View
                style={{
                  ...styles.sameview,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  paddingHorizontal: scale(15),
                }}
              >
                <View
                  style={{
                    ...styles.subbox,
                    paddingHorizontal: scale(10),
                  }}
                >
                  <Text style={{ ...styles.subboxtext }}>판수</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <TouchableOpacity delayPressIn={0}>
                      <Image
                        style={{ ...styles.plusminus }}
                        source={require('../../../images/minus_ic_68.png')}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{ ...styles.count, marginHorizontal: scale(10) }}
                    >
                      1
                    </Text>
                    <TouchableOpacity delayPressIn={0}>
                      <Image
                        style={{ ...styles.plusminus }}
                        source={require('../../../images/plus_ic_68.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    ...styles.subbox,
                    paddingHorizontal: scale(10),
                  }}
                >
                  <Text style={{ ...styles.subboxtext }}>사진</Text>
                  <TouchableOpacity delayPressIn={0}>
                    <Text style={{ ...styles.blue }}>업로드하기</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                drop1 ? setDrop1(false) : setDrop1(true);
              }}
              style={{
                ...styles.sameview,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: scale(15),
                paddingVertical: scale(14),
                marginTop: scale(7),
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.subtitle }}>추가 사고부위 있음</Text>

              {drop1 ? (
                <Image
                  style={{ width: scale(17), height: scale(17) }}
                  source={require('../../../images/circle_on_ic_68.png')}
                />
              ) : (
                <Image
                  style={{ width: scale(17), height: scale(17) }}
                  source={require('../../../images/circle_off_ic_68.png')}
                />
              )}
            </TouchableOpacity>
            {drop1 ? (
              <View
                style={{
                  ...styles.sameview,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  paddingHorizontal: scale(15),
                }}
              >
                <View
                  style={{
                    ...styles.subbox,
                    paddingHorizontal: scale(10),
                  }}
                >
                  <Text style={{ ...styles.subboxtext }}>추가 부위</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('AddAccident');
                    }}
                    disabled={no ? true : false}
                    delayPressIn={0}
                  >
                    <Text style={{ ...styles.blue }}>추가하기</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    ...styles.subbox,
                    paddingHorizontal: scale(10),
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 1,
                    }}
                    onPress={() => {
                      no ? setNo(false) : setNo(true);
                    }}
                    delayPressIn={0}
                  >
                    {no ? (
                      <Image
                        style={{ width: scale(17), height: scale(17) }}
                        source={require('../../../images/circle_on_ic_68.png')}
                      />
                    ) : (
                      <Image
                        style={{ width: scale(17), height: scale(17) }}
                        source={require('../../../images/circle_off_ic_68.png')}
                      />
                    )}
                    <Text
                      style={{ ...styles.subboxtext, marginLeft: scale(5) }}
                    >
                      모름
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
            <TouchableOpacity
              onPress={() => {
                drop2 ? setDrop2(false) : setDrop2(true);
              }}
              style={{
                ...styles.sameview,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: scale(15),
                paddingVertical: scale(14),
                marginTop: scale(7),
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.subtitle }}>휠/타이어 복원필요</Text>

              {drop2 ? (
                <Image
                  style={{ width: scale(17), height: scale(17) }}
                  source={require('../../../images/circle_on_ic_68.png')}
                />
              ) : (
                <Image
                  style={{ width: scale(17), height: scale(17) }}
                  source={require('../../../images/circle_off_ic_68.png')}
                />
              )}
            </TouchableOpacity>
            {drop2 ? (
              <View
                style={{
                  ...styles.sameview,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  paddingHorizontal: scale(15),
                }}
              >
                <View
                  style={{
                    ...styles.subbox,
                    paddingHorizontal: scale(10),
                  }}
                >
                  <Text style={{ ...styles.subboxtext }}>휠 스크레치 짝수</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <TouchableOpacity delayPressIn={0}>
                      <Image
                        style={{ ...styles.plusminus }}
                        source={require('../../../images/minus_ic_68.png')}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{ ...styles.count, marginHorizontal: scale(10) }}
                    >
                      1
                    </Text>
                    <TouchableOpacity delayPressIn={0}>
                      <Image
                        style={{ ...styles.plusminus }}
                        source={require('../../../images/plus_ic_68.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    ...styles.subbox,
                    paddingHorizontal: scale(10),
                  }}
                >
                  <Text style={{ ...styles.subboxtext }}>타이어교환 짝수</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <TouchableOpacity delayPressIn={0}>
                      <Image
                        style={{ ...styles.plusminus }}
                        source={require('../../../images/minus_ic_68.png')}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{ ...styles.count, marginHorizontal: scale(10) }}
                    >
                      1
                    </Text>
                    <TouchableOpacity delayPressIn={0}>
                      <Image
                        style={{ ...styles.plusminus }}
                        source={require('../../../images/plus_ic_68.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : null}
            <TouchableOpacity
              onPress={() => {
                drop3
                  ? (setDrop3(false), setAdd([{ desc: '' }]))
                  : setDrop3(true);
              }}
              style={{
                ...styles.sameview,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: scale(15),
                paddingVertical: scale(14),
                marginTop: scale(7),
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.subtitle }}>
                정비·수리필요 (기타사항)
              </Text>

              {drop3 ? (
                <Image
                  style={{ width: scale(17), height: scale(17) }}
                  source={require('../../../images/circle_on_ic_68.png')}
                />
              ) : (
                <Image
                  style={{ width: scale(17), height: scale(17) }}
                  source={require('../../../images/circle_off_ic_68.png')}
                />
              )}
            </TouchableOpacity>
            {drop3 ? (
              <View
                style={{
                  ...styles.sameview,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  paddingHorizontal: scale(15),
                }}
              >
                <View
                  style={{
                    borderStyle: 'solid',
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
                    paddingBottom: scale(10),
                    paddingTop: scale(5),
                  }}
                >
                  <Text
                    style={{
                      ...styles.text1,
                    }}
                  >
                    정비·수리 사항1
                  </Text>
                </View>
                {add.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        ...styles.subbox1,
                        paddingHorizontal: scale(10),
                      }}
                    >
                      <Text style={{ ...styles.subboxtext }}>항목명</Text>
                      <TextInput
                        style={{
                          ...styles.subinput,
                          paddingBottom: 0,
                          paddingTop: 0,
                        }}
                        placeholder={'정비·수리 사항 입력'}
                        placeholderTextColor={'rgba(29, 29, 29, 0.3)'}
                      />
                    </View>
                  );
                })}

                <TouchableOpacity
                  onPress={() => {
                    setAdd([...add, { desc: '' }]);
                  }}
                  style={{ paddingVertical: scale(15) }}
                  delayPressIn={0}
                >
                  <Text style={{ ...styles.text2 }}>
                    정비·수리 사항 추가하기
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddComment', {
                all: all,
                count: count + 1,
              });
            }}
            delayPressIn={0}
            style={{
              ...styles.button,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: scale(150.5),
              backgroundColor: '#459bfe',
              marginBottom: Platform.OS === 'ios' ? 0 : scale(25),
            }}
          >
            <Text style={{ ...styles.buttontext }}>확인</Text>
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
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  button: {
    width: scale(240),
    height: scale(40),
    borderRadius: 10,
    alignSelf: 'center',
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
  righttop: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#ffffff',
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  smalltext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  subbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(10),
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
  },
  subboxtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  plusminus: {
    width: scale(17),
    height: scale(17),
  },
  blue: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#459bfe',
  },
  count: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#1d1d1d',
  },
  text1: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  subinput: {
    //width: scale(),
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  text2: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#459bfe',
  },
  subbox1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(10),
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
  },
});
