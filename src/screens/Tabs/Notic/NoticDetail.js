import React, { useState, useEffect } from "react";
import { Header } from "react-native-elements";
import scale from "../../../common/Scale";
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
} from "react-native";
import AppServer from "../../../common/AppServer";
import moment from 'moment'

export default function NoticDetail({ route, navigation }) {
  const {notice_no} = route.params

  console.log('notice_no',notice_no)

  const [detail, setDetail] = useState(null)

  const _detail = async() => {

    try {
      let data = await AppServer.CARDEALER_API_00014({notice_no: notice_no})
    console.log('_detail',data)
    if(data.success_yn) {
      setDetail(data.data)
    } 
    } catch (error) {
      console.log('_detail', error)
    }

    
  }

  useEffect(() => {
    const focus = navigation.addListener("focus", async () => {
      _detail();
    });
    return focus;
  }, [navigation]);

  return (
    <>
      <Header
        placement="left"
        backgroundColor={"#459bfe"}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: "#459bfe" }}
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
              source={require("../../../images/back_ic_80.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={<Text style={{ ...styles.title }}>공지사항</Text>}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ ...styles.container }}>
          {detail ? <View style={{flex: 1}}>
            <View style={{paddingHorizontal: scale(15), paddingVertical: scale(10),borderBottomColor: "rgba(0, 0, 0, 0.1)",
              borderBottomWidth: 0.5,}}>
              <Text style={{...styles.date}}>{moment(detail.reg_dt*1000).format("YYYY-MM-DD")}</Text>
              <Text style={{...styles.subtitle}}>{detail.notice_title}</Text>
            </View>
            <ScrollView style={{paddingVertical: scale(25), paddingHorizontal: scale(15)}}>
              <Text style={{...styles.desc}}>{detail.notice_desc}</Text>
            </ScrollView>
          </View> : null }
          
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  back: {
    width: scale(20),
    height: scale(20),
  },
  title: {
    fontFamily: "Jalnan",
    fontSize: scale(16),
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  date: {
    fontFamily: "Roboto-Regular",
  fontSize: scale(13),
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#459bfe"

  },
  subtitle: {
    fontFamily: "Roboto-Regular",
  fontSize: scale(13),
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#1d1d1d"

  },
  desc: {
    fontFamily: "Roboto-Regular",
  fontSize: scale(11),
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#1d1d1d"

  }
});
