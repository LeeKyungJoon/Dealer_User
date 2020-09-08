import React, { useState } from "react";
import { Header } from "react-native-elements";
import scale from "../../../common/Scale";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const Width = Dimensions.get("window").width;

export default function SearchCar() {
  const [toblist, setTopList] = useState([
    "국산차",
    "수입차",
    "전기친환경",
    "화물특장버스",
  ]);
  const [select, setSelect] = useState("국산차");

  return (
    <>
      <Header
        placement="left"
        backgroundColor={"#ffffff"}
        barStyle="dark-content"
        statusBarProps={{
          translucent: true,
          backgroundColor: "#ffffff",
        }}
        containerStyle={{
          borderBottomWidth: 0,
          height: scale(80),
          paddingHorizontal: scale(15),
        }}
        leftComponent={
          <TouchableOpacity delayPressIn={0}>
            <Image
              style={{ ...styles.backsearchicon }}
              source={require("../../../images/back_ic_72.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <TextInput
            style={{ ...styles.headerinput }}
            placeholder={"브랜드, 차종명 검색"}
            placeholderTextColor="#dedede"
          />
        }
        rightComponent={
          <TouchableOpacity delayPressIn={0}>
            <Image
              style={{ ...styles.backsearchicon }}
              source={require("../../../images/search_ic_bl_72.png")}
            />
          </TouchableOpacity>
        }
      />
      <SafeAreaView style={{ ...styles.container }}>
        <View
          style={{
            ...styles.tobtab,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: scale(15),
            alignItems: "center",
          }}
        >
          {toblist.map((item, index) => {
            return (
              <View
                key={index + Math.random()}
                style={{ alignItems: "center" }}
              >
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => {
                    setSelect(item);
                  }}
                >
                  <Text
                    style={{
                      ...styles.toptabtext,
                      opacity: select === item ? 1 : 0.6,
                      marginBottom: scale(10),
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
                {select === item ? (
                  <View
                    style={{
                      ...styles.toptabsmallbox,
                      borderTopColor: "#459bfe",
                      marginBottom: -scale(20),
                    }}
                  />
                ) : (
                  <View
                    style={{
                      ...styles.toptabsmallbox,
                      borderTopColor: "transparent",
                      marginBottom: -scale(20),
                    }}
                  />
                )}
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backsearchicon: {
    width: scale(18),
    height: scale(18),
  },
  headerinput: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(16),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  tobtab: {
    width: Width,
    height: scale(44),
    backgroundColor: "#459bfe",
  },
  toptabtext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(14),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
  },
  toptabsmallbox: {
    width: 0,
    height: 0,
    borderLeftWidth: scale(9),
    borderRightWidth: scale(9),
    borderTopWidth: scale(9),
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
});
