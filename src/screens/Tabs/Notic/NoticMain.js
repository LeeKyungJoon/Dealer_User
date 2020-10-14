import React, { useState, useEffect } from 'react';
import { Header } from 'react-native-elements';
import scale from '../../../common/Scale';
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
  ImageBackground,
  FlatList,
} from 'react-native';
import AppServer from '../../../common/AppServer';
import moment from 'moment';

export default function NoticMain({ route, navigation }) {
  let _page = 0;
  const [notiList, setNotiList] = useState([]);
  const [page, setPage] = useState(1);

  const _renderItem = ({ item }) => {
    console.log('>>>>>', item);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NoticDetail', { notice_no: item.notice_no });
        }}
        delayPressIn={0}
        style={{
          paddingHorizontal: scale(15),
          paddingVertical: scale(12.5),
          borderBottomColor: 'rgba(0, 0, 0, 0.1)',
          borderBottomWidth: 0.5,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ ...styles.date }}>
            {moment(item.reg_dt * 1000).format('YYYY-MM-DD')}
          </Text>
          <Image
            style={{ ...styles.detailic }}
            source={require('../../../images/in_ic_68.png')}
          />
        </View>
        <Text
          style={{ ...styles.title, width: scale(308) }}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {item.notice_title}
        </Text>
      </TouchableOpacity>
    );
  };

  const _notiList = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00013({
        page: _page + 1,
        range: 30,
      });
      if (data.success_yn) {
        if (notiList.length > 0) {
          notiList.concat(data.list);
        } else {
          setNotiList(data.list);
        }
      }
    } catch (error) {
      console.log('_notiList', error);
    }
    _page = _page + 1;
    setPage(page + 1);
  };

  useEffect(() => {
    const focus = navigation.addListener('focus', async () => {
      _page = 0;
      _notiList();
    });
    return focus;
  }, [navigation]);

  return (
    <>
      {console.log('+_+_+>>', notiList)}
      <Header
        backgroundColor={'#459bfe'}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: '#459bfe' }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
        }}
        leftComponent={
          <TouchableOpacity
            style={{ marginLeft: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.search }}
              source={require('../../../images/search_ic_72.png')}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Image
            style={{ ...styles.mainlogo }}
            source={require('../../../images/logo.png')}
          />
        }
        //rightComponent={
        //  <TouchableOpacity
        //    style={{ marginRight: scale(5) }}
        //    delayPressIn={0}
        //    hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
        //  >
        //    <Image
        //      style={{ ...styles.alert }}
        //      source={require("../../../images/alert_ic_72.png")}
        //    />
        //  </TouchableOpacity>
        //}
      />
      <SafeAreaView style={{ ...styles.container }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              padding: scale(15),
              borderBottomColor: 'rgba(0, 0, 0, 0.1)',
              borderBottomWidth: 0.5,
              backgroundColor: '#ffffff',
            }}
          >
            <Text style={{ ...styles.maintitle }}>공지사항</Text>
          </View>
          {notiList.length > 0 ? (
            <FlatList
              data={notiList}
              renderItem={_renderItem}
              keyExtractor={(item) => item.tot_cnt}
              onEndReachedThreshold={1}
              onEndReached={_notiList}
            />
          ) : null}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
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
  maintitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#1d1d1d',
  },
  date: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#459bfe',
  },
  detailic: {
    width: scale(22),
    height: scale(22),
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
});
