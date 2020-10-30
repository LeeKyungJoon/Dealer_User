import React, { useState } from 'react';
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
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
LocaleConfig.locales['ko'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';

export default function DeliverySchedule({ route, navigation }) {
  const { trade_no } = route.params;
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [selected, setSelected] = useState('');
  const [hourList, setHourList] = useState([
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
  ]);
  const [minuteList, setMinuteList] = useState(['00', '30']);

  const onDayPress = (day) => {
    setSelected(day.dateString);
    setDrop(false);
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
        centerComponent={
          <Text style={{ ...styles.title }}>차량 인수 정보 입력</Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView
          style={{ paddingHorizontal: scale(15) }}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scale(30),
              }}
            >
              <Image
                style={{ ...styles.logoicon }}
                source={require('../../../images/dealer_icon_160.png')}
              />
              <Text style={{ ...styles.logotext, marginLeft: scale(5) }}>
                차량을 배송받을 일정을 입력해주세요
              </Text>
            </View>
            <Text
              style={{
                ...styles.subtitile,
                width: scale(240),
                alignSelf: 'center',
                marginTop: -scale(5),
              }}
            >
              차량을 받으실 날짜와 시간에 대한 가능여부를 알림을 통해 빠르게
              알려드립니다.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setDrop(!drop);
              }}
              delayPressIn={0}
              style={{
                ...styles.box,
                marginTop: scale(20),
                borderColor: drop ? '#0f87dd' : '#dddddd',
                borderWidth: drop ? 1 : 0.5,
              }}
            >
              <Text
                style={{
                  ...styles.lefttext,
                  color: selected ? '#000000' : '#bababa',
                }}
              >
                {selected ? selected : '날짜 선택하기'}
              </Text>
              <Image
                style={{ ...styles.righticon }}
                source={require('../../../images/calender_ic_80.png')}
              />
            </TouchableOpacity>
            {drop ? (
              <View
                style={{
                  alignSelf: 'center',
                  position: 'absolute',
                  zIndex: 1,
                  top: scale(160),
                }}
              >
                <Calendar
                  minDate={Date()}
                  monthFormat={'yyyy MMMM'}
                  style={{
                    width: scale(240),
                    borderWidth: 0.5,
                    borderColor: '#dddddd',
                  }}
                  onDayPress={onDayPress}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedColor: '#108ee9',
                      selectedTextColor: '#ffffff',
                    },
                  }}
                />
              </View>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setDrop1(!drop1);
              }}
              delayPressIn={0}
              style={{
                ...styles.box,
                marginTop: scale(15),
                borderColor: drop1 ? '#0f87dd' : '#dddddd',
                borderWidth: drop1 ? 1 : 0.5,
              }}
            >
              <Text
                style={{
                  ...styles.lefttext,
                  color: drop1 ? '#000000' : '#bababa',
                }}
              >
                시간 선택하기
              </Text>
              <Image
                style={{ ...styles.righticon }}
                source={require('../../../images/clock_ic_80.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            delayPressIn={0}
            style={{
              ...styles.bottombutton,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: scale(15),
              alignSelf: 'center',
            }}
          >
            <Text style={{ ...styles.bottombuttontext }}>예약하기</Text>
          </TouchableOpacity>
        </ScrollView>
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
    backgroundColor: '#f9f9f9',
  },
  bottombutton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: '#459bfe',
  },
  bottombuttontext: {
    fontFamily: 'Jalnan',
    fontSize: scale(15),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  logoicon: {
    width: scale(40),
    height: scale(40),
  },
  logotext: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  subtitile: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#001740',
  },
  box: {
    width: scale(240),
    borderRadius: 2.5,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    paddingVertical: scale(11.2),
    alignSelf: 'center',
  },
  righticon: {
    width: scale(20),
    height: scale(20),
  },
  lefttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(13),
    fontStyle: 'normal',
    letterSpacing: -0.39,
    textAlign: 'left',
  },
});
