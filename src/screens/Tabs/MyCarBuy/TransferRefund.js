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

export default function TransferRefund() {
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
        leftComponent={<View style={{ ...styles.back }} />}
        centerComponent={
          <Text style={{ ...styles.title }}>이전비 환불 입금 내역</Text>
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
                이전비 내역을 확인 후 입금확인 처리 해주세요
              </Text>
            </View>
            <View style={{ marginTop: scale(25) }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ ...styles.lefttext }}>환불 계좌</Text>
                <Text style={{ ...styles.righttext }}>신한 110358459430</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: scale(10),
                }}
              >
                <Text style={{ ...styles.lefttext }}>예금주</Text>
                <Text style={{ ...styles.righttext }}>이지수</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: scale(10),
                }}
              >
                <Text style={{ ...styles.lefttext }}>이전비 환불 금액</Text>
                <Text style={{ ...styles.righttext }}>332,780원</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: scale(25),
              }}
            >
              <View
                style={{
                  ...styles.leftbox,
                  justifyContent: "center",
                  paddingHorizontal: scale(15),
                }}
              >
                <Text style={{ ...styles.leftboxtext }}>이전된 등록증</Text>
              </View>
              <TouchableOpacity
                delayPressIn={0}
                style={{ ...styles.rightbox, justifyContent: "center" }}
              >
                <Text style={{ ...styles.rightboxtext }}>다운받기</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: scale(10),
              }}
            >
              <View
                style={{
                  ...styles.leftbox,
                  justifyContent: "center",
                  paddingHorizontal: scale(15),
                }}
              >
                <Text style={{ ...styles.leftboxtext }}>취등록세 영수증</Text>
              </View>
              <TouchableOpacity
                delayPressIn={0}
                style={{ ...styles.rightbox, justifyContent: "center" }}
              >
                <Text style={{ ...styles.rightboxtext }}>다운받기</Text>
              </TouchableOpacity>
            </View>
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
            <Text style={{ ...styles.bottombuttontext }}>등록하기</Text>
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
  lefttext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(12),

    fontStyle: "normal",

    letterSpacing: 0,
    textAlign: "left",
    color: "#707070",
  },
  righttext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(12),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#000000",
  },
  leftbox: {
    width: scale(255),
    height: scale(35),
    borderRadius: 2.5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#dddddd",
  },
  leftboxtext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: -0.33,
    textAlign: "left",
    color: "#000000",
  },
  rightbox: {
    width: scale(75),
    height: scale(35),
    backgroundColor: "#459bfe",
  },
  rightboxtext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});
