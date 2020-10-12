import React, { useState, useEffect } from "react";
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
import AppServer from "../../../common/AppServer";

export default function Reset_Password({ route, navigation }) {
  let regExp = /^[a-zA-Z0-9]{8,20}$/;
  const [current, setCurrent] = useState("");
  const [change, setChange] = useState("");
  const [changeCheck, setChangeCheck] = useState("");
  const [checkCurrent, setCheckCurrent] = useState(false);
  const [resultCheck, setResultCheck] = useState(false);
  const [checkChange1, setCheckChange1] = useState(false);
  const [checkChange, setCheckChange] = useState(false);
  const [errorMsg1, setErrorMsg1] = useState({ msg: "", color: "transparent" });
  const [errorMsg2, setErrorMsg2] = useState({ msg: "", color: "transparent" });

  const _current = (currenttext) => {
    setCurrent(currenttext);
    if (currenttext === "") {
      setErrorMsg1({ msg: "", color: "transparent" });
      setCheckCurrent(false);
      setResultCheck(false);
    } else if (regExp.test(currenttext)) {
      console.log("비밀번호 형식 ok");
      setErrorMsg1({ msg: "", color: "transparent" });
      setCheckCurrent(true);
    } else {
      console.log("비밀번호 형식 no");
      setErrorMsg1({ msg: "비밀번호 형식이 맞지 않습니다.", color: "#ff0000" });
      setCheckCurrent(false);
    }
  };

  const _change = (passwordtext) => {
    let regExp = /^[a-zA-Z0-9]{8,20}$/;
    setChange(passwordtext);
    if (passwordtext === "") {
      setErrorMsg2({ msg: "", color: "transparent" });
      setCheckChange1(false);
    } else if (regExp.test(passwordtext)) {
      console.log("비밀번호 형식 ok");
      setErrorMsg2({ msg: "", color: "transparent" });
      setCheckChange1(true);
    } else {
      console.log("비밀번호 형식 no");
      setErrorMsg2({ msg: "비밀번호 형식이 맞지 않습니다.", color: "#ff5454" });
      setCheckChange1(false);
    }
  };

  const _changeCheck = (passwordtext) => {
    setChangeCheck(passwordtext);
    if (passwordtext === "") {
      setCheckChange(false);
      setErrorMsg2({ msg: "", color: "transparent" });
    } else if (change === passwordtext) {
      console.log("비밀번호 체크 ok");
      setErrorMsg2({ msg: "", color: "transparent" });
      setCheckChange(true);
    } else {
      console.log("비밀번호 체크 no");
      setErrorMsg2({ msg: "비밀번호가 일치하지 않습니다.", color: "#ff5454" });
      setCheckChange(false);
    }
  };

  const _changeComplete = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00009({
        user_pass: current,
        user_pass_new: changeCheck,
      });
      console.log("_changeComplete", data);

      if (!data.success_yn && data.msg === "비밀번호가 일치하지 않습니다") {
        setResultCheck(true);
        setErrorMsg1({ msg: "비밀번호가 맞지 않습니다.", color: "#ff0000" });
      } else if (data.success_yn && data.msg === "success") {
        setResultCheck(false);
        setErrorMsg1({ msg: "", color: "transparent" });
        navigation.goBack();
      }
    } catch (error) {
      console.log("_changeComplete", error);
    }
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
            onPress={() => {
              navigation.goBack();
            }}
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
        centerComponent={<Text style={{ ...styles.title }}>내정보</Text>}
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
            <View style={{ marginTop: scale(15) }}>
              <Text style={{ ...styles.subtitle }}>비밀번호 재설정</Text>
              <Text style={{ ...styles.subsubtitle, marginTop: scale(25) }}>
                현재 비밀번호
              </Text>
              <View
                style={{
                  ...styles.righton,
                  marginTop: scale(9),
                  paddingHorizontal: scale(10),
                  borderColor:
                    current.length > 0 && resultCheck ? "#ff0000" : "#dddddd",
                }}
              >
                <TextInput
                  autoCapitalize={"none"}
                  style={{ ...styles.rightoninput }}
                  placeholder={
                    "비밀번호를 입력하세요. (영문, 숫자 포함 8자리 이상)"
                  }
                  placeholderTextColor={"#bababa"}
                  secureTextEntry={true}
                  value={current}
                  onChangeText={(text) => {
                    _current(text);
                  }}
                />
                {current.length > 0 && resultCheck === true ? (
                  <TouchableOpacity
                    hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
                    style={{ position: "absolute", right: 8 }}
                    onPress={() => {
                      setCurrent("");
                      resultCheck(false);
                    }}
                    delayPressIn={0}
                  >
                    <Image
                      style={{ width: scale(20), height: scale(20) }}
                      source={require("../../../images/close_icon_80.png")}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
              <Text
                style={{
                  ...styles.error,
                  color: errorMsg1.color,
                  marginLeft: scale(10),
                  marginTop: scale(3),
                }}
              >
                {errorMsg1.msg}
              </Text>
              <Text style={{ ...styles.subsubtitle, marginTop: scale(50) }}>
                변경할 비밀번호
              </Text>
              <TextInput
                autoCapitalize={"none"}
                style={{ ...styles.inputstyle, marginTop: scale(9) }}
                placeholder={
                  "비밀번호를 입력하세요. (영문, 숫자 포함 8자리 이상)"
                }
                placeholderTextColor={"#bababa"}
                secureTextEntry={true}
                value={change}
                onChangeText={(text) => {
                  _change(text);
                }}
              />

              <TextInput
                autoCapitalize={"none"}
                style={{ ...styles.inputstyle, marginTop: scale(10) }}
                placeholder={"비밀번호를 확인하세요."}
                placeholderTextColor={"#bababa"}
                secureTextEntry={true}
                value={changeCheck}
                onChangeText={(text) => {
                  _changeCheck(text);
                }}
              />
              <Text
                style={{
                  ...styles.error,
                  color: errorMsg2.color,
                  marginLeft: scale(10),
                  marginTop: scale(3),
                }}
              >
                {errorMsg2.msg}
              </Text>
            </View>
            <TouchableOpacity
              disabled={
                checkCurrent && checkChange1 && checkChange ? false : true
              }
              onPress={() => {
                _changeComplete();
              }}
              style={{
                ...styles.bottombutton,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: Platform.OS === "ios" ? 0 : scale(30),
                marginTop: scale(60),
                backgroundColor:
                  checkCurrent && checkChange1 && checkChange
                    ? "#001740"
                    : "#b9b9b9",
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.bottomtext }}>변경하기</Text>
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
    backgroundColor: "#001740",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
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
  subsubtitle: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    textAlign: "left",
    color: "#1d1d1d",
  },
  righton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightoninput: {
    width: scale(300),
    backgroundColor: "#ffffff",
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: -0.39,
    textAlign: "left",
    color: "#000000",
  },
  error: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: -0.3,
    textAlign: "left",
  },
});
