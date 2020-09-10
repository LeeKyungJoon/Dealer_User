import React, { useState } from "react";
import { Header } from "react-native-elements";
import scale from "../../../common/Scale";
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
} from "react-native";

const Width = Dimensions.get("window").width;

export default function CarPerformanceCheck() {
  const [drop, setDrop] = useState(false);

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
          borderBottomWidth: 2,
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
          <Text style={{ ...styles.headercenter }}>성능점검</Text>
        }
      />

      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              width: Width,
              height: scale(403.8),
              backgroundColor: "#ffffff",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...styles.yearcarnumber,
                marginBottom: scale(2),
                marginTop: scale(15),
              }}
            >
              2017년식, 12가3456
            </Text>
            <Text style={{ ...styles.topnumber, marginBottom: scale(10) }}>
              제시번호 2020016756
            </Text>
            <Image
              style={{ width: scale(330), height: scale(300) }}
              source={require("../../../images/car_map_1.png")}
            />
          </View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <View
              style={{
                ...styles.sameview,
                marginTop: scale(20),
              }}
            >
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>변속기 종류</Text>
                <Text style={{ ...styles.righttext }}>오토</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>사용연료</Text>
                <Text style={{ ...styles.righttext }}>가솔린</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>보험유형</Text>
                <Text style={{ ...styles.righttext }}>자가보증</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>원동기 형식</Text>
                <Text style={{ ...styles.righttext }}>H</Text>
              </View>
            </View>
            <Text
              style={{
                ...styles.subtitle,
                marginTop: scale(15),
                marginBottom: scale(10),
              }}
            >
              자동차 종합상태
            </Text>
            <View style={{ ...styles.sameview }}>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>주행거리 계기상태</Text>
                <Text style={{ ...styles.righttext }}>양호</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>주행거리 상태</Text>
                <Text style={{ ...styles.righttext }}>41,571km</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>차대번호표기</Text>
                <Text style={{ ...styles.righttext }}>양호</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>튜닝</Text>
                <Text style={{ ...styles.righttext }}>없음</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>특별이력</Text>
                <Text style={{ ...styles.righttext }}>없음</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>용도변경</Text>
                <Text style={{ ...styles.righttext }}>없음</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>배출가스</Text>
                <Text style={{ ...styles.righttext }}>
                  탄화수소 : 14ppm / 일산화탄소 : 0.03%
                </Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>색상</Text>
                <Text style={{ ...styles.righttext }}>무채색</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>주요옵션</Text>
                <Text style={{ ...styles.righttext }}>없음</Text>
              </View>
            </View>
            <Text
              style={{
                ...styles.subtitle,
                marginTop: scale(15),
                marginBottom: scale(10),
              }}
            >
              사고 교환 수리 등 이력
            </Text>
            <View style={{ ...styles.sameview }}>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>사고이력</Text>
                <Text style={{ ...styles.righttext }}>없음</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>단순수리</Text>
                <Text style={{ ...styles.righttext }}>없음</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>
                  부위별 이상여부 - 외판부위 1랭크
                </Text>
                <Text style={{ ...styles.righttext }}>-</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>
                  부위별 이상여부 - 외판부위 2랭크
                </Text>
                <Text style={{ ...styles.righttext }}>-</Text>
              </View>
              <View
                style={{
                  padding: scale(15),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>
                  부위별 이상여부 - 주요골격
                </Text>
                <Text style={{ ...styles.righttext }}>-</Text>
              </View>
            </View>
            <Text
              style={{
                ...styles.subtitle,
                marginTop: scale(15),
                marginBottom: scale(10),
              }}
            >
              자동차 세부상태
            </Text>
            <View
              style={{
                ...styles.sameview,
                marginBottom: Platform.OS === "ios" ? scale(5) : scale(25),
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  drop ? setDrop(false) : setDrop(true);
                }}
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(15),
                  borderStyle: "solid",
                  borderBottomWidth: drop ? 0 : 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>자가진단</Text>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require("../../../images/see_more_icon_88.png")}
                />
              </TouchableOpacity>
              {drop ? (
                <View
                  style={{
                    borderStyle: "solid",
                    borderBottomWidth: 0.3,
                    borderColor: "#d2d2d2",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ ...styles.lefttext, padding: scale(15) }}>
                      원동기
                    </Text>
                    <Text style={{ ...styles.righttext, padding: scale(15) }}>
                      -
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ ...styles.lefttext, padding: scale(15) }}>
                      변속기
                    </Text>
                    <Text style={{ ...styles.righttext, padding: scale(15) }}>
                      -
                    </Text>
                  </View>
                </View>
              ) : null}

              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(15),
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>원동기</Text>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require("../../../images/see_more_icon_88.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(15),
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>변속기</Text>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require("../../../images/see_more_icon_88.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(15),
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>동력전달</Text>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require("../../../images/see_more_icon_88.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(15),
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>조향</Text>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require("../../../images/see_more_icon_88.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(15),
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>제동</Text>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require("../../../images/see_more_icon_88.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(15),
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>전기</Text>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require("../../../images/see_more_icon_88.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(15),
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>기타</Text>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require("../../../images/see_more_icon_88.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(15),
                  borderStyle: "solid",
                  borderBottomWidth: 0.3,
                  borderColor: "#d2d2d2",
                }}
              >
                <Text style={{ ...styles.lefttext }}>
                  특기사항 및 점검자의 의견
                </Text>
                <Image
                  style={{ ...styles.seeicon }}
                  source={require("../../../images/see_more_icon_88.png")}
                />
              </TouchableOpacity>
            </View>
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
  yearcarnumber: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: -0.33,
    textAlign: "center",
    color: "#999999",
  },
  topnumber: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(9),
    fontStyle: "normal",
    letterSpacing: -0.27,
    textAlign: "center",
    color: "#999999",
  },
  subtitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: -0.66,
    textAlign: "left",
    color: "#1d1d1d",
  },
  lefttext: {
    fontFamily: "Roboto-Medium",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: -0.66,
    textAlign: "left",
    color: "#1d1d1d",
  },
  righttext: {
    fontFamily: "Roboto-Medium",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: -0.66,
    textAlign: "left",
    color: "#1d1d1d",
  },
  seeicon: {
    width: scale(22),
    height: scale(22),
  },
});
