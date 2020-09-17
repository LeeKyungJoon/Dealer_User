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
  ImageBackground,
} from "react-native";
export default function MyCarSellMain() {
  return (
    <>
      <Header
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
              style={{ ...styles.search }}
              source={require("../../../images/search_ic_72.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Image
            style={{ ...styles.mainlogo }}
            source={require("../../../images/logo.png")}
          />
        }
        rightComponent={
          <TouchableOpacity
            style={{ marginRight: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.alert }}
              source={require("../../../images/alert_ic_72.png")}
            />
          </TouchableOpacity>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              paddingHorizontal: scale(15),
              paddingBottom: scale(30),
              paddingTop: scale(20),
            }}
          >
            <Image
              style={{ width: scale(330), height: scale(130) }}
              source={require("../../../images/banner.png")}
            />
            <TouchableOpacity
              delayPressIn={0}
              style={{
                ...styles.topbox,
                justifyContent: "center",
                marginTop: scale(5),
              }}
            >
              <Text style={{ ...styles.topboxtext }}>견적 요청하기</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#ffffff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: -0.5,
              },
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 2.5,
            }}
          >
            <Text
              style={{
                ...styles.real,
                paddingVertical: scale(9.2),
                paddingHorizontal: scale(15),
              }}
            >
              #내차팔기 <Text style={{ color: "#1d1d1d" }}>후기 보기</Text>
            </Text>
          </View>
          <ScrollView
            style={{ paddingHorizontal: scale(15) }}
            contentContainerStyle={{ paddingBottom: scale(15) }}
          >
            <View style={{ marginTop: scale(5) }}>
              <View
                style={{
                  marginBottom: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <View
                  style={{
                    width: scale(157.5),
                    height: scale(180),
                    backgroundColor: "#ffffff",
                    elevation: 1.5,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    borderRadius: 5,
                  }}
                >
                  <ImageBackground
                    style={{
                      ...styles.realcar,
                    }}
                    imageStyle={{
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                    source={require("../../../images/g_703.png")}
                  >
                    <Image
                      style={{
                        ...styles.premark,
                        position: "absolute",
                      }}
                      source={require("../../../images/premium.png")}
                    />
                  </ImageBackground>
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                      position: "absolute",
                      right: 4,
                      bottom: 40,
                    }}
                    source={require("../../../images/shutterstock_682551649.png")}
                  />
                  <View
                    style={{
                      paddingHorizontal: scale(4),
                      paddingVertical: scale(7),
                    }}
                  >
                    <Text style={{ ...styles.smallcarname }}>제네시스 G70</Text>
                    <Text style={{ ...styles.review }} numberOfLines={2}>
                      생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때
                      마음이 좀 싱숭생숭 했었습니다. 새 주인을 잘 만나길
                      기도합니다. 제발제발 좋게 써주세요.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: scale(157.5),
                    height: scale(180),
                    backgroundColor: "#ffffff",
                    elevation: 1.5,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    marginBottom: scale(20),
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
                    source={require("../../../images/g_703.png")}
                  ></ImageBackground>
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                      position: "absolute",
                      right: 4,
                      bottom: 40,
                    }}
                    source={require("../../../images/shutterstock_682551649.png")}
                  />
                  <View
                    style={{
                      paddingHorizontal: scale(4),
                      paddingVertical: scale(7),
                    }}
                  >
                    <Text style={{ ...styles.smallcarname }}>제네시스 G70</Text>
                    <Text style={{ ...styles.review }} numberOfLines={2}>
                      생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때
                      마음이 좀 싱숭생숭 했었습니다. 새 주인을 잘 만나길
                      기도합니다. 제발제발 좋게 써주세요.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: scale(157.5),
                    height: scale(180),
                    backgroundColor: "#ffffff",
                    elevation: 1.5,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    marginBottom: scale(20),
                  }}
                >
                  <ImageBackground
                    style={{ ...styles.realcar }}
                    source={require("../../../images/g_703.png")}
                  ></ImageBackground>
                  <Image
                    style={{
                      width: scale(30),
                      height: scale(30),
                      position: "absolute",
                      right: 4,
                      bottom: 40,
                    }}
                    source={require("../../../images/shutterstock_682551649.png")}
                  />
                  <View
                    style={{
                      paddingHorizontal: scale(4),
                      paddingVertical: scale(7),
                    }}
                  >
                    <Text style={{ ...styles.smallcarname }}>제네시스 G70</Text>
                    <Text style={{ ...styles.review }} numberOfLines={2}>
                      생에 첫 차이자 3년가 제 발이 되어준 아이라 떠나보낼 때
                      마음이 좀 싱숭생숭 했었습니다. 새 주인을 잘 만나길
                      기도합니다. 제발제발 좋게 써주세요.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    width: scale(18),
    height: scale(18),
  },
  mainlogo: {
    width: scale(140),
    height: scale(22),
  },
  alert: {
    width: scale(18),
    height: scale(18),
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  real: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#459bfe",
  },
  realcar: {
    width: scale(157.5),
    height: scale(130),
  },
  smallcarname: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(8),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#459bfe",
  },
  review: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(8),
    fontStyle: "normal",
    lineHeight: 10,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  premark: {
    width: scale(59),
    height: scale(59),
  },
  topbox: {
    width: scale(330),
    height: scale(50),
    borderRadius: 10,
    backgroundColor: "#ffbe26",
  },
  topboxtext: {
    fontFamily: "Jalnan",
    fontSize: scale(16),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});
