import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import scale from '../../../common/Scale';
import { Header } from 'react-native-elements';
import Modal from 'react-native-modal';
import InfoContext from '../../../context/InfoContext';
import AppServer from '../../../common/AppServer';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';

export default function MyInfoMain(props) {
  const { state, setUserState } = useContext(InfoContext);
  const [logoutModal, setLogoutModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalic, setModalic] = useState(false);

  console.log(state);

  const _logout = async () => {
    setLogoutModal(false);
    try {
      let data = await AppServer.CARDEALER_API_00003();
      console.log('_logout', data);
      if (data.success_yn) {
        await AsyncStorage.clear();
        props.navigation.reset({ routes: [{ name: 'Sign' }] });
      }
    } catch (error) {
      console.log('_logout', error);
    }
  };

  const _selectPhoto = (index) => {
    const options = {
      title: null,
      cancelButtonTitle: '취소',
      takePhotoButtonTitle: '사진찍기',
      chooseFromLibraryButtonTitle: '갤러리',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      maxWidth: 1024,
      maxHeight: 1024,
      mediaType: 'photo',
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //console.log('result---->>', response);
        _postPhoto(response);
      }
    });
  };

  const _postPhoto = async (response) => {
    let imgData = new FormData();
    const result = await fetch(response.uri);
    const blob = await result.blob();
    let fileName = blob._data.name;
    let extensionName = fileName.split('.')[1];
    let now_timestamp = Math.floor(new Date().getTime() / 1000);
    fileName = `${Math.random()}_${now_timestamp}.${extensionName}`;
    imgData.append('file', {
      uri: response.uri,
      type: response.type,
      name: fileName,
    });

    try {
      let data = await AppServer.CARDEALER_API_00012({ responsedata: imgData });
      console.log('_postPhoto', data);
      if (data.success_yn && data.msg === 'success') {
        setUserState({ ...state.info, profile_img_url: data.img_url });
      } else {
        console.log('_postPhoto_else>>>>>', data);
      }
    } catch (error) {
      console.log('_postPhoto', error);
    }
  };

  const _delete = () => {
    setDeleteModal(false);
    props.navigation.reset({ routes: [{ name: 'Sign' }] });
  };

  return (
    <>
      <Header
        backgroundColor={'#459bfe'}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: '#459bfe' }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
        }}
        centerComponent={
          <Image
            style={{ ...styles.mainlogo }}
            source={require('../../../images/logo.png')}
          />
        }
      />
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <View style={{ ...styles.view, paddingTop: scale(15) }}>
          <Text
            style={{
              ...styles.subtitle,
            }}
          >
            내 정보
          </Text>
          <View
            style={{
              alignSelf: 'center',
              borderRadius: scale(10),
              marginTop: scale(15),
            }}
          >
            {/*<Image
              style={{
                width: scale(90),
                height: scale(90),
                borderRadius: scale(10),
              }}
              source={{ uri: state.info.profile_img_url }}
            />*/}
            <View
              style={{
                width: scale(90),
                height: scale(90),
                borderRadius: scale(10),
                backgroundColor: '#001740',
                borderStyle: 'solid',
                borderWidth: 0.3,
                borderColor: '#707070',
              }}
            />
            <TouchableOpacity
              onPress={() => {
                //setProfileModal(true);
                _selectPhoto();
              }}
              style={{ position: 'absolute', right: -17, bottom: 0 }}
              delayPressIn={0}
            >
              <Image
                style={{
                  width: scale(30),
                  height: scale(30),
                }}
                source={require('../../../images/camera_icon_120.png')}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...styles.name,
              marginTop: scale(15),
            }}
          >
            {/*{state.info.user_nm}*/}
            홍길동
          </Text>
          <Text
            style={{
              ...styles.email,
              marginTop: scale(5),
              marginBottom: scale(15),
            }}
          >
            {/*{state.info.user_email}*/}
            dealer_app@gmail.com
          </Text>
          <View style={{ ...styles.boundary }} />
        </View>
        <View style={{ ...styles.view }}>
          <Text style={{ ...styles.title_txt }}>내 정보</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Reset_Password');
            }}
            style={{ ...styles.row_view }}
          >
            <Text style={{ ...styles.desc_txt }}>비밀번호 재설정</Text>
            <Image
              source={require('../../../images/in_ic_68.png')}
              style={{ ...styles.iconStyle1 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Reset_Phone');
            }}
            style={{ ...styles.row_view }}
          >
            <Text style={{ ...styles.desc_txt }}>휴대전화 번호 재설정</Text>
            <Image
              source={require('../../../images/in_ic_68.png')}
              style={{ ...styles.iconStyle1 }}
            />
          </TouchableOpacity>
          <View style={{ ...styles.boundary, marginTop: scale(7.5) }} />
        </View>
        <View style={{ ...styles.view }}>
          <Text style={{ ...styles.title_txt }}>알림 설정</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Noti_Setting');
            }}
            style={{ ...styles.row_view }}
          >
            <Text style={{ ...styles.desc_txt }}>매물 알림 설정</Text>
            <Image
              source={require('../../../images/in_ic_68.png')}
              style={{ ...styles.iconStyle1 }}
            />
          </TouchableOpacity>
          <View style={{ ...styles.boundary, marginTop: scale(7.5) }} />
        </View>
        <View style={{ ...styles.view }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Head_Question');
            }}
            style={{ ...styles.row_view }}
          >
            <Text style={{ ...styles.title_txt }}>1:1 본사 문의하기</Text>
            <Image
              source={require('../../../images/in_ic_68.png')}
              style={{ ...styles.iconStyle1 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#ffffff',
            padding: scale(15),
            paddingBottom: scale(20),
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              backgroundColor: '#b9b9b9',
              padding: scale(12.5),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setLogoutModal(true);
            }}
          >
            <Text
              style={{
                color: '#ffffff',
                fontSize: scale(15),
                fontFamily: 'Jalnan',
              }}
            >
              로그아웃
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDeleteModal(true);
            }}
            delayPressIn={0}
          >
            <Text
              style={{
                fontSize: scale(8),
                color: '#dcdcdc',
                marginTop: scale(10),
              }}
            >
              배달의딜러 회원 탈퇴를 원하시면{' '}
              <Text style={{ textDecorationLine: 'underline' }}>여기</Text>를
              눌러주세요
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        isVisible={logoutModal}
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
          <Text style={{ ...styles.modaltitle }}>로그아웃 하시겠습니까?</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <TouchableOpacity
              delayPressIn={0}
              onPress={() => {
                setLogoutModal(false);
              }}
            >
              <Text
                style={{
                  ...styles.modalconfirm,
                  color: '#1d1d1d',
                  marginRight: scale(55),
                }}
              >
                취소
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              delayPressIn={0}
              onPress={() => {
                _logout();
              }}
            >
              <Text style={{ ...styles.modalconfirm }}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={deleteModal}
        useNativeDriver={true}
        style={{ alignItems: 'center' }}
      >
        <View
          style={{
            ...styles.modalbox1,
            paddingTop: scale(15),
          }}
        >
          <View style={{ paddingHorizontal: scale(20) }}>
            <Text style={{ ...styles.modaltitle1 }}>탈퇴 전 확인하세요!</Text>
            <Text style={{ ...styles.modaldesc, marginTop: scale(12.2) }}>
              서비스 이용 중 느꼈던 불편사항은 고객만족센터로 문의 주시면 답변
              드리겠습니다.{'\n'}
              {'\n'}[회원탈퇴 안내사항]{'\n'}- 요청 즉시 탈퇴 처리됩니다.{'\n'}-
              탈퇴 시 이용기록이 삭제되며, 탈퇴 후 복구되지 않습니다.{'\n'}-
              회원전용 서비스 이용이 불가합니다.
            </Text>
            <TouchableOpacity
              onPress={() => {
                modalic ? setModalic(false) : setModalic(true);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: scale(20),
              }}
              delayPressIn={0}
            >
              {modalic ? (
                <Image
                  style={{ ...styles.modalic }}
                  source={require('../../../images/check_on_ic_40.png')}
                />
              ) : (
                <Image
                  style={{ ...styles.modalic }}
                  source={require('../../../images/check_off.png')}
                />
              )}
              <Text style={{ ...styles.checktext, marginLeft: scale(3) }}>
                안내사항을 모두 확인하였으며, 이에 동의합니다.
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              borderStyle: 'solid',
              borderTopWidth: 0.3,
              borderTopColor: '#c9c9c9',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDeleteModal(false);
              }}
              style={{
                justifyContent: 'center',
                width: '50%',
                paddingVertical: scale(11.5),
                borderStyle: 'solid',
                borderRightWidth: 0.3,
                borderRightColor: '#c9c9c9',
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.modalcancel }}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={modalic ? false : true}
              onPress={() => {
                _delete();
              }}
              style={{
                justifyContent: 'center',
                width: '50%',
                paddingVertical: scale(11.5),
                borderStyle: 'solid',
                borderLeftWidth: 0.3,
                borderLeftColor: '#c9c9c9',
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.modalconfirm1 }}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  iconStyle1: {
    width: scale(15),
    height: scale(15),
  },
  view: {
    padding: scale(15),
    backgroundColor: '#ffffff',
    paddingTop: 0,
  },
  title_txt: {
    fontSize: scale(13),
    color: '#1d1d1d',
    fontWeight: 'bold',
    marginBottom: scale(7.5),
  },
  desc_txt: { fontSize: scale(13), color: '#1d1d1d' },
  row_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(7.5),
    backgroundColor: '#ffffff',
  },
  boundary: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderStyle: 'solid',
  },
  search: {
    width: scale(18),
    height: scale(18),
  },
  mainlogo: {
    width: scale(140),
    height: scale(22),
  },
  alert: {
    width: scale(18),
    height: scale(18),
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topimage: {
    width: scale(330),
    height: scale(130),
    borderRadius: 10,
    alignSelf: 'center',
  },
  wrapper: {
    flex: 0.32,
    paddingTop: scale(20),
  },
  categorytitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  carlist: {
    width: scale(330),
    height: scale(250),
    backgroundColor: '#ffffff',
  },
  carimage: {
    width: scale(330),
    height: scale(182.5),
  },
  premark: {
    width: scale(59),
    height: scale(59),
  },
  like: {
    width: scale(24),
    height: scale(24),
  },
  avator: {
    width: scale(50),
    height: scale(50),
  },
  price: {
    fontFamily: 'NotoSans-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  carname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  carhistory: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: -0.3,
    textAlign: 'left',
    color: '#999999',
  },
  daypeople: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#bebebe',
  },
  preicon: {
    width: scale(20),
    height: scale(20),
  },
  pretext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: 'right',
    color: '#1d1d1d',
  },
  onofficon: {
    width: scale(9),
    height: scale(9),
  },
  real: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#459bfe',
  },
  realcar: {
    width: scale(157.5),
    height: scale(130),
  },
  smallcarname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(8),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#459bfe',
  },
  review: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(8),
    fontStyle: 'normal',
    lineHeight: 10,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
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
  back: {
    width: scale(20),
    height: scale(20),
  },
  subtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#1d1d1d',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#1d1d1d',
  },
  email: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#bfbfbf',
  },
  modalbox1: {
    width: scale(280),
    backgroundColor: '#ffffff',
  },
  modalic: {
    width: scale(12),
    height: scale(12),
  },
  modaltitle1: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  modaldesc: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  checktext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(9),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  modalcancel: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
  modalconfirm1: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#459bfe',
  },
});
