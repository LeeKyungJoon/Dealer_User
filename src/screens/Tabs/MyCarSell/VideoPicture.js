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

export default function VideoPicture({ route, navigation }) {
  const { all, count } = route.params;
  const [pictureList, setPictureList] = useState([
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
    { uri: '' },
  ]);

  const _picture = () => {
    return pictureList.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            ...styles.picturebox,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: scale(10),
          }}
          delayPressIn={0}
        >
          <Image
            style={{ width: scale(25), height: scale(25) }}
            source={require('../../../images/plus_ic_100.png')}
          />
        </TouchableOpacity>
      );
    });
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: scale(15),
            marginTop: scale(30),
          }}
        >
          <Image
            style={{ ...styles.logoicon }}
            source={require('../../../images/dealer_icon_160.png')}
          />
          <Text style={{ ...styles.logotext, marginLeft: scale(5) }}>
            차량에 대한 사진과 설명을 입력해주세요 (0/19)
          </Text>
        </View>
        <View
          style={{
            ...styles.sameview,
            marginHorizontal: scale(35),
            marginTop: scale(25),
          }}
        >
          <View style={{ height: scale(30) }} />
          <ScrollView
            style={{ height: scale(320) }}
            contentContainerStyle={{ alignItems: 'center' }}
          >
            <TextInput
              style={{
                ...styles.urlinput,
                paddingLeft: scale(10),
                paddingVertical:
                  Platform.OS === 'ios' ? scale(8.2) : scale(3.2),
                marginBottom: scale(10),
                width: scale(260),
              }}
              placeholder="업로드 할 유튜브 URL을 입력하세요."
              placeholderTextColor="rgba(29, 29, 29, 0.3)"
              autoCapitalize={'none'}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingHorizontal: scale(15),
              }}
            >
              {_picture()}
            </View>
            <TextInput
              style={{
                ...styles.urlinput,
                paddingLeft: scale(10),
                paddingVertical:
                  Platform.OS === 'ios' ? scale(8.2) : scale(3.2),
                marginBottom: scale(10),
                width: scale(260),
                textAlignVertical: 'top',
                height: scale(75),
                marginTop: scale(10),
              }}
              multiline={true}
              placeholder="차량 및 사고 관련 설명을 입력해주세요."
              placeholderTextColor="rgba(29, 29, 29, 0.3)"
              autoCapitalize={'none'}
            />
          </ScrollView>
          <View style={{ height: scale(30) }} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddCarInfo', { all: all, count: count + 1 });
          }}
          delayPressIn={0}
          style={{
            ...styles.button,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: scale(27.2),
            //backgroundColor: 'rgba(69, 155, 254, 0.3)',
            backgroundColor: '#459bfe',
            alignSelf: 'center',
          }}
        >
          <Text style={{ ...styles.buttontext }}>확인</Text>
        </TouchableOpacity>
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
  righttop: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#ffffff',
  },
  urlinput: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    borderRadius: scale(2.5),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  picturebox: {
    width: scale(125),
    height: scale(125),
    borderRadius: scale(2.5),
    backgroundColor: '#ffffff',
    borderStyle: 'dashed',
    borderWidth: 0.5,
    borderColor: '#707070',
  },
  button: {
    width: scale(240),
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
});
