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

export default function CarConfirmation() {
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
                전달 받으신 차량에 대해 인수 확정을 해주세요
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
              빠른 이전처리를 원하실 경우 인수 확정 버튼을 눌러주세요. 인수 확정
              시 3일 내 환불이 불가합니다.
            </Text>
            <TouchableOpacity
              delayPressIn={0}
              style={{
                ...styles.buttonbox,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: scale(15),
                alignSelf: "center",
                marginTop: scale(50),
              }}
            >
              <Text style={{ ...styles.buttontext }}>인수 확정</Text>
            </TouchableOpacity>
            <TouchableOpacity
              delayPressIn={0}
              style={{
                ...styles.buttonbox,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: scale(15),
                alignSelf: "center",
              }}
            >
              <Text style={{ ...styles.buttontext }}>3일 보류</Text>
            </TouchableOpacity>
            <TouchableOpacity
              delayPressIn={0}
              style={{
                ...styles.buttonbox,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: scale(15),
                alignSelf: "center",
              }}
            >
              <Text style={{ ...styles.buttontext }}>환불 요청</Text>
            </TouchableOpacity>
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
  buttonbox: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: "#459bfe",
  },
  buttontext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(15),
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
});
