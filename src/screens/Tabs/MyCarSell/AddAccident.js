import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import scale from '../../../common/Scale';
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Modal from 'react-native-modal';

const Width = Dimensions.get('window').width;

export default function AddAccident({ route, navigation }) {
  const [isvisible, setIsvisible] = useState(false);
  const [img, setImg] = useState([
    {
      url: '',
      props: { source: require('../../../images/car_map_2.png') },
    },
  ]);
  const [topList, setTopList] = useState(['외판', '주요 골격']);
  const [selectList, setSelectList] = useState('외판');
  const [list, setList] = useState([
    '1. 후드',
    '2. 프론트 휀더 (좌)',
    '3. 프론트 휀더 (우)',
    '4. 프론트 도우 (좌)',
    '5. 프론트 도우 (우)',
    '6. 리어 도우 (좌)',
    '7. 리어 도우 (우)',
    '8. 트렁크리드',
    '9. 라디에이터 서포트 (볼트체결부품)',
    '10. 루프 패널',
    '11. 쿼터 패널 (좌)',
    '12. 쿼터 패널 (우)',
    '13. 사이드실 패널 (좌)',
    '14. 사이드실 패널 (우)',
  ]);
  const [list1, setList1] = useState([
    '1. 프론트 패널',
    '2. 크로스 멤버',
    '3. 인사이드 패널 (좌)',
    '4. 인사이드 패널 (우)',
    '5. 리어 패널',
    '6. 트렁크 플로어',
    '7. 프론트 사이드 멤버 (좌)',
    '8. 프론트 사이드 멤버 (우)',
    '9. 리어 사이드 멤버 (우)',
    '10. 리어 사이드 멤버 (좌)',
    '11. 프론트 휠하우스 (좌)',
    '12. 프론트 휠하우스 (우)',
    '13. 리어 휠하우스 (좌)',
    '14. 리어 휠하우스 (우)',
    '15. 필러 패널A (좌)',
    '16. 필러 패널A (우)',
    '17. 필러 패널B (좌)',
    '18. 필러 패널B (우)',
    '19. 필러 패널C (좌)',
    '20. 필러 패널C (우)',
    '21. 패키지트레이',
    '22. 대쉬 패널',
    '23. 플로어 패널 (바닥)',
  ]);

  const _list = () => {
    switch (selectList) {
      case '외판':
        return (
          <View>
            <Image
              style={{
                width: scale(330),
                height: scale(300),
                alignSelf: 'center',
              }}
              source={require('../../../images/562.png')}
            />
            <View
              style={{
                ...styles.sameview,
                alignSelf: 'center',
                marginTop: scale(10),
                marginBottom: scale(30),
                borderColor: 'rgba(0, 0, 0, 0.05)',
                borderWidth: 0.3,
              }}
            >
              {list.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setIsvisible(true);
                    }}
                    activeOpacity={0.5}
                    delayPressIn={0}
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: scale(15),
                      borderBottomColor: 'rgba(0, 0, 0, 0.1)',
                      borderBottomWidth: 0.5,
                    }}
                  >
                    <Text style={{ ...styles.subtext }}>{item}</Text>
                    <Image
                      style={{ width: scale(17), height: scale(17) }}
                      source={require('../../../images/circle_off_ic_68.png')}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      case '주요 골격':
        return (
          <View>
            <Image
              style={{
                width: scale(330),
                height: scale(300),
                alignSelf: 'center',
              }}
              source={require('../../../images/563.png')}
            />
            <View
              style={{
                ...styles.sameview,
                alignSelf: 'center',
                marginTop: scale(10),
                marginBottom: scale(30),
                borderColor: 'rgba(0, 0, 0, 0.05)',
                borderWidth: 0.3,
              }}
            >
              {list1.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setIsvisible(true);
                    }}
                    delayPressIn={0}
                    activeOpacity={0.5}
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: scale(15),
                      borderBottomColor: 'rgba(0, 0, 0, 0.1)',
                      borderBottomWidth: 0.5,
                    }}
                  >
                    <Text style={{ ...styles.subtext }}>{item}</Text>
                    <Image
                      style={{ width: scale(17), height: scale(17) }}
                      source={require('../../../images/circle_off_ic_68.png')}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
    }
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
        centerComponent={<Text style={{ ...styles.title }}>사고부위 추가</Text>}
      />

      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <View style={{ paddingHorizontal: scale(15) }}>
            <Text style={{ ...styles.text1, marginTop: scale(20) }}>
              사고부위 추가하기
            </Text>
            <View style={{ marginTop: scale(15) }}>
              <View style={{ flexDirection: 'row' }}>
                {topList.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setSelectList(item);
                      }}
                      activeOpacity={1}
                      style={{
                        width: `${100 / 2}%`,
                        paddingVertical: scale(12),
                        borderColor: 'rgba(0, 0, 0, 0.2)',
                        borderWidth: 1,
                        borderLeftWidth: index === 1 ? 0 : 1,
                        borderRightWidth: index === 0 ? 0 : 1,
                        borderTopLeftRadius: index === 0 ? scale(10) : 0,
                        borderTopRightRadius: index === 1 ? scale(10) : 0,
                        backgroundColor:
                          selectList === item ? '#459bfe' : '#ffffff',
                      }}
                      key={index}
                      delayPressIn={0}
                    >
                      <Text
                        style={{
                          ...styles.topselecttext,
                          color:
                            selectList === item
                              ? '#ffffff'
                              : 'rgba(0, 0, 0, 0.4)',
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={{ marginTop: scale(15) }}>{_list()}</View>
          </View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              delayPressIn={0}
              style={{
                ...styles.button,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: scale(41.8),
                backgroundColor: '#001740',
                marginBottom: Platform.OS === 'ios' ? 0 : scale(30),
              }}
            >
              <Text style={{ ...styles.buttontext }}>저장하기</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal
          isVisible={isvisible}
          useNativeDriver={true}
          style={{ alignItems: 'center' }}
        >
          <View style={{ ...styles.modalbox }}>
            <TouchableOpacity
              style={{
                ...styles.modalsub,
                borderBottomColor: 'rgba(0, 0, 0, 0.15)',
                borderBottomWidth: 1,
                borderStyle: 'solid',
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.modaltext }}>교환</Text>
              <Image
                style={{ ...styles.modalic }}
                source={require('../../../images/checkoff_ic_120.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.modalsub,
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.modaltext }}>판금 / 용접</Text>
              <Image
                style={{ ...styles.modalic }}
                source={require('../../../images/checkoff_ic_120.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsvisible(false);
              }}
              style={{
                backgroundColor: '#459bfe',
                paddingVertical: scale(10),
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.modalbuttontext }}>확인</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
    backgroundColor: '#ffffff',
  },
  sameview: {
    width: scale(330),
    backgroundColor: '#ffffff',
    elevation: 1.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  yearcarnumber: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.33,
    textAlign: 'center',
    color: '#999999',
  },
  topnumber: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(9),
    fontStyle: 'normal',
    letterSpacing: -0.27,
    textAlign: 'center',
    color: '#999999',
  },
  subtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  lefttext: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  righttext: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  seeicon: {
    width: scale(22),
    height: scale(22),
  },
  topselecttext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
  },
  subtext: {
    fontFamily: 'Roboto-Medium',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: -0.66,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  button: {
    width: '100%',
    height: scale(40),
    borderRadius: scale(10),
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
  text1: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  modalbox: {
    width: scale(280),
    backgroundColor: '#ffffff',
  },
  modalic: {
    width: scale(30),
    height: scale(30),
  },
  modaltext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  modalbuttontext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  modalsub: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(16.2),
    paddingHorizontal: scale(20),
  },
});
