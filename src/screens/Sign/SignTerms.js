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
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function SignUp({ route, navigation }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const { push_key } = route.params;

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
        centerComponent={<Text style={{ ...styles.title }}>약관동의</Text>}
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
                아래 약관에 동의해주세요.
              </Text>
              <View style={{ marginTop: scale(40) }}>
                <TouchableOpacity
                  onPress={() => {
                    setCheck1(!check1);
                  }}
                  delayPressIn={0}
                  style={{
                    ...styles.touchbox,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: scale(10),
                    paddingVertical: scale(13),
                    marginTop: scale(10),
                  }}
                >
                  <View>
                    <Text style={{ ...styles.touchtitle }}>
                      위치 기반 서비스 약관 동의
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("EachTerms", {
                          title: "위치 기반 서비스 약관 동의",
                        });
                      }}
                      delayPressIn={0}
                    >
                      <Text style={{ ...styles.touchsub }}>자세히보기</Text>
                    </TouchableOpacity>
                  </View>
                  {check1 ? (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkon_ic_120.png")}
                    />
                  ) : (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkoff_ic_120.png")}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCheck2(!check2);
                  }}
                  delayPressIn={0}
                  style={{
                    ...styles.touchbox,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: scale(10),
                    paddingVertical: scale(13),
                    marginTop: scale(10),
                  }}
                >
                  <View>
                    <Text style={{ ...styles.touchtitle }}>
                      배달의딜러 이용약관 동의
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("EachTerms", {
                          title: "배달의딜러 이용약관 동의",
                        });
                      }}
                      delayPressIn={0}
                    >
                      <Text style={{ ...styles.touchsub }}>자세히보기</Text>
                    </TouchableOpacity>
                  </View>
                  {check2 ? (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkon_ic_120.png")}
                    />
                  ) : (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkoff_ic_120.png")}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCheck3(!check3);
                  }}
                  delayPressIn={0}
                  style={{
                    ...styles.touchbox,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: scale(10),
                    paddingVertical: scale(13),
                    marginTop: scale(10),
                  }}
                >
                  <View>
                    <Text style={{ ...styles.touchtitle }}>
                      배달의딜러 환불약관 동의
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("EachTerms", {
                          title: "배달의딜러 환불약관 동의",
                        });
                      }}
                      delayPressIn={0}
                    >
                      <Text style={{ ...styles.touchsub }}>자세히보기</Text>
                    </TouchableOpacity>
                  </View>
                  {check3 ? (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkon_ic_120.png")}
                    />
                  ) : (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkoff_ic_120.png")}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCheck4(!check4);
                  }}
                  delayPressIn={0}
                  style={{
                    ...styles.touchbox,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: scale(10),
                    paddingVertical: scale(13),
                    marginTop: scale(10),
                  }}
                >
                  <View>
                    <Text style={{ ...styles.touchtitle }}>
                      개인정보 수집이용 동의
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("EachTerms", {
                          title: "개인정보 수집이용 동의",
                        });
                      }}
                      delayPressIn={0}
                    >
                      <Text style={{ ...styles.touchsub }}>자세히보기</Text>
                    </TouchableOpacity>
                  </View>
                  {check4 ? (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkon_ic_120.png")}
                    />
                  ) : (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkoff_ic_120.png")}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCheck5(!check5);
                  }}
                  delayPressIn={0}
                  style={{
                    ...styles.touchbox,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: scale(10),
                    paddingVertical: scale(13),
                    marginTop: scale(10),
                  }}
                >
                  <View>
                    <Text style={{ ...styles.touchtitle }}>
                      개인정보 제3자 제공 동의 (선택)
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("EachTerms", {
                          title: "개인정보 제3자 제공 동의 (선택)",
                        });
                      }}
                      delayPressIn={0}
                    >
                      <Text style={{ ...styles.touchsub }}>자세히보기</Text>
                    </TouchableOpacity>
                  </View>
                  {check5 ? (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkon_ic_120.png")}
                    />
                  ) : (
                    <Image
                      style={{ ...styles.checkicon }}
                      source={require("../../images/checkoff_ic_120.png")}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp", { push_key: push_key });
              }}
              disabled={check1 && check2 && check3 && check4 ? false : true}
              style={{
                ...styles.bottombutton,
                backgroundColor:
                  check1 && check2 && check3 && check4 ? "#459bfe" : "#dddddd",
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
  bottombutton: {
    width: scale(330),
    height: scale(40),
    borderRadius: 10,
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
  subtitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(16),
    fontStyle: "normal",
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
    color: "#222222",
  },
  touchbox: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  checkicon: {
    width: scale(30),
    height: scale(30),
  },
  touchtitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#222222",
  },
  touchsub: {
    fontFamily: "Roboto-Medium",
    fontSize: scale(12),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#707070",
    textDecorationLine: "underline",
  },
});
