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
import Modal from "react-native-modal";

export default function DepositAccount() {
  const [drop, setDrop] = useState(false);
  const [isvisible, setIsvisible] = useState(false);

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
        centerComponent={<Text style={{ ...styles.title }}>차량 구매</Text>}
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
                구매비용 확인 후 입금 계좌를 요청해주세요
              </Text>
            </View>
            <View
              style={{
                marginTop: scale(21),
                paddingBottom: scale(20),
                borderStyle: "solid",
                borderBottomWidth: 0.3,
                borderColor: "#d2d2d2",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: scale(4),
                }}
              >
                <Text style={{ ...styles.lefttext }}>차량가격</Text>
                <Text style={{ ...styles.righttext }}>2,000만원</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: scale(4),
                }}
              >
                <Text style={{ ...styles.lefttext }}>배송료</Text>
                <Text style={{ ...styles.righttext }}>60,000원</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  drop ? setDrop(false) : setDrop(true);
                }}
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: scale(4),
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ ...styles.lefttext }}>이전등록비</Text>
                  {drop ? (
                    <Image
                      style={{ ...styles.openclose, marginLeft: scale(10) }}
                      source={require("../../../images/close_icon_48.png")}
                    />
                  ) : (
                    <Image
                      style={{ ...styles.openclose, marginLeft: scale(10) }}
                      source={require("../../../images/open_icon_48.png")}
                    />
                  )}
                </View>
                <Text style={{ ...styles.righttext }}>2,332,780원</Text>
              </TouchableOpacity>
              {drop ? (
                <View style={{ marginTop: scale(6.5) }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: scale(10),
                      paddingBottom: scale(7.5),
                      borderStyle: "solid",
                      borderBottomWidth: 0.3,
                      borderColor: "#d2d2d2",
                    }}
                  >
                    <Text style={{ ...styles.lefttext }}>취득세</Text>
                    <Text style={{ ...styles.righttext }}>
                      1,883,000원 (7%적용)
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: scale(10),
                      paddingBottom: scale(7.5),
                      borderStyle: "solid",
                      borderBottomWidth: 0.3,
                      borderColor: "#d2d2d2",
                    }}
                  >
                    <Text style={{ ...styles.lefttext }}>공채매입비</Text>
                    <Text style={{ ...styles.righttext }}>435,780원</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: scale(10),
                      paddingBottom: scale(7.5),
                      borderStyle: "solid",
                      borderBottomWidth: 0.3,
                      borderColor: "#d2d2d2",
                    }}
                  >
                    <Text style={{ ...styles.lefttext }}>증지대</Text>
                    <Text style={{ ...styles.righttext }}>1,000원</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: scale(10),
                      paddingBottom: scale(7.5),
                      borderStyle: "solid",
                      borderBottomWidth: 0.3,
                      borderColor: "#d2d2d2",
                    }}
                  >
                    <Text style={{ ...styles.lefttext }}>인지대</Text>
                    <Text style={{ ...styles.righttext }}>3,000원</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: scale(10),
                      paddingBottom: scale(7.5),
                    }}
                  >
                    <Text style={{ ...styles.lefttext }}>번호판교체비</Text>
                    <Text style={{ ...styles.righttext }}>
                      10,000원 (지역별 상이)
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
                  paddingVertical: drop ? scale(9) : scale(4),
                }}
              >
                <Text style={{ ...styles.lefttext }}>보험료</Text>
                <Text style={{ ...styles.righttext }}>조회하기 {">"}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: scale(21),
              }}
            >
              <View>
                <Text style={{ ...styles.bottomleft }}>총 구매비용</Text>
                <Text style={{ ...styles.lefttext, color: "#459bfe" }}>
                  (보험료 제외)
                </Text>
              </View>
              <Text style={{ ...styles.bottomright }}>23,232,780원</Text>
            </View>
            {/*<View
              style={{
                ...styles.bottombox,
                paddingHorizontal: scale(29),
                paddingVertical: scale(10.8),
                marginTop: scale(20),
              }}
            >
              <Text style={{ ...styles.bottomboxtext }}>
                신한 110-358-459430 예금주 : 배달의 딜러
              </Text>
            </View>*/}
          </View>
        </ScrollView>
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
          {/*<Text style={{ ...styles.bottombuttontext }}>입금계좌요청</Text>*/}
          <Text style={{ ...styles.bottombuttontext }}>입금완료</Text>
        </TouchableOpacity>
        <Modal isVisible={isvisible} style={{ alignItems: "center" }}>
          <View
            style={{
              ...styles.modalview,
              paddingHorizontal: scale(20),
              paddingVertical: scale(16),
            }}
          >
            <Text style={{ ...styles.modaltext }}>
              입금완료 요청을 하였습니다. 빠르게 확인 후 문자로
              안내해드리겠습니다.
            </Text>
            <TouchableOpacity delayPressIn={0} style={{ marginTop: scale(20) }}>
              <Text style={{ ...styles.modalbutton }}>확인</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#707070",
  },
  righttext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#000000",
  },
  openclose: {
    width: scale(12),
    height: scale(12),
  },
  bottomleft: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(11),
    fontStyle: "normal",
    letterSpacing: -0.66,
    textAlign: "left",
    color: "#459bfe",
  },
  bottomright: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(25),
    fontStyle: "normal",
    letterSpacing: -1.5,
    textAlign: "right",
    color: "#459bfe",
  },
  bottombox: {
    width: scale(330),
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
  },
  bottomboxtext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(14),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000",
  },
  modalview: {
    width: scale(280),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
  },
  modaltext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  modalbutton: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#459bfe",
  },
});
