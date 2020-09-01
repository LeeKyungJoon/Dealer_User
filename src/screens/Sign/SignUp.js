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

export default function SignUp() {
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
        centerComponent={<Text style={{ ...styles.title }}>회원가입</Text>}
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
              />
              <TextInput
                style={{ ...styles.inputstyle, marginTop: scale(5) }}
                placeholder={"비밀번호를 확인하세요."}
                placeholderTextColor={"#bababa"}
              />
              <Text style={{ ...styles.subtitle, marginTop: scale(25) }}>
                이름을 입력해주세요
              </Text>
              <TextInput
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={"이름을 입력하세요."}
                placeholderTextColor={"#bababa"}
              />
              <Text style={{ ...styles.subtitle, marginTop: scale(25) }}>
                휴대전화를 입력해주세요
              </Text>
              <TextInput
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={"01012345678"}
                placeholderTextColor={"#bababa"}
              />
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
              <Text style={{ ...styles.bottomtext }}>다음</Text>
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
