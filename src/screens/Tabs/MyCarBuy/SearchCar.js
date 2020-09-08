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
  FlatList,
} from "react-native";

const Width = Dimensions.get("window").width;

export default function SearchCar() {
  const [flag, setFlag] = useState(true);
  const [brandList, setBrandList] = useState([
    { image: require("../../../images/hyundai.png"), name: "현대" },
    { image: require("../../../images/jenesis.png"), name: "제네시스" },
    { image: require("../../../images/kia.png"), name: "기아" },
    { image: require("../../../images/shevore.png"), name: "쉐보레" },
  ]);

  const [recently, setRecently] = useState([
    { name: "포르쉐 뉴 카이엔" },
    { name: "포드 머스탱" },
    { name: "현대 싼타페TM" },
    { name: "포르쉐 파나메라" },
  ]);
  const [focuslist, setFocusList] = useState(["최근 검색", "즐겨찾기"]);
  const [focusSelect, setFocusSelect] = useState("최근 검색");
  const [toblist, setTopList] = useState([
    "국산차",
    "수입차",
    "전기친환경",
    "화물특장버스",
  ]);
  const [select, setSelect] = useState("국산차");

  const _renderItem = (item) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: scale(15),
          borderBottomColor: "#e8e8e8",
          borderBottomWidth: 1,
          paddingVertical: scale(15),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image style={{ ...styles.brandimage }} source={item.item.image} />
          <Text style={{ ...styles.brandtext, marginLeft: scale(15) }}>
            {item.item.name}
          </Text>
        </View>
        <Text style={{ ...styles.count }}>27,954</Text>
      </View>
    );
  };

  const _renderItem1 = (item) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: scale(15),
          borderBottomColor: "#e8e8e8",
          borderBottomWidth: 1,
          paddingVertical: scale(10),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity delayPressIn={0}>
            <Image
              style={{ ...styles.likes }}
              source={require("../../../images/likes_on.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity delayPressIn={0}>
            <Text
              style={{
                ...styles.recentlytext,
                marginLeft: scale(10),
                marginTop: scale(2),
              }}
            >
              {item.item.name}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity delayPressIn={0}>
          <Image
            style={{ ...styles.delete }}
            source={require("../../../images/delete_ic_60.png")}
          />
        </TouchableOpacity>
      </View>
    );
  };

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
            onFocus={() => {
              setFlag(false);
            }}
            onBlur={() => {
              setFlag(true);
            }}
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
        {flag ? (
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
        ) : (
          <View
            style={{
              ...styles.focustab,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: scale(15),
            }}
          >
            {focuslist.map((item, index) => {
              return (
                <View
                  key={index + Math.random()}
                  style={{ alignItems: "center", marginRight: scale(40) }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setFocusSelect(item);
                    }}
                    delayPressIn={0}
                  >
                    <Text
                      style={{
                        ...styles.focustabtext,
                        color: focusSelect === item ? "#222222" : "#b2b2b2",
                        marginBottom: scale(10),
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                  {focusSelect === item ? (
                    <View
                      style={{
                        ...styles.focustabsmallbox,
                        borderTopColor: "#f3f3f3",
                        marginBottom: -scale(20),
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        ...styles.focustabsmallbox,
                        borderTopColor: "transparent",
                        marginBottom: -scale(20),
                      }}
                    />
                  )}
                </View>
              );
            })}
          </View>
        )}
        {flag ? (
          <FlatList
            bounces={false}
            contentContainerStyle={{ marginTop: scale(5) }}
            keyExtractor={(item) => item.index}
            data={brandList}
            renderItem={_renderItem}
          />
        ) : (
          <FlatList
            bounces={false}
            contentContainerStyle={{ marginTop: scale(5) }}
            keyExtractor={(item) => item.index}
            data={recently}
            renderItem={_renderItem1}
          />
        )}
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
  focustab: {
    width: Width,
    height: scale(44),
    backgroundColor: "#f3f3f3",
  },
  focustabtext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(14),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
  },
  focustabsmallbox: {
    width: 0,
    height: 0,
    borderLeftWidth: scale(9),
    borderRightWidth: scale(9),
    borderTopWidth: scale(9),
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },

  brandimage: {
    width: scale(65),
    height: scale(40),
  },
  brandtext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(16),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#222222",
  },
  count: {
    fontFamily: "Roboto-Regular",
    fontSize: scale(12),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#999999",
  },
  likes: {
    width: scale(24),
    height: scale(24),
  },
  delete: {
    width: scale(15),
    height: scale(15),
  },
  recentlytext: {
    fontFamily: "Roboto-Bold",
    fontSize: scale(14),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#222222",
  },
});
