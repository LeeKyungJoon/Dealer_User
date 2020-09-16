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

export default function RefundAccount() {
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
                이전비를 환불 받으실 계좌번호를 입력해주세요
              </Text>
            </View>
            <Text style={{ ...styles.subtitle, marginTop: scale(25) }}>
              은행 정보
            </Text>
            <TextInput
              style={{
                ...styles.inputstyle,
                padding: 0,
                paddingLeft: scale(15),
                paddingVertical: scale(10),
                marginTop: scale(5),
              }}
              placeholder="은행명을 입력하세요 (예 : 신한)"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
            />
            <TextInput
              style={{
                ...styles.inputstyle,
                padding: 0,
                paddingLeft: scale(15),
                paddingVertical: scale(10),
                marginTop: scale(5),
              }}
              placeholder={`계좌번호를 입력하세요 ("-"없이 번호만 입력하세요.)`}
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
            />
            <Text style={{ ...styles.subtitle, marginTop: scale(25) }}>
              예금주 정보
            </Text>
            <TextInput
              style={{
                ...styles.inputstyle,
                padding: 0,
                paddingLeft: scale(15),
                paddingVertical: scale(10),
                marginTop: scale(5),
              }}
              placeholder="예금주명을 입력하세요"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
            />
            <Text style={{ ...styles.alerttext, marginTop: scale(5) }}>
              ※ 반드시 실구매자의 계좌를 입력해주세요.
            </Text>
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
            <Text style={{ ...styles.bottombuttontext }}>다음</Text>
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
  inputstyle: {
    width: scale(330),
    borderRadius: 2.5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#dddddd",
    fontFamily: "Roboto-Regular",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: -0.33,
    textAlign: "left",
    color: "#000000",
  },
  subtitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(12),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  alerttext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(9),
    fontStyle: "normal",
    letterSpacing: -0.27,
    textAlign: "left",
    color: "#000000",
  },
});
