import React, { useState, useEffect } from 'react';
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
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';
import AsyncStorage from '@react-native-community/async-storage';
import Swiper from 'react-native-swiper';
import ImageZoom from 'react-native-image-pan-zoom';

const Width = Dimensions.get('window').width;

export default function CarPerformanceCheck({ route, navigation }) {
  const [isvisible, setIsvisible] = useState(false);
  const [isvisible1, setIsvisible1] = useState(false);
  const { car_no, car_user_type } = route.params;
  const [data, setData] = useState(null);
  const [topList, setTopList] = useState(['외판', '주요 골격', '성능점검표']);
  const [selectList, setSelectList] = useState('외판');

  const _getDetailList = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00025({
        car_no: car_no,
        car_user_type: car_user_type,
      });
      console.log('_getDeatilList>>>', JSON.stringify(data));
      if (data.success_yn) {
        setData(data);
      } else if (
        !data.success_yn &&
        data.msg === '세션이 종료되어 로그인 페이지로 이동합니다.'
      ) {
        await AsyncStorage.clear();
        navigation.reset({
          routes: [{ name: 'Sign' }],
        });
      }
    } catch (error) {
      console.log('_getDeatilList>>>>>', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _getDetailList();
    });
    return unsubscribe;
  }, [navigation]);

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
              source={{ uri: data.data.accident_outside_img_url }}
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
              {data.data.accident_outside_arr.map((item, index) => {
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
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Text style={{ ...styles.subtext }}>
                        {item.code_desc}
                      </Text>
                      {item.result_value === 'null' ? null : (
                        <Text
                          style={{
                            ...styles.subtext,
                            fontSize: scale(10),
                            fontFamily: 'Roboto-Regular',
                          }}
                        >
                          {' - '}
                          {item.result_value}
                        </Text>
                      )}
                    </View>
                    {item.result_value === 'null' ? (
                      <Image
                        style={{ width: scale(17), height: scale(17) }}
                        source={require('../../../images/circle_off_ic_68.png')}
                      />
                    ) : (
                      <Image
                        style={{ width: scale(17), height: scale(17) }}
                        source={require('../../../images/circle_on_ic_68.png')}
                      />
                    )}
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
              source={{ uri: data.data.accident_base_img_url }}
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
              {data.data.accident_base_arr.map((item, index) => {
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
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Text style={{ ...styles.subtext }}>
                        {item.code_desc}
                      </Text>
                      {item.result_value === 'null' ? null : (
                        <Text
                          style={{
                            ...styles.subtext,
                            fontSize: scale(10),
                            fontFamily: 'Roboto-Regular',
                          }}
                        >
                          {' - '}
                          {item.result_value}
                        </Text>
                      )}
                    </View>
                    {item.result_value === 'null' ? (
                      <Image
                        style={{ width: scale(17), height: scale(17) }}
                        source={require('../../../images/circle_off_ic_68.png')}
                      />
                    ) : (
                      <Image
                        style={{ width: scale(17), height: scale(17) }}
                        source={require('../../../images/circle_on_ic_68.png')}
                      />
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        );
      case '성능점검표':
        return (
          <View style={{ alignSelf: 'center', alignItems: 'center' }}>
            <Swiper
              loop={false}
              height={scale(300)}
              style={{ height: scale(300), flex: 0 }}
              containerStyle={{
                height: scale(320),
                flex: 0,
              }}
              activeDotColor={'#001740'}
              dotColor={'#e9e9e9'}
              paginationStyle={{ bottom: 10 }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setIsvisible(true);
                }}
                delayPressIn={0}
              >
                <Image
                  resizeMode={'contain'}
                  style={{
                    //width: scale(330),
                    height: scale(300),
                  }}
                  source={{ uri: data.data.perform_img_1_url }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setIsvisible1(true);
                }}
                delayPressIn={0}
              >
                <Image
                  resizeMode={'contain'}
                  style={{
                    //width: scale(330),
                    height: scale(300),
                  }}
                  source={{ uri: data.data.perform_img_2_url }}
                />
              </TouchableOpacity>
            </Swiper>

            <Image
              style={{
                width: scale(25),
                height: scale(25),
                marginRight: scale(15),
                position: 'absolute',
                right: 5,
                bottom: 20,
              }}
              source={require('../../../images/view_ic_100.png')}
            />
          </View>
        );
    }
  };

  return data ? (
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
                marginBottom: scale(12),
                marginTop: scale(15),
              }}
            >
              {data.data.vehicle_year}년식, {data.data.car_number}
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
          {/*<ImageViewer
            imageUrls={data.data.perform_img_1_url}
            useNativeDriver={true}
            backgroundColor="transparent"
            renderIndicator={() => null}
            style={{
              width: '100%',
              height: scale(270),
            }}
          />*/}
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={scale(360)}
            imageHeight={scale(270)}
          >
            <Image
              useNativeDriver={true}
              style={{ width: scale(360), height: scale(265) }}
              source={{ uri: data.data.perform_img_1_url }}
            />
          </ImageZoom>
        </Modal>
        <Modal
          isVisible={isvisible1}
          onBackButtonPress={() => {
            setIsvisible1(false);
          }}
          useNativeDriver={true}
          style={{ margin: 0 }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsvisible1(false);
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
          {/*<ImageViewer
            imageUrls={data.data.perform_img_1_url}
            useNativeDriver={true}
            backgroundColor="transparent"
            renderIndicator={() => null}
            style={{
              width: '100%',
              height: scale(270),
            }}
          />*/}
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={scale(360)}
            imageHeight={scale(270)}
          >
            <Image
              useNativeDriver={true}
              style={{ width: scale(360), height: scale(265) }}
              source={{ uri: data.data.perform_img_2_url }}
            />
          </ImageZoom>
        </Modal>
      </SafeAreaView>
    </>
  ) : (
    <SubLoading />
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
