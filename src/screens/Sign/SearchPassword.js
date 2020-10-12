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
import Modal from "react-native-modal";
import AppServer from "../../common/AppServer";

export default function SearchPassword({ route, navigation }) {
  const [isvisible, setIsvisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [verify, setVerify] = useState("");
  const [errorMsg1, setErrorMsg1] = useState({ msg: "", color: "transparent" });
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

  const _open = () => {
    setIsvisible(true);
  };

  const _hide = () => {
    setIsvisible(false);
    navigation.goBack();
  };

  const _phone = (phonetext) => {
    let regExp = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+([0-9]{4}))/;
    setPhone(phonetext);
    if (phonetext === "") {
      setAble(false);
      setErrorMsg1({ msg: "", color: "transparent" });
    } else if (regExp.test(phonetext)) {
      console.log("폰 체크 ok");
      setAble(true);
      setErrorMsg1({ msg: "", color: "transparent" });
    } else {
      console.log("폰 체크 no");
      setAble(false);
      setErrorMsg1({ msg: "휴대전화가 맞지 않습니다.", color: "#ff5454" });
    }
  };

  const _verifyStart = async () => {
    reset();
    setCountAble(true);
    try {
      let data = await AppServer.CARDEALER_API_00006({
        user_phone: phone,
        phone_gb: "reset",
        user_type: "user",
      });
      console.log("_verifyStart", data);
      if (!data.success_yn && data.msg === "bad parameter") {
        setErrorMsg1({ msg: "휴대전화가 맞지 않습니다.", color: "#ff5454" });
      } else if (data.success_yn && data.msg === "success") {
        setErrorMsg1({ msg: "", color: "transparent" });
      } else {
        setErrorMsg1({
          msg: "이미 사용중인 휴대전화입니다.",
          color: "#ff5454",
        });
      }
    } catch (error) {
      console.log("_verifyStart_NO", error);
    }
  };

  const _verify = (verifytext) => {
    setVerify(verifytext);
    if (verifytext === "") {
      setErrorMsg1({ msg: "", color: "transparent" });
    } else if (verifytext.length >= 4) {
      setErrorMsg1({ msg: "", color: "transparent" });
    } else {
      setErrorMsg1({ msg: "인증번호가 맞지 않습니다.", color: "#ff5454" });
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
      setErrorMsg1({ msg: data.msg, color: "#ff5454" });
    } else if (data.success_yn && data.msg === "success")
      setErrorMsg1({ msg: "", color: "transparent" });
    _complete();
  };

  const _complete = async () => {
    try {
      let data = await AppServer.CARDEALER_API_00008({
        phone_conf_number: verify,
        user_phone: phone,
      });
      console.log("_complete", data);
      if (data.success_yn && data.msg === "success") {
        _open();
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
              source={require("../../images/back_ic_80.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={<Text style={{ ...styles.title }}>비밀번호 찾기</Text>}
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
              <View
                style={{
                  flexDirection: "row",
                  marginTop: scale(15),
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ ...styles.subtitle }}>
                  가입 휴대전화를 입력해주세요
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
              <View style={{ ...styles.righton, marginTop: scale(12) }}>
                <TextInput
                  keyboardType={"phone-pad"}
                  style={{ ...styles.rightoninput, marginLeft: scale(10) }}
                  placeholder={"01012345678"}
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
              <TextInput
                keyboardType={"number-pad"}
                style={{ ...styles.inputstyle, marginTop: scale(12) }}
                placeholder={"인증번호를 입력하세요."}
                placeholderTextColor={"#bababa"}
                value={verify}
                onChangeText={(text) => {
                  _verify(text);
                }}
              />
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
              <TouchableOpacity
                delayPressIn={0}
                style={{
                  ...styles.verifybutton,
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: scale(8),
                }}
                onPress={() => {
                  _search();
                }}
              >
                <Text style={{ ...styles.verifytext }}>찾기요청</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Modal isVisible={isvisible} style={{ alignItems: "center" }} useNativeDriver={true}>
        <View
          style={{
            ...styles.modalbox,
            padding: scale(20),
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...styles.modaltitle }}>
            이메일로 임시 비밀번호가 전송됐습니다.
          </Text>
          <TouchableOpacity
            delayPressIn={0}
            onPress={() => {
              _hide();
            }}
          >
            <Text style={{ ...styles.modalconfirm }}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  modalbox: {
    width: scale(280),
    height: scale(100),
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#707070",
  },
  modaltitle: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  modalconfirm: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#459bfe",
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
});
