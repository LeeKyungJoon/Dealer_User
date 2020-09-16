import React, { useState } from "react";
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

export default function DeliverySchedule() {
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
            justifyContent: "space-between",
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: scale(30),
              }}
            >
              <Image
                style={{ ...styles.logoicon }}
                source={require("../../../images/dealer_icon_160.png")}
              />
              <Text style={{ ...styles.logotext, marginLeft: scale(5) }}>
                차량을 배송받을 일정을 입력해주세요
              </Text>
            </View>
            <Text
              style={{
                ...styles.subtitile,
                width: scale(240),
                alignSelf: "center",
                marginTop: -scale(5),
              }}
            >
              차량을 받으실 날짜와 시간에 대한 가능여부를 알림을 통해 빠르게
              알려드립니다.
            </Text>
            <TouchableOpacity
              delayPressIn={0}
              style={{
                ...styles.box,
                marginTop: scale(20),
              }}
            >
              <Text style={{ ...styles.lefttext }}>날짜 선택하기</Text>
              <Image
                style={{ ...styles.righticon }}
                source={require("../../../images/calender_ic_80.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              delayPressIn={0}
              style={{
                ...styles.box,
                marginTop: scale(15),
              }}
            >
              <Text style={{ ...styles.lefttext }}>시간 선택하기</Text>
              <Image
                style={{ ...styles.righticon }}
                source={require("../../../images/clock_ic_80.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            delayPressIn={0}
            style={{
              ...styles.bottombutton,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: scale(15),
              alignSelf: "center",
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
    backgroundColor: "#f9f9f9",
  },
  bottombutton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: "#459bfe",
  },
  bottombuttontext: {
    fontFamily: "Jalnan",
    fontSize: scale(15),
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  logoicon: {
    width: scale(40),
    height: scale(40),
  },
  logotext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  subtitile: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "left",
    color: "#001740",
  },
  box: {
    width: scale(240),
    borderRadius: 2.5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#dddddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(10),
    paddingVertical: scale(11.2),
    alignSelf: "center",
  },
  righticon: {
    width: scale(20),
    height: scale(20),
  },
  lefttext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: -0.39,
    textAlign: "left",
    color: "#bababa",
  },
});
