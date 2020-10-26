import React, { useState, useEffect } from 'react';
import { Header } from 'react-native-elements';
import scale from '../../../common/Scale';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  FlatList,
} from 'react-native';
import AppServer from '../../../common/AppServer';
import SubLoading from '../../../common/SubLoading';
import AsyncStorage from '@react-native-community/async-storage';

const Width = Dimensions.get('window').width;

export default function SearchResult({ route, navigation }) {
  const [data, setData] = useState(null);
  const [toblist, setTopList] = useState([
    '국산차',
    '수입차',
    '전기친환경',
    '화물특장버스',
  ]);
  const [select, setSelect] = useState('국산차');

  const _select = () => {
    switch (select) {
      case '국산차':
        return data.brand_list.filter(
          (brand) => brand.category_nm === '국산차',
        );

      case '수입차':
        return data.brand_list.filter(
          (brand) => brand.category_nm === '해외차',
        );

      case '전기친환경':
        return data.brand_list.filter(
          (brand) => brand.category_nm === '전기친환경',
        );

      case '화물특장버스':
        return data.brand_list.filter(
          (brand) => brand.category_nm === '화물특장버스',
        );
    }
  };

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchResult', { result: item.brand_nm });
        }}
        delayPressIn={0}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: scale(15),
          borderBottomColor: '#e8e8e8',
          borderBottomWidth: 1,
          paddingVertical: scale(15),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            style={{ ...styles.brandimage }}
            source={{ uri: item.brand_logo }}
          />
          <Text style={{ ...styles.brandtext, marginLeft: scale(15) }}>
            {item.brand_nm}
          </Text>
        </View>
        <Text style={{ ...styles.count }}>{item.brand_cnt}</Text>
      </TouchableOpacity>
    );
  };

  const _getBrandList = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00016();
      console.log('_getBrandList>>>>>', data);
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
      console.log('_getBrandList', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      _getBrandList();
    });
    return unsubscribe;
  }, [navigation]);

  return data ? (
    <>
      <Header
        placement="left"
        backgroundColor={'#ffffff'}
        barStyle="dark-content"
        statusBarProps={{
          translucent: true,
          backgroundColor: '#ffffff',
        }}
        containerStyle={{
          borderBottomWidth: 0,
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
              style={{ ...styles.backsearchicon }}
              source={require('../../../images/back_ic_72.png')}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchCarDetail');
            }}
            delayPressIn={0}
            activeOpacity={0.5}
            style={{ width: '100%' }}
          >
            <Text style={{ ...styles.headerinput }}>브랜드, 차종명 검색</Text>
          </TouchableOpacity>
        }
        //rightComponent={
        //  <Image
        //    style={{ ...styles.backsearchicon }}
        //    source={require('../../../images/search_ic_bl_72.png')}
        //  />
        //}
      />
      <SafeAreaView style={{ ...styles.container }}>
        <View
          style={{
            ...styles.tobtab,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: scale(15),
            alignItems: 'center',
          }}
        >
          {toblist.map((item, index) => {
            return (
              <View key={index} style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => {
                    setSelect(item);
                  }}
                >
                  <Text
                    style={{
                      ...styles.toptabtext,
                      opacity: select === item ? 1 : 0.6,
                      marginBottom: scale(10),
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
                {select === item ? (
                  <View
                    style={{
                      ...styles.toptabsmallbox,
                      borderTopColor: '#459bfe',
                      marginBottom: -scale(20),
                    }}
                  />
                ) : (
                  <View
                    style={{
                      ...styles.toptabsmallbox,
                      borderTopColor: 'transparent',
                      marginBottom: -scale(20),
                    }}
                  />
                )}
              </View>
            );
          })}
        </View>
        <FlatList
          bounces={false}
          contentContainerStyle={{ marginTop: scale(5) }}
          keyExtractor={(item) => `${item.index}_${Math.random()}`}
          data={_select()}
          renderItem={_renderItem}
        />
      </SafeAreaView>
    </>
  ) : (
    <SubLoading />
  );
}

const styles = StyleSheet.create({
  backsearchicon: {
    width: scale(18),
    height: scale(18),
  },
  headerinput: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#dedede',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tobtab: {
    width: Width,
    height: scale(44),
    backgroundColor: '#459bfe',
  },
  toptabtext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  toptabsmallbox: {
    width: 0,
    height: 0,
    borderLeftWidth: scale(9),
    borderRightWidth: scale(9),
    borderTopWidth: scale(9),
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  focustab: {
    width: Width,
    height: scale(44),
    backgroundColor: '#f3f3f3',
  },
  focustabtext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
  focustabsmallbox: {
    width: 0,
    height: 0,
    borderLeftWidth: scale(9),
    borderRightWidth: scale(9),
    borderTopWidth: scale(9),
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },

  brandimage: {
    width: scale(65),
    height: scale(40),
  },
  brandtext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#222222',
  },
  count: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(12),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#999999',
  },
  likes: {
    width: scale(24),
    height: scale(24),
  },
  delete: {
    width: scale(15),
    height: scale(15),
  },
  recentlytext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(14),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#222222',
  },
});
