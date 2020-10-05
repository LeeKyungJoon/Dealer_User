import React, { useState, useEffect } from "react";
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

export default function SignUp({ route, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [able1, setAble1] = useState(false);
  const [able3, setAble3] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkVerify, setCheckVerify] = useState(false);
  const [errorMsg1, setErrorMsg1] = useState({ msg: "", color: "transparent" });
  const [errorMsg2, setErrorMsg2] = useState({ msg: "", color: "transparent" });
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    minutes: 3,
    seconds: 0,
  });
  const [countAble, setCountAble] = useState(false);
  const [resetButton, setResetButton] = useState(false);

  const tick = () => {
    if (paused || over) return;
    if (time.minutes === 0 && time.seconds === 0) setOver(true);
    else if (time.minutes === 0 && time.seconds === 0)
      setTime({
        minutes: 59,
        seconds: 59,
      });
    else if (time.seconds === 0)
      setTime({
        minutes: time.minutes - 1,
        seconds: 59,
      });
    else
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
  };

  const reset = () => {
    setTime({
      minutes: 3,
      seconds: 0,
    });
    setPaused(false);
    setOver(false);
  };

  const _doubleClick = () => {
    setAble3(true);
    setTimeout(() => {
      setAble3(false);
    }, 3000);
  };

  const _email = (emailtext) => {
    let regExp = /@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmail(emailtext);
    if (emailtext === "") {
      setCheckEmail(false);
      setErrorMsg1({ msg: "", color: "transparent" });
    } else if (regExp.test(emailtext)) {
      console.log("이메일 형식 ok");
      setAble1(true);
      setCheckEmail(false);
    } else {
      console.log("이메일 형식 no");
      setAble1(false);
      setCheckEmail(false);
    }
  };

  const _emailcheck = async () => {
    let data = await AppServer.CARDEALER_API_00007(email);
    console.log("_emailcheck>>", data);
    if (!able1) {
      setCheckEmail(false);
      setErrorMsg1({ msg: "이메일 형식이 맞지 않습니다.", color: "#ff5454" });
    } else if (data.success_yn && data.msg === "success") {
      setCheckEmail(true);
      setErrorMsg1({ msg: "사용 가능한 이메일 주소입니다.", color: "#459bfe" });
    } else {
      setCheckEmail(false);
      setErrorMsg1({
        msg: "이미 사용중인 이메일 주소입니다.",
        color: "#ff5454",
      });
    }
  };

  const _password = (passwordtext) => {
    let regExp = /^[a-zA-Z0-9]{8,16}$/;
    setPassword(passwordtext);
    if (passwordtext === "") {
      setErrorMsg2({ msg: "", color: "transparent" });
    } else if (regExp.test(passwordtext)) {
      console.log("비밀번호 형식 ok");
      setErrorMsg2({ msg: "", color: "transparent" });
    } else {
      console.log("비밀번호 형식 no");
      setErrorMsg2({ msg: "비밀번호 형식이 맞지 않습니다.", color: "#ff5454" });
    }
  };

  const _passwordCheck = (passwordtext) => {
    setPasswordCheck(passwordtext);
    if (passwordtext === "") {
      setCheckPassword(false);
      setErrorMsg2({ msg: "", color: "transparent" });
    } else if (password === passwordtext) {
      console.log("비밀번호 체크 ok");
      setErrorMsg2({ msg: "", color: "transparent" });
      setCheckPassword(true);
    } else {
      console.log("비밀번호 체크 no");
      setErrorMsg2({ msg: "비밀번호가 맞지 않습니다.", color: "#ff5454" });
      setCheckPassword(false);
    }
  };

  const _name = (nametext) => {
    setName(nametext);
    if (nametext === "") {
      console.log("이름 체크 no");
      setCheckName(false);
    } else {
      console.log("이름 체크 ok");
      setCheckName(true);
    }
  };

  const _phone = (phonetext) => {
    let regExp = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+([0-9]{4}))/;
    if (regExp.test(phonetext)) {
    }
  };

  const _verifyStart = () => {
    reset();
    setCountAble(true);
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", async () => {
      //setPaused(!paused);
      setOver(true);
    });
    return unsubscribe;
  }, [navigation]);

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
                    _doubleClick();
                  }}
                  delayPressIn={0}
                  disabled={able3}
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
              <Text style={{ ...styles.subtitle, marginTop: scale(8.2) }}>
                비밀번호를 입력해주세요
              </Text>
              <TextInput
                autoCapitalize={"none"}
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={
                  "비밀번호를 입력하세요. (영문, 숫자 포함 8자리 이상)"
                }
                placeholderTextColor={"#bababa"}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => {
                  _password(text);
                }}
              />
              <TextInput
                autoCapitalize={"none"}
                style={{ ...styles.inputstyle, marginTop: scale(5) }}
                placeholder={"비밀번호를 확인하세요."}
                placeholderTextColor={"#bababa"}
                secureTextEntry={true}
                value={passwordCheck}
                onChangeText={(text) => {
                  _passwordCheck(text);
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
              <Text style={{ ...styles.subtitle, marginTop: scale(8.2) }}>
                이름을 입력해주세요
              </Text>
              <TextInput
                autoCapitalize={"none"}
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={"이름을 입력하세요."}
                placeholderTextColor={"#bababa"}
                value={name}
                onChangeText={(text) => {
                  _name(text);
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  marginTop: scale(25),
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ ...styles.subtitle }}>
                  휴대전화를 입력해주세요
                </Text>
                {countAble ? (
                  <Text style={{ ...styles.count }}>
                    (
                    {`${time.minutes.toString()}:${time.seconds
                      .toString()
                      .padStart(2, "0")}`}
                    )
                  </Text>
                ) : null}
              </View>
              <View style={{ ...styles.righton, marginTop: scale(12) }}>
                <TextInput
                  style={{ ...styles.rightoninput, marginLeft: scale(10) }}
                  placeholder={"01012345678"}
                  placeholderTextColor={"#bababa"}
                  keyboardType={"phone-pad"}
                  value={phone}
                  onChangeText={(text) => {
                    _phone(text);
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    _doubleClick();
                    _verifyStart();
                    setResetButton(true);
                  }}
                  delayPressIn={0}
                  disabled={able3}
                  style={{
                    width: scale(59),
                    height: scale(25.5),
                    backgroundColor: "#bbbbbb",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: scale(15),
                  }}
                >
                  {resetButton ? (
                    <Text style={{ ...styles.rightbutton }}>인증재요청</Text>
                  ) : (
                    <Text style={{ ...styles.rightbutton }}>인증요청</Text>
                  )}
                </TouchableOpacity>
              </View>
              <TextInput
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={"인증번호를 입력하세요."}
                placeholderTextColor={"#bababa"}
              />
            </View>
            <TouchableOpacity
              onPress={() => {}}
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
  error: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: -0.3,
    textAlign: "left",
  },
  count: {
    fontFamily: "Roboto-Medium",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ff5454",
  },
});
