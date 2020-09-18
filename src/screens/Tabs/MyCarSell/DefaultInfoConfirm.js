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

export default function DefaultInfoConfirm() {
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
        centerComponent={<Text style={{ ...styles.title }}>견적 요청</Text>}
        rightComponent={
          <Text style={{ ...styles.righttop, marginRight: scale(5) }}>
            2 / 9
          </Text>
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
                marginTop: scale(30),
              }}
            >
              <Image
                style={{ width: scale(40), height: scale(40) }}
                source={require("../../../images/dealer_icon_160.png")}
              />
              <Text
                style={{
                  ...styles.logotext,
                  marginLeft: scale(5),
                  marginTop: scale(10),
                }}
              >
                78나9012 번호의 차량은{"\n"}
                <Text style={{ color: "#459bfe" }}>
                  토스카 2.0 DOHC 2010년식 회색
                </Text>
                {"\n"}
                차량이 맞나요?
              </Text>
            </View>
            <Image
              style={{
                width: scale(240),
                height: scale(150),
                backgroundColor: "#ffffff",
                alignSelf: "center",
                marginTop: scale(10),
              }}
              source={require("../../../images/kakao_talk_20200527_133512391.png")}
            />
            <TouchableOpacity
              delayPressIn={0}
              style={{
                ...styles.bottombutton,
                alignItems: "center",
                justifyContent: "center",
                marginTop: scale(10),
                alignSelf: "center",
              }}
            >
              <Text style={{ ...styles.bottombuttontext }}>네, 맞습니다</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                marginTop: scale(55),
              }}
            >
              <Image
                style={{ width: scale(40), height: scale(40) }}
                source={require("../../../images/dealer_icon_160.png")}
              />
              <Text
                style={{
                  ...styles.logotext,
                  marginLeft: scale(5),
                  marginTop: scale(10),
                }}
              >
                고객님은{"\n"}
                <Text style={{ color: "#459bfe" }}>홍길동</Text>
                {"\n"}
                차주 본인이 맞나요?
              </Text>
            </View>
            <TouchableOpacity
              delayPressIn={0}
              style={{
                ...styles.bottombutton,
                alignItems: "center",
                justifyContent: "center",
                marginTop: scale(40),
                alignSelf: "center",
              }}
            >
              <Text style={{ ...styles.bottombuttontext }}>네, 맞습니다</Text>
            </TouchableOpacity>
            <Text
              style={{
                ...styles.bottomtext,
                alignSelf: "center",
                marginTop: scale(6.8),
              }}
            >
              배달의 딜러는 실거래 및 정보에 대한 모든 책임이 판매자에게
              있습니다.
            </Text>
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
  logoicon: {
    width: scale(40),
    height: scale(40),
  },
  logotext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    lineHeight: scale(20),
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  bottombutton: {
    width: scale(240),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: "#459bfe",
  },
  bottombuttontext: {
    fontFamily: "Jalnan",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  bottomtext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(8),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#b2b2b2",
  },
  righttop: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#ffffff",
  },
});
