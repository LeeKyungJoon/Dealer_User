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

export default function BuyCash({ route, navigation }) {
  const [personList, setPersonList] = useState(['남성', '여성']);
  const [select, setSelect] = useState('');

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
        centerComponent={<Text style={{ ...styles.title }}>현금 구매</Text>}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                  style={{
                    width: scale(40),
                    height: scale(40),
                    marginRight: scale(5),
                  }}
                  source={require('../../../images/dealer_icon_160.png')}
                />
                <Text style={{ ...styles.toptext, width: scale(285) }}>
                  실구매자의 생년월일 6자리와 성별을 입력해주세요
                </Text>
              </View>
              <TextInput
                style={{
                  ...styles.inputstyle,
                  paddingLeft: scale(10),
                  marginTop: scale(50),
                }}
                placeholder={'ex) 930928'}
                placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
                keyboardType={'number-pad'}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(5),
                }}
              >
                {personList.map((item, index) => {
                  return (
                    <TouchableOpacity
                      delayPressIn={0}
                      onPress={() => {
                        setSelect(item);
                      }}
                      key={index}
                      style={{
                        ...styles.manwoman,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:
                          select === item ? '#459bfe' : '#ffffff',
                      }}
                    >
                      <Text
                        style={{
                          ...styles.manwomantext,
                          color: select === item ? '#ffffff' : '#9b9b9b',
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BuyCashComplete');
              }}
              delayPressIn={0}
              style={{
                ...styles.bottombutton,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: scale(15),
              }}
            >
              <Text style={{ ...styles.bottombuttontext }}>주문하기</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
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
  inputstyle: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  manwoman: {
    width: scale(165),
    height: scale(35),
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#aaaaaa',
  },
  manwomantext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.33,
    textAlign: 'left',
  },
  toptext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
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
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
});
