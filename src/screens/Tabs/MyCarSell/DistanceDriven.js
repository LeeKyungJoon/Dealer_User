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

export default function DistanceDriven({ route, navigation }) {
  const { all, count } = route.params;
  const [list, setList] = useState([
    '휘발유',
    '경유',
    '하이브리드',
    '전기',
    'LPG',
    '기타',
  ]);
  const [select, setSelect] = useState('');
  const [distance, setDistance] = useState('');

  const _distance = (distancetext) => {
    setDistance(distancetext);
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
                연료와 주행거리를 선택해주세요
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
              <Text style={{ ...styles.subtitle }}>연료</Text>
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
                        setSelect(item);
                      }}
                      key={index}
                      delayPressIn={0}
                      style={{
                        ...styles.listbox,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: scale(8),
                        backgroundColor:
                          select === item ? '#459bfe' : '#ffffff',
                      }}
                    >
                      <Text
                        style={{
                          ...styles.listtext,
                          color: select === item ? '#ffffff' : '#1d1d1d',
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Text style={{ ...styles.subtitle, marginTop: scale(22) }}>
                주행거리
              </Text>
              <View
                style={{
                  ...styles.inputbox,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: scale(10),
                  marginTop: scale(15),
                }}
              >
                <TextInput
                  style={{
                    ...styles.distanceinput,
                    padding: 0,
                    width: scale(100),
                  }}
                  placeholder="직접입력"
                  placeholderTextColor="rgba(29, 29, 29, 0.3)"
                  value={distance}
                  onChangeText={(text) => {
                    _distance(text);
                  }}
                  keyboardType="number-pad"
                />
                <Text style={{ ...styles.kmtext }}>km</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Options', {
                    all: all,
                    count: count + 1,
                  });
                }}
                disabled={
                  select.length > 0 && distance.length > 0 ? false : true
                }
                delayPressIn={0}
                style={{
                  ...styles.button,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: scale(41.8),
                  backgroundColor:
                    select.length > 0 && distance.length > 0
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
  kmtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#1d1d1d',
  },
  inputbox: {
    width: '100%',
    height: scale(30),
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  distanceinput: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
});
