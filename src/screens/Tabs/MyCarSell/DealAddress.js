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

export default function DealAddress({ route, navigation }) {
  const { all, count } = route.params;
  const [list, setList] = useState(['오토', '수동', '세미오토', 'CVT', '기타']);
  const [add, setAdd] = useState('');
  const [anotherAdd, setAnotherAdd] = useState('');

  const _add = (addtext) => {
    setAdd(addtext);
  };

  const _anotherAdd = (anotheraddtext) => {
    setAnotherAdd(anotheraddtext);
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
                거래하실 지역을 선택해주세요
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
              <Text style={{ ...styles.subtitle }}>지역</Text>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.searchbutton,
                  justifyContent: 'center',
                  alignSelf: 'flex-end',
                }}
              >
                <Text style={{ ...styles.searchbuttontext }}>주소검색</Text>
              </TouchableOpacity>
              <TextInput
                style={{
                  ...styles.searchaddressinput,
                  paddingLeft: scale(10),
                  paddingVertical:
                    Platform.OS === 'ios' ? scale(8.2) : scale(3.2),
                  marginTop: scale(6),
                }}
                placeholder="주소를 입력하세요."
                placeholderTextColor="rgba(29, 29, 29, 0.3)"
                value={add}
                onChangeText={(text) => {
                  _add(text);
                }}
                autoCapitalize={'none'}
              />
              <TextInput
                style={{
                  ...styles.searchaddressinput,
                  paddingLeft: scale(10),
                  paddingVertical:
                    Platform.OS === 'ios' ? scale(8.2) : scale(3.2),
                  marginTop: scale(6),
                }}
                placeholder="나머지 주소를 입력하세요."
                placeholderTextColor="rgba(29, 29, 29, 0.3)"
                value={anotherAdd}
                onChangeText={(text) => {
                  _anotherAdd(text);
                }}
                autoCapitalize={'none'}
              />

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('');
                }}
                disabled={
                  add.length > 0 && anotherAdd.length > 0 ? false : true
                }
                delayPressIn={0}
                style={{
                  ...styles.button,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: scale(150.5),
                  backgroundColor:
                    add.length > 0 && anotherAdd.length > 0
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
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  listtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  searchaddressinput: {
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
  searchbutton: {
    width: scale(59),
    height: scale(25),
    backgroundColor: '#bbbbbb',
  },
  searchbuttontext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
});
