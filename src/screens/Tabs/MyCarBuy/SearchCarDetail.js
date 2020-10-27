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

export default function SearchCarDetail({ route, navigation }) {
  const [focuslist, setFocusList] = useState(['최근 검색', '즐겨찾기']);
  const [focusSelect, setFocusSelect] = useState('최근 검색');
  const [searchResult, setSearchResult] = useState('');
  const [data, setData] = useState(null);

  const _searchResult = (searchresulttext) => {
    setSearchResult(searchresulttext);
  };

  const _deleteSearch = async (notext) => {
    try {
      let data = await AppServer.CARDEALER_API_00021({
        search_no: notext,
      });
      console.log('_deleteSearch>>>>', data);
      if (data.success_yn) {
        _recentlyResult();
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
      console.log('_deleteSearch>>', error);
    }
  };

  const _recentlyResult = async () => {
    let data = await AppServer.CARDEALER_API_00019({
      user_type: 'user',
    });
    console.log('_recentlyResult>>>', data);
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
  };

  const _like = async (search_no, like_yn) => {
    try {
      let data = await AppServer.CARDEALER_API_00032({
        car_no: search_no,
        like_type: 'LT_003',
        like_yn: like_yn,
      });
      console.log('_like>>>', data);
      if (data.success_yn) {
        _recentlyResult();
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
      console.log('_like>>>', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _recentlyResult();
    });
    return unsubscribe;
  }, [navigation]);

  const _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: scale(15),
          borderBottomColor: '#e8e8e8',
          borderBottomWidth: 1,
          paddingVertical: scale(10),
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              _like(item.search_no, !item.like_yn);
            }}
            delayPressIn={0}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            {item.like_yn ? (
              <Image
                style={{ ...styles.likes }}
                source={require('../../../images/likes_on.png')}
              />
            ) : (
              <Image
                style={{ ...styles.likes }}
                source={require('../../../images/likes_off.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchResult');
            }}
            delayPressIn={0}
            style={{ width: '70%' }}
          >
            <Text
              style={{
                ...styles.recentlytext,
                marginLeft: scale(10),
                marginTop: scale(2),
              }}
            >
              {item.search_text}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            _deleteSearch(item.search_no);
          }}
          delayPressIn={0}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Image
            style={{ ...styles.delete }}
            source={require('../../../images/delete_ic_60.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
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
          <TextInput
            autoCapitalize={'none'}
            style={{ ...styles.headerinput }}
            placeholder={'브랜드, 차종명 검색'}
            placeholderTextColor="#dedede"
            value={searchResult}
            onChangeText={(text) => {
              _searchResult(text);
            }}
          />
        }
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchResult', { result: searchResult });
            }}
            delayPressIn={0}
          >
            <Image
              style={{ ...styles.backsearchicon }}
              source={require('../../../images/search_ic_bl_72.png')}
            />
          </TouchableOpacity>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <View
          style={{
            ...styles.focustab,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: scale(15),
          }}
        >
          {focuslist.map((item, index) => {
            return (
              <View
                key={index}
                style={{ alignItems: 'center', marginRight: scale(40) }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setFocusSelect(item);
                  }}
                  delayPressIn={0}
                >
                  <Text
                    style={{
                      ...styles.focustabtext,
                      color: focusSelect === item ? '#222222' : '#b2b2b2',
                      marginBottom: scale(10),
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
                {focusSelect === item ? (
                  <View
                    style={{
                      ...styles.focustabsmallbox,
                      borderTopColor: '#f3f3f3',
                      marginBottom: -scale(20),
                    }}
                  />
                ) : (
                  <View
                    style={{
                      ...styles.focustabsmallbox,
                      borderTopColor: 'transparent',
                      marginBottom: -scale(20),
                    }}
                  />
                )}
              </View>
            );
          })}
        </View>
        {data ? (
          focusSelect === '최근 검색' ? (
            <FlatList
              bounces={false}
              contentContainerStyle={{ marginTop: scale(5) }}
              keyExtractor={(item) => item.no}
              data={data.list}
              renderItem={_renderItem}
            />
          ) : (
            <FlatList
              bounces={false}
              contentContainerStyle={{ marginTop: scale(5) }}
              keyExtractor={(item) => item.no}
              data={data.list.filter((like) => like.like_yn === true)}
              renderItem={_renderItem}
            />
          )
        ) : (
          <SubLoading />
        )}
      </SafeAreaView>
    </>
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
    color: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
});
