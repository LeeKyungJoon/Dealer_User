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

export default function EnterSellsPrice() {
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
                alignItems: "center",
                marginTop: scale(30),
              }}
            >
              <Image
                style={{ ...styles.logoicon }}
                source={require("../../../images/dealer_icon_160.png")}
              />
              <Text style={{ ...styles.logotext, marginLeft: scale(5) }}>
                판매가격을 입력해주세요
              </Text>
            </View>
            <View
              style={{
                ...styles.sameview,
                paddingHorizontal: scale(20),
                paddingTop: scale(20),
                paddingBottom: scale(30),
                marginTop: scale(25),
                alignSelf: "center",
              }}
            >
              <Text style={{ ...styles.subtitle }}>판매가</Text>
              <TextInput
                style={{
                  ...styles.sellinput,
                  padding: 0,
                  margin: 0,
                  paddingHorizontal: scale(10),
                  paddingVertical: Platform.OS === "ios" ? scale(12) : scale(7),
                  marginTop: scale(10),
                }}
                placeholder={"희망 판매가를 입력하세요."}
                placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
              />
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.button,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: scale(202.5),
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
  sameview: {
    width: scale(280),
    backgroundColor: "#ffffff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  subtitle: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  sellinput: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  button: {
    width: "100%",
    height: scale(40),
    borderRadius: 10,
    backgroundColor: "rgba(69, 155, 254, 0.3)",
  },
  buttontext: {
    fontFamily: "Jalnan",
    fontSize: scale(15),
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
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
