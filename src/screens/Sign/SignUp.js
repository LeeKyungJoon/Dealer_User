import React, { useState } from "react";
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
import AppServer from "../../common/AppServer";

export default function SignUp() {
  const [email, setEmail] = useState("");

  const _email = (emailtext) => {
    let regExp = /@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmail(emailtext);
    if (regExp.test(emailtext)) {
      console.log("1");
    } else {
      console.log("2");
    }
  };

  const _emailcheck = async () => {
    let data = await AppServer.CARDEALER_API_00007(email);
    console.log("----->>", data);
  };

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
              <View style={{ ...styles.righton, marginTop: scale(12) }}>
                <TextInput
                  autoCapitalize="none"
                  style={{ ...styles.rightoninput, marginLeft: scale(10) }}
                  placeholder={"이메일 주소를 입력하세요."}
                  placeholderTextColor={"#bababa"}
                  value={email}
                  onChangeText={(text) => {
                    _email(text);
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    _emailcheck();
                  }}
                  delayPressIn={0}
                  style={{
                    width: scale(59),
                    height: scale(25.5),
                    backgroundColor: "#bbbbbb",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: scale(15),
                  }}
                >
                  <Text style={{ ...styles.rightbutton }}>중복확인</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ ...styles.subtitle, marginTop: scale(25) }}>
                비밀번호를 입력해주세요
              </Text>
              <TextInput
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={"비밀번호를 입력하세요. (영문, 숫자 포함)"}
                placeholderTextColor={"#bababa"}
                secureTextEntry={true}
              />
              <TextInput
                style={{ ...styles.inputstyle, marginTop: scale(5) }}
                placeholder={"비밀번호를 확인하세요."}
                placeholderTextColor={"#bababa"}
                secureTextEntry={true}
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
              <View style={{ ...styles.righton, marginTop: scale(12) }}>
                <TextInput
                  style={{ ...styles.rightoninput, marginLeft: scale(10) }}
                  placeholder={"01012345678"}
                  placeholderTextColor={"#bababa"}
                />
                <TouchableOpacity
                  delayPressIn={0}
                  style={{
                    width: scale(59),
                    height: scale(25.5),
                    backgroundColor: "#bbbbbb",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: scale(15),
                  }}
                >
                  <Text style={{ ...styles.rightbutton }}>인증요청</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={"인증번호를 입력하세요."}
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
  righton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dddddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightoninput: {
    width: scale(200),
    backgroundColor: "#ffffff",
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: -0.39,
    textAlign: "left",
    color: "#000000",
  },
  rightbutton: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
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
