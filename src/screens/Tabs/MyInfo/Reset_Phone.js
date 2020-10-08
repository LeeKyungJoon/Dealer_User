import React, { useState, useEffect, useContext } from "react";
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
import InfoContext from "../../../context/InfoContext";

export default function Reset_Phone({ route, navigation }) {
  const { state, setUserState } = useContext(InfoContext);
  const [phone, setPhone] = useState("");
  const [verify, setVerify] = useState("");
  const [checkPhone, setCheckPhone] = useState(false);
  const [checkVerify, setCheckVerify] = useState(false);
  const [resultCheck, setResultCheck] = useState(false);
  const [errorMsg1, setErrorMsg1] = useState({ msg: "", color: "transparent" });
  const [errorMsg2, setErrorMsg2] = useState({ msg: "", color: "transparent" });
  const [able, setAble] = useState(false);
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

  const _phone = (phonetext) => {
    let regExp = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+([0-9]{4}))/;
    setPhone(phonetext);
    setCountAble(false);
    if (phonetext === "") {
      setAble(false);
      setErrorMsg2({ msg: "", color: "transparent" });
    } else if (regExp.test(phonetext)) {
      console.log("폰 체크 ok");
      setAble(true);
      setErrorMsg2({ msg: "", color: "transparent" });
    } else {
      console.log("폰 체크 no");
      setAble(false);
      setErrorMsg2({ msg: "휴대전화가 맞지 않습니다.", color: "#ff0000" });
    }
  };

  const _verifyStart = async () => {
    reset();
    setCountAble(true);
    try {
      let data = await AppServer.CARDEALER_API_00006({
        user_phone: phone,
        phone_gb: "join",
        user_type: "user",
      });
      console.log("_verifyStart", data);
      if (!data.success_yn && data.msg === "bad parameter") {
        setErrorMsg2({ msg: "휴대전화가 맞지 않습니다.", color: "#ff0000" });
        setCheckPhone(false);
      } else if (data.success_yn && data.msg === "success") {
        setErrorMsg2({ msg: "", color: "transparent" });
        setCheckPhone(true);
      } else {
        setErrorMsg2({
          msg: "이미 사용중인 휴대전화입니다.",
          color: "#ff0000",
        });
        setCheckPhone(false);
      }
    } catch (error) {
      console.log("_verifyStart_NO", error);
    }
  };

  const _verify = (verifytext) => {
    setVerify(verifytext);
    if (verifytext === "") {
      setErrorMsg1({ msg: "", color: "transparent" });
      setCheckVerify(false);
      setResultCheck(false);
    } else if (verifytext.length === 4) {
      setErrorMsg1({ msg: "", color: "transparent" });
      setCheckVerify(true);
      setResultCheck(false);
    } else {
      setErrorMsg1({ msg: "인증번호가 올바르지 않습니다.", color: "#ff0000" });
      setCheckVerify(false);
    }
  };

  const _search = async () => {
    let data = await AppServer.CARDEALER_API_00006_2({
      user_phone: phone,
      phone_conf_number: verify,
    });
    console.log("_search", data);
    if (
      !data.success_yn &&
      data.msg === "휴대폰 인증코드가 일치하지 않습니다"
    ) {
      setErrorMsg1({ msg: "인증번호가 올바르지 않습니다.", color: "#ff0000" });
      setResultCheck(true);
    } else if (data.success_yn && data.msg === "success") {
      setErrorMsg1({ msg: "", color: "transparent" });
      setResultCheck(false);
      _complete();
    }
  };

  const _complete = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00010({
        user_phone: phone,
        phone_conf_number: verify,
      });
      console.log("_complete", data);
      if (data.success_yn && data.msg === "success") {
        setUserState({ ...state.info, user_phone: phone });
        navigation.goBack();
      }
    } catch (error) {
      console.log("_complete", error);
    }
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
            <View>
              <Text style={{ ...styles.subtitle, marginTop: scale(15) }}>
                휴대전화 번호 재설정
              </Text>
              <Text style={{ ...styles.subsubtitle, marginTop: scale(25) }}>
                휴대전화 번호
              </Text>
              <View style={{ ...styles.righton, marginTop: scale(9) }}>
                <TextInput
                  keyboardType={"phone-pad"}
                  style={{ ...styles.rightoninput, marginLeft: scale(15) }}
                  placeholder={"-없이 번호 입력하세요."}
                  placeholderTextColor={"#bababa"}
                  value={phone}
                  onChangeText={(text) => {
                    _phone(text);
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    _verifyStart();
                    setResetButton(true);
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
                  {resetButton && able ? (
                    <Text style={{ ...styles.rightbutton }}>인증재요청</Text>
                  ) : (
                    <Text style={{ ...styles.rightbutton }}>인증요청</Text>
                  )}
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...styles.error,
                  color: errorMsg2.color,

                  marginTop: scale(3),
                }}
              >
                {errorMsg2.msg}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: scale(50),
                }}
              >
                <Text style={{ ...styles.subsubtitle, marginRight: scale(15) }}>
                  인증번호
                </Text>
                {countAble && able ? (
                  <Text style={{ ...styles.count }}>
                    (
                    {`${time.minutes.toString()}:${time.seconds
                      .toString()
                      .padStart(2, "0")}`}
                    )
                  </Text>
                ) : null}
              </View>
              <View
                style={{
                  ...styles.righton,
                  marginTop: scale(9),
                  paddingHorizontal: scale(15),
                  borderColor: resultCheck ? "#ff0000" : "#dddddd",
                }}
              >
                <TextInput
                  autoCapitalize={"none"}
                  style={{ ...styles.rightoninput }}
                  placeholder={"인증번호를 입력하세요."}
                  placeholderTextColor={"#bababa"}
                  secureTextEntry={true}
                  value={verify}
                  onChangeText={(text) => {
                    _verify(text);
                  }}
                />
                {verify.length > 0 && resultCheck ? (
                  <TouchableOpacity
                    hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
                    style={{ position: "absolute", right: 10 }}
                    onPress={() => {
                      _verify("");
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
            </View>
            <TouchableOpacity
              disabled={checkPhone && checkVerify ? false : true}
              onPress={() => {
                _search();
              }}
              style={{
                ...styles.bottombutton,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: Platform.OS === "ios" ? 0 : scale(30),
                marginTop: scale(60),
                backgroundColor:
                  checkPhone && checkVerify ? "#001740" : "#b9b9b9",
              }}
              delayPressIn={0}
            >
              <Text style={{ ...styles.bottomtext }}>재설정하기</Text>
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
  verifybutton: {
    width: scale(59),
    height: scale(25.5),
    backgroundColor: "#565656",
  },
  verifytext: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
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
  error: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
  },
  count: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    textAlign: "left",
    color: "#005cff",
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
    paddingHorizontal: scale(15),
  },
  subsubtitle: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    textAlign: "left",
    color: "#1d1d1d",
  },
});
