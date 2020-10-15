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

export default function Options({ route, navigation }) {
  const { all, count } = route.params;
  const [list, setList] = useState([
    '블랙박스',
    '네비게이션',
    '썬루프',
    '후방카메라',
    '후방감지센서',
    '열선시트',
    '하이패스',
    '스마트키',
  ]);
  const [yesNo, setYesNo] = useState(false);
  const [select, setSelect] = useState([]);
  const [another, setAnother] = useState('');

  const _another = (anothertext) => {
    setAnother(anothertext);
  };

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
                주요 옵션을 선택해주세요
              </Text>
            </View>
            <View
              style={{
                ...styles.sameview,
                paddingHorizontal: scale(30),
                paddingTop: scale(20),
                paddingBottom: scale(30),
                marginTop: scale(25),
                alignSelf: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ ...styles.subtitle }}>옵션</Text>
                <TouchableOpacity
                  onPress={() => {
                    yesNo
                      ? setYesNo(false)
                      : (setYesNo(true), setSelect([]), setAnother(''));
                  }}
                  delayPressIn={0}
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                  {yesNo ? (
                    <Image
                      style={{ width: scale(12), height: scale(12) }}
                      source={require('../../../images/check_on.png')}
                    />
                  ) : (
                    <Image
                      style={{ width: scale(12), height: scale(12) }}
                      source={require('../../../images/check_off.png')}
                    />
                  )}

                  <Text style={{ ...styles.subtitle, marginLeft: scale(3) }}>
                    옵션없음
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginTop: scale(15),
                }}
              >
                {list.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        !select.includes(item)
                          ? setSelect([...select, item])
                          : setSelect([...select].filter((e) => e !== item));
                      }}
                      disabled={yesNo ? true : false}
                      key={index}
                      delayPressIn={0}
                      style={{
                        ...styles.listbox,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: scale(8),
                        backgroundColor: select.includes(item)
                          ? '#459bfe'
                          : '#ffffff',
                      }}
                    >
                      <Text
                        style={{
                          ...styles.listtext,
                          color: select.includes(item) ? '#ffffff' : '#1d1d1d',
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <TextInput
                editable={yesNo ? false : true}
                style={{
                  ...styles.distanceinput,

                  paddingLeft: scale(10),
                  paddingVertical:
                    Platform.OS === 'ios' ? scale(8.2) : scale(3.2),
                }}
                placeholder="직접입력"
                placeholderTextColor="rgba(29, 29, 29, 0.3)"
                value={another}
                onChangeText={(text) => {
                  _another(text);
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CarStatus', {
                    all: all,
                    count: count + 1,
                  });
                }}
                disabled={
                  yesNo || select.length > 0 || another.length > 0
                    ? false
                    : true
                }
                delayPressIn={0}
                style={{
                  ...styles.button,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: scale(55.5),
                  backgroundColor:
                    yesNo || select.length > 0 || another.length > 0
                      ? '#459bfe'
                      : 'rgba(69, 155, 254, 0.3)',
                }}
              >
                <Text style={{ ...styles.buttontext }}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    width: scale(280),
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
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  sellinput: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#707070',
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
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
  righttop: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#ffffff',
  },
  listbox: {
    width: scale(90),
    height: scale(30),
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  listtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
  },
  distanceinput: {
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
