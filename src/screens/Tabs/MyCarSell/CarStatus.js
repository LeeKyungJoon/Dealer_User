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

export default function CarStatus({ route, navigation }) {
  const { all, count } = route.params;
  const [list, setList] = useState(['무사고', '유사고', '모름']);
  const [list1, setList1] = useState([
    '결제 완료',
    '할부기간 남음',
    '리스기간 남음',
    '장기렌트 기간남음',
  ]);
  const [list2, setList2] = useState(['가능', '불가능']);
  const [select, setSelect] = useState('');
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');

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
        centerComponent={<Text style={{ ...styles.title }}>견적 요청</Text>}
        rightComponent={
          <Text style={{ ...styles.righttop, marginRight: scale(5) }}>
            {count} / {all}
          </Text>
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
                차량의 상태를 선택해주세요
              </Text>
            </View>
            <View
              style={{
                ...styles.sameview,
                paddingHorizontal: scale(30),
                paddingTop: scale(20),
                paddingBottom: scale(30),
                marginTop: scale(25),
                alignSelf: 'center',
              }}
            >
              <Text style={{ ...styles.subtitle }}>사고여부</Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginTop: scale(15),
                }}
              >
                {list.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setSelect(item);
                      }}
                      key={index}
                      delayPressIn={0}
                      style={{
                        ...styles.listbox,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: scale(8),
                        backgroundColor:
                          select === item ? '#459bfe' : '#ffffff',
                      }}
                    >
                      <Text
                        style={{
                          ...styles.listtext,
                          color: select === item ? '#ffffff' : '#1d1d1d',
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Text style={{ ...styles.subtitle, marginTop: scale(32.5) }}>
                결제상태
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginTop: scale(15),
                }}
              >
                {list1.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setSelect1(item);
                      }}
                      key={index}
                      delayPressIn={0}
                      style={{
                        ...styles.listbox,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: scale(8),
                        backgroundColor:
                          select1 === item ? '#459bfe' : '#ffffff',
                      }}
                    >
                      <Text
                        style={{
                          ...styles.listtext,
                          color: select1 === item ? '#ffffff' : '#1d1d1d',
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Text style={{ ...styles.subtitle, marginTop: scale(32.5) }}>
                A/S 제조사 보증
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginTop: scale(15),
                }}
              >
                {list2.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setSelect2(item);
                      }}
                      key={index}
                      delayPressIn={0}
                      style={{
                        ...styles.listbox,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: scale(8),
                        backgroundColor:
                          select2 === item ? '#459bfe' : '#ffffff',
                      }}
                    >
                      <Text
                        style={{
                          ...styles.listtext,
                          color: select2 === item ? '#ffffff' : '#1d1d1d',
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DealAddress', {
                    all: all,
                    count: count + 1,
                  });
                }}
                disabled={
                  select.length > 0 && select1.length > 0 && select2.length > 0
                    ? false
                    : true
                }
                delayPressIn={0}
                style={{
                  ...styles.button,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: scale(31.2),
                  backgroundColor:
                    select.length > 0 &&
                    select1.length > 0 &&
                    select2.length > 0
                      ? '#459bfe'
                      : 'rgba(69, 155, 254, 0.3)',
                }}
              >
                <Text style={{ ...styles.buttontext }}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  sameview: {
    width: scale(280),
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1d1d1d',
  },
  sellinput: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#707070',
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  button: {
    width: '100%',
    height: scale(40),
    borderRadius: 10,
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
  righttop: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#ffffff',
  },
  listbox: {
    width: scale(90),
    height: scale(30),

    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  listtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(10),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
  },
});
