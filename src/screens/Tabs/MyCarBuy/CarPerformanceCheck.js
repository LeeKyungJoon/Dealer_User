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

export default function CarPerformanceCheck({ route, navigation }) {
  const [isvisible, setIsvisible] = useState(false);
  const [img, setImg] = useState([
    {
      url: '',
      props: { source: require('../../../images/car_map_2.png') },
    },
  ]);
  const [topList, setTopList] = useState(['외판', '주요 골격', '성능점검표']);
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
                  <View
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
                  </View>
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
                  <View
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
                  </View>
                );
              })}
            </View>
          </View>
        );
      case '성능점검표':
        return (
          <View style={{ alignSelf: 'center' }}>
            <Image
              resizeMode={'contain'}
              style={{
                width: scale(330),
                height: scale(300),
              }}
              source={img[0].props.source}
            />
            <TouchableOpacity
              onPress={() => {
                setIsvisible(true);
              }}
              delayPressIn={0}
              style={{ alignItems: 'flex-end', marginTop: -scale(20) }}
            >
              <Image
                style={{
                  width: scale(25),
                  height: scale(25),
                }}
                source={require('../../../images/view_ic_100.png')}
              />
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <>
      <Header
        backgroundColor={'#ffffff'}
        barStyle="dark-content"
        statusBarProps={{
          translucent: true,
          backgroundColor: '#ffffff',
        }}
        containerStyle={{
          borderBottomWidth: 2,
          height: scale(80),
          paddingHorizontal: scale(15),
        }}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            delayPressIn={0}
          >
            <Image
              style={{ ...styles.backicon }}
              source={require('../../../images/back_ic_72.png')}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Text style={{ ...styles.headercenter }}>성능점검</Text>
        }
      />

      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ paddingHorizontal: scale(15), marginTop: scale(15) }}>
            <View style={{ flexDirection: 'row' }}>
              {topList.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectList(item);
                    }}
                    activeOpacity={1}
                    style={{
                      width: `${100 / 3}%`,
                      paddingVertical: scale(12),
                      borderColor: 'rgba(0, 0, 0, 0.2)',
                      borderWidth: 1,
                      borderLeftWidth: index === 1 ? 0 : 1,
                      borderRightWidth: index === 1 ? 0 : 1,
                      borderTopLeftRadius: index === 0 ? scale(10) : 0,
                      borderTopRightRadius: index === 2 ? scale(10) : 0,
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
          <View
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                ...styles.yearcarnumber,
                marginBottom: scale(2),
                marginTop: scale(15),
              }}
            >
              2017년식, 12가3456
            </Text>
            <Text style={{ ...styles.topnumber, marginBottom: scale(10) }}>
              제시번호 2020016756
            </Text>
          </View>
          {_list()}
        </ScrollView>
        <Modal
          isVisible={isvisible}
          onBackButtonPress={() => {
            setIsvisible(false);
          }}
          useNativeDriver={true}
          style={{ margin: 0 }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsvisible(false);
            }}
            delayPressIn={0}
            style={{
              position: 'absolute',
              top: 40,
              right: 15,
              zIndex: 1,
            }}
            hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
          >
            <Image
              style={{ width: scale(23), height: scale(23) }}
              source={require('../../../images/close_icon_wh_88.png')}
            />
          </TouchableOpacity>
          <ImageViewer
            imageUrls={img}
            useNativeDriver={true}
            backgroundColor="transparent"
            renderIndicator={() => null}
            style={{
              width: '100%',
              height: scale(270),
            }}
          />
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backicon: {
    width: scale(18),
    height: scale(18),
  },
  headercenter: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(16),
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
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
});
