import React, { useState } from 'react';
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

const Width = Dimensions.get('window').width;

export default function SearchCarDetail({ route, navigation }) {
  const [recently, setRecently] = useState([
    { name: '포르쉐 뉴 카이엔' },
    { name: '포드 머스탱' },
    { name: '현대 싼타페TM' },
    { name: '포르쉐 파나메라' },
  ]);
  const [focuslist, setFocusList] = useState(['최근 검색', '즐겨찾기']);
  const [focusSelect, setFocusSelect] = useState('최근 검색');
  const [like, setLike] = useState(false);

  const _renderItem = (item) => {
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
              like ? setLike(false) : setLike(true);
            }}
            delayPressIn={0}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            {like ? (
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
          <TouchableOpacity delayPressIn={0} style={{ width: '70%' }}>
            <Text
              style={{
                ...styles.recentlytext,
                marginLeft: scale(10),
                marginTop: scale(2),
              }}
            >
              {item.item.name}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
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
            style={{ ...styles.headerinput }}
            placeholder={'브랜드, 차종명 검색'}
            placeholderTextColor="#dedede"
          />
        }
        rightComponent={
          <TouchableOpacity delayPressIn={0}>
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
        {focusSelect === '최근 검색' ? (
          <FlatList
            bounces={false}
            contentContainerStyle={{ marginTop: scale(5) }}
            keyExtractor={(item) => item.index}
            data={recently}
            renderItem={_renderItem}
          />
        ) : null}
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
    color: '#dedede',
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
