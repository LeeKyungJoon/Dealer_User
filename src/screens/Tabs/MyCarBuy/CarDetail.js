import React from "react";
import { Header } from "react-native-elements";
import scale from "../../../common/Scale";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";
import { ScrollView } from "react-native-gesture-handler";

const Width = Dimensions.get("window").width;

export default function CarDetail() {
  return (
    <>
      <Header
        backgroundColor={"#ffffff"}
        barStyle="dark-content"
        statusBarProps={{
          translucent: true,
          backgroundColor: "#ffffff",
        }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
          paddingHorizontal: scale(15),
        }}
        leftComponent={
          <TouchableOpacity delayPressIn={0}>
            <Image
              style={{ ...styles.backicon }}
              source={require("../../../images/back_ic_72.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Text style={{ ...styles.headercenter }}>12가3456</Text>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <ImageBackground
            style={{ ...styles.swipe }}
            source={require("../../../images/k_7_02.png")}
          >
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                right: 5,
                top: 5,
              }}
            >
              <View
                style={{
                  ...styles.swipetop,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...styles.refund }}>3일내 환불</Text>
              </View>
              <View
                style={{
                  ...styles.swipetop,
                  marginLeft: scale(4),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...styles.refund }}>홈서비스</Text>
              </View>
            </View>
            <View
              style={{
                ...styles.swipebottom,
                position: "absolute",
                bottom: 0,
                justifyContent: "center",
              }}
            >
              <Text style={{ ...styles.price }}>2,000만원</Text>
            </View>
          </ImageBackground>
          <View
            style={{
              backgroundColor: "#ffffff",
              paddingHorizontal: scale(15),
              paddingTop: scale(10),
              paddingBottom: scale(15),
              elevation: 1.5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ ...styles.carkinds }}>기아 더뉴 K7</Text>
                <View style={{ flexDirection: "row", marginTop: scale(4) }}>
                  <Text style={{ ...styles.subcarkinds }}>2020.05.06</Text>
                  <Text style={{ ...styles.subcarkinds, marginLeft: scale(4) }}>
                    실매물 조회 완료
                  </Text>
                  <Text
                    style={{
                      ...styles.subcarkinds,
                      marginHorizontal: scale(2),
                    }}
                  >
                    {" "}
                    ·{" "}
                  </Text>
                  <Text style={{ ...styles.subcarkinds }}>경기</Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Image
                  style={{ ...styles.like }}
                  source={require("../../../images/likes_on.png")}
                />
                <Text style={{ ...styles.peoplecount, marginTop: scale(5) }}>
                  5일전 / 30명 찜
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: scale(15),
                alignItems: "center",
              }}
            >
              <Text style={{ ...styles.average }}>평균 시세</Text>
              <Text style={{ ...styles.averageprice, marginLeft: scale(30) }}>
                1,740만원 ~ 2,490만원
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <View></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backicon: {
    width: scale(18),
    height: scale(18),
  },
  headercenter: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(16),
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#1d1d1d",
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  wrapper: {
    flex: 1,
  },
  swipe: {
    width: Width,
    height: scale(200),
  },
  swipetop: {
    width: scale(60),
    height: scale(20),
    borderRadius: 25,
    backgroundColor: "#ffd619",
  },
  swipebottom: {
    width: scale(90),
    height: scale(30),
    backgroundColor: "#001740",
  },
  refund: {
    fontFamily: "NotoSans-Bold",
    fontSize: scale(9),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#001740",
  },
  price: {
    fontFamily: "NotoSans-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  carkinds: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(14),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  subcarkinds: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: -0.3,
    textAlign: "left",
    color: "#999999",
  },
  like: {
    width: scale(24),
    height: scale(24),
  },
  peoplecount: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(8),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#bebebe",
  },
  average: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: -0.45,
    textAlign: "left",
    color: "#000000",
  },
  averageprice: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: -0.45,
    textAlign: "left",
    color: "#459bfe",
  },
});
