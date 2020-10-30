import React, { useState, useEffect, useContext } from 'react';
import { Header } from 'react-native-elements';
import scale from '../../common/Scale';
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
import Modal from 'react-native-modal';
import AppServer from '../../common/AppServer';
import DeviceInfo from 'react-native-device-info';
import InfoContext from '../../context/InfoContext';
import AsyncStorage from '@react-native-community/async-storage';

export default function SingIn({ route, navigation }) {
  const { setUserState, state } = useContext(InfoContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uuid, setUuid] = useState('');
  const [isvisible, setIsvisible] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [errorMsg1, setErrorMsg1] = useState({ msg: '', color: 'transparent' });
  const [errorMsg2, setErrorMsg2] = useState({ msg: '', color: 'transparent' });
  const [errorMsg3, setErrorMsg3] = useState('');
  const { push_key } = route.params;

  const _open = () => {
    setIsvisible(true);
  };

  const _hide = () => {
    setIsvisible(false);
  };

  const _getUUID = () => {
    let uniqueId = DeviceInfo.getUniqueId();
    setUuid(uniqueId);
  };

  const _email = (emailtext) => {
    let regExp = /@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmail(emailtext);
    if (emailtext === '') {
      setCheckEmail(false);
      setErrorMsg1({ msg: '', color: 'transparent' });
    } else if (regExp.test(emailtext)) {
      console.log('이메일 형식 ok');
      setErrorMsg1({ msg: '', color: 'transparent' });
      setCheckEmail(true);
    } else {
      console.log('이메일 형식 no');
      setErrorMsg1({ msg: '이메일 형식이 맞지 않습니다.', color: '#ff5454' });
      setCheckEmail(false);
    }
  };

  const _password = (passwordtext) => {
    let regExp = /^[a-zA-Z0-9]{7,20}$/;
    setPassword(passwordtext);
    if (passwordtext === '') {
      setCheckPassword(false);
      setErrorMsg2({ msg: '', color: 'transparent' });
    } else if (regExp.test(passwordtext)) {
      console.log('비밀번호 형식 ok');
      setCheckPassword(true);
      setErrorMsg2({ msg: '', color: 'transparent' });
    } else {
      console.log('비밀번호 형식 no');
      setCheckPassword(false);
      setErrorMsg2({ msg: '비밀번호 형식이 맞지 않습니다.', color: '#ff5454' });
    }
  };

  const _signIn = async () => {
    try {
      let data = await AppServer.CARDEALER_API_GET_TOKEN({
        user_pass: password,
        user_email: email,
        uuid: uuid,
        push_key: push_key,
      });
      console.log('_signIn', data);
      if (data.success_yn) {
        setUserState(data);

        //await AsyncStorage.clear();
        //let a = await AsyncStorage.getAllKeys();
        //console.log(a);
        await AsyncStorage.setItem('_token', data.token);
        await AsyncStorage.setItem('_email', email);
        await AsyncStorage.setItem('_pass', password);
        //if (fcm_token !== "NONE" && !fcm_token) {
        //  console.log("3333");
        //  await AsyncStorage.setItem("_token", data.token);
        //  console.log("4444");
        //}
        navigation.reset({
          routes: [{ name: 'Tabs' }],
        });
      } else if (
        !data.success_yn &&
        data.msg === '타 기기로 접속중인 사용자가 존재합니다'
      ) {
        setErrorMsg3(data.msg);
        _open();
      } else {
        setErrorMsg3('이메일 또는 비밀번호가 맞지 않습니다.');
        _open();
      }
    } catch (error) {
      console.log('_singIn', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      //setPaused(!paused);
      _getUUID();
    });
    return unsubscribe;
  }, [navigation]);

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
              source={require('../../images/back_ic_80.png')}
            />
          </TouchableOpacity>
        }
        centerComponent={<Text style={{ ...styles.title }}>로그인</Text>}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ ...styles.container }}>
          <ScrollView
            style={{
              paddingHorizontal: scale(15),
            }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between',
            }}
            keyboardShouldPersistTaps="always"
          >
            <View>
              <Text style={{ ...styles.subtitle, marginTop: scale(15) }}>
                이메일 주소를 입력해주세요
              </Text>
              <TextInput
                autoCapitalize={'none'}
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={'이메일 주소를 입력하세요.'}
                placeholderTextColor={'#bababa'}
                value={email}
                onChangeText={(text) => {
                  _email(text);
                }}
              />
              <Text
                style={{
                  ...styles.error,
                  color: errorMsg1.color,
                  marginLeft: scale(10),
                  marginTop: scale(3),
                }}
              >
                {errorMsg1.msg}
              </Text>
              <Text style={{ ...styles.subtitle, marginTop: scale(15) }}>
                비밀번호를 입력해주세요
              </Text>
              <TextInput
                autoCapitalize={'none'}
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={
                  '비밀번호를 입력하세요. (영문, 숫자 포함 7자리 이상)'
                }
                placeholderTextColor={'#bababa'}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => {
                  _password(text);
                }}
              />
              <Text
                style={{
                  ...styles.error,
                  color: errorMsg2.color,
                  marginLeft: scale(10),
                  marginTop: scale(3),
                }}
              >
                {errorMsg2.msg}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SearchPassword');
                }}
                delayPressIn={0}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginTop: scale(5),
                }}
              >
                <Text style={{ ...styles.search }}>비밀번호 찾기</Text>
                <Image
                  style={{ ...styles.more }}
                  source={require('../../images/more_ic_40.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                _signIn();
                //navigation.reset({
                //  routes: [{ name: 'Tabs' }],
                //});
              }}
              disabled={checkEmail && checkPassword ? false : true}
              style={{
                ...styles.bottombutton,
                backgroundColor:
                  checkEmail && checkPassword ? '#459bfe' : '#dddddd',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: Platform.OS === 'ios' ? 0 : scale(30),
                marginTop: scale(60),
              }}
              //style={{
              //  ...styles.bottombutton,
              //  backgroundColor: '#459bfe',
              //  alignItems: 'center',
              //  justifyContent: 'center',
              //  marginBottom: Platform.OS === 'ios' ? 0 : scale(30),
              //  marginTop: scale(60),
              //}}
              delayPressIn={0}
            >
              <Text style={{ ...styles.bottomtext }}>로그인</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Modal
        isVisible={isvisible}
        style={{ alignItems: 'center' }}
        useNativeDriver={true}
      >
        <View
          style={{
            ...styles.modalbox,
            padding: scale(20),
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ ...styles.modaltitle }}>{errorMsg3}</Text>
          <TouchableOpacity
            delayPressIn={0}
            onPress={() => {
              _hide();
            }}
          >
            <Text style={{ ...styles.modalconfirm }}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    backgroundColor: '#ffffff',
  },
  subtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(16),
    fontStyle: 'normal',
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#222222',
  },
  inputstyle: {
    width: scale(330),
    height: scale(40),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: -0.39,
    textAlign: 'left',
    color: '#000000',
    paddingHorizontal: scale(10),
  },
  more: {
    width: scale(10),
    height: scale(10),
  },
  search: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    lineHeight: scale(25),
    letterSpacing: -scale(0.36),
    textAlign: 'left',
    color: '#459bfe',
  },
  bottombutton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
  },
  bottomtext: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  modalbox: {
    width: scale(280),
    height: scale(100),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  modaltitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  modalconfirm: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#459bfe',
  },
  error: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: -0.3,
    textAlign: 'left',
  },
});
