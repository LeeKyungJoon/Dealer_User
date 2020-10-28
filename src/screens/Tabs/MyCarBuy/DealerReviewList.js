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
import moment from 'moment';

export default function DealerReviewList({ route, navigation }) {
  const { dealer_no, review_cnt } = route.params;
  const [data, setData] = useState(null);

  const _star = (star_point, width, height) => {
    switch (star_point) {
      case '0':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '1':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '2':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '3':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '4':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_off.png')}
            />
          </View>
        );
      case '5':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
            <Image
              style={{ width: scale(width), height: scale(height) }}
              source={require('../../../images/likes_on.png')}
            />
          </View>
        );
    }
  };

  const _getReivews = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00028_2({
        dealer_no: dealer_no,
        page: 1,
        range: 30,
      });
      console.table('_getReivews', data);
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
      console.table('_getReivews', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _getReivews();
    });
    return unsubscribe;
  }, [navigation]);

  return data ? (
    <>
      <Header
        placement="left"
        backgroundColor={'#459bfe'}
        barStyle="light-content"
        statusBarProps={{
          translucent: true,
          backgroundColor: '#459bfe',
        }}
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
        centerComponent={<Text style={{ ...styles.headercenter }}>후기</Text>}
      />
      <SafeAreaView style={{ ...styles.container }}>
        <View style={{ padding: scale(25) }}>
          <View
            style={{
              ...styles.sameview,
              height: '100%',
              alignSelf: 'center',
            }}
          >
            <ScrollView
              contentContainerStyle={{
                flex: 1,
                paddingHorizontal: scale(15),
              }}
            >
              <View
                style={{
                  paddingVertical: scale(25),
                  borderStyle: 'solid',
                  borderBottomWidth: 0.3,
                  borderColor: 'rgba(112, 112, 112, 0.4)',
                }}
              >
                <Text style={{ ...styles.toptext }}>
                  총 {review_cnt}개의 후기가 있습니다
                </Text>
              </View>
              {data.review_list.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      paddingTop: scale(20),
                      paddingBottom: scale(10),
                      borderStyle: 'solid',
                      borderBottomWidth: 0.3,
                      borderColor: 'rgba(112, 112, 112, 0.4)',
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ ...styles.namecarname }}>
                        {item.user_nm}님
                      </Text>
                      <View
                        style={{
                          width: scale(0),
                          height: scale(16),
                          opacity: 0.4,
                          borderStyle: 'solid',
                          borderWidth: 0.5,
                          borderColor: '#707070',
                          marginHorizontal: scale(5),
                        }}
                      />
                      <Text style={{ ...styles.namecarname }}>
                        {item.car_nm}
                      </Text>
                    </View>
                    <Text
                      style={{
                        ...styles.reviewyear,
                        marginTop: scale(2),
                      }}
                    >
                      {moment(item.reg_dt * 1000).format('YYYY년 MM월 DD일')}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: scale(15),
                      }}
                    >
                      <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.small }}>친절도</Text>
                        {_star(item.kind_point, 16, 16)}
                      </View>
                      <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.small }}>전문성</Text>
                        {_star(item.profession_point, 16, 16)}
                      </View>
                      <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.small }}>가격만족도</Text>
                        {_star(item.price_point, 16, 16)}
                      </View>
                    </View>
                    <Text
                      style={{
                        ...styles.desc,
                        marginTop: scale(15),
                      }}
                    >
                      {item.review_desc}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  ) : (
    <SubLoading />
  );
}

const styles = StyleSheet.create({
  back: {
    width: scale(18),
    height: scale(18),
  },
  headercenter: {
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
  sameview: {
    width: scale(330),
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
  namecarname: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  reviewyear: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(9),
    fontStyle: 'normal',
    letterSpacing: -0.27,
    textAlign: 'left',
    color: '#999999',
  },
  small: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  star1: {
    width: scale(16),
    height: scale(16),
  },
  desc: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  toptext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1d1d1d',
  },
});
