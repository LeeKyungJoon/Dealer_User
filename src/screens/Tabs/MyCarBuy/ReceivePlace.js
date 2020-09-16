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

export default function ReceivePlace() {
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
          <View style={{ ...styles.back, marginLeft: scale(5) }} />
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
                차량을 인수받을 장소를 입력해주세요
              </Text>
            </View>
            <View
              style={{
                ...styles.sameview,
                paddingLeft: scale(10),
                paddingVertical: scale(25),
                marginTop: scale(28.8),
              }}
            >
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ ...styles.circleicon }}
                    source={require("../../../images/check_off_60.png")}
                  />
                  <View>
                    <Text style={{ ...styles.subtitle, marginLeft: scale(5) }}>
                      구매 시 입력한 주소
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    ...styles.subdesc,
                    marginLeft: scale(20),
                    marginTop: scale(5),
                  }}
                >
                  서울 서초구 잠원로 85, 505호
                </Text>
              </View>
              <View style={{ marginTop: scale(40) }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ ...styles.circleicon }}
                    source={require("../../../images/check_off_60.png")}
                  />
                  <Text style={{ ...styles.subtitle, marginLeft: scale(5) }}>
                    다른 주소 입력 (추가 비용이 발생 할 수 있습니다)
                  </Text>
                </View>
                <View style={{ marginLeft: scale(20), marginTop: scale(9.5) }}>
                  <View
                    style={{
                      ...styles.searchaddress,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextInput
                      style={{
                        ...styles.searchaddressinput,
                        width: scale(211),
                        paddingLeft: scale(6),
                        paddingBottom: 0,
                        paddingTop: 0,
                      }}
                      placeholder={"주소를 입력하세요."}
                      placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
                    />
                    <TouchableOpacity
                      delayPressIn={0}
                      style={{
                        width: scale(59),
                        height: scale(25),
                        backgroundColor: "#bbbbbb",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ ...styles.searchaddresstext }}>
                        주소검색
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      ...styles.searchaddress,
                      flexDirection: "row",
                    }}
                  >
                    <TextInput
                      style={{
                        ...styles.searchaddressinput,
                        width: scale(270),
                        paddingLeft: scale(6),
                        paddingBottom: 0,
                        paddingTop: 0,
                      }}
                      placeholder={"나머지 주소 입력"}
                      placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
                    />
                  </View>
                </View>
              </View>
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
  sameview: {
    width: scale(330),
    backgroundColor: "#ffffff",
    elevation: 1.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  circleicon: {
    width: scale(15),
    height: scale(15),
  },
  subtitle: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#999999",
  },
  subdesc: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(12),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  searchaddress: {
    width: scale(270),
    height: scale(25),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
  searchaddressinput: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  searchaddresstext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});
