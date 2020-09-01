import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Header } from "react-native-elements";
import scale from "../../common/Scale";

const Width = Dimensions.get("window").width;

const Height = Dimensions.get("window").height;

export default function MainScreen() {
  return (
    <>
      <Header
        backgroundColor={"#459bfe"}
        barStyle="light-content"
        statusBarProps={{ translucent: true, backgroundColor: "#459bfe" }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(0),
        }}
      />
      <SafeAreaView
        style={{
          ...styles.container,
          justifyContent: "center",
        }}
      >
        <View style={{ paddingHorizontal: scale(25) }}>
          <Image
            style={{
              ...styles.logo,
              marginBottom: scale(119.8),
              alignSelf: "center",
            }}
            source={require("../../images/logo_600.png")}
          />
          <TouchableOpacity
            style={{
              ...styles.button,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#001740",
            }}
            delayPressIn={0}
          >
            <Text
              style={{
                ...styles.buttontext,
                color: "#ffffff",
              }}
            >
              회원가입
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              marginTop: scale(15),
            }}
            delayPressIn={0}
          >
            <Text style={{ ...styles.buttontext, color: "#001740" }}>
              로그인
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: scale(23),
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              delayPressIn={0}
            >
              <Image
                style={{ ...styles.bottomicon }}
                source={require("../../images/kakaotalk_ic_72.png")}
              />
              <Text style={{ ...styles.bottomtext, marginLeft: scale(5) }}>
                kakao
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              delayPressIn={0}
            >
              <Image
                style={{ ...styles.bottomicon }}
                source={require("../../images/instagram_ic_72.png")}
              />
              <Text style={{ ...styles.bottomtext, marginLeft: scale(5) }}>
                Instagram
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              delayPressIn={0}
            >
              <Image
                style={{ ...styles.bottomicon }}
                source={require("../../images/facebook_ic_72.png")}
              />
              <Text style={{ ...styles.bottomtext, marginLeft: scale(5) }}>
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              delayPressIn={0}
            >
              <Image
                style={{ ...styles.bottomicon }}
                source={require("../../images/Left_Black_Logo.png")}
              />
              <Text style={{ ...styles.bottomtext, marginLeft: scale(5) }}>
                Apple
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#459bfe",
  },
  logo: {
    width: scale(150),
    height: scale(150),
  },
  button: {
    width: scale(310),
    height: scale(50),
    borderRadius: 10,
  },
  buttontext: {
    fontFamily: "Jalnan",
    fontSize: scale(16),
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "center",
  },
  bottomicon: {
    width: scale(18),
    height: scale(18),
  },
  bottomtext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(12.3),
    fontStyle: "normal",
    lineHeight: scale(14.8),
    letterSpacing: 0.12,
    textAlign: "left",
    color: "#ffffff",
  },
});
