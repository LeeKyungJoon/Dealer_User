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

export default function BuyCar() {
  const [agree, setAgree] = useState(false);
  const [agree1, setAgree1] = useState(false);

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
                필수 약관 및 환불 규정에 대해 확인 후 동의해주세요
              </Text>
            </View>
            <View style={{ alignSelf: "center", marginTop: scale(30) }}>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.box,

                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  padding: scale(10),
                }}
              >
                <Text
                  style={{ ...styles.boxtext, textDecorationLine: "underline" }}
                >
                  이용 약관 동의 (필수)
                </Text>
                <Image
                  style={{ ...styles.moreicon }}
                  source={require("../../../images/more_view_ic_72.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  agree ? setAgree(false) : setAgree(true);
                }}
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: scale(10.5),
                }}
              >
                {agree ? (
                  <Image
                    style={{ ...styles.agreeicon }}
                    source={require("../../../images/circle_on_ic_68.png")}
                  />
                ) : (
                  <Image
                    style={{ ...styles.agreeicon }}
                    source={require("../../../images/circle_off_ic_68.png")}
                  />
                )}
                <Text style={{ ...styles.agreetext, marginLeft: scale(5) }}>
                  위 내용을 확인하였으며, 약관에 동의합니다.
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.box,
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  padding: scale(10),
                  marginTop: scale(40.5),
                }}
              >
                <Text
                  style={{ ...styles.boxtext, textDecorationLine: "underline" }}
                >
                  환불 규정 동의 (필수)
                </Text>
                <Image
                  style={{ ...styles.moreicon }}
                  source={require("../../../images/more_view_ic_72.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  agree1 ? setAgree1(false) : setAgree1(true);
                }}
                delayPressIn={0}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: scale(10.5),
                }}
              >
                {agree1 ? (
                  <Image
                    style={{ ...styles.agreeicon }}
                    source={require("../../../images/circle_on_ic_68.png")}
                  />
                ) : (
                  <Image
                    style={{ ...styles.agreeicon }}
                    source={require("../../../images/circle_off_ic_68.png")}
                  />
                )}

                <Text style={{ ...styles.agreetext, marginLeft: scale(5) }}>
                  위 내용을 확인하였으며, 약관에 동의합니다.
                </Text>
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
  moreicon: {
    width: scale(18),
    height: scale(18),
  },
  logoicon: {
    width: scale(40),
    height: scale(40),
  },
  logotext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  box: {
    width: scale(280),
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
  },
  boxtext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  agreeicon: {
    width: scale(17),
    height: scale(17),
  },
  agreetext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(12),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
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
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});
