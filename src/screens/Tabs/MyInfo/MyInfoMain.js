import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import scale from "../../../common/Scale";
import { Header } from "react-native-elements";

export default function MyInfoMain() {
  return (
    <>
      <Header
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
              style={{ ...styles.search }}
              source={require("../../../images/search_ic_72.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Image
            style={{ ...styles.mainlogo }}
            source={require("../../../images/logo.png")}
          />
        }
        rightComponent={
          <TouchableOpacity
            style={{ marginRight: scale(5) }}
            delayPressIn={0}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Image
              style={{ ...styles.alert }}
              source={require("../../../images/alert_ic_72.png")}
            />
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text>내 정보</Text>
          <View style={{ alignItems: "center" }}>
            {/* <Image source={require('')}/> */}
            <View
              style={{
                width: scale(90),
                position: "relative",
                height: scale(90),
                borderRadius: 10,
                backgroundColor: "#001740",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  width: scale(30),
                  height: scale(30),
                  borderRadius: 100,
                  backgroundColor: "#b2b2b2",
                  right: -scale(15),
                  bottom: 0,
                }}
              />
            </View>
          </View>
          <Text>홍길동</Text>
          <Text>dealer_app@gmail.com</Text>
          <View/>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title_txt: {},
  desc_txt: {},
  row_view: {},
  boundary: {},
  search: {
    width: scale(18),
    height: scale(18),
  },
  mainlogo: {
    width: scale(140),
    height: scale(22),
  },
  alert: {
    width: scale(18),
    height: scale(18),
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topimage: {
    width: scale(330),
    height: scale(130),
    borderRadius: 10,
    alignSelf: "center",
  },
  wrapper: {
    flex: 0.32,
    paddingTop: scale(20),
  },
  categorytitle: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(16),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  carlist: {
    width: scale(330),
    height: scale(250),
    backgroundColor: "#ffffff",
  },
  carimage: {
    width: scale(330),
    height: scale(182.5),
  },
  premark: {
    width: scale(59),
    height: scale(59),
  },
  like: {
    width: scale(24),
    height: scale(24),
  },
  avator: {
    width: scale(50),
    height: scale(50),
  },
  price: {
    fontFamily: "NotoSans-Bold",
    fontSize: scale(13),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  carname: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(14),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1d1d1d",
  },
  carhistory: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(10),
    fontStyle: "normal",
    letterSpacing: -0.3,
    textAlign: "left",
    color: "#999999",
  },
  daypeople: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(8),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#bebebe",
  },
  preicon: {
    width: scale(20),
    height: scale(20),
  },
  pretext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(10),
    fontStyle: "normal",
    lineHeight: scale(25),
    letterSpacing: 0,
    textAlign: "right",
    color: "#1d1d1d",
  },
  onofficon: {
    width: scale(9),
    height: scale(9),
  },
  real: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(15),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#459bfe",
  },
  realcar: {
    width: scale(157.5),
    height: scale(130),
  },
  smallcarname: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(8),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#459bfe",
  },
  review: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(8),
    fontStyle: "normal",
    lineHeight: 10,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
});
