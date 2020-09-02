import React from "react";
import { Header } from "react-native-elements";
import scale from "../../common/Scale";
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

export default function SingIn() {
  return (
    <>
      <Header
        placement="left"
        backgroundColor={"#459bfe"}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: "#459bfe" }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(78),
        }}
        leftComponent={
          <TouchableOpacity
            style={{ marginLeft: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.back }}
              source={require("../../images/back_ic_80.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={<Text style={{ ...styles.title }}>로그인</Text>}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ ...styles.container }}>
          <ScrollView
            style={{
              paddingHorizontal: scale(15),
            }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-between",
            }}
            keyboardShouldPersistTaps="always"
          >
            <View>
              <Text style={{ ...styles.subtitle, marginTop: scale(15) }}>
                이메일 주소를 입력해주세요
              </Text>
              <TextInput
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={"이메일 주소를 입력하세요."}
                placeholderTextColor={"#bababa"}
              />
              <Text style={{ ...styles.subtitle, marginTop: scale(25) }}>
                비밀번호를 입력해주세요
              </Text>
              <TextInput
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={"비밀번호를 입력하세요. (영문, 숫자 포함)"}
                placeholderTextColor={"#bababa"}
                secureTextEntry={true}
              />
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: scale(15),
                }}
              >
                <Text style={{ ...styles.search }}>비밀번호 찾기</Text>
                <Image
                  style={{ ...styles.more }}
                  source={require("../../images/more_ic_40.png")}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                ...styles.bottombutton,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: Platform.OS === "ios" ? 0 : scale(30),
                marginTop: scale(60),
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.bottomtext }}>로그인</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
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
    backgroundColor: "#ffffff",
  },
  subtitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(16),
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "left",
    color: "#222222",
  },
  inputstyle: {
    width: scale(330),
    height: scale(40),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: -0.39,
    textAlign: "left",
    color: "#000000",
    paddingHorizontal: scale(10),
  },
  more: {
    width: scale(10),
    height: scale(10),
  },
  search: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(12),
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: -scale(0.36),
    textAlign: "left",
    color: "#459bfe",
  },
  bottombutton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: "#dddddd",
  },
  bottomtext: {
    fontFamily: "Jalnan",
    fontSize: scale(15),
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
});
