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
import { WebView } from 'react-native-webview';

export default function Terms({ route, navigation }) {
  const { setAgree } = route.params;
  const [agree2, setAgree2] = useState(false);

  const _goBack = () => {
    setAgree(true);
    navigation.goBack();
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
        centerComponent={<Text style={{ ...styles.title }}>약관 동의</Text>}
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
                이용 약관(필수)에 대해 확인 후 동의해주세요
              </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <View
                style={{
                  ...styles.scrolldesc,
                  marginTop: scale(30),
                }}
              >
                <WebView
                  containerStyle={{
                    borderRadius: scale(5),
                    borderStyle: 'solid',
                    borderWidth: 0.5,
                    borderColor: '#707070',
                  }}
                  source={{ uri: 'http://13.125.211.100:3001/cardealer/terms' }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setAgree2(!agree2);
                }}
                delayPressIn={0}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: scale(15),
                }}
              >
                {agree2 ? (
                  <Image
                    style={{ ...styles.agreeicon }}
                    source={require('../../../images/circle_on_ic_68.png')}
                  />
                ) : (
                  <Image
                    style={{ ...styles.agreeicon }}
                    source={require('../../../images/circle_off_ic_68.png')}
                  />
                )}
                <Text style={{ ...styles.agreetext, marginLeft: scale(5) }}>
                  위 내용을 확인하였으며, 약관에 동의합니다.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            disabled={agree2 ? false : true}
            onPress={() => {
              _goBack();
            }}
            delayPressIn={0}
            style={{
              ...styles.bottombutton,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: scale(15),
              backgroundColor: agree2 ? '#459bfe' : 'rgba(69, 155, 254, 0.3)',
            }}
          >
            <Text style={{ ...styles.bottombuttontext }}>확인</Text>
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
  scrolldesc: {
    width: scale(280),
    height: scale(250),
    //backgroundColor: '#ffffff',
    //borderRadius: scale(5),
    //borderStyle: 'solid',
    //borderWidth: 0.3,
    //borderColor: '#707070',
  },
  agreeicon: {
    width: scale(17),
    height: scale(17),
  },
  agreetext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  bottombutton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
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
