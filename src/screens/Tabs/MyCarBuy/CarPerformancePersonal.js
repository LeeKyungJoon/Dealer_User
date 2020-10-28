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
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';
import AsyncStorage from '@react-native-community/async-storage';
import Swiper from 'react-native-swiper';

const Width = Dimensions.get('window').width;

export default function CarPerformancePersonal({ route, navigation }) {
  const { car_no, car_user_type } = route.params;
  const [data, setData] = useState(null);
  const [topList, setTopList] = useState(['외판', '주요 골격']);
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
                      width: `${100 / 2}%`,
                      paddingVertical: scale(12),
                      borderColor: 'rgba(0, 0, 0, 0.2)',
                      borderWidth: 1,
                      borderLeftWidth: index === 0 ? 1 : 0,
                      borderRightWidth: index === 0 ? 0 : 1,
                      borderTopLeftRadius: index === 0 ? scale(10) : 0,
                      borderTopRightRadius: index === 0 ? 0 : scale(10),
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
